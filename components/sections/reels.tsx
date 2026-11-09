import { ReelVideo } from "@/components/reel-video";
import { SectionHead } from "@/components/media";
import { has, site } from "@/lib/site";

export function Reels() {
  const reels = site.reels;
  if (!reels || !has(reels.items)) return null;
  return (
    <section id="reels" className="on-charcoal scroll-mt-24 bg-[#202020]">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHead eyebrow="Reels" title={reels.title ?? "Reels"} intro={reels.intro} />
        <ul data-lenis-prevent className="mt-12 flex gap-4 overflow-x-auto pb-2">
          {reels.items.map((item) => (
            <li key={item.src} className="w-[78vw] shrink-0 sm:w-[280px] lg:w-[300px]">
              <figure>
                <div className="relative aspect-[9/16] bg-[#111]">
                  <ReelVideo
                    src={item.src}
                    poster={item.poster ?? ""}
                    title={item.title ?? "Studio reel"}
                    className="absolute inset-0"
                  />
                </div>
                <figcaption className="pt-3">
                  {item.title ? <p className="font-display text-2xl text-[#f7f3ee]">{item.title}</p> : null}
                  {item.caption ? <p className="mt-1 text-sm leading-6 text-[#d9d0c8]">{item.caption}</p> : null}
                  {item.href ? (
                    <a href={item.href} className="mt-2 inline-block text-sm text-[#f7f3ee] underline decoration-[#c0a090] underline-offset-4">
                      View on Instagram
                    </a>
                  ) : null}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
