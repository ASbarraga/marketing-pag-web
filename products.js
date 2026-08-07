// Base de Datos de Productos de PC MASTERS (35 Productos, 7 Categorías)
const PRODUCTS_DATA = [
  // 1. TARJETAS GRÁFICAS (5 productos)
  {
    id: "gpu-1",
    name: "NVIDIA GeForce RTX 4090 Gaming OC 24GB",
    category: "Tarjetas Gráficas",
    price: 1899.99,
    rating: 4.9,
    reviewsCount: 128,
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=800",
    description: "La tarjeta gráfica definitiva para entusiastas. Impulsada por la arquitectura NVIDIA Ada Lovelace con 24GB de memoria GDDR6X y rendimiento extremo para gaming 4K y producción 3D.",
    specs: {
      "Memoria VRAM": "24 GB GDDR6X",
      "Reloj de Aumento": "2520 MHz",
      "Consumo (TDP)": "450W",
      "Conectores": "3x DisplayPort 1.4a, 1x HDMI 2.1a"
    },
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
    description: "Diseño térmico avanzado con ventiladores Axial-tech y chasis metálico premium. Rendimiento de elite en Ray Tracing y DLSS 3.5 con eficiencia mejorada.",
    specs: {
      "Memoria VRAM": "16 GB GDDR6X",
      "Reloj de Aumento": "2550 MHz",
      "Consumo (TDP)": "320W",
      "Refrigeración": "Triple Ventilador Axial"
    },
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
    description: "Potencia media-alta ideal para resoluciones 1440p y 4K competitivo. Incluye pantalla LCD Edge View personalizada en el lateral.",
    specs: {
      "Memoria VRAM": "16 GB GDDR6X",
      "Reloj de Aumento": "2670 MHz",
      "Consumo (TDP)": "285W",
      "Extras": "Pantalla LCD Edge View"
    },
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
    description: "Basada en la arquitectura AMD RDNA 3 con tecnología chiplet. Diseñada para juegos a 4K ultra con DisplayPort 2.1 nativo.",
    specs: {
      "Memoria VRAM": "24 GB GDDR6",
      "Reloj de Aumento": "2615 MHz",
      "Bus de Memoria": "384-bit",
      "Salida de Video": "DisplayPort 2.1 Native"
    },
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
    description: "Diseño elegante y compacto con el galardonado sistema térmico TRI FROZR 3. Máximo valor para gaming 1440p sin compromisos.",
    specs: {
      "Memoria VRAM": "16 GB GDDR6",
      "Reloj de Aumento": "2565 MHz",
      "Consumo (TDP)": "263W",
      "Formato": "Diseño Slim Triple Fan"
    },
    stock: 10
  },

  // 2. PROCESADORES (5 productos)
  {
    id: "cpu-1",
    name: "AMD Ryzen 7 7800X3D (8 Núcleos / 16 Hilos)",
    category: "Procesadores",
    price: 389.99,
    rating: 5.0,
    reviewsCount: 310,
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=800",
    description: "El procesador número 1 indiscutible para gaming. Cuenta con la innovadora tecnología AMD 3D V-Cache de 96MB para framerates insuperables.",
    specs: {
      "Socket": "AM5",
      "Caché L3": "96 MB (3D V-Cache)",
      "Frecuencia Máxima": "5.0 GHz",
      "TDP Base": "120W"
    },
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
    description: "Rendimiento extremo multitarea e hiper-procesamiento. Frecuencias alcanzables de hasta 6.0 GHz out-of-the-box con Thermal Velocity Boost.",
    specs: {
      "Socket": "LGA 1700",
      "Núcleos": "8 P-Cores + 16 E-Cores",
      "Frecuencia Turbo": "Hasta 6.0 GHz",
      "Compatibilidad": "DDR4 & DDR5"
    },
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
    description: "El procesador definitivo para creadores de contenido que también exigen el mejor rendimiento de juegos en una sola estación de trabajo.",
    specs: {
      "Socket": "AM5",
      "Caché Total": "144 MB",
      "Frecuencia Turbo": "Hasta 5.7 GHz",
      "Litografía": "TSMC 5nm"
    },
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
    description: "Equilibrio perfecto entre potencia bruta y costo. Incorpora 4 E-Cores adicionales respecto a la generación anterior para tareas en segundo plano.",
    specs: {
      "Socket": "LGA 1700",
      "Núcleos": "8 P-Cores + 12 E-Cores",
      "Frecuencia Turbo": "Hasta 5.6 GHz",
      "Caché L3": "33 MB"
    },
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
    description: "Excelente punto de entrada a la plataforma AM5. Ofrece soporte para PCIe 5.0 y DDR5 con bajo consumo de energía y gran overclocking.",
    specs: {
      "Socket": "AM5",
      "Frecuencia Base/Turbo": "4.7 GHz / 5.3 GHz",
      "Caché L3": "32 MB",
      "Gráficos Integrados": "AMD RDNA 2"
    },
    stock: 15
  },

  // 3. MEMORIAS RAM (5 productos)
  {
    id: "ram-1",
    name: "Corsair Dominator Titanium RGB DDR5 32GB (2x16GB) 7200MHz",
    category: "Memorias RAM",
    price: 229.99,
    rating: 4.9,
    reviewsCount: 76,
    image: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&q=80&w=800",
    description: "Memorias de lujo con chips seleccionados a mano, iluminación RGB personalizable por LED individual y disipador de aluminio forjado.",
    specs: {
      "Capacidad": "32 GB (2 x 16 GB)",
      "Velocidad": "DDR5 7200 MHz",
      "Latencia CAS": "CL34",
      "Perfiles": "Intel XMP 3.0 / AMD EXPO"
    },
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
    description: "Optimizada específicamente para procesadores AMD Ryzen serie 7000 con soporte EXPO de un solo clic y barra de luz RGB translúcida.",
    specs: {
      "Capacidad": "64 GB (2 x 32 GB)",
      "Velocidad": "DDR5 6000 MHz",
      "Latencia CAS": "CL30 (Ultra Baja Latencia)",
      "Color": "Negro Mate Cyber"
    },
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
    description: "Diseño dinámico de disipador de calor negro y plateado con tecnología de sincronización por infrarrojos Infrared Sync Technology™.",
    specs: {
      "Capacidad": "32 GB (2 x 16 GB)",
      "Velocidad": "DDR5 6400 MHz",
      "Latencia CAS": "CL32",
      "Garantía": "De Por Vida"
    },
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
    description: "Inspirada en aviones de combate stealth, ofrece iluminación ultra ancha de 120° con CI de gestión de energía (PMIC) integrado.",
    specs: {
      "Capacidad": "32 GB (2 x 16 GB)",
      "Velocidad": "DDR5 6000 MHz",
      "Latencia CAS": "CL30",
      "Ángulo Iluminación": "120° Ultra-Wide RGB"
    },
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
    description: "Estilo sobrio minimalista en aluminio negro mate sin RGB. Ideal para estaciones de trabajo profesionales donde la estabilidad es prioridad.",
    specs: {
      "Capacidad": "64 GB (2 x 32 GB)",
      "Velocidad": "DDR5 6000 MHz",
      "Disipador": "Aluminio Minimalista Negro",
      "Compatibilidad": "Intel XMP 3.0 & AMD EXPO"
    },
    stock: 7
  },

  // 4. GABINETES (5 productos)
  {
    id: "case-1",
    name: "NZXT H9 Elite Dual-Chamber Mid-Tower Black",
    category: "Gabinetes",
    price: 239.99,
    rating: 4.9,
    reviewsCount: 165,
    image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&q=80&w=800",
    description: "Gabinete de doble cámara con cristal templado envolvente sin interrupción de pilares. Vista panorámica perfecta para lucir tus componentes.",
    specs: {
      "Factor de Forma": "Mid-Tower (Soporta E-ATX, ATX, Micro-ATX)",
      "Paneles": "Cristal Templado Frontal y Lateral",
      "Ventiladores": "4x 120mm Duo RGB Incluidos",
      "Soporte Radiador": "Hasta 360mm Superior, Lateral e Inferior"
    },
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
    description: "El estándar de oro en flujo de aire. Panel frontal de acero perforado optimizado y sistema de gestión de cables RapidRoute intuitivo.",
    specs: {
      "Factor de Forma": "Mid-Tower ATX",
      "Panel Frontal": "Malla Perforada Airflow",
      "Gestión de Cables": "Corsair RapidRoute (25mm profundidad)",
      "Longitud Máxima GPU": "420 mm"
    },
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
    description: "Chasis modular versátil con modo de orientación reversible (normal o invertido). Incluye tiras difusoras de luz RGB en bordes superior e inferior.",
    specs: {
      "Factor de Forma": "Mid-Tower Modular Dual-Chamber",
      "Modos": "Reversible Standard / Inverted",
      "Soporte GPU Vertical": "Opcional (Montaje Modulable)",
      "Tiras LED": "L-Shape ARGB Configurable"
    },
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
    description: "Iconico gabinete panorámico con pantalla táctil integrada de 14.1 pulgadas en resolución 4K (2830x684) para widgets y monitoreo.",
    specs: {
      "Pantalla": "14.1\" Capacitiva 4K Multi-touch (60Hz)",
      "Cámara": "Dual Chamber Estilo Acuario",
      "Riser Cable": "PCIe 4.0 Incluido para GPU Vertical",
      "Ventilación": "Piso Frío de Inducción Inferior"
    },
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
    description: "Full-Tower monumental diseñado para enmarcar la placa base como una obra de arte. Puertas de gestión de cables ocultas de 360 grados.",
    specs: {
      "Factor de Forma": "Full Tower (Soporta SSI-EEB, E-ATX)",
      "Capacidad Ventiladores": "Hasta 12x 120mm",
      "Construcción": "Acero Estructural Integrado",
      "Hub ARGB": "Controlador de 2 Canales Incluido"
    },
    stock: 4
  },

  // 5. TECLADOS (5 productos)
  {
    id: "kb-1",
    name: "Keychron Q1 Max QMK/VIA Wireless Mechanical Keyboard",
    category: "Teclados",
    price: 219.99,
    rating: 4.9,
    reviewsCount: 110,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=800",
    description: "Teclado personalizado metálico 75% con chasis de aluminio CNC, diseño Gasket Mount doble, estabilizadores atornillados y conectividad 2.4GHz / Bluetooth.",
    specs: {
      "Formato": "75% Compacto con Perilla de Volúmen",
      "Interruptores": "Gateron Jupiter Red (Hot-Swappable)",
      "Conexión": "2.4GHz, Bluetooth 5.1 & Type-C Wired",
      "Software": "Soporte QMK / VIA Código Abierto"
    },
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
    description: "Diseñado con los mejores profesionales de esports del mundo. Teclas PBT de doble inyección, tecnología inalámbrica LIGHTSPEED y controles multimedia.",
    specs: {
      "Formato": "TKL (Tenkeyless)",
      "Switches": "GX Linear Mech-Switch",
      "Autonomía": "Hasta 50 Horas de Batería",
      "Iluminación": "LIGHTSYNC RGB Por Tecla"
    },
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
    description: "El teclado analógico que revolucionó los juegos competitivos. Interruptores Lekker de efecto Hall con punto de actuación ajustable de 0.1 a 4.0 mm y Rapid Trigger.",
    specs: {
      "Tecnología": "Magnetic Hall Effect (Lekker Switches)",
      "Función Clave": "Rapid Trigger & Dynamic Actuation",
      "Formato": "60% Ultra Compacto",
      "Latencia Input": "< 1 ms"
    },
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
    description: "Teclado analógico óptico de Gen-2 con modo Gen-2 Rapid Trigger, dial digital multifunción y reposamuñecas magnético de piel sintética.",
    specs: {
      "Formato": "Tenkeyless con Selector Digital",
      "Switches": "Razer Gen-2 Analog Optical",
      "Material Placa": "Aluminio Cepillado de Grado Aeronáutico",
      "Keycaps": "Texturizadas PBT Double-shot"
    },
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
    description: "Interruptores ajustables OmniPoint 2.0 que responden 11 veces más rápido. Pantalla inteligente OLED para notificaciones e información de juegos.",
    specs: {
      "Pantalla": "OLED Smart Display Integrada",
      "Switches": "OmniPoint 2.0 Adjustable HyperMagnetic",
      "Conexión": "2.4 GHz Quantum 2.0 Wireless & BT",
      "Chasis": "Aleación de Aluminio Serie 5000"
    },
    stock: 6
  },

  // 6. MOUSE (5 productos)
  {
    id: "mouse-1",
    name: "Logitech G PRO X SUPERLIGHT 2 LIGHTSPEED Wireless",
    category: "Mouse",
    price: 159.99,
    rating: 4.9,
    reviewsCount: 380,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80&w=800",
    description: "Un ícono de los esports evolucionado. Pesa solo 60 gramos con el nuevo sensor HERO 2 de 32.000 DPI, interruptores híbridos LIGHTFORCE y tasa de sondeo de 4000Hz.",
    specs: {
      "Peso": "60 gramos Ultra-ligero",
      "Sensor": "HERO 2 (32,000 DPI / 500 IPS)",
      "Polling Rate": "Hasta 4000 Hz Inalámbrico",
      "Conector": "USB-C Carga Rápida (95h autonomía)"
    },
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
    description: "Diseñado en colaboración con pros de CS2 y Valorant. Pesa 54g con sensor óptico Razer Focus Pro 35K Gen-2 y tasa de sondeo nativa de 8000Hz.",
    specs: {
      "Peso": "54g Extremadamente Ligero",
      "Sensor": "Focus Pro 35K Optical Sensor Gen-2",
      "Polling Rate": "8000 Hz Wireless (HyperPolling)",
      "Switches": "Razer Optical Mouse Switches Gen-3"
    },
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
    description: "Estructura simétrica refinada sin perforaciones para máxima firmeza. Cuenta con encoder de rueda Pulsar Blue y sensor PixArt PAW3395.",
    specs: {
      "Peso": "53 gramos",
      "Sensor": "PixArt PAW3395 (26,000 DPI)",
      "Encoder": "Pulsar Blue Dustproof Encoder",
      "Micro-interruptores": "Ópticos Anti-doble Clic"
    },
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
    description: "Construcción en chasis de fibra de carbono aeroespacial. Peso récord mundial increíble de tan solo 35 gramos con rigidez estructural absoluta.",
    specs: {
      "Peso": "35 gramos (Fibra de Carbono Composite)",
      "Polling Rate": "Hasta 8000Hz Polling",
      "Batería": "Hasta 2 meses de autonomía en espera",
      "Edición": "Limitada Competitiva"
    },
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
    description: "Forma ergonómica asimétrica legendaria preferida por profesionales del FPS. Incluye receptor autónomo mejorado contra interferencias inalámbricas.",
    specs: {
      "Diseño": "Ergonómico Diestro icónico Zowie",
      "Receptor": "Enhanced Receiver Base estación de carga",
      "Sensor": "3370 Sensor Driverless (Plug & Play)",
      "Sin Software": "Ajuste físico de DPI y Hz inferior"
    },
    stock: 8
  },

  // 7. LAPTOPS (5 productos)
  {
    id: "laptop-1",
    name: "ASUS ROG Strix SCAR 18 (2024) RTX 4090 / i9-14900HX",
    category: "Laptops",
    price: 3699.99,
    rating: 4.9,
    reviewsCount: 64,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=800",
    description: "La cima del rendimiento en portátiles. Pantalla ROG Nebula HDR Mini LED de 18 pulgadas a 240Hz, refrigeración con metal líquido Conductonaut Extreme.",
    specs: {
      "Pantalla": "18\" QHD+ (2560x1600) 240Hz Mini LED 1100 nits",
      "Procesador": "Intel Core i9-14900HX",
      "Gráficos": "NVIDIA GeForce RTX 4090 16GB (175W)",
      "RAM / SSD": "64 GB DDR5 / 2TB PCIe 4.0 NVMe RAID 0"
    },
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
    description: "Impulsada por el chip IA LA2-Q de Lenovo que optimiza en tiempo real los cuadros por segundo. Chasis de aluminio anodizado color Onyx Grey.",
    specs: {
      "Pantalla": "16\" WQXGA (2560x1600) 240Hz 500 nits IPS",
      "Procesador": "Intel Core i9-14900HX",
      "Gráficos": "NVIDIA GeForce RTX 4080 12GB (175W)",
      "RAM / SSD": "32 GB DDR5 / 1TB PCIe 4.0 NVMe"
    },
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
    description: "Chasis unibody de aluminio mecanizado CNC ultra delgado. Única pantalla en el mundo capaz de alternar entre 4K 120Hz y FHD+ 240Hz de forma nativa.",
    specs: {
      "Pantalla": "16\" Dual-Mode Mini-LED (UHD+ 120Hz / FHD+ 240Hz)",
      "Procesador": "Intel Core i9-14900HX",
      "Gráficos": "NVIDIA GeForce RTX 4090 16GB",
      "Diseño": "Aluminio CNC Unibody Ultra-delgado (21.9mm)"
    },
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
    description: "El reemplazo de escritorio supremo. Touchpad háptico de cristal RGB sin costuras, teclado mecánico Cherry MX ultra low profile y 4 ranuras SSD M.2.",
    specs: {
      "Pantalla": "18\" 4K (3840x2400) 120Hz Mini LED",
      "Procesador": "Intel Core i9-14900HX",
      "RAM / Almacenamiento": "128 GB DDR5 / 4TB NVMe SSD",
      "Teclado": "Mecánico Cherry MX RGB"
    },
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
    description: "La potencia profesional reina para edición 8K, desarrollo de software e inteligencia artificial. Acabado en Negro Espacial revolucionario.",
    specs: {
      "Pantalla": "16.2\" Liquid Retina XDR 120Hz ProMotion (1600 nits)",
      "Chip": "Apple M3 Max (16 CPU cores / 40 GPU cores)",
      "Memoria": "48 GB Memoria Unificada (300 GB/s ancho de banda)",
      "Autonomía": "Hasta 22 Horas de Batería"
    },
    stock: 7
  }
];
