import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      page.tsx
      <Link href="/topics/streaming/loading-method">(Streaming) Loading Method</Link>
      <Link href="/topics/streaming/suspense">(Streaming) Suspense Method</Link>
    </main>
  );
}
