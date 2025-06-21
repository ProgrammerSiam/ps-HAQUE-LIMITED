"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { logo } from "@/constants/image";
import useAuth from "@/hooks/useAuth";
import ProfileDropdown from "@/components/ProfileDropdown";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [scrollDirection, setScrollDirection] = useState("up");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mobileActiveDropdown, setMobileActiveDropdown] = useState<
        number | null
    >(null);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState<
        Array<{ title: string; path: string }>
    >([]);
    const { user, loading } = useAuth();

    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const mobileToggleRef = useRef<HTMLButtonElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);

    // scroll handling with debounce
    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        interface NavigationItem {
            title: string;
            items: string[];
            paths: string[];
        }

        interface HandleClickOutsideEvent extends Event {
            target: Node & ParentNode;
        }
        const handleScroll = () => {
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
                setScrolled(currentScrollY < 0);
                setLastScrollY(currentScrollY);
            }, 50);
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
        };
        if (isMobileMenuOpen) {
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
            route: "/our-products",
            items: ["Biscuits", "Wafers", "Chocolate", "Candy"],
            paths: [
                "/products/biscuits",
                "/products/wafers",
                "/products/chocolate",
                "/products/candy",
            ],
        },
        {
            title: "Gallery",
            route: "/gallery",
            items: ["Our Plants", "TV Commercials", "Show Cards "],
            paths: [
                "/gallery/#plants",
                "/gallery/#tvCommercial",
                "/gallery/#show_cards",
            ],
        },
        {
            title: "News",
            route: "/news",
            items: ["Press Release", "Talk Show", "Events"],
            paths: [
                "/news/#press_release",
                "/news/#talk_show",
                "/news/#Events",
            ],
        },
        {
            title: "About us",
            route: "/about-us",
            items: [
                "Our values",
                "Our Concerns",
                "Company Profile",
                "Google Map Location",
                "Contact Us",
                "Our Mission and Vision",
            ],
            paths: [
                "/about-us#company_values",
                "/about-us#our_concerns",
                "/about-us#company_profile",
                "/about-us#google_map",
                "/about-us#contact",
                "/mission-vision",
            ],
        },
    ];

    // navbar animation variants
    const navbarVariants = {
        visible: {
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
            },
        },
        hidden: {
            y: -100,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
            },
        },
    };

    // Dropdown animation variants
    const dropdownVariants = {
        hidden: {
            opacity: 0,
            y: 10,
            transition: {
                duration: 0.2,
            },
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 30,
            },
        },
    };

    // Search popup animation variants
    const searchVariants = {
        hidden: {
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.2,
            },
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30,
            },
        },
    };

    // Focus search input when popup opens
    useEffect(() => {
        if (isSearchOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isSearchOpen]);

    // Close search on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setIsSearchOpen(false);
            }
        };
        window.addEventListener("keydown", handleEscape);
        return () => window.removeEventListener("keydown", handleEscape);
    }, []);

    // Sample product data - replace with your actual product data
    const products = [
        { title: "Biscuits", path: "/products/biscuits" },
        { title: "Wafers", path: "/products/wafers" },
        { title: "Chocolate", path: "/products/chocolate" },
        { title: "Candy", path: "/products/candy" },
        { title: "Our Plants", path: "/gallery/#Our Plants" },
        { title: "TV Commercials", path: "/gallery/#TV Commercials" },
        { title: "Show Cards", path: "/gallery/#Show Cards" },
        { title: "Talk Show", path: "/news/#Talk Show" },
        { title: "Press Release", path: "/news/#Press Release" },
        { title: "Events", path: "/news/#Events" },
    ];

    // Search functionality
    useEffect(() => {
        if (searchQuery.trim()) {
            const results = products.filter((product) =>
                product.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setSearchResults(results);
        } else {
            setSearchResults([]);
        }
    }, [searchQuery]);

    return (
        <motion.nav
            variants={navbarVariants}
            initial="visible"
            animate={
                scrollDirection === "down" && scrolled ? "hidden" : "visible"
            }
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
                    : "bg-white py-0"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 10,
                            }}
                        >
                            <Image
                                src={logo}
                                alt="Haque Logo"
                                width={240}
                                height={100}
                                className="transition-transform w-[180px]
                 sm:w-[200px]  md:w-[240px] duration-300 "
                            />
                        </motion.div>
                    </Link>

                    {/* Desktop Navigation */}
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
                                <Link href={item.route}>
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
                                            animate={{
                                                rotate:
                                                    activeDropdown === index
                                                        ? 180
                                                        : 0,
                                            }}
                                            transition={{ duration: 0.3 }}
                                            className="transition-colors duration-200 group-hover:text-red-600"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </motion.svg>
                                    </motion.button>
                                </Link>

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
                                                {item.items.map(
                                                    (subItem, subIndex) => (
                                                        <motion.div
                                                            key={subIndex}
                                                            whileHover={{
                                                                x: 5,
                                                            }}
                                                            transition={{
                                                                type: "spring",
                                                                stiffness: 400,
                                                                damping: 17,
                                                            }}
                                                        >
                                                            <Link
                                                                href={
                                                                    item.paths[
                                                                        subIndex
                                                                    ]
                                                                }
                                                                className="block  px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors duration-200"
                                                            >
                                                                {subItem}
                                                            </Link>
                                                        </motion.div>
                                                    )
                                                )}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center space-x-2 md:space-x-4">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsSearchOpen(true)}
                            className="bg-red-600 hover:bg-red-700 text-white p-2.5 rounded-full transition-all duration-300 hover:shadow-lg"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </motion.button>

                        {/* Conditional Sign In / Profile */}
                        {loading ? (
                            <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse" />
                        ) : user ? (
                            <ProfileDropdown />
                        ) : (
                            <Link href="/signin" passHref>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-6 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-full shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                >
                                    Sign in
                                </motion.button>
                            </Link>
                        )}

                        {/* Mobile Menu Button */}
                        <motion.button
                            ref={mobileToggleRef}
                            whileTap={{ scale: 0.95 }}
                            onClick={() =>
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }
                            // className="lg:hidden rounded-lg p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-600"
                            className={`lg:hidden rounded-lg p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-600
                                 ${isMobileMenuOpen ? "z-[100]" : ""}`}
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
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
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
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
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
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30,
                            }}
                            className="fixed top-0 right-0 h-full w-[280px] bg-white shadow-2xl z-50 overflow-y-auto"
                        >
                            <div className="px-6 pt-20 pb-8 space-y-6">
                                <motion.div
                                    whileHover={{ x: 5 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 17,
                                    }}
                                >
                                    <Link
                                        href="/"
                                        className="block text-lg font-medium text-gray-900 hover:text-red-600 transition-colors duration-200"
                                        onClick={() =>
                                            setIsMobileMenuOpen(false)
                                        }
                                    >
                                        Home
                                    </Link>
                                </motion.div>

                                {navigationItems.map((item, index) => (
                                    <div key={index} className="space-y-2">
                                        <motion.button
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() =>
                                                setMobileActiveDropdown(
                                                    mobileActiveDropdown ===
                                                        index
                                                        ? null
                                                        : index
                                                )
                                            }
                                            className="flex items-center justify-between w-full text-lg font-medium text-gray-900 hover:text-red-600 transition-colors duration-200"
                                        >
                                            <Link href={item.route}>
                                                <span>{item.title}</span>
                                            </Link>
                                            <motion.svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                animate={{
                                                    rotate:
                                                        mobileActiveDropdown ===
                                                        index
                                                            ? 180
                                                            : 0,
                                                }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </motion.svg>
                                        </motion.button>

                                        <AnimatePresence>
                                            {mobileActiveDropdown === index && (
                                                <motion.div
                                                    initial={{
                                                        height: 0,
                                                        opacity: 0,
                                                    }}
                                                    animate={{
                                                        height: "auto",
                                                        opacity: 1,
                                                        transition: {
                                                            height: {
                                                                type: "spring",
                                                                stiffness: 300,
                                                                damping: 30,
                                                            },
                                                            opacity: {
                                                                duration: 0.2,
                                                            },
                                                        },
                                                    }}
                                                    exit={{
                                                        height: 0,
                                                        opacity: 0,
                                                        transition: {
                                                            height: {
                                                                type: "spring",
                                                                stiffness: 300,
                                                                damping: 30,
                                                            },
                                                            opacity: {
                                                                duration: 0.2,
                                                            },
                                                        },
                                                    }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="pl-4 space-y-2 pt-2">
                                                        {item.items.map(
                                                            (
                                                                subItem,
                                                                subIndex
                                                            ) => (
                                                                <motion.div
                                                                    key={
                                                                        subIndex
                                                                    }
                                                                    initial={{
                                                                        x: -10,
                                                                        opacity: 0,
                                                                    }}
                                                                    animate={{
                                                                        x: 0,
                                                                        opacity: 1,
                                                                    }}
                                                                    transition={{
                                                                        delay:
                                                                            subIndex *
                                                                            0.1,
                                                                    }}
                                                                    whileHover={{
                                                                        x: 5,
                                                                    }}
                                                                >
                                                                    <Link
                                                                        href={
                                                                            item
                                                                                .paths[
                                                                                subIndex
                                                                            ]
                                                                        }
                                                                        className="block text-gray-600 hover:text-red-600 transition-colors duration-200"
                                                                        onClick={() =>
                                                                            setIsMobileMenuOpen(
                                                                                false
                                                                            )
                                                                        }
                                                                    >
                                                                        {
                                                                            subItem
                                                                        }
                                                                    </Link>
                                                                </motion.div>
                                                            )
                                                        )}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}

                                {/* Mobile Sign In */}
                                <div className="mt-6">
                                    {loading ? (
                                        <div className="w-full h-12 bg-gray-200 rounded-md animate-pulse" />
                                    ) : user ? (
                                        <div className="flex justify-center">
                                            <ProfileDropdown />
                                        </div>
                                    ) : (
                                        <Link href="/signin" passHref>
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="w-full px-6 py-3 text-base font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                            >
                                                Sign in
                                            </motion.button>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Search Popup */}
            <AnimatePresence>
                {isSearchOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black bg-opacity-50 z-50"
                            onClick={() => setIsSearchOpen(false)}
                        />
                        <motion.div
                            variants={searchVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="fixed top-0 left-0 w-full h-screen md:h-auto md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:w-[90%] md:max-w-2xl z-50"
                        >
                            <div className="bg-white h-full md:h-auto md:rounded-xl shadow-2xl p-4 md:p-6">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="flex-1">
                                        <input
                                            ref={searchInputRef}
                                            type="text"
                                            value={searchQuery}
                                            onChange={(e) =>
                                                setSearchQuery(e.target.value)
                                            }
                                            placeholder="Search products, news, gallery..."
                                            className="w-full px-4 py-3 text-lg border-2 border-gray-200 rounded-lg focus:outline-none focus:border-red-500 transition-colors duration-200"
                                        />
                                    </div>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setIsSearchOpen(false)}
                                        className="p-2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </motion.button>
                                </div>

                                {/* Search results */}
                                <div className="max-h-[calc(100vh-200px)] md:max-h-96 overflow-y-auto">
                                    {searchQuery ? (
                                        searchResults.length > 0 ? (
                                            <div className="space-y-2">
                                                {searchResults.map(
                                                    (result, index) => (
                                                        <motion.div
                                                            key={index}
                                                            initial={{
                                                                opacity: 0,
                                                                y: 10,
                                                            }}
                                                            animate={{
                                                                opacity: 1,
                                                                y: 0,
                                                            }}
                                                            transition={{
                                                                delay:
                                                                    index *
                                                                    0.05,
                                                            }}
                                                        >
                                                            <Link
                                                                href={
                                                                    result.path
                                                                }
                                                                className="block p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                                                                onClick={() =>
                                                                    setIsSearchOpen(
                                                                        false
                                                                    )
                                                                }
                                                            >
                                                                <div className="flex items-center space-x-3">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        className="h-5 w-5 text-gray-400"
                                                                        fill="none"
                                                                        viewBox="0 0 24 24"
                                                                        stroke="currentColor"
                                                                    >
                                                                        <path
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            strokeWidth={
                                                                                2
                                                                            }
                                                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                                                        />
                                                                    </svg>
                                                                    <span className="text-gray-700">
                                                                        {
                                                                            result.title
                                                                        }
                                                                    </span>
                                                                </div>
                                                            </Link>
                                                        </motion.div>
                                                    )
                                                )}
                                            </div>
                                        ) : (
                                            <div className="text-center py-8">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-12 w-12 mx-auto text-gray-400 mb-4"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                                <p className="text-gray-500 text-lg">
                                                    No results found for "
                                                    {searchQuery}"
                                                </p>
                                                <p className="text-gray-400 text-sm mt-2">
                                                    Try different keywords or
                                                    check your spelling
                                                </p>
                                            </div>
                                        )
                                    ) : (
                                        <div className="text-center py-8">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-12 w-12 mx-auto text-gray-400 mb-4"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                                />
                                            </svg>
                                            <p className="text-gray-500 text-lg">
                                                Start typing to search products
                                            </p>
                                            <p className="text-gray-400 text-sm mt-2">
                                                Search for products, news, or
                                                gallery items
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
