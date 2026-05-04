import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { findEntryBySlug, getEntrySlug, mapPostToEntry } from "../utils/journal.js";

const formatViews = (views) =>
  typeof views === "number" ? views.toLocaleString() : views;

export function JournalEntryPage({ entries = [] }) {
  const { slug } = useParams();
  const [remoteEntry, setRemoteEntry] = useState(null);
  const entry = findEntryBySlug(entries, slug) || remoteEntry;

  useEffect(() => {
    if (entry || !slug) return;
    let ignore = false;
    const load = async () => {
      try {
        const res = await fetch(`/posts?slug=${encodeURIComponent(slug)}`);
        if (!res.ok) return;
        const data = await res.json();
        if (!ignore && data) {
          setRemoteEntry(mapPostToEntry(data));
        }
      } catch (error) {
        console.warn("Failed to fetch post", error);
      }
    };
    load();
    return () => {
      ignore = true;
    };
  }, [entry, slug]);

  if (!entry) {
    return (
      <main className="pt-24 pb-20 px-4 bg-slate-950 min-h-screen">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-blue-300 mb-2">
                Dev Journal
              </p>
              <h1 className="text-2xl font-semibold text-white">
                Entry not found
              </h1>
              <p className="text-slate-400 mt-2">
                That writeup may have moved or been removed.
              </p>
            </div>
            <Link
              to="/journal"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800 transition-colors"
            >
              ← Back to journal
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const contentBlocks = Array.isArray(entry.content) ? entry.content : [];
  const metaParts = [
    entry.date || null,
    entry.minutes ? `${entry.minutes} min read` : null,
  ].filter(Boolean);

  return (
    <main className="pt-24 pb-20 px-4 bg-slate-950 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6 flex items-center justify-between gap-4">
          <Link
            to="/journal"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800 transition-colors"
          >
            ← All notes
          </Link>
          <div className="text-xs text-slate-500 flex gap-3 flex-wrap justify-end">
            {entry.views != null && (
              <span>{formatViews(entry.views)} views</span>
            )}
            {entry.minutes && <span>{entry.minutes} min read</span>}
            {entry.date && <span>{entry.date}</span>}
          </div>
        </div>

        <p className="text-[12px] uppercase tracking-[0.3em] text-blue-300 mb-3">
          Dev Journal
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-3">
          {entry.title}
        </h1>
        {entry.description && (
          <p className="text-lg text-slate-300 mb-8">{entry.description}</p>
        )}

        <article className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-900/30">
          <div className="text-xs uppercase tracking-wide text-slate-500 mb-4">
            {metaParts.length > 0 ? metaParts.join(" • ") : "Dev Journal"}
          </div>
          <div className="space-y-6 text-slate-100 leading-relaxed text-[15px]">
            {contentBlocks.length > 0 ? (
              contentBlocks.map((paragraph, idx) => (
                <p key={`${getEntrySlug(entry)}-${idx}`} className="text-slate-200">
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="text-slate-400">
                This entry is still being written. Check back soon.
              </p>
            )}
          </div>
        </article>
      </div>
    </main>
  );
}
