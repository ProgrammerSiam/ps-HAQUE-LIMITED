"use client";

import { useState } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Factory, Wheat, Cookie, Layers, Package, Popcorn } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";

export default function PlantsSection() {
    const [activeTab, setActiveTab] = useState("all");

    const plantCategories = [
        { id: "all", label: "All", icon: <Factory className="h-4 w-4" /> },
        {
            id: "cookie",
            label: "Cookie Plant",
            icon: <Cookie className="h-4 w-4" />,
        },
        {
            id: "haas hecorona",
            label: "Haas hecorona",
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
            alt: "Plant Image 1",
            category: "cookie",
        },
        {
            id: 2,
            src: "/images/gallery/Wafer-Plant-2.jpg",
            alt: "Plant Image 2",
            category: "haas hecorona",
        },
        {
            id: 3,
            src: "/images/gallery/Wafer-Plant-3.jpg",
            alt: "Plant Image 3",
            category: "chips",
        },
        {
            id: 4,
            src: "/images/gallery/Wafer-Plant-4.jpg",
            alt: "Plant Image 4",
            category: "wafer",
        },
        {
            id: 5,
            src: "/images/gallery/Wafer-Plant-5.jpg",
            alt: "Plant Image 5",
            category: "packet",
        },
        {
            id: 6,
            src: "/images/gallery/Wafer-Plant-6.jpg",
            alt: "Plant Image 6",
            category: "cookie",
        },
        {
            id: 7,
            src: "/images/gallery/Wafer-Plant-7.jpg",
            alt: "Plant Image 7",
            category: "haas hecorona",
        },
        {
            id: 8,
            src: "/images/gallery/Wafer-Plant-8.jpg",
            alt: "Plant Image 8",
            category: "chips",
        },
    ];

    const filteredImages =
        activeTab === "all"
            ? plantImages
            : plantImages.filter((image) => image.category === activeTab);

    return (
        <section id="plants" className="bg-muted/50">
            <div className="container">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-4">
                        <div className="_center w-full">
                            <Factory className="size-12" color="#c81010" />
                        </div>
                        <h2 className="section_title">Our Plants</h2>
                        <p className="section_sub_title">
                            World Class products with superior quality.
                        </p>
                    </div>
                </div>

                <div className="mx-auto mt-12 max-w-5xl">
                    <Tabs
                        defaultValue="all"
                        className="w-full"
                        onValueChange={setActiveTab}
                    >
                        <div className="flex justify-center">
                            <TabsList className="grid grid-cols-3 md:grid-cols-6 gap-2">
                                {plantCategories.map((category) => (
                                    <TabsTrigger
                                        key={category.id}
                                        value={category.id}
                                        className="flex items-center gap-2"
                                    >
                                        {category.icon}
                                        <span className="hidden md:inline">
                                            {category.label}
                                        </span>
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </div>

                        <TabsContent value={activeTab} className="mt-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredImages.map((image) => (
                                    <Dialog key={image.id}>
                                        <Card className="overflow-hidden border-none relative">
                                            <DialogTrigger className="size-full">
                                                <CardContent className="p-0 size-full">
                                                    <div className="relative aspect-video size-full overflow-hidden group">
                                                        <Image
                                                            src={
                                                                image.src ||
                                                                "/placeholder.svg"
                                                            }
                                                            alt={image.alt}
                                                            fill
                                                            className="object-cover transition-all hover:scale-105 duration-500 ease-in-out"
                                                        />
                                                    </div>
                                                </CardContent>
                                            </DialogTrigger>
                                        </Card>

                                        <DialogContent className="sm:max-w-[800px]">
                                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                                                <Image
                                                    src={
                                                        image.src ||
                                                        "/placeholder.svg"
                                                    }
                                                    alt={image.alt}
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                            <div className="text-center mt-2">
                                                <DialogTitle>
                                                    <p>{""}</p>
                                                </DialogTitle>
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                ))}
                            </div>

                            <div className="mt-8 flex justify-center">
                                <Button variant="outline">Load More</Button>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </section>
    );
}
