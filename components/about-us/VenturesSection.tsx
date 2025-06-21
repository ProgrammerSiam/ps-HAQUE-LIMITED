"use client";

import React, { useState } from "react";
import bg from "@/assets/about-us/ventures-bg.png";
import Image from "next/image";
import venture1 from "@/assets/about-us/venture-1.png";
import venture2 from "@/assets/about-us/venture-2.png";
import venture3 from "@/assets/about-us/venture-3.png";
import venture4 from "@/assets/about-us/venture-4.png";
import venture5 from "@/assets/about-us/venture-5.png";
import venture6 from "@/assets/about-us/venture-6.png";
import venture7 from "@/assets/about-us/venture-7.png";
import venture8 from "@/assets/about-us/venture-8.png";
import venture9 from "@/assets/about-us/venture-9.png";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

const ventures = [
    {
        title: "A. T. HAQUE LTD.",
        description:
            "All the products from Haque are marketed by A. T. Haque Ltd. The corporate office of A. T. Haque is situated at Tejgaon Industrial area but the factory under it is at Tongi. Haque have state of art V-60 cookie machine of HAAS under this concern. All the cookies are exclusive from the house of Haque. The products are totally new in our country. The products include Kheer Malai Biscuit, Super Bite Cookies, Salty Star Cookies, Romancio Cookies, La' Butter Cookies, Sor Malai Cookies, etc. The Romancio is an unique center filled biscuit of Bangladesh where the Super Bite Cookies is enriched with milk, egg and butter. From real butter, Haque has La' Butter exclusive cookies. There are few upcoming Brand which are totally new in our country. A. T. Haque also has snack plant where Haque produces Mukhorochok Chanachur and Moto Vaja.",
        image: venture1,
    },
    {
        title: "HAQUE LTD.",
        description:
            "A Fully Automatic State of the art completes Soap Factory wherein toilet soaps are manufactured. We have first ever man soap here named Man Soul. Haque also have Rose, Jasmine and Mini soap named Silky. All soaps are grape-1 beauty soap. This concern also produces Dettol, Sevlon, Cute, etc. soaps as contract manufacturer.",
        image: venture2,
    },
    {
        title: "HAQUE (DRYCELL) LTD.",
        description:
            "A Modern High-tech Battery producing unit wherein UM-3 Battery (Pencil Cell), UM-4 (Remote Battery) & Metal Jacket UM-1 heavy-duty Battery cells are manufactured.",
        image: venture3,
    },
    {
        title: "HAQUE IMPERIAL PROPERTIES LTD.",
        description:
            "It's the property business wing of Haque Group of Industries.",
        image: venture4,
    },
    {
        title: "HAQUE RECREATIONAL PRODUCTS LTD.",
        description:
            "Haque has imported few world class beach recreational items like for Cox's Bazar's Junu beach. Haque Recreational Products Ltd. is the country's first beach recreational products based company which import, sell, rent and service the toys, vehicle and equipment. It has highly equipped rescue team. It provides the ultimate pleasure on sea. It has several services including- Luxurious yacht, Jetski, Catamaran, wakeboarding etc.",
        image: venture5,
    },
    {
        title: "HAQUE FOOD INDUSTRIES LTD.",
        description:
            "Company deals with food items, which includes Biscuit, Chips, Wafer, Chocolate, etc. The factory is at Tejgaon industrial area. Haque have world's known HASS-HECRONA, NISHIN RYOKI, BAKER PERKINGS these three modern machineries are used to produce biscuits here. We have our Mr. Cookie, Digestive Biscuit, Bourbon Biscuit, Mr. Energy Biscuit, Cream Crackers Biscuit, Fata Futty Biscuit, Choco Nutty Biscuit, Lemon Chocolate Biscuit, etc. here. We also have Pillow Chips, Tarzan and Jane Chips, etc. from our Japanese N. P. Machine.",
        image: venture6,
    },
    {
        title: "HAQUE (CARBIDE) LTD.",
        description:
            "It is a Modern and high capacity complete factory to manufacture Zinc Carbon Dry Cell battery of UM-1 and UM-2. Haque's famous Haque 786 is a product of Haque (Carbide) ltd.",
        image: venture7,
    },
    {
        title: "JUNU BEACH RESORT LTD.",
        description:
            "Junu beach resort of Cox's bazar is one of most attractive beach resort of Bangladesh with all recreational facilities. The resort introduced most luxurious yacht in Bangladesh for the first time. It also going to establish world class Water Park with all types of recreation facilities.",
        image: venture8,
    },
    {
        title: "WORLD TRAVELLER",
        description:
            "World Traveler is the travelling company from Haque. It provides facilities like special travelling packages, air ticket booking facilities, packages in different tourist spots, holiday packages, etc. ",
        image: venture9,
    },
];

const firstHalf = ventures.slice(0, Math.ceil(ventures.length / 2));
const secondHalf = ventures.slice(Math.ceil(ventures.length / 2));

const VenturesSection = () => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [selectedIndex2, setSelectedIndex2] = useState<number | null>(null);

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

                {/* Accordion */}
                <div className="flex flex-col lg:flex-row gap-3">
                    {/* 1 */}
                    <div className="w-full lg:w-[calc(50%-0.375rem)] flex flex-col gap-3">
                        <AnimatePresence initial={false}>
                            {firstHalf.map((venture, index) => (
                                <motion.div
                                    key={index}
                                    layout
                                    initial={{ height: 98 }}
                                    animate={{ height: "auto" }}
                                    exit={{ height: 98 }}
                                    transition={{
                                        layout: {
                                            duration: 0.7,
                                            ease: [0.04, 0.62, 0.23, 0.98],
                                        },
                                    }}
                                    onClick={() => {
                                        if (selectedIndex === index) {
                                            setSelectedIndex(null);
                                        } else {
                                            setSelectedIndex(index);
                                        }
                                    }}
                                    className={cn(
                                        "w-full bg-white rounded-[15px] cursor-pointer overflow-hidden flex flex-col max-sm:p-5",
                                        index === selectedIndex
                                            ? ""
                                            : "max-h-fit"
                                    )}
                                >
                                    <div className="flex items-center justify-between gap-7">
                                        <div className="max-sm:hidden block shrink-0 max-w-[155px] w-full h-full">
                                            <Image
                                                src={venture.image}
                                                alt={venture.title}
                                                width={1500}
                                                height={1000}
                                                className="w-full h-full object-cover rounded-l-[15px]"
                                            />
                                        </div>
                                        <div
                                            className={cn(
                                                "w-full h-full flex flex-col justify-center gap-2",
                                                index === selectedIndex &&
                                                    "py-10"
                                            )}
                                        >
                                            <h2 className="text-[20px] font-bold text-[#DE2332]">
                                                {venture.title}
                                            </h2>
                                            {index === selectedIndex && (
                                                <p>{venture.description}</p>
                                            )}
                                        </div>
                                        <div className="pr-8">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={15}
                                                height={10}
                                                viewBox="0 0 15 10"
                                                fill="none"
                                                style={{
                                                    transform:
                                                        index === selectedIndex
                                                            ? "rotate(180deg)"
                                                            : "rotate(0deg)",
                                                    transition:
                                                        "transform 0.3s",
                                                }}
                                            >
                                                <path
                                                    d="M13.7741 0.5L15 1.83853L8.31881 9.12916C8.21176 9.24668 8.08445 9.33995 7.94422 9.40359C7.804 9.46724 7.65362 9.5 7.50174 9.5C7.34985 9.5 7.19947 9.46724 7.05925 9.40359C6.91902 9.33995 6.79171 9.24668 6.68466 9.12916L0 1.83853L1.22591 0.501261L7.5 7.34403L13.7741 0.5Z"
                                                    fill="#686868"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                    {/* 2 */}
                    <div className="w-full lg:w-[calc(50%-0.375rem)] flex flex-col gap-3">
                        <AnimatePresence initial={false}>
                            {secondHalf.map((venture, index) => (
                                <motion.div
                                    key={index}
                                    layout
                                    initial={{ height: 98 }}
                                    animate={{ height: "auto" }}
                                    exit={{ height: 98 }}
                                    transition={{
                                        layout: {
                                            duration: 0.7,
                                            ease: [0.04, 0.62, 0.23, 0.98],
                                        },
                                    }}
                                    onClick={() => {
                                        if (selectedIndex2 === index) {
                                            setSelectedIndex2(null);
                                        } else {
                                            setSelectedIndex2(index);
                                        }
                                    }}
                                    className={cn(
                                        "w-full bg-white rounded-[15px] cursor-pointer overflow-hidden flex flex-col max-sm:p-5",
                                        index === selectedIndex2
                                            ? ""
                                            : "max-h-fit"
                                    )}
                                >
                                    <div className="flex items-center justify-between gap-7">
                                        <div className="max-sm:hidden block shrink-0 max-w-[155px] w-full h-full">
                                            <Image
                                                src={venture.image}
                                                alt={venture.title}
                                                width={1500}
                                                height={1000}
                                                className="w-full h-full object-cover rounded-l-[15px]"
                                            />
                                        </div>
                                        <div
                                            className={cn(
                                                "w-full h-full flex flex-col justify-center gap-2",
                                                index === selectedIndex2 &&
                                                    "py-10"
                                            )}
                                        >
                                            <h2 className="text-[20px] font-bold text-[#DE2332]">
                                                {venture.title}
                                            </h2>
                                            {index === selectedIndex2 && (
                                                <p>{venture.description}</p>
                                            )}
                                        </div>
                                        <div className="pr-8">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={15}
                                                height={10}
                                                viewBox="0 0 15 10"
                                                fill="none"
                                                style={{
                                                    transform:
                                                        index === selectedIndex2
                                                            ? "rotate(180deg)"
                                                            : "rotate(0deg)",
                                                    transition:
                                                        "transform 0.3s",
                                                }}
                                            >
                                                <path
                                                    d="M13.7741 0.5L15 1.83853L8.31881 9.12916C8.21176 9.24668 8.08445 9.33995 7.94422 9.40359C7.804 9.46724 7.65362 9.5 7.50174 9.5C7.34985 9.5 7.19947 9.46724 7.05925 9.40359C6.91902 9.33995 6.79171 9.24668 6.68466 9.12916L0 1.83853L1.22591 0.501261L7.5 7.34403L13.7741 0.5Z"
                                                    fill="#686868"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VenturesSection;

// "use client";

// import React, { useState } from "react";
// import bg from "@/assets/about-us/ventures-bg.png";
// import Image from "next/image";
// import venture1 from "@/assets/about-us/venture-1.png";
// import venture2 from "@/assets/about-us/venture-2.png";
// import venture3 from "@/assets/about-us/venture-3.png";
// import venture4 from "@/assets/about-us/venture-4.png";
// import venture5 from "@/assets/about-us/venture-5.png";
// import venture6 from "@/assets/about-us/venture-6.png";
// import venture7 from "@/assets/about-us/venture-7.png";
// import venture8 from "@/assets/about-us/venture-8.png";
// import venture9 from "@/assets/about-us/venture-9.png";
// import { cn } from "@/lib/utils";
// import { AnimatePresence, motion } from "framer-motion";

// const ventures = [
//     {
//         title: "A. T. HAQUE LTD.",
//         description:
//             "All the products from Haque are marketed by A. T. Haque Ltd. The corporate office of A. T. Haque is situated at Tejgaon Industrial area but the factory under it is at Tongi. Haque have state of art V-60 cookie machine of HAAS under this concern. All the cookies are exclusive from the house of Haque. The products are totally new in our country. The products include Kheer Malai Biscuit, Super Bite Cookies, Salty Star Cookies, Romancio Cookies, La' Butter Cookies, Sor Malai Cookies, etc. The Romancio is an unique center filled biscuit of Bangladesh where the Super Bite Cookies is enriched with milk, egg and butter. From real butter, Haque has La' Butter exclusive cookies. There are few upcoming Brand which are totally new in our country. A. T. Haque also has snack plant where Haque produces Mukhorochok Chanachur and Moto Vaja",
//         image: venture1,
//     },
//     {
//         title: "HAQUE LTD.",
//         description:
//             "All the products from Haque are marketed by A. T. Haque Ltd. The corporate office of A. T. Haque is situated at Tejgaon Industrial area but the factory under it is at Tongi. Haque have state of art V-60 cookie machine of HAAS under this concern. All the cookies are exclusive from the house of Haque. The products are totally new in our country. The products include Kheer Malai Biscuit, Super Bite Cookies, Salty Star Cookies, Romancio Cookies, La' Butter Cookies, Sor Malai Cookies, etc. The Romancio is an unique center filled biscuit of Bangladesh where the Super Bite Cookies is enriched with milk, egg and butter. From real butter, Haque has La' Butter exclusive cookies. There are few upcoming Brand which are totally new in our country. A. T. Haque also has snack plant where Haque produces Mukhorochok Chanachur and Moto Vaja",
//         image: venture2,
//     },
//     {
//         title: "HAQUE (DRYCELL) LTD.",
//         description:
//             "All the products from Haque are marketed by A. T. Haque Ltd. The corporate office of A. T. Haque is situated at Tejgaon Industrial area but the factory under it is at Tongi. Haque have state of art V-60 cookie machine of HAAS under this concern. All the cookies are exclusive from the house of Haque. The products are totally new in our country. The products include Kheer Malai Biscuit, Super Bite Cookies, Salty Star Cookies, Romancio Cookies, La' Butter Cookies, Sor Malai Cookies, etc. The Romancio is an unique center filled biscuit of Bangladesh where the Super Bite Cookies is enriched with milk, egg and butter. From real butter, Haque has La' Butter exclusive cookies. There are few upcoming Brand which are totally new in our country. A. T. Haque also has snack plant where Haque produces Mukhorochok Chanachur and Moto Vaja",
//         image: venture3,
//     },
//     {
//         title: "HAQUE IMPERIAL PROPERTIES LTD.",
//         description:
//             "All the products from Haque are marketed by A. T. Haque Ltd. The corporate office of A. T. Haque is situated at Tejgaon Industrial area but the factory under it is at Tongi. Haque have state of art V-60 cookie machine of HAAS under this concern. All the cookies are exclusive from the house of Haque. The products are totally new in our country. The products include Kheer Malai Biscuit, Super Bite Cookies, Salty Star Cookies, Romancio Cookies, La' Butter Cookies, Sor Malai Cookies, etc. The Romancio is an unique center filled biscuit of Bangladesh where the Super Bite Cookies is enriched with milk, egg and butter. From real butter, Haque has La' Butter exclusive cookies. There are few upcoming Brand which are totally new in our country. A. T. Haque also has snack plant where Haque produces Mukhorochok Chanachur and Moto Vaja",
//         image: venture4,
//     },
//     {
//         title: "HAQUE RECREATIONAL PRODUCTS LTD.",
//         description:
//             "All the products from Haque are marketed by A. T. Haque Ltd. The corporate office of A. T. Haque is situated at Tejgaon Industrial area but the factory under it is at Tongi. Haque have state of art V-60 cookie machine of HAAS under this concern. All the cookies are exclusive from the house of Haque. The products are totally new in our country. The products include Kheer Malai Biscuit, Super Bite Cookies, Salty Star Cookies, Romancio Cookies, La' Butter Cookies, Sor Malai Cookies, etc. The Romancio is an unique center filled biscuit of Bangladesh where the Super Bite Cookies is enriched with milk, egg and butter. From real butter, Haque has La' Butter exclusive cookies. There are few upcoming Brand which are totally new in our country. A. T. Haque also has snack plant where Haque produces Mukhorochok Chanachur and Moto Vaja",
//         image: venture5,
//     },
//     {
//         title: "HAQUE FOOD INDUSTRIES LTD.",
//         description:
//             "All the products from Haque are marketed by A. T. Haque Ltd. The corporate office of A. T. Haque is situated at Tejgaon Industrial area but the factory under it is at Tongi. Haque have state of art V-60 cookie machine of HAAS under this concern. All the cookies are exclusive from the house of Haque. The products are totally new in our country. The products include Kheer Malai Biscuit, Super Bite Cookies, Salty Star Cookies, Romancio Cookies, La' Butter Cookies, Sor Malai Cookies, etc. The Romancio is an unique center filled biscuit of Bangladesh where the Super Bite Cookies is enriched with milk, egg and butter. From real butter, Haque has La' Butter exclusive cookies. There are few upcoming Brand which are totally new in our country. A. T. Haque also has snack plant where Haque produces Mukhorochok Chanachur and Moto Vaja",
//         image: venture6,
//     },
//     {
//         title: "HAQUE (CARBIDE) LTD.",
//         description:
//             "All the products from Haque are marketed by A. T. Haque Ltd. The corporate office of A. T. Haque is situated at Tejgaon Industrial area but the factory under it is at Tongi. Haque have state of art V-60 cookie machine of HAAS under this concern. All the cookies are exclusive from the house of Haque. The products are totally new in our country. The products include Kheer Malai Biscuit, Super Bite Cookies, Salty Star Cookies, Romancio Cookies, La' Butter Cookies, Sor Malai Cookies, etc. The Romancio is an unique center filled biscuit of Bangladesh where the Super Bite Cookies is enriched with milk, egg and butter. From real butter, Haque has La' Butter exclusive cookies. There are few upcoming Brand which are totally new in our country. A. T. Haque also has snack plant where Haque produces Mukhorochok Chanachur and Moto Vaja",
//         image: venture7,
//     },
//     {
//         title: "JUNU BEACH RESORT LTD.",
//         description:
//             "All the products from Haque are marketed by A. T. Haque Ltd. The corporate office of A. T. Haque is situated at Tejgaon Industrial area but the factory under it is at Tongi. Haque have state of art V-60 cookie machine of HAAS under this concern. All the cookies are exclusive from the house of Haque. The products are totally new in our country. The products include Kheer Malai Biscuit, Super Bite Cookies, Salty Star Cookies, Romancio Cookies, La' Butter Cookies, Sor Malai Cookies, etc. The Romancio is an unique center filled biscuit of Bangladesh where the Super Bite Cookies is enriched with milk, egg and butter. From real butter, Haque has La' Butter exclusive cookies. There are few upcoming Brand which are totally new in our country. A. T. Haque also has snack plant where Haque produces Mukhorochok Chanachur and Moto Vaja",
//         image: venture8,
//     },
//     {
//         title: "WORLD TRAVELLER",
//         description:
//             "All the products from Haque are marketed by A. T. Haque Ltd. The corporate office of A. T. Haque is situated at Tejgaon Industrial area but the factory under it is at Tongi. Haque have state of art V-60 cookie machine of HAAS under this concern. All the cookies are exclusive from the house of Haque. The products are totally new in our country. The products include Kheer Malai Biscuit, Super Bite Cookies, Salty Star Cookies, Romancio Cookies, La' Butter Cookies, Sor Malai Cookies, etc. The Romancio is an unique center filled biscuit of Bangladesh where the Super Bite Cookies is enriched with milk, egg and butter. From real butter, Haque has La' Butter exclusive cookies. There are few upcoming Brand which are totally new in our country. A. T. Haque also has snack plant where Haque produces Mukhorochok Chanachur and Moto Vaja",
//         image: venture9,
//     },
// ];

// const firstHalf = ventures.slice(0, Math.ceil(ventures.length / 2));
// const secondHalf = ventures.slice(Math.ceil(ventures.length / 2));

// const VenturesSection = () => {
//     const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

//     return (
//         <section className="xl:px-32 px-6 relative">
//             <div className="absolute inset-0 w-full h-full z-[-1]">
//                 <Image
//                     src={bg}
//                     alt="about us background"
//                     width={2000}
//                     height={2000}
//                     className="w-full h-full object-cover"
//                     priority={true}
//                 />
//             </div>

//             <div className="_section_container">
//                 <div className="w-full flex lg:flex-row flex-col lg:items-center justify-between sm:mb-14 mb-6 sm:gap-y-5">
//                     <h1
//                         className="relative font-bold text-black/15 capitalize
//                         lg:text-[80px] sm:text-6xl text-[42px]
//                         w-fit
//                     "
//                     >
//                         Ventures
//                         <span className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 lg:text-[25px] sm:text-[20px] sm:text-lg text-[13.11px] text-[#DE2332] font-bold uppercase block w-full text-center">
//                             Our ventures
//                         </span>
//                     </h1>

//                     <div>
//                         <p className="max-w-[541px] lg:text-right text-left sm:text-[20px] text-[10.49px] font-semibold text-[#686868]">
//                             Explore our diverse business units and subsidiaries,
//                             each contributing to our growth and industry
//                             presence.
//                         </p>
//                     </div>
//                 </div>

//                 {/* Accordion */}
//                 <div className="flex flex-wrap gap-3">
//                     <AnimatePresence initial={false}>
//                         {ventures.map((venture, index) => (
//                             <motion.div
//                                 key={index}
//                                 layout
//                                 initial={{ height: 98 }}
//                                 animate={{ height: "auto" }}
//                                 exit={{ height: 98 }}
//                                 transition={{
//                                     layout: {
//                                         duration: 0.7,
//                                         ease: [0.04, 0.62, 0.23, 0.98],
//                                     },
//                                 }}
//                                 onClick={() => {
//                                     if (selectedIndex === index) {
//                                         setSelectedIndex(null);
//                                     } else {
//                                         setSelectedIndex(index);
//                                     }
//                                 }}
//                                 className={cn(
//                                     "w-full md:w-[calc(50%-0.375rem)] bg-white rounded-[15px] cursor-pointer overflow-hidden flex flex-col ",
//                                     index === selectedIndex ? "" : "max-h-fit"
//                                 )}
//                             >
//                                 <div className="flex items-center justify-between gap-7">
//                                     <div className="shrink-0 max-w-[155px] w-full h-full">
//                                         <Image
//                                             src={venture.image}
//                                             alt={venture.title}
//                                             width={1500}
//                                             height={100}
//                                             className="w-full h-full object-cover rounded-l-[15px]"
//                                         />
//                                     </div>
//                                     <div
//                                         className={cn(
//                                             "w-full h-full flex flex-col justify-center gap-2",
//                                             index === selectedIndex && "py-10"
//                                         )}
//                                     >
//                                         <h2 className="text-[20px] font-bold text-[#DE2332]">
//                                             {venture.title}
//                                         </h2>
//                                         {index === selectedIndex && (
//                                             <p>{venture.description}</p>
//                                         )}
//                                     </div>
//                                     <div className="pr-8">
//                                         <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             width={15}
//                                             height={10}
//                                             viewBox="0 0 15 10"
//                                             fill="none"
//                                             style={{
//                                                 transform:
//                                                     index === selectedIndex
//                                                         ? "rotate(180deg)"
//                                                         : "rotate(0deg)",
//                                                 transition: "transform 0.3s",
//                                             }}
//                                         >
//                                             <path
//                                                 d="M13.7741 0.5L15 1.83853L8.31881 9.12916C8.21176 9.24668 8.08445 9.33995 7.94422 9.40359C7.804 9.46724 7.65362 9.5 7.50174 9.5C7.34985 9.5 7.19947 9.46724 7.05925 9.40359C6.91902 9.33995 6.79171 9.24668 6.68466 9.12916L0 1.83853L1.22591 0.501261L7.5 7.34403L13.7741 0.5Z"
//                                                 fill="#686868"
//                                             />
//                                         </svg>
//                                     </div>
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </AnimatePresence>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default VenturesSection;
