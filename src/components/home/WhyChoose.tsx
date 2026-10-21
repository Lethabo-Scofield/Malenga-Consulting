import { Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { whyMalenga } from "@/content/company";

export function WhyChoose() {
  return (
    <Section labelledBy="why-title">
      <Reveal className="max-w-3xl">
        <p className="eyebrow">Why Malenga</p>
        <h2 id="why-title" className="display mt-5 text-[clamp(2rem,4.2vw,3.5rem)]">
          Why organisations choose to work with us.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-x-16 gap-y-0 border-t border-ink md:grid-cols-2">
        {whyMalenga.map((item, i) => (
          <Reveal key={item.title} delay={(i % 2) * 0.06}>
            <article className="border-b border-line py-9">
              <p className="text-xs tabular-nums text-accent">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="display mt-3 text-2xl">{item.title}</h3>
              <p className="mt-3 max-w-md text-mute">{item.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
