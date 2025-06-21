"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  Quote,
  Search,
  ChevronDown,
  Filter,
  Clock,
  Share2,
  BookmarkPlus,
  Printer,
  ArrowRight,
  MessageSquare,
  Eye,
  Calendar,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";

interface InterviewQuestion {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export default function Interview() {
  const [activeQuestion, setActiveQuestion] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | "all">(
    "all"
  );
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const accordionRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  // const scrollToQuestion = (questionId: string) => {
  //   setActiveQuestion(questionId);
  //   if (accordionRef.current) {
  //     const element = document.getElementById(`question-${questionId}`);
  //     if (element) {
  //       const yOffset = -100;
  //       const y =
  //         element.getBoundingClientRect().top + window.scrollY + yOffset;
  //       window.scrollTo({ top: y, behavior: "smooth" });
  //     }
  //   }
  // };

  // Click outside search to close focus state
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsSearchFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const interviewQuestions: InterviewQuestion[] = [
    {
      id: "q1",
      question:
        "Can you speak a short History about Haque Group of Industries? How did your Father start this HGI journey in Bangladesh?",
      answer:
        "The HAQUE GROUP has started journey as the distributor of M/S, Huntley & Palmers, (The famous British biscuit company), and Union Carbide for their Eveready Brand battery.\n\nMy grandfather has established Haque Brothers Ltd. in 1947 in Chittagong. And Haque Brothers Industries started its journey under my father, barrister Tamizul Haque, in the year of language movement, 1952.\n\nI can say that Haque is one of the oldest organizations of Bangladesh. Haque started own biscuit production at 1952 and our carbide company at 1963. Before that time we were engaged in trading business.\n\nIn late 70's we launched Mr. Cookie, the Leading Biscuit Brand in Bangladesh which has earned Monde Selection gold medal. Not only Mr. Cookie we always tried to adopt international products in local market and we launched Bourbon, Chocolate Digestive, Plain Digestive, Cream Crackers, Lemon Puff, Ding Dong Wafer, Pillow Chocolate Chips as pioneering products for Bangladesh.",
      category: "History",
    },
    {
      id: "q2",
      question:
        "Please tell us about yourself? How did you start your journey as a professional?",
      answer:
        "I was born in London, apart from 1 year in American School Dhaka, I spent most of my school life at boarding school in England. At the age of 16 I left boarding school and moved to a tutorial college in London.\n\nAfter short stay in Zanzibar, Tanzania, I moved to Huddersfield in North England and did a course in catering before working in Hilton hotel in Huddersfield. After that I moved to London, and started University.\n\nHaque was an established brand in Bangladesh during Pakistan times, immediately after liberation the company was nationalized as were most companies of the time. However father of the nation, Sheikh Mujibur Rahman, was kind enough to order all our properties restored to my father and he continued at the helm of the company until 2011 at which point his ill health and old age forced him to retire and now he is our Chairman Emeritus. From that time I have been Managing Director of the entire group and the company has shown considerable growth during this short tenure, about 1000%.\n\nI am serving Haque as director since my age of 18, however practically working in the company since 2002 only where I first started with the Dry Cell and soap businesses and only in 2011 started to involve myself with biscuit after becoming MD.",
      category: "Personal",
    },
    {
      id: "q3",
      question: "Tell us about current food market of Bangladesh.",
      answer:
        "Bangladesh food industry is growing rapidly. Demands for high-end biscuits and snacks are growing day by day. Once upon a time people were taking only glucose biscuits now a day people are taking biscuits with nuts and chocolate and many varieties of products are being produced as well as imported in the country.\n\nNew technologies are being introduced all the time to improve production, quality, yield and cost, as well as product innovation. Control and use of information has become key to increasing distribution effectiveness and coverage. Market structure and segments are becoming very complex. Entry of foreign food products has become easy. Many companies are coming into the food business with huge investment. Consumers are looking for better quality products in better price. Margin in this segment is not significant, we all need huge volume to survive in this industry. Bank interest rate is very high in comparison to margin which leads to sickness of industry.",
      category: "Market",
    },
    {
      id: "q4",
      question:
        "Haque Group is a pioneer of biscuit and dry cell Manufacture in Bangladesh Tell us about the quality of product.",
      answer:
        "Our mission is to improve the quality of families in our operating market area by providing affordably made world class products. If you go to our mission statement it is clear that we are committed to provide world class products to our consumers. And we are always giving this to our consumers. We never compromise with our quality.\n\nTo the consumers Haque is a beacon of faith and trust; competitors look upon Haque as an example of brilliance in quality and taste. We have a quality committed manufacturing and support team.\n\nWe are producing our products with world class machineries most of them are European.\n\nStrong quality control is maintained in every stage of production. A dedicated team is continuously working to ensure quality product is produced.",
      category: "Products",
    },
    {
      id: "q5",
      question:
        " How would you assess Bangladesh as a potential manufacturing zone for food and vegetable process industries?",
      answer:
        "Bangladesh still has advantage for being potential zone for food manufacturing. Not only for local market but also we can have a good export processed food from Bangladesh. Many companies of Bangladesh are exporting their products to other countries. Relatively low labor costs are there, but huge cost of land and lack of supply of gas and stable electricity are impediments to growth. We are also trying to set up a new plant, but we have very limited gas supply, and as such it is difficult to move from our existing premises which is already severely overcrowded.",
      category: "Industry",
    },
    {
      id: "q6",
      question:
        "What is your export plan and which country you already export?",
      answer:
        "We have many export quality products. But as the internal demand is huge, we have to fulfill the demand of our country at first. So we are exporting a little to some SAARC countries.\n\nWith the increasing production capacity, we have plans to export more especially to West Bengal where we have an established customer base.",
      category: "Export",
    },
    {
      id: "q7",
      question:
        "What is your opinion about the current FMCG market development in Bangladesh?",
      answer:
        "Bangladesh is one of the largest population countries of the world. Despite many infrastructural problems Bangladesh has achieved steady growth in GDP. FMCG market is also growing with the increasing population base. However it is frustrating to see people continuously coming into the biscuit field where there are already 10 large producers, and several hundred small producers.\n\nFMCG Industry is mostly depended on distribution network. Most of the companies are using own field forces for order procuring and engaging distributors for ensuring delivery to traders. It is remotely managed. For further growth ensuring monitoring of TSO performance and product movement is important. This is time to introduce modern information technologies to ensure proper monitoring of product movement and TSO performance.\n\nMay be in near future FMCG companies will start their own distribution that is the companies will deploy own vehicles to ensure delivery to traders. FMCG companies will ensure delivery not only to traders but also to consumers. IT infrastructure is becoming strong, so consumers will be able to give their orders for single packets of biscuits directly to the company and nearby distributors or company TSO will ensure delivery to consumers.\n\nThis segment is low margin segment thus to make the business profitable companies have to reduce the middle parties as much as possible.\n\nRoad transport system has developed a lot so now products move in both urban and rural equally and whole sales system almost out from the scene.\n\nSince consumers' disposable income is increasing so consumer choice is moving towards value added products.",
      category: "Market",
    },
    {
      id: "q8",
      question: "Do you think the local FMCG industry is booming?",
      answer:
        "Yes I think local FMCG industry is booming. In this era of globalization; it is becoming easier for companies to get product ideas, getting good quality raw materials, introducing modern technologies, using automatic machineries to increase capacity and improve e quality while reducing labor costs.\n\nThe majority of the population has sufficient disposable income for FMCG product purchase, which is helping the market grow. But in this globalization era local companies are straggling with the multinational brands as they are using huge awareness campaigns but local companies are failing to do so as the cost is high for them.",
      category: "Industry",
    },
    {
      id: "q9",
      question: "What's the secret behind the success of your organization?",
      answer:
        "Haque is one of the ancient companies of Bangladesh. We have a factory decorated with modern technology which are managed by expert working force. We never compromise on quality, while continuously trying to cut costs so we can deliver stable, quality products to consumers in reasonable prices.",
      category: "Company",
    },
    {
      id: "q10",
      question: " What are its strengths?",
      answer:
        "Our strength is we have a large range of products which can satisfy the needs of people of all segments; beyond ages, economic classes, lifestyle, education, gender, urba- rural, etc. We offer better quality biscuits at a lowest possible price. Our biggest strength is our long heritage of 67 years presence in market. We have well equipped production plants and we have a strong distribution network in field.",
      category: "Company",
    },
    {
      id: "q11",
      question: "Would you like to tell the reader to your upcoming product?",
      answer:
        "One of our core strength is to bring new and innovative products in local market with local price and world class taste. Very recently we launched CHISCUIT (Chips + Biscuit) which is a cross between chips and biscuit. We have launched it in two segment one in biscuit segment with chocolate enrobing named choco pop and another in chips segment with wasabi seasoning named wasabi pop. However due to continued pressure on our old items we are unable to supply sufficient quantities, so we have to extend our capacity further to supply smoothly.\n\nWe have already launched another exclusive biscuit named Choco Nutty- which will offer both chocolate and nut taste and flavor. In near future we will also bring some newer concepts for Bangladesh like center filling biscuit and many more to come.",
      category: "Products",
    },
    {
      id: "q12",
      question:
        "Where do you see the future of the Bangladeshi FMCG industry in Global Market?",
      answer:
        "Bangladeshi FMCG industry is growing rapidly. Many companies are operating and playing in the market like multinational companies. Products are now international quality of many companies. Many companies already started operating globally. I think future of Bangladeshi companies is very bright in global operation. In sha allah we will also go for globalized operation in future. However there is always a risk that the Indian giants will enter and further cannibalize our local market.",
      category: "Future",
    },
  ];

  const categories = [
    "all",
    ...new Set(interviewQuestions.map((item) => item.category)),
  ];

  const formatAnswer = (text: string) => {
    return text.split("\n\n").map((paragraph, index) => (
      <p
        key={index}
        className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed"
      >
        {paragraph}
      </p>
    ));
  };

  const filteredQuestions = interviewQuestions.filter((q) => {
    const matchesSearch =
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || q.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section id="talk_show" className="py-16 bg-white dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8"
          >
            <div className="mb-6">
              <Badge className="bg-[#D93F21] text-white rounded-md px-3 py-1 text-sm font-medium mb-4">
                Executive Interview
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                In Conversation With:
                <br />
                Adam Tamizi Haque
              </h1>
              <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl">
                Get To Know The Visionary Leader Behind Our Company's Success
                And His Insights On The Industry, Products, And Future Of Haque
                Group
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 my-8 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
              <div className="flex items-center gap-3">
                <Image
                  src="/assets/blog-img/user.png"
                  alt="M Tauhidul Islam Apu"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Interviewed By:
                  </p>
                  <p className="font-semibold text-gray-800 dark:text-gray-200">
                    M Tawhidul Islam Apu
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Editor, The Front Page
                  </p>
                </div>
              </div>
              <div className="text-left sm:text-right">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Published On:
                </p>
                <p className="font-semibold text-gray-800 dark:text-gray-200">
                  Jun 22, 2015
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
                Questions:
              </h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant="outline"
                    className={`cursor-pointer rounded-full px-4 py-1 text-sm transition-all border ${
                      selectedCategory === category
                        ? "bg-[#D93F21] text-white border-[#D93F21]"
                        : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category === "all" ? "All" : category}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Questions Accordion */}
            <div className="space-y-4">
              <AnimatePresence>
                {filteredQuestions.length > 0 ? (
                  filteredQuestions.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="border-b border-gray-200 dark:border-gray-700 last:border-b-0"
                    >
                      <button
                        className="w-full py-5 text-left flex items-center justify-between"
                        onClick={() =>
                          setActiveQuestion(
                            activeQuestion === item.id ? null : item.id
                          )
                        }
                      >
                        <h3 className="text-base font-medium text-gray-800 dark:text-gray-200 flex-1 pr-4">
                          {item.question}
                        </h3>
                        <div
                          className={`transform transition-transform duration-300 ${
                            activeQuestion === item.id ? "rotate-180" : ""
                          }`}
                        >
                          <ChevronDown className="h-5 w-5 text-gray-500" />
                        </div>
                      </button>
                      <AnimatePresence>
                        {activeQuestion === item.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="pb-6 text-gray-600 dark:text-gray-400">
                              {formatAnswer(item.answer)}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-center py-12"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-900/20 mb-4">
                      <Search className="h-8 w-8 text-amber-600 dark:text-amber-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      No Results Found
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      No questions found matching your search criteria.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 self-start sticky top-24"
          >
            {/* <div className="relative rounded-lg overflow-hidden shadow-lg group">
              <Image
                src="/assets/news/director.jpg"
                alt="Adam Tamizi Haque"
                width={800}
                height={1067}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
                <Image
                  src="/assets/logo/logo.png"
                  alt="Haque Logo"
                  width={40}
                  height={40}
                />
              </div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
