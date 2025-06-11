// Premium InfoCard component with enhanced UI/UX

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const PremiumInfoCard = ({
  title,
  description,
  image,
  centerText = false,
  accentColor = "bg-red-600",
}: {
  title: string;
  description: string;
  image: string;
  linkText: string;
  linkUrl: string;
  centerText?: boolean;
  hideButton?: boolean;
  accentColor?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Handle image loading errors
  const handleImageError = () => {
    console.error(`Failed to load image for card: ${title}`);
    setImgError(true);
  };

  return (
    <motion.div
      className="bg-white rounded-2xl overflow-hidden h-full flex flex-col relative group"
      initial={{
        boxShadow:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      }}
      animate={{
        boxShadow: isHovered
          ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
          : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      {/* Accent color bar at top */}
      <div className={`h-1 w-full ${accentColor}`}></div>

      {/* Image container */}
      <div className="relative overflow-hidden h-52">
        {imgError ? (
          // Fallback colored background if image fails to load
          <div
            className={`w-full h-full ${accentColor.replace("bg", "bg-opacity-20")}`}
          >
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              <span>{title}</span>
            </div>
          </div>
        ) : (
          // Try Next.js Image component first with proper error handling
          <div className="relative w-full h-full">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              onError={handleImageError}
              priority={true}
            />
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-0"
              animate={{
                scale: isHovered ? 1.08 : 1,
                backgroundColor: isHovered
                  ? "rgba(0,0,0,0.1)"
                  : "rgba(0,0,0,0)",
              }}
              transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
            />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 z-10" />
      </div>

      {/* Content area */}
      <div
        className={`p-8 flex-grow flex flex-col relative ${centerText ? "text-center items-center" : ""}`}
      >
        {/* Title */}
        <h3 className="text-xl font-bold mb-4 text-gray-900">{title}</h3>

        {/* Animated underline on hover */}
        <motion.div
          className={`h-0.5 ${accentColor} mb-4`}
          initial={{ width: 40 }}
          animate={{ width: isHovered ? (centerText ? 80 : 60) : 40 }}
          style={{ alignSelf: centerText ? "center" : "flex-start" }}
        />

        {/* Description */}
        <p className="text-gray-700 mb-6 flex-grow leading-relaxed">
          {description}
        </p>

        {/* Button/Link */}
        {/* {!hideButton && (
          <motion.a
            href={linkUrl}
            className={`inline-flex items-center font-medium text-gray-900 ${centerText ? "justify-center" : ""}`}
            animate={{
              color: isHovered
                ? accentColor === "bg-red-600"
                  ? "#DC2626"
                  : "#4F46E5"
                : "#111827",
            }}
            whileHover={{ x: 5 }}
          >
            <span className="mr-2">{linkText}</span>
            <motion.div
              animate={{ x: isHovered ? 3 : 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <ArrowRight size={18} />
            </motion.div>
          </motion.a>
        )} */}
      </div>
    </motion.div>
  );
};

export default PremiumInfoCard;
