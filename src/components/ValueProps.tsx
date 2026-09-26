import { valueProps } from "@/lib/content";
import { LeafIcon, SparkIcon, TruckIcon, WandIcon } from "./icons";

const icons = {
  leaf: LeafIcon,
  truck: TruckIcon,
  spark: SparkIcon,
  wand: WandIcon,
};

export function ValueProps() {
  return (
    <section className="rule border-b border-rule bg-paper-2/60">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8">
        <p className="font-label text-[11px] uppercase text-ink-faint">Why Sunday</p>
        <div className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {valueProps.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <div
                key={item.title}
                className={`px-0 lg:px-8 ${i > 0 ? "lg:border-l lg:border-rule" : ""}`}
              >
                <Icon className="h-6 w-6 text-accent" />
                <h3 className="mt-4 font-masthead text-lg text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
