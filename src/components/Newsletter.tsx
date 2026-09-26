"use client";

import { useState, type FormEvent } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 sm:px-8">
      <div className="border border-dashed border-ink/30 p-8 sm:p-12">
        <div className="mx-auto max-w-lg text-center">
          <p className="font-label text-[13px] uppercase text-ink-faint">Clip &amp; Save</p>
          <h2 className="mt-2 font-masthead text-3xl text-ink sm:text-4xl">
            Subscribe to the Sunday Edition
          </h2>
          <p className="mt-3 text-base leading-relaxed text-ink-soft">
            New arrangements, early access to the Configurator, and a standing 10% off your first
            order — straight to your inbox, once a week, no fluff.
          </p>

          {submitted ? (
            <p className="mt-8 font-label text-base uppercase text-accent">
              You&apos;re on the list. See you Sunday.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                aria-label="Email address"
                className="flex-1 border border-ink/25 bg-paper px-4 py-3 text-base text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none"
              />
              <button
                type="submit"
                className="bg-ink px-6 py-3 font-label text-[13px] uppercase text-paper transition-colors hover:bg-accent"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
