// "use client"

import Link from "next/link";
import { Suspense } from "react";

export async function fetchRevenue() {
  try {
    // We artificially delay a response for demo purposes.
    console.log("Fetching data...");
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log("Data fetch completed after 3 seconds. (fake)");
    return true;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
}

export default async function LoadingMethod() {
  const fakeFetch = fetchRevenue();

  return (
    <div>
      {/* In production change this to wherever it is needed to show a loader 
          or when a component needs data before being loaded 
      */}
      <Suspense fallback={<div>loading this component....</div>}>
        <h1>The Suspense Method</h1>
        <Link href="/">(Streaming) - Loading Method</Link>
      </Suspense>
    </div>
  );
}
