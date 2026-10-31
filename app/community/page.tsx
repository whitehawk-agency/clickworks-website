import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { Testimonials } from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Community — Clickworks",
  description: "Life with Clickworks, straight from the people we work with.",
};

export default function CommunityPage() {
  return (
    <>
      <PageIntro
        title="Community"
        lede="Life with Clickworks, straight from the people we work with."
      />

      <Testimonials />
    </>
  );
}
