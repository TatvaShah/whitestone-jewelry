"use client";

import Image from "next/image";
import { useState, type KeyboardEvent } from "react";
import { DmButton } from "@/components/dm-button";
import { ShapeGlyph } from "@/components/shape-glyph";
import { INSTAGRAM_DM, SHOWROOM, whatsApp } from "@/lib/channels";
import { site } from "@/site.config";

export function Shapes() {
  const block = site.shapes;
  const items = block?.items ?? [];
  const [name, setName] = useState(items[0]?.name ?? "");
  const current = items.find((item) => item.name === name) ?? items[0];
  if (!block || !current) return null;

  const message = `${current.prompt}\nHi Whitestone Jewelry, I would like to see ${current.name.toLowerCase()} options.\nLab or natural:\nTiming:`;

  const onKey = (event: KeyboardEvent<HTMLDivElement>) => {
    const keys = ["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp"];
    if (!keys.includes(event.key)) return;
    event.preventDefault();
    const index = items.findIndex((item) => item.name === current.name);
    const step = event.key === "ArrowRight" || event.key === "ArrowDown" ? 1 : -1;
    const next = items[(index + step + items.length) % items.length];
    if (next) setName(next.name);
  };

  return (
    <section id="shapes" className="band-ink scroll-mt-24" aria-labelledby="shapes-title">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <p className="eyebrow flex items-center gap-3 text-[#c0a090]">
          <span aria-hidden="true" className="h-px w-8 bg-[#c0a090]" />
          Shapes
        </p>
        <h2 id="shapes-title" data-split className="mt-4 max-w-3xl font-display text-[clamp(2.6rem,6vw,5rem)] leading-[0.95] text-[#f7f3ee]">
          {block.title}
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-7 text-[#d9d0c8] sm:text-lg">{block.intro}</p>

        <div
          role="radiogroup"
          aria-label="Diamond shapes"
          data-lenis-prevent
          onKeyDown={onKey}
          className="mt-10 flex gap-2 overflow-x-auto pb-2"
        >
          {items.map((item) => {
            const selected = item.name === current.name;
            return (
              <button
                key={item.name}
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => setName(item.name)}
                className={`flex w-[5.75rem] shrink-0 flex-col items-center gap-2 border px-1 py-3 text-center text-[0.58rem] leading-none tracking-[0.08em] uppercase ${
                  selected ? "border-[#c0a090] bg-[#c0a090] text-[#202020]" : "border-white/25 text-[#f7f3ee]"
                }`}
              >
                <ShapeGlyph name={item.name} className="h-12 w-12" />
                {item.name}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid items-stretch gap-8 border border-white/15 p-4 sm:p-6 lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
          <div className="relative h-full min-h-80 bg-[#111]">
            {current.image ? (
              <Image src={current.image.src} alt={current.image.alt} fill sizes="(min-width: 1024px) 36vw, 100vw" className="object-contain" />
            ) : (
              <div className="grid h-full min-h-72 place-items-center text-[#c0a090]">
                <ShapeGlyph name={current.name} className="h-40 w-40" />
              </div>
            )}
          </div>
          <div aria-live="polite">
            <p className="text-[0.68rem] tracking-[0.18em] text-[#c0a090] uppercase">{current.prompt}</p>
            <h3 className="mt-2 font-display text-5xl text-[#f7f3ee] italic">{current.name}</h3>
            <p className="mt-4 max-w-xl text-base leading-7 text-[#e6ddd4]">{current.note}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={whatsApp(message)} className="btn btn-primary" data-magnetic="0.14">
                WhatsApp this shape
              </a>
              <DmButton href={INSTAGRAM_DM} message={message} label="Instagram DM" className="btn btn-ghost !border-white/30 !bg-transparent !text-[#f7f3ee]" />
              <a href={SHOWROOM} className="btn btn-ghost !border-white/30 !bg-transparent !text-[#f7f3ee]">
                Design your dream ring
              </a>
            </div>
            <p className="mt-4 max-w-xl text-sm leading-6 text-[#cfc4ba]">
              WhatsApp opens with the note filled in. Instagram cannot take a prefilled DM, so the same note is copied for you to paste.
              ShowroomPro is the bio link, separate from the shape note.
            </p>
            {current.href ? (
              <a href={current.href} className="mt-4 inline-block text-sm text-[#f7f3ee] underline decoration-[#c0a090] underline-offset-4">
                View this shape on Instagram
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
