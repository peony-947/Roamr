const Database = require('better-sqlite3');
const path = require('path');

// ── Database Configuration ───────────────────────────────────────────────────
// Set DB_PATH via environment variable or update the default path below.
// Example: DB_PATH=/var/data/roamr.db node server.js
const DB_CONFIG = {
  path: process.env.DB_PATH || path.join(__dirname, 'roamr.db'),
};

const db = new Database(DB_CONFIG.path);

db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id            INTEGER PRIMARY KEY AUTOINCREMENT,
    username      TEXT    NOT NULL UNIQUE COLLATE NOCASE,
    email         TEXT    NOT NULL UNIQUE COLLATE NOCASE,
    password_hash TEXT    NOT NULL,
    home_city     TEXT,
    travel_styles TEXT    NOT NULL DEFAULT '[]',
    created_at    INTEGER NOT NULL DEFAULT (unixepoch())
  );
`);

module.exports = db;
