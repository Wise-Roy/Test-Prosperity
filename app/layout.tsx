import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prosperity Partners",
  description:
    "Prosperity Partners helps you grow and secure your wealth with smart mutual fund investments, financial planning, and expert advisory services.",
  keywords: [
    "Mutual Funds",
    "Investment",
    "Wealth Management",
    "Financial Planning",
    "Prosperity Partners",
    "Smart Investments",
    "Portfolio Advisory",
  ],
  openGraph: {
    title: "Prosperity Partners",
    description:
      "Trusted mutual fund distributor for transparent and goal-based financial planning.",
    url: "https://www.prosperity-partners.in/",
    siteName: "Prosperity Partners",
    images: [
      {
        url: "/logoBg.png",
        width: 800,
        height: 600,
        alt: "Prosperity Partners Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prosperity Partners",
    description:
      "Grow your wealth with expert financial planning and mutual fund advisory.",
    images: ["/logoBg.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
