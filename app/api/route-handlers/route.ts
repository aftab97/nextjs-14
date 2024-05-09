// hard reloads can cause revalidation

// this is another way of revalidating
export const revalidate = 60

export async function GET() {
  const res = await fetch("https://api.vercel.app/products/1", {
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      // this will revalidate cached data
      revalidate: 60
    }
  });
  const data = await res.json();

  return Response.json({ data });
}
