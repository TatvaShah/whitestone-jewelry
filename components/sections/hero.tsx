import Image from "next/image";
import { ReelVideo } from "@/components/reel-video";
import { Roll } from "@/components/roll";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/channels";
import { site } from "@/lib/site";

export function Hero() {
  const hero = site.hero;
  const photo = hero.images?.[0];
  const lines = hero.headline.split(/(?<=\.)\s+/).filter(Boolean);

  return (
    <section className="border-b border-line" aria-labelledby="hero-title">
      <div className="mx-auto grid max-w-7xl lg:min-h-[calc(100svh-4.5rem)] lg:grid-cols-12">
        <div className="flex flex-col justify-end px-5 pt-10 pb-12 md:px-10 md:pt-16 lg:col-span-7 lg:py-16">
          {hero.eyebrow ? (
            <p className="eyebrow enter flex items-center gap-4">
              <span aria-hidden="true" className="h-px w-10 bg-[#b0b0c0]" />
              {hero.eyebrow}
            </p>
          ) : null}
          <h1 id="hero-title" className="mt-6 font-display text-[clamp(3.4rem,8vw,7.2rem)] leading-[0.9] tracking-[-0.03em] text-ink">
            {lines.map((line, index) => (
              <span key={line} className="line-mask block" style={{ ["--i" as string]: index }}>
                <span className={index === 1 ? "italic" : undefined}>{line}</span>
              </span>
            ))}
          </h1>
          {hero.subhead ? (
            <p className="enter mt-7 max-w-xl text-base leading-7 text-muted sm:text-lg" style={{ ["--i" as string]: 2 }}>
              {hero.subhead}
            </p>
          ) : null}
          <div className="enter mt-8 flex flex-wrap gap-3" style={{ ["--i" as string]: 3 }}>
            {hero.primaryCta ? (
              <a href={hero.primaryCta.href} className="btn btn-primary" data-magnetic="0.16">
                <Roll>{hero.primaryCta.label}</Roll>
              </a>
            ) : null}
            {hero.secondaryCta ? (
              <a href={hero.secondaryCta.href} className="btn btn-ghost">
                <Roll>{hero.secondaryCta.label}</Roll>
              </a>
            ) : null}
          </div>
          <p className="enter mt-5 text-sm text-muted" style={{ ["--i" as string]: 4 }}>
            <a href={`tel:${PHONE_TEL}`} className="uline text-ink">
              {PHONE_DISPLAY}
            </a>
            <span aria-hidden="true"> · </span>
            <a href="#contact" className="uline">
              Studio address
            </a>
          </p>
          <dl className="enter mt-10 grid grid-cols-3 gap-4 border-t border-line pt-6 text-sm" style={{ ["--i" as string]: 5 }}>
            <div>
              <dt className="text-[0.68rem] tracking-[0.16em] text-muted uppercase">Google</dt>
              <dd className="mt-1 font-display text-2xl text-ink">5.0</dd>
              <dd className="text-xs text-muted">62 reviews</dd>
            </div>
            <div>
              <dt className="text-[0.68rem] tracking-[0.16em] text-muted uppercase">Instagram</dt>
              <dd className="mt-1 font-display text-2xl text-ink">Verified</dd>
              <dd className="text-xs text-muted">9 Nov 2026</dd>
            </div>
            <div>
              <dt className="text-[0.68rem] tracking-[0.16em] text-muted uppercase">Visits</dt>
              <dd className="mt-1 font-display text-2xl text-ink">Private</dd>
              <dd className="text-xs text-muted">Appointment only</dd>
            </div>
          </dl>
        </div>
        <div className="relative bg-[#202020] lg:col-span-5">
          <div className="relative mx-auto aspect-[9/16] w-full max-w-[520px] lg:absolute lg:inset-8 lg:mx-0 lg:aspect-auto lg:h-auto lg:max-w-none">
            {photo ? (
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            ) : null}
            <ReelVideo
              src="/reels/DfUvUe-zkYv.mp4"
              poster="/images/DfUvUe-zkYv-poster.jpg"
              title="10 carat emerald cut ring, playing silently. Posted at $7,800 CAD."
              priority
              className="absolute inset-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
