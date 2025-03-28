import Products from "@/views/products";

const ProductsPage = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
  const products = await fetch(`${baseUrl}/api/products`)
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return <Products products={products && products} />;
};

export default ProductsPage;
