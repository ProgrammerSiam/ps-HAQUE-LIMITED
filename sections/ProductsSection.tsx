"use client";
import ProductCard from "@/components/ProductCards";
import { useState, useRef } from "react";
import classNames from "classnames";
import {
    productImg1,
    productImg2,
    productImg3,
    productImg4,
    productImg5,
} from "@/constants/image";
import { motion } from "framer-motion";
import SectionHeader from "@/components/Header";


const products = [
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

const ProductsSection = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(2); // start with 3rd product highlighted

    // Each card has a ~230px width (including margin). Adjust if needed.
    const cardWidth = 230;

    // Scroll smoothly to a given product index
    const scrollToIndex = (index: number) => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({ left: index * cardWidth, behavior: "smooth" });
            setActiveIndex(index);
        }
    };

    // Scroll left by one card
    const scrollLeft = () => {
        const newIndex = Math.max(activeIndex - 1, 0);
        scrollToIndex(newIndex);
    };

    // Scroll right by one card
    const scrollRight = () => {
        const newIndex = Math.min(activeIndex + 1, products.length - 1);
        scrollToIndex(newIndex);
    };

    return (
        <section className="relative py-12 bg-white border-t-2 border-dotted border-gray-300">
            <div className="container mx-auto px-4">

                {/* Section Header */}
                <SectionHeader
                    title="Our"
                    highlightedText="Product"
                    showDivider={true}
                    align="center"
                    titleSize="md"
                />

                {/* Scrollable Row of Cards */}
                <div className="relative mt-20">
                    {/* Gradient Masks */}
                    <div className="pointer-events-none absolute left-0 top-0 z-10 w-24 bg-gradient-to-r from-white" style={{ height: '100%' }} />
                    <div className="pointer-events-none absolute right-0 top-0 z-10 w-24 bg-gradient-to-l from-white" style={{ height: '100%' }} />

                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto space-x-6 py-8 px-8 scrollbar-hide"
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                        {products.map((product, index) => (
                            <ProductCard
                                key={index}
                                name={product.name}
                                image={product.image}
                                price={product.price}
                                isCenter={index === activeIndex}
                            />
                        ))}
                    </div>

                </div>

                {/* Arrows & Pagination Dots in One Row */}
                <div className="flex items-center justify-center mt-6 space-x-4">
                    {/* Left Arrow */}
                    <button
                        onClick={scrollLeft}
                        className="bg-white border border-black rounded-full w-8 h-8 flex items-center justify-center text-xl hover:bg-gray-100"
                    >
                        <motion.button
                            whileHover={{ scale: 1 }}
                            whileTap={{ scale: 0.9 }}

                            className="group/nav group bg-white/10 backdrop-blur-md hover:bg-red-500  rounded-full p-2 transition-all duration-300 border border-black/20"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black group-hover:text-white  transition-transform duration-300 group-hover/nav:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </motion.button>
                    </button>

                    {/* Pagination Dots */}
                    <div className="flex space-x-2">
                        {products.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => scrollToIndex(index)}
                                className={classNames(
                                    "w-3 h-3 rounded-full transition-all",
                                    activeIndex === index ? "bg-red-600 scale-125" : "bg-gray-300"
                                )}
                            />
                        ))}
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={scrollRight}
                        className="bg-white border border-black rounded-full w-8 h-8 flex items-center justify-center text-xl hover:bg-gray-100"
                    >
                        <motion.button
                            whileHover={{ scale: 1 }}
                            whileTap={{ scale: 0.9 }}

                            className="group/nav group bg-white/10 backdrop-blur-md hover:bg-red-500  rounded-full p-2 transition-all duration-300 border border-black/20"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black group-hover:text-white transition-transform duration-300 group-hover/nav:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </motion.button>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProductsSection;
