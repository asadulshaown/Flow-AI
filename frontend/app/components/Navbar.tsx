
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const [error, setError] = useState('');

  // ১. ইউজার লগইন অবস্থায় আছে কিনা এবং প্রোটেক্টেড পেজে আছে কিনা তা চেক করা
  useEffect(() => {
    const token = localStorage.getItem('access_token');
    setIsLoggedIn(!!token);

    // প্রোটেক্টেড রাউটসমূহের লিস্ট
    const protectedRoutes = ['/dashboard', '/tasks', '/ai/assistant', '/analytics', '/team'];

    // লগইন ছাড়া সরাসরি ব্রাউজারে URL দিয়ে প্রোটেক্টেড পেজে ঢুকতে চাইলে /login-এ রিডাইরেক্ট হবে
    if (!token && protectedRoutes.includes(pathname)) {
      router.push('/login');
    }
  }, [pathname, router]);

  // ২. লগআউট হ্যান্ডলার
  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    setIsLoggedIn(false);
    router.push('/login');
  };

  // ৩. লিংকে ক্লিক করার সময় লগইন চেক
  const handleProtectedLink = (e: React.MouseEvent, href: string) => {
    if (!isLoggedIn) {
      e.preventDefault(); // লিংক ন্যাভিগেশন থামানো
      alert( 'You must be logged in to access this page.');
      router.push('/login');
    }
  };

  return (
    <header className="border-b bg-white/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-bold text-xl text-sky-600 flex items-center gap-2"
        >
          Flow-AI
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium">
          {[
            { name: 'Dashboard', href: '/dashboard' },
            { name: 'Tasks', href: '/tasks' },
            { name: 'AI Assistant', href: '/ai/assistant' },
            { name: 'Analytics', href: '/analytics' },
            { name: 'Team', href: '/team' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleProtectedLink(e, link.href)}
              className="hover:text-sky-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}

          {/* লগইন স্ট্যাটাসের ওপর ভিত্তি করে বাটন পরিবর্তন */}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition-all shadow-sm"
            >
              Logout
            </button>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                href="/login"
                className="hover:text-sky-600 transition-colors"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="px-4 py-2 rounded-lg bg-sky-600 text-white font-semibold hover:bg-sky-700 transition-all shadow-sm"
              >
                Register
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}