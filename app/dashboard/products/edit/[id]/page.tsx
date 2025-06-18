"use client";
import ProductForm from "@/components/ProductForm";
import { useParams } from "next/navigation";
export default function EditProductPage() {
  const params = useParams();
  const id =
    typeof params.id === "string"
      ? params.id
      : Array.isArray(params.id)
        ? params.id[0]
        : undefined;
  return <ProductForm productId={id} />;
}
