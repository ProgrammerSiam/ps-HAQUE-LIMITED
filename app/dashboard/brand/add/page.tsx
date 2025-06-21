"use client";
import { PageLayout } from "@/components/dashboard/PageLayout";
import { useRouter } from "next/navigation";
import { BrandForm } from "@/components/dashboard/BrandForm";

export default function AddBrand() {
  const router = useRouter();
  return (
    <PageLayout title="Add Brand">
      <BrandForm
        mode="add"
        onSubmitSuccess={() => router.push("/dashboard/brand")}
      />
    </PageLayout>
  );
}
