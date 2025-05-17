export default function NewsletterDashboard() {
    return <div>NewsletterDashboard</div>;
}

// "use client";

// import { useState, useEffect } from "react";
// import { toast } from "react-hot-toast";
// import { databaseService } from "@/lib/supabaseService";
// import { PageLayout } from "@/components/dashboard/PageLayout";
// import { RichTextEditor } from "@/components/dashboard/RichTextEditor";
// import type {
//   Subscriber,
//   NewsletterMessage,
//   MessageDelivery,
// } from "@/lib/types/database.types";

// type ExtendedNewsletterMessage = NewsletterMessage & {
//   deliveries?: MessageDelivery[];
// };

// type RecipientType = "all" | "selected" | "single";

// export default function NewsletterDashboard() {
//   const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
//   const [selectedSubscribers, setSelectedSubscribers] = useState<string[]>([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [subject, setSubject] = useState("");
//   const [message, setMessage] = useState("");
//   const [recipientType, setRecipientType] = useState<RecipientType>("all");
//   const [messageHistory, setMessageHistory] = useState<
//     ExtendedNewsletterMessage[]
//   >([]);
//   const [showHistory, setShowHistory] = useState(false);
//   const [showPreview, setShowPreview] = useState(false);
//   const [senderEmail, setSenderEmail] = useState("");
//   return <div>NewsletterDashboard</div>;
// }

// "use client";

// import { useState, useEffect } from "react";
// import { PageLayout } from "@/components/dashboard/PageLayout";
// import { databaseService } from "@/lib/supabaseService";
// import { toast } from "react-hot-toast";
// import type {
//   Subscriber,
//   NewsletterMessage,
//   MessageDelivery,
// } from "@/lib/types/database.types";

// type ExtendedNewsletterMessage = NewsletterMessage & {
//   deliveries?: Array<{
//     status: MessageDelivery["status"];
//     delivered_at: string | null;
//     subscriber: {
//       email: string;
//     };
//   }>;
// };

// export default function NewsletterDashboard() {
//   const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
//   const [selectedSubscribers, setSelectedSubscribers] = useState<string[]>([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [subject, setSubject] = useState("");
//   const [message, setMessage] = useState("");
//   const [recipientType, setRecipientType] = useState<
//     "all" | "selected" | "single"
//   >("all");
//   const [messageHistory, setMessageHistory] = useState<
//     ExtendedNewsletterMessage[]
//   >([]);
//   const [showHistory, setShowHistory] = useState(false);
//   const [showPreview, setShowPreview] = useState(false);
//   const [senderEmail, setSenderEmail] = useState("");

//   useEffect(() => {
//     loadData();
//   }, []);

//   const loadData = async () => {
//     try {
//       const [subsData, historyData] = await Promise.all([
//         databaseService.subscribers.getAll(),
//         databaseService.newsletter.getMessageHistory(),
//       ]);
//       setSubscribers(subsData || []);
//       setMessageHistory(historyData || []);
//     } catch (error) {
//       console.error("Error loading data:", error);
//       toast.error("Failed to load data");
//     }
//   };

//   const handleSubscriberSelect = (id: string) => {
//     setSelectedSubscribers((prev) =>
//       prev.includes(id) ? prev.filter((subId) => subId !== id) : [...prev, id]
//     );
//   };

//   const validateEmail = (email: string) => {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//   };

//   const handleSendNewsletter = async (e: React.FormEvent) => {
//     e.preventDefault();

//     // Validation checks
//     if (!subject || !message) {
//       toast.error("Please fill in all fields");
//       return;
//     }

//     if (!validateEmail(senderEmail)) {
//       toast.error("Please enter a valid sender email address");
//       return;
//     }

//     if (recipientType === "selected" && selectedSubscribers.length === 0) {
//       toast.error("Please select at least one subscriber");
//       return;
//     }

//     setIsLoading(true);
//     try {
//       await databaseService.newsletter.sendMessage({
//         subject,
//         body: message,
//         sender: senderEmail,
//         recipient_type: recipientType,
//         recipient_ids:
//           recipientType !== "all" ? selectedSubscribers : undefined,
//       });

//     toast.success("Newsletter sent successfully!");
//     setSubject("");
//     setMessage("");
//     setSelectedSubscribers([]);
//     loadData(); // Refresh data
//   } catch (error: unknown) {
//     console.error("Error sending newsletter:", error);
//     toast.error(
//       error instanceof Error ? error.message : "Failed to send newsletter"
//     );
//   } finally {
//     setIsLoading(false);
//   }
// };
//       toast.success("Newsletter sent successfully!");
//       setSubject("");
//       setMessage("");
//       setSelectedSubscribers([]);
//       loadData(); // Refresh data
//     } catch (error: any) {
//       console.error("Error sending newsletter:", error);
//       toast.error(error?.message || "Failed to send newsletter");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleTestSend = async () => {
//     if (!validateEmail(senderEmail)) {
//       toast.error("Please enter a valid sender email address");
//       return;
//     }

//   try {
//     await databaseService.newsletter.sendMessage({
//       subject: `[TEST] ${subject}`,
//       body: message,
//       sender: senderEmail,
//       recipient_type: "single",
//       recipient_ids: [senderEmail], // Send test to sender
//     });
//     toast.success("Test email sent successfully!");
//   } catch (error: unknown) {
//     toast.error(
//       error instanceof Error ? error.message : "Failed to send test email"
//     );
//   }
// };
//     try {
//       await databaseService.newsletter.sendMessage({
//         subject: `[TEST] ${subject}`,
//         body: message,
//         sender: senderEmail,
//         recipient_type: "single",
//         recipient_ids: [senderEmail], // Send test to sender
//       });
//       toast.success("Test email sent successfully!");
//     } catch (error: any) {
//       toast.error(error?.message || "Failed to send test email");
//     }
//   };

//   const NewsletterPreview = () => (
//     <div className="bg-white rounded-lg shadow p-6">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-xl font-semibold">Preview Newsletter</h2>
//         <button
//           onClick={() => setShowPreview(false)}
//           className="text-gray-500 hover:text-gray-700"
//         >
//           ✕
//         </button>
//       </div>
//       <div className="border rounded-lg p-4">
//         <div className="mb-2">
//           <strong>From:</strong> {senderEmail}
//         </div>
//         <div className="mb-2">
//           <strong>Subject:</strong> {subject}
//         </div>
//         <div className="border-t pt-4 mt-4">
//           <div dangerouslySetInnerHTML={{ __html: message }} />
//         </div>
//       </div>
//       <div className="mt-4 flex justify-end space-x-4">
//         <button
//           onClick={handleTestSend}
//           className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
//         >
//           Send Test Email
//         </button>
//         <button
//           onClick={() => setShowPreview(false)}
//           className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//         >
//           Continue Editing
//         </button>
//       </div>
//     </div>
//   );

//   return (
//     <PageLayout title="Newsletter Management">
//       <div className="space-y-8">
//         {/* Tabs */}
//         <div className="border-b border-gray-200">
//           <nav className="-mb-px flex space-x-8">
//             <button
//               onClick={() => setShowHistory(false)}
//               className={`${
//                 !showHistory
//                   ? "border-blue-500 text-blue-600"
//                   : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//               } whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm`}
//             >
//               Send Newsletter
//             </button>
//             <button
//               onClick={() => setShowHistory(true)}
//               className={`${
//                 showHistory
//                   ? "border-blue-500 text-blue-600"
//                   : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//               } whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm`}
//             >
//               Message History
//             </button>
//           </nav>
//         </div>

//         {showHistory ? (
//           // Message History View
//           <div className="bg-white rounded-lg shadow overflow-hidden">
//             <div className="px-4 py-5 sm:p-6">
//               <h3 className="text-lg font-medium text-gray-900">
//                 Message History
//               </h3>
//               <div className="mt-4 space-y-4">
//                 {messageHistory.map((message: ExtendedNewsletterMessage) => (
//                   <div key={message.id} className="border rounded-lg p-4">
//                     <h4 className="font-medium">{message.subject}</h4>
//                     <p className="text-sm text-gray-500">
//                       Sent: {new Date(message.sent_at).toLocaleString()}
//                     </p>
//                     <p className="text-sm text-gray-500">
//                       Recipients: {message.deliveries?.length || 0}
//                     </p>
//                     <div className="mt-2">
//                       <p className="text-sm text-gray-700">{message.body}</p>
//                     </div>
//                     <div className="mt-2 text-sm">
//                       <span className="text-green-600">
//                         ✓{" "}
//                         {message.deliveries?.filter(
//                           (d: MessageDelivery) => d.status === "delivered"
//                         ).length || 0}{" "}
//                         delivered
//                       </span>
//                       {" • "}
//                       <span className="text-red-600">
//                         ✕{" "}
//                         {message.deliveries?.filter(
//                           (d: MessageDelivery) => d.status === "failed"
//                         ).length || 0}{" "}
//                         failed
//                       </span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ) : showPreview ? (
//           <NewsletterPreview />
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {/* Subscribers List */}
//             <div className="bg-white rounded-lg shadow p-6">
//               <h2 className="text-xl font-semibold mb-4">
//                 Subscribers ({subscribers.length})
//               </h2>
//               <div className="mb-4">
//                 <select
//                   value={recipientType}
//                   onChange={(e) =>
//                     setRecipientType(e.target.value as RecipientType)
//                   }
//                   className="w-full rounded-md border-gray-300"
//                 >
//                   <option value="all">All Subscribers</option>
//                   <option value="selected">Selected Subscribers</option>
//                   <option value="single">Single Subscriber</option>
//                 </select>
//               </div>
//               <div className="max-h-96 overflow-y-auto">
//                 {subscribers.map((subscriber) => (
//                   <div
//                     key={subscriber.id}
//                     className={`p-3 border-b border-gray-100 last:border-0 ${
//                       recipientType !== "all"
//                         ? "cursor-pointer hover:bg-gray-50"
//                         : ""
//                     }`}
//                     onClick={() =>
//                       recipientType !== "all" &&
//                       handleSubscriberSelect(subscriber.id)
//                     }
//                   >
//                     <div className="flex items-center">
//                       {recipientType !== "all" && (
//                         <input
//                           type="checkbox"
//                           checked={selectedSubscribers.includes(subscriber.id)}
//                           onChange={() => handleSubscriberSelect(subscriber.id)}
//                           className="mr-3"
//                         />
//                       )}
//                       <div>
//                         <p className="text-gray-800">{subscriber.email}</p>
//                         <p className="text-sm text-gray-500">
//                           Joined:{" "}
//                           {new Date(subscriber.created_at).toLocaleDateString()}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
// //         {showHistory ? (
// //           // Message History View
// //           <div className="bg-white rounded-lg shadow overflow-hidden">
// //             <div className="px-4 py-5 sm:p-6">
// //               <h3 className="text-lg font-medium text-gray-900">
// //                 Message History
// //               </h3>
// //               <div className="mt-4 space-y-4">
// //                 {messageHistory.map((message: any) => (
// //                   <div key={message.id} className="border rounded-lg p-4">
// //                     <h4 className="font-medium">{message.subject}</h4>
// //                     <p className="text-sm text-gray-500">
// //                       Sent: {new Date(message.sent_at).toLocaleString()}
// //                     </p>
// //                     <p className="text-sm text-gray-500">
// //                       Recipients: {message.deliveries?.length || 0}
// //                     </p>
// //                     <div className="mt-2">
// //                       <p className="text-sm text-gray-700">{message.body}</p>
// //                     </div>
// //                     <div className="mt-2 text-sm">
// //                       <span className="text-green-600">
// //                         ✓{" "}
// //                         {message.deliveries?.filter(
// //                           (d: any) => d.status === "delivered"
// //                         ).length || 0}{" "}
// //                         delivered
// //                       </span>
// //                       {" • "}
// //                       <span className="text-red-600">
// //                         ✕{" "}
// //                         {message.deliveries?.filter(
// //                           (d: any) => d.status === "failed"
// //                         ).length || 0}{" "}
// //                         failed
// //                       </span>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         ) : showPreview ? (
// //           <NewsletterPreview />
// //         ) : (
// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// //             {/* Subscribers List */}
// //             <div className="bg-white rounded-lg shadow p-6">
// //               <h2 className="text-xl font-semibold mb-4">
// //                 Subscribers ({subscribers.length})
// //               </h2>
// //               <div className="mb-4">
// //                 <select
// //                   value={recipientType}
// //                   onChange={(e) => setRecipientType(e.target.value as any)}
// //                   className="w-full rounded-md border-gray-300"
// //                 >
// //                   <option value="all">All Subscribers</option>
// //                   <option value="selected">Selected Subscribers</option>
// //                   <option value="single">Single Subscriber</option>
// //                 </select>
// //               </div>
// //               <div className="max-h-96 overflow-y-auto">
// //                 {subscribers.map((subscriber) => (
// //                   <div
// //                     key={subscriber.id}
// //                     className={`p-3 border-b border-gray-100 last:border-0 ${
// //                       recipientType !== "all"
// //                         ? "cursor-pointer hover:bg-gray-50"
// //                         : ""
// //                     }`}
// //                     onClick={() =>
// //                       recipientType !== "all" &&
// //                       handleSubscriberSelect(subscriber.id)
// //                     }
// //                   >
// //                     <div className="flex items-center">
// //                       {recipientType !== "all" && (
// //                         <input
// //                           type="checkbox"
// //                           checked={selectedSubscribers.includes(subscriber.id)}
// //                           onChange={() => handleSubscriberSelect(subscriber.id)}
// //                           className="mr-3"
// //                         />
// //                       )}
// //                       <div>
// //                         <p className="text-gray-800">{subscriber.email}</p>
// //                         <p className="text-sm text-gray-500">
// //                           Joined:{" "}
// //                           {new Date(subscriber.created_at).toLocaleDateString()}
// //                         </p>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* Newsletter Composer */}
// //             <div className="bg-white rounded-lg shadow p-6">
// //               <h2 className="text-xl font-semibold mb-4">Send Newsletter</h2>
// //               <form onSubmit={handleSendNewsletter} className="space-y-4">
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-1">
// //                     Sender Email
// //                   </label>
// //                   <input
// //                     type="email"
// //                     value={senderEmail}
// //                     onChange={(e) => setSenderEmail(e.target.value)}
// //                     className="w-full px-3 py-2 border border-gray-300 rounded-md"
// //                     placeholder="your@company.com"
// //                     required
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-1">
// //                     Subject
// //                   </label>
// //                   <input
// //                     type="text"
// //                     value={subject}
// //                     onChange={(e) => setSubject(e.target.value)}
// //                     className="w-full px-3 py-2 border border-gray-300 rounded-md"
// //                     placeholder="Newsletter subject"
// //                     required
// //                   />
// //                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Message
//                   </label>
//                   <RichTextEditor content={message} onChange={setMessage} />
//                 </div>
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-1">
// //                     Message
// //                   </label>
// //                   <textarea
// //                     value={message}
// //                     onChange={(e) => setMessage(e.target.value)}
// //                     rows={6}
// //                     className="w-full px-3 py-2 border border-gray-300 rounded-md"
// //                     placeholder="Write your newsletter content here..."
// //                     required
// //                   />
// //                 </div>

//                 <div className="flex space-x-4">
//                   <button
//                     type="button"
//                     onClick={() => setShowPreview(true)}
//                     className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200"
//                   >
//                     Preview
//                   </button>
//                   <button
//                     type="submit"
//                     disabled={
//                       isLoading ||
//                       !validateEmail(senderEmail) ||
//                       (recipientType !== "all" &&
//                         selectedSubscribers.length === 0)
//                     }
//                     className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
//                   >
//                     {isLoading ? "Sending..." : "Send Newsletter"}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>
//     </PageLayout>
//   );
// }

// "use client";

// import { useState, useEffect } from "react";
// import { PageLayout } from "@/components/dashboard/PageLayout";
// import { databaseService } from "@/lib/supabaseService";
// import { toast } from "react-hot-toast";
// import type {
//   Subscriber,
//   NewsletterMessage,
//   MessageDelivery,
// } from "@/lib/types/database.types";

// type ExtendedNewsletterMessage = NewsletterMessage & {
//   deliveries?: Array<{
//     status: MessageDelivery["status"];
//     delivered_at: string | null;
//     subscriber: {
//       email: string;
//     };
//   }>;
// };

// export default function NewsletterDashboard() {
//   const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
//   const [selectedSubscribers, setSelectedSubscribers] = useState<string[]>([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [subject, setSubject] = useState("");
//   const [message, setMessage] = useState("");
//   const [recipientType, setRecipientType] = useState<
//     "all" | "selected" | "single"
//   >("all");
//   const [messageHistory, setMessageHistory] = useState<
//     ExtendedNewsletterMessage[]
//   >([]);
//   const [showHistory, setShowHistory] = useState(false);
//   const [showPreview, setShowPreview] = useState(false);
//   const [senderEmail, setSenderEmail] = useState("");

//   useEffect(() => {
//     loadData();
//   }, []);

//   const loadData = async () => {
//     try {
//       const [subsData, historyData] = await Promise.all([
//         databaseService.subscribers.getAll(),
//         databaseService.newsletter.getMessageHistory(),
//       ]);
//       setSubscribers(subsData || []);
//       setMessageHistory(historyData || []);
//     } catch (error) {
//       console.error("Error loading data:", error);
//       toast.error("Failed to load data");
//     }
//   };

//   const handleSubscriberSelect = (id: string) => {
//     setSelectedSubscribers((prev) =>
//       prev.includes(id) ? prev.filter((subId) => subId !== id) : [...prev, id]
//     );
//   };

//   const validateEmail = (email: string) => {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//   };

//   const handleSendNewsletter = async (e: React.FormEvent) => {
//     e.preventDefault();

//     // Validation checks
//     if (!subject || !message) {
//       toast.error("Please fill in all fields");
//       return;
//     }

//     if (!validateEmail(senderEmail)) {
//       toast.error("Please enter a valid sender email address");
//       return;
//     }

//     if (recipientType === "selected" && selectedSubscribers.length === 0) {
//       toast.error("Please select at least one subscriber");
//       return;
//     }

//     setIsLoading(true);
//     try {
//       await databaseService.newsletter.sendMessage({
//         subject,
//         body: message,
//         sender: senderEmail,
//         recipient_type: recipientType,
//         recipient_ids:
//           recipientType !== "all" ? selectedSubscribers : undefined,
//       });

//       toast.success("Newsletter sent successfully!");
//       setSubject("");
//       setMessage("");
//       setSelectedSubscribers([]);
//       loadData(); // Refresh data
//     } catch (error: any) {
//       console.error("Error sending newsletter:", error);
//       toast.error(error?.message || "Failed to send newsletter");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleTestSend = async () => {
//     if (!validateEmail(senderEmail)) {
//       toast.error("Please enter a valid sender email address");
//       return;
//     }

//     try {
//       await databaseService.newsletter.sendMessage({
//         subject: `[TEST] ${subject}`,
//         body: message,
//         sender: senderEmail,
//         recipient_type: "single",
//         recipient_ids: [senderEmail], // Send test to sender
//       });
//       toast.success("Test email sent successfully!");
//     } catch (error: any) {
//       toast.error(error?.message || "Failed to send test email");
//     }
//   };

//   const NewsletterPreview = () => (
//     <div className="bg-white rounded-lg shadow p-6">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-xl font-semibold">Preview Newsletter</h2>
//         <button
//           onClick={() => setShowPreview(false)}
//           className="text-gray-500 hover:text-gray-700"
//         >
//           ✕
//         </button>
//       </div>
//       <div className="border rounded-lg p-4">
//         <div className="mb-2">
//           <strong>From:</strong> {senderEmail}
//         </div>
//         <div className="mb-2">
//           <strong>Subject:</strong> {subject}
//         </div>
//         <div className="border-t pt-4 mt-4">
//           <div dangerouslySetInnerHTML={{ __html: message }} />
//         </div>
//       </div>
//       <div className="mt-4 flex justify-end space-x-4">
//         <button
//           onClick={handleTestSend}
//           className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
//         >
//           Send Test Email
//         </button>
//         <button
//           onClick={() => setShowPreview(false)}
//           className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//         >
//           Continue Editing
//         </button>
//       </div>
//     </div>
//   );

//   return (
//     <PageLayout title="Newsletter Management">
//       <div className="space-y-8">
//         {/* Tabs */}
//         <div className="border-b border-gray-200">
//           <nav className="-mb-px flex space-x-8">
//             <button
//               onClick={() => setShowHistory(false)}
//               className={`${
//                 !showHistory
//                   ? "border-blue-500 text-blue-600"
//                   : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//               } whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm`}
//             >
//               Send Newsletter
//             </button>
//             <button
//               onClick={() => setShowHistory(true)}
//               className={`${
//                 showHistory
//                   ? "border-blue-500 text-blue-600"
//                   : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//               } whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm`}
//             >
//               Message History
//             </button>
//           </nav>
//         </div>

//         {showHistory ? (
//           // Message History View
//           <div className="bg-white rounded-lg shadow overflow-hidden">
//             <div className="px-4 py-5 sm:p-6">
//               <h3 className="text-lg font-medium text-gray-900">
//                 Message History
//               </h3>
//               <div className="mt-4 space-y-4">
//                 {messageHistory.map((message: any) => (
//                   <div key={message.id} className="border rounded-lg p-4">
//                     <h4 className="font-medium">{message.subject}</h4>
//                     <p className="text-sm text-gray-500">
//                       Sent: {new Date(message.sent_at).toLocaleString()}
//                     </p>
//                     <p className="text-sm text-gray-500">
//                       Recipients: {message.deliveries?.length || 0}
//                     </p>
//                     <div className="mt-2">
//                       <p className="text-sm text-gray-700">{message.body}</p>
//                     </div>
//                     <div className="mt-2 text-sm">
//                       <span className="text-green-600">
//                         ✓{" "}
//                         {message.deliveries?.filter(
//                           (d: any) => d.status === "delivered"
//                         ).length || 0}{" "}
//                         delivered
//                       </span>
//                       {" • "}
//                       <span className="text-red-600">
//                         ✕{" "}
//                         {message.deliveries?.filter(
//                           (d: any) => d.status === "failed"
//                         ).length || 0}{" "}
//                         failed
//                       </span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ) : showPreview ? (
//           <NewsletterPreview />
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {/* Subscribers List */}
//             <div className="bg-white rounded-lg shadow p-6">
//               <h2 className="text-xl font-semibold mb-4">
//                 Subscribers ({subscribers.length})
//               </h2>
//               <div className="mb-4">
//                 <select
//                   value={recipientType}
//                   onChange={(e) => setRecipientType(e.target.value as any)}
//                   className="w-full rounded-md border-gray-300"
//                 >
//                   <option value="all">All Subscribers</option>
//                   <option value="selected">Selected Subscribers</option>
//                   <option value="single">Single Subscriber</option>
//                 </select>
//               </div>
//               <div className="max-h-96 overflow-y-auto">
//                 {subscribers.map((subscriber) => (
//                   <div
//                     key={subscriber.id}
//                     className={`p-3 border-b border-gray-100 last:border-0 ${
//                       recipientType !== "all"
//                         ? "cursor-pointer hover:bg-gray-50"
//                         : ""
//                     }`}
//                     onClick={() =>
//                       recipientType !== "all" &&
//                       handleSubscriberSelect(subscriber.id)
//                     }
//                   >
//                     <div className="flex items-center">
//                       {recipientType !== "all" && (
//                         <input
//                           type="checkbox"
//                           checked={selectedSubscribers.includes(subscriber.id)}
//                           onChange={() => handleSubscriberSelect(subscriber.id)}
//                           className="mr-3"
//                         />
//                       )}
//                       <div>
//                         <p className="text-gray-800">{subscriber.email}</p>
//                         <p className="text-sm text-gray-500">
//                           Joined:{" "}
//                           {new Date(subscriber.created_at).toLocaleDateString()}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Newsletter Composer */}
//             <div className="bg-white rounded-lg shadow p-6">
//               <h2 className="text-xl font-semibold mb-4">Send Newsletter</h2>
//               <form onSubmit={handleSendNewsletter} className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Sender Email
//                   </label>
//                   <input
//                     type="email"
//                     value={senderEmail}
//                     onChange={(e) => setSenderEmail(e.target.value)}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md"
//                     placeholder="your@company.com"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Subject
//                   </label>
//                   <input
//                     type="text"
//                     value={subject}
//                     onChange={(e) => setSubject(e.target.value)}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md"
//                     placeholder="Newsletter subject"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Message
//                   </label>
//                   <textarea
//                     value={message}
//                     onChange={(e) => setMessage(e.target.value)}
//                     rows={6}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md"
//                     placeholder="Write your newsletter content here..."
//                     required
//                   />
//                 </div>

//                 <div className="flex space-x-4">
//                   <button
//                     type="button"
//                     onClick={() => setShowPreview(true)}
//                     className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200"
//                   >
//                     Preview
//                   </button>
//                   <button
//                     type="submit"
//                     disabled={
//                       isLoading ||
//                       !validateEmail(senderEmail) ||
//                       (recipientType !== "all" &&
//                         selectedSubscribers.length === 0)
//                     }
//                     className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
//                   >
//                     {isLoading ? "Sending..." : "Send Newsletter"}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>
//     </PageLayout>
//   );
// }
