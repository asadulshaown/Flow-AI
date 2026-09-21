'use client';

import React, { useEffect, useState } from 'react';

export default function AISuggestPage() {
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    setSuggestions([
      "Optimize PostgreSQL indexing for high concurrency.",
      "Integrate SSLCommerz sandbox payment gateway.",
      "Implement JWT auto-refresh token strategy.",
      "Add dark mode theme using Tailwind CSS variable tokens."
    ]);
  }, []);

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Automated AI Suggestions</h1>
        <p className="text-slate-500 text-sm">System recommended optimizations for your stack.</p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm divide-y divide-slate-100">
        {suggestions.map((item, idx) => (
          <div key={idx} className="p-4 flex items-center justify-between hover:bg-slate-50">
            <span className="text-sm font-medium text-slate-700">💡 {item}</span>
            <button className="text-xs px-3 py-1.5 rounded bg-sky-50 text-sky-700 font-semibold hover:bg-sky-100">
              Apply
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
