// src/sections/DevJournal.jsx

import { Link } from "react-router-dom";
import { getEntrySlug } from "../utils/journal.js";

const formatViews = (views) =>
  typeof views === "number" ? views.toLocaleString() : views;

export function DevJournal({ entries = [] }) {
  return (
    <section id="journal" className="py-20 px-4 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">
              // 05 — Writing
            </p>
            <h2 className="text-3xl font-bold text-white mb-2">Dev Journal</h2>
            <p className="text-slate-400 max-w-md">
              Short notes, tricks, and reflections from my work in DevOps,
              development, and the Master of IT at UTS.
            </p>
          </div>
          <a
            href="/journal"
            className="shrink-0 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors duration-200"
          >
            View all entries
          </a>
        </div>

        <div className="space-y-4">
          {entries.length === 0 ? (
            <p className="text-sm text-slate-500">New posts coming soon.</p>
          ) : (
            entries.map((entry) => (
              <Link
                key={entry.title}
                to={`/journal/${getEntrySlug(entry)}`}
                className="block bg-slate-900/70 border border-slate-800 rounded-xl p-4 sm:p-5 hover:border-blue-500/40 hover:shadow-blue-500/5 hover:shadow-lg transition-all duration-200"
              >
                <h3 className="text-base sm:text-lg font-semibold text-white leading-snug">
                  {entry.title}
                </h3>
                <p className="text-sm text-slate-400 mt-2 line-clamp-2">
                  {entry.description}
                </p>
                <div className="text-xs text-slate-500 mt-3 flex gap-4 flex-wrap">
                  {entry.date && <span>{entry.date}</span>}
                  {entry.minutes && <span>{entry.minutes} min read</span>}
                  {entry.views != null && (
                    <span>{formatViews(entry.views)} views</span>
                  )}
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
