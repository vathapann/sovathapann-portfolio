export function getEntrySlug(entry = {}) {
  const base = entry.slug || entry.title || "";
  return (
    base
      .toString()
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "") || "entry"
  );
}

export function findEntryBySlug(entries = [], slug = "") {
  if (!slug) return null;
  return entries.find((entry) => getEntrySlug(entry) === slug) || null;
}

function formatDate(dateString) {
  if (!dateString) return undefined;
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return undefined;
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function estimateMinutes(text = "") {
  const words = text.split(/\s+/).filter(Boolean).length;
  return words > 0 ? Math.max(1, Math.ceil(words / 200)) : undefined;
}

export function mapPostToEntry(post = {}) {
  const body = post.body || "";
  const paragraphs = body
    ? body
        .split(/\n\s*\n/)
        .map((p) => p.trim())
        .filter(Boolean)
    : [];

  const excerpt =
    post.excerpt ||
    (paragraphs.length > 0 ? paragraphs[0] : body.slice(0, 140));

  return {
    title: post.title || "Untitled post",
    slug: post.slug,
    description: excerpt,
    content: paragraphs,
    date: formatDate(post.created_at),
    minutes: estimateMinutes(body),
  };
}
