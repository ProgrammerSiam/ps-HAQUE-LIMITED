// import Image from "next/image";
// import {
//     Accordion,
//     AccordionContent,
//     AccordionItem,
//     AccordionTrigger,
// } from "@/components/ui/accordion";

// export default function Interview() {
//     const interviewQuestions = [
//         {
//             id: "q1",
//             question:
//                 "Can you speak a short History about Haque Group of Industries? How did your Father start this HGI journey in Bangladesh?",
//             answer: "The HAQUE GROUP has started journey as the distributor of M/S, Huntley & Palmers, (The famous British biscuit company), and Union Carbide for their Eveready Brand battery.\n\nMy grandfather has established Haque Brothers Ltd. in 1947 in Chittagong. And Haque Brothers Industries started its journey under my father, barrister Tamizul Haque, in the year of language movement, 1952.\n\nI can say that Haque is one of the oldest organizations of Bangladesh. Haque started own biscuit production at 1952 and our carbide company at 1963. Before that time we were engaged in trading business.\n\nIn late 70’s we launched Mr. Cookie, the Leading Biscuit Brand in Bangladesh which has earned Monde Selection gold medal. Not only Mr. Cookie we always tried to adopt international products in local market and we launched Bourbon, Chocolate Digestive, Plain Digestive, Cream Crackers, Lemon Puff, Ding Dong Wafer, Pillow Chocolate Chips as pioneering products for Bangladesh.",
//         },
//         {
//             id: "q2",
//             question:
//                 "Please tell us about yourself? How did you start your journey as a professional?",
//             answer: "I was born in London, apart from 1 year in American School Dhaka, I spent most of my school life at boarding school in England. At the age of 16 I left boarding school and moved to a tutorial college in London.\n\nAfter short stay in Zanzibar, Tanzania, I moved to Huddersfield in North England and did a course in catering before working in Hilton hotel in Huddersfield. After that I moved to London, and started University.\n\nHaque was an established brand in Bangladesh during Pakistan times, immediately after liberation the company was nationalized as were most companies of the time. However father of the nation, Sheikh Mujibur Rahman, was kind enough to order all our properties restored to my father and he continued at the helm of the company until 2011 at which point his ill health and old age forced him to retire and now he is our Chairman Emeritus. From that time I have been Managing Director of the entire group and the company has shown considerable growth during this short tenure, about 1000%.\n\nI am serving Haque as director since my age of 18, however practically working in the company since 2002 only where I first started with the Dry Cell and soap businesses and only in 2011 started to involve myself with biscuit after becoming MD.",
//         },
//         {
//             id: "q3",
//             question: "Tell us about current food market of Bangladesh.",
//             answer: "Bangladesh food industry is growing rapidly. Demands for high-end biscuits and snacks are growing day by day. Once upon a time people were taking only glucose biscuits now a day people are taking biscuits with nuts and chocolate and many varieties of products are being produced as well as imported in the country.\n\nNew technologies are being introduced all the time to improve production, quality, yield and cost, as well as product innovation. Control and use of information has become key to increasing distribution effectiveness and coverage. Market structure and segments are becoming very complex. Entry of foreign food products has become easy. Many companies are coming into the food business with huge investment. Consumers are looking for better quality products in better price. Margin in this segment is not significant, we all need huge volume to survive in this industry. Bank interest rate is very high in comparison to margin which leads to sickness of industry.",
//         },
//         {
//             id: "q4",
//             question:
//                 "Haque Group is a pioneer of biscuit and dry cell Manufacture in Bangladesh Tell us about the quality of product.",
//             answer: "Our mission is to improve the quality of families in our operating market area by providing affordably made world class products. If you go to our mission statement it is clear that we are committed to provide world class products to our consumers. And we are always giving this to our consumers. We never compromise with our quality.\n\nTo the consumers Haque is a beacon of faith and trust; competitors look upon Haque as an example of brilliance in quality and taste. We have a quality committed manufacturing and support team.\n\nWe are producing our products with world class machineries most of them are European.\n\nStrong quality control is maintained in every stage of production. A dedicated team is continuously working to ensure quality product is produced.",
//         },
//         {
//             id: "q5",
//             question:
//                 " How would you assess Bangladesh as a potential manufacturing zone for food and vegetable process industries?",
//             answer: "Bangladesh still has advantage for being potential zone for food manufacturing. Not only for local market but also we can have a good export processed food from Bangladesh. Many companies of Bangladesh are exporting their products to other countries. Relatively low labor costs are there, but huge cost of land and lack of supply of gas and stable electricity are impediments to growth. We are also trying to set up a new plant, but we have very limited gas supply, and as such it is difficult to move from our existing premises which is already severely overcrowded.",
//         },
//         {
//             id: "q6",
//             question:
//                 "What is your export plan and which country you already export?",
//             answer: "We have many export quality products. But as the internal demand is huge, we have to fulfill the demand of our country at first. So we are exporting a little to some SAARC countries.\n\nWith the increasing production capacity, we have plans to export more especially to West Bengal where we have an established customer base.",
//         },
//         {
//             id: "q7",
//             question:
//                 "What is your opinion about the current FMCG market development in Bangladesh?",
//             answer: "Bangladesh is one of the largest population countries of the world. Despite many infrastructural problems Bangladesh has achieved steady growth in GDP. FMCG market is also growing with the increasing population base. However it is frustrating to see people continuously coming into the biscuit field where there are already 10 large producers, and several hundred small producers.\n\nFMCG Industry is mostly depended on distribution network. Most of the companies are using own field forces for order procuring and engaging distributors for ensuring delivery to traders. It is remotely managed. For further growth ensuring monitoring of TSO performance and product movement is important. This is time to introduce modern information technologies to ensure proper monitoring of product movement and TSO performance.\n\nMay be in near future FMCG companies will start their own distribution that is the companies will deploy own vehicles to ensure delivery to traders. FMCG companies will ensure delivery not only to traders but also to consumers. IT infrastructure is becoming strong, so consumers will be able to give their orders for single packets of biscuits directly to the company and nearby distributors or company TSO will ensure delivery to consumers.\n\nThis segment is low margin segment thus to make the business profitable companies have to reduce the middle parties as much as possible.\n\nRoad transport system has developed a lot so now products move in both urban and rural equally and whole sales system almost out from the scene.\n\nSince consumers’ disposable income is increasing so consumer choice is moving towards value added products.",
//         },
//         {
//             id: "q8",
//             question: "Do you think the local FMCG industry is booming?",
//             answer: "Yes I think local FMCG industry is booming. In this era of globalization; it is becoming easier for companies to get product ideas, getting good quality raw materials, introducing modern technologies, using automatic machineries to increase capacity and improve e quality while reducing labor costs.\n\nThe majority of the population has sufficient disposable income for FMCG product purchase, which is helping the market grow. But in this globalization era local companies are straggling with the multinational brands as they are using huge awareness campaigns but local companies are failing to do so as the cost is high for them.",
//         },
//         {
//             id: "q9",
//             question:
//                 "What’s the secret behind the success of your organization?",
//             answer: "Haque is one of the ancient companies of Bangladesh. We have a factory decorated with modern technology which are managed by expert working force. We never compromise on quality, while continuously trying to cut costs so we can deliver stable, quality products to consumers in reasonable prices.",
//         },
//         {
//             id: "q10",
//             question: " What are its strengths?",
//             answer: "Our strength is we have a large range of products which can satisfy the needs of people of all segments; beyond ages, economic classes, lifestyle, education, gender, urba- rural, etc. We offer better quality biscuits at a lowest possible price. Our biggest strength is our long heritage of 67 years presence in market. We have well equipped production plants and we have a strong distribution network in field.",
//         },
//         {
//             id: "q11",
//             question:
//                 "Would you like to tell the reader to your upcoming product?",
//             answer: "One of our core strength is to bring new and innovative products in local market with local price and world class taste. Very recently we launched CHISCUIT (Chips + Biscuit) which is a cross between chips and biscuit. We have launched it in two segment one in biscuit segment with chocolate enrobing named choco pop and another in chips segment with wasabi seasoning named wasabi pop. However due to continued pressure on our old items we are unable to supply sufficient quantities, so we have to extend our capacity further to supply smoothly.\n\nWe have already launched another exclusive biscuit named Choco Nutty- which will offer both chocolate and nut taste and flavor. In near future we will also bring some newer concepts for Bangladesh like center filling biscuit and many more to come.",
//         },
//         {
//             id: "q12",
//             question:
//                 "Where do you see the future of the Bangladeshi FMCG industry in Global Market?",
//             answer: "Bangladeshi FMCG industry is growing rapidly. Many companies are operating and playing in the market like multinational companies. Products are now international quality of many companies. Many companies already started operating globally. I think future of Bangladeshi companies is very bright in global operation. In sha allah we will also go for globalized operation in future. However there is always a risk that the Indian giants will enter and further cannibalize our local market.",
//         },
//     ];

//     return (
//         <section id="interview" className="">
//             <div className="container">
//                 <div className="text-center mb-12 space-y-4">
//                     <h2 className="section_title">
//                         The Pages Interview: In Conversation <br />
//                         with Our Managing Director
//                     </h2>
//                     <p className="section_sub_title">
//                         Get to know Adam Tamizi Haque, the visionary leader
//                         behind our company&apos;s success
//                     </p>
//                 </div>

//                 <div className="grid md:grid-cols-12 gap-20 items-start sm:px-4">
//                     <div className="md:col-span-4 lg:col-span-3">
//                         <div className="sticky top-24">
//                             <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg mb-4">
//                                 <Image
//                                     src="/images/news/director.jpg"
//                                     alt="Adam Tamizi Haque"
//                                     fill
//                                     className="object-cover"
//                                 />
//                             </div>
//                             <div className="text-center">
//                                 <h3 className="font-bold">Adam Tamizi Haque</h3>
//                                 <p className="text-sm text-muted-foreground">
//                                     Managing Director
//                                 </p>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="md:col-span-8 lg:col-span-9 ">
//                         <div className="prose prose-gray max-w-none">
//                             <Accordion
//                                 type="single"
//                                 collapsible
//                                 className="w-full"
//                             >
//                                 {interviewQuestions.map((item) => (
//                                     <AccordionItem
//                                         key={item.id}
//                                         value={item.id}
//                                         className="border-b-0 border-t last:border-b border-foreground/10 border-dashed"
//                                     >
//                                         <AccordionTrigger className="text-left font-medium">
//                                             {item.question}
//                                         </AccordionTrigger>
//                                         <AccordionContent className="border-b-none">
//                                             <p className="text-muted-foreground whitespace-pre-wrap">
//                                                 {item.answer}
//                                             </p>
//                                         </AccordionContent>
//                                     </AccordionItem>
//                                 ))}
//                             </Accordion>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="w-full justify-center flex mt-12 text-center">
//                     <p className="">
//                         <span className="font-medium">Interviewed by</span>{" "}
//                         <br />
//                         <span className="italic">
//                             M Tauhidul Islam Apu Editor The Pages.
//                         </span>
//                     </p>
//                 </div>
//             </div>
//         </section>
//     );
// }

"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Quote,
  ArrowUpRight,
  ChevronUp,
  ChevronDown,
  Book,
  Clock,
} from "lucide-react";

export default function Interview() {
  const [activeQuestion, setActiveQuestion] = useState("q1");
  const accordionRef = useRef(null);

  const scrollToQuestion = (questionId) => {
    setActiveQuestion(questionId);
    if (accordionRef.current) {
      const element = document.getElementById(`question-${questionId}`);
      if (element) {
        const yOffset = -100;
        const y =
          element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  const interviewQuestions = [
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

  // Get unique categories
  const categories = [
    ...new Set(interviewQuestions.map((item) => item.category)),
  ];

  const formatAnswer = (text) => {
    return text.split("\n\n").map((paragraph, index) => (
      <p key={index} className="mb-4 text-gray-700 leading-relaxed">
        {paragraph}
      </p>
    ));
  };

  // Get highlight (first question)
  const highlightQuestion = interviewQuestions[0];

  return (
    <section
      id="interview"
      className="py-16 bg-gradient-to-br from-amber-50/50 to-white"
    >
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12 space-y-5">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-800 mb-4">
            <Quote size={18} />
            <span className="text-sm font-medium">Executive Interview</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            In Conversation with Adam Tamizi Haque
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get to know the visionary leader behind our company's success and
            his insights on the industry, products, and future of Haque Group of
            Industries
          </p>
        </div>

        {/* Featured Question - Hero Section */}
        <div className="mb-16 bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-12 items-center">
            <div className="md:col-span-5 p-6 md:p-10">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-4 w-4 text-amber-600" />
                <span className="text-sm text-gray-500">12 min read</span>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                {highlightQuestion.question}
              </h3>
              <div className="line-clamp-4 text-gray-700 mb-6">
                {highlightQuestion.answer.split("\n\n")[0]}...
              </div>
              <button
                onClick={() => scrollToQuestion("q1")}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
              >
                <span>Read the full interview</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
            <div className="md:col-span-7">
              <div className="relative h-96 w-full">
                <Image
                  src="/images/news/director.jpg"
                  alt="Adam Tamizi Haque"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent md:hidden"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-10 lg:gap-16">
          {/* Sidebar - Profile and Navigation */}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="sticky top-24 space-y-8">
              {/* Profile Card */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg mb-6">
                  <Image
                    src="/images/news/director.jpg"
                    alt="Adam Tamizi Haque"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-xl mb-1">Adam Tamizi Haque</h3>
                  <p className="text-gray-600 mb-4">Managing Director</p>
                  <div className="flex justify-center space-x-4">
                    <div className="text-center px-3 py-2 bg-gray-100 rounded-lg">
                      <span className="block text-sm text-gray-500">
                        Experience
                      </span>
                      <span className="font-semibold">20+ Years</span>
                    </div>
                    <div className="text-center px-3 py-2 bg-gray-100 rounded-lg">
                      <span className="block text-sm text-gray-500">
                        Position
                      </span>
                      <span className="font-semibold">MD</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Table of Contents */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-2 mb-4">
                  <Book className="h-5 w-5 text-amber-600" />
                  <h4 className="font-semibold text-gray-900">Topics</h4>
                </div>
                <nav className="space-y-1">
                  {categories.map((category) => (
                    <div key={category} className="mb-2">
                      <div className="text-sm font-medium text-gray-900 mb-1">
                        {category}
                      </div>
                      <ul className="space-y-1">
                        {interviewQuestions
                          .filter((q) => q.category === category)
                          .map((q) => (
                            <li key={q.id}>
                              <button
                                onClick={() => scrollToQuestion(q.id)}
                                className={`text-left text-sm w-full py-1.5 px-3 rounded-lg hover:bg-amber-50 hover:text-amber-700 transition-colors ${
                                  activeQuestion === q.id
                                    ? "bg-amber-100 text-amber-700 font-medium"
                                    : "text-gray-600"
                                }`}
                              >
                                {q.question.length > 40
                                  ? q.question.substring(0, 40) + "..."
                                  : q.question}
                              </button>
                            </li>
                          ))}
                      </ul>
                    </div>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-8 lg:col-span-9" ref={accordionRef}>
            <div className="bg-white p-6 md:p-10 rounded-xl shadow-md">
              <div className="prose prose-amber max-w-none">
                {interviewQuestions.map((item, index) => (
                  <div
                    key={item.id}
                    id={`question-${item.id}`}
                    className={`mb-10 pb-10 ${
                      index < interviewQuestions.length - 1
                        ? "border-b border-gray-200"
                        : ""
                    }`}
                  >
                    <div className="flex items-start gap-3 mb-6">
                      <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-amber-700 font-semibold">
                          {index + 1}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                        {item.question}
                      </h3>
                    </div>
                    <div className="pl-11">
                      {formatAnswer(item.answer)}

                      <div className="flex items-center gap-2 mt-4 text-amber-600 hover:text-amber-700">
                        <span className="text-sm font-medium">Category:</span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-700">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interviewer Info */}
            <div className="bg-white p-6 rounded-xl shadow-md mt-8 text-center">
              <p className="text-gray-600">
                <span className="font-medium block mb-2">Interviewed by</span>
                <span className="italic text-lg">M Tauhidul Islam Apu</span>
                <span className="block text-sm text-gray-500 mt-1">
                  Editor, The Pages
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
