import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

/**
 * Inter, self-hosted as a single variable file (SIL OFL — see
 * fonts/Inter-LICENSE.txt). It carries both a weight axis and an optical-size
 * axis, and globals.css pins `opsz` to 32, which is the Display cut. One
 * 345KB file therefore covers every weight the page uses and is smaller than
 * shipping the static Display weights separately.
 */
const interDisplay = localFont({
  src: "./fonts/InterVariable.woff2",
  variable: "--font-inter-display",
  weight: "100 900",
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
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={interDisplay.variable}>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>

        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
