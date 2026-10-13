import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clickworks — Real people, real results",
  description:
    "Clickworks pairs world-class strategists with AI that never sleeps. Websites, social media and branding, built on evidence.",
  openGraph: {
    title: "Clickworks — Real people, real results",
    description:
      "Websites, social media and branding, built on evidence-based strategy.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
