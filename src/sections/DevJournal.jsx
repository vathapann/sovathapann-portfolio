// src/sections/DevJournal.jsx

export function DevJournal({ entries = [] }) {
  return (
    <section id="journal" className="py-20 px-4 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4">Dev Journal</h2>
        <p className="text-slate-400 mb-8">
          Short notes, tricks, and reflections from my work in DevOps,
          development, and the Master of IT at UTS.
        </p>

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
                <p className="text-xs text-slate-500 mt-2">{entry.date}</p>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
