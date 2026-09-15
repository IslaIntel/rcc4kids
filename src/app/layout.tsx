import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import "./globals.css";
import business from "@/content/business.json";
import brand from "@/content/brand.json";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-nunito",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-nunito-sans",
});

export const metadata: Metadata = {
  title: `${brand.name} | ${brand.legalName}`,
  description: brand.tagline,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ChildCare",
    name: brand.legalName,
    alternateName: brand.name,
    telephone: business.contact.phone,
    email: business.contact.email,
    url: "https://www.rcc4kids.com",
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
    <html lang="en" className={`${nunito.variable} ${nunitoSans.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
