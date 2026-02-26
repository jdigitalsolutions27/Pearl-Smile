import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="container py-24">
      <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center">
        <h1 className="text-4xl font-semibold text-slate-900">Page not found</h1>
        <p className="mt-3 text-sm text-slate-600">The page you requested is unavailable or may have moved.</p>
        <Button asChild className="mt-6">
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </main>
  );
}
