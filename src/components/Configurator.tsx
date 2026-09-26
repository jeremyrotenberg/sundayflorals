"use client";

import { useState } from "react";
import { BouquetIllustration, type BouquetColors } from "./BouquetIllustration";
import { ArrowIcon } from "./icons";

const blooms = [
  { name: "Dusty Rose", value: "#B5495B" },
  { name: "Clay", value: "#C98A83" },
  { name: "Marigold", value: "#D9A05B" },
  { name: "Plum", value: "#6B3B52" },
];

const accents = [
  { name: "Ivory", value: "#E7C9B7" },
  { name: "Blush", value: "#F0DCE0" },
  { name: "Buttercream", value: "#F2E4CF" },
  { name: "Sage Mist", value: "#DBE0CD" },
];

const wraps = [
  { name: "Kraft Paper", value: "#EFE6D3" },
  { name: "Newsprint White", value: "#F7F2E7" },
  { name: "Charcoal", value: "#3A362D" },
];

export function Configurator() {
  const [primary, setPrimary] = useState(blooms[0].value);
  const [secondary, setSecondary] = useState(accents[0].value);
  const [wrap, setWrap] = useState(wraps[0].value);

  const colors: BouquetColors = { primary, secondary, foliage: "#5C6B4F", wrap };

  return (
    <section id="configurator" className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
        <div className="flex items-baseline justify-between rule-inverse pb-3">
          <p className="font-label text-[11px] uppercase text-paper/50">Try It Yourself</p>
          <p className="font-label text-[11px] uppercase text-paper/50">The Configurator — Preview</p>
        </div>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <h2 className="font-masthead text-4xl leading-tight sm:text-5xl">
              Ordering Flowers,
              <br />
              Reimagined As Play.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-paper/70">
              This is a small taste of the full Configurator: pick your bloom color, your accent,
              and your wrap, and watch the arrangement update instantly. The real thing lets you
              choose every stem — coming soon to every order.
            </p>

            <div className="mt-8 space-y-6 max-w-md">
              <Swatches label="Bloom Color" options={blooms} value={primary} onChange={setPrimary} />
              <Swatches label="Accent Color" options={accents} value={secondary} onChange={setSecondary} />
              <Swatches label="Wrap" options={wraps} value={wrap} onChange={setWrap} />
            </div>

            <a
              href="#pricing"
              className="mt-9 inline-flex items-center gap-2 bg-paper px-6 py-3 font-label text-[11px] uppercase text-ink transition-colors hover:bg-accent hover:text-paper"
            >
              Build Your Full Bouquet
              <ArrowIcon className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="mx-auto w-full max-w-sm border border-paper/15 bg-paper/[0.06] p-8">
            <BouquetIllustration colors={colors} className="mx-auto h-auto w-full max-w-[260px] transition-all duration-300" />
            <p className="mt-6 border-t border-paper/15 pt-4 text-center font-label text-[10px] uppercase text-paper/50">
              Live Preview — Updates As You Choose
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Swatches({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { name: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <p className="font-label text-[10px] uppercase text-paper/50">{label}</p>
      <div className="mt-3 flex flex-wrap gap-3">
        {options.map((opt) => {
          const active = opt.value === value;
          return (
            <button
              key={opt.name}
              type="button"
              onClick={() => onChange(opt.value)}
              aria-pressed={active}
              aria-label={opt.name}
              title={opt.name}
              className={`h-9 w-9 rounded-full border-2 transition-transform ${
                active ? "scale-110 border-paper" : "border-paper/30 hover:border-paper/60"
              }`}
              style={{ backgroundColor: opt.value }}
            />
          );
        })}
      </div>
    </div>
  );
}
