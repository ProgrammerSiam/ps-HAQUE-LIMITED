import React from "react";
import bg from "@/assets/about-us/about-us-hero-bg.png";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
    return (
        <section className="w-full sm:h-[450px] max-sm:!py-10  max-sm:!px-5 relative !py-0 !mt-28 isolate">
            <div className="absolute inset-0 w-full h-full z-[-1]">
                <Image
                    src={bg}
                    alt="about us background"
                    width={2000}
                    height={2000}
                    className="w-full h-full object-cover"
                    priority={true}
                />
            </div>

            <div className="w-full h-full flex items-center justify-center">
                <div className="max-w-[659px] w-full flex flex-col items-center justify-center">
                    <div className="px-4 py-2 border border-white/15 bg-black/15 rounded-[30px] _center mb-5">
                        <span className="text-white/50 mr-2">Home</span>{" "}
                        <span className="text-white/50 mr-2">&gt; </span>{" "}
                        <span className="text-white">About Us</span>
                    </div>
                    <h1 className="text-[38px] leading-[140%] font-semibold text-white text-center">
                        More Than Seven Decades of{" "}
                        <span className="text-[#DE2332] text-[44px] font-bold">
                            Quality, Consistency,
                        </span>{" "}
                        and{" "}
                        <span className="text-[#DE2332] text-[44px] font-bold">
                            Care
                        </span>
                    </h1>
                    <p className="text-[20px] translate-[-2%] text-white font-medium mt-6 text-center my-[30px]">
                        A timeless commitment to quality — in every product,
                        every process, and every home we reach.
                    </p>
                    <Link
                        href="/our-products"
                        className="border-2 border-white px-[22px] py-[15px] rounded-[15px] text-[18px] tracking-[-2%] font-medium text-white hover:bg-white hover:text-black transition-colors duration-300 ease-linear"
                    >
                        Explore our Products
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
