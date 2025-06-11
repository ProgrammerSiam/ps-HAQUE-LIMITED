import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Mail, X, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

export default function FloatingContactIcons() {
  const [isOpen, setIsOpen] = useState(false);

  const mainButtonVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      scale: 0,
      transition: {
        duration: 0.2,
      },
    },
    whileHover: {
      scale: 1.15,
      rotate: [0, -10, 10, -10, 0],
      boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
      transition: {
        rotate: {
          duration: 1,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        },
        boxShadow: {
          duration: 0.2,
        },
      },
    },
    whileTap: {
      scale: 0.9,
      rotate: -45,
    },
  };

  const iconContainerVariants = {
    initial: { opacity: 0, scale: 0.5 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const iconVariants = {
    initial: { scale: 0, x: 50, opacity: 0 },
    animate: {
      scale: 1,
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20,
      },
    },
    exit: {
      scale: 0,
      x: 50,
      opacity: 0,
    },
    whileHover: {
      scale: 1.2,
      rotate: [0, -10, 10, -10, 0],
      boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
      transition: {
        rotate: {
          duration: 0.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        },
      },
    },
    whileTap: { scale: 0.9 },
  };

  const closeButtonVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.4,
        type: "spring",
        stiffness: 400,
        damping: 20,
      },
    },
    exit: {
      scale: 0,
      opacity: 0,
    },
    whileHover: {
      scale: 1.2,
      rotate: 180,
      backgroundColor: "#EF4444",
      transition: {
        duration: 0.3,
      },
    },
    whileTap: { scale: 0.9 },
  };

  const icons = [
    // {
    //   Icon: MessageSquare,
    //   href: "#contact",
    //   color: "bg-red-500",
    //   label: "Message",
    //   hoverText: "Send us a message",
    // },
    {
      Icon: FaWhatsapp,
      href: "https://wa.me/+8802-8891540",
      color: "bg-green-500",
      label: "WhatsApp",
      hoverText: "Chat on WhatsApp",
    },
    // {
    //   Icon: FaFacebookMessenger,
    //   href: "https://m.me/athaqueltd",
    //   color: "bg-blue-600",
    //   label: "Messenger",
    //   hoverText: "Chat on Messenger",
    // },
    // {
    //   Icon: Phone,
    //   href: "tel:+88-02-8891540",
    //   color: "bg-purple-500",
    //   label: "Call",
    //   hoverText: "Call us now",
    // },
    {
      Icon: Mail,
      href: "mailto:info@athaque.com",
      color: "bg-blue-500",
      label: "Email",
      hoverText: "Send us an email",
    },
  ];

  return (
    <div className="fixed right-4 bottom-4 z-50">
      <div className="relative">
        {/* Contact Options */}
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              className="absolute bottom-0 right-0 flex flex-col-reverse gap-3 items-end "
              variants={iconContainerVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {/* Close Button at Top */}
              <motion.button
                className="bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer transition-all mt-2"
                variants={closeButtonVariants}
                whileHover="whileHover"
                whileTap="whileTap"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-5 h-5" />
              </motion.button>

              {icons.map(({ Icon, href, color, label, hoverText }, index) => (
                <motion.div
                  key={label}
                  variants={iconVariants}
                  className="relative group"
                  custom={index}
                >
                  <Link
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                  >
                    <motion.div
                      className={`${color} w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer hover:shadow-xl transition-all`}
                      whileHover="whileHover"
                      whileTap="whileTap"
                    >
                      <Icon className="w-5 h-5" />
                      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 py-1.5 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-all duration-200 scale-0 group-hover:scale-100 origin-right whitespace-nowrap shadow-lg">
                        {hoverText}
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Contact Button */}
        <AnimatePresence mode="wait">
          {!isOpen && (
            <motion.button
              className="bg-gradient-to-r from-red-500 to-red-600 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer hover:shadow-xl transition-all relative group"
              variants={mainButtonVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              whileHover="whileHover"
              whileTap="whileTap"
              onClick={() => setIsOpen(true)}
            >
              <MessageCircle className="w-6 h-6" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full" />
              <div className="absolute -top-10 right-0 bg-gray-800 text-white px-3 py-1.5 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-all duration-200 scale-0 group-hover:scale-100 origin-bottom-right whitespace-nowrap shadow-lg pointer-events-none">
                Click to contact us
              </div>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
