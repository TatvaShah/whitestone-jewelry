import { BookPanel } from "@/components/book-panel";
import { SectionHead } from "@/components/media";
import { site } from "@/lib/site";

export function Order() {
  const order = site.order;
  return (
    <section id="order" className="scroll-mt-24">
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHead eyebrow={order.label ?? "Book"} title={order.title ?? "Book an appointment"} intro={order.intro} />
        <BookPanel />
      </div>
    </section>
  );
}
