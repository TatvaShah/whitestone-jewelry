export function ShapeGlyph({ name, className }: { name: string; className?: string }) {
  const stroke = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.15,
    strokeLinejoin: "round" as const,
    strokeLinecap: "round" as const,
  };
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden="true">
      {name === "Round" ? (
        <>
          <circle cx="40" cy="40" r="22" {...stroke} />
          <circle cx="40" cy="40" r="7" {...stroke} />
        </>
      ) : null}
      {name === "Oval" ? (
        <>
          <ellipse cx="40" cy="40" rx="15" ry="24" {...stroke} />
          <ellipse cx="40" cy="40" rx="5" ry="8" {...stroke} />
        </>
      ) : null}
      {name === "Emerald" ? (
        <polygon points="26,12 54,12 68,26 68,54 54,68 26,68 12,54 12,26" {...stroke} />
      ) : null}
      {name === "Radiant" ? (
        <polygon points="22,14 58,14 66,22 66,58 58,66 22,66 14,58 14,22" {...stroke} />
      ) : null}
      {name === "Marquise" ? <path d="M40 8 C54 28 54 52 40 72 C26 52 26 28 40 8 Z" {...stroke} /> : null}
      {name === "Heart" ? (
        <path d="M40 66 C16 46 12 30 22 22 C30 15 38 20 40 28 C42 20 50 15 58 22 C68 30 64 46 40 66 Z" {...stroke} />
      ) : null}
      {name === "Princess" ? <rect x="18" y="18" width="44" height="44" {...stroke} /> : null}
      {name === "Asscher" ? (
        <>
          <rect x="16" y="16" width="48" height="48" {...stroke} />
          <rect x="28" y="28" width="24" height="24" {...stroke} />
        </>
      ) : null}
      {name === "Cushion" ? <rect x="16" y="16" width="48" height="48" rx="14" {...stroke} /> : null}
    </svg>
  );
}
