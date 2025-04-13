"use client";
import localFont from "next/font/local";
import "./globals.css";
import { motion, useScroll } from "framer-motion";
import ScrollToTop from "@/components/Reuseable/ScrollToTop";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default function RootLayout({ children }) {
  const { scrollYProgress } = useScroll();

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <motion.div
          className="fixed top-0 left-0 right-0 h-[3px] bg-golden z-50 origin-left"
          style={{ scaleX: scrollYProgress }}
        />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
