const { MongoClient } = require('mongodb');

const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://abarraganube_db_user:ijDnYn6FJ2SR61Jf@cluster0.mvdttkd.mongodb.net/?retryWrites=true&w=majority";
const DB_NAME = "pc_masters_db";

let cachedClient = null;

async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient.db(DB_NAME);
  }
  const client = await MongoClient.connect(MONGODB_URI);
  cachedClient = client;
  return client.db(DB_NAME);
}

const DEFAULT_ADMIN = {
  id: "usr_admin_001",
  username: "ASbarrag",
  password: "Sebas1307",
  name: "Antonio Barragán",
  email: "asbarraganc@ube.edu.ec",
  role: "Admin",
  status: "Activo",
  createdAt: "2026-08-20T12:00:00.000Z",
  lastAccess: new Date().toISOString()
};

const INITIAL_PRODUCTS = [
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

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    let bodyObj = req.body;
    if (typeof bodyObj === 'string') {
      try { bodyObj = JSON.parse(bodyObj); } catch (e) {}
    }

    const { action, username, password } = bodyObj || {};
    const db = await connectToDatabase();
    const usersCollection = db.collection('users');
    const productsCollection = db.collection('products');

    // Ensure default admin exists in MongoDB Atlas
    const adminInDb = await usersCollection.findOne({ username: { $regex: /^ASbarrag$/i } });
    if (!adminInDb) {
      await usersCollection.insertOne(DEFAULT_ADMIN);
    }

    // Auto-seed products in MongoDB Atlas if collection is empty
    const prodCount = await productsCollection.countDocuments();
    if (prodCount === 0) {
      await productsCollection.insertMany(INITIAL_PRODUCTS);
    }

    if (action === 'register') {
      if (!username || !password) {
        return res.status(400).json({ error: 'Nombre de usuario y contraseña son obligatorios' });
      }

      const cleanUsername = username.trim();
      const existingUser = await usersCollection.findOne({ username: { $regex: new RegExp(`^${cleanUsername}$`, 'i') } });

      if (existingUser) {
        return res.status(400).json({ error: 'El nombre de usuario ya está registrado' });
      }

      const newUser = {
        id: 'usr_' + Date.now(),
        username: cleanUsername,
        password: password,
        name: cleanUsername,
        email: cleanUsername.toLowerCase() + '@pcmasters.com',
        role: 'Client',
        status: 'Activo',
        createdAt: new Date().toISOString(),
        lastAccess: new Date().toISOString()
      };

      await usersCollection.insertOne(newUser);

      return res.status(200).json({
        success: true,
        message: 'Cuenta creada con éxito',
        user: {
          id: newUser.id,
          username: newUser.username,
          name: newUser.name,
          email: newUser.email,
          role: newUser.role,
          status: newUser.status
        }
      });
    } else if (action === 'login') {
      if (!username || !password) {
        return res.status(400).json({ error: 'Ingresa tu nombre de usuario y contraseña' });
      }

      const cleanUsername = username.trim();
      const foundUser = await usersCollection.findOne({
        username: { $regex: new RegExp(`^${cleanUsername}$`, 'i') },
        password: password
      });

      if (!foundUser) {
        return res.status(401).json({ error: 'Nombre de usuario o contraseña incorrectos' });
      }

      await usersCollection.updateOne(
        { _id: foundUser._id },
        { $set: { lastAccess: new Date().toISOString() } }
      );

      return res.status(200).json({
        success: true,
        message: 'Inicio de sesión exitoso',
        user: {
          id: foundUser.id,
          username: foundUser.username,
          name: foundUser.name || foundUser.username,
          email: foundUser.email || (foundUser.username + '@pcmasters.com'),
          role: foundUser.role || (foundUser.username.toLowerCase() === 'asbarrag' ? 'Admin' : 'Client'),
          status: foundUser.status || 'Activo'
        }
      });
    } else if (action === 'list') {
      const allUsers = await usersCollection.find({}).toArray();
      return res.status(200).json({
        success: true,
        users: allUsers.map(u => ({
          id: u.id,
          username: u.username,
          name: u.name || u.username,
          email: u.email || (u.username + '@pcmasters.com'),
          role: u.role || 'Client',
          status: u.status || 'Activo',
          createdAt: u.createdAt
        }))
      });
    } else if (action === 'get_products') {
      const prods = await productsCollection.find({}).toArray();
      return res.status(200).json({
        success: true,
        products: prods
      });
    }

    return res.status(400).json({ error: 'Acción no válida' });
  } catch (err) {
    return res.status(500).json({ error: 'Error de conexión a MongoDB Atlas: ' + err.message });
  }
};
