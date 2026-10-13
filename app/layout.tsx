import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  themeColor: "#09090b",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={interDisplay.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
