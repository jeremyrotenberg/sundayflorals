export type BouquetColors = {
  primary: string;
  secondary: string;
  foliage: string;
  wrap: string;
};

export const defaultBouquetColors: BouquetColors = {
  primary: "#B5495B",
  secondary: "#E7C9B7",
  foliage: "#5C6B4F",
  wrap: "#EFE6D3",
};

// A simple, hand-rolled line-art bouquet. Deliberately illustrative (in the
// spirit of an old seed-catalog engraving) rather than photographic, since
// it's built entirely from colors we can swap live in the Configurator.
export function BouquetIllustration({
  colors = defaultBouquetColors,
  className,
}: {
  colors?: BouquetColors;
  className?: string;
}) {
  const stems = [
    { x: 100, rotate: -6 },
    { x: 112, rotate: -2 },
    { x: 100, rotate: 3 },
    { x: 88, rotate: 7 },
  ];

  return (
    <svg viewBox="0 0 200 240" className={className} role="img" aria-label="Illustrated bouquet preview">
      <g stroke={colors.foliage} strokeWidth="2" fill="none" strokeLinecap="round">
        {stems.map((s, i) => (
          <path key={i} d={`M${s.x} 175 Q ${s.x + s.rotate} 130 ${100 + s.rotate * 2} 95`} />
        ))}
      </g>

      {/* foliage */}
      <g fill={colors.foliage} opacity="0.85">
        <ellipse cx="66" cy="128" rx="16" ry="7" transform="rotate(-28 66 128)" />
        <ellipse cx="140" cy="122" rx="16" ry="7" transform="rotate(24 140 122)" />
        <ellipse cx="80" cy="98" rx="13" ry="6" transform="rotate(-10 80 98)" />
        <ellipse cx="126" cy="94" rx="13" ry="6" transform="rotate(14 126 94)" />
      </g>

      {/* secondary blooms */}
      <g fill={colors.secondary}>
        <circle cx="70" cy="100" r="14" />
        <circle cx="132" cy="96" r="15" />
        <circle cx="100" cy="70" r="13" />
      </g>

      {/* primary blooms */}
      <g fill={colors.primary}>
        <circle cx="100" cy="98" r="20" />
        <circle cx="72" cy="82" r="14" />
        <circle cx="128" cy="80" r="14" />
      </g>
      <g fill={colors.primary} opacity="0.7">
        <circle cx="100" cy="60" r="11" />
      </g>

      {/* bloom detail lines */}
      <g stroke="#00000022" strokeWidth="1" fill="none">
        <circle cx="100" cy="98" r="8" />
        <circle cx="72" cy="82" r="5" />
        <circle cx="128" cy="80" r="5" />
      </g>

      {/* wrap */}
      <path
        d={`M60 168 L140 168 L152 232 L48 232 Z`}
        fill={colors.wrap}
        stroke="var(--ink, #201c14)"
        strokeOpacity="0.15"
        strokeWidth="1.5"
      />
      <path d="M60 168 L100 190 L140 168" fill="none" stroke="#00000022" strokeWidth="1" />
      <path d="M92 178 L88 232 M108 178 L112 232" stroke="#00000014" strokeWidth="1" />

      {/* twine */}
      <path d="M64 196 Q100 206 136 196" fill="none" stroke={colors.foliage} strokeWidth="2" />
    </svg>
  );
}
