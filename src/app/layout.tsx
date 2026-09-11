import type { Metadata } from "next";
import { IBM_Plex_Sans, Newsreader, Fraunces, Outfit, Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import business from "@/content/business.json";
import brand from "@/content/brand.json";

const newsreader = Newsreader({ subsets: ["latin"], variable: "--font-newsreader" });
const ibmPlex = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-ibm" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm" });

export const metadata: Metadata = {
  title: `${brand.name} | Rosslyn Preschool & Daycare`,
  description: brand.tagline,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ChildCare",
    name: brand.name,
    telephone: business.contact.phone,
    email: business.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.contact.address.street,
      addressLocality: business.contact.address.city,
      addressRegion: business.contact.address.state,
      postalCode: business.contact.address.zip,
      addressCountry: "US",
    },
    openingHours: "Mo-Fr 07:30-18:00",
  };

  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${ibmPlex.variable} ${fraunces.variable} ${outfit.variable} ${syne.variable} ${dmSans.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
