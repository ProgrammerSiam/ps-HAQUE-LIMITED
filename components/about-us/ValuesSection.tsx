import { cn } from "@/lib/utils";
import React from "react";

const values = [
    {
        title: "INTEGRITY",
        description:
            "We operate with honesty, fairness, and accountability — always doing what’s right for our people and our customers.",
    },
    {
        title: "SUSTAINABILITY",
        description:
            "We’re dedicated to responsible practices that protect the planet and promote long-term well-being.",
    },
    {
        title: "INNOVATION",
        description:
            "Challenging convention with curiosity and purpose — driving meaningful progress across every part of our process.",
    },
    {
        title: "RELIABILITY",
        description:
            "We deliver on our promises — building trust through consistency, responsibility, and dependable actions.",
    },
    {
        title: "EXCELLENCE",
        description:
            "We commit to the highest standards — ensuring quality, consistency, and pride in everything we produce.",
    },
    {
        title: "TEAMWORK",
        description:
            "We value every hand behind our process — building a culture of respect, collaboration, and growth from the ground up.",
    },
];

const ValuesSection = () => {
    return (
        <section className="xl:px-32 px-6">
            {/* Container div */}
            <div className="max-w-[1920px] mx-auto">
                <div className="w-full flex lg:flex-row flex-col lg:items-center justify-between sm:mb-14 mb-6 sm:gap-y-5">
                    <h1
                        className="relative font-bold text-black/15 capitalize
                        lg:text-[80px] sm:text-6xl text-[42px]
                        w-fit
                    "
                    >
                        Core values
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:text-[25px] sm:text-[20px] sm:text-lg text-[13.11px] text-[#DE2332] font-bold uppercase block w-fit">
                            our Core values
                        </span>
                    </h1>

                    <div>
                        <p className="max-w-[541px] lg:text-right text-left sm:text-[20px] text-[10.49px] font-semibold text-[#686868]">
                            What we believe shows in how we treat people, how we
                            build trust, and how we move forward.
                        </p>
                    </div>
                </div>
                <div className="lg:h-[581px] sm:h-[960px] h-[560px] grid lg:grid-cols-6 grid-cols-3">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className={cn(
                                "w-full h-full p-4 overflow-hidden flex flex-col justify-between",
                                index % 2 !== 0
                                    ? "bg-black/5 text-[#DE2332]"
                                    : "bg-[#DE2332] text-white"
                            )}
                        >
                            <div
                                className={cn(
                                    index % 2 !== 0 ? "order-1" : "order-2"
                                )}
                            >
                                <p className="sm:text-lg text-[11.18px] max-[430px]:text-[10px] font-medium">
                                    {value.description}
                                </p>
                            </div>

                            <div
                                className={cn(
                                    "relative text-center",
                                    index % 2 !== 0 ? "order-2" : "order-1"
                                )}
                            >
                                <p
                                    className={cn(
                                        "sm:text-[22px] text-[13.67px] max-[430px]:text-[10px] font-extrabold",
                                        index % 2 !== 0
                                            ? "sm:mb-4"
                                            : "sm:mt-[150px]"
                                    )}
                                >
                                    {value.title}
                                </p>
                                <h1
                                    className={cn(
                                        "absolute left-[45%] -translate-x-1/2 sm:text-[220px] text-[160px] font-extrabold  tracking-[-0.099em] leading-[100%]",
                                        index % 2 !== 0
                                            ? "-bottom-8 text-black/5"
                                            : "top-0 text-white/15"
                                    )}
                                >
                                    0{index + 1}
                                </h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValuesSection;
