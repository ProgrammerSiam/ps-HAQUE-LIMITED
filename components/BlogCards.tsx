import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { StaticImageData } from "next/image";

interface BlogCardProps {
  title: string;
  date: string;
  image: string | StaticImageData;
  excerpt: string;
  link: string;
  category?: string;
  readTime?: string;
}

const BlogCard = ({
  title,
  date,
  image,
  excerpt,
  link,
  category = "Blog",
  readTime = "5 min read",
}: BlogCardProps) => {
  return (
    <motion.div
      // whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="h-full"
    >
      <div className="group h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-60 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
          {/* <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-800">
                            {category}
                        </span>
                    </div> */}
        </div>

        <div className="space-y-1 p-4">
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {date}
            </span>
            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {readTime}
            </span>
          </div>
          <h3 className="font-bold text-xl leading-tight hover:text-red-600 transition-colors">
            {title}
          </h3>
        </div>

        <div className="p-4 pt-0">
          <p className="text-gray-600 text-sm line-clamp-2">{excerpt}</p>
        </div>

        <div className="p-4 pt-0">
          <Link
            href={link}
            className="group/link inline-flex items-center text-red-600 hover:text-red-800 transition-colors text-sm font-medium"
          >
            Read more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1 transition-transform duration-200 group-hover/link:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
