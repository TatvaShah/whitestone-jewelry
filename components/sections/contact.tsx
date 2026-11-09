import { SectionHead } from "@/components/media";
import { has, igHandle, igUrl, site } from "@/lib/site";

// Only facts from the lead or the IG profile. Never invent hours or addresses.
export function Contact() {
  const c = site.contact;
  if (!c) return null;
  const area = c.area ?? site.area;
  const any = area || c.address || has(c.hours) || c.phone || c.email;
  if (!any) return null;
  return (
    <section id="contact" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
      <SectionHead eyebrow="Find us" title={site.contact?.title ?? "Contact and pickup"} />
      <div className={`mt-10 grid gap-8 ${c.address ? "md:grid-cols-2" : ""}`}>
        <dl data-stagger className="grid content-start gap-6">
          {area ? (
            <div>
              <dt className="eyebrow">Area</dt>
              <dd className="mt-1">{area}</dd>
            </div>
          ) : null}
          {c.address ? (
            <div>
              <dt className="eyebrow">Address</dt>
              <dd className="mt-1">{c.address}</dd>
            </div>
          ) : null}
          {has(c.hours) ? (
            <div>
              <dt className="eyebrow">Hours</dt>
              <dd className="mt-1 grid gap-1">
                {c.hours.map((h) => (
                  <p key={h.days}>
                    <span className="font-medium text-ink">{h.days}</span> {h.time}
                  </p>
                ))}
              </dd>
            </div>
          ) : (
            <div>
              <dt className="eyebrow">Hours</dt>
              <dd className="placeholder-note mt-2">
                <strong>Placeholder. </strong>
                Opening hours are not published on Google Maps. Facebook About shows Always open, which this demo does not treat as confirmed hours.
              </dd>
            </div>
          )}
          {c.note ? (
            <div>
              <dt className="eyebrow">Confirm</dt>
              <dd className="placeholder-note mt-2">
                <strong>Placeholder. </strong>
                {c.note}
              </dd>
            </div>
          ) : null}
          <div>
            <dt className="eyebrow">Reach out</dt>
            <dd className="mt-1 grid gap-1">
              <a href={igUrl} className="hover:text-accent">
                Instagram @{igHandle}
              </a>
              {c.phone ? (
                <a href={`tel:${c.phone.replace(/[^+\d]/g, "")}`} className="hover:text-accent">
                  {c.phone}
                </a>
              ) : null}
              {c.email ? (
                <a href={`mailto:${c.email}`} className="hover:text-accent">
                  {c.email}
                </a>
              ) : null}
              {c.socials?.map((social) => (
                <a key={social.href} href={social.href} className="hover:text-accent">
                  {social.label}
                </a>
              ))}
            </dd>
          </div>
        </dl>
        {c.address ? (
          <iframe
            title={`Map to ${site.name}`}
            src={`https://www.google.com/maps?q=${encodeURIComponent(c.address)}&output=embed`}
            loading="lazy"
            data-reveal className="h-80 w-full rounded-card border border-line md:h-full md:min-h-80"
          />
        ) : null}
      </div>
    </section>
  );
}
