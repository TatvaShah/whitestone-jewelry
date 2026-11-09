import Image from "next/image";
import { SectionHead } from "@/components/media";
import { site } from "@/lib/site";

export function Services() {
  const menu = site.menu;
  if (!menu?.groups.length) return null;
  const chapters = menu.groups.filter((group) => group.title !== "Posted examples");
  const posted = menu.groups.find((group) => group.title === "Posted examples");

  return (
    <section id="services" className="scroll-mt-24">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHead eyebrow={menu.label ?? "Services"} title={menu.title ?? "Services"} intro={menu.intro} />
        <div className="mt-12 divide-y divide-line border-y border-line">
          {chapters.map((group, index) => (
            <article key={group.title} data-reveal className="grid gap-6 py-10 md:grid-cols-12 md:gap-10 md:py-14">
              <div className="md:col-span-4">
                <p className="font-display text-4xl text-[#6f5344]">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 text-[clamp(2rem,4vw,3.2rem)] leading-none">{group.title}</h3>
                {group.note ? <p className="mt-3 text-sm text-muted">{group.note}</p> : null}
              </div>
              <ul className="grid content-start gap-5 md:col-span-8">
                {group.items.map((item) => (
                  <li key={item.name} className="border-l border-[#c0a090] pl-4">
                    <p className="font-medium text-ink">{item.name}</p>
                    {item.description ? <p className="mt-1 text-sm leading-6 text-muted sm:text-base sm:leading-7">{item.description}</p> : null}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      {posted ? (
        <div className="on-charcoal bg-[#202020] py-16 text-[#f7f3ee] md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <p className="text-[0.72rem] tracking-[0.18em] text-[#c0a090] uppercase">From the captions</p>
            <h3 className="mt-3 font-display text-[clamp(2rem,4vw,3.4rem)] text-[#f7f3ee]">Posted examples</h3>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#d9d0c8]">{posted.note}</p>
            <ul data-lenis-prevent className="mt-8 flex gap-4 overflow-x-auto pb-3">
              {posted.items.map((item) => (
                <li key={item.name} className="w-[78vw] shrink-0 sm:w-[280px]">
                  <a href={item.href} className="group block">
                    <div className="relative aspect-[9/16] bg-[#111]">
                      {item.image ? (
                        <Image src={item.image.src} alt={item.image.alt} fill sizes="280px" className="object-contain" />
                      ) : null}
                    </div>
                    <p className="mt-3 font-display text-3xl text-[#f7f3ee]">{item.price}</p>
                    <p className="text-sm text-[#f7f3ee]">{item.name}</p>
                    {item.description ? <p className="mt-1 text-xs leading-5 text-[#cfc4ba]">{item.description}</p> : null}
                  </a>
                </li>
              ))}
            </ul>
            {menu.footnote ? <p className="mt-8 max-w-3xl text-sm leading-6 text-[#d9d0c8]">{menu.footnote}</p> : null}
          </div>
        </div>
      ) : null}
    </section>
  );
}
