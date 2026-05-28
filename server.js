const express = require('express');
const bcrypt = require('bcrypt');
const path = require('path');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;
const BCRYPT_ROUNDS = 12;

app.use(express.json());
app.use(express.static(path.join(__dirname)));

// ── POST /api/register ───────────────────────────────────────────────────────
app.post('/api/register', async (req, res) => {
  const { username, email, password, homeCity, travelStyles } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: 'Username, email, and password are required.' });
  }
  if (username.length < 3 || username.length > 30) {
    return res.status(400).json({ error: 'Username must be between 3 and 30 characters.' });
  }
  if (!/^[a-zA-Z0-9_.-]+$/.test(username)) {
    return res.status(400).json({ error: 'Username may only contain letters, numbers, underscores, dashes, and dots.' });
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }
  if (password.length < 8) {
    return res.status(400).json({ error: 'Password must be at least 8 characters.' });
  }

  try {
    const passwordHash = await bcrypt.hash(password, BCRYPT_ROUNDS);

    db.prepare(`
      INSERT INTO users (username, email, password_hash, home_city, travel_styles)
      VALUES (?, ?, ?, ?, ?)
    `).run(
      username,
      email,
      passwordHash,
      homeCity || null,
      JSON.stringify(Array.isArray(travelStyles) ? travelStyles : [])
    );

    return res.status(201).json({ success: true });
  } catch (err) {
    if (err.code === 'SQLITE_CONSTRAINT_UNIQUE') {
      if (err.message.includes('username')) {
        return res.status(409).json({ error: 'That username is already taken.' });
      }
      if (err.message.includes('email')) {
        return res.status(409).json({ error: 'An account with that email already exists.' });
      }
    }
    console.error('Register error:', err);
    return res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
});

// ── POST /api/login ──────────────────────────────────────────────────────────
app.post('/api/login', async (req, res) => {
  const { usernameOrEmail, password } = req.body;

  if (!usernameOrEmail || !password) {
    return res.status(400).json({ error: 'Please fill in all fields.' });
  }

  const user = db.prepare(`
    SELECT * FROM users WHERE username = ? OR email = ? LIMIT 1
  `).get(usernameOrEmail, usernameOrEmail);

  if (!user) {
    return res.status(401).json({ error: 'Invalid username or password.' });
  }

  const match = await bcrypt.compare(password, user.password_hash);
  if (!match) {
    return res.status(401).json({ error: 'Invalid username or password.' });
  }

  return res.json({
    success: true,
    user: {
      id: user.id,
      username: user.username,
      email: user.email,
      homeCity: user.home_city,
      travelStyles: JSON.parse(user.travel_styles || '[]'),
    },
  });
});

app.listen(PORT, () => {
  console.log(`Roamr server running at http://localhost:${PORT}`);
});
