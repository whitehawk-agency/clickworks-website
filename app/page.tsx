import { Hero } from "@/components/Hero";
import { OurWork } from "@/components/OurWork";
import { Services } from "@/components/Services";
import { MissionPanel } from "@/components/MissionPanel";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <OurWork />
      <Services />
      <MissionPanel />
      <Testimonials />
    </>
  );
}
