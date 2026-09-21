'use client';

import React from 'react';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Project Dashboard</h1>
        <p className="text-slate-500 text-sm">Overview of active projects, execution metrics, and AI recommendations.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
          <p className="text-xs font-medium text-slate-400 uppercase">Active Tasks</p>
          <h3 className="text-3xl font-bold text-slate-800 mt-2">24</h3>
          <span className="text-xs text-emerald-600 font-medium">↑ 12% this week</span>
        </div>
        <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
          <p className="text-xs font-medium text-slate-400 uppercase">AI Suggestions Generated</p>
          <h3 className="text-3xl font-bold text-sky-600 mt-2">142</h3>
          <span className="text-xs text-slate-500">Updated real-time</span>
        </div>
        <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
          <p className="text-xs font-medium text-slate-400 uppercase">Sprint Progress</p>
          <h3 className="text-3xl font-bold text-slate-800 mt-2">78%</h3>
          <span className="text-xs text-emerald-600 font-medium">On track</span>
        </div>
        <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
          <p className="text-xs font-medium text-slate-400 uppercase">Team Productivity</p>
          <h3 className="text-3xl font-bold text-slate-800 mt-2">94/100</h3>
          <span className="text-xs text-sky-600 font-medium">High Efficiency</span>
        </div>
      </div>

      <div className="p-6 bg-gradient-to-r from-sky-900 to-indigo-900 text-white rounded-xl shadow-md">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold">AI Workflow Optimization Ready</h2>
            <p className="text-sky-200 text-sm mt-1">Your core API routes and PostgreSQL index schemas are ready for automated optimization.</p>
          </div>
          <Link href="/ai/assistant" className="px-5 py-2.5 bg-white text-sky-900 font-bold rounded-lg text-sm hover:bg-sky-50 transition-all">
            Open AI Copilot
          </Link>
        </div>
      </div>
    </div>
  );
}
