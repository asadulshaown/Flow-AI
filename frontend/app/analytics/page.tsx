'use client';

import React from 'react';

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Analytics & Insights</h1>
        <p className="text-slate-500 text-sm">System performance metrics and user engagement stats.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="font-semibold text-slate-800 mb-4">API Response Latency (ms)</h2>
          <div className="h-48 flex items-end gap-3 justify-between px-4 pb-2 bg-slate-50 rounded-lg">
            {[45, 60, 35, 80, 25, 30, 40].map((val, idx) => (
              <div key={idx} className="w-full bg-sky-500 rounded-t" style={{ height: `${val}%` }}></div>
            ))}
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="font-semibold text-slate-800 mb-4">AI Queries Executed</h2>
          <div className="h-48 flex items-end gap-3 justify-between px-4 pb-2 bg-slate-50 rounded-lg">
            {[30, 50, 75, 90, 65, 85, 95].map((val, idx) => (
              <div key={idx} className="w-full bg-indigo-500 rounded-t" style={{ height: `${val}%` }}></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
