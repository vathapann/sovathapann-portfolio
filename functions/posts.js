/**
 * D1-backed posts endpoint.
 * Expects a D1 binding named "DB" with a "posts" table.
 *
 * Example schema:
 * CREATE TABLE posts (
 *   id INTEGER PRIMARY KEY AUTOINCREMENT,
 *   title TEXT NOT NULL,
 *   slug TEXT NOT NULL UNIQUE,
 *   excerpt TEXT,
 *   body TEXT,
 *   created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
 *   updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
 * );
 */

const SELECT_FIELDS =
  "id, title, slug, excerpt, body, created_at, updated_at";

export const onRequestGet = async ({ env, request }) => {
  if (!env.DB) {
    return Response.json(
      { error: "D1 binding 'DB' is missing" },
      { status: 500 }
    );
  }

  const url = new URL(request.url);
  const slug = url.searchParams.get("slug");

  if (slug) {
    const row = await env.DB.prepare(
      `SELECT ${SELECT_FIELDS} FROM posts WHERE slug = ? LIMIT 1`
    )
      .bind(slug)
      .first();

    if (!row) {
      return new Response("Not found", { status: 404 });
    }

    return Response.json(row);
  }

  const limitParam = parseInt(url.searchParams.get("limit") || "20", 10);
  const limit = Number.isFinite(limitParam)
    ? Math.min(Math.max(limitParam, 1), 100)
    : 20;

  const { results } = await env.DB.prepare(
    `SELECT id, title, slug, excerpt, created_at FROM posts ORDER BY created_at DESC LIMIT ?`
  )
    .bind(limit)
    .all();

  return Response.json(results);
};

export const onRequestPost = async ({ env, request }) => {
  if (!env.DB) {
    return Response.json(
      { error: "D1 binding 'DB' is missing" },
      { status: 500 }
    );
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { title, slug, body = "", excerpt = "" } = payload || {};
  if (!title || !slug) {
    return Response.json(
      { error: "title and slug are required" },
      { status: 400 }
    );
  }

  try {
    const result = await env.DB.prepare(
      "INSERT INTO posts (title, slug, body, excerpt) VALUES (?, ?, ?, ?)"
    )
      .bind(title, slug, body, excerpt)
      .run();

    return Response.json(
      { id: result.meta.last_row_id, slug },
      { status: 201 }
    );
  } catch (error) {
    console.error("Failed to insert post", error);
    return Response.json({ error: "Failed to insert" }, { status: 500 });
  }
};
