"use client";

import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import img from "@/assets/about-us/who-we-are.png";
import img2 from "@/assets/about-us/who-we-are-2.jpg";
import noiseBg from "@/assets/products-img/noise-bg.png";

interface SlideImage {
    src: StaticImageData | string;
    alt: string;
    title?: string;
}

const slideImages: SlideImage[] = [
    {
        src: img,
        alt: "Company founders and leadership team from 1947",
        title: "Our Founding Legacy",
    },
    {
        src: img2,
        alt: "Modern manufacturing facility with production lines",
        title: "State-of-the-Art Manufacturing",
    },
    {
        src: img,
        alt: "Display of biscuits, chocolates, batteries and soaps",
        title: "Quality Products for Every Home",
    },
    {
        src: img2,
        alt: "Dedicated team members working in the facility",
        title: "Our Committed Workforce",
    },
    {
        src: img,
        alt: "Quality control laboratory with testing equipment",
        title: "Ensuring Excellence",
    },
];

const WhoWeAreSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    };

    // const prevSlide = () => {
    //     setCurrentSlide(
    //         (prev) => (prev - 1 + slideImages.length) % slideImages.length
    //     );
    // };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="xl:px-32 px-6">
            <div className="max-w-[1920px] mx-auto grid lg:grid-cols-2 grid-cols-1 items-end lg:gap-10 gap-y-24">
                {/* Texts */}
                <div className="text-red-[#2f2f2f]">
                    <h1
                        className="relative font-bold text-black/15 capitalize
                        lg:text-[80px] sm:text-6xl text-[40px]
                        w-fit
                    "
                    >
                        Who We Are
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:text-[25px] sm:text-[20px] text-lg text-[#DE2332] font-bold">
                            {" "}
                            Who We Are
                        </span>
                    </h1>

                    <p className="lg:text-[20px] sm:text-lg text-base font-medium text-[#686868] lg:mt-12 mt-8">
                        We are proud to be a Bangladeshi manufacturing company
                        with a legacy dating back to 1947. What began as a
                        modest venture has grown into a trusted name in homes
                        across the country. For over seventy years, we have been
                        committed to delivering everyday essentials — from
                        wholesome biscuits and rich chocolates to reliable
                        batteries and gentle soaps.
                        <br /> Quality and care have always been at the core of
                        what we do. We believe simple products can make a real
                        difference — a biscuit at tea, a fresh start with soap,
                        a battery that works when it matters most.
                        <br /> Our offerings have grown over time, but our
                        values remain unchanged: honesty, consistency, and a
                        focus on making everyday life better.
                        <br /> More than a manufacturer, we are part of the
                        daily lives of millions — making life simpler, tastier,
                        and more comfortable, one product at a time.
                    </p>
                </div>

                {/* Right side - Image slider */}
                <div className="relative max-w-[519px] w-full max-lg:mx-auto">
                    <div className="relative w-full h-[385.08px] rounded-[9.23px]">
                        <div className="w-full h-full overflow-hidden">
                            <Image
                                src={
                                    slideImages[currentSlide].src ||
                                    "/placeholder.svg"
                                }
                                alt={slideImages[currentSlide].alt}
                                width={800}
                                height={600}
                                className="w-full h-full object-cover transition-opacity duration-500 rounded-[9.23px]"
                            />
                        </div>

                        <div className="w-full h-full absolute top-[-6%] left-[5%] rounded-[9.23px] z-[-10]">
                            <Image
                                src={noiseBg}
                                alt={"noise-bg"}
                                width={1500}
                                height={1500}
                                className="h-full w-full object-cover rounded-[9.23px]"
                            />
                        </div>
                    </div>

                    {/* Pagination dots */}
                    <div className="flex justify-center space-x-2 mt-4">
                        {slideImages.map((_, index) => (
                            <button
                                key={index}
                                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                                    index === currentSlide
                                        ? "bg-red-600"
                                        : "bg-gray-300 hover:bg-gray-400"
                                }`}
                                onClick={() => goToSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAreSection;
