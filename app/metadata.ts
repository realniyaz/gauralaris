import type { Metadata } from "next";

export const siteMetadata: Metadata = {
  title: "Gaur Alaris | Ultra-Luxury 3 & 4 BHK Residences on Yamuna Expressway",
  description: "Discover Gaur Alaris in Sector 22D, Yamuna Expressway. Featuring 8 iconic 34-storey towers, 100,000 sq. ft. Club Regalia, and peacock-inspired landscape greens. Prices starting from ₹1.36 Cr* onwards.",
  keywords: [
    "Gaur Alaris",
    "Gaurs Group",
    "Gaur Alaris Sector 22D",
    "Yamuna Expressway Luxury Apartments",
    "3 & 4 BHK Luxury Residences Greater Noida",
    "Noida International Airport Property",
    "Club Regalia Gaur Alaris"
  ],
  authors: [{ name: "Gaurs Group" }],
  creator: "Realty Fm",
  publisher: "Gaurs Group",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://gauralaris.com"), // Update with your deployment domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gaur Alaris | Elevate to Extraordinary",
    description: "Ultra-luxury 3 & 4 BHK residences inspired by the peacock. Located 5 mins from Noida International Airport. Starting ₹1.36 Cr* onwards.",
    url: "https://gauralaris.com",
    siteName: "Gaur Alaris",
    images: [
      {
        url: "/og-image.jpg", // Place your preview banner in the public folder
        width: 1200,
        height: 630,
        alt: "Gaur Alaris - Ultra Luxury Residences",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaur Alaris | Ultra-Luxury Residences",
    description: "Experience elite living at Sector 22D, Yamuna Expressway. 3 & 4 BHK luxury homes by Gaurs Group.",
    images: ["/og-image.jpg"],
  },
  other: {
    "rera-no": "UPRERAPRJ950965/07/2026",
  },
};