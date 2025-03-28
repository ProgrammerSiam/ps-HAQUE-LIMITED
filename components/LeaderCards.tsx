"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useState } from "react";

interface LeaderCardProps {
  name: string;
  title: string;
  image: StaticImageData | string;
}

const LeaderCard = ({ name, title, image }: LeaderCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const socialLinks = [
    { icon: FaFacebookF, href: "#", label: "Facebook" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  ];

  const cardVariants = {
    hover: {
      y: -8,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const socialIconsVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const iconVariant = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      className="group relative h-[400px] w-full overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 ease-out hover:shadow-xl"
      variants={cardVariants}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative h-full w-full">
        <Image
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 " />

        {/* Social Icons */}
        <motion.div
          className="absolute right-4 top-1/4 -translate-y-1/2 space-y-4"
          initial="hidden"
          animate={isHovered ? "visible" : "hidden"}
          variants={socialIconsVariants}
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              variants={iconVariant}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-lg backdrop-blur-sm transition-colors duration-200 hover:bg-white hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 "
              aria-label={social.label}
            >
              <social.icon className="h-4 w-4" />
            </motion.a>
          ))}
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="absolute bottom-0 w-full p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-heading mb-1 text-2xl font-bold tracking-tight text-white md:text-3xl">
            {name}
          </h3>
          <p className="text-base font-medium text-gray-200 md:text-lg">
            {title}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LeaderCard;
