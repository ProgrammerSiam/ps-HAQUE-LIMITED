"use client";

import { Award, ZoomIn } from "lucide-react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";

const AchievementSection = () => {
  const [activeImage, setActiveImage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Reset active image when dialog closes
    if (!isOpen) {
      setTimeout(() => setActiveImage(""), 200);
    }
  }, [isOpen]);

  const galleryImages = [
    {
      src: "/images/gallery/Lion-Group.jpg",
      alt: "Lion Group with Adam Tamizi Haque",
      title: "Lion Group Meeting",
    },
    {
      src: "/images/gallery/Tiger-Group.jpg",
      alt: "Tiger Group with Adam Tamizi Haque",
      title: "Tiger Group Conference",
    },
  ];

  return (
    <section
      id="achievements"
      className="py-16 bg-gradient-to-b from-background to-muted"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          {/* Header Section */}
          <div className="space-y-4 max-w-2xl">
            <div className="flex justify-center items-center">
              <div className="bg-red-50 p-4 rounded-full">
                <Award className="size-12 text-red-600" />
              </div>
            </div>

            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Adam Tamizi Haque
            </h2>

            <p className="text-muted-foreground text-lg max-w-md mx-auto">
              Celebrating memorable moments with our Managing Director
            </p>
          </div>

          {/* Logo Section with animation */}
          <div className="relative my-10 transition-all duration-500 hover:scale-105">
            <div className="md:size-64 size-48 relative">
              <Image
                src="/images/gallery/H.Logo.png"
                alt="Company Logo"
                fill
                className="object-contain"
                onLoadingComplete={() => setIsLoading(false)}
              />
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-muted/20 rounded-full">
                  <div className="size-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
            </div>
          </div>

          {/* Gallery Section */}
          <div className="w-full bg-red-600/90 p-8 rounded-xl shadow-lg">
            <h3 className="text-white text-xl font-semibold mb-6">
              Photo Gallery
            </h3>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                {galleryImages.map((image, index) => (
                  <DialogTrigger key={index}>
                    <div
                      className="group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl"
                      onClick={() => setActiveImage(image.src)}
                    >
                      <div className="relative aspect-video">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Overlay with zoom icon */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                          <ZoomIn className="size-6 text-white" />
                        </div>
                      </div>

                      {/* Caption */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <p className="text-white font-medium text-sm md:text-base">
                          {image.title}
                        </p>
                      </div>
                    </div>
                  </DialogTrigger>
                ))}

                <DialogContent className="p-2 sm:p-4 max-w-[90vw] max-h-[90vh] flex items-center justify-center bg-black/95 border-0">
                  <DialogClose className="absolute top-2 right-2 z-10">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white hover:bg-white/20"
                    >
                      <span className="sr-only">Close</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="size-5"
                      >
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                    </Button>
                  </DialogClose>

                  {activeImage && (
                    <div className="w-full h-full max-w-4xl mx-auto">
                      <img
                        src={activeImage}
                        alt="Gallery image"
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  )}

                  <DialogTitle className="sr-only">Gallery Image</DialogTitle>
                </DialogContent>
              </div>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementSection;
