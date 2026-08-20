const fs = require('fs');
const path = require('path');

const DB_FILE = path.join('/tmp', 'users_db.json');

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

function getUsers() {
  try {
    if (fs.existsSync(DB_FILE)) {
      const data = fs.readFileSync(DB_FILE, 'utf8');
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed) && parsed.length > 0) {
        if (!parsed.some(u => u.username.toLowerCase() === 'asbarrag')) {
          parsed.unshift(DEFAULT_ADMIN);
          saveUsers(parsed);
        }
        return parsed;
      }
    }
  } catch (err) {
    console.error('Error reading users db:', err);
  }
  const initial = [DEFAULT_ADMIN];
  saveUsers(initial);
  return initial;
}

function saveUsers(users) {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(users, null, 2), 'utf8');
  } catch (err) {
    console.error('Error saving users db:', err);
  }
}

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
    let users = getUsers();

    if (action === 'register') {
      if (!username || !password) {
        return res.status(400).json({ error: 'Nombre de usuario y contraseña son obligatorios' });
      }

      const cleanUsername = username.trim();
      const existingUser = users.find(u => u.username.toLowerCase() === cleanUsername.toLowerCase());

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

      users.push(newUser);
      saveUsers(users);

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
      const foundUser = users.find(
        u => u.username.toLowerCase() === cleanUsername.toLowerCase() && u.password === password
      );

      if (!foundUser) {
        return res.status(401).json({ error: 'Nombre de usuario o contraseña incorrectos' });
      }

      foundUser.lastAccess = new Date().toISOString();
      saveUsers(users);

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
      return res.status(200).json({
        success: true,
        users: users.map(u => ({
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
    return res.status(500).json({ error: 'Error interno del servidor: ' + err.message });
  }
};
