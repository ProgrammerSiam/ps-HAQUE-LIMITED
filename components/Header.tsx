// "use client";
// import { motion } from "framer-motion";

// interface SectionHeaderProps {
//     title: string;
//     highlightedText?: string;
//     description?: string;
//     showDivider?: boolean;
//     align?: "left" | "center" | "right";
//     titleSize?: "sm" | "md" | "lg";
//     className?: string;
// }

// const SectionHeader = ({
//     title,
//     highlightedText,
//     description,
//     showDivider = true,
//     align = "center",
//     titleSize = "lg",
//     className = "",
// }: SectionHeaderProps) => {
//     // Title size variants
//     const titleSizes = {
//         sm: "text-2xl md:text-3xl lg:text-4xl",
//         md: "text-3xl md:text-4xl lg:text-5xl",
//         lg: "text-4xl md:text-5xl lg:text-6xl",
//     };

//     // Alignment variants
//     const alignments = {
//         left: "text-left",
//         center: "text-center",
//         right: "text-right",
//     };

//     // Animation variants
//     const headerVariants = {
//         hidden: { opacity: 0, y: -20 },
//         visible: { 
//             opacity: 1, 
//             y: 0,
//             transition: {
//                 duration: 0.6,
//                 ease: "easeOut"
//             }
//         }
//     };

//     return (
//         <motion.div
//             variants={headerVariants}
//              whileInView="visible"
//             initial="hidden"
//             animate="visible"
//             className={`${alignments[align]} ${className}`}
//         >
//             <h2 className={`font-heading mb-4 font-bold tracking-tight text-gray-900 ${titleSizes[titleSize]}`}>
//                 {title}{' '}
//                 {highlightedText && (
//                     <span className="text-red-600">{highlightedText}</span>
//                 )}
//             </h2>
            
//             {showDivider && (
//                 <div 
//                     className={`h-1 bg-red-600 w-24 ${
//                         align === "center" ? "mx-auto" : 
//                         align === "right" ? "ml-auto" : ""
//                     }`}
//                 />
//             )}
            
//             {description && (
//                 <p className={`max-w-2xl text-base text-gray-600 md:text-lg mt-4 ${
//                     align === "center" ? "mx-auto" : ""
//                 }`}>
//                     {description}
//                 </p>
//             )}
//         </motion.div>
//     );
// };

// export default SectionHeader;


"use client";
import { motion } from "framer-motion";

interface SectionHeaderProps {
    title: string;
    highlightedText?: string;
    description?: string;
    showDivider?: boolean;
    align?: "left" | "center" | "right";
    titleSize?: "sm" | "md" | "lg";
    className?: string;
    // Animation props
    animationDelay?: number;
    viewportOnce?: boolean;
    viewportMargin?: string;
}

const SectionHeader = ({
    title,
    highlightedText,
    description,
    showDivider = true,
    align = "center",
    titleSize = "lg",
    className = "",
    animationDelay = 0,
    viewportOnce = true,
    viewportMargin = "-100px",
}: SectionHeaderProps) => {
    // Title size variants
    const titleSizes = {
        sm: "text-2xl md:text-3xl lg:text-4xl",
        md: "text-3xl md:text-4xl lg:text-5xl",
        lg: "text-4xl md:text-5xl lg:text-6xl",
    };

    // Alignment variants
    const alignments = {
        left: "text-left",
        center: "text-center",
        right: "text-right",
    };

    // Animation variants
    const containerVariants = {
        hidden: { 
            opacity: 0,
            y: 20
        },
        visible: { 
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                delay: animationDelay,
                staggerChildren: 0.2
            }
        }
    };

    const titleVariants = {
        hidden: { 
            opacity: 0,
            y: 20
        },
        visible: { 
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const dividerVariants = {
        hidden: { 
            width: 0,
            opacity: 0
        },
        visible: { 
            width: "6rem", // w-24 equivalent
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const descriptionVariants = {
        hidden: { 
            opacity: 0,
            y: 10
        },
        visible: { 
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ 
                once: viewportOnce, 
                margin: viewportMargin,
                amount: 0.3 // Trigger animation when 30% of the element is in view
            }}
            className={`${alignments[align]} ${className}`}
        >
            <motion.h2 
                variants={titleVariants}
                className={`font-heading mb-4 font-bold tracking-tight text-gray-900 ${titleSizes[titleSize]}`}
            >
                {title}{' '}
                {highlightedText && (
                    <motion.span 
                        variants={titleVariants}
                        className="text-red-600"
                    >
                        {highlightedText}
                    </motion.span>
                )}
            </motion.h2>
            
            {showDivider && (
                <motion.div 
                    variants={dividerVariants}
                    className={`h-1 bg-red-600 ${
                        align === "center" ? "mx-auto" : 
                        align === "right" ? "ml-auto" : ""
                    }`}
                />
            )}
            
            {description && (
                <motion.p 
                    variants={descriptionVariants}
                    className={`max-w-2xl text-base text-gray-600 md:text-lg mt-4 ${
                        align === "center" ? "mx-auto" : ""
                    }`}
                >
                    {description}
                </motion.p>
            )}
        </motion.div>
    );
};

export default SectionHeader;