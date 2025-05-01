import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/_components/main/navbar";
import Hero from "@/_components/main/hero";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Landing Page",
  description: "This is a landing page created with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased px-25 h-[150px] bg-[url(/background.webp)] bg-center bg-no-repeat bg-cover`}
      >
        {children}
      </body>
    </html>
  );
}
