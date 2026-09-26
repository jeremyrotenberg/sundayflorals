import { letters } from "@/lib/content";
import { QuoteMarkIcon } from "./icons";

const quoteColors = ["text-accent", "text-sage", "text-gold"];

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
      <p className="font-label text-[13px] uppercase text-ink-faint rule pb-4">Letters to the Editor</p>

      <div className="mt-10 grid gap-10 md:grid-cols-3">
        {letters.map((letter, i) => (
          <figure key={letter.name}>
            <QuoteMarkIcon className={`h-6 w-8 ${quoteColors[i % quoteColors.length]}`} />
            <blockquote className="mt-3 font-masthead text-lg leading-snug text-ink">
              &ldquo;{letter.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-4 font-label text-[13px] uppercase text-ink-faint">
              {letter.name} · {letter.context}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
