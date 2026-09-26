import { valueProps } from "@/lib/content";
import { SparkIcon, WandIcon } from "./icons";

const icons = {
  spark: SparkIcon,
  wand: WandIcon,
};

export function ValueProps() {
  return (
    <section className="rule border-b border-rule bg-paper-2/60">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8">
        <p className="font-label text-[13px] uppercase text-ink-faint">Why Sunday</p>
        <div className="mt-8 grid gap-10 sm:grid-cols-2">
          {valueProps.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <div key={item.title} className={i > 0 ? "sm:border-l sm:border-rule sm:pl-10" : ""}>
                <Icon className="h-7 w-7 text-accent" />
                <h3 className="mt-4 font-masthead text-2xl text-ink">{item.title}</h3>
                <p className="mt-2 max-w-md text-base leading-relaxed text-ink-soft">{item.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
