import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { asset } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
});

export const metadata: Metadata = {
  title: "Base Investments — From brown to green | Real Estate Asset Management",
  description:
    "Base Investments is an independent Dutch real estate investor and asset manager. We transform underused buildings from brown to green — targeting strong returns while cutting CO₂ by 100 million kg by 2030.",
  keywords: [
    "real estate",
    "asset management",
    "Netherlands",
    "Amsterdam",
    "ESG",
    "sustainable real estate",
    "light industrial",
    "life science",
    "private equity",
    "brown to green",
  ],
  icons: {
    icon: asset("/images/logo.png"),
    shortcut: asset("/images/logo.png"),
    apple: asset("/images/logo.png"),
  },
  openGraph: {
    title: "Base Investments — From brown to green",
    description:
      "Independent Dutch real estate investor & asset manager. Transforming buildings from brown to green.",
    url: "https://www.baseinvestments.nl",
    siteName: "Base Investments",
    locale: "en_NL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerifDisplay.variable}`}>
      <body className="font-sans bg-white text-zinc-900">{children}</body>
    </html>
  );
}
