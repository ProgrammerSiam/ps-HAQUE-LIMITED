"use client";

import { Card, CardContent } from "@/components/ui/card";
import { MonitorPlay } from "lucide-react";

export default function TvCommercialSection() {
    const commercials = [
        {
            id: 1,
            title: "Misti Cookie | TV Commercial",
            thumbnail: "/placeholder.svg?height=200&width=350",
            videoId: "li1tR-8dwa0",
        },
        {
            id: 2,
            title: "Mr. Cookie | TV Commercial 2017",
            thumbnail: "/placeholder.svg?height=200&width=350",
            videoId: "uo_xul7xJNM",
        },
        {
            id: 3,
            title: "Haque Chocolate Digestive",
            thumbnail: "/placeholder.svg?height=200&width=350",
            videoId: "mTweb7iq2H4",
        },
        {
            id: 4,
            title: "Haque Tarzan Chips",
            thumbnail: "/placeholder.svg?height=200&width=350",
            videoId: "-3G5FyxZ6Nw",
        },
        {
            id: 5,
            title: "Haque Antiseptic Soap",
            thumbnail: "/placeholder.svg?height=200&width=350",
            videoId: "Jd7Oe5Xm1hs",
        },
        {
            id: 6,
            title: "Mr Cookie Dessert Recipe",
            thumbnail: "/placeholder.svg?height=200&width=350",
            videoId: "z6so-jgpIf0",
        },
        {
            id: 7,
            title: "Mr Cookie Dessert Recipe",
            thumbnail: "/placeholder.svg?height=200&width=350",
            videoId: "-zctDK-pH34",
        },
        {
            id: 8,
            title: "Mr Cookie Dessert Recipe",
            thumbnail: "/placeholder.svg?height=200&width=350",
            videoId: "w6MTTr49Jy4",
        },
        {
            id: 9,
            title: "Mr Cookie Dessert Recipe",
            thumbnail: "/placeholder.svg?height=200&width=350",
            videoId: "fGwP2-5QYrc",
        },
        {
            id: 10,
            title: "Mr Cookie Dessert Recipe",
            thumbnail: "/placeholder.svg?height=200&width=350",
            videoId: "iEPAnL0wxpY",
        },
        {
            id: 11,
            title: "Mr Cookie Dessert Recipe",
            thumbnail: "/placeholder.svg?height=200&width=350",
            videoId: "Li43t-OvUg8",
        },
        {
            id: 12,
            title: "Mr Cookie Dessert Recipe",
            thumbnail: "/placeholder.svg?height=200&width=350",
            videoId: "HobHZb2fee8",
        },
        {
            id: 13,
            title: "Mr Cookie Dessert Recipe",
            thumbnail: "/placeholder.svg?height=200&width=350",
            videoId: "8q5UprjM_bk",
        },
        {
            id: 14,
            title: "Mr Cookie Dessert Recipe",
            thumbnail: "/placeholder.svg?height=200&width=350",
            videoId: "npgp7NWifQU",
        },
    ];

    return (
        <section id="tvCommercial" className="bg-muted/50">
            <div className="container">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-4">
                        {" "}
                        <div className="_center w-full">
                            <MonitorPlay className="size-12" color="#c81010" />
                        </div>
                        <h2 className="section_title">TV Commercials</h2>
                        <p className="section_sub_title">
                            Watch our latest TV commercials and advertisements
                        </p>
                    </div>
                </div>

                <div className="mx-auto mt-12 max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {commercials.map((commercial) => (
                            <Card
                                key={commercial.id}
                                className="overflow-hidden border-none"
                            >
                                <CardContent className="p-0">
                                    <div className="group relative aspect-video w-full overflow-hidden bg-muted">
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            src={`https://www.youtube.com/embed/${commercial.videoId}`}
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
