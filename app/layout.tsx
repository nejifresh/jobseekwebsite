import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JobSeek AI - Second Chances Start Here | Reentry Employment Platform",
  description:
    "AI-powered career platform empowering justice-impacted individuals with voice-powered resume building, fair-chance employer matching, and mentorship for successful reentry.",
  keywords:
    "reentry employment, second chance hiring, fair chance employers, justice impacted jobs, prison reentry program, voice resume builder",
  openGraph: {
    title: "JobSeek AI - Second Chances Start Here",
    description:
      "AI-powered career platform empowering justice-impacted individuals with voice-powered resume building and fair-chance employer matching.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "JobSeek AI - Second Chances Start Here",
    description:
      "AI-powered career platform empowering justice-impacted individuals.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${outfit.variable}`}>
      <body className="bg-white text-gray-900 overflow-x-hidden font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
