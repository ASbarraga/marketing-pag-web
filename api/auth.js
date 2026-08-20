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
    const { action, username, password } = req.body || {};
    const db = await connectToDatabase();
    const usersCollection = db.collection('users');

    // Ensure default admin exists in MongoDB Atlas
    const adminInDb = await usersCollection.findOne({ username: { $regex: /^ASbarrag$/i } });
    if (!adminInDb) {
      await usersCollection.insertOne(DEFAULT_ADMIN);
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
    }

    return res.status(400).json({ error: 'Acción no válida' });
  } catch (err) {
    return res.status(500).json({ error: 'Error de conexión a MongoDB Atlas: ' + err.message });
  }
};
