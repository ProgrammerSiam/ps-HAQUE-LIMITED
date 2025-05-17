// "use client";

// import { useState, useEffect } from "react";
// import { createClient } from "@/lib/supabase";
// import { Subscriber } from "@/lib/types/database.types";

// export default function NewsletterDashboard() {
//   const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
//   const [subject, setSubject] = useState("");
//   const [body, setBody] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   useEffect(() => {
//     fetchSubscribers();
//   }, []);

//   const fetchSubscribers = async () => {
//     try {
//       const supabase = createClient();
//       const { data, error } = await supabase
//         .from("subscribers")
//         .select("*")
//         .order("created_at", { ascending: false });

//       if (error) throw error;
//       setSubscribers(data || []);
//     } catch (err) {
//       console.error("Error fetching subscribers:", err);
//       setError("Failed to fetch subscribers");
//     }
//   };

//   const handleSendNewsletter = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError("");
//     setSuccess("");

//     try {
//       const response = await fetch("/api/newsletter/send", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ subject, body }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.error || "Failed to send newsletter");
//       }

//       setSuccess("Newsletter sent successfully!");
//       setSubject("");
//       setBody("");
//     } catch (err) {
//       setError(
//         err instanceof Error ? err.message : "Failed to send newsletter"
//       );
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//       {/* Subscribers List */}
//       <div className="bg-white rounded-lg shadow p-6">
//         <h2 className="text-xl font-semibold mb-4">
//           Subscribers ({subscribers.length})
//         </h2>
//         <div className="max-h-96 overflow-y-auto">
//           {subscribers.map((subscriber) => (
//             <div
//               key={subscriber.id}
//               className="p-3 border-b border-gray-100 last:border-0"
//             >
//               <p className="text-gray-800">{subscriber.email}</p>
//               <p className="text-sm text-gray-500">
//                 Joined: {new Date(subscriber.created_at).toLocaleDateString()}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Newsletter Composer */}
//       <div className="bg-white rounded-lg shadow p-6">
//         <h2 className="text-xl font-semibold mb-4">Send Newsletter</h2>
//         <form onSubmit={handleSendNewsletter}>
//           <div className="mb-4">
//             <label
//               htmlFor="subject"
//               className="block text-sm font-medium text-gray-700 mb-1"
//             >
//               Subject
//             </label>
//             <input
//               type="text"
//               id="subject"
//               value={subject}
//               onChange={(e) => setSubject(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label
//               htmlFor="body"
//               className="block text-sm font-medium text-gray-700 mb-1"
//             >
//               Message
//             </label>
//             <textarea
//               id="body"
//               value={body}
//               onChange={(e) => setBody(e.target.value)}
//               rows={6}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {error && <div className="mb-4 text-sm text-red-600">{error}</div>}

//           {success && (
//             <div className="mb-4 text-sm text-green-600">{success}</div>
//           )}

//           <button
//             type="submit"
//             disabled={isLoading}
//             className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-blue-400"
//           >
//             {isLoading ? "Sending..." : "Send Newsletter"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
