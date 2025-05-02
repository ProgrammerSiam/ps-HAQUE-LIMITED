import { products } from "@/data/products";
import Products from "@/views/products";

export default function ProductsPage() {
    return <Products products={products && products} />;
}


// const ProductsPage = async () => {
//     // const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
//     // const products = await fetch(`${baseUrl}/api/products`)
//     //   .then((res) => res.json())
//     //   .catch((err) => console.log(err));

//     return <Products products={products && products} />;
// };

// export default ProductsPage;
