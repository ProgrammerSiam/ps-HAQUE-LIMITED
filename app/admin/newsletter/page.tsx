import NewsletterDashboard from "@/components/Newsletter/NewsletterDashboard";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Newsletter Management",
  description: "Manage your newsletter subscribers and send newsletters",
};

export default function NewsletterPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Newsletter Management</h1>
      <NewsletterDashboard />
    </div>
  );
}
