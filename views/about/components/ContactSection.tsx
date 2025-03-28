import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";
import { Facebook, Twitter, Youtube, Linkedin } from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
    return (
        <section id="contact" className="">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div>
                        <h2 className="sm:text-4xl text-3xl font-bold tracking-tight mb-6">
                            Don&apos;t be a stranger just say hello!
                        </h2>
                        <p className="_text text-muted-foreground mb-8 max-w-md">
                            We&apos;d love to hear from you. Feel free to reach
                            out with any questions, inquiries, or feedback.
                        </p>

                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-medium mb-2">
                                    Email
                                </h3>
                                <a
                                    href="mailto:info@athaque.com"
                                    className="text-destructive hover:underline"
                                >
                                    info@athaque.com
                                </a>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium mb-2">
                                    Phone
                                </h3>
                                <a
                                    href="tel:+88-02-8891540"
                                    className="text-destructive hover:underline"
                                >
                                    +88-02-8891540
                                </a>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium mb-2">
                                    Address
                                </h3>
                                <p className="_text text-muted-foreground">
                                    Haque Center,37,
                                    <br />
                                    Sahid Tajuddinn Ahmed Sarani,
                                    <br /> Dhaka-1208, Bangladesh.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium mb-2">
                                    Follow us
                                </h3>
                                <div className="flex space-x-4">
                                    <Link
                                        target="_blank"
                                        href="https://www.facebook.com/athaqueltd/"
                                        className="text-gray-600 hover:text-primary transition-colors"
                                    >
                                        <Facebook className="h-5 w-5" />
                                        <span className="sr-only">
                                            Facebook
                                        </span>
                                    </Link>
                                    <Link
                                        target="_blank"
                                        href="https://x.com/AT_HAQUE"
                                        className="text-gray-600 hover:text-primary transition-colors"
                                    >
                                        <Twitter className="h-5 w-5" />
                                        <span className="sr-only">Twitter</span>
                                    </Link>
                                    <Link
                                        target="_blank"
                                        href="https://www.youtube.com/channel/UCpWOsWwPxNnpYR_jX4Ms7-Q"
                                        className="text-gray-600 hover:text-primary transition-colors"
                                    >
                                        <Youtube className="h-5 w-5" />
                                        <span className="sr-only">YouTube</span>
                                    </Link>
                                    <Link
                                        target="_blank"
                                        href="https://www.linkedin.com/company/haque-group-of-industries/"
                                        className="text-gray-600 hover:text-primary transition-colors"
                                    >
                                        <Linkedin className="h-5 w-5" />
                                        <span className="sr-only">
                                            LinkedIn
                                        </span>
                                    </Link>
                                </div>
                            </div>

                            <div className="pt-4 sm:max-w-[70%]">
                                <p className="text-sm text-muted-foreground">
                                    To provide your valuable Opinions /
                                    Complaints / Suggestions direct to Managing
                                    Director (please send him an email or sms)
                                </p>
                                <div className="flex gap-8">
                                    <div className="mt-2">
                                        <h3 className="text-sm font-medium">
                                            Email
                                        </h3>
                                        <a
                                            href="mailto:md@athaque.com"
                                            className="text-destructive hover:underline text-sm"
                                        >
                                            md@athaque.com
                                        </a>
                                    </div>
                                    <div className="mt-2">
                                        <h3 className="text-sm font-medium">
                                            Phone
                                        </h3>
                                        <a
                                            href="tel:+88-0196-9999022"
                                            className="text-destructive hover:underline text-sm"
                                        >
                                            +88-0196-9999 022
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="bg-card rounded-lg shadow-sm p-6 md:p-8">
                            <h2 className="text-2xl font-bold mb-6">
                                Contact us
                            </h2>

                            <form className="space-y-4">
                                <div className="space-y-2">
                                    <label
                                        htmlFor="name"
                                        className="text-sm font-medium"
                                    >
                                        Name
                                    </label>
                                    <Input
                                        id="name"
                                        placeholder="Your name"
                                        className="mt-2"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label
                                        htmlFor="email"
                                        className="text-sm font-medium"
                                    >
                                        Email
                                    </label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Your email"
                                        className="mt-2"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label
                                        htmlFor="subject"
                                        className="text-sm font-medium"
                                    >
                                        Subject
                                    </label>
                                    <Input
                                        id="subject"
                                        placeholder="Subject"
                                        className="mt-2"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label
                                        htmlFor="message"
                                        className="text-sm font-medium"
                                    >
                                        Message
                                    </label>
                                    <Textarea
                                        id="message"
                                        placeholder="Your message"
                                        className="min-h-[120px] mt-2"
                                    />
                                </div>

                                <Button
                                    variant={"destructive"}
                                    type="submit"
                                    className="w-full"
                                >
                                    Send
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
