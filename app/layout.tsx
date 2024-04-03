import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@lib/utils";
import Navbar from "@components/ui/Navbar";


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased bg-gradient-to-br text-white from-indigo-700 from-10% via-sky-600 via-30% to-black to-90%",
          fontSans.variable
        )}
      >
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
