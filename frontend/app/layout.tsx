import type { Metadata } from "next";
import type { ReactNode } from "react";
import Navbar from "@/app/components/Navbar"; // Navbar 
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
        {/* clint header and navigation */}
        <Navbar />

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