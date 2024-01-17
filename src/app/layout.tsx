import type { Metadata } from "next";
import { Antonio, League_Spartan } from "next/font/google";
import "./globals.css";
import Navbar from "@/layout/Navbar/Navbar";

const antonio = Antonio({
  subsets: ["latin"],
  variable: "--font-antonio",
  weight: "400",
});
const spartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-spartan",
  weight: ["700", "400"],
});

export const metadata: Metadata = {
  title: {
    template: "Frontend Mentor | Planets fact site | %s",
    default: "Frontend Mentor | Planets fact site | Mercury",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${antonio.variable} ${spartan.variable} text-FFFFF bg-backgroundStars min-h-[100vh]`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
