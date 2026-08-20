const PRODUCTS = (typeof PRODUCTS_DATA !== "undefined") ? PRODUCTS_DATA : ((typeof window !== "undefined" && window.PRODUCTS) ? window.PRODUCTS : []);

let state = {
  activeCategory: "Todas",
  searchQuery: "",
  sortBy: "popular",
  cart: JSON.parse(localStorage.getItem("pcm_cart")) || [],
  selectedProductForModal: null,
  currentUser: JSON.parse(localStorage.getItem("pcm_current_user")) || null
};

const CATEGORIES = [
  "Todas",
  "Tarjetas Gráficas",
  "Procesadores",
  "Memorias RAM",
  "Gabinetes",
  "Teclados",
  "Mouse",
  "Laptops"
];

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initCategories();
  initSearchAndSort();
  initCheckoutCardInteraction();
  initModals();
  initAuth();
  renderCatalog();
  updateCartBadge();
  refreshLucideIcons();
});

function refreshLucideIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function showToast(message) {
  const toast = document.getElementById("toast");
  const toastMsg = document.getElementById("toast-message");
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

function initNavigation() {
  const navBtns = document.querySelectorAll(".nav-btn");
  const brandLogo = document.getElementById("btn-brand-logo");

  function switchView(targetViewId) {
    document.querySelectorAll(".view").forEach(view => {
      view.classList.remove("active");
    });
    const targetView = document.getElementById(targetViewId);
    if (targetView) {
      targetView.classList.add("active");
    }

    navBtns.forEach(btn => {
      if (btn.dataset.target === targetViewId) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    if (targetViewId === "view-cart") {
      renderCart();
    } else if (targetViewId === "view-checkout") {
      updateCheckoutTotalBtn();
      if (state.currentUser) {
        const cardNameInput = document.getElementById("card-name");
        if (cardNameInput && !cardNameInput.value) {
          cardNameInput.value = state.currentUser.username.toUpperCase();
          cardNameInput.dispatchEvent(new Event("input"));
        }
      }
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
    refreshLucideIcons();
  }

  navBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.dataset.target) {
        switchView(btn.dataset.target);
      }
    });
  });

  if (brandLogo) {
    brandLogo.addEventListener("click", () => {
      switchView("view-catalog");
    });
  }
}

function initCategories() {
  const container = document.getElementById("categories-container");
  if (!container) return;

  container.innerHTML = "";

  CATEGORIES.forEach(cat => {
    const pill = document.createElement("button");
    pill.className = `category-pill ${cat === state.activeCategory ? "active" : ""}`;
    let iconName = "grid";

    switch (cat) {
      case "Tarjetas Gráficas": iconName = "monitor"; break;
      case "Procesadores": iconName = "cpu"; break;
      case "Memorias RAM": iconName = "hard-drive"; break;
      case "Gabinetes": iconName = "box"; break;
      case "Teclados": iconName = "keyboard"; break;
      case "Mouse": iconName = "mouse"; break;
      case "Laptops": iconName = "laptop"; break;
    }

    pill.innerHTML = `<i data-lucide="${iconName}"></i> ${cat} <span style="opacity: 0.6; font-size: 11px;">${getCategoryCount(cat)}</span>`;

    pill.addEventListener("click", () => {
      state.activeCategory = cat;
      document.querySelectorAll(".category-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      renderCatalog();
    });

    container.appendChild(pill);
  });
}

function getCategoryCount(cat) {
  if (cat === "Todas") return PRODUCTS.length;
  return PRODUCTS.filter(p => p.category === cat).length;
}

function initSearchAndSort() {
  const searchInput = document.getElementById("search-input");
  const sortSelect = document.getElementById("sort-select");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value.toLowerCase().trim();
      renderCatalog();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      state.sortBy = e.target.value;
      renderCatalog();
    });
  }
}

function renderCatalog() {
  const grid = document.getElementById("products-grid");
  const countText = document.getElementById("products-count-number");
  if (!grid) return;

  let filtered = PRODUCTS.filter(p => {
    const matchesCat = state.activeCategory === "Todas" || p.category === state.activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(state.searchQuery) ||
                          p.category.toLowerCase().includes(state.searchQuery) ||
                          p.specsMini.toLowerCase().includes(state.searchQuery);
    return matchesCat && matchesSearch;
  });

  if (state.sortBy === "price-low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (state.sortBy === "price-high") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (state.sortBy === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  } else {
    filtered.sort((a, b) => b.reviewsCount - a.reviewsCount);
  }

  if (countText) {
    countText.textContent = filtered.length;
  }

  grid.innerHTML = "";

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
        <i data-lucide="package-x" style="width: 48px; height: 48px; margin-bottom: 12px; color: var(--primary-neon);"></i>
        <h3>No se encontraron productos</h3>
        <p style="font-size: 14px; margin-top: 4px;">Intenta cambiar el término de búsqueda o selecciona otra categoría.</p>
      </div>
    `;
    refreshLucideIcons();
    return;
  }

  filtered.forEach(prod => {
    const card = document.createElement("div");
    card.className = "product-card";

    const fullStars = Math.floor(prod.rating);
    let starsHtml = "";
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        starsHtml += `<i data-lucide="star" style="width:13px; height:13px; fill: currentColor;"></i>`;
      } else {
        starsHtml += `<i data-lucide="star" style="width:13px; height:13px;"></i>`;
      }
    }

    card.innerHTML = `
      <div class="card-img-container">
        <span class="card-category-badge">${prod.category}</span>
        <img src="${prod.image}" alt="${prod.name}" loading="lazy">
      </div>
      <div class="card-body">
        <h3 class="card-title">${prod.name}</h3>
        <div class="card-rating">
          <div class="stars">${starsHtml}</div>
          <span>(${prod.reviewsCount})</span>
        </div>
        <div class="card-specs-mini">${prod.specsMini}</div>
        <div class="card-footer">
          <span class="card-price">$${prod.price.toLocaleString("en-US", { minimumFractionDigits: 2 })}</span>
          <div style="display: flex; gap: 6px;">
            <button class="btn-detail-card" title="Ver Detalle" data-id="${prod.id}">
              <i data-lucide="eye"></i>
            </button>
            <button class="btn-add-cart" data-id="${prod.id}">
              <i data-lucide="shopping-cart"></i> Agregar
            </button>
          </div>
        </div>
      </div>
    `;

    card.querySelector(".btn-add-cart").addEventListener("click", () => {
      addToCart(prod);
    });

    card.querySelector(".btn-detail-card").addEventListener("click", () => {
      openProductModal(prod);
    });

    grid.appendChild(card);
  });

  refreshLucideIcons();
}

function addToCart(product) {
  const existing = state.cart.find(item => item.id === product.id);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      qty: 1
    });
  }

  saveCart();
  updateCartBadge();
  showToast(`¡${product.name} agregado al carrito!`);
}

function saveCart() {
  localStorage.setItem("pcm_cart", JSON.stringify(state.cart));
}

function updateCartBadge() {
  const badge = document.getElementById("cart-badge-count");
  if (!badge) return;
  const totalQty = state.cart.reduce((sum, item) => sum + item.qty, 0);
  badge.textContent = totalQty;
}

function renderCart() {
  const container = document.getElementById("cart-items-container");
  const subtotalEl = document.getElementById("cart-subtotal-text");
  const totalEl = document.getElementById("cart-total-text");
  const proceedBtn = document.getElementById("btn-proceed-checkout");

  if (!container) return;

  container.innerHTML = "";

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-xl); padding: 48px 24px; text-align: center; color: var(--text-muted);">
        <i data-lucide="shopping-cart" style="width: 48px; height: 48px; color: var(--primary-neon); margin-bottom: 12px;"></i>
        <h3 style="font-size: 20px; color: var(--text-primary);">Tu carrito está vacío</h3>
        <p style="font-size: 14px; margin-top: 6px;">Explora nuestro catálogo e incluye tus componentes gamer favoritos.</p>
        <button class="btn-checkout-proceed" style="max-width: 220px; margin: 20px auto 0;" id="btn-empty-go-catalog">
          Ir al Catálogo
        </button>
      </div>
    `;
    const btnGo = document.getElementById("btn-empty-go-catalog");
    if (btnGo) {
      btnGo.addEventListener("click", () => {
        document.getElementById("btn-nav-home").click();
      });
    }

    if (subtotalEl) subtotalEl.textContent = "$0.00";
    if (totalEl) totalEl.textContent = "$0.00";
    if (proceedBtn) proceedBtn.style.display = "none";
    refreshLucideIcons();
    return;
  }

  if (proceedBtn) proceedBtn.style.display = "flex";

  let subtotal = 0;

  state.cart.forEach(item => {
    const itemTotal = item.price * item.qty;
    subtotal += itemTotal;

    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="cart-item-img">
      <div class="cart-item-info">
        <h4 class="cart-item-title">${item.name}</h4>
        <div class="cart-item-category">${item.category}</div>
        <div class="cart-item-price">$${item.price.toLocaleString("en-US", { minimumFractionDigits: 2 })} c/u</div>
      </div>
      <div class="qty-controls">
        <button class="qty-btn btn-minus" data-id="${item.id}">-</button>
        <span class="qty-val">${item.qty}</span>
        <button class="qty-btn btn-plus" data-id="${item.id}">+</button>
      </div>
      <div style="text-align: right; min-width: 90px;">
        <div style="font-weight: 800; font-size: 16px; color: var(--primary-neon);">$${itemTotal.toLocaleString("en-US", { minimumFractionDigits: 2 })}</div>
      </div>
      <button class="btn-remove-item" data-id="${item.id}" title="Eliminar del Carrito">
        <i data-lucide="trash-2"></i>
      </button>
    `;

    div.querySelector(".btn-minus").addEventListener("click", () => {
      if (item.qty > 1) {
        item.qty -= 1;
      } else {
        state.cart = state.cart.filter(i => i.id !== item.id);
      }
      saveCart();
      updateCartBadge();
      renderCart();
    });

    div.querySelector(".btn-plus").addEventListener("click", () => {
      item.qty += 1;
      saveCart();
      updateCartBadge();
      renderCart();
    });

    div.querySelector(".btn-remove-item").addEventListener("click", () => {
      state.cart = state.cart.filter(i => i.id !== item.id);
      saveCart();
      updateCartBadge();
      renderCart();
      showToast("Producto eliminado del carrito");
    });

    container.appendChild(div);
  });

  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toLocaleString("en-US", { minimumFractionDigits: 2 })}`;
  if (totalEl) totalEl.textContent = `$${subtotal.toLocaleString("en-US", { minimumFractionDigits: 2 })}`;

  if (proceedBtn) {
    proceedBtn.onclick = () => {
      document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
      document.getElementById("view-checkout").classList.add("active");
      updateCheckoutTotalBtn();
      window.scrollTo({ top: 0, behavior: "smooth" });
      refreshLucideIcons();
    };
  }

  refreshLucideIcons();
}

function updateCheckoutTotalBtn() {
  const total = state.cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
  const totalSpan = document.getElementById("checkout-btn-total");
  if (totalSpan) {
    totalSpan.textContent = total.toLocaleString("en-US", { minimumFractionDigits: 2 });
  }
}

function initCheckoutCardInteraction() {
  const cardNum = document.getElementById("card-number");
  const cardName = document.getElementById("card-name");
  const cardExpiry = document.getElementById("card-expiry");
  const cardCvv = document.getElementById("card-cvv");

  const prevNum = document.getElementById("cc-number-preview");
  const prevName = document.getElementById("cc-name-preview");
  const prevExpiry = document.getElementById("cc-expiry-preview");
  const prevCvv = document.getElementById("cc-cvv-preview");
  const creditCard3D = document.getElementById("credit-card-3d");

  if (cardNum) {
    cardNum.addEventListener("input", (e) => {
      let val = e.target.value.replace(/\D/g, "");
      let formatted = "";
      for (let i = 0; i < val.length; i++) {
        if (i > 0 && i % 4 === 0) formatted += " ";
        formatted += val[i];
      }
      e.target.value = formatted;
      prevNum.textContent = formatted || "•••• •••• •••• ••••";
    });
  }

  if (cardName) {
    cardName.addEventListener("input", (e) => {
      prevName.textContent = e.target.value.toUpperCase() || "NOMBRE COMPLETO";
    });
  }

  if (cardExpiry) {
    cardExpiry.addEventListener("input", (e) => {
      let val = e.target.value.replace(/\D/g, "");
      if (val.length >= 3) {
        val = val.substring(0, 2) + "/" + val.substring(2, 4);
      }
      e.target.value = val;
      prevExpiry.textContent = val || "MM/YY";
    });
  }

  if (cardCvv) {
    cardCvv.addEventListener("focus", () => {
      if (creditCard3D) creditCard3D.classList.add("flipped");
    });
    cardCvv.addEventListener("blur", () => {
      if (creditCard3D) creditCard3D.classList.remove("flipped");
    });
    cardCvv.addEventListener("input", (e) => {
      prevCvv.textContent = e.target.value || "•••";
    });
  }

  const btnBackCart = document.getElementById("btn-back-to-cart");
  if (btnBackCart) {
    btnBackCart.addEventListener("click", () => {
      document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
      document.getElementById("view-cart").classList.add("active");
      refreshLucideIcons();
    });
  }

  const checkoutForm = document.getElementById("checkout-form");
  if (checkoutForm) {
    checkoutForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (state.cart.length === 0) {
        showToast("Tu carrito está vacío.");
        return;
      }

      const total = state.cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
      const randomTx = "PCM-" + Math.floor(100000 + Math.random() * 900000);
      const today = new Date().toLocaleDateString("es-EC");

      document.getElementById("receipt-id").textContent = `#${randomTx}`;
      document.getElementById("receipt-date").textContent = today;
      document.getElementById("receipt-total").textContent = `$${total.toLocaleString("en-US", { minimumFractionDigits: 2 })}`;

      state.cart = [];
      saveCart();
      updateCartBadge();

      const receiptModal = document.getElementById("receipt-modal");
      if (receiptModal) receiptModal.classList.add("active");
      refreshLucideIcons();
    });
  }
}

function initModals() {
  const detailModal = document.getElementById("detail-modal");
  const btnCloseDetail = document.getElementById("btn-close-detail-modal");

  if (btnCloseDetail && detailModal) {
    btnCloseDetail.addEventListener("click", () => {
      detailModal.classList.remove("active");
    });
    detailModal.addEventListener("click", (e) => {
      if (e.target === detailModal) detailModal.classList.remove("active");
    });
  }

  const receiptModal = document.getElementById("receipt-modal");
  const btnCloseReceipt = document.getElementById("btn-close-receipt");

  if (btnCloseReceipt && receiptModal) {
    btnCloseReceipt.addEventListener("click", () => {
      receiptModal.classList.remove("active");
      document.getElementById("btn-nav-home").click();
    });
  }
}

function openProductModal(prod) {
  state.selectedProductForModal = prod;
  const modal = document.getElementById("detail-modal");
  if (!modal) return;

  document.getElementById("modal-product-title").textContent = prod.name;
  document.getElementById("modal-product-img").src = prod.image;
  document.getElementById("modal-product-category").textContent = prod.category;
  document.getElementById("modal-product-price").textContent = `$${prod.price.toLocaleString("en-US", { minimumFractionDigits: 2 })}`;
  document.getElementById("modal-product-stock").textContent = prod.stock;
  document.getElementById("modal-product-desc").textContent = prod.description;

  const ratingBox = document.getElementById("modal-product-rating");
  const fullStars = Math.floor(prod.rating);
  let starsHtml = "";
  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      starsHtml += `<i data-lucide="star" style="width:14px; height:14px; fill: currentColor;"></i>`;
    } else {
      starsHtml += `<i data-lucide="star" style="width:14px; height:14px;"></i>`;
    }
  }
  ratingBox.innerHTML = `<div class="stars">${starsHtml}</div> <span>${prod.rating} (${prod.reviewsCount} opiniones)</span>`;

  const specsTable = document.getElementById("modal-specs-table");
  specsTable.innerHTML = "";
  Object.entries(prod.specs).forEach(([key, val]) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${key}</td><td>${val}</td>`;
    specsTable.appendChild(tr);
  });

  const modalAddBtn = document.getElementById("modal-btn-add-cart");
  modalAddBtn.onclick = () => {
    addToCart(prod);
    modal.classList.remove("active");
  };

  modal.classList.add("active");
  refreshLucideIcons();
}

// ----------------------------------------------------
// AUTENTICACIÓN Y PERSISTENCIA DE CUENTAS
// ----------------------------------------------------
function getStoredUsersDB() {
  return JSON.parse(localStorage.getItem("pcm_users_db")) || [];
}

function saveStoredUsersDB(users) {
  localStorage.setItem("pcm_users_db", JSON.stringify(users));
}

function renderHeaderAuth() {
  const container = document.getElementById("auth-header-container");
  if (!container) return;

  if (state.currentUser) {
    container.innerHTML = `
      <div class="user-logged-badge" id="user-profile-badge">
        <i data-lucide="user-check"></i>
        <span id="header-username-text">${state.currentUser.username}</span>
        <button class="btn-logout-header" id="btn-logout" title="Cerrar Sesión">
          <i data-lucide="log-out"></i>
        </button>
      </div>
    `;
    const btnLogout = document.getElementById("btn-logout");
    if (btnLogout) {
      btnLogout.addEventListener("click", logoutUser);
    }
  } else {
    container.innerHTML = `
      <button class="nav-btn" id="btn-open-auth-modal">
        <i data-lucide="user"></i> Iniciar Sesión
      </button>
    `;
    const btnOpen = document.getElementById("btn-open-auth-modal");
    if (btnOpen) {
      btnOpen.addEventListener("click", () => {
        openAuthModal("login");
      });
    }
  }
  refreshLucideIcons();
}

function openAuthModal(defaultTab = "login") {
  const modal = document.getElementById("auth-modal");
  if (!modal) return;

  switchAuthTab(defaultTab);
  modal.classList.add("active");
  refreshLucideIcons();
}

function closeAuthModal() {
  const modal = document.getElementById("auth-modal");
  if (modal) modal.classList.remove("active");
}

function switchAuthTab(tab) {
  const tabLogin = document.getElementById("tab-btn-login");
  const tabRegister = document.getElementById("tab-btn-register");
  const formLogin = document.getElementById("login-form");
  const formRegister = document.getElementById("register-form");
  const title = document.getElementById("auth-modal-title");

  if (tab === "login") {
    if (tabLogin) tabLogin.classList.add("active");
    if (tabRegister) tabRegister.classList.remove("active");
    if (formLogin) formLogin.style.display = "block";
    if (formRegister) formRegister.style.display = "none";
    if (title) title.textContent = "¡Hola de nuevo!";
  } else {
    if (tabRegister) tabRegister.classList.add("active");
    if (tabLogin) tabLogin.classList.remove("active");
    if (formRegister) formRegister.style.display = "block";
    if (formLogin) formLogin.style.display = "none";
    if (title) title.textContent = "Crear nueva cuenta";
  }
}

async function handleLogin(username, password) {
  const cleanUsername = username.trim();
  if (!cleanUsername || !password) {
    showToast("Por favor completa todos los campos");
    return;
  }

  try {
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "login", username: cleanUsername, password: password })
    });
    const data = await res.json();

    if (res.ok && data.success) {
      setCurrentUser(data.user);
      closeAuthModal();
      showToast(`¡Bienvenido de nuevo, ${data.user.username}!`);
      return;
    } else if (res.status === 401 || res.status === 400) {
      showToast(data.error || "Usuario o contraseña incorrectos");
      return;
    }
  } catch (err) {
    console.log("Servidor API no disponible, verificando base de datos local:", err);
  }

  const localUsers = getStoredUsersDB();
  const found = localUsers.find(
    u => u.username.toLowerCase() === cleanUsername.toLowerCase() && u.password === password
  );

  if (found) {
    setCurrentUser({ username: found.username });
    closeAuthModal();
    showToast(`¡Bienvenido de nuevo, ${found.username}!`);
  } else {
    showToast("Nombre de usuario o contraseña incorrectos");
  }
}

async function handleRegister(username, password, confirmPassword) {
  const cleanUsername = username.trim();
  if (!cleanUsername || !password) {
    showToast("Completa el nombre de usuario y contraseña");
    return;
  }

  if (password !== confirmPassword) {
    showToast("Las contraseñas no coinciden");
    return;
  }

  if (password.length < 4) {
    showToast("La contraseña debe tener al menos 4 caracteres");
    return;
  }

  try {
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "register", username: cleanUsername, password: password })
    });
    const data = await res.json();

    if (res.ok && data.success) {
      const localUsers = getStoredUsersDB();
      if (!localUsers.some(u => u.username.toLowerCase() === cleanUsername.toLowerCase())) {
        localUsers.push({ username: cleanUsername, password: password, createdAt: new Date().toISOString() });
        saveStoredUsersDB(localUsers);
      }

      setCurrentUser(data.user);
      closeAuthModal();
      showToast(`¡Cuenta creada con éxito! Hola ${data.user.username}`);
      return;
    } else if (res.status === 400) {
      showToast(data.error || "El nombre de usuario ya existe");
      return;
    }
  } catch (err) {
    console.log("Servidor API fallback a base de datos local:", err);
  }

  const localUsers = getStoredUsersDB();
  if (localUsers.some(u => u.username.toLowerCase() === cleanUsername.toLowerCase())) {
    showToast("El nombre de usuario ya existe. Intenta otro.");
    return;
  }

  const newUser = { username: cleanUsername, password: password, createdAt: new Date().toISOString() };
  localUsers.push(newUser);
  saveStoredUsersDB(localUsers);

  setCurrentUser({ username: cleanUsername });
  closeAuthModal();
  showToast(`¡Cuenta creada con éxito! Hola ${cleanUsername}`);
}

function setCurrentUser(user) {
  state.currentUser = user;
  if (user) {
    localStorage.setItem("pcm_current_user", JSON.stringify(user));
  } else {
    localStorage.removeItem("pcm_current_user");
  }
  renderHeaderAuth();
}

function logoutUser() {
  setCurrentUser(null);
  showToast("Sesión cerrada correctamente");
}

function initAuth() {
  state.currentUser = JSON.parse(localStorage.getItem("pcm_current_user")) || null;
  renderHeaderAuth();

  const tabLogin = document.getElementById("tab-btn-login");
  const tabRegister = document.getElementById("tab-btn-register");
  const linkToRegister = document.getElementById("link-to-register");
  const linkToLogin = document.getElementById("link-to-login");
  const btnCloseModal = document.getElementById("btn-close-auth-modal");
  const modal = document.getElementById("auth-modal");

  if (tabLogin) tabLogin.addEventListener("click", () => switchAuthTab("login"));
  if (tabRegister) tabRegister.addEventListener("click", () => switchAuthTab("register"));
  if (linkToRegister) linkToRegister.addEventListener("click", (e) => { e.preventDefault(); switchAuthTab("register"); });
  if (linkToLogin) linkToLogin.addEventListener("click", (e) => { e.preventDefault(); switchAuthTab("login"); });
  if (btnCloseModal) btnCloseModal.addEventListener("click", closeAuthModal);
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeAuthModal();
    });
  }

  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const u = document.getElementById("login-username").value;
      const p = document.getElementById("login-password").value;
      handleLogin(u, p);
    });
  }

  const registerForm = document.getElementById("register-form");
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const u = document.getElementById("register-username").value;
      const p = document.getElementById("register-password").value;
      const c = document.getElementById("register-confirm").value;
      handleRegister(u, p, c);
    });
  }
}
