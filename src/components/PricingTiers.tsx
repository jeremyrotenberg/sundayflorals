import { pricingTiers } from "@/lib/content";

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
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col border p-8 ${
                tier.featured ? "border-2 border-accent bg-paper" : "border-ink/15 bg-paper"
              }`}
            >
              {tier.featured && (
                <p className="mb-4 self-start bg-accent px-3 py-1 font-label text-[12px] uppercase text-paper">
                  Most Popular
                </p>
              )}
              <h3 className="font-masthead text-2xl text-ink">{tier.name}</h3>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="font-masthead text-3xl text-ink">{tier.price}</span>
                <span className="text-base text-ink-faint">{tier.cadence}</span>
              </div>
              <p className="mt-4 text-base leading-relaxed text-ink-soft">{tier.description}</p>

              <ul className="mt-6 flex-1 space-y-3 text-base text-ink-soft">
                {tier.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-accent">—</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`mt-8 inline-block px-6 py-3 text-center font-label text-[13px] uppercase transition-colors ${
                  tier.featured
                    ? "bg-accent text-paper hover:bg-accent-ink"
                    : "bg-ink text-paper hover:bg-accent"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
