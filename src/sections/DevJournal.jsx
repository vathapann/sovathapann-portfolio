// src/sections/DevJournal.jsx

const formatViews = (views) =>
  typeof views === "number" ? views.toLocaleString() : views;

export function DevJournal({ entries = [] }) {
  return (
    <section id="journal" className="py-20 px-4 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Dev Journal</h2>
            <p className="text-slate-400">
              Short notes, tricks, and reflections from my work in DevOps,
              development, and the Master of IT at UTS.
            </p>
          </div>
          <a
            href="/journal"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            View all entries
          </a>
        </div>

        <div className="space-y-4">
          {entries.length === 0 ? (
            <p className="text-sm text-slate-500">New posts coming soon.</p>
          ) : (
            entries.map((entry) => (
              <article
                key={entry.title}
                className="bg-slate-900/70 border border-slate-800 rounded-xl p-4"
              >
                <h3 className="text-lg font-semibold text-white">
                  {entry.title}
                </h3>
                <p className="text-sm text-slate-400 mt-2">
                  {entry.description}
                </p>
                <div className="text-xs text-slate-500 mt-3 flex gap-4 flex-wrap">
                  {entry.date && <span>{entry.date}</span>}
                  {entry.minutes && <span>{entry.minutes} min read</span>}
                  {entry.views != null && (
                    <span>{formatViews(entry.views)} views</span>
                  )}
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
