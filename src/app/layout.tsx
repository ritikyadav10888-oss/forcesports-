import type { Metadata } from "next";
import { Roboto, Playfair_Display } from "next/font/google";
import "../index.css";
import PublicLayoutWrapper from "../components/layout/PublicLayoutWrapper";
import { Analytics } from "@vercel/analytics/react";
import Schema from "../components/seo/Schema";

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

const playfair = Playfair_Display({
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: "Force Sports & Wears India",
  description: "Leading manufacturer and supplier of customized sports apparel.",
  icons: {
    icon: "/brand-logo.png",
    apple: "/brand-logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${roboto.variable} ${playfair.variable} font-sans scroll-smooth`}>
      <body className="font-sans">
        <PublicLayoutWrapper>
          {children}
        </PublicLayoutWrapper>
        <Analytics />
        <Schema />
      </body>
    </html>
  );
}