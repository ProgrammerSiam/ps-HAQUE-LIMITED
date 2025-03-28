"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Calendar, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function NewsHero() {
    const [isVisible, setIsVisible] = useState(false);
    const [currentDate, setCurrentDate] = useState("");

    useEffect(() => {
        setIsVisible(true);

        const today = new Date();
        const options = { year: "numeric" as const, month: "long" as const, day: "numeric" as const };
        const formattedDate = today.toLocaleDateString("en-US", options);
        setCurrentDate(formattedDate);
    }, []);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section id="news" className="relative overflow-hidden bg-secondary">
            <div className="container relative px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left content */}
                    <div
                        className={`space-y-8 transition-all duration-1000 ${
                            isVisible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-10 opacity-0"
                        }`}
                    >
                        <div className="inline-flex items-center gap-2 text-primary-foreground/80">
                            <Badge
                                variant="outline"
                                className="border-destructive/40 bg-destructive/10 text-destructive"
                            >
                                Latest Updates
                            </Badge>
                            <span className="text-sm text-destructive">|</span>
                            <div className="flex items-center text-sm text-destructive">
                                <Calendar className="mr-1 h-3 w-3" />
                                {currentDate}
                            </div>
                        </div>

                        <div>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-card-foreground">
                                <span className="block">News &</span>
                                <span className="block">Announcements</span>
                            </h1>
                            <p className="mt-6 text-base/[22px] text-muted-foreground max-w-xl">
                                Stay informed with the latest updates from
                                Haque. From new product launches to events and
                                milestones, find all the news right here.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href={"#press"}>
                                <Button size="lg" className="group">
                                    Latest Press Release
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Right content */}
                    <div
                        className={`flex justify-center transition-all duration-1000 delay-300 ${
                            isVisible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-10 opacity-0"
                        }`}
                    >
                        <div className="relative">
                            {/* Profile card */}
                            <div className="relative sm:w-[70%] w-full mx-auto bg-primary backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl">
                                <div className="relative w-full overflow-hidden rounded-lg">
                                    <Image
                                        src="/images/news/director.jpg"
                                        alt="Adam Tamizi Haque"
                                        width={400}
                                        height={400}
                                        className="size-full object-cover"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                </div>

                                <div className="p-6 space-y-4">
                                    <div>
                                        <h2 className="text-xl font-bold text-primary-foreground">
                                            Adam Tamizi Haque
                                        </h2>
                                        <p className="text-primary-foreground/80">
                                            Managing Director
                                        </p>
                                    </div>

                                    <p className="text-sm text-muted-foreground border-l-2 border-primary/50 pr-10 italic">
                                        &quot;Our mission is to improve the
                                        quality of families in our operating
                                        market area by providing affordably made
                                        world class products.&quot;
                                    </p>

                                    <Link
                                        href="#interview"
                                        className="inline-flex items-center text-sm text-destructive hover:underline"
                                    >
                                        Read the full interview{" "}
                                        <ChevronRight className="ml-1 h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
