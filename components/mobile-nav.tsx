"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const links = [
  { href: "#shapes", label: "Shapes" },
  { href: "#services", label: "Services" },
  { href: "#reels", label: "Reels" },
  { href: "#gallery", label: "Gallery" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "Studio" },
  { href: "#reviews", label: "Reviews" },
  { href: "#instagram", label: "Instagram" },
  { href: "#order", label: "Book" },
  { href: "#faq", label: "Questions" },
  { href: "#contact", label: "Visit" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((value) => !value)}
        className="min-h-11 border border-line px-3 text-[0.68rem] tracking-[0.16em] text-ink uppercase"
      >
        {open ? "Close" : "Menu"}
      </button>
      {open
        ? createPortal(
            <nav id="mobile-nav" aria-label="Mobile" className="fixed inset-0 z-[70] overflow-y-auto bg-bg px-6 pt-6 pb-16">
              <div className="mb-4 flex justify-end">
                <button type="button" onClick={() => setOpen(false)} className="min-h-11 border border-line px-3 text-[0.68rem] tracking-[0.16em] uppercase">
                  Close
                </button>
              </div>
              <ul className="grid">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block border-b border-line py-3 font-display text-[2.15rem] leading-none text-ink"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>,
            document.body,
          )
        : null}
    </div>
  );
}
