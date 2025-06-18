"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import classNames from "classnames";

interface ProductCardProps {
  name: string;
  image: string;
  price: string;
  rating?: number;
}

const ProductCard = ({
  name,
  image,
  price,
  rating = 4.5,
}: ProductCardProps) => {
  return (
    <motion.div
      className={classNames(
        "flex group flex-col items-center w-56 min-w-[14rem] flex-shrink-0 p-4 text-center transition-all relative",
        "bg-white rounded-md shadow-lg border-2",
        "border-gray-300"
      )}
    >
      {/* Product Image */}
      <div className="mb-3">
        <Image
          src={image}
          alt={name}
          width={150}
          height={150}
          className="h-40 object-contain transition-transform duration-700 ease-out group-hover:scale-125"
          priority={false}
        />
      </div>

      {/* Product Name & Price */}
      <h3 className="font-semibold text-gray-800 line-clamp-2 min-h-[2.5rem]">
        {name}
      </h3>

      {/* Rating Stars */}
      <div className="flex items-center justify-center gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      <p className={classNames("font-bold text-red-600 my-1", "text-base")}>
        {price}
      </p>

      {/* View Details Button */}
      <Link href={`/products/${name.toLowerCase().replace(/\s+/g, "-")}`}>
        <button
          className={classNames(
            "w-full py-2 px-6 rounded-full text-sm font-medium",
            "transition-all duration-200 transform",
            "flex items-center justify-center gap-2",
            "border border-gray-300 text-gray-700 hover:bg-gray-50"
          )}
        >
          "View details"
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
