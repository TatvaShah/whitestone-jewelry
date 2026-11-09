import { SectionHead } from "@/components/media";
import { weddingWire } from "@/lib/channels";
import { has, site } from "@/lib/site";

// Only real, sourced reviews. Leave empty rather than inventing any.
export function Reviews() {
  const r = site.reviews;
  if (!r || !has(r.items)) return null;
  return (
    <section id="reviews" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
      <SectionHead eyebrow="Reviews" title={r.title ?? "What people say"} intro={r.intro} />
      <div data-stagger className="mt-12 grid gap-5 md:grid-cols-2 md:gap-7">
        {r.items.map((it) => {
          const href = it.href ?? (it.source?.startsWith("WeddingWire") ? weddingWire() : undefined);
          return (
            <figure key={it.quote} className="lift border border-line bg-surface p-6 sm:p-7">
              <blockquote className="font-display text-xl leading-8 text-ink">“{it.quote}”</blockquote>
              {it.author || it.source ? (
                <figcaption className="mt-5 text-sm text-muted">
                  <span className="text-ink">{it.author}</span>
                  {it.source ? (
                    <>
                      {", "}
                      {href ? (
                        <a href={href} className="underline decoration-line underline-offset-4">
                          {it.source}
                        </a>
                      ) : (
                        it.source
                      )}
                    </>
                  ) : null}
                </figcaption>
              ) : null}
            </figure>
          );
        })}
      </div>
    </section>
  );
}
