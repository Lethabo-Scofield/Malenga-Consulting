import { Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/Button";
import { pillars } from "@/content/company";
import { site } from "@/content/site";

export function AboutIntro() {
  return (
    <Section labelledBy="about-title">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <p className="eyebrow">About Malenga</p>
          <h2 id="about-title" className="display mt-5 text-[clamp(2rem,4.2vw,3.5rem)]">
            Advice that goes beyond the report.
          </h2>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-mute">
            {site.description} We work with clients from first idea to working result, bringing strategy,
            innovation and implementation together.
          </p>
          <div className="mt-8">
            <TextLink href="/about">More about Malenga</TextLink>
          </div>
        </Reveal>

        <dl className="border-t border-ink">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <div className="grid gap-2 border-b border-line py-8 sm:grid-cols-[13rem_1fr] sm:gap-8">
                <dt className="display text-3xl">{p.title}</dt>
                <dd className="text-mute">{p.description}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </Section>
  );
}
