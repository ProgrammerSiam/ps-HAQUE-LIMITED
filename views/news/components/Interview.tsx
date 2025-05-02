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
    <section id="talk_show" className="py-16 bg-gradient-to-br from-amber-50/50 via-white to-amber-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 space-y-5"
        >
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-400 mb-4">
            <Quote size={18} />
            <span className="text-sm font-medium">Executive Interview</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            In Conversation with Adam Tamizi Haque
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get to know the visionary leader behind our company's success and
            his insights on the industry, products, and future of Haque Group
          </p>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-10 lg:gap-16">
          {/* Sidebar */}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="sticky top-24 space-y-8">
              {/* Profile Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg mb-6">
                  <Image
                    src="/images/news/director.jpg"
                    alt="Adam Tamizi Haque"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-xl mb-1 text-gray-900 dark:text-white">
                    Adam Tamizi Haque
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Managing Director
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center px-3 py-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                      <span className="block text-sm text-gray-500 dark:text-gray-400">
                        Experience
                      </span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        20+ Years
                      </span>
                    </div>
                    <div className="text-center px-3 py-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                      <span className="block text-sm text-gray-500 dark:text-gray-400">
                        Position
                      </span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        MD
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Search and Filter */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                ref={searchRef}
                className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transition-all duration-300 ${
                  isSearchFocused ? "ring-2 ring-amber-400 shadow-lg" : ""
                }`}
              >
                <div className="relative mb-6">
                  <Search
                    className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 transition-colors duration-300 ${
                      isSearchFocused
                        ? "text-amber-600 dark:text-amber-400"
                        : "text-gray-400"
                    }`}
                  />
                  <Input
                    type="text"
                    placeholder="Search questions..."
                    className="pl-10 bg-gray-50 dark:bg-gray-700/50 border-gray-200 dark:border-gray-700"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Filter className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Filter by Category
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <Badge
                        key={category}
                        className={`cursor-pointer transition-all ${
                          selectedCategory === category
                            ? "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-400 hover:bg-amber-200"
                            : "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                        }`}
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
              >
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Quick Actions
                </h4>
                <div className="space-y-2">
                  <Button
                    variant="outline"
                    className="w-full justify-start hover:bg-amber-50 dark:hover:bg-amber-900/20"
                    onClick={() => window.print()}
                  >
                    <Printer className="mr-2 h-4 w-4" />
                    Print Interview
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start hover:bg-amber-50 dark:hover:bg-amber-900/20"
                  >
                    <Share2 className="mr-2 h-4 w-4" />
                    Share Interview
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start hover:bg-amber-50 dark:hover:bg-amber-900/20"
                  >
                    <BookmarkPlus className="mr-2 h-4 w-4" />
                    Save for Later
                  </Button>
                </div>
              </motion.div>

              {/* Interview Stats */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
              >
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Interview Stats
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        Reading Time
                      </span>
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      15 mins
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        Questions
                      </span>
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {interviewQuestions.length}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Eye className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        Views
                      </span>
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      2.5K
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        Published
                      </span>
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      Jun 22, 2015
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-8 lg:col-span-9"
            ref={accordionRef}
          >
            {/* Questions */}
            <div className="bg-white dark:bg-gray-800 p-6 md:p-10 rounded-xl shadow-md">
              <div className="space-y-6">
                <AnimatePresence>
                  {filteredQuestions.length === 0 ? (
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
                  ) : (
                    filteredQuestions.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        id={`question-${item.id}`}
                        className="group border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden transform transition-all duration-300 hover:shadow-md"
                      >
                        <button
                          className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                          onClick={() =>
                            setActiveQuestion(
                              activeQuestion === item.id ? null : item.id
                            )
                          }
                        >
                          <div className="flex items-start gap-4 flex-1">
                            <div className="h-8 w-8 rounded-full bg-amber-100 dark:bg-amber-900/20 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-amber-200 dark:group-hover:bg-amber-900/40 transition-colors">
                              <span className="text-amber-700 dark:text-amber-400 font-semibold">
                                {index + 1}
                              </span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                              {item.question}
                            </h3>
                          </div>
                          <div
                            className={`transform transition-transform duration-300 ${
                              activeQuestion === item.id ? "rotate-180" : ""
                            }`}
                          >
                            <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                          </div>
                        </button>
                        <AnimatePresence>
                          {activeQuestion === item.id && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-6 pt-2 bg-gray-50 dark:bg-gray-700/50">
                                <div className="pl-11">
                                  {formatAnswer(item.answer)}
                                  <div className="flex flex-wrap items-center gap-4 mt-6 pt-4 border-t border-gray-200 dark:border-gray-600">
                                    <div className="flex items-center gap-2">
                                      <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                                        Category:
                                      </span>
                                      <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-400">
                                        {item.category}
                                      </Badge>
                                    </div>
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      className="ml-auto"
                                    >
                                      <Share2 className="h-4 w-4 mr-2" />
                                      Share Answer
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Interviewer Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md mt-8"
            >
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="relative w-20 h-20 rounded-full overflow-hidden">
                  <Image
                    src="/images/news/director.jpg"
                    alt="M Tauhidul Islam Apu"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <span className="block text-sm text-gray-600 dark:text-gray-400 mb-1">
                    Interviewed by
                  </span>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    M Tauhidul Islam Apu
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Editor, The Pages
                  </p>
                </div>
                <Button className="ml-auto" variant="outline">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  View Profile
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
