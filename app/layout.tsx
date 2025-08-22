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
  title: "Prosperity Partners | Mutual Fund Investments & Wealth Management",
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
  ]
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
