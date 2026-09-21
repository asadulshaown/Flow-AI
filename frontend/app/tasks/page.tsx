'use client';

import React, { useState } from 'react';

interface Task {
  id: number;
  title: string;
  status: 'Todo' | 'In Progress' | 'Completed';
  priority: 'High' | 'Medium' | 'Low';
}

export default function TasksPage() {
  const [tasks] = useState<Task[]>([
    { id: 1, title: 'Implement JWT Refresh Token Handler', status: 'Completed', priority: 'High' },
    { id: 2, title: 'Configure SSLCommerz Payment Gateway Views', status: 'In Progress', priority: 'High' },
    { id: 3, title: 'Optimize PostgreSQL Queries for SaaS Dashboard', status: 'Todo', priority: 'Medium' },
    { id: 4, title: 'Design Linear-styled UI using Tailwind CSS', status: 'Completed', priority: 'Medium' },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Task Management</h1>
          <p className="text-slate-500 text-sm">Manage, filter, and track development sprints.</p>
        </div>
        <button className="px-4 py-2 bg-sky-600 text-white font-semibold rounded-lg text-sm hover:bg-sky-700 transition-all">
          + Create Task
        </button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-xs text-slate-500 uppercase font-semibold">
              <th className="p-4">Task Name</th>
              <th className="p-4">Status</th>
              <th className="p-4">Priority</th>
              <th className="p-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {tasks.map(t => (
              <tr key={t.id} className="hover:bg-slate-50">
                <td className="p-4 font-medium text-slate-800">{t.title}</td>
                <td className="p-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                    t.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' :
                    t.status === 'In Progress' ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-700'
                  }`}>
                    {t.status}
                  </span>
                </td>
                <td className="p-4">
                  <span className={`text-xs font-semibold ${t.priority === 'High' ? 'text-red-600' : 'text-slate-600'}`}>
                    {t.priority}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button className="text-sky-600 hover:text-sky-800 font-medium">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
