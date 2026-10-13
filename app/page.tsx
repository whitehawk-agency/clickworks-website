import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { OurWork } from "@/components/OurWork";
import { Services } from "@/components/Services";
import { TeamSection } from "@/components/TeamSection";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <OurWork />
        <Services />
        <TeamSection />
        <ContactForm />
      </main>

      <Footer />
    </>
  );
}
