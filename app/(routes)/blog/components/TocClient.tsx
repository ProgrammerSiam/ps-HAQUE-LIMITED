"use client";

import { useState, useEffect, useRef } from "react";

interface TocItem {
  level: number;
  text: string;
  slug: string;
}

interface TocClientProps {
  toc: TocItem[];
}

export default function TocClient({ toc }: TocClientProps) {
  const [activeId, setActiveId] = useState("");
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    observer.current = new IntersectionObserver(handleObserver, {
      rootMargin: "-20% 0px -80% 0px",
    });

    const elements = toc
      .map(({ slug }) => document.getElementById(slug))
      .filter((el) => el);
    elements.forEach((el) => observer.current?.observe(el!));

    return () => observer.current?.disconnect();
  }, [toc]);

  return (
    <div className="p-6 bg-gray-50 rounded-lg">
      <h3 className="font-bold text-lg mb-4">Contents</h3>
      <ul className="space-y-2">
        {toc.map((item) => (
          <li
            key={item.slug}
            style={{ marginLeft: `${(item.level - 2) * 1}rem` }}
          >
            <a
              href={`#${item.slug}`}
              className={`transition-colors text-gray-600 hover:text-red-600 ${
                activeId === item.slug ? "!text-red-600 font-semibold" : ""
              }`}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
