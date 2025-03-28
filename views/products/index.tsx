"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ProductType } from "@/data/products";
import Sort from "./components/Sort";
import Link from "next/link";

interface Props {
  products: ProductType[];
}

export default function ProductGrid({ products }: Props) {
  const [sortBy, setSortBy] = useState("Default-Sorting");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;
  const totalProducts = products?.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const productsToRender = useMemo(() => {
    const startIndex = (currentPage - 1) * productsPerPage;
    return products?.slice(startIndex, startIndex + productsPerPage);
  }, [currentPage, products]);

  const startRange = (currentPage - 1) * productsPerPage + 1;
  const endRange = Math.min(startRange + productsPerPage - 1, totalProducts);
  const showing = `${startRange}-${endRange}`;

  return (
    <section className="py-12 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              All Products
            </h2>
            <p className="text-muted-foreground mt-2">
              Showing {showing} of {totalProducts} products
            </p>
          </div>

          <Sort sortBy={sortBy} setSortBy={setSortBy} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {productsToRender?.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden group h-full flex flex-col border-app-black/10"
            >
              <div className="relative aspect-square overflow-hidden bg-muted/20">
                <Image
                  src={product.img || "/images/products/placeholder.png"}
                  alt={product.name}
                  fill
                  className="object-contain p-4 transition-transform group-hover:scale-105 duration-300 ease-in-out"
                />
              </div>
              <CardContent className="p-4 flex flex-col flex-grow">
                <div className="flex-grow">
                  {/* <p className="text-sm text-muted-foreground mb-1">
                                        {product.category}
                                    </p> */}
                  <h3 className="text-lg font-medium mb-1 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="font-bold text-destructive">
                    <span className="font-extrabold">&#2547;</span>{" "}
                    {product.price}
                  </p>
                </div>
                <Link href={`/products/${product.id}`}>
                  <Button
                    variant="destructive"
                    size="sm"
                    className="mt-3 w-full cursor-pointer"
                  >
                    View Details
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-10">
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="cursor-pointer"
            >
              &lt;
            </Button>
            {Array.from({ length: totalPages }, (_, i) => (
              <Button
                key={i}
                variant="outline"
                size="sm"
                className={
                  currentPage === i + 1 ? "bg-destructive text-white" : ""
                }
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </Button>
            ))}
            <Button
              variant="outline"
              size="icon"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="cursor-pointer"
            >
              &gt;
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
