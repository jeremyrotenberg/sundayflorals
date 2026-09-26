import { BouquetIllustration } from "./BouquetIllustration";
import { LiveDate } from "./LiveDate";
import { ArrowIcon } from "./icons";

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-16 pt-12 sm:px-8 sm:pt-16">
      <p className="font-label text-[11px] uppercase text-ink-faint">
        <LiveDate /> · Sunday Edition
      </p>

      <div className="mt-6 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="fade-up">
          <h1 className="font-masthead text-[clamp(2.5rem,6vw,4.75rem)] leading-[1.02] text-ink">
            Every Bouquet
            <br />
            Has Your Byline.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
            Sunday Florals is a direct-to-door flower studio built around one idea: you should
            design the bouquet, not just buy it. Configure your arrangement, and we&apos;ll hand-tie
            it and deliver it the same day.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#configurator"
              className="group inline-flex items-center gap-2 bg-ink px-6 py-3 font-label text-[11px] uppercase text-paper transition-colors hover:bg-accent"
            >
              Design Your Bouquet
              <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#gallery"
              className="font-label text-[11px] uppercase text-ink-soft underline decoration-rule underline-offset-4 transition-colors hover:text-accent"
            >
              Shop This Week&apos;s Edition
            </a>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-6 rule pt-6">
            <div>
              <dt className="font-label text-[10px] uppercase text-ink-faint">Delivery</dt>
              <dd className="mt-1 font-masthead text-lg text-ink">Same Day</dd>
            </div>
            <div>
              <dt className="font-label text-[10px] uppercase text-ink-faint">Sourcing</dt>
              <dd className="mt-1 font-masthead text-lg text-ink">Direct</dd>
            </div>
            <div>
              <dt className="font-label text-[10px] uppercase text-ink-faint">Design</dt>
              <dd className="mt-1 font-masthead text-lg text-ink">Yours</dd>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-sm border border-ink/15 bg-paper-2 p-6">
          <BouquetIllustration className="mx-auto h-auto w-full max-w-[240px]" />
          <p className="mt-4 border-t border-rule pt-3 text-center font-label text-[10px] uppercase text-ink-faint">
            Fig. 1 — Configured live by a Sunday customer
          </p>
        </div>
      </div>
    </section>
  );
}
