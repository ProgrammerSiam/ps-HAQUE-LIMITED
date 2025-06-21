// "use client";

// import { PageLayout } from "@/components/dashboard/PageLayout";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { toast } from "react-hot-toast";
// import { databaseService } from "@/lib/supabaseService";
// import type { Brand } from "@/lib/types/database.types";
// import { BrandForm } from "@/components/dashboard/BrandForm";

// export default function EditBrand({ params }: { params: { id: string } }) {
//   const { id } = params;
//   const router = useRouter();
//   const [loading, setLoading] = useState(true);
//   const [brand, setBrand] = useState<Brand | null>(null);

//   useEffect(() => {
//     const loadBrand = async () => {
//       try {
//         const brand = await databaseService.brands.getById(id);
//         if (brand) {
//           setBrand(brand);
//         }
//       } catch (error: unknown) {
//         if (error instanceof Error) {
//           toast.error(error.message || "Failed to load brand");
//         } else {
//           toast.error("Failed to load brand");
//         }
//       } finally {
//         setLoading(false);
//       }
//     };
//     loadBrand();
//   }, [id]);

//   if (loading) {
//     return (
//       <PageLayout title="Edit Brand">
//         <div className="flex items-center justify-center h-64">
//           <div className="text-gray-500">Loading brand...</div>
//         </div>
//       </PageLayout>
//     );
//   }

//   return (
//     <PageLayout title="Edit Brand">
//       <BrandForm
//         mode="edit"
//         initialData={brand || undefined}
//         brandId={id}
//         loading={false}
//         onSubmitSuccess={() => router.push("/dashboard/brand")}
//       />
//     </PageLayout>
//   );
// }

"use client";

import { PageLayout } from "@/components/dashboard/PageLayout";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { databaseService } from "@/lib/supabaseService";
import type { Brand } from "@/lib/types/database.types";
import { BrandForm } from "@/components/dashboard/BrandForm";

export default function EditBrand({
  params,
}: {
  params: Promise<{ id: string }>; // Changed: params is now a Promise
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [brand, setBrand] = useState<Brand | null>(null);
  const [id, setId] = useState<string | null>(null); // State to store the resolved id

  // Resolve params on component mount
  useEffect(() => {
    const resolveParams = async () => {
      const resolvedParams = await params;
      setId(resolvedParams.id);
    };

    resolveParams();
  }, [params]);

  useEffect(() => {
    if (!id) return; // Wait for id to be resolved

    const loadBrand = async () => {
      try {
        const brand = await databaseService.brands.getById(id);
        if (brand) {
          setBrand(brand);
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          toast.error(error.message || "Failed to load brand");
        } else {
          toast.error("Failed to load brand");
        }
      } finally {
        setLoading(false);
      }
    };

    loadBrand();
  }, [id]);

  if (loading || !id) {
    return (
      <PageLayout title="Edit Brand">
        <div className="flex items-center justify-center h-64">
          <div className="text-gray-500">Loading brand...</div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title="Edit Brand">
      <BrandForm
        mode="edit"
        initialData={brand || undefined}
        brandId={id}
        loading={false}
        onSubmitSuccess={() => router.push("/dashboard/brand")}
      />
    </PageLayout>
  );
}
