import { Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Photo } from "@/components/ui/Photo";
import { ButtonLink } from "@/components/ui/Button";
import { industries } from "@/content/company";

export function IndustriesSection() {
  return (
    <Section tone="ink" labelledBy="industries-title">
      <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <h2 id="industries-title" className="display text-[clamp(2rem,4vw,3.4rem)]">
            From the loading dock to the <em>boardroom.</em>
          </h2>
          <ul className="mt-8 grid gap-x-6 gap-y-3 text-[0.95rem] sm:grid-cols-2">
            {industries.map((ind) => (
              <li key={ind.name} className="flex gap-3">
                <span aria-hidden="true" className="mt-2.5 h-0.5 w-3 shrink-0 -skew-x-[38deg] bg-accent-soft" />
                {ind.name}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <ButtonLink href="/industries" variant="outlineLight">
              How we support each sector
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.1}>
          <Photo name="truckYard" cut tint={false} sizes="(min-width: 1024px) 560px, 100vw" className="aspect-square" />
        </Reveal>
      </div>
    </Section>
  );
}
