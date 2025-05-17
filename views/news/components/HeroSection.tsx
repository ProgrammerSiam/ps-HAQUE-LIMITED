"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Calendar,
  ChevronRight,
  Bell,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function NewsHero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentDate, setCurrentDate] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Set current date
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = today.toLocaleDateString("en-US", options);
    setCurrentDate(formattedDate);

    // Create intersection observer for entrance animation
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section
      id="news"
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-secondary to-secondary/70 py-12 md:py-16 lg:py-20"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-white/5 bg-[size:30px_30px] opacity-20"></div>

      <div className="container relative px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          {/* Left content */}
          <div
            className={`space-y-8 transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-2 text-primary-foreground/80 flex-wrap">
              <Badge
                variant="outline"
                className="border-destructive/40 bg-destructive/10 text-destructive hover:bg-destructive/15 transition-colors"
              >
                <Bell className="mr-1 h-3 w-3" />
                Latest Updates
              </Badge>
              <span className="text-sm text-destructive">|</span>
              <div className="flex items-center text-sm text-destructive">
                <Calendar className="mr-1 h-3 w-3" />
                {currentDate}
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative inline-block">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-card-foreground">
                  <span className="block">News &</span>
                  <span className="block">Announcements</span>
                </h1>
                <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-destructive rounded"></div>
              </div>
              <p className="text-base/relaxed md:text-lg/relaxed text-muted-foreground max-w-xl">
                Stay informed with the latest updates from Haque. From new
                product launches to events and milestones, find all the news
                right here.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={"#press"} className="group">
                <Button
                  size="lg"
                  className="bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-md hover:shadow-lg transition-all duration-300 group-hover:translate-y-[-2px]"
                >
                  Latest Press Release
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href={"#all-news"} className="group">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-muted-foreground/30 hover:bg-secondary/90 hover:border-muted-foreground/50 transition-all duration-300 group-hover:translate-y-[-2px]"
                >
                  Browse All News
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

            {/* News categories tags */}
            <div className="pt-2">
              <p className="text-sm text-muted-foreground mb-3">
                Popular categories:
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Product Launches",
                  "Corporate News",
                  "Events",
                  "CSR",
                  "Awards",
                ].map((tag) => (
                  <Link
                    href={`#${tag.toLowerCase().replace(" ", "-")}`}
                    key={tag}
                  >
                    <Badge
                      variant="secondary"
                      className="hover:bg-secondary/80 cursor-pointer transition-colors"
                    >
                      {tag}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right content */}
          <div
            className={`flex justify-center transition-all duration-1000 delay-300 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="relative w-full max-w-md">
              {/* Profile card */}
              <div
                className={`relative w-[85%] sm:w-[70%] md:w-[85%] mx-auto bg-card backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl transition-all duration-500 ${isHovered ? "translate-y-[-8px] shadow-xl" : ""}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="relative w-full aspect-[4/5] overflow-hidden">
                  <Image
                    src="/images/news/director.jpg"
                    alt="Adam Tamizi Haque"
                    fill
                    className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                  {/* Floating badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-destructive/90 hover:bg-destructive text-white font-medium">
                      Featured
                    </Badge>
                  </div>
                </div>

                <div className="p-6 space-y-4 bg-gradient-to-b from-card to-card/95">
                  <div>
                    <h2 className="text-xl font-bold text-card-foreground">
                      Adam Tamizi Haque
                    </h2>
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-px bg-destructive"></span>
                      <p className="text-muted-foreground font-medium">
                        Managing Director
                      </p>
                    </div>
                  </div>

                  <blockquote className="text-sm text-card-foreground/90 border-l-2 border-destructive pl-4 pr-2 py-1 italic bg-muted/20 rounded-r">
                    &quot;Our mission is to improve the quality of families in
                    our operating market area by providing affordably made world
                    class products.&quot;
                  </blockquote>

                  <Link
                    href="#interview"
                    className="inline-flex items-center text-sm text-destructive hover:text-destructive/80 font-medium hover:underline group transition-colors"
                  >
                    Read the full interview
                    <ExternalLink className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-2 h-2 bg-destructive rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-destructive rounded-full"></div>
              </div>

              {/* Decorative patterns */}
              <div className="absolute top-1/4 -right-6 size-12 border-4 border-muted-foreground/10 rounded-full hidden md:block"></div>
              <div className="absolute bottom-1/4 -left-4 size-20 border border-dashed border-muted-foreground/20 rounded-full hidden md:block"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
