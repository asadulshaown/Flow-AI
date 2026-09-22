'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // ১. ড্যাঙ্গো ব্যাকএন্ডের JWT Login API-তে POST রিকোয়েস্ট পাঠানো
      const res = await fetch('http://localhost:8000/api/users/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok) {
        // ২. সফল লগইন হলে JWT টোকেনগুলো localStorage-এ সেভ করা
        localStorage.setItem('access_token', data.access);
        localStorage.setItem('refresh_token', data.refresh);

        // ৩. ড্যাশবোর্ডে রিডাইরেক্ট করা
        router.push('/dashboard');
      } else {
        // ৪. ইউজারনেম বা পাসওয়ার্ড ভুল হলে এরর মেসেজ দেখানো
        setError(data.detail || 'Invalid username or password');
      }
    } catch (err) {
      setError('Failed to connect to backend server');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto py-12">
      <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Sign In</h2>
          <p className="text-slate-500 text-sm">Access your AI SaaS workspace</p>
        </div>

        {/* এরর মেসেজ দেখানোর স্থান */}
        {error && (
          <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase text-slate-500 mb-1">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-slate-500 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 bg-sky-600 text-white font-semibold rounded-lg text-sm hover:bg-sky-700 transition-all shadow-sm disabled:opacity-50"
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}