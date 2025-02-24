

"use client";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface InfoCardProps {
  title: string;
  description: string;
  image: StaticImageData | string;
  linkText: string;
  linkUrl: string;
  /** Center text inside the overlay if true */
  centerText?: boolean;
  /** Hide the button if true */
  hideButton?: boolean;
}

const InfoCard = ({
  title,
  description,
  image,
  linkText,
  linkUrl,
  centerText = false,
  hideButton = false,
}: InfoCardProps) => {


  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Hover animation for the card
  const cardVariants = {
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      className="group relative w-full overflow-hidden rounded-xl bg-white shadow-lg transition-shadow hover:shadow-xl"
      initial="hidden"
      animate="visible"
      // whileHover="hover"
      variants={cardVariants}
    >
      <div className="relative h-[400px] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80" />

        {/* Content container */}
        <motion.div
          variants={contentVariants}
          className={`absolute bottom-0 left-0 right-0 p-6 ${centerText ? 'text-center' : ''
            }`}
        >
          <h3 className="font-heading mb-3 text-2xl font-bold tracking-tight text-white md:text-3xl">
            {title}
          </h3>

          <p className="mb-6 max-w-prose text-sm font-medium leading-relaxed text-gray-200 md:text-base">
            {description}
          </p>

          {!hideButton && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              <span>{linkText}</span>
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};


export default InfoCard;
