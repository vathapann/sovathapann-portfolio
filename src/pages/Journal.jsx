import { Link } from "react-router-dom";

const formatViews = (views) =>
  typeof views === "number" ? views.toLocaleString() : views;

export function JournalPage({ entries = [] }) {
  return (
    <main className="pt-24 pb-20 px-4 bg-slate-950 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-blue-300 mb-2">
              Dev Journal
            </p>
            <h1 className="text-3xl font-bold text-white mb-2">
              All notes & writeups
            </h1>
            <p className="text-slate-400">
              Deeper dives on deployments, networking, and study notes.
            </p>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800 transition-colors"
          >
            ← Back to home
          </Link>
        </div>

        {entries.length === 0 ? (
          <p className="text-sm text-slate-500">
            No journal entries yet. Check back soon.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {entries.map((entry) => (
              <article
                key={entry.title}
                className="bg-slate-900/70 border border-slate-800 rounded-xl p-5 hover:border-blue-500/40 transition-colors"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    {entry.date && (
                      <p className="text-[11px] uppercase tracking-wide text-blue-300 mb-1">
                        {entry.date}
                      </p>
                    )}
                    <h3 className="text-lg font-semibold text-white leading-snug">
                      {entry.title}
                    </h3>
                  </div>
                  {entry.minutes && (
                    <span className="text-[11px] px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                      {entry.minutes} min read
                    </span>
                  )}
                </div>
                <p className="text-sm text-slate-400 mt-3">{entry.description}</p>
                <div className="text-xs text-slate-500 mt-4 flex gap-4 flex-wrap">
                  {entry.views != null && (
                    <span>{formatViews(entry.views)} views</span>
                  )}
                  {entry.minutes && <span>{entry.minutes} min read</span>}
                  {entry.date && <span>{entry.date}</span>}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
