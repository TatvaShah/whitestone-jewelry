"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  poster: string;
  title: string;
  priority?: boolean;
  className?: string;
};

export function ReelVideo({ src, poster, title, priority = false, className }: Props) {
  const box = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(priority);
  const [playing, setPlaying] = useState(false);
  const [reduced, setReduced] = useState(false);
  const playOnReady = useRef(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (priority || reduced) return;
    const node = box.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setReady(true);
      },
      { rootMargin: "280px" },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [priority, reduced]);

  useEffect(() => {
    const node = video.current;
    if (!node || !ready) return;
    if (reduced && !playOnReady.current) return;
    playOnReady.current = false;
    node.muted = true;
    const play = node.play();
    if (play) {
      play.then(() => setPlaying(true)).catch(() => setPlaying(false));
    }
  }, [ready, reduced]);

  const toggle = () => {
    const node = video.current;
    if (!ready) {
      playOnReady.current = true;
      setReady(true);
      return;
    }
    if (!node) return;
    if (node.paused) {
      node.muted = true;
      const play = node.play();
      if (play) play.then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else {
      node.pause();
      setPlaying(false);
    }
  };

  return (
    <div ref={box} className={className}>
      <video
        ref={video}
        className="h-full w-full bg-[#111] object-cover"
        poster={poster}
        muted
        loop
        playsInline
        autoPlay={priority && !reduced}
        preload={ready ? "metadata" : "none"}
        aria-label={title}
      >
        {ready ? <source src={src} type="video/mp4" /> : null}
      </video>
      <button
        type="button"
        onClick={toggle}
        className="absolute right-3 bottom-3 z-10 min-h-11 border border-white/50 bg-black/75 px-3 text-[0.68rem] tracking-[0.16em] text-white uppercase"
        aria-pressed={playing}
      >
        {playing ? "Pause" : "Play"}
      </button>
    </div>
  );
}
