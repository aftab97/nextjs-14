// Ways to make this be dynamically rendered:
// import { cookies } from "next/headers";
// import { unstable_noStore } from "next/cache";

// default is 'auto'
// export const fetchCache = 'force-no-store'
export const dynamic = "force-dynamic";
// export const revalidate = 0

async function ProuductQuantity() {
  "use server"
  // unstable_noStore();

  // does not cache because  fetch comes after cookies() or headers()
  //   cookies();

  let res = await fetch("https://api.vercel.app/products/2", {
    // next: { revalidate: 0 },
    // cache: "no-store",
  });
  let data = await res.json();

  return <h1>test</h1>;
}

const Page = async () => {
  console.log("server");
  // cookies();
  return (
    <div>
      <h1>dynamically rendered (server component)</h1>
      <ProuductQuantity />
    </div>
  );
};

export default Page;
