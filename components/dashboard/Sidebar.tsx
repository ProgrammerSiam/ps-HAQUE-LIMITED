"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  HomeIcon,
  ShoppingBagIcon,
  NewspaperIcon,
  TagIcon,
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  BuildingOfficeIcon,
  VideoCameraIcon,
  SparklesIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

const menuItems = [
  {
    title: "Dashboard",
    icon: HomeIcon,
    path: "/dashboard",
  },
  {
    title: "Products",
    icon: ShoppingBagIcon,
    subItems: [
      { title: "All Products", path: "/dashboard/products" },
      { title: "Add Product", path: "/dashboard/products/add" },
    ],
  },
  {
    title: "Blog",
    icon: NewspaperIcon,
    subItems: [
      { title: "All Posts", path: "/dashboard/blog" },
      { title: "Add Post", path: "/dashboard/blog/add" },
    ],
  },
  {
    title: "Brands",
    icon: TagIcon,
    subItems: [
      { title: "All Brands", path: "/dashboard/brand" },
      { title: "Add Brand", path: "/dashboard/brand/add" },
    ],
  },
  {
    title: "Our Plants",
    icon: BuildingOfficeIcon,
    subItems: [
      { title: "All Plants", path: "/dashboard/plants" },
      { title: "Add Plant", path: "/dashboard/plants/add" },
    ],
  },
  {
    title: "TV Commercials",
    icon: VideoCameraIcon,
    subItems: [
      { title: "All Commercials", path: "/dashboard/commercials" },
      { title: "Add Commercial", path: "/dashboard/commercials/add" },
    ],
  },
  {
    title: "News",
    icon: SparklesIcon,
    subItems: [
      { title: "All News", path: "/dashboard/news" },
      { title: "Add News", path: "/dashboard/news/add" },
    ],
  },
  {
    title: "Newsletter",
    icon: EnvelopeIcon,
    path: "/dashboard/newsletter",
  },
];

export const Sidebar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sidebarContent = (
    <div className="p-4">
      <Link href="/dashboard">
        <h1 className="text-2xl font-bold text-gray-800">Admin Panel</h1>
      </Link>

      <nav className="mt-8 space-y-1">
        {menuItems.map((item) => (
          <div key={item.title}>
            {item.subItems ? (
              // Menu item with subitems
              <>
                <button
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === item.title ? null : item.title
                    )
                  }
                  className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium rounded-lg ${
                    pathname === item.path
                      ? "bg-primary-50 text-primary-600"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center">
                    <item.icon className="w-5 h-5 mr-3" />
                    <span>{item.title}</span>
                  </div>
                  <ChevronDownIcon
                    className={`w-4 h-4 transition-transform ${
                      activeDropdown === item.title ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {activeDropdown === item.title && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="bg-gray-50"
                    >
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.path}
                          href={subItem.path}
                          className={`block pl-14 pr-6 py-2 text-sm ${
                            pathname === subItem.path
                              ? "text-blue-600 bg-blue-50"
                              : "text-gray-600 hover:bg-gray-100"
                          }`}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            ) : (
              // Menu item without subitems
              <Link
                href={item.path}
                className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg ${
                  pathname === item.path
                    ? "bg-primary-50 text-primary-600"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                <span>{item.title}</span>
              </Link>
            )}
          </div>
        ))}
      </nav>

      <div className="mt-auto pt-8 pb-4 border-t border-gray-200">
        <Link
          href="/"
          className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <HomeIcon className="w-5 h-5 mr-3" />
          <span className="text-sm font-medium">Back Home</span>
        </Link>
      </div>
    </div>
  );

  return (
    <>
      {isMobile ? (
        <>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-lg"
          >
            {isOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>

          <AnimatePresence>
            {isOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/50 z-40"
                  onClick={() => setIsOpen(false)}
                />
                <motion.div
                  initial={{ x: -300 }}
                  animate={{ x: 0 }}
                  exit={{ x: -300 }}
                  className="fixed left-0 top-0 h-full w-64 bg-white shadow-xl z-50 overflow-y-auto"
                >
                  <div className="w-64 bg-white h-screen shadow-lg flex flex-col">
                    {sidebarContent}
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </>
      ) : (
        <div className="w-64 bg-white h-screen shadow-lg flex flex-col">
          {sidebarContent}
        </div>
      )}
    </>
  );
};
