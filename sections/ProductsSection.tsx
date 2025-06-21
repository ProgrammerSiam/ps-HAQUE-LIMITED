"use client";
import ProductCard from "@/components/ProductCards";
import { useState, useRef, useEffect } from "react";
import {
  productImg1,
  productImg2,
  productImg3,
  productImg4,
  productImg5,
} from "@/constants/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/Header";
import Link from "next/link";

// Define products for first row
const productsRow1 = [
  {
    name: "Glucose Biscuit",
    image: productImg1.src,
    price: "5.00৳",
  },
  {
    name: "Imperial 786",
    image: productImg2.src,
    price: "12.00৳",
  },
  {
    name: "Dark Chocolate Digestive",
    image: productImg3.src,
    price: "50.00৳",
  },
  {
    name: "Ding Dong",
    image: productImg4.src,
    price: "5.00৳",
  },
  {
    name: "Antiseptic Soap",
    image: productImg5.src,
    price: "50.00৳",
  },
];

// Define products for second row - same products but we'll scroll them in reverse
const productsRow2 = [...productsRow1].reverse();

// For better infinity loop, triple the products
const duplicatedRow1 = [...productsRow1, ...productsRow1, ...productsRow1];
const duplicatedRow2 = [...productsRow2, ...productsRow2, ...productsRow2];

const ProductsSection = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  // Animation references
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const row1AnimRef = useRef<number | null>(null);
  const row2AnimRef = useRef<number | null>(null);

  // Animation speeds in pixels per second
  const row1Speed = 30;
  const row2Speed = 40;

  // Width of a single card including margin (in pixels)
  const cardWidth = 230;

  // Total width of the original products set (used for resetting loop position)
  const totalWidth1 = productsRow1.length * cardWidth;
  const totalWidth2 = productsRow2.length * cardWidth;

  // Initialize animations when component mounts
  useEffect(() => {
    // Start animations if not already running
    if (!row1AnimRef.current) startRow1Animation();
    if (!row2AnimRef.current) startRow2Animation();

    return () => {
      // Clean up animations on unmount
      if (row1AnimRef.current) cancelAnimationFrame(row1AnimRef.current);
      if (row2AnimRef.current) cancelAnimationFrame(row2AnimRef.current);
    };
  }, []);

  // Handle row hover/unhover
  useEffect(() => {
    // When row 1 is hovered, pause its animation
    if (hoveredRow === 1) {
      if (row1AnimRef.current) {
        cancelAnimationFrame(row1AnimRef.current);
        row1AnimRef.current = null;
      }
    }
    // When row 1 is unhovered, restart its animation
    else if (hoveredRow !== 1 && !row1AnimRef.current) {
      startRow1Animation();
    }

    // When row 2 is hovered, pause its animation
    if (hoveredRow === 2) {
      if (row2AnimRef.current) {
        cancelAnimationFrame(row2AnimRef.current);
        row2AnimRef.current = null;
      }
    }
    // When row 2 is unhovered, restart its animation
    else if (hoveredRow !== 2 && !row2AnimRef.current) {
      startRow2Animation();
    }
  }, [hoveredRow]);

  // Row 1 animation (left to right)
  const startRow1Animation = () => {
    let lastTimestamp: number | null = null;
    let xPosition = 0;

    if (row1Ref.current) {
      const transform = row1Ref.current.style.transform;
      xPosition = parseFloat(transform?.match(/-?\d+\.?\d*/)?.[0] || "0");
    } else {
      console.error("row1Ref.current is null");
      return;
    }

    const animate = (timestamp: number) => {
      if (lastTimestamp === null) lastTimestamp = timestamp;
      const elapsed = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      // Calculate new position based on elapsed time and speed
      xPosition -= (row1Speed * elapsed) / 1000;

      // Reset position when we complete a cycle for infinite loop
      if (xPosition <= -1 * totalWidth1) {
        xPosition = 0;
      }

      // Apply the transformation
      if (row1Ref.current) {
        row1Ref.current.style.transform = `translateX(${xPosition}px)`;
      }
      // Continue the animation
      row1AnimRef.current = requestAnimationFrame(animate);
    };

    row1AnimRef.current = requestAnimationFrame(animate);
  };

  // Row 2 animation (right to left)
  const startRow2Animation = () => {
    let lastTimestamp: number | null = null;
    let xPosition = -1 * totalWidth2;

    if (row2Ref.current) {
      const transform = row2Ref.current.style.transform;
      xPosition = parseFloat(
        transform?.match(/-?\d+\.?\d*/)?.[0] || `${-1 * totalWidth2}`
      );
    }

    const animate = (timestamp: number) => {
      if (lastTimestamp === null) lastTimestamp = timestamp;
      const elapsed = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      // Calculate new position based on elapsed time and speed
      xPosition += (row2Speed * elapsed) / 1000;

      // Reset position when we complete a cycle for infinite loop
      if (xPosition >= 0) {
        xPosition = -1 * totalWidth2;
      }

      // Apply the transformation
      if (row2Ref.current) {
        row2Ref.current.style.transform = `translateX(${xPosition}px)`;
      }

      // Continue the animation
      row2AnimRef.current = requestAnimationFrame(animate);
    };

    row2AnimRef.current = requestAnimationFrame(animate);
  };

  // Handle card hover
  const handleCardHover = (
    cardId: string,
    isHovering: boolean,
    rowIndex: number
  ) => {
    if (isHovering) {
      setHoveredCard(cardId);
      setHoveredRow(rowIndex);
    } else {
      setHoveredCard(null);
      setHoveredRow(null);
    }
  };

  const cardVariants = {
    hover: {
      scale: 1.05,
      zIndex: 10,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative mt-16 lg:mt-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <SectionHeader
          title="Our"
          highlightedText="Products"
          description="Explore our wide range of products"
          showDivider={true}
          align="center"
          titleSize="md"
        />

        {/* First Row - Left to Right */}
        <div className="relative mt-12 md:mt-16 overflow-hidden">
          {/* Gradient Masks */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 w-16 md:w-24 bg-gradient-to-r from-white h-full" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 w-16 md:w-24 bg-gradient-to-l from-white h-full" />

          <div
            ref={row1Ref}
            className="flex space-x-4 md:space-x-6 py-6 md:py-8 px-4 md:px-8 will-change-transform"
            style={{ transform: "translateX(0px)" }}
          >
            {duplicatedRow1.map((product, index) => (
              <div
                key={`row1-${index}`}
                onMouseEnter={() => handleCardHover(`row1-${index}`, true, 1)}
                onMouseLeave={() => handleCardHover(`row1-${index}`, false, 0)}
                className="relative flex-shrink-0"
              >
                <motion.div whileHover="hover" variants={cardVariants}>
                  <ProductCard
                    name={product.name}
                    image={product.image}
                    price={product.price}
                  />
                </motion.div>
                <AnimatePresence>
                  {hoveredCard === `row1-${index}` && (
                    <motion.div
                      className="absolute inset-0 bg-black/5 rounded-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Right to Left */}
        <div className="relative mt-4 md:mt-6 overflow-hidden">
          {/* Gradient Masks */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 w-16 md:w-24 bg-gradient-to-r from-white h-full" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 w-16 md:w-24 bg-gradient-to-l from-white h-full" />

          <div
            ref={row2Ref}
            className="flex space-x-4 md:space-x-6 py-6 md:py-8 px-4 md:px-8 will-change-transform"
            style={{ transform: `translateX(${-1 * totalWidth2}px)` }}
          >
            {duplicatedRow2.map((product, index) => (
              <div
                key={`row2-${index}`}
                onMouseEnter={() => handleCardHover(`row2-${index}`, true, 2)}
                onMouseLeave={() => handleCardHover(`row2-${index}`, false, 0)}
                className="relative flex-shrink-0"
              >
                <motion.div whileHover="hover" variants={cardVariants}>
                  <ProductCard
                    name={product.name}
                    image={product.image}
                    price={product.price}
                  />
                </motion.div>
                <AnimatePresence>
                  {hoveredCard === `row2-${index}` && (
                    <motion.div
                      className="absolute inset-0 bg-black/5 rounded-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* All Products Button */}
        <div className="flex justify-center mt-10 mb-8">
          <Link href="/our-products">
            <motion.button
              className="px-6 py-3 bg-red-500 text-white font-medium rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Products
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
