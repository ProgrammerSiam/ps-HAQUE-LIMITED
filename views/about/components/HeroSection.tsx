import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
    return (
        <section
            id="about"
            className="bg-app-black/90 border-primary-foreground/50"
        >
            <div className="_center flex-col text-center">
                <div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary-foreground">
                        About Us
                    </h1>
                    <p className="mt-10 sm:text-lg/[24px] text-base/[22px] text-primary-foreground/50 max-w-[850px] px-4">
                        Over the years, we at A.T.Haque group have successfully
                        created a remarkable reputation for our organization by
                        establishing unmatched quality, standard and reliability
                        in all our product by using the state of the art
                        technology and best practices. Central to this
                        achievement has been our drive to exceed our customers
                        and stake holder&apos;s expectations.
                    </p>
                    <div className="mt-10 space-y-1">
                        {/* <p className="text-primary-foreground text-lg/[24px]">
                            Adam Tamizi haque
                        </p>
                        <p className="text-primary-foreground/50 text-[16px]/[22px] italic">
                            Managing Directors
                        </p> */}
                        <h2 className="text-primary-foreground text-xl font-medium mb-1">
                            Adam Tamizi haque
                        </h2>
                        <p className="text-primary-foreground/50 text-sm">
                            Managing Director
                        </p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 mt-4">
                    <Link href="#company_profile">
                        <Button
                            variant={"destructive"}
                            size="lg"
                            className="cursor-pointer max-sm:w-full"
                        >
                            Our History
                        </Button>
                    </Link>
                    <Link href={""}>
                        <Button
                            variant="outline"
                            size="lg"
                            className="bg-card text-destructive border-card/20 hover:bg-card/90 hover:text-destructive cursor-pointer max-sm:w-full"
                        >
                            Our Products
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
