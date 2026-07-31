import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { siteMetadata } from "./metadata";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-brand-dark text-brand-cream font-sans antialiased selection:bg-brand-gold selection:text-brand-dark">
        {children}
      </body>
    </html>
  );
}