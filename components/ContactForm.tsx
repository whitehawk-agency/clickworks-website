"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/Container";
import { clsx } from "@/lib/clsx";

const FIELD = clsx(
  "w-full rounded-2xl border border-transparent bg-paper-soft px-4 py-3.5 text-base text-ink",
  "placeholder:text-ink-muted/60 transition-colors",
  "hover:border-line focus:border-ink focus:bg-paper focus:outline-none",
);

const LABEL = "mb-2 block text-sm font-medium text-ink";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  // No backend is wired up yet — point this at your form endpoint or a route
  // handler and replace the local success state with the real response.
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="scroll-mt-20 py-16 sm:py-24">
      <Container>
        <h2 className="text-center font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Contact Form
        </h2>
        <p className="mx-auto mt-3 max-w-md text-center text-base text-ink-muted">
          Tell us where you want to be in twelve months. We will tell you how to
          get there.
        </p>

        <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-line bg-paper p-6 shadow-soft-lg sm:p-9">
          {sent ? (
            <div
              role="status"
              className="flex flex-col items-center gap-4 py-12 text-center"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-ink text-white">
                <Check className="size-6" />
              </span>
              <p className="font-display text-xl font-semibold tracking-tight text-ink">
                Thanks — we have got it.
              </p>
              <p className="max-w-sm text-sm text-ink-muted">
                One of our strategists will be in touch within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate={false}>
              <div>
                <label htmlFor="company" className={LABEL}>
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  required
                  placeholder="Clickworks Inc."
                  className={FIELD}
                />
              </div>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={LABEL}>
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="Jane Doe"
                    className={FIELD}
                  />
                </div>
                <div>
                  <label htmlFor="email" className={LABEL}>
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="jane@company.com"
                    className={FIELD}
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="message" className={LABEL}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  required
                  placeholder="What are you working on?"
                  className={clsx(FIELD, "resize-y")}
                />
              </div>

              <button
                type="submit"
                className={clsx(
                  "mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5",
                  "text-sm font-semibold text-white transition-colors hover:bg-ink-soft sm:w-auto",
                )}
              >
                Send message
                <ArrowRight className="size-4" />
              </button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
