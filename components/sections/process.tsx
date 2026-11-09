import { SectionHead } from "@/components/media";
import { site } from "@/lib/site";

export function Process() {
  const steps = site.order.steps;
  if (!steps?.length) return null;
  return (
    <section id="process" className="scroll-mt-24 bg-soft">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHead
          eyebrow="Process"
          title="From a message to the piece"
          intro="The path the studio describes in its own captions, plus what clients have written about timing."
        />
        <ol className="mt-12 grid gap-0 border-t border-line">
          {steps.map((step, index) => (
            <li key={step} data-reveal className="grid gap-4 border-b border-line py-8 md:grid-cols-[8rem_1fr] md:py-10">
              <span className="font-display text-4xl text-[#6f5344]">{String(index + 1).padStart(2, "0")}</span>
              <p className="max-w-3xl text-base leading-8 sm:text-lg">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
