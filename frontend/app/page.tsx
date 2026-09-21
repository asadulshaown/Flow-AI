import Link from 'next/link';

export default function Home() {
  return (
    <main className="py-12 space-y-12 text-center">
      <div className="max-w-3xl mx-auto space-y-6">
        <span className="inline-block rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
          Next-Gen AI Project Management
        </span>

<h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Supercharge Your Workflow with{' '}
          <span className="text-sky-600">AI Intelligence</span>
        </h1>

<p className="text-lg text-slate-600">
          Automate task breakdowns, analyze system metrics, and accelerate development with integrated AI assistants.
        </p>

<div className="flex justify-center gap-4 pt-4">
          <Link
            href="/dashboard"
            className="rounded-lg bg-sky-600 px-6 py-3 font-semibold text-white shadow-md transition-all hover:bg-sky-700"
          >
            Go to Dashboard
          </Link>
          <Link
            href="/ai/assistant"
            className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50"
          >
            Try AI Assistant
          </Link>
        </div>
      </div>
    </main>
  );
}
