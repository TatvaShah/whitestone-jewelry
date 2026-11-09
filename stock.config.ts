import type { Img, StockCredit } from "@/lib/types";

// This demo uses the studio's own photographs only.
export const stockPhotos: StockCredit[] = [];

export function stock(file: string): Img {
  const p = stockPhotos.find((x) => x.src === file || x.src.endsWith(`/${file}`));
  if (!p) throw new Error(`stock photo not in stock.config.ts: ${file}`);
  return { src: p.src, alt: p.alt, width: p.width, height: p.height };
}
