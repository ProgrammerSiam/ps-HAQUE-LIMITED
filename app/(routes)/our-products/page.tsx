import Products from "@/views/products";

async function getProducts() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${baseUrl}/api/products`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch products");
  const products = await res.json();
  return products;
}

export default async function ProductsPage() {
  const products = await getProducts();
  console.log(products);
  return <Products products={products} />;
}

// const ProductsPage = async () => {
//     // const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
//     // const products = await fetch(`${baseUrl}/api/products`)
//     //   .then((res) => res.json())
//     //   .catch((err) => console.log(err));

//     return <Products products={products && products} />;
// };

// export default ProductsPage;
