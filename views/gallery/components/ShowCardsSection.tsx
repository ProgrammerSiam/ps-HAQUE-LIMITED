"use client";

import {
    Award,
    ZoomIn,
} from "lucide-react";
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

const ShowCardsSection = () => {
    const [activeImage, setActiveImage] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [zoomLevel, setZoomLevel] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

    useEffect(() => {
        // Reset active image and zoom when dialog closes
        if (!isOpen) {
            setTimeout(() => {
                setActiveImage("");
                setZoomLevel(1);
                setPosition({ x: 0, y: 0 });
            }, 200);
        }
    }, [isOpen]);

    const handleZoomIn = () => {
        setZoomLevel((prev) => Math.min(prev + 0.5, 4));
    };

    const handleZoomOut = () => {
        setZoomLevel((prev) => Math.max(prev - 0.5, 1));
    };

    const handleReset = () => {
        setZoomLevel(1);
        setPosition({ x: 0, y: 0 });
    };

    const handleMouseDown = (e) => {
        if (zoomLevel > 1) {
            setIsDragging(true);
            setDragStart({
                x: e.clientX - position.x,
                y: e.clientY - position.y,
            });
        }
    };

    const handleMouseMove = (e) => {
        if (isDragging && zoomLevel > 1) {
            setPosition({
                x: e.clientX - dragStart.x,
                y: e.clientY - dragStart.y,
            });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    // Add keyboard support for zoom
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (isOpen) {
                if (e.key === "+" || e.key === "=") {
                    handleZoomIn();
                } else if (e.key === "-" || e.key === "_") {
                    handleZoomOut();
                } else if (e.key === "0") {
                    handleReset();
                } else if (e.key === "Escape") {
                    setIsOpen(false);
                }
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen]);

    // Add touch support for mobile devices
    const handleTouchStart = (e) => {
        if (zoomLevel > 1 && e.touches.length === 1) {
            setIsDragging(true);
            setDragStart({
                x: e.touches[0].clientX - position.x,
                y: e.touches[0].clientY - position.y,
            });
        }
    };

    const handleTouchMove = (e) => {
        if (isDragging && zoomLevel > 1 && e.touches.length === 1) {
            e.preventDefault();
            setPosition({
                x: e.touches[0].clientX - dragStart.x,
                y: e.touches[0].clientY - dragStart.y,
            });
        }
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    // Add pinch-to-zoom for mobile
    let lastTouchDistance = 0;

    const handleTouchZoom = (e) => {
        if (e.touches.length >= 2) {
            e.preventDefault();

            // Calculate distance between two touch points
            const dx = e.touches[0].clientX - e.touches[1].clientX;
            const dy = e.touches[0].clientY - e.touches[1].clientY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (lastTouchDistance > 0) {
                // If the distance increased, zoom in, otherwise zoom out
                if (distance > lastTouchDistance) {
                    setZoomLevel((prev) => Math.min(prev + 0.05, 4));
                } else if (distance < lastTouchDistance) {
                    setZoomLevel((prev) => Math.max(prev - 0.05, 1));
                }
            }

            lastTouchDistance = distance;
        }
    };

    const handleTouchZoomEnd = () => {
        lastTouchDistance = 0;
    };

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
            id="show_cards"
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
                            Celebrating memorable moments with our Managing
                            Director
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
                                            onClick={() =>
                                                setActiveImage(image.src)
                                            }
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

                                <DialogContent
                                    className="p-2 sm:p-4 max-w-[90vw] max-h-[90vh] flex items-center justify-center bg-black/95 border-0 select-none"
                                    onMouseUp={handleMouseUp}
                                    onMouseLeave={handleMouseUp}
                                >
                                    <DialogClose className="absolute top-2 right-2 z-10">
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="text-white hover:bg-white/20"
                                        >
                                            <span className="sr-only">
                                                Close
                                            </span>
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
                                        <div
                                            className="relative w-full h-full max-w-4xl mx-auto overflow-hidden"
                                            onMouseDown={handleMouseDown}
                                            onMouseMove={handleMouseMove}
                                            onMouseUp={handleMouseUp}
                                            onMouseLeave={handleMouseUp}
                                            onWheel={(e) => {
                                                e.preventDefault();
                                                if (e.deltaY < 0) {
                                                    handleZoomIn();
                                                } else {
                                                    handleZoomOut();
                                                }
                                            }}
                                            onTouchStart={handleTouchStart}
                                            onTouchMove={handleTouchMove}
                                            onTouchEnd={handleTouchEnd}
                                            onTouchCancel={handleTouchEnd}
                                        >
                                            <img
                                                src={activeImage}
                                                alt="Gallery image"
                                                className="w-full h-auto object-contain cursor-move"
                                                style={{
                                                    transform: `scale(${zoomLevel}) translate(${position.x / zoomLevel}px, ${position.y / zoomLevel}px)`,
                                                    transition: isDragging
                                                        ? "none"
                                                        : "transform 0.2s ease-out",
                                                }}
                                                draggable="false"
                                            />

                                            {/* Zoom controls */}
                                            <div className="absolute bottom-4 right-4 flex items-center space-x-2 bg-black/60 p-2 rounded-lg">
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="text-white hover:bg-white/20 h-8 w-8"
                                                    onClick={handleZoomOut}
                                                    disabled={zoomLevel <= 1}
                                                >
                                                    <span className="sr-only">
                                                        Zoom out
                                                    </span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="18"
                                                        height="18"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <line
                                                            x1="5"
                                                            y1="12"
                                                            x2="19"
                                                            y2="12"
                                                        ></line>
                                                    </svg>
                                                </Button>

                                                <span className="text-white text-sm">
                                                    {Math.round(
                                                        zoomLevel * 100
                                                    )}
                                                    %
                                                </span>

                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="text-white hover:bg-white/20 h-8 w-8"
                                                    onClick={handleZoomIn}
                                                    disabled={zoomLevel >= 4}
                                                >
                                                    <span className="sr-only">
                                                        Zoom in
                                                    </span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="18"
                                                        height="18"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <line
                                                            x1="12"
                                                            y1="5"
                                                            x2="12"
                                                            y2="19"
                                                        ></line>
                                                        <line
                                                            x1="5"
                                                            y1="12"
                                                            x2="19"
                                                            y2="12"
                                                        ></line>
                                                    </svg>
                                                </Button>

                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="text-white hover:bg-white/20 h-8 w-8"
                                                    onClick={handleReset}
                                                >
                                                    <span className="sr-only">
                                                        Reset zoom
                                                    </span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="18"
                                                        height="18"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0z"></path>
                                                        <path d="M14 8L8 14"></path>
                                                        <path d="M8 8l6 6"></path>
                                                    </svg>
                                                </Button>
                                            </div>

                                            {/* Helper text */}
                                            <div className="absolute top-4 left-0 right-0 flex justify-center pointer-events-none">
                                                <div
                                                    className={`bg-black/60 text-white text-xs md:text-sm px-3 py-1 rounded transition-opacity duration-300 ${zoomLevel > 1 ? "opacity-100" : "opacity-0"}`}
                                                >
                                                    {window.innerWidth > 768
                                                        ? "Click and drag to move"
                                                        : "Touch and drag to move"}
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    <DialogTitle className="sr-only">
                                        Gallery Image
                                    </DialogTitle>
                                </DialogContent>
                            </div>
                        </Dialog>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShowCardsSection;

// "use client";

// import {
//   Award,
//   ZoomIn,
//   ZoomInIcon,
//   ZoomOutIcon,
//   RefreshCwIcon,
// } from "lucide-react";
// import Image from "next/image";
// import {
//   Dialog,
//   DialogContent,
//   DialogTrigger,
//   DialogClose,
// } from "@/components/ui/dialog";
// import { useState, useEffect } from "react";
// import { DialogTitle } from "@radix-ui/react-dialog";
// import { Button } from "@/components/ui/button";

// const AchievementSection = () => {
//   const [activeImage, setActiveImage] = useState("");
//   const [isLoading, setIsLoading] = useState(true);
//   const [isOpen, setIsOpen] = useState(false);
//   const [zoomLevel, setZoomLevel] = useState(1);
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [isDragging, setIsDragging] = useState(false);
//   const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     // Reset active image and zoom when dialog closes
//     if (!isOpen) {
//       setTimeout(() => {
//         setActiveImage("");
//         setZoomLevel(1);
//         setPosition({ x: 0, y: 0 });
//       }, 200);
//     }
//   }, [isOpen]);

//   const handleZoomIn = () => {
//     setZoomLevel((prev) => Math.min(prev + 0.5, 4));
//   };

//   const handleZoomOut = () => {
//     setZoomLevel((prev) => Math.max(prev - 0.5, 1));
//   };

//   const handleReset = () => {
//     setZoomLevel(1);
//     setPosition({ x: 0, y: 0 });
//   };

//   const handleMouseDown = (e) => {
//     if (zoomLevel > 1) {
//       setIsDragging(true);
//       setDragStart({
//         x: e.clientX - position.x,
//         y: e.clientY - position.y,
//       });
//     }
//   };

//   const handleMouseMove = (e) => {
//     if (isDragging && zoomLevel > 1) {
//       setPosition({
//         x: e.clientX - dragStart.x,
//         y: e.clientY - dragStart.y,
//       });
//     }
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   // Add keyboard support for zoom
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (isOpen) {
//         if (e.key === "+" || e.key === "=") {
//           handleZoomIn();
//         } else if (e.key === "-" || e.key === "_") {
//           handleZoomOut();
//         } else if (e.key === "0") {
//           handleReset();
//         } else if (e.key === "Escape") {
//           setIsOpen(false);
//         }
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [isOpen]);

//   // Add touch support for mobile devices
//   const handleTouchStart = (e) => {
//     if (zoomLevel > 1 && e.touches.length === 1) {
//       setIsDragging(true);
//       setDragStart({
//         x: e.touches[0].clientX - position.x,
//         y: e.touches[0].clientY - position.y,
//       });
//     }
//   };

//   const handleTouchMove = (e) => {
//     if (isDragging && zoomLevel > 1 && e.touches.length === 1) {
//       e.preventDefault();
//       setPosition({
//         x: e.touches[0].clientX - dragStart.x,
//         y: e.touches[0].clientY - dragStart.y,
//       });
//     }
//   };

//   const handleTouchEnd = () => {
//     setIsDragging(false);
//   };

//   // Add pinch-to-zoom for mobile
//   let lastTouchDistance = 0;

//   const handleTouchZoom = (e) => {
//     if (e.touches.length >= 2) {
//       e.preventDefault();

//       // Calculate distance between two touch points
//       const dx = e.touches[0].clientX - e.touches[1].clientX;
//       const dy = e.touches[0].clientY - e.touches[1].clientY;
//       const distance = Math.sqrt(dx * dx + dy * dy);

//       if (lastTouchDistance > 0) {
//         // If the distance increased, zoom in, otherwise zoom out
//         if (distance > lastTouchDistance) {
//           setZoomLevel((prev) => Math.min(prev + 0.05, 4));
//         } else if (distance < lastTouchDistance) {
//           setZoomLevel((prev) => Math.max(prev - 0.05, 1));
//         }
//       }

//       lastTouchDistance = distance;
//     }
//   };

//   const handleTouchZoomEnd = () => {
//     lastTouchDistance = 0;
//   };

//   const galleryImages = [
//     {
//       src: "/images/gallery/Lion-Group.jpg",
//       alt: "Lion Group with Adam Tamizi Haque",
//       title: "Lion Group Meeting",
//     },
//     {
//       src: "/images/gallery/Tiger-Group.jpg",
//       alt: "Tiger Group with Adam Tamizi Haque",
//       title: "Tiger Group Conference",
//     },
//   ];

//   return (
//     <section
//       id="achievements"
//       className="py-16 bg-gradient-to-b from-background to-muted"
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col items-center justify-center space-y-8 text-center">
//           {/* Header Section */}
//           <div className="space-y-4 max-w-2xl">
//             <div className="flex justify-center items-center">
//               <div className="bg-red-50 p-4 rounded-full">
//                 <Award className="size-12 text-red-600" />
//               </div>
//             </div>

//             <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
//               Adam Tamizi Haque
//             </h2>

//             <p className="text-muted-foreground text-lg max-w-md mx-auto">
//               Celebrating memorable moments with our Managing Director
//             </p>
//           </div>

//           {/* Logo Section with animation */}
//           <div className="relative my-10 transition-all duration-500 hover:scale-105">
//             <div className="md:size-64 size-48 relative">
//               <Image
//                 src="/images/gallery/H.Logo.png"
//                 alt="Company Logo"
//                 fill
//                 className="object-contain"
//                 onLoadingComplete={() => setIsLoading(false)}
//               />
//               {isLoading && (
//                 <div className="absolute inset-0 flex items-center justify-center bg-muted/20 rounded-full">
//                   <div className="size-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Gallery Section */}
//           <div className="w-full bg-red-600/90 p-8 rounded-xl shadow-lg">
//             <h3 className="text-white text-xl font-semibold mb-6">
//               Photo Gallery
//             </h3>

//             <Dialog open={isOpen} onOpenChange={setIsOpen}>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
//                 {galleryImages.map((image, index) => (
//                   <DialogTrigger key={index}>
//                     <div
//                       className="group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl"
//                       onClick={() => setActiveImage(image.src)}
//                     >
//                       <div className="relative aspect-video">
//                         <Image
//                           src={image.src}
//                           alt={image.alt}
//                           fill
//                           className="object-cover"
//                         />
//                       </div>

//                       {/* Overlay with zoom icon */}
//                       <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                         <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
//                           <ZoomIn className="size-6 text-white" />
//                         </div>
//                       </div>

//                       {/* Caption */}
//                       <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
//                         <p className="text-white font-medium text-sm md:text-base">
//                           {image.title}
//                         </p>
//                       </div>
//                     </div>
//                   </DialogTrigger>
//                 ))}

//                 <DialogContent
//                   className="p-2 sm:p-4 max-w-[90vw] max-h-[90vh] flex items-center justify-center bg-black/95 border-0 select-none"
//                   onMouseUp={handleMouseUp}
//                   onMouseLeave={handleMouseUp}
//                 >
//                   <DialogClose className="absolute top-2 right-2 z-10">
//                     <Button
//                       variant="ghost"
//                       size="icon"
//                       className="text-white hover:bg-white/20"
//                     >
//                       <span className="sr-only">Close</span>
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="size-5"
//                       >
//                         <path d="M18 6 6 18"></path>
//                         <path d="m6 6 12 12"></path>
//                       </svg>
//                     </Button>
//                   </DialogClose>

//                   {activeImage && (
//                     <div
//                       className="relative w-full h-full max-w-4xl mx-auto overflow-hidden"
//                       onMouseDown={handleMouseDown}
//                       onMouseMove={handleMouseMove}
//                       onMouseUp={handleMouseUp}
//                       onMouseLeave={handleMouseUp}
//                       onWheel={(e) => {
//                         e.preventDefault();
//                         if (e.deltaY < 0) {
//                           handleZoomIn();
//                         } else {
//                           handleZoomOut();
//                         }
//                       }}
//                       onTouchStart={handleTouchStart}
//                       onTouchMove={handleTouchMove}
//                       onTouchEnd={handleTouchEnd}
//                       onTouchCancel={handleTouchEnd}
//                     >
//                       <img
//                         src={activeImage}
//                         alt="Gallery image"
//                         className="w-full h-auto object-contain cursor-move"
//                         style={{
//                           transform: `scale(${zoomLevel}) translate(${position.x / zoomLevel}px, ${position.y / zoomLevel}px)`,
//                           transition: isDragging
//                             ? "none"
//                             : "transform 0.2s ease-out",
//                         }}
//                         draggable="false"
//                       />

//                       {/* Zoom controls */}
//                       <div className="absolute bottom-4 right-4 flex items-center space-x-2 bg-black/60 p-2 rounded-lg">
//                         <Button
//                           variant="ghost"
//                           size="icon"
//                           className="text-white hover:bg-white/20 h-8 w-8"
//                           onClick={handleZoomOut}
//                           disabled={zoomLevel <= 1}
//                         >
//                           <span className="sr-only">Zoom out</span>
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="18"
//                             height="18"
//                             viewBox="0 0 24 24"
//                             fill="none"
//                             stroke="currentColor"
//                             strokeWidth="2"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           >
//                             <line x1="5" y1="12" x2="19" y2="12"></line>
//                           </svg>
//                         </Button>

//                         <span className="text-white text-sm">
//                           {Math.round(zoomLevel * 100)}%
//                         </span>

//                         <Button
//                           variant="ghost"
//                           size="icon"
//                           className="text-white hover:bg-white/20 h-8 w-8"
//                           onClick={handleZoomIn}
//                           disabled={zoomLevel >= 4}
//                         >
//                           <span className="sr-only">Zoom in</span>
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="18"
//                             height="18"
//                             viewBox="0 0 24 24"
//                             fill="none"
//                             stroke="currentColor"
//                             strokeWidth="2"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           >
//                             <line x1="12" y1="5" x2="12" y2="19"></line>
//                             <line x1="5" y1="12" x2="19" y2="12"></line>
//                           </svg>
//                         </Button>

//                         <Button
//                           variant="ghost"
//                           size="icon"
//                           className="text-white hover:bg-white/20 h-8 w-8"
//                           onClick={handleReset}
//                         >
//                           <span className="sr-only">Reset zoom</span>
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="18"
//                             height="18"
//                             viewBox="0 0 24 24"
//                             fill="none"
//                             stroke="currentColor"
//                             strokeWidth="2"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           >
//                             <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0z"></path>
//                             <path d="M14 8L8 14"></path>
//                             <path d="M8 8l6 6"></path>
//                           </svg>
//                         </Button>
//                       </div>

//                       {/* Helper text */}
//                       <div className="absolute top-4 left-0 right-0 flex justify-center pointer-events-none">
//                         <div
//                           className={`bg-black/60 text-white text-xs md:text-sm px-3 py-1 rounded transition-opacity duration-300 ${zoomLevel > 1 ? "opacity-100" : "opacity-0"}`}
//                         >
//                           {window.innerWidth > 768
//                             ? "Click and drag to move"
//                             : "Touch and drag to move"}
//                         </div>
//                       </div>
//                     </div>
//                   )}

//                   <DialogTitle className="sr-only">Gallery Image</DialogTitle>
//                 </DialogContent>
//               </div>
//             </Dialog>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AchievementSection;
