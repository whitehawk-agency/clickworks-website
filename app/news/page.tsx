import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageIntro, PhotoSlot } from "@/components/PageIntro";
import { NEWS } from "@/lib/content";

export const metadata: Metadata = {
  title: "News — Clickworks",
  description: "What the Clickworks team has been up to.",
};

export default function NewsPage() {
  return (
    <>
      <PageIntro
        title="News"
        lede="What the team has been working on, and where we have been."
      />

      <Container className="pb-16 sm:pb-24">
        <ul className="flex flex-col gap-10 sm:gap-14">
          {NEWS.map((post, i) => (
            <li
              key={`${post.title}-${i}`}
              className="grid gap-5 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] sm:items-start sm:gap-10"
            >
              <PhotoSlot className="aspect-video w-full" label="Photo" />

              <article>
                <h2 className="text-balance text-xl font-semibold leading-tight tracking-tight text-ink sm:text-2xl">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink sm:text-base">
                  {post.body}
                </p>
                <p className="mt-3 text-sm italic text-ink-muted sm:text-base">
                  {post.date}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
