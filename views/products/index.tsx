"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ProductType } from "@/data/products";
import Sort from "./components/Sort";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  products: ProductType[];
}

export default function ProductGrid({ products }: Props) {
  // console.log(products);
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

  // console.log(productsToRender[1].img);

  return (
    <section className="py-12 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex  justify-between items-center mb-8">
          <div className="text-center sm:text-left">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              All Products
            </h2>
            <p className="text-gray-600 mt-2">
              Showing {showing} of {totalProducts} products
            </p>
          </div>

          <Sort sortBy={sortBy} setSortBy={setSortBy} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {productsToRender?.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden h-full flex flex-col border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative aspect-square overflow-hidden bg-gray-50">
                <Image
                  src={product.img}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="object-contain p-6 transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    console.error("Image failed to load:", product.img);
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/products/placeholder.png";
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-5 transition-all duration-300" />
              </div>
              <CardContent className="p-4 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-2xl font-bold text-red-600">
                    <span className="font-extrabold">&#2547;</span>{" "}
                    {product.price}
                  </p>
                </div>
                <Link href={`/products/${product.id}`} className="mt-4">
                  <Button
                    variant="destructive"
                    size="sm"
                    className="w-full transition-all duration-300 hover:scale-[1.02] bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md shadow-sm hover:shadow-md flex items-center justify-center gap-2"
                  >
                    <span>View Details</span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="hover:bg-gray-100 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex gap-2">
              <AnimatePresence mode="wait">
                {Array.from({ length: totalPages }, (_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className={`transition-all duration-300 rounded-full ${
                        currentPage === i + 1
                          ? "bg-red-600 text-white hover:bg-red-700 scale-105"
                          : "hover:bg-gray-100 hover:scale-105"
                      }`}
                      onClick={() => setCurrentPage(i + 1)}
                    >
                      {i + 1}
                    </Button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="hover:bg-gray-100 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
