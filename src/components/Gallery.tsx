"use client";

import { useRef } from "react";
import { galleryItems } from "@/lib/content";
import { BouquetIllustration } from "./BouquetIllustration";
import { ArrowIcon } from "./icons";

export function Gallery() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.85), behavior: "smooth" });
  };

  return (
    <section id="gallery" className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4 rule pb-4">
        <div>
          <p className="font-label text-[13px] uppercase text-ink-faint">This Week&apos;s Edition</p>
          <h2 className="mt-2 font-masthead text-3xl text-ink sm:text-4xl">Shop the Standing Arrangements</h2>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label="Scroll gallery left"
            className="flex h-10 w-10 items-center justify-center border border-ink/20 transition-colors hover:border-accent hover:text-accent"
          >
            <ArrowIcon className="h-4 w-4 rotate-180" />
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label="Scroll gallery right"
            className="flex h-10 w-10 items-center justify-center border border-ink/20 transition-colors hover:border-accent hover:text-accent"
          >
            <ArrowIcon className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4"
      >
        {galleryItems.map((item) => (
          <article
            key={item.name}
            className="w-[75%] shrink-0 snap-start border border-ink/15 bg-paper-2 p-6 sm:w-[45%] lg:w-[30%]"
          >
            <div className="border border-ink/10 bg-paper p-4">
              <BouquetIllustration
                className="mx-auto h-auto w-full max-w-[160px]"
                colors={{
                  primary: item.palette[0],
                  secondary: item.palette[1],
                  foliage: item.palette[2],
                  wrap: "#F2E4CF",
                }}
              />
            </div>
            <h3 className="mt-5 font-masthead text-xl text-ink">{item.name}</h3>
            <p className="mt-1 text-base text-ink-soft">{item.detail}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="font-masthead text-lg text-ink">{item.price}</span>
              <button className="font-label text-[12px] uppercase text-accent underline underline-offset-4">
                Add to Order
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
