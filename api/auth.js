const fs = require('fs');
const path = require('path');

const DB_FILE = path.join('/tmp', 'users_db.json');

function getUsers() {
  try {
    if (fs.existsSync(DB_FILE)) {
      const data = fs.readFileSync(DB_FILE, 'utf8');
      return JSON.parse(data);
    }
  } catch (err) {
    console.error('Error reading users db:', err);
  }
  return [];
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
        createdAt: new Date().toISOString()
      };

      users.push(newUser);
      saveUsers(users);

      return res.status(200).json({
        success: true,
        message: 'Cuenta creada con éxito',
        user: { username: newUser.username }
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

      return res.status(200).json({
        success: true,
        message: 'Inicio de sesión exitoso',
        user: { username: foundUser.username }
      });
    } else if (action === 'list') {
      return res.status(200).json({
        success: true,
        users: users.map(u => ({ username: u.username, createdAt: u.createdAt }))
      });
    }

    return res.status(400).json({ error: 'Acción no válida' });
  } catch (err) {
    return res.status(500).json({ error: 'Error interno del servidor: ' + err.message });
  }
};
