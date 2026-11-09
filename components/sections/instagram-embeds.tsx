"use client";

import { useEffect, useRef } from "react";
import { INSTAGRAM } from "@/lib/channels";
import { site } from "@/site.config";

function embedPath(url: string) {
  const match = url.match(/instagram\.com\/(?:[^/]+\/)?(p|reel|tv)\/([A-Za-z0-9_-]+)/);
  return match ? match[0] : url;
}

const LOCAL_STILLS = new Set([
  "De5HykTTN9g",
  "De79hbtu0LI",
  "De9m517xNfd",
  "De-fmMLOobp",
  "DfA4N0AT6eu",
  "DfDd-AEzuQA",
  "DfLMwEVzIMl",
  "DfQfOXou9Vn",
  "DfUvUe-zkYv",
  "DfVu759DlJk",
  "DK-B_UXuDXl",
  "DQnOiTejvCt",
  "DSBO0qWjsJj",
]);

function stillFor(url: string) {
  const match = url.match(/\/(?:p|reel)\/([^/]+)/);
  if (!match || !LOCAL_STILLS.has(match[1])) return null;
  return `/images/${match[1]}.jpg`;
}

let scriptPromise: Promise<void> | null = null;

function loadEmbedScript() {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.instgrm?.Embeds) return Promise.resolve();
  if (scriptPromise) return scriptPromise;
  scriptPromise = new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => resolve();
    document.body.appendChild(script);
  });
  return scriptPromise;
}

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

export function InstagramEmbeds() {
  const root = useRef<HTMLElement>(null);
  const urls = site.instagram.embeds ?? [];
  const handle = site.instagram.handle.replace(/^@/, "");

  useEffect(() => {
    const node = root.current;
    if (!node || !urls.length) return;
    let started = false;
    const observer = new IntersectionObserver(
      (entries) => {
        if (started || !entries.some((entry) => entry.isIntersecting)) return;
        started = true;
        observer.disconnect();
        void loadEmbedScript().then(() => window.instgrm?.Embeds.process());
      },
      { rootMargin: "240px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [urls.length]);

  if (!urls.length) return null;

  return (
    <section id="instagram" ref={root} className="scroll-mt-24 bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <p className="eyebrow">@{handle}</p>
        <h2 className="mt-4 text-[clamp(2.1rem,4.6vw,3.9rem)] leading-[1.02]">{site.instagram.embedsTitle ?? "Instagram"}</h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
          Official Instagram embeds. Each one loads as it nears the screen, so the rest of the page stays light.
        </p>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {urls.map((url) => (
            <div key={url} className="min-w-0">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{ background: "#111", border: 0, margin: 0, maxWidth: "540px", minWidth: "280px", width: "100%" }}
              >
                {stillFor(url) ? (
                  // Plain img so the official embed script can replace this block. next/image is used everywhere else.
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={stillFor(url) ?? ""} alt="" style={{ display: "block", width: "100%", height: "auto" }} />
                ) : null}
                <a href={url} style={{ color: "#f7f3ee" }}>
                  View this post on Instagram
                </a>
              </blockquote>
              <a href={url} className="mt-3 inline-block text-sm underline decoration-line underline-offset-4">
                Open {embedPath(url).includes("/reel/") ? "reel" : "post"}
              </a>
            </div>
          ))}
        </div>
        <a href={INSTAGRAM} className="btn btn-ghost mt-10">
          Follow @{handle}
        </a>
      </div>
    </section>
  );
}
