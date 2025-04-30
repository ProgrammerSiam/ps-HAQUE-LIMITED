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
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: animationDelay,
        staggerChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // const dividerVariants = {
  //   hidden: {
  //     width: 0,
  //     opacity: 0,
  //   },
  //   visible: {
  //     width: "6rem", // w-24 equivalent
  //     opacity: 1,
  //     transition: {
  //       duration: 0.5,
  //       ease: "easeOut",
  //     },
  //   },
  // };

  const descriptionVariants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: viewportOnce,
        margin: viewportMargin,
        amount: 0.3, // Trigger animation when 30% of the element is in view
      }}
      className={`${alignments[align]} ${className}`}
    >
      <motion.h2
        variants={titleVariants}
        className={`font-heading mb-4 font-bold tracking-tight text-gray-900 ${titleSizes[titleSize]}`}
      >
        {title}{" "}
        {highlightedText && (
          <motion.span variants={titleVariants} className="text-red-600">
            {highlightedText}
          </motion.span>
        )}
      </motion.h2>

      {showDivider && (
        <div
          className={`${align === "center" ? "flex justify-center" : align === "right" ? "flex justify-end" : "flex justify-start"}`}
        >
          <div className="flex items-center mb-4">
            <motion.div
              className="h-px bg-gray-300 w-8"
              variants={{
                hidden: { width: 0 },
                visible: { width: "2rem", transition: { duration: 0.8 } },
              }}
            />
            <motion.div
              className="h-1 bg-red-600 mx-2 rounded-full"
              variants={{
                hidden: { width: 0 },
                visible: {
                  width: "4rem",
                  transition: {
                    duration: 0.8,
                    delay: 0.2,
                    ease: "easeOut",
                  },
                },
              }}
            />
            <motion.div
              className="h-px bg-gray-300 w-8"
              variants={{
                hidden: { width: 0 },
                visible: {
                  width: "2rem",
                  transition: { duration: 0.8, delay: 0.4 },
                },
              }}
            />
          </div>
        </div>
      )}
      {description && (
        <motion.p
          variants={descriptionVariants}
          className={`max-w-2xl text-gray-700 text-base md:text-lg relative mt-2 ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
          {/* <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gray-200" /> */}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
