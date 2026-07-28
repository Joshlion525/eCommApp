"use client";

import { useState } from "react";
import { Container } from "./ui";
import { CheckIcon } from "./icons";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  }

  return (
    <section className="py-20">
      <Container>
        <div className="overflow-hidden rounded-3xl bg-brand-50 px-6 py-14 text-center ring-1 ring-brand-100 sm:px-12">
          <h2 className="mx-auto max-w-2xl font-display text-4xl tracking-tight text-ink">
            Get 15% off your first order
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Join our table for seasonal menu drops, chef&apos;s specials and the
            occasional secret dish. No spam, unsubscribe anytime.
          </p>

          {submitted ? (
            <p className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white">
              <CheckIcon className="h-4 w-4" /> You&apos;re in — check your inbox!
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-full border border-line bg-surface px-5 py-3 text-sm text-ink placeholder:text-muted focus:border-brand-500"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink/90"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
