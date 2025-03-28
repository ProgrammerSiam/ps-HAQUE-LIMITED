"use client";
import { PageLayout } from "@/components/dashboard/PageLayout";
import { DataTable } from "@/components/dashboard/DataTable";
import { SearchBar } from "@/components/dashboard/SearchBar";
import Link from "next/link";

export default function Products() {
  return (
    <PageLayout
      title="Products"
      actions={
        <Link
          href="/dashboard/products/add"
          className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          Add Product
        </Link>
      }
    >
      <div className="bg-white rounded-xl shadow-sm p-6">
        <SearchBar onSearch={(query) => console.log(query)} />
        <DataTable
          columns={[
            { key: "name", label: "Product Name" },
            { key: "price", label: "Price" },
            { key: "status", label: "Status" },
            { key: "actions", label: "Actions" },
          ]}
          data={[]} // Add your data here
        />
      </div>
    </PageLayout>
  );
}
