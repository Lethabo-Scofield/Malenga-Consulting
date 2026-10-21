import { Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { industries } from "@/content/company";

export function IndustriesSection() {
  return (
    <Section tone="ink" labelledBy="industries-title">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow">Industries we serve</p>
          <h2 id="industries-title" className="display mt-5 text-[clamp(2rem,4vw,3.25rem)]">
            Across sectors, for organisations of every size.
          </h2>
          <p className="mt-6 max-w-sm text-mute-dark">
            Our multidisciplinary capability applies wherever organisations need clearer direction, stronger
            operations or better systems.
          </p>
          <div className="mt-8">
            <ButtonLink href="/industries" variant="outlineLight">
              See how we support each sector
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="grid border-l border-t border-line-dark sm:grid-cols-2">
            {industries.map((ind, i) => (
              <li
                key={ind.name}
                className="flex items-baseline gap-4 border-b border-r border-line-dark px-5 py-5 transition-colors hover:bg-charcoal sm:px-6"
              >
                <span className="text-xs tabular-nums text-accent-soft">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-[0.95rem]">{ind.name}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
