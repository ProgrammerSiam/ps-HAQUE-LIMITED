"use client";

import { Award } from "lucide-react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { DialogTitle } from "@radix-ui/react-dialog";

const AchievementSection = () => {
    const [groupImage, setGroupImage] = useState("");

    return (
        <section id="achievements">
            <div className="container">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-4">
                        <div className="_center w-full">
                            <Award className="size-12" color="#c81010" />
                        </div>
                        <h2 className="section_title">Adam Tamizi Haque</h2>
                        <p className="section_sub_title">
                            Some memorable moment with our MD
                        </p>
                    </div>

                    <div className="md:size-64 size-48 relative my-10">
                        <Image
                            src={"/images/gallery/H.Logo.png"}
                            alt="Adam Tamizi Haque"
                            fill
                        />
                    </div>

                    <div className="w-full bg-destructive sm:p-12 p-6 rounded-lg">
                        <Dialog>
                            <div className="w-full h-full grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8">
                                <DialogTrigger
                                    onClick={() =>
                                        setGroupImage(
                                            "/images/gallery/Lion-Group.jpg"
                                        )
                                    }
                                >
                                    <div className="relative">
                                        <Image
                                            src={
                                                "/images/gallery/Lion-Group.jpg"
                                            }
                                            alt="Adam Tamizi Haque"
                                            width={1000}
                                            height={1000}
                                        />
                                    </div>
                                </DialogTrigger>
                                <DialogTrigger
                                    onClick={() =>
                                        setGroupImage(
                                            "/images/gallery/Tiger-Group.jpg"
                                        )
                                    }
                                >
                                    <div className="relative">
                                        <Image
                                            src={
                                                "/images/gallery/Tiger-Group.jpg"
                                            }
                                            alt="Adam Tamizi Haque"
                                            width={1000}
                                            height={1000}
                                        />
                                    </div>
                                </DialogTrigger>
                                <DialogContent className="p-0 w-auto h-auto flex items-center justify-center">
                                    <div className="">
                                        <Image
                                            src={groupImage}
                                            alt="Adam Tamizi Haque"
                                            width={1000}
                                            height={1000}
                                            objectFit="cover"
                                        />
                                    </div>
                                    <DialogTitle className="hidden">
                                        <p>{""}</p>
                                    </DialogTitle>
                                </DialogContent>{" "}
                            </div>
                        </Dialog>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AchievementSection;
