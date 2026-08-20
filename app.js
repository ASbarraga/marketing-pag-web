var FALLBACK_PRODUCTS = [
  {
    id: "gpu-1",
    name: "NVIDIA GeForce RTX 4090 Gaming OC 24GB",
    category: "Tarjetas Gráficas",
    price: 1899.99,
    rating: 4.9,
    reviewsCount: 128,
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=800",
    description: "La tarjeta gráfica definitiva para entusiastas. Impulsada por la arquitectura NVIDIA Ada Lovelace con 24GB de memoria GDDR6X.",
    stock: 4
  },
  {
    id: "gpu-2",
    name: "ASUS ROG Strix GeForce RTX 4080 Super 16GB",
    category: "Tarjetas Gráficas",
    price: 1199.99,
    rating: 4.8,
    reviewsCount: 94,
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=800",
    description: "Diseño térmico avanzado con ventiladores Axial-tech y chasis metálico premium.",
    stock: 6
  },
  {
    id: "gpu-3",
    name: "Gigabyte AORUS RTX 4070 Ti Super MASTER 16GB",
    category: "Tarjetas Gráficas",
    price: 849.99,
    rating: 4.7,
    reviewsCount: 65,
    image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&q=80&w=800",
    description: "Potencia media-alta ideal para resoluciones 1440p y 4K competitivo.",
    stock: 8
  },
  {
    id: "gpu-4",
    name: "AMD Radeon RX 7900 XTX Phantom Gaming 24GB",
    category: "Tarjetas Gráficas",
    price: 979.99,
    rating: 4.8,
    reviewsCount: 82,
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=800",
    description: "Basada en la arquitectura AMD RDNA 3 con tecnología chiplet.",
    stock: 5
  },
  {
    id: "gpu-5",
    name: "MSI GAMING X SLIM Radeon RX 7800 XT 16GB",
    category: "Tarjetas Gráficas",
    price: 529.99,
    rating: 4.6,
    reviewsCount: 51,
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=800",
    description: "Diseño elegante y compacto con sistema térmico TRI FROZR 3.",
    stock: 10
  },
  {
    id: "cpu-1",
    name: "AMD Ryzen 7 7800X3D (8 Núcleos / 16 Hilos)",
    category: "Procesadores",
    price: 389.99,
    rating: 5.0,
    reviewsCount: 310,
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=800",
    description: "El procesador número 1 indiscutible para gaming con tecnología AMD 3D V-Cache.",
    stock: 12
  },
  {
    id: "cpu-2",
    name: "Intel Core i9-14900K (24 Núcleos / 32 Hilos)",
    category: "Procesadores",
    price: 549.99,
    rating: 4.8,
    reviewsCount: 145,
    image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&q=80&w=800",
    description: "Rendimiento extremo multitarea e hiper-procesamiento hasta 6.0 GHz.",
    stock: 7
  },
  {
    id: "cpu-3",
    name: "AMD Ryzen 9 7950X3D (16 Núcleos / 32 Hilos)",
    category: "Procesadores",
    price: 629.99,
    rating: 4.9,
    reviewsCount: 88,
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=800",
    description: "El procesador definitivo para creadores de contenido y estaciones de trabajo.",
    stock: 5
  },
  {
    id: "cpu-4",
    name: "Intel Core i7-14700K (20 Núcleos / 28 Hilos)",
    category: "Procesadores",
    price: 399.99,
    rating: 4.7,
    reviewsCount: 112,
    image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&q=80&w=800",
    description: "Equilibrio perfecto entre potencia bruta y costo con 20 núcleos.",
    stock: 9
  },
  {
    id: "cpu-5",
    name: "AMD Ryzen 5 7600X (6 Núcleos / 12 Hilos)",
    category: "Procesadores",
    price: 209.99,
    rating: 4.6,
    reviewsCount: 204,
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=800",
    description: "Punto de entrada ideal a la plataforma AM5 con DDR5 y PCIe 5.0.",
    stock: 15
  },
  {
    id: "ram-1",
    name: "Corsair Dominator Titanium RGB DDR5 32GB (2x16GB) 7200MHz",
    category: "Memorias RAM",
    price: 229.99,
    rating: 4.9,
    reviewsCount: 76,
    image: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&q=80&w=800",
    description: "Memorias de lujo con chips seleccionados e iluminación RGB de precisión.",
    stock: 8
  },
  {
    id: "ram-2",
    name: "G.Skill Trident Z5 Neo RGB DDR5 64GB (2x32GB) 6000MHz",
    category: "Memorias RAM",
    price: 249.99,
    rating: 4.9,
    reviewsCount: 140,
    image: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&q=80&w=800",
    description: "Optimizada para AMD Ryzen 7000 con perfiles EXPO CL30 de ultra baja latencia.",
    stock: 11
  },
  {
    id: "ram-3",
    name: "Kingston FURY Renegade RGB DDR5 32GB (2x16GB) 6400MHz",
    category: "Memorias RAM",
    price: 154.99,
    rating: 4.7,
    reviewsCount: 92,
    image: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&q=80&w=800",
    description: "Diseño dinámico en aluminio con Infrared Sync Technology.",
    stock: 14
  },
  {
    id: "ram-4",
    name: "Teamgroup T-Force Delta RGB DDR5 32GB (2x16GB) 6000MHz Black",
    category: "Memorias RAM",
    price: 119.99,
    rating: 4.8,
    reviewsCount: 188,
    image: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&q=80&w=800",
    description: "Iluminación gran angular de 120° con CI PMIC integrado.",
    stock: 20
  },
  {
    id: "ram-5",
    name: "Crucial Pro Overclocking DDR5 64GB (2x32GB) 6000MHz",
    category: "Memorias RAM",
    price: 209.99,
    rating: 4.6,
    reviewsCount: 43,
    image: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&q=80&w=800",
    description: "Estilo sobrio minimalista sin RGB para estaciones de trabajo.",
    stock: 7
  },
  {
    id: "case-1",
    name: "NZXT H9 Elite Dual-Chamber Mid-Tower Black",
    category: "Gabinetes",
    price: 239.99,
    rating: 4.9,
    reviewsCount: 165,
    image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&q=80&w=800",
    description: "Gabinete doble cámara con visión panorámica envolvente de cristal.",
    stock: 6
  },
  {
    id: "case-2",
    name: "Corsair 5000D AIRFLOW Tempered Glass Black",
    category: "Gabinetes",
    price: 174.99,
    rating: 4.8,
    reviewsCount: 220,
    image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&q=80&w=800",
    description: "Flujo de aire masivo con panel frontal perforado y gestión de cables.",
    stock: 10
  },
  {
    id: "case-3",
    name: "Lian Li O11 Dynamic EVO RGB Black Edition",
    category: "Gabinetes",
    price: 169.99,
    rating: 4.9,
    reviewsCount: 290,
    image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&q=80&w=800",
    description: "Chasis modular estilo acuario con orientación reversible.",
    stock: 7
  },
  {
    id: "case-4",
    name: "HYTE Y70 Touch Infinite Display PC Case Black/Red",
    category: "Gabinetes",
    price: 359.99,
    rating: 5.0,
    reviewsCount: 84,
    image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&q=80&w=800",
    description: "Gabinete con pantalla táctil integrada de 14.1 pulgadas en 4K.",
    stock: 3
  },
  {
    id: "case-5",
    name: "Phanteks NV7 Full-Tower Seamless Glass Matte Black",
    category: "Gabinetes",
    price: 219.99,
    rating: 4.7,
    reviewsCount: 57,
    image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&q=80&w=800",
    description: "Chasis Full Tower monumental para enmarcar tu hardware.",
    stock: 4
  },
  {
    id: "kb-1",
    name: "Keychron Q1 Max QMK/VIA Wireless Mechanical Keyboard",
    category: "Teclados",
    price: 219.99,
    rating: 4.9,
    reviewsCount: 110,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=800",
    description: "Teclado custom de aluminio CNC 75% inalambrico con perilla.",
    stock: 9
  },
  {
    id: "kb-2",
    name: "Logitech G PRO X TKL LIGHTSPEED Gaming Keyboard",
    category: "Teclados",
    price: 199.99,
    rating: 4.8,
    reviewsCount: 205,
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&q=80&w=800",
    description: "Diseñado con pros de esports con teclas PBT e inalámbrico LIGHTSPEED.",
    stock: 12
  },
  {
    id: "kb-3",
    name: "Wooting 60HE+ Analog Optical Gaming Keyboard",
    category: "Teclados",
    price: 174.99,
    rating: 5.0,
    reviewsCount: 420,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=800",
    description: "Teclado analógico magnético con función Rapid Trigger.",
    stock: 5
  },
  {
    id: "kb-4",
    name: "Razer Huntsman V3 Pro TKL Analog Optical Keyboard",
    category: "Teclados",
    price: 219.99,
    rating: 4.7,
    reviewsCount: 89,
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&q=80&w=800",
    description: "Interruptores ópticos analógicos Gen-2 con dial multifunción.",
    stock: 8
  },
  {
    id: "kb-5",
    name: "SteelSeries Apex Pro TKL Wireless (2023)",
    category: "Teclados",
    price: 249.99,
    rating: 4.8,
    reviewsCount: 134,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=800",
    description: "Switches OmniPoint 2.0 ajustables con pantalla OLED inteligente.",
    stock: 6
  },
  {
    id: "mouse-1",
    name: "Logitech G PRO X SUPERLIGHT 2 LIGHTSPEED Wireless",
    category: "Mouse",
    price: 159.99,
    rating: 4.9,
    reviewsCount: 380,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80&w=800",
    description: "Ícono de esports de 60g con sensor HERO 2 y 4000Hz.",
    stock: 14
  },
  {
    id: "mouse-2",
    name: "Razer Viper V3 Pro Ultra-lightweight Wireless Mouse",
    category: "Mouse",
    price: 159.99,
    rating: 5.0,
    reviewsCount: 195,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=800",
    description: "Ultra-ligero de 54g con tasa de sondeo nativa de 8000Hz.",
    stock: 11
  },
  {
    id: "mouse-3",
    name: "Pulsar X2V2 Wireless Gaming Mouse Mini / Medium Black",
    category: "Mouse",
    price: 99.99,
    rating: 4.7,
    reviewsCount: 88,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80&w=800",
    description: "Estructura simétrica de 53g con sensor PixArt PAW3395.",
    stock: 15
  },
  {
    id: "mouse-4",
    name: "Finalmouse UltralightX Lion (Medium) Wireless",
    category: "Mouse",
    price: 189.99,
    rating: 4.9,
    reviewsCount: 72,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=800",
    description: "Chasis de fibra de carbono ultra-ligero de 35 gramos.",
    stock: 3
  },
  {
    id: "mouse-5",
    name: "Zowie EC2-CW Wireless Ergonomic Esports Mouse",
    category: "Mouse",
    price: 149.99,
    rating: 4.8,
    reviewsCount: 160,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80&w=800",
    description: "Forma ergonómica de precisión para juegos FPS.",
    stock: 8
  },
  {
    id: "laptop-1",
    name: "ASUS ROG Strix SCAR 18 (2024) RTX 4090 / i9-14900HX",
    category: "Laptops",
    price: 3699.99,
    rating: 4.9,
    reviewsCount: 64,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=800",
    description: "Pantalla 18\" Mini LED 240Hz con RTX 4090 16GB e i9-14900HX.",
    stock: 3
  },
  {
    id: "laptop-2",
    name: "Lenovo Legion Pro 7i Gen 9 RTX 4080 / i9-14900HX",
    category: "Laptops",
    price: 2699.99,
    rating: 4.8,
    reviewsCount: 118,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=800",
    description: "Chip IA de optimización en tiempo real con chasis de aluminio.",
    stock: 5
  },
  {
    id: "laptop-3",
    name: "Razer Blade 16 Dual-Mode Mini-LED RTX 4090",
    category: "Laptops",
    price: 3799.99,
    rating: 4.9,
    reviewsCount: 52,
    image: "https://images.unsplash.com/photo-1544731612-de7f96afe55f?auto=format&fit=crop&q=80&w=800",
    description: "Pantalla Dual-Mode UHD+ 120Hz / FHD+ 240Hz con chasis CNC.",
    stock: 2
  },
  {
    id: "laptop-4",
    name: "MSI Titan 18 HX A14V RTX 4090 / 128GB RAM",
    category: "Laptops",
    price: 4999.99,
    rating: 5.0,
    reviewsCount: 29,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=800",
    description: "Reemplazo de escritorio con 128GB RAM y teclado Cherry MX.",
    stock: 2
  },
  {
    id: "laptop-5",
    name: "Apple MacBook Pro 16 M3 Max 16-Core CPU / 40-Core GPU",
    category: "Laptops",
    price: 3999.99,
    rating: 4.9,
    reviewsCount: 210,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=800",
    description: "Potencia profesional con chip M3 Max en acabado Negro Espacial.",
    stock: 7
  }
];

function getProductsList() {
  if (state.products && Array.isArray(state.products) && state.products.length > 0) {
    return state.products;
  }
  if (typeof PRODUCTS_DATA !== "undefined" && Array.isArray(PRODUCTS_DATA) && PRODUCTS_DATA.length > 0) {
    return PRODUCTS_DATA;
  }
  if (typeof PRODUCTS !== "undefined" && Array.isArray(PRODUCTS) && PRODUCTS.length > 0) {
    return PRODUCTS;
  }
  if (typeof window !== "undefined" && window.PRODUCTS && Array.isArray(window.PRODUCTS) && window.PRODUCTS.length > 0) {
    return window.PRODUCTS;
  }
  if (typeof window !== "undefined" && window.PRODUCTS_DATA && Array.isArray(window.PRODUCTS_DATA) && window.PRODUCTS_DATA.length > 0) {
    return window.PRODUCTS_DATA;
  }
  return FALLBACK_PRODUCTS;
}

async function loadProductsFromBackend() {
  try {
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "get_products" })
    });
    const data = await res.json();
    if (res.ok && data.success && Array.isArray(data.products) && data.products.length > 0) {
      state.products = data.products;
      renderCatalog();
      initCategories();
      renderAdminProducts();
      renderAdminDashboard();
    }
  } catch (e) {
    console.log("Sincronización de productos con MongoDB Atlas:", e);
  }
}

function getMiniSpecs(prod) {
  if (!prod) return "";
  if (prod.specsMini) return prod.specsMini;
  if (prod.specs) {
    const values = Object.values(prod.specs);
    return values.slice(0, 2).join(" • ");
  }
  return prod.description ? prod.description.substring(0, 65) + "..." : "";
}

let storedOrders = JSON.parse(localStorage.getItem("pcm_orders")) || [];
storedOrders = storedOrders.filter(o => o.id !== "#PCM-784210" && o.id !== "#PCM-659102" && o.id !== "#PCM-412093" && o.id !== "#PCM-302911");
localStorage.setItem("pcm_orders", JSON.stringify(storedOrders));

let storedAdminUsers = JSON.parse(localStorage.getItem("pcm_admin_users")) || [];
storedAdminUsers = storedAdminUsers.filter(u => u.username !== "zairbarragan" && u.username !== "vanesasalazar");

const DEFAULT_ADMIN_USER = {
  id: "usr_admin_001",
  username: "ASbarrag",
  name: "Antonio Barragán",
  email: "asbarraganc@ube.edu.ec",
  role: "Admin",
  status: "Activo",
  createdAt: "20/08/2026"
};

if (!storedAdminUsers.some(u => u.username.toLowerCase() === "asbarrag")) {
  storedAdminUsers.unshift(DEFAULT_ADMIN_USER);
}
localStorage.setItem("pcm_admin_users", JSON.stringify(storedAdminUsers));

let state = {
  activeCategory: "Todas",
  searchQuery: "",
  sortBy: "popular",
  cart: JSON.parse(localStorage.getItem("pcm_cart")) || [],
  selectedProductForModal: null,
  currentUser: JSON.parse(localStorage.getItem("pcm_current_user")) || null,
  orders: storedOrders,
  adminUsers: storedAdminUsers,
  products: null
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
  initAdminPanel();
  renderCatalog();
  updateCartBadge();
  refreshLucideIcons();
  loadProductsFromBackend();
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
      if (btn.dataset && btn.dataset.target) {
        if (btn.dataset.target === targetViewId) {
          btn.classList.add("active");
        } else {
          btn.classList.remove("active");
        }
      }
    });

    if (targetViewId === "view-cart") {
      renderCart();
    } else if (targetViewId === "view-checkout") {
      updateCheckoutTotalBtn();
      if (state.currentUser) {
        const cardNameInput = document.getElementById("card-name");
        if (cardNameInput && !cardNameInput.value) {
          cardNameInput.value = state.currentUser.name ? state.currentUser.name.toUpperCase() : state.currentUser.username.toUpperCase();
          cardNameInput.dispatchEvent(new Event("input"));
        }
      }
    } else if (targetViewId === "view-admin") {
      renderAdminAll();
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
    refreshLucideIcons();
  }

  navBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.dataset && btn.dataset.target) {
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
  const prods = getProductsList();
  if (cat === "Todas") return prods.length;
  return prods.filter(p => p.category === cat).length;
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

  const prods = getProductsList();

  let filtered = prods.filter(p => {
    const matchesCat = state.activeCategory === "Todas" || p.category === state.activeCategory;
    const mini = getMiniSpecs(p).toLowerCase();
    const matchesSearch = !state.searchQuery ||
                          (p.name && p.name.toLowerCase().includes(state.searchQuery)) ||
                          (p.category && p.category.toLowerCase().includes(state.searchQuery)) ||
                          mini.includes(state.searchQuery);
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

    const fullStars = Math.floor(prod.rating || 5);
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
        <div class="card-specs-mini">${getMiniSpecs(prod)}</div>
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

      // Save real customer order
      const newOrder = {
        id: `#${randomTx}`,
        date: today,
        customer: state.currentUser ? (state.currentUser.name || state.currentUser.username) : (cardName.value || "Cliente General"),
        total: total,
        method: "Tarjeta de Crédito",
        status: "Pendiente"
      };
      state.orders.unshift(newOrder);
      localStorage.setItem("pcm_orders", JSON.stringify(state.orders));

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
  const fullStars = Math.floor(prod.rating || 5);
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
  if (prod.specs) {
    Object.entries(prod.specs).forEach(([key, val]) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${key}</td><td>${val}</td>`;
      specsTable.appendChild(tr);
    });
  }

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
  const users = JSON.parse(localStorage.getItem("pcm_users_db")) || [];
  return users.filter(u => u.username !== "zairbarragan" && u.username !== "vanesasalazar");
}

function saveStoredUsersDB(users) {
  const clean = users.filter(u => u.username !== "zairbarragan" && u.username !== "vanesasalazar");
  localStorage.setItem("pcm_users_db", JSON.stringify(clean));
}

function renderHeaderAuth() {
  const container = document.getElementById("auth-header-container");
  const btnAdminNav = document.getElementById("btn-nav-admin");
  if (!container) return;

  const isUserAdmin = state.currentUser && (
    state.currentUser.role === "Admin" || 
    ["asbarrag", "vane123", "zibarraganb_a"].includes(state.currentUser.username.toLowerCase())
  );

  if (btnAdminNav) {
    btnAdminNav.style.display = isUserAdmin ? "inline-flex" : "none";
  }

  if (state.currentUser) {
    const badgeColor = isUserAdmin ? "border-color: #ef4444; color: #ef4444; background: rgba(239,68,68,0.12);" : "";
    const badgeIcon = isUserAdmin ? "shield" : "user-check";

    container.innerHTML = `
      <div class="user-logged-badge" id="user-profile-badge" style="${badgeColor}">
        <i data-lucide="${badgeIcon}"></i>
        <span id="header-username-text">${isUserAdmin ? "Admin: " : ""}${state.currentUser.username}</span>
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
function closeAuthModal() {
  const modal = document.getElementById("auth-modal");
  if (modal) modal.classList.remove("active");
}

function switchAuthTab(tab) {
  const tabLogin = document.getElementById("tab-btn-login");
  const tabRegister = document.getElementById("tab-btn-register");
  const formLogin = document.getElementById("login-form");
  const formRegister = document.getElementById("register-form");
  const formRecover = document.getElementById("recover-form");
  const title = document.getElementById("auth-modal-title");

  if (tab === "login") {
    if (tabLogin) tabLogin.classList.add("active");
    if (tabRegister) tabRegister.classList.remove("active");
    if (formLogin) formLogin.style.display = "block";
    if (formRegister) formRegister.style.display = "none";
    if (formRecover) formRecover.style.display = "none";
    if (title) title.textContent = "¡Hola de nuevo!";
  } else if (tab === "register") {
    if (tabRegister) tabRegister.classList.add("active");
    if (tabLogin) tabLogin.classList.remove("active");
    if (formRegister) formRegister.style.display = "block";
    if (formLogin) formLogin.style.display = "none";
    if (formRecover) formRecover.style.display = "none";
    if (title) title.textContent = "Crear nueva cuenta";
  } else if (tab === "recover") {
    if (tabLogin) tabLogin.classList.remove("active");
    if (tabRegister) tabRegister.classList.remove("active");
    if (formRecover) formRecover.style.display = "block";
    if (formLogin) formLogin.style.display = "none";
    if (formRegister) formRegister.style.display = "none";
    if (title) title.textContent = "Recuperar Contraseña";

    const step1 = document.getElementById("recover-step-1");
    const step2 = document.getElementById("recover-step-2");
    if (step1) step1.style.display = "block";
    if (step2) step2.style.display = "none";
  }
}

async function handleLogin(username, password) {
  const cleanUsername = username.trim();
  if (!cleanUsername || !password) {
    showToast("Por favor completa todos los campos");
    return;
  }

  const DEFAULT_ADMINS_LIST = [
    {
      id: "usr_admin_001",
      username: "ASbarrag",
      password: "Sebas1307",
      name: "Antonio Barragán",
      email: "asbarraganc@ube.edu.ec",
      role: "Admin",
      status: "Activo"
    },
    {
      id: "usr_admin_002",
      username: "vane123",
      password: "vane123",
      name: "Vanesa Salazar",
      email: "vanesasalazar@ube.edu.ec",
      role: "Admin",
      status: "Activo"
    },
    {
      id: "usr_admin_003",
      username: "Zibarraganb_a",
      password: "Zibarraganb_a",
      name: "Zair Barragán",
      email: "zairbarragan@ube.edu.ec",
      role: "Admin",
      status: "Activo"
    }
  ];

  const matchedAdmin = DEFAULT_ADMINS_LIST.find(
    a => a.username.toLowerCase() === cleanUsername.toLowerCase() && a.password === password
  );

  if (matchedAdmin) {
    setCurrentUser(matchedAdmin);
    closeAuthModal();
    showToast(`¡Bienvenido Administrador ${matchedAdmin.name}!`);
    document.getElementById("btn-nav-admin").click();
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
      if (data.user.role === "Admin" || ["asbarrag", "vane123", "zibarraganb_a"].includes(data.user.username.toLowerCase())) {
        document.getElementById("btn-nav-admin").click();
      }
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
    setCurrentUser(found);
    closeAuthModal();
    showToast(`¡Bienvenido de nuevo, ${found.username}!`);
    if (found.role === "Admin" || found.username.toLowerCase() === "asbarrag") {
      document.getElementById("btn-nav-admin").click();
    }
  } else {
    showToast("Nombre de usuario o contraseña incorrectos");
  }
}

async function handleRegister(username, email, password, confirmPassword) {
  const cleanUsername = username.trim();
  const cleanEmail = email.trim();

  if (!cleanUsername || !cleanEmail || !password) {
    showToast("Completa tu nombre de usuario, correo y contraseña");
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
      body: JSON.stringify({ action: "register", username: cleanUsername, email: cleanEmail, password: password })
    });
    const data = await res.json();

    if (res.ok && data.success) {
      const localUsers = getStoredUsersDB();
      if (!localUsers.some(u => u.username.toLowerCase() === cleanUsername.toLowerCase())) {
        const newUserObj = {
          id: data.user.id,
          username: cleanUsername,
          password: password,
          name: cleanUsername,
          email: cleanEmail,
          role: "Client",
          status: "Activo",
          createdAt: new Date().toLocaleDateString("es-EC")
        };
        localUsers.push(newUserObj);
        saveStoredUsersDB(localUsers);

        if (!state.adminUsers.some(u => u.username.toLowerCase() === cleanUsername.toLowerCase())) {
          state.adminUsers.push(newUserObj);
          localStorage.setItem("pcm_admin_users", JSON.stringify(state.adminUsers));
        }
      }

      setCurrentUser(data.user);
      closeAuthModal();
      showToast(`¡Cuenta creada con éxito! Hola ${data.user.username}`);
      return;
    } else if (res.status === 400) {
      showToast(data.error || "El nombre de usuario o correo ya existe");
      return;
    }
  } catch (err) {
    console.log("Servidor API fallback a base de datos local:", err);
  }

  const localUsers = getStoredUsersDB();
  if (localUsers.some(u => u.username.toLowerCase() === cleanUsername.toLowerCase() || (u.email && u.email.toLowerCase() === cleanEmail.toLowerCase()))) {
    showToast("El nombre de usuario o correo ya está registrado.");
    return;
  }

  const newUser = {
    id: "usr_" + Date.now(),
    username: cleanUsername,
    password: password,
    name: cleanUsername,
    email: cleanEmail,
    role: "Client",
    status: "Activo",
    createdAt: new Date().toLocaleDateString("es-EC")
  };
  localUsers.push(newUser);
  saveStoredUsersDB(localUsers);

  if (!state.adminUsers.some(u => u.username.toLowerCase() === cleanUsername.toLowerCase())) {
    state.adminUsers.push(newUser);
    localStorage.setItem("pcm_admin_users", JSON.stringify(state.adminUsers));
  }

  setCurrentUser(newUser);
  closeAuthModal();
  showToast(`¡Cuenta creada con éxito! Hola ${cleanUsername}`);
}

let currentRecoverUser = null;

async function handleVerifyRecover(identifier) {
  const cleanIdent = identifier.trim();
  if (!cleanIdent) {
    showToast("Ingresa tu usuario o correo electrónico");
    return;
  }

  try {
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "recover", identifier: cleanIdent })
    });
    const data = await res.json();

    if (res.ok && data.success) {
      currentRecoverUser = data.username;
      document.getElementById("recover-found-username").textContent = "@" + data.username;
      document.getElementById("recover-step-1").style.display = "none";
      document.getElementById("recover-step-2").style.display = "block";
      showToast(`¡Cuenta verificada para @${data.username}! Ingresa tu nueva contraseña.`);
      refreshLucideIcons();
      return;
    } else {
      showToast(data.error || "No encontramos ninguna cuenta con ese usuario o correo.");
      return;
    }
  } catch (err) {
    console.log("Error API recover, buscando en base de datos local:", err);
  }

  const localUsers = getStoredUsersDB();
  const found = localUsers.find(
    u => u.username.toLowerCase() === cleanIdent.toLowerCase() || (u.email && u.email.toLowerCase() === cleanIdent.toLowerCase())
  );

  if (found) {
    currentRecoverUser = found.username;
    document.getElementById("recover-found-username").textContent = "@" + found.username;
    document.getElementById("recover-step-1").style.display = "none";
    document.getElementById("recover-step-2").style.display = "block";
    showToast(`¡Cuenta verificada para @${found.username}! Ingresa tu nueva contraseña.`);
    refreshLucideIcons();
  } else {
    showToast("No encontramos ninguna cuenta con ese usuario o correo.");
  }
}

async function handleSaveNewPassword(newPass, confirmPass) {
  if (!newPass || newPass.length < 4) {
    showToast("La nueva contraseña debe tener al menos 4 caracteres");
    return;
  }

  if (newPass !== confirmPass) {
    showToast("Las contraseñas no coinciden");
    return;
  }

  if (!currentRecoverUser) {
    showToast("Vuelve a intentar la búsqueda de cuenta.");
    switchAuthTab("recover");
    return;
  }

  try {
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "reset_password", identifier: currentRecoverUser, newPassword: newPass })
    });
    const data = await res.json();

    if (res.ok && data.success) {
      const localUsers = getStoredUsersDB();
      const idx = localUsers.findIndex(u => u.username.toLowerCase() === currentRecoverUser.toLowerCase());
      if (idx !== -1) {
        localUsers[idx].password = newPass;
        saveStoredUsersDB(localUsers);
      }

      showToast("¡Contraseña restablecida con éxito! Ya puedes iniciar sesión.");
      switchAuthTab("login");
      return;
    } else {
      showToast(data.error || "Error al restablecer la contraseña.");
      return;
    }
  } catch (err) {
    console.log("Error API reset_password, fallback local:", err);
  }

  const localUsers = getStoredUsersDB();
  const idx = localUsers.findIndex(u => u.username.toLowerCase() === currentRecoverUser.toLowerCase());
  if (idx !== -1) {
    localUsers[idx].password = newPass;
    saveStoredUsersDB(localUsers);
    showToast("¡Contraseña restablecida con éxito! Ya puedes iniciar sesión.");
    switchAuthTab("login");
  } else {
    showToast("Error al restablecer contraseña.");
  }
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
  document.getElementById("btn-nav-home").click();
}

function initAuth() {
  state.currentUser = JSON.parse(localStorage.getItem("pcm_current_user")) || null;
  renderHeaderAuth();

  const tabLogin = document.getElementById("tab-btn-login");
  const tabRegister = document.getElementById("tab-btn-register");
  const linkToRegister = document.getElementById("link-to-register");
  const linkToLogin = document.getElementById("link-to-login");
  const linkForgotPassword = document.getElementById("link-forgot-password");
  const linkRecoverBackLogin = document.getElementById("link-recover-back-login");
  const btnCloseModal = document.getElementById("btn-close-auth-modal");
  const modal = document.getElementById("auth-modal");

  if (tabLogin) tabLogin.addEventListener("click", () => switchAuthTab("login"));
  if (tabRegister) tabRegister.addEventListener("click", () => switchAuthTab("register"));
  if (linkToRegister) linkToRegister.addEventListener("click", (e) => { e.preventDefault(); switchAuthTab("register"); });
  if (linkToLogin) linkToLogin.addEventListener("click", (e) => { e.preventDefault(); switchAuthTab("login"); });
  if (linkForgotPassword) linkForgotPassword.addEventListener("click", (e) => { e.preventDefault(); switchAuthTab("recover"); });
  if (linkRecoverBackLogin) linkRecoverBackLogin.addEventListener("click", (e) => { e.preventDefault(); switchAuthTab("login"); });

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
      const m = document.getElementById("register-email").value;
      const p = document.getElementById("register-password").value;
      const c = document.getElementById("register-confirm").value;
      handleRegister(u, m, p, c);
    });
  }

  const recoverForm = document.getElementById("recover-form");
  if (recoverForm) {
    recoverForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const ident = document.getElementById("recover-identifier").value;
      handleVerifyRecover(ident);
    });
  }

  const btnSavePass = document.getElementById("btn-save-new-password");
  if (btnSavePass) {
    btnSavePass.addEventListener("click", () => {
      const p1 = document.getElementById("recover-new-password").value;
      const p2 = document.getElementById("recover-confirm-password").value;
      handleSaveNewPassword(p1, p2);
    });
  }
}

// ----------------------------------------------------
// LÓGICA DEL PANEL DE ADMINISTRADOR (ADMIN DASHBOARD)
// ----------------------------------------------------
function initAdminPanel() {
  const adminTabBtns = document.querySelectorAll(".admin-tab-btn");
  adminTabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetTab = btn.dataset.admintab;
      adminTabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      document.querySelectorAll(".admin-sec").forEach(sec => {
        sec.style.display = "none";
      });

      const activeSec = document.getElementById(`admin-sec-${targetTab}`);
      if (activeSec) {
        activeSec.style.display = "block";
      }
      refreshLucideIcons();
    });
  });

  // Add Product Button & Form Modal
  const btnAddProd = document.getElementById("btn-admin-add-product");
  const modalProd = document.getElementById("admin-product-modal");
  const btnCloseModalProd = document.getElementById("btn-close-admin-prod-modal");

  if (btnAddProd && modalProd) {
    btnAddProd.addEventListener("click", () => {
      document.getElementById("admin-prod-modal-title").textContent = "Añadir Nuevo Componente";
      document.getElementById("admin-product-form").reset();
      document.getElementById("prod-form-id").value = "";
      modalProd.classList.add("active");
      refreshLucideIcons();
    });
  }

  if (btnCloseModalProd && modalProd) {
    btnCloseModalProd.addEventListener("click", () => modalProd.classList.remove("active"));
    modalProd.addEventListener("click", (e) => {
      if (e.target === modalProd) modalProd.classList.remove("active");
    });
  }

  const formProd = document.getElementById("admin-product-form");
  if (formProd) {
    formProd.addEventListener("submit", (e) => {
      e.preventDefault();
      saveAdminProduct();
    });
  }

  // Add User Button
  const btnAddUser = document.getElementById("btn-admin-add-user");
  if (btnAddUser) {
    btnAddUser.addEventListener("click", () => {
      const u = prompt("Ingrese el Nombre de Usuario para el nuevo Moderador:");
      if (u && u.trim()) {
        const newUser = {
          id: "usr_" + Date.now(),
          username: u.trim(),
          name: u.trim(),
          email: u.trim().toLowerCase() + "@pcmasters.com",
          role: "Mod",
          status: "Activo",
          createdAt: new Date().toLocaleDateString("es-EC")
        };
        state.adminUsers.push(newUser);
        localStorage.setItem("pcm_admin_users", JSON.stringify(state.adminUsers));
        renderAdminUsers();
        showToast(`¡Usuario Moderador @${u.trim()} creado con éxito!`);
      }
    });
  }

  // Settings Form
  const formSettings = document.getElementById("admin-settings-form");
  if (formSettings) {
    formSettings.addEventListener("submit", (e) => {
      e.preventDefault();
      showToast("¡Configuración y políticas guardadas correctamente!");
    });
  }
}

function renderAdminAll() {
  renderAdminDashboard();
  renderAdminProducts();
  renderAdminOrders();
  renderAdminUsers();
}

function renderAdminDashboard() {
  const alertList = document.getElementById("admin-low-stock-alert-list");
  const prods = getProductsList();

  if (alertList) {
    alertList.innerHTML = "";
    const lowStockItems = prods.filter(p => p.stock <= 5);

    if (lowStockItems.length === 0) {
      alertList.innerHTML = `<div style="font-size: 13px; color: var(--primary-neon);">¡Todo el inventario cuenta con stock óptimo!</div>`;
    } else {
      lowStockItems.forEach(p => {
        const item = document.createElement("div");
        item.className = "alert-item";
        item.innerHTML = `
          <div>
            <strong>${p.name}</strong> (${p.category})
          </div>
          <span class="alert-stock-tag">${p.stock} unid.</span>
        `;
        alertList.appendChild(item);
      });
    }
  }

  const totalSales = state.orders.reduce((sum, o) => sum + (o.total || 0), 0);
  const pendingOrders = state.orders.filter(o => o.status === "Pendiente").length;

  document.getElementById("stat-total-sales").textContent = `$${totalSales.toLocaleString("en-US", { minimumFractionDigits: 2 })}`;
  document.getElementById("stat-sales-change").textContent = state.orders.length > 0 ? `${state.orders.length} compras computadas` : "Sin compras aún";
  document.getElementById("stat-total-orders").textContent = `${state.orders.length} Pedidos`;
  document.getElementById("stat-orders-change").textContent = `${pendingOrders} pendientes de envío`;
  document.getElementById("stat-total-products").textContent = `${prods.length} Productos`;
  document.getElementById("stat-total-users").textContent = `${state.adminUsers.length} Usuario${state.adminUsers.length === 1 ? "" : "s"}`;

  const topSalesContainer = document.getElementById("admin-top-sales-list");
  if (topSalesContainer) {
    topSalesContainer.innerHTML = "";
    if (state.orders.length === 0) {
      topSalesContainer.innerHTML = `
        <div style="font-size: 13.5px; color: var(--text-muted); padding: 12px 0;">
          No hay compras registradas aún. Las ventas reales realizadas por los clientes se reflejarán aquí automáticamente.
        </div>
      `;
    } else {
      state.orders.forEach(o => {
        const item = document.createElement("div");
        item.className = "sales-bar-item";
        item.innerHTML = `
          <div class="sales-bar-info">
            <span>Pedido ${o.id} - ${o.customer}</span>
            <strong>$${o.total.toLocaleString("en-US", { minimumFractionDigits: 2 })} (${o.status})</strong>
          </div>
          <div class="progress-bar-bg"><div class="progress-bar-fill" style="width: 100%;"></div></div>
        `;
        topSalesContainer.appendChild(item);
      });
    }
  }
}

function renderAdminProducts() {
  const tbody = document.getElementById("admin-products-table-body");
  if (!tbody) return;

  const prods = getProductsList();
  tbody.innerHTML = "";

  prods.forEach((p, idx) => {
    const tr = document.createElement("tr");
    const isLow = p.stock <= 3;
    const stockBadge = isLow ? `<span class="status-badge status-blocked">${p.stock} (Bajo)</span>` : `<span class="status-badge status-active">${p.stock} unid.</span>`;

    tr.innerHTML = `
      <td>
        <div style="display: flex; align-items: center; gap: 10px;">
          <img src="${p.image}" alt="" style="width: 36px; height: 36px; object-fit: contain; border-radius: 6px; background: var(--bg-surface); padding: 2px;">
          <strong style="color: var(--text-primary); font-size: 13px;">${p.name}</strong>
        </div>
      </td>
      <td>${p.category}</td>
      <td style="font-weight: 800; color: var(--primary-neon);">$${p.price.toLocaleString("en-US", { minimumFractionDigits: 2 })}</td>
      <td>${stockBadge}</td>
      <td><i data-lucide="star" style="width: 12px; height: 12px; fill: #eab308; color: #eab308;"></i> ${p.rating}</td>
      <td>
        <button class="btn-action-icon btn-edit-prod" data-id="${p.id}" title="Editar Componente">
          <i data-lucide="edit-3"></i>
        </button>
        <button class="btn-action-icon danger btn-del-prod" data-id="${p.id}" title="Eliminar Componente">
          <i data-lucide="trash-2"></i>
        </button>
      </td>
    `;

    tr.querySelector(".btn-edit-prod").addEventListener("click", () => editAdminProduct(p));
    tr.querySelector(".btn-del-prod").addEventListener("click", () => deleteAdminProduct(idx));

    tbody.appendChild(tr);
  });

  refreshLucideIcons();
}

function editAdminProduct(p) {
  const modalProd = document.getElementById("admin-product-modal");
  if (!modalProd) return;

  document.getElementById("admin-prod-modal-title").textContent = "Editar Componente";
  document.getElementById("prod-form-id").value = p.id;
  document.getElementById("prod-form-name").value = p.name;
  document.getElementById("prod-form-category").value = p.category;
  document.getElementById("prod-form-price").value = p.price;
  document.getElementById("prod-form-stock").value = p.stock;
  document.getElementById("prod-form-rating").value = p.rating || 4.8;
  document.getElementById("prod-form-image").value = p.image;
  document.getElementById("prod-form-desc").value = p.description;

  modalProd.classList.add("active");
  refreshLucideIcons();
}

function saveAdminProduct() {
  const id = document.getElementById("prod-form-id").value;
  const name = document.getElementById("prod-form-name").value.trim();
  const category = document.getElementById("prod-form-category").value;
  const price = parseFloat(document.getElementById("prod-form-price").value);
  const stock = parseInt(document.getElementById("prod-form-stock").value, 10);
  const rating = parseFloat(document.getElementById("prod-form-rating").value) || 4.8;
  const image = document.getElementById("prod-form-image").value.trim();
  const description = document.getElementById("prod-form-desc").value.trim();

  const prods = getProductsList();

  if (id) {
    // Update existing
    const existing = prods.find(p => p.id === id);
    if (existing) {
      existing.name = name;
      existing.category = category;
      existing.price = price;
      existing.stock = stock;
      existing.rating = rating;
      existing.image = image;
      existing.description = description;
    }
    showToast(`¡Componente ${name} actualizado!`);
  } else {
    // Add new
    const newProd = {
      id: "comp-" + Date.now(),
      name: name,
      category: category,
      price: price,
      stock: stock,
      rating: rating,
      reviewsCount: 1,
      image: image,
      description: description,
      specs: { "Garantía": "1 Año Oficial PC MASTERS" }
    };
    prods.unshift(newProd);
    showToast(`¡Componente ${name} añadido al catálogo!`);
  }

  document.getElementById("admin-product-modal").classList.remove("active");
  renderCatalog();
  renderAdminProducts();
  renderAdminDashboard();
}

function deleteAdminProduct(idx) {
  const prods = getProductsList();
  if (confirm(`¿Estás seguro de eliminar "${prods[idx].name}" del inventario?`)) {
    const name = prods[idx].name;
    prods.splice(idx, 1);
    renderCatalog();
    renderAdminProducts();
    renderAdminDashboard();
    showToast(`Producto ${name} eliminado.`);
  }
}

function renderAdminOrders() {
  const tbody = document.getElementById("admin-orders-table-body");
  if (!tbody) return;

  tbody.innerHTML = "";

  if (state.orders.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align: center; color: var(--text-muted); padding: 32px 16px;">
          No hay pedidos registrados en la tienda aún. Las compras reales realizadas por los clientes aparecerán aquí.
        </td>
      </tr>
    `;
    return;
  }

  state.orders.forEach((o, idx) => {
    const tr = document.createElement("tr");

    let statusClass = "status-pending";
    if (o.status === "Pagado") statusClass = "status-paid";
    if (o.status === "En camino") statusClass = "status-shipped";
    if (o.status === "Entregado") statusClass = "status-delivered";
    if (o.status === "Cancelado") statusClass = "status-cancelled";

    tr.innerHTML = `
      <td style="font-weight: 800; color: var(--primary-neon);">${o.id}</td>
      <td>${o.date}</td>
      <td><strong>${o.customer}</strong></td>
      <td style="font-weight: 800;">$${o.total.toLocaleString("en-US", { minimumFractionDigits: 2 })}</td>
      <td>${o.method}</td>
      <td><span class="status-badge ${statusClass}">${o.status}</span></td>
      <td>
        <select class="sort-select select-order-status" data-idx="${idx}" style="padding: 4px 8px; font-size: 12px;">
          <option value="Pendiente" ${o.status === "Pendiente" ? "selected" : ""}>Pendiente</option>
          <option value="Pagado" ${o.status === "Pagado" ? "selected" : ""}>Pagado</option>
          <option value="En camino" ${o.status === "En camino" ? "selected" : ""}>En camino</option>
          <option value="Entregado" ${o.status === "Entregado" ? "selected" : ""}>Entregado</option>
          <option value="Cancelado" ${o.status === "Cancelado" ? "selected" : ""}>Cancelado</option>
        </select>
      </td>
    `;

    tr.querySelector(".select-order-status").addEventListener("change", (e) => {
      state.orders[idx].status = e.target.value;
      localStorage.setItem("pcm_orders", JSON.stringify(state.orders));
      renderAdminOrders();
      showToast(`Estado del pedido ${o.id} actualizado a ${e.target.value}`);
    });

    tbody.appendChild(tr);
  });

  refreshLucideIcons();
}

function renderAdminUsers() {
  const tbody = document.getElementById("admin-users-table-body");
  if (!tbody) return;

  tbody.innerHTML = "";

  state.adminUsers.forEach((u, idx) => {
    const tr = document.createElement("tr");

    const roleBadge = u.role === "Admin" ? `<span class="status-badge status-admin">SuperAdmin</span>` : `<span class="status-badge status-paid">${u.role}</span>`;
    const statusBadge = u.status === "Activo" ? `<span class="status-badge status-active">Activo</span>` : `<span class="status-badge status-blocked">Bloqueado</span>`;

    tr.innerHTML = `
      <td><strong>@${u.username}</strong></td>
      <td>${u.name || u.username}</td>
      <td>${u.email}</td>
      <td>${roleBadge}</td>
      <td>${statusBadge}</td>
      <td>${u.createdAt}</td>
      <td>
        ${u.role !== "Admin" ? `
          <button class="btn-action-icon ${u.status === "Activo" ? "danger" : ""}" title="${u.status === "Activo" ? "Bloquear Cuenta" : "Activar Cuenta"}">
            <i data-lucide="${u.status === "Activo" ? "user-x" : "user-check"}"></i>
          </button>
        ` : `<span style="font-size: 11px; color: var(--text-muted);">Protegido</span>`}
      </td>
    `;

    const btnToggle = tr.querySelector(".btn-action-icon");
    if (btnToggle) {
      btnToggle.addEventListener("click", () => {
        state.adminUsers[idx].status = state.adminUsers[idx].status === "Activo" ? "Bloqueado" : "Activo";
        localStorage.setItem("pcm_admin_users", JSON.stringify(state.adminUsers));
        renderAdminUsers();
        showToast(`Estado de @${u.username} cambiado a ${state.adminUsers[idx].status}`);
      });
    }

    tbody.appendChild(tr);
  });

  refreshLucideIcons();
}
