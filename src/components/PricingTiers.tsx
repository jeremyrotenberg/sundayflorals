import { pricingTiers } from "@/lib/content";

// Each tier gets its own hue so the row reads as varied and lively rather
// than three identical gray cards — mirrors the multi-color gallery below.
const themes = [
  { border: "border-sage", dot: "bg-sage", text: "text-sage", button: "bg-sage hover:bg-sage-ink" },
  { border: "border-accent", dot: "bg-accent", text: "text-accent", button: "bg-accent hover:bg-accent-ink" },
  { border: "border-gold", dot: "bg-gold", text: "text-gold-ink", button: "bg-gold hover:bg-gold-ink" },
] as const;

export function PricingTiers() {
  return (
    <section id="pricing" className="bg-paper-2/60">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
        <div className="rule pb-4">
          <p className="font-label text-[13px] uppercase text-ink-faint">The Classifieds</p>
          <h2 className="mt-2 font-masthead text-3xl text-ink sm:text-4xl">
            However You Shop, You Design It
          </h2>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {pricingTiers.map((tier, i) => {
            const theme = themes[i % themes.length];
            return (
              <div
                key={tier.name}
                className={`flex flex-col border-2 bg-paper p-8 ${
                  tier.featured ? theme.border : "border-ink/15"
                }`}
              >
                {tier.featured && (
                  <p
                    className={`mb-4 self-start px-3 py-1 font-label text-[12px] uppercase text-paper ${theme.dot}`}
                  >
                    Most Popular
                  </p>
                )}
                <h3 className="flex items-center gap-2 font-masthead text-2xl text-ink">
                  <span className={`inline-block h-2.5 w-2.5 rounded-full ${theme.dot}`} />
                  {tier.name}
                </h3>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="font-masthead text-3xl text-ink">{tier.price}</span>
                  <span className="text-base text-ink-faint">{tier.cadence}</span>
                </div>
                <p className="mt-4 text-base leading-relaxed text-ink-soft">{tier.description}</p>

                <ul className="mt-6 flex-1 space-y-3 text-base text-ink-soft">
                  {tier.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className={theme.text}>—</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className={`mt-8 inline-block px-6 py-3 text-center font-label text-[13px] uppercase text-paper transition-colors ${theme.button}`}
                >
                  {tier.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
