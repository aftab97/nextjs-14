export async function ProuductQuantity() {
  let res = await fetch("https://api.vercel.app/products/1");
  let data = await res.json();

  return <h2>ProductQuantity();</h2>;
}
