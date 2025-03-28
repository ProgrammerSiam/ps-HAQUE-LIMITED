// "use client";
// import { Metadata } from "next";
// import { Sidebar } from "@/components/dashboard/Sidebar";
// import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
// import { Toast } from "@/components/dashboard/Toast";
// import { motion } from "framer-motion";
// import { useState } from "react";

// export const metadata: Metadata = {
//   title: "Admin Dashboard",
//   description: "Haque Galaxy Admin Dashboard",
//   robots: "noindex, nofollow", // Prevent indexing of admin pages
// };

// export default function DashboardLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [toast, setToast] = useState<{
//     message: string;
//     type: "success" | "error";
//   } | null>(null);

//   return (
//     <div className="flex h-screen bg-gray-50">
//       <Sidebar />
//       <div className="flex-1 overflow-auto">
//         <DashboardHeader />
//         <main className="p-6">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             {children}
//           </motion.div>
//         </main>
//         {toast && (
//           <Toast
//             message={toast.message}
//             type={toast.type}
//             onClose={() => setToast(null)}
//           />
//         )}
//       </div>
//     </div>
//   );
// }

// layout.tsx (Server Component)
import { ClientDashboard } from "@/components/dashboard/ClientDashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Haque Galaxy Admin Dashboard",
  robots: "noindex, nofollow", // Prevent indexing of admin pages
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-50">
      <ClientDashboard>{children}</ClientDashboard>
    </div>
  );
}
