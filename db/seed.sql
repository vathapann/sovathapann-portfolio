CREATE TABLE IF NOT EXISTS posts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT,
  body TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT OR REPLACE INTO posts (title, slug, excerpt, body, created_at) VALUES
('Example', 'example', 'Excerpt', 'Body text', '2025-01-01T00:00:00Z');
