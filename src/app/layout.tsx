import type { Metadata } from "next";
import "./globals.css";

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
