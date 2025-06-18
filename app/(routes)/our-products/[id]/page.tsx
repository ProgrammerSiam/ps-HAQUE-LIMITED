import Image from "next/image";

async function getProduct(id: string) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${baseUrl}/api/products/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) return null;
  return await res.json();
}

export default async function ProductDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProduct(params.id);
  if (!product || product.error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4 text-red-600">
          Product Not Found
        </h2>
        <p className="text-gray-500">
          The product you are looking for does not exist.
        </p>
      </div>
    );
  }
  return (
    <section className="bg-white min-h-screen flex items-center justify-center py-20">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row gap-8">
        <div className="flex-shrink-0 flex items-center justify-center w-full md:w-1/2">
          <Image
            src={product.image_url || "/images/products/placeholder.png"}
            alt={product.title}
            width={350}
            height={350}
            className="object-contain rounded-lg border"
          />
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {product.title}
            </h1>
            <p className="text-lg text-gray-600 mb-4">{product.description}</p>
            <div className="mb-4">
              <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium mr-2">
                Category: {product.category}
              </span>
              <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                Brand: {product.brand_name}
              </span>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl font-bold text-red-600">
                &#2547; {product.selling_price}
              </span>
              {product.original_price > product.selling_price && (
                <span className="text-lg text-gray-400 line-through">
                  &#2547; {product.original_price}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
