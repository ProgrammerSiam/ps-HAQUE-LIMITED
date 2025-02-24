"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { logo } from "@/constants/image";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [scrollDirection, setScrollDirection] = useState("up");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mobileActiveDropdown, setMobileActiveDropdown] = useState<number | null>(null);

    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const mobileToggleRef = useRef<HTMLButtonElement>(null);

    // Enhanced scroll handling with debounce
    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        interface NavigationItem {
            title: string;
            items: string[];
            paths: string[];
        }

        interface HandleClickOutsideEvent extends Event {
            target: Node & ParentNode;
        }      const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Clear the previous timeout
            clearTimeout(timeoutId);

            // Set a new timeout
            timeoutId = setTimeout(() => {
                // Determine scroll direction
                if (currentScrollY > lastScrollY) {
                    setScrollDirection("down");
                } else {
                    setScrollDirection("up");
                }

                // Update scroll state
                setScrolled(currentScrollY > 2);
                setLastScrollY(currentScrollY);
            }, 50); // 50ms debounce
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(timeoutId);
        };
    }, [lastScrollY]);

    // Click outside handler
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                mobileMenuRef.current &&
                mobileToggleRef.current &&
                !mobileMenuRef.current.contains(event.target as Node) &&
                !mobileToggleRef.current.contains(event.target as Node)
            ) {
                setIsMobileMenuOpen(false);
            }
        }; if (isMobileMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
            // Prevent body scroll when mobile menu is open
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.body.style.overflow = "unset";
        };
    }, [isMobileMenuOpen]);

    const navigationItems = [
        {
            title: "Our Products",
            items: ["Biscuits", "Wafers", "Chocolate", "Candy"],
            paths: ["/products/biscuits", "/products/wafers", "/products/chocolate", "/products/candy"]
        },
        {
            title: "Gallery",
            items: ["Factory", "Products", "Events"],
            paths: ["/gallery/factory", "/gallery/products", "/gallery/events"]
        },
        {
            title: "News",
            items: ["Blog", "Press Releases", "Events"],
            paths: ["/news/blog", "/news/press", "/news/events"]
        },
        {
            title: "About us",
            items: ["Mission", "Vision", "Leadership", "History"],
            paths: ["/about/mission", "/about/vision", "/about/leadership", "/about/history"]
        }
    ];

    // navbar animation variants
    const navbarVariants = {
        visible: {
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20
            }
        },
        hidden: {
            y: -100,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20
            }
        }
    };

    // Dropdown animation variants
    const dropdownVariants = {
        hidden: {
            opacity: 0,
            y: 10,
            transition: {
                duration: 0.2
            }
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 30
            }
        }
    };

    return (


        <motion.nav
            variants={navbarVariants}
            initial="visible"
            animate={scrollDirection === "down" && scrolled ? "hidden" : "visible"}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
                : "bg-white py-4"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <Image
                                src={logo}
                                alt="Haque Logo"
                                width={140}
                                height={60}
                                className="transition-transform duration-300"
                            />
                        </motion.div>
                    </Link>


                    {/* Desktop Navigation with Fixed Dropdown */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <Link
                            href="/"
                            className="nav-link relative text-gray-900 font-medium text-base tracking-wide before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-red-600 before:origin-right before:scale-x-0 before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100"
                        >
                            Home
                        </Link>

                        {navigationItems.map((item, index) => (
                            <div
                                key={index}
                                className="relative"
                                onMouseEnter={() => setActiveDropdown(index)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    className="group flex items-center space-x-1 text-gray-900 font-medium text-base tracking-wide"
                                >
                                    <span className="transition-colors duration-200 group-hover:text-red-600">
                                        {item.title}
                                    </span>
                                    <motion.svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="12"
                                        height="12"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        animate={{ rotate: activeDropdown === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="transition-colors duration-200 group-hover:text-red-600"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </motion.svg>
                                </motion.button>

                                <AnimatePresence>
                                    {activeDropdown === index && (
                                        <motion.div
                                            variants={dropdownVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="hidden"
                                            style={{ top: 0 }}
                                            className="absolute left-0 w-48 rounded-lg bg-white shadow-xl ring-1 ring-black ring-opacity-5 overflow-hidden mt-8"
                                        >
                                            <div className="py-2">
                                                {item.items.map((subItem, subIndex) => (
                                                    <motion.div
                                                        key={subIndex}
                                                        whileHover={{ x: 5 }}
                                                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                                    >
                                                        <Link
                                                            href={item.paths[subIndex]}
                                                            className="block  px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors duration-200"
                                                        >
                                                            {subItem}
                                                        </Link>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center space-x-4">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-red-600 hover:bg-red-700 text-white p-2.5 rounded-full transition-all duration-300 hover:shadow-lg"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                            </svg>
                        </motion.button>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href="/signin"
                                className="hidden lg:inline-flex items-center px-6 py-2.5 border-2 border-red-600 text-red-600 font-medium rounded-lg transition-all duration-300 hover:bg-red-600 hover:text-white hover:shadow-lg"
                            >
                                Sign in
                            </Link>
                        </motion.div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            ref={mobileToggleRef}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden rounded-lg p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-600"
                        >
                            <span className="sr-only">Open menu</span>
                            <AnimatePresence mode="wait">
                                {isMobileMenuOpen ? (
                                    <motion.svg
                                        key="close"
                                        initial={{ rotate: 0 }}
                                        animate={{ rotate: 180 }}
                                        exit={{ rotate: 0 }}
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </motion.svg>
                                ) : (
                                    <motion.svg
                                        key="menu"
                                        initial={{ rotate: 180 }}
                                        animate={{ rotate: 0 }}
                                        exit={{ rotate: 180 }}
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </motion.svg>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black bg-opacity-50 z-40"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        <motion.div
                            ref={mobileMenuRef}
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed top-0 right-0 h-full w-[280px] bg-white shadow-2xl z-50 overflow-y-auto"
                        >
                            <div className="px-6 pt-20 pb-8 space-y-6">
                                <motion.div
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >
                                    <Link
                                        href="/"
                                        className="block text-lg font-medium text-gray-900 hover:text-red-600 transition-colors duration-200"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Home
                                    </Link>
                                </motion.div>

                                {navigationItems.map((item, index) => (
                                    <div key={index} className="space-y-2">
                                        <motion.button
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => setMobileActiveDropdown(mobileActiveDropdown === index ? null : index)}
                                            className="flex items-center justify-between w-full text-lg font-medium text-gray-900 hover:text-red-600 transition-colors duration-200"
                                        >
                                            {item.title}
                                            <motion.svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                animate={{ rotate: mobileActiveDropdown === index ? 180 : 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />

                                            </motion.svg>
                                        </motion.button>

                                        <AnimatePresence>
                                            {mobileActiveDropdown === index && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{
                                                        height: "auto",
                                                        opacity: 1,
                                                        transition: {
                                                            height: {
                                                                type: "spring",
                                                                stiffness: 300,
                                                                damping: 30
                                                            },
                                                            opacity: {
                                                                duration: 0.2
                                                            }
                                                        }
                                                    }}
                                                    exit={{
                                                        height: 0,
                                                        opacity: 0,
                                                        transition: {
                                                            height: {
                                                                type: "spring",
                                                                stiffness: 300,
                                                                damping: 30
                                                            },
                                                            opacity: {
                                                                duration: 0.2
                                                            }
                                                        }
                                                    }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="pl-4 space-y-2 pt-2">
                                                        {item.items.map((subItem, subIndex) => (
                                                            <motion.div
                                                                key={subIndex}
                                                                initial={{ x: -10, opacity: 0 }}
                                                                animate={{ x: 0, opacity: 1 }}
                                                                transition={{ delay: subIndex * 0.1 }}
                                                                whileHover={{ x: 5 }}
                                                            >
                                                                <Link
                                                                    href={item.paths[subIndex]}
                                                                    className="block text-gray-600 hover:text-red-600 transition-colors duration-200"
                                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                                >
                                                                    {subItem}
                                                                </Link>
                                                            </motion.div>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}

                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link
                                        href="/signin"
                                        className="inline-flex items-center px-6 py-2.5 border-2 border-red-600 text-red-600 font-medium rounded-lg transition-all duration-300 hover:bg-red-600 hover:text-white"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Sign in
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </motion.nav>


    );
};

export default Navbar;