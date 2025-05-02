"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Bookmark,
  Calendar,
  ChevronDown,
  ChevronUp,
  Printer,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  Check,
} from "lucide-react";
import Link from "next/link";

const Paper = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState(false);
  const [fontSize, setFontSize] = useState("medium");
  // const [activeRelatedArticle, setActiveRelatedArticle] = useState(0);

  const articleRef = useRef(null);

  const copyToClipboard = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const changeFontSize = (size: string) => {
    setFontSize(size);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: articleRef.current.offsetTop - 100,
      behavior: "smooth",
    });
  };

  // const relatedArticles = [
  //   {
  //     id: 1,
  //     title: "হক গ্রুপের নতুন বিস্কুট লাইন উদ্বোধন অনুষ্ঠান",
  //     source: "প্রথম আলো",
  //     date: "১৫ মে, ২০২৪",
  //     image: "/images/news/ittefaq.png",
  //   },
  //   {
  //     id: 2,
  //     title: "বাংলাদেশের শিল্প খাতে হক গ্রুপের অবদান",
  //     source: "দৈনিক সমকাল",
  //     date: "২২ জুন, ২০২৩",
  //     image: "/images/news/ittefaq.png",
  //   },
  //   {
  //     id: 3,
  //     title: "বিশ্বমানের পণ্য উৎপাদনে হক গ্রুপের প্রতিশ্রুতি",
  //     source: "বাংলাদেশ প্রতিদিন",
  //     date: "১০ জানুয়ারি, ২০২৪",
  //     image: "/images/news/ittefaq.png",
  //   },
  // ];

  
  // Font size classes based on selection
  
  const fontSizeClasses = {
    small: "text-sm/[22px] sm:text-sm/[24px]",
    medium: "text-base/[24px] sm:text-base/[28px]",
    large: "text-lg/[26px] sm:text-lg/[30px]",
  };

  return (
    <div id="press_release" className="py-20 bg-muted/30" ref={articleRef}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Main content area */}
          <div className="w-full lg:w-2/3">
            <div className="bg-card rounded-xl shadow-sm overflow-hidden">
              {/* Article header */}
              <div className="border-b border-dashed border-primary/20 p-6 pb-8">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <Image
                      src="/images/news/ittefaq.png"
                      alt="ittefaq"
                      width={180}
                      height={60}
                      className="object-contain"
                    />
                    <Badge
                      variant="outline"
                      className="bg-primary/5 text-primary hover:bg-primary/10"
                    >
                      সাক্ষাৎকার
                    </Badge>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4" />
                    <p>২২ জুন, ২০১৫ ইং ১৩:২২ মিঃ</p>
                  </div>
                </div>

                <h1 className="text-2xl sm:text-3xl font-bold mt-6 mb-3 text-card-foreground">
                  "আমাদের লক্ষ্য পরিবারকে মানসম্পন্ন পণ্য সরবরাহ করা" - অ্যাডাম
                  তামিজি হক
                </h1>

                <p className="text-muted-foreground">
                  সাক্ষাত্কার নিয়েছেন: রিয়াদ খন্দকার
                </p>
              </div>

              {/* Article content */}
              <div className="p-6">
                {/* Reading controls */}
                <div className="mb-6 flex flex-wrap items-center justify-between gap-3 bg-muted/30 p-3 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-muted-foreground">
                      ফন্টের আকার:
                    </span>
                    <div className="flex gap-1">
                      <Button
                        variant={fontSize === "small" ? "secondary" : "ghost"}
                        size="sm"
                        className="h-8 px-2"
                        onClick={() => changeFontSize("small")}
                      >
                        A<span className="text-xs">-</span>
                      </Button>
                      <Button
                        variant={fontSize === "medium" ? "secondary" : "ghost"}
                        size="sm"
                        className="h-8 px-2"
                        onClick={() => changeFontSize("medium")}
                      >
                        A
                      </Button>
                      <Button
                        variant={fontSize === "large" ? "secondary" : "ghost"}
                        size="sm"
                        className="h-8 px-2"
                        onClick={() => changeFontSize("large")}
                      >
                        A<span className="text-xs">+</span>
                      </Button>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8"
                      onClick={() => setIsBookmarked(!isBookmarked)}
                    >
                      <Bookmark
                        className={`mr-1 h-4 w-4 ${isBookmarked ? "fill-current" : ""}`}
                      />
                      <span className="hidden sm:inline">সংরক্ষণ</span>
                    </Button>

                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8"
                      onClick={handlePrint}
                    >
                      <Printer className="mr-1 h-4 w-4" />
                      <span className="hidden sm:inline">প্রিন্ট</span>
                    </Button>

                    <div className="relative">
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8"
                        onClick={copyToClipboard}
                      >
                        {copied ? (
                          <>
                            <Check className="mr-1 h-4 w-4 text-green-500" />
                            <span className="hidden sm:inline">কপি হয়েছে</span>
                          </>
                        ) : (
                          <>
                            <Copy className="mr-1 h-4 w-4" />
                            <span className="hidden sm:inline">লিঙ্ক কপি</span>
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Feature image */}
                <div className="relative aspect-video mb-6 rounded-lg overflow-hidden">
                  <Image
                    src="/images/news/director.jpg"
                    alt="Adam Tamizi Haque"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm">
                      হক গ্রুপ অব ইন্ডাস্ট্রিজের ম্যানেজিং ডিরেক্টর অ্যাডাম
                      তামিজি হক
                    </p>
                  </div>
                </div>

                {/* Article text */}
                <div
                  className={`text-card-foreground ${fontSizeClasses[fontSize]} mb-6`}
                >
                  <p className="mb-4">
                    ঐতিহ্যের পথ ধরেই আজ নিজের অবস্থানে সফল, নিজের মেধা ও মনন
                    দিয়ে প্রতিষ্ঠানটিকে ঢেলে সাজিয়েছেন আধুনিকতার ছোঁয়ায়।
                    বলছিলাম হক গ্রুপ অব ইন্ডাস্ট্রিজের ম্যানেজিং ডিরেক্টর
                    অ্যাডাম তামিজি হকের কথা। সাক্ষাত্কারটি নিয়েছেন রিয়াদ
                    খন্দকার
                  </p>

                  <div className="bg-primary/5 border-l-4 border-primary p-4 my-6 rounded-r-lg">
                    <p className="italic">
                      "আমি এই প্রতিষ্ঠানের জন্ম দেখিনি, এই প্রতিষ্ঠান আমার জন্ম
                      দেখেছে। হক বিস্কুটের ক্ষেত্রে এই কথা বললে খুব বেশি ভুল হবে
                      না। কারণ এই প্রতিষ্ঠান শুরু হয় ব্রিটিশ আমলে। আমার দাদা
                      চট্টগ্রামে ১৯৪৭ সালে স্থাপন করেন হক ব্রাদার্স কোম্পানি
                      লিমিটেড। আর হক ব্রাদার্স ইন্ডাস্ট্রির শুরু হয় ভাষা
                      আন্দোলনের বছরে, ১৯৫২ সালে। তাই এই প্রতিষ্ঠান বাংলাদেশের
                      সবচেয়ে পুরোনো প্রতিষ্ঠান এমনটা বললেও খুব একটা ভুল হবে
                      না।"
                    </p>
                  </div>

                  <p className="mb-4">
                    কয়েক যুগ ধরে সাফল্যের সাথে বাংলাদেশে বিভিন্ন জিনিসের ব্যবসা
                    করে আসছে হক কোম্পানি। এই প্রতিষ্ঠানে অ্যাডাম হকের কাজের শুরু
                    কিভাবে জানতে চাইলে তিনি বলেন, 'মূলত প্রথম দিকে আমার বাবাই এই
                    ব্যবসা দেখতেন। তবে ২০০২ সালের আগে যখন আমার বাবা সক্রিয়ভাবে
                    কাজ করা বন্ধ করে দেন, তখন ব্যবসা কিছু সমস্যার মুখে পড়ে। বলা
                    যায় প্রায় দুই বছরের বিক্রির সমান টাকার ঋণ ছিল আমাদের। এক
                    কথায় বলা চলে ব্যবসা কার্যত বন্ধ হয়ে যাচ্ছিল। তখন আমি কাজ
                    শুরু করি। ১৮ বছর বয়স থেকেই আমি এখানে ডিরেক্টরের দায়িত্ব
                    পালন করে আসছি। তবে ২০১১ সালে আমাকে অফিশিয়ালি এই দায়িত্ব
                    দেওয়া হয়।'
                  </p>

                  {/* Initial visible content */}
                  <div className={`${isExpanded ? "" : "line-clamp-[10]"}`}>
                    <p className="mb-4">
                      বাংলাদেশে ব্যবসার এক স্বর্ণযুগের সাক্ষী এই কোম্পানি। চোখের
                      সামনে দেখেছে অনেক উত্থান এবং পতন। সাদা কাগজের কালো দাগে
                      সেই ইতিহাস বর্ণনা এত সহজ নয়। 'আমার বাবার সময় আমাদের
                      নিজস্ব ডিপো ছিল। আমাদের নিজেদের ১০০টির মতো গাড়ি ছিল। ডিপো
                      থাকলে মূলত যেটা হয় কেউ আর খরচের কথা খুব একটা চিন্তা করে
                      না। বরং সবাই চিন্তা করে তার পণ্য বিক্রি করা নিয়ে। এই
                      ব্যবস্থা সম্ভব ছিল যখন আমাদের টর্চের ব্যাটারির ব্যবসা ছিল।
                      ওই সময়ে এই টর্চের ব্যাটারির অনেক চল ছিল, ঢাকায় না হলেও
                      মফঃস্বলে অনেকেই টর্চ ব্যবহার করত। এখন আসলে দৃশ্যপট অনেক
                      পরিবর্তন হয়ে গিয়েছে। সবকিছু ডিজিটাল হয়ে যাওয়ার সাথে
                      সাথে টর্চের যুগেরও পরিসমাপ্তি ঘটেছে। এখন মোবাইলে অথবা
                      রিচার্জেবল টর্চের ব্যবহার করা হয়। তাই এখন চাইলেও আর আগের
                      মতো ব্যবসা সম্ভব নয়। আমি যদি আজকে বিস্কুট না বিক্রি করি
                      তাহলে আমার প্রতিযোগী আরও ২০০ বিস্কুটের কোম্পানি আছে বিক্রি
                      করার জন্য।'
                    </p>

                    <h3 className="text-xl font-semibold mt-6 mb-3">
                      সময়ের সাথে অভিযোজন
                    </h3>

                    <p className="mb-4">
                      ডিজিটালাইজেশনের এই যুগে অনেক প্রাচীন বিখ্যাত কোম্পানিই
                      হারিয়ে গেছে সময়ের অতল গহ্বরে। তবে সেই হারিয়ে যাওয়ার
                      খাতায় নাম লেখায়নি হক গ্রুপ। সময়ের সাথে তাল মিলিয়ে চলার
                      জন্য কী কী পন্থা অবলম্বন করেছেন অ্যাডাম জানতে চাইলে তিনি
                      বলেন, 'মূলত কাস্টমারদের প্রতি মনোযোগ দিয়েছি। প্রশাসনিক
                      ক্ষেত্রে অনেক কিছু অগোছালো ছিল সেগুলোও গোছাতে হয়েছে। আবার
                      আমাদের অনেক পণ্য ছিল যেগুলো মার্কেটে চাহিদা ছিল না সেগুলো
                      উত্পাদন বন্ধ করে যেটার চাহিদা আছে সেটার উত্পাদন বাড়িয়ে
                      দিয়েছি। আগে সাপ্লাই দিতেও অনেক সময় দেখা যেত দেরি হতো।
                      সেই সমস্যাটাও কাটিয়ে উঠেছি। এখন ধীরে ধীরে আমাদের কাস্টমার
                      অনেক বেড়ে গেছে। অনেক নামীদামি কোম্পানিও আমাদের সাথে
                      ব্যবসা করতে আসছে।'
                    </p>

                    <h3 className="text-xl font-semibold mt-6 mb-3">
                      দুই প্রজন্মের পরিচালনা পদ্ধতি
                    </h3>

                    <p className="mb-4">
                      দুই প্রজন্মের হাত ধরে এই ব্যবসা এতটা পথ পাড়ি দিয়েছে। এই
                      দুই প্রজন্মের দিক-নির্দেশনার কোন দিকটায় পার্থক্য ছিল
                      জানতে চাইলে তিনি বলেন, 'মূল পার্থক্য ছিল নিজস্ব মতের সাথে।
                      আমার বাবার সময়ে তিনি যেটা ঠিক মনে করতেন সেটাই করতেন। আর
                      এখন আমাকে মাথায় রাখতে হয় আমার ক্রেতা কী চায়। ক্রেতা
                      যেটা ঠিক মনে করবে সেটার উপর ভিত্তি করেই চাহিদা তৈরি হয়।
                      আগে যেমন পণ্য দোকানে চলে গেলে যদি বিক্রি না হয় কোনো কারণে
                      সেটা ফেরত নেওয়ার কোনো ব্যবস্থা ছিল না। কিন্তু এখন সেই
                      ব্যবস্থা চালু হয়েছে। আপাতদৃষ্টিতে হয়তো মনে হয় এতে
                      আমাদের ক্ষতি হচ্ছে কিন্তু প্রকৃতপক্ষে এভাবে আমরা আমাদের
                      কাস্টমার ধরে রাখতে পারছি।'
                    </p>

                    <h3 className="text-xl font-semibold mt-6 mb-3">
                      শিক্ষা ও ব্যবসায়িক যাত্রা
                    </h3>

                    <p className="mb-4">
                      জীবনের অনেকটা সময়ই তার কেটেছে লন্ডনে বোর্ডিং স্কুলে। ষোল
                      বছর বয়সে স্কুল ছেড়ে এর মাঝে কিছু দিন ছিলেন ইংল্যান্ডের
                      দক্ষিণে। এরপর লন্ডনে আবার বিশ্ববিদ্যালয়ে ভর্তি হন। তারপর
                      ২০০২ সাল থেকেই পারিবারিক ব্যবসার জন্য দেশে ফেরত আসেন
                      অ্যাডাম। ব্যবসার হাল ধরেছেন বেশ ভালোমতোই, ক্ষতির মুখ থেকে
                      কোম্পানিকে ফিরিয়ে এনে লাভের মুখ দেখিয়েছেন।
                    </p>

                    <h3 className="text-xl font-semibold mt-6 mb-3">
                      ভবিষ্যৎ পরিকল্পনা
                    </h3>

                    <p>
                      ভবিষ্যত্ পরিকল্পনা কী জানতে চাইলে তিনি বলেন, 'খুব দূরের
                      কথা আসলে বলাটা কঠিন কারণ বর্তমানে বাজার অনেক অস্থিতিশীল।
                      তাই ভবিষ্যত্ বলাটাও কিছুটা অসম্ভব তবে আমাদের চেষ্টা অবশ্যই
                      থাকবে সময়ের সাথে তাল মিলিয়ে চলার।'
                    </p>
                  </div>
                </div>

                {/* Read more button */}
                <div className="text-center mt-4 mb-6">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setIsExpanded(!isExpanded);
                      if (isExpanded) {
                        scrollToTop();
                      }
                    }}
                    className="w-full sm:w-auto"
                  >
                    {isExpanded ? (
                      <>
                        <ChevronUp className="mr-2 h-4 w-4" />
                        সংক্ষিপ্ত দেখুন
                      </>
                    ) : (
                      <>
                        <ChevronDown className="mr-2 h-4 w-4" />
                        সম্পূর্ণ সাক্ষাৎকার পড়ুন
                      </>
                    )}
                  </Button>
                </div>

                {/* Tags */}
                <div className="mt-8 pt-6 border-t border-border">
                  <h4 className="text-sm font-medium text-muted-foreground mb-3">
                    সম্পর্কিত বিষয়সমূহ:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "হক গ্রুপ",
                      "অ্যাডাম তামিজি হক",
                      "বিস্কুট শিল্প",
                      "বাংলাদেশের শিল্প",
                      "দৈনিক ইত্তেফাক",
                    ].map((tag) => (
                      <Link href={`#${tag}`} key={tag}>
                        <Badge className="bg-muted hover:bg-muted/80 text-muted-foreground">
                          {tag}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Social share */}
                <div className="mt-6 pt-6 border-t border-border">
                  <h4 className="text-sm font-medium text-muted-foreground mb-3">
                    শেয়ার করুন:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-10 w-10 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 border-blue-200"
                    >
                      <Facebook className="h-5 w-5" />
                      <span className="sr-only">Share on Facebook</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-10 w-10 rounded-full bg-sky-100 text-sky-500 hover:bg-sky-200 border-sky-200"
                    >
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Share on Twitter</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-10 w-10 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-200"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">Share on LinkedIn</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3">
            {/* Company info card */}
            <div className="bg-card rounded-xl shadow-sm overflow-hidden mb-6">
              <div className="p-6 pb-4 border-b border-border">
                <h3 className="text-lg font-bold text-card-foreground mb-1">
                  হক গ্রুপ অব ইন্ডাস্ট্রিজ
                </h3>
                <p className="text-sm text-muted-foreground">
                  ১৯৪৭ সালে প্রতিষ্ঠিত
                </p>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Image
                      src="/images/gallery/H.Logo.png"
                      alt="Haque Logo"
                      width={30}
                      height={30}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">কোম্পানি পরিচিতি</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      ১৯৪৭ সালে প্রতিষ্ঠিত হক গ্রুপ বাংলাদেশের অন্যতম পুরাতন
                      শিল্প প্রতিষ্ঠান। বিস্কুট থেকে শুরু করে বিভিন্ন খাদ্য পণ্য
                      উৎপাদনে অগ্রণী ভূমিকা পালন করে আসছে।
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">কোম্পানির ইতিহাস</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      ১৯৫২ সালে হক ব্রাদার্স ইন্ডাস্ট্রি প্রতিষ্ঠিত হয়। এই
                      প্রতিষ্ঠান বাংলাদেশের স্বাধীনতার পূর্ব থেকেই দেশের
                      অর্থনীতিতে অবদান রেখে আসছে।
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paper;
