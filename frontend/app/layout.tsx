import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI SaaS Project Management",
  description: "AI-powered SaaS Project Management Platform",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
        <header className="border-b bg-white/80 backdrop-blur sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link
              href="/"
              className="font-bold text-xl text-sky-600 flex items-center gap-2"
            >
              Flow-AI
            </Link>

            <nav className="flex items-center gap-6 text-sm font-medium">
              <Link
                href="/dashboard"
                className="hover:text-sky-600 transition-colors"
              >
                Dashboard
              </Link>

              <Link
                href="/tasks"
                className="hover:text-sky-600 transition-colors"
              >
                Tasks
              </Link>

              <Link
                href="/ai/assistant"
                className="hover:text-sky-600 transition-colors"
              >
                AI Assistant
              </Link>

              <Link
                href="/analytics"
                className="hover:text-sky-600 transition-colors"
              >
                Analytics
              </Link>

              <Link
                href="/team"
                className="hover:text-sky-600 transition-colors"
              >
                Team
              </Link>

              <Link
                href="/login"
                className="px-4 py-2 rounded-lg bg-sky-600 text-white font-semibold hover:bg-sky-700 transition-all shadow-sm"
              >
                Login
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-1 max-w-7xl w-full mx-auto p-6">
          {children}
        </main>

        <footer className="border-t bg-white py-6 text-center text-sm text-slate-500">
          © 2026 FlowAI SaaS Project Management Platform. All rights reserved.
        </footer>
      </body>
    </html>
  );
}