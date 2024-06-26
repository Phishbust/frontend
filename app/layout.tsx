import type { Metadata } from "next";
import { Inter as FontSans, Fira_Code } from "next/font/google";
import "./globals.css";
import { cn } from "@lib/utils";
import Navbar from "@components/ui/Navbar";
import CustomCursor from "@components/ui/Cursor";
import { Toaster } from "react-hot-toast";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const retina = Fira_Code({
  subsets: ["latin"],
  variable: "--font-retina",
  weight: ['400', '500', '600', '700'],

})
export const metadata: Metadata = {
  title: "Phishbust",
  description: "phishing detection using machine learning",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: "phishing, detection, machine learning",
  authors: [{ name: "yesdo" }],
  creator: "yesdo",
  generator: "yesdo",
  applicationName: "Phishbust",

};

export default function RootLayout({
  children
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen font-sans antialiased text-white bg-[E1EAEC]",
          fontSans.variable
        )}
      >
        <CustomCursor/>
        <Navbar/>
        
        <svg className="absolute -z-10 top-[0px] left-[0px]" viewBox="0 0 1440 1428" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_97_37)">
              <path d="M556.347 -153.605C567.205 -162.134 582.473 -165.002 561.5 -149.5L556.347 -153.605C547.359 -146.546 541.393 -135.608 561.5 -128C617 -107 766.5 -29.5 792 47C817.5 123.5 1209 -5 1097.5 221.5C1036.07 346.296 1409.5 524 1251.5 562.5C1125.1 593.3 968.5 575.333 906 562.5C873.167 522.667 595.5 514.5 561.5 456.5C519 384 442 294.5 416.5 294.5C391 294.5 195 119.5 344 384C493 648.5 402 786.5 402 833.5C402 880.5 355 957 235.5 1000C116 1043 -46.5 1030.5 -89 932C-131.5 833.5 169 815 83.5 648.5C15.1 515.3 -192.667 396.667 -288 354C-266.5 210.5 -218.4 -86.8 -198 -128C-177.6 -169.2 220.167 -236.5 416.5 -265L556.347 -153.605Z" fill="url(#paint0_linear_97_37)" fillOpacity="0.7"/>
            </g>
            <defs>
              <filter id="filter0_f_97_37" x="-691.6" y="-668.6" width="2386.01" height="2095.65" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feGaussianBlur stdDeviation="201.8" result="effect1_foregroundBlur_97_37"/>
              </filter>
              <linearGradient id="paint0_linear_97_37" x1="-288" y1="-265" x2="1396.86" y2="568.808" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#0284C7"/>
                  <stop offset="0.92" stopColor="#B3E2FB"/>
              </linearGradient>
            </defs>
        </svg>
        <Toaster position="bottom-left"/>
        {children}
        </body>
    </html>
  );
}
