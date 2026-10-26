import { Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Photo } from "@/components/ui/Photo";
import { TextLink } from "@/components/ui/Button";
import { pillars } from "@/content/company";

export function AboutIntro() {
  return (
    <Section labelledBy="about-title">
      <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-6">
          <Photo name="warehouseWalk" cut sizes="(min-width: 1024px) 560px, 100vw" className="aspect-[5/4]" />
        </Reveal>

        <Reveal className="lg:col-span-5 lg:col-start-8" delay={0.08}>
          <h2 id="about-title" className="display text-[clamp(2rem,4vw,3.25rem)]">
            We don&rsquo;t stop at the <em>report.</em>
          </h2>
          <ul className="mt-9 space-y-4 border-l-2 border-accent-soft pl-6">
            {pillars.map((p) => (
              <li key={p.title} className="display text-2xl">{p.title}</li>
            ))}
          </ul>
          <div className="mt-9">
            <TextLink href="/about">More about Malenga</TextLink>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
