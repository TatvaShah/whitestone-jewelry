import Image from "next/image";
import Link from "next/link";
import { MobileNav } from "@/components/mobile-nav";
import { site } from "@/lib/site";

const nav = [
  { href: "#shapes", label: "Shapes" },
  { href: "#services", label: "Services" },
  { href: "#reels", label: "Reels" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#order", label: "Book" },
];

export function SiteHeader() {
  const whatsapp = site.order.links?.[0];
  return (
    <header className="site-header sticky top-0 z-40 border-b border-transparent bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 md:px-8">
        <Link href="/" aria-label="Whitestone Jewelry home" className="block bg-white">
          {site.logo ? (
            <Image
              src={site.logo}
              alt=""
              width={720}
              height={720}
              priority
              className="h-12 w-auto max-w-[9.2rem] object-contain sm:h-[3.6rem] sm:max-w-[11.5rem]"
            />
          ) : (
            <span className="wordmark text-2xl text-ink">{site.name}</span>
          )}
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
          {nav.map((link) => (
            <a key={link.href} href={link.href} className="uline text-[0.72rem] tracking-[0.16em] text-muted uppercase hover:text-ink">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          {whatsapp ? (
            <a href={whatsapp.href} className="btn btn-primary min-h-11 !px-3 !py-2 text-[0.72rem] tracking-[0.12em] uppercase" data-magnetic="0.12">
              WhatsApp
            </a>
          ) : null}
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
