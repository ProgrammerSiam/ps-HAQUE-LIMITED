import React from "react";
import bg from "@/assets/about-us/ventures-bg.png";
import Image from "next/image";

const VenturesSection = () => {
    return (
        <section className="xl:px-32 px-6 relative">
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

            <div className="_section_container">
                <div className="w-full flex lg:flex-row flex-col lg:items-center justify-between sm:mb-14 mb-6 sm:gap-y-5">
                    <h1
                        className="relative font-bold text-black/15 capitalize
                        lg:text-[80px] sm:text-6xl text-[42px]
                        w-fit
                    "
                    >
                        Ventures
                        <span className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 lg:text-[25px] sm:text-[20px] sm:text-lg text-[13.11px] text-[#DE2332] font-bold uppercase block w-full text-center">
                            Our ventures
                        </span>
                    </h1>

                    <div>
                        <p className="max-w-[541px] lg:text-right text-left sm:text-[20px] text-[10.49px] font-semibold text-[#686868]">
                            Explore our diverse business units and subsidiaries,
                            each contributing to our growth and industry
                            presence.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VenturesSection;
