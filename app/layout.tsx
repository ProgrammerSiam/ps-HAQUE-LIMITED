import type { Metadata } from "next";
import "@/styles/globals.css";
// import { Geist, Geist_Mono } from "next/font/google";


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// ${geistSans.variable} ${geistMono.variable} 


// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "A.T. Haque Limited - Leading Biscuit & Confectionery Manufacturer",
  description: "A.T. Haque Limited is Bangladesh's leading biscuit, confectionery, wafer and candy manufacturing company. Explore our quality products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
