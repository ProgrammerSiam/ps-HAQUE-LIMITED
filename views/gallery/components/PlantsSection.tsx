"use client";

import { useState } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Factory,
  Wheat,
  Cookie,
  Layers,
  Package,
  Popcorn,
  Expand,
  X,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

export default function PlantsSection() {
  const [activeTab, setActiveTab] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const plantCategories = [
    { id: "all", label: "All Plants", icon: <Factory className="h-4 w-4" /> },
    {
      id: "cookie",
      label: "Cookie Plant",
      icon: <Cookie className="h-4 w-4" />,
    },
    {
      id: "haas-hecorona",
      label: "Haas Hecorona",
      icon: <Wheat className="h-4 w-4" />,
    },
    {
      id: "chips",
      label: "Chips Plant",
      icon: <Popcorn className="h-4 w-4" />,
    },
    {
      id: "wafer",
      label: "Wafer Plants",
      icon: <Layers className="h-4 w-4" />,
    },
    {
      id: "packet",
      label: "Packet Plant",
      icon: <Package className="h-4 w-4" />,
    },
  ];

  const plantImages = [
    {
      id: 1,
      src: "/images/gallery/Wafer-Plant-1.jpg",
      alt: "Automated Cookie Production Line",
      title: "Automated Cookie Production Line",
      description: "State-of-the-art facility producing premium cookies",
      category: "cookie",
      details: {
        capacity: "18 tons per day",
        established: "2019",
        staff: "42 experts",
      },
    },
    {
      id: 2,
      src: "/images/gallery/Wafer-Plant-2.jpg",
      alt: "Haas Hecorona Processing Center",
      title: "Haas Hecorona Processing Center",
      description: "Specialized facility with precision engineering",
      category: "haas-hecorona",
      details: {
        capacity: "15 tons per day",
        established: "2020",
        staff: "38 experts",
      },
    },
    {
      id: 3,
      src: "/images/gallery/Wafer-Plant-3.jpg",
      alt: "Premium Chips Manufacturing",
      title: "Premium Chips Manufacturing",
      description: "Advanced chips production focusing on quality",
      category: "chips",
      details: {
        capacity: "22 tons per day",
        established: "2018",
        staff: "45 experts",
      },
    },
    {
      id: 4,
      src: "/images/gallery/Wafer-Plant-4.jpg",
      alt: "Wafer Production Line",
      title: "Wafer Production Line",
      description: "High-speed wafer production with custom recipes",
      category: "wafer",
      details: {
        capacity: "25 tons per day",
        established: "2017",
        staff: "52 experts",
      },
    },
    {
      id: 5,
      src: "/images/gallery/Wafer-Plant-5.jpg",
      alt: "Smart Packaging Center",
      title: "Smart Packaging Center",
      description: "Innovative packaging with automated inspection",
      category: "packet",
      details: {
        capacity: "30 tons per day",
        established: "2021",
        staff: "35 experts",
      },
    },
    {
      id: 6,
      src: "/images/gallery/Wafer-Plant-6.jpg",
      alt: "Artisan Cookie Facility",
      title: "Artisan Cookie Facility",
      description: "Specialized line for artisanal cookie varieties",
      category: "cookie",
      details: {
        capacity: "12 tons per day",
        established: "2022",
        staff: "28 experts",
      },
    },
    {
      id: 7,
      src: "/images/gallery/Wafer-Plant-7.jpg",
      alt: "Advanced Haas Processing",
      title: "Advanced Haas Processing",
      description: "Next-generation Haas Hecorona production",
      category: "haas-hecorona",
      details: {
        capacity: "16 tons per day",
        established: "2019",
        staff: "33 experts",
      },
    },
    {
      id: 8,
      src: "/images/gallery/Wafer-Plant-8.jpg",
      alt: "Specialty Chips Division",
      title: "Specialty Chips Division",
      description: "Custom chips with unique flavor profiles",
      category: "chips",
      details: {
        capacity: "10 tons per day",
        established: "2020",
        staff: "25 experts",
      },
    },
  ];

  // Get filtered images based on active tab
  const filteredImages =
    activeTab === "all"
      ? plantImages
      : plantImages.filter((image) => image.category === activeTab);

  // Limit to 6 cards unless "View All" is clicked
  const displayedImages = showAll ? filteredImages : filteredImages.slice(0, 6);

  // Handle plant selection for modal
  const handleSelectPlant = (plant) => {
    setSelectedPlant(plant);
    setDialogOpen(true);
  };

  // Navigate to previous plant in modal
  const handlePrevious = () => {
    const currentIndex = filteredImages.findIndex(
      (p) => p.id === selectedPlant.id
    );
    const prevIndex =
      currentIndex <= 0 ? filteredImages.length - 1 : currentIndex - 1;
    setSelectedPlant(filteredImages[prevIndex]);
  };

  // Navigate to next plant in modal
  const handleNext = () => {
    const currentIndex = filteredImages.findIndex(
      (p) => p.id === selectedPlant.id
    );
    const nextIndex =
      currentIndex >= filteredImages.length - 1 ? 0 : currentIndex + 1;
    setSelectedPlant(filteredImages[nextIndex]);
  };

  // Reset displayed cards when tab changes
  const handleTabChange = (value) => {
    setActiveTab(value);
    setShowAll(false);
  };

  return (
    <section
      id="plants"
      className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16"
    >
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-red-50 dark:bg-red-900/20 mb-2">
            <Factory className="h-8 w-8 text-red-600 dark:text-red-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Our World-Class Plants
          </h2>
          <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Exploring our state-of-the-art facilities that produce superior
            quality products with cutting-edge technology.
          </p>
          <div className="w-20 h-1 bg-red-600 rounded-full"></div>
        </div>

        <div className="mx-auto max-w-6xl">
          <Tabs
            defaultValue="all"
            className="w-full"
            onValueChange={handleTabChange}
          >
            <div className="flex justify-center mb-8">
              <TabsList className="bg-gray-100 dark:bg-gray-800 p-1 rounded-lg overflow-x-auto flex flex-nowrap max-w-full md:grid md:grid-cols-6 gap-1">
                {plantCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="flex items-center gap-2 whitespace-nowrap px-3 py-2 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:text-red-600 dark:data-[state=active]:text-red-400 rounded-md transition-all"
                  >
                    {category.icon}
                    <span className="hidden md:inline">{category.label}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent
              value={activeTab}
              className="mt-6 focus-visible:outline-none focus-visible:ring-0"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedImages.map((image) => (
                  <Card
                    key={image.id}
                    className="overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div
                      onClick={() => handleSelectPlant(image)}
                      className="cursor-pointer w-full text-left"
                    >
                      <div className="relative aspect-video w-full overflow-hidden group">
                        <Image
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          fill
                          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <div className="bg-white dark:bg-gray-800 rounded-full p-2">
                            <Expand className="h-5 w-5 text-gray-800 dark:text-white" />
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <Badge className="mb-2 bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400 border-red-200 dark:border-red-800">
                          {plantCategories.find(
                            (cat) => cat.id === image.category
                          )?.label || image.category}
                        </Badge>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-2">
                          {image.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                          {image.description}
                        </p>
                      </CardContent>
                    </div>

                    <CardFooter className="p-4 pt-0 border-t border-gray-100 dark:border-gray-700">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/10 p-2 h-auto rounded-md text-sm"
                        onClick={() => handleSelectPlant(image)}
                      >
                        View Details
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              {filteredImages.length > 6 && (
                <div className="mt-10 flex justify-center">
                  <Button
                    className="bg-red-600 hover:bg-red-700 text-white font-medium px-6"
                    onClick={() => setShowAll(!showAll)}
                  >
                    {showAll ? (
                      <>
                        Show Less <ChevronUp className="ml-2 h-4 w-4" />
                      </>
                    ) : (
                      <>
                        View All Plants <ChevronDown className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Plant Details Modal */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-5xl p-0 overflow-hidden bg-white dark:bg-gray-800 rounded-lg">
          {selectedPlant && (
            <>
              <div className="flex flex-col lg:flex-row">
                {/* Image Section */}
                <div className="relative lg:w-3/5">
                  <div className="relative aspect-video w-full overflow-hidden bg-gray-900">
                    <Image
                      src={selectedPlant.src || "/placeholder.svg"}
                      alt={selectedPlant.alt}
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>

                  <div className="absolute top-4 left-4 z-20 flex space-x-2">
                    <button
                      onClick={handlePrevious}
                      className="bg-black/50 hover:bg-black/70 p-2 rounded-full text-white transition-colors"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="bg-black/50 hover:bg-black/70 p-2 rounded-full text-white transition-colors"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>

                  <DialogClose className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-black/80 p-2 rounded-full text-white transition-colors">
                    <X className="h-5 w-5" />
                  </DialogClose>
                </div>

                {/* Details Section */}
                <div className="lg:w-2/5 p-6 max-h-[500px] overflow-y-auto">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400 border-red-200 dark:border-red-800">
                      {plantCategories.find(
                        (cat) => cat.id === selectedPlant.category
                      )?.label || selectedPlant.category}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                    >
                      Facility #{selectedPlant.id}
                    </Badge>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedPlant.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    {selectedPlant.description}
                  </p>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-1 gap-4">
                    <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                      <h3 className="font-medium text-gray-900 dark:text-white">
                        Facility Details
                      </h3>
                      <ul className="mt-2 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                        <li>
                          • Production capacity:{" "}
                          {selectedPlant.details?.capacity || "20 tons per day"}
                        </li>
                        <li>
                          • Established:{" "}
                          {selectedPlant.details?.established || "2020"}
                        </li>
                        <li>
                          • Technical Staff:{" "}
                          {selectedPlant.details?.staff || "40 experts"}
                        </li>
                      </ul>
                    </div>
                    <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                      <h3 className="font-medium text-gray-900 dark:text-white">
                        Technology
                      </h3>
                      <ul className="mt-2 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                        <li>• Automated quality control</li>
                        <li>• Energy-efficient systems</li>
                        <li>• ISO 9001 certified</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex justify-end mt-6">
                    <Button className="bg-red-600 hover:bg-red-700 text-white">
                      Request Facility Tour
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
