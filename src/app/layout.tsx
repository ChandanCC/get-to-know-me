import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import LeftStrip from "@/components/layout/LeftStrip";
import Footer from "@/components/layout/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Chandan Chhouda",
  jobTitle: "Senior Frontend Engineer",
  url: "https://chandancc.github.io/get-to-know-me",
  email: "chandanchhouda.cc@gmail.com",
  image: "https://chandancc.github.io/get-to-know-me/hero-bg.svg",
  sameAs: [
    "https://linkedin.com/in/chandancc",
    "https://github.com/chandanCC",
  ],
  knowsAbout: [
    "React",
    "TypeScript",
    "Webpack Module Federation",
    "Micro-frontends",
    "Node.js",
    "Performance Optimisation",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru",
    addressCountry: "IN",
  },
  worksFor: {
    "@type": "Organization",
    name: "Arctic Wolf Networks",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL("https://chandancc.github.io/get-to-know-me"),
  title: {
    default:
      "Chandan Chhouda | Senior Frontend Engineer — React, TypeScript & Micro-Frontends",
    template: "%s — Chandan Chhouda",
  },
  description:
    "Senior Frontend Engineer with 6+ years building React and TypeScript UIs for high-volume CRM and SaaS products. Specialised in Webpack Module Federation, micro-frontends, and real-time interfaces.",
  authors: [{ name: "Chandan Chhouda" }],
  verification: { google: "99RQCULT8N4Go745R6FyGAzmTY7Zg-khRlWek1ghy3U" },
  openGraph: {
    type: "website",
    siteName: "Chandan Chhouda",
    title: "Chandan Chhouda | Senior Frontend Engineer",
    description:
      "6+ years building high-performance React & TypeScript interfaces for complex, real-time products.",
  },
  twitter: {
    card: "summary",
    title: "Chandan Chhouda | Senior Frontend Engineer",
    description:
      "6+ years building high-performance React & TypeScript interfaces for complex, real-time products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <LeftStrip />
        <Nav />
        <div className="page-wrap">
          <div className="content">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
