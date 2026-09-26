"use client";

import { useState } from "react";
import Link from "next/link";
import { nav } from "@/lib/content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur">
      <div className="rule-thick" />
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 font-label text-[13px] uppercase text-ink-soft sm:px-8">
        <span>Sunday Edition</span>
        <span className="hidden sm:inline">Design Your Own Bouquet</span>
        <span>Est. 2026</span>
      </div>
      <div className="rule" />
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-5 sm:px-8">
        <Link href="/" className="font-masthead text-2xl tracking-tight text-ink sm:text-3xl">
          Sunday Florals
        </Link>
        <nav className="hidden items-center gap-7 font-label text-[13px] uppercase text-ink-soft md:flex">
          {nav.map((item) => (
            <a key={item.label} href={item.href} className="transition-colors hover:text-accent">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#configurator"
            className="hidden whitespace-nowrap border border-ink px-4 py-2 font-label text-[13px] uppercase text-ink transition-colors hover:border-accent hover:text-accent sm:inline-block"
          >
            Start an Order
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="flex h-9 w-9 shrink-0 flex-col items-center justify-center gap-1.5 border border-ink/20 md:hidden"
          >
            <span className={`h-px w-4 bg-ink transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
            <span className={`h-px w-4 bg-ink transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>
      <div className="rule" />

      {open && (
        <nav className="flex flex-col bg-paper md:hidden">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-rule px-6 py-4 font-label text-[13px] uppercase text-ink-soft transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#configurator"
            onClick={() => setOpen(false)}
            className="px-6 py-4 font-label text-[13px] uppercase text-accent"
          >
            Start an Order
          </a>
        </nav>
      )}
    </header>
  );
}
