import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/shared/Navbar";
import Footer from "@/shared/Footer";
import MainWrapper from "@/components/layouts/MainWrapper";
import { Inter } from "next/font/google";
import { ToasterProvider } from "@/components/layouts/ToasterProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Haque Galaxy",
    default: "Haque Galaxy - Premium Confectionery Products",
  },
  description:
    "Discover premium quality biscuits, wafers, chocolates and candies from Haque Galaxy",
  keywords: [
    "biscuits",
    "wafers",
    "chocolate",
    "candy",
    "confectionery",
    "Haque Galaxy",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://haquegalaxy.com",
    siteName: "Haque Galaxy",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Haque Galaxy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Haque Galaxy",
    description: "Premium Confectionery Products",
    images: ["/twitter-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/apple-touch-icon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    other: [
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
    ],
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToasterProvider />
        <MainWrapper navbar={<Navbar />} footer={<Footer />}>
          {children}
        </MainWrapper>
      </body>
    </html>
  );
}
