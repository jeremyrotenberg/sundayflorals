import { arrangementOfTheMonth } from "@/lib/content";
import { BouquetIllustration } from "./BouquetIllustration";
import { LiveDate } from "./LiveDate";

export function ArrangementOfMonth() {
  const a = arrangementOfTheMonth;

  return (
    <section id="arrangement-of-the-month" className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
      <div className="flex items-baseline justify-between rule pb-3">
        <p className="font-label text-[13px] uppercase text-ink-faint">Front Page Feature</p>
        <p className="font-label text-[13px] uppercase text-ink-faint">
          Posted <LiveDate />
        </p>
      </div>

      <div className="deckle-edge mt-8 grid gap-10 border border-ink/15 bg-paper-2 p-8 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="mx-auto w-full max-w-xs border border-ink/10 bg-paper p-6">
          <BouquetIllustration
            className="mx-auto h-auto w-full max-w-[220px]"
            colors={{
              primary: "#8A3A44",
              secondary: "#D9A05B",
              foliage: "#556B4E",
              wrap: "#F2E4CF",
            }}
          />
        </div>

        <div>
          <p className="font-label text-[13px] uppercase text-accent">{a.issue} · Arrangement of the Month</p>
          <h2 className="mt-3 font-masthead text-4xl leading-tight text-ink sm:text-5xl">{a.name}</h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-soft">{a.description}</p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <span className="font-masthead text-3xl text-ink">{a.price}</span>
            <a
              href="#pricing"
              className="bg-ink px-6 py-3 font-label text-[13px] uppercase text-paper transition-colors hover:bg-accent"
            >
              {a.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
