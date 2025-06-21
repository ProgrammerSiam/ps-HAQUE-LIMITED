import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const GetInTouchSection = () => {
    return (
        <section className="xl:px-32 px-6">
            <div className="section_container">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left Section - Get in Touch */}
                    <div className="">
                        <div className="">
                            <p className="lg:text-[22px] text-lg text-[#DE2332] font-medium mb-1">
                                From production to partnership—we're ready to
                                talk.
                            </p>

                            <h1 className="text-4xl sm:text-5xl lg:text-[70px] font-medium text-black leading-tight">
                                Get in Touch
                            </h1>

                            <p className="lg:text-[20px] sm:text-lg text-base font-medium text-[#686868] max-w-[565px] w-full lg:mt-8 mt-4 lg:mb-6 mb-3">
                                If you have any inquiry about our company,
                                products, or services, please don't hesitate to
                                contact us. Our dedicated team is happy to
                                assist you and will respond promptly to ensure
                                your questions are answered.
                            </p>
                        </div>

                        {/* Contact Information */}
                        <div className="flex flex-wrap gap-4">
                            <div className="flex flex-col gap-3">
                                <div className="flex-shrink-0 flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={20}
                                        height={28}
                                        viewBox="0 0 20 28"
                                        fill="none"
                                        className="lg:size-[28px] size-[18px]"
                                    >
                                        <path
                                            d="M10 13.3C9.0528 13.3 8.14439 12.9313 7.47462 12.2749C6.80485 11.6185 6.42857 10.7283 6.42857 9.8C6.42857 8.87174 6.80485 7.9815 7.47462 7.32513C8.14439 6.66875 9.0528 6.3 10 6.3C10.9472 6.3 11.8556 6.66875 12.5254 7.32513C13.1952 7.9815 13.5714 8.87174 13.5714 9.8C13.5714 10.2596 13.4791 10.7148 13.2996 11.1394C13.1201 11.564 12.857 11.9499 12.5254 12.2749C12.1937 12.5999 11.8 12.8577 11.3667 13.0336C10.9334 13.2095 10.469 13.3 10 13.3ZM10 0C7.34784 0 4.8043 1.0325 2.92893 2.87035C1.05357 4.70821 0 7.20088 0 9.8C0 17.15 10 28 10 28C10 28 20 17.15 20 9.8C20 7.20088 18.9464 4.70821 17.0711 2.87035C15.1957 1.0325 12.6522 0 10 0Z"
                                            fill="#DE2332"
                                        />
                                    </svg>
                                    <h3 className="font-semibold text-[#DE2332] lg:text-[25px] text-lg">
                                        Address
                                    </h3>
                                </div>
                                <div>
                                    <p className="lg:text-[18px] text-sm font-medium">
                                        Hague Center,37,
                                        <br />
                                        Sahid Tajuddinn Ahmed
                                        <br /> Sarani,
                                        <br />
                                        Dhaka-1208,
                                        <br />
                                        Bangladesh.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <div className="flex-shrink-0 flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={27}
                                        height={22}
                                        viewBox="0 0 27 22"
                                        className="lg:size-[28px] size-[18px]"
                                    >
                                        <path
                                            d="M24.3 0H2.7C1.215 0 0.0135 1.2375 0.0135 2.75L0 19.25C0 20.7625 1.215 22 2.7 22H24.3C25.785 22 27 20.7625 27 19.25V2.75C27 1.2375 25.785 0 24.3 0ZM24.3 5.5L13.5 12.375L2.7 5.5V2.75L13.5 9.625L24.3 2.75V5.5Z"
                                            fill="#DE2332"
                                        />
                                    </svg>
                                    <h3 className="font-semibold text-[#DE2332] lg:text-[25px] text-lg">
                                        Email
                                    </h3>
                                </div>
                                <div>
                                    <p className="lg:text-[18px] text-sm font-medium">
                                        info@athaque.com
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <div className="flex-shrink-0 flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={28}
                                        height={28}
                                        viewBox="0 0 28 28"
                                        fill="none"
                                        className="lg:size-[28px] size-[18px]"
                                    >
                                        <path
                                            d="M5.63111 12.1178C7.87111 16.52 11.48 20.1133 15.8822 22.3689L19.3044 18.9467C19.7244 18.5267 20.3467 18.3867 20.8911 18.5733C22.6333 19.1489 24.5156 19.46 26.4444 19.46C27.3 19.46 28 20.16 28 21.0156V26.4444C28 27.3 27.3 28 26.4444 28C11.8378 28 0 16.1622 0 1.55556C0 0.7 0.7 0 1.55556 0H7C7.85556 0 8.55556 0.7 8.55556 1.55556C8.55556 3.5 8.86667 5.36667 9.44222 7.10889C9.61333 7.65333 9.48889 8.26 9.05333 8.69556L5.63111 12.1178Z"
                                            fill="#DE2332"
                                        />
                                    </svg>
                                    <h3 className="font-semibold text-[#DE2332] lg:text-[25px] text-lg">
                                        Phone
                                    </h3>
                                </div>
                                <div>
                                    <p className="lg:text-[18px] text-sm font-medium">
                                        +88-02-8891540
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Additional Contact Info */}
                        <div className="mt-10">
                            <p className="lg:text-[22px] sm:text-lg text-base font-medium text-[#686868]">
                                <span className="text-[#DE2332]">**</span>To
                                provide your valuable Opinions / Complaints /
                                Suggestions direct to
                                <br />
                                Managing Director please send sms or email :
                            </p>

                            <div className="flex flex-wrap items-center gap-8 mt-8">
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={27}
                                            height={22}
                                            viewBox="0 0 27 22"
                                            fill="none"
                                            className="lg:size-[28px] size-[18px]"
                                        >
                                            <path
                                                d="M24.3 0H2.7C1.215 0 0.0135 1.2375 0.0135 2.75L0 19.25C0 20.7625 1.215 22 2.7 22H24.3C25.785 22 27 20.7625 27 19.25V2.75C27 1.2375 25.785 0 24.3 0ZM24.3 5.5L13.5 12.375L2.7 5.5V2.75L13.5 9.625L24.3 2.75V5.5Z"
                                                fill="#DE2332"
                                            />
                                        </svg>
                                        <h1 className="lg:text-[25px] text-lg font-bold text-[#DE2332]">
                                            Email
                                        </h1>
                                    </div>
                                    <p className="text-[16px] text-black font-medium">
                                        md@athaque.com
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={28}
                                            height={28}
                                            viewBox="0 0 28 28"
                                            fill="none"
                                            className="lg:size-[28px] size-[18px]"
                                        >
                                            <path
                                                d="M5.63111 12.1178C7.87111 16.52 11.48 20.1133 15.8822 22.3689L19.3044 18.9467C19.7244 18.5267 20.3467 18.3867 20.8911 18.5733C22.6333 19.1489 24.5156 19.46 26.4444 19.46C27.3 19.46 28 20.16 28 21.0156V26.4444C28 27.3 27.3 28 26.4444 28C11.8378 28 0 16.1622 0 1.55556C0 0.7 0.7 0 1.55556 0H7C7.85556 0 8.55556 0.7 8.55556 1.55556C8.55556 3.5 8.86667 5.36667 9.44222 7.10889C9.61333 7.65333 9.48889 8.26 9.05333 8.69556L5.63111 12.1178Z"
                                                fill="#DE2332"
                                            />
                                        </svg>
                                        <h1 className="lg:text-[25px] text-lg font-bold text-[#DE2332]">
                                            Phone
                                        </h1>
                                    </div>
                                    <p className="text-[16px] text-black font-medium">
                                        +88-0196-9999 022
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Contact Form */}
                    <div className="lg:pl-8">
                        <div className="bg-white rounded-[15px] border-2 border-[#DE2332] py-8 px-11 shadow-[0px_0px_33px_rgba(222,35,50,0.35)]">
                            <h2 className="text-[30px] font-medium text-center text-black mb-8">
                                Contact Us
                            </h2>

                            <form className="space-y-6">
                                <div>
                                    <Input
                                        type="text"
                                        placeholder="Name"
                                        className="w-full h-[68px] px-5 border border-black rounded-[10px] focus:border-[#DE2332] focus:ring-[#DE2332] text-black placeholder:text-[#686868]"
                                    />
                                </div>

                                <div>
                                    <Input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full h-[68px] px-5 border border-black rounded-[10px] focus:border-[#DE2332] focus:ring-[#DE2332] text-black placeholder:text-[#686868]"
                                    />
                                </div>

                                <div>
                                    <Input
                                        type="text"
                                        placeholder="Subject"
                                        className="w-full h-[68px] px-5 border border-black rounded-[10px] focus:border-[#DE2332] focus:ring-[#DE2332] text-black placeholder:text-[#686868]"
                                    />
                                </div>

                                <div>
                                    <Textarea
                                        placeholder="Message"
                                        rows={6}
                                        className="w-full p-5 border border-black rounded-[10px] focus:border-[#DE2332] focus:ring-[#DE2332] text-black placeholder:text-[#686868] resize-none"
                                    />
                                </div>

                                <div className="flex items-start gap-3">
                                    <Checkbox
                                        id="privacy"
                                        className="mt-1 border border-black data-[state=checked]:bg-[#DE2332] data-[state=checked]:border-[#DE2332]"
                                    />
                                    <label
                                        htmlFor="privacy"
                                        className="text-[15px] text-black"
                                    >
                                        I Agree To The Processing Of Personal
                                        Data{" "}
                                        <span className="text-[#DE2332]">
                                            *
                                        </span>
                                    </label>
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full h-[66px] border border-black rounded-[10px] bg-[#DE2332] hover:bg-[#DE2332]/80 text-white font-semibold text-[20px] tracking-[7%] transition-colors"
                                >
                                    SEND
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetInTouchSection;
