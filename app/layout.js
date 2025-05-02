import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Fredoka } from "next/font/google";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-fredoka", 
});

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
        className={`${geistSans.variable} ${fredoka.className}  ${geistMono.variable} antialiased h-[150px] bg-[url(/background.webp)] bg-center bg-no-repeat bg-cover`}
      >
        {children}
      </body>
    </html>
  );
}
