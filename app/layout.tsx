import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Changed from Geist to Inter
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Homepage/Footer";


const inter = Inter({
  variable: "--font-sans", // Using --font-sans for Inter
  subsets: ["latin"],
});

// Removed geistMono as it's not explicitly requested and Inter is now the primary font

export const metadata: Metadata = {
  title: "Trio Tech Solutions",
  description: "Connect Top IT Talent with Leading Companies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`} // Using inter.variable
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
