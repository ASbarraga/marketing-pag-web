let state = {
  activeCategory: "Todas",
  searchQuery: "",
  sortBy: "popular",
  cart: JSON.parse(localStorage.getItem("pcm_cart")) || [],
  selectedProductForModal: null
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
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
    refreshLucideIcons();
  }

  navBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      switchView(btn.dataset.target);
    });
  });

  if (brandLogo) {
    brandLogo.addEventListener("click", () => {
      switchView("view-catalog");
    });
  }

  const btnBackCart = document.getElementById("btn-back-to-cart");
  if (btnBackCart) {
    btnBackCart.addEventListener("click", () => {
      switchView("view-cart");
    });
  }

  const btnProceedCheckout = document.getElementById("btn-proceed-checkout");
  if (btnProceedCheckout) {
    btnProceedCheckout.addEventListener("click", () => {
      if (state.cart.length === 0) {
        showToast("Tu carrito está vacío. Agrega productos para proceder al pago.");
        return;
      }
      switchView("view-checkout");
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
    
    const count = cat === "Todas" ? PRODUCTS_DATA.length : PRODUCTS_DATA.filter(p => p.category === cat).length;
    
    pill.innerHTML = `<span>${cat}</span> <span style="font-size: 11px; opacity: 0.8; background: rgba(0,0,0,0.2); padding: 2px 6px; border-radius: 10px;">${count}</span>`;

    pill.addEventListener("click", () => {
      state.activeCategory = cat;
      document.querySelectorAll(".category-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      renderCatalog();
    });

    container.appendChild(pill);
  });
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

function getFilteredProducts() {
  return PRODUCTS_DATA.filter(prod => {
    const matchesCategory = state.activeCategory === "Todas" || prod.category === state.activeCategory;
    const matchesSearch = prod.name.toLowerCase().includes(state.searchQuery) ||
                          prod.category.toLowerCase().includes(state.searchQuery) ||
                          prod.description.toLowerCase().includes(state.searchQuery);
    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    if (state.sortBy === "price-low") return a.price - b.price;
    if (state.sortBy === "price-high") return b.price - a.price;
    if (state.sortBy === "rating") return b.rating - a.rating;
    return b.reviewsCount - a.reviewsCount;
  });
}

function renderCatalog() {
  const grid = document.getElementById("products-grid");
  const countNum = document.getElementById("products-count-number");
  if (!grid) return;

  const products = getFilteredProducts();
  if (countNum) countNum.textContent = products.length;

  if (products.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: var(--bg-card); border-radius: var(--radius-xl); border: 1px dashed var(--border-color);">
        <i data-lucide="package-search" style="width: 48px; height: 48px; color: var(--primary-neon); margin-bottom: 12px;"></i>
        <h3 style="font-size: 20px; font-weight: 700; margin-bottom: 6px;">No se encontraron productos</h3>
        <p style="color: var(--text-muted); font-size: 14px;">Intenta cambiar los términos de búsqueda o seleccionar otra categoría.</p>
      </div>
    `;
    refreshLucideIcons();
    return;
  }

  grid.innerHTML = "";

  products.forEach(prod => {
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

    const firstSpec = Object.entries(prod.specs)[0];
    const specPreview = firstSpec ? `${firstSpec[0]}: ${firstSpec[1]}` : "";

    card.innerHTML = `
      <div class="card-img-container">
        <span class="card-category-badge">${prod.category}</span>
        <img src="${prod.image}" alt="${prod.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=800'">
      </div>
      <div class="card-body">
        <h3 class="card-title" title="${prod.name}">${prod.name}</h3>
        <div class="card-rating">
          <div class="stars">${starsHtml}</div>
          <span>${prod.rating} (${prod.reviewsCount})</span>
        </div>
        <div class="card-specs-mini">
          <i data-lucide="cpu" style="width: 12px; height: 12px; vertical-align: middle; color: var(--primary-neon);"></i> ${specPreview}
        </div>
        <div class="card-footer">
          <div class="card-price">$${prod.price.toLocaleString("en-US", { minimumFractionDigits: 2 })}</div>
          <div style="display: flex; gap: 8px;">
            <button class="btn-detail-card" title="Ver detalles del producto">
              <i data-lucide="eye" style="width: 16px; height: 16px;"></i>
            </button>
            <button class="btn-add-cart">
              <i data-lucide="plus" style="width: 16px; height: 16px;"></i> Agregar
            </button>
          </div>
        </div>
      </div>
    `;

    card.querySelector(".btn-add-cart").addEventListener("click", (e) => {
      e.stopPropagation();
      addToCart(prod);
    });

    card.querySelector(".btn-detail-card").addEventListener("click", (e) => {
      e.stopPropagation();
      openProductModal(prod);
    });

    card.addEventListener("click", () => {
      openProductModal(prod);
    });

    grid.appendChild(card);
  });

  refreshLucideIcons();
}

function addToCart(product) {
  const existingIndex = state.cart.findIndex(item => item.product.id === product.id);

  if (existingIndex > -1) {
    state.cart[existingIndex].quantity += 1;
  } else {
    state.cart.push({ product, quantity: 1 });
  }

  saveCart();
  updateCartBadge();
  showToast(`¡${product.name} agregado al carrito!`);
}

function removeFromCart(productId) {
  state.cart = state.cart.filter(item => item.product.id !== productId);
  saveCart();
  updateCartBadge();
  renderCart();
  showToast("Producto eliminado del carrito.");
}

function updateCartQuantity(productId, delta) {
  const item = state.cart.find(i => i.product.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(productId);
    return;
  }

  saveCart();
  updateCartBadge();
  renderCart();
}

function saveCart() {
  localStorage.setItem("pcm_cart", JSON.stringify(state.cart));
}

function updateCartBadge() {
  const badge = document.getElementById("cart-badge-count");
  if (!badge) return;

  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  badge.textContent = totalItems;
}

function calculateCartTotals() {
  const subtotal = state.cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  return {
    subtotal,
    shipping: 0,
    total: subtotal
  };
}

function renderCart() {
  const container = document.getElementById("cart-items-container");
  const subtotalText = document.getElementById("cart-subtotal-text");
  const totalText = document.getElementById("cart-total-text");
  if (!container) return;

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 60px 20px; background: var(--bg-card); border-radius: var(--radius-xl); border: 1px dashed var(--border-color);">
        <i data-lucide="shopping-cart" style="width: 48px; height: 48px; color: var(--primary-neon); margin-bottom: 12px;"></i>
        <h3 style="font-size: 20px; font-weight: 700; margin-bottom: 6px;">Tu carrito está vacío</h3>
        <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 20px;">Explora nuestras 7 categorías de tecnología y agrega tus componentes favoritos.</p>
        <button class="nav-btn btn-cart-nav" onclick="document.getElementById('btn-nav-home').click()" style="margin: 0 auto; display: inline-flex;">
          Ir al Catálogo
        </button>
      </div>
    `;
    if (subtotalText) subtotalText.textContent = "$0.00";
    if (totalText) totalText.textContent = "$0.00";
    refreshLucideIcons();
    return;
  }

  container.innerHTML = "";

  state.cart.forEach(item => {
    const row = document.createElement("div");
    row.className = "cart-item";

    const itemTotal = (item.product.price * item.quantity).toLocaleString("en-US", { minimumFractionDigits: 2 });

    row.innerHTML = `
      <img src="${item.product.image}" alt="${item.product.name}" class="cart-item-img" onerror="this.src='https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=800'">
      <div class="cart-item-info">
        <div class="cart-item-category">${item.product.category}</div>
        <h4 class="cart-item-title">${item.product.name}</h4>
        <div class="cart-item-price">$${item.product.price.toLocaleString("en-US", { minimumFractionDigits: 2 })} c/u</div>
      </div>
      <div class="qty-controls">
        <button class="qty-btn btn-qty-minus"><i data-lucide="minus" style="width: 14px; height: 14px;"></i></button>
        <span class="qty-val">${item.quantity}</span>
        <button class="qty-btn btn-qty-plus"><i data-lucide="plus" style="width: 14px; height: 14px;"></i></button>
      </div>
      <div style="text-align: right; min-width: 90px;">
        <div style="font-size: 16px; font-weight: 800; color: var(--primary-neon);">$${itemTotal}</div>
      </div>
      <button class="btn-remove-item" title="Eliminar ítem">
        <i data-lucide="trash-2" style="width: 18px; height: 18px;"></i>
      </button>
    `;

    row.querySelector(".btn-qty-minus").addEventListener("click", () => updateCartQuantity(item.product.id, -1));
    row.querySelector(".btn-qty-plus").addEventListener("click", () => updateCartQuantity(item.product.id, 1));
    row.querySelector(".btn-remove-item").addEventListener("click", () => removeFromCart(item.product.id));

    container.appendChild(row);
  });

  const totals = calculateCartTotals();
  if (subtotalText) subtotalText.textContent = `$${totals.subtotal.toLocaleString("en-US", { minimumFractionDigits: 2 })}`;
  if (totalText) totalText.textContent = `$${totals.total.toLocaleString("en-US", { minimumFractionDigits: 2 })}`;

  refreshLucideIcons();
}

function updateCheckoutTotalBtn() {
  const totals = calculateCartTotals();
  const btnTotal = document.getElementById("checkout-btn-total");
  if (btnTotal) {
    btnTotal.textContent = totals.total.toLocaleString("en-US", { minimumFractionDigits: 2 });
  }
}

function initCheckoutCardInteraction() {
  const card3d = document.getElementById("credit-card-3d");
  const inputNumber = document.getElementById("card-number");
  const inputName = document.getElementById("card-name");
  const inputExpiry = document.getElementById("card-expiry");
  const inputCvv = document.getElementById("card-cvv");

  const previewNumber = document.getElementById("cc-number-preview");
  const previewName = document.getElementById("cc-name-preview");
  const previewExpiry = document.getElementById("cc-expiry-preview");
  const previewCvv = document.getElementById("cc-cvv-preview");

  const form = document.getElementById("checkout-form");

  if (inputNumber) {
    inputNumber.addEventListener("input", (e) => {
      let value = e.target.value.replace(/\D/g, "");
      value = value.substring(0, 16);
      let formatted = value.match(/.{1,4}/g)?.join(" ") || "";
      e.target.value = formatted;
      if (previewNumber) previewNumber.textContent = formatted || "•••• •••• •••• ••••";
    });
  }

  if (inputName) {
    inputName.addEventListener("input", (e) => {
      let value = e.target.value.toUpperCase();
      if (previewName) previewName.textContent = value || "NOMBRE COMPLETO";
    });
  }

  if (inputExpiry) {
    inputExpiry.addEventListener("input", (e) => {
      let value = e.target.value.replace(/\D/g, "").substring(0, 4);
      if (value.length >= 3) {
        value = value.substring(0, 2) + "/" + value.substring(2);
      }
      e.target.value = value;
      if (previewExpiry) previewExpiry.textContent = value || "MM/YY";
    });
  }

  if (inputCvv) {
    inputCvv.addEventListener("focus", () => {
      if (card3d) card3d.classList.add("flipped");
    });
    inputCvv.addEventListener("blur", () => {
      if (card3d) card3d.classList.remove("flipped");
    });
    inputCvv.addEventListener("input", (e) => {
      let value = e.target.value.replace(/\D/g, "").substring(0, 4);
      e.target.value = value;
      if (previewCvv) previewCvv.textContent = "•".repeat(value.length) || "•••";
    });
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (state.cart.length === 0) {
        showToast("Tu carrito está vacío.");
        return;
      }

      const submitBtn = document.getElementById("btn-submit-payment");
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<i data-lucide="loader-2" class="spin" style="width:18px; height:18px;"></i> Procesando Pago...`;
        refreshLucideIcons();
      }

      setTimeout(() => {
        const totals = calculateCartTotals();
        const randomReceiptId = "#PCM-" + Math.floor(100000 + Math.random() * 900000);
        const todayDate = new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" });

        document.getElementById("receipt-id").textContent = randomReceiptId;
        document.getElementById("receipt-date").textContent = todayDate;
        document.getElementById("receipt-total").textContent = `$${totals.total.toLocaleString("en-US", { minimumFractionDigits: 2 })}`;

        state.cart = [];
        saveCart();
        updateCartBadge();

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = `<i data-lucide="shield-check"></i> Pagar $<span id="checkout-btn-total">0.00</span>`;
        }

        form.reset();
        if (previewNumber) previewNumber.textContent = "•••• •••• •••• ••••";
        if (previewName) previewName.textContent = "NOMBRE COMPLETO";
        if (previewExpiry) previewExpiry.textContent = "MM/YY";
        if (previewCvv) previewCvv.textContent = "•••";

        const receiptModal = document.getElementById("receipt-modal");
        if (receiptModal) receiptModal.classList.add("active");
        refreshLucideIcons();
      }, 1500);
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
