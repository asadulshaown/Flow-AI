'use client';

import React from 'react';

export default function TeamPage() {
  const members = [
    { name: 'Lead Developer', role: 'Full Stack Engineer', status: 'Active' },
    { name: 'AI Product Lead', role: 'Machine Learning Specialist', status: 'Active' },
    { name: 'UI/UX Designer', role: 'Frontend Architect', status: 'Active' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Team Workspace</h1>
        <p className="text-slate-500 text-sm">Manage team roles and collaborator permissions.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {members.map((m, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-lg">
              {m.name.charAt(0)}
            </div>
            <div>
              <h3 className="font-bold text-slate-800">{m.name}</h3>
              <p className="text-xs text-slate-500">{m.role}</p>
            </div>
            <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700">
              {m.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
