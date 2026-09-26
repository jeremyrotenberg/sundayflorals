type IconProps = {
  className?: string;
};

export function LeafIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 20c8-1 14-7 15-15-8 1-14 7-15 15Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path d="M5 19c3-4 7-8 13-13" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function TruckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M3 6h11v9H3z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path
        d="M14 10h4l3 3v2h-7z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <circle cx="7" cy="17" r="1.6" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="17.5" cy="17" r="1.6" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function SparkIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3c.5 4 3 6.5 7 7-4 .5-6.5 3-7 7-.5-4-3-6.5-7-7 4-.5 6.5-3 7-7Z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WandIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 20 16 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M15 4l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2Z" stroke="currentColor" strokeWidth="1" />
      <path d="M19 12l.6 1.2L21 14l-1.4.8L19 16l-.6-1.2L17 14l1.4-.8L19 12Z" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function QuoteMarkIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M0 24V15.5C0 7 4.8 1.6 13 0v5.2C8.3 6.6 6.3 9.6 6 14h7v10H0Zm19 0V15.5c0-8.5 4.8-13.9 13-15.5v5.2c-4.7 1.4-6.7 4.4-7 8.8h7v10H19Z" />
    </svg>
  );
}
