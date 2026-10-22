import { Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Photo } from "@/components/ui/Photo";
import { TextLink } from "@/components/ui/Button";
import { pillars } from "@/content/company";
import { site } from "@/content/site";

export function AboutIntro() {
  return (
    <Section labelledBy="about-title">
      <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-6">
          <Photo name="warehouseWalk" cut sizes="(min-width: 1024px) 560px, 100vw" className="aspect-[5/4]" />
          <p className="mt-4 text-xs uppercase tracking-[0.14em] text-mute">On the ground, not just in the boardroom</p>
        </Reveal>

        <Reveal className="lg:col-span-5 lg:col-start-8" delay={0.08}>
          <p className="eyebrow">About Malenga</p>
          <h2 id="about-title" className="display mt-5 text-[clamp(2rem,4vw,3.25rem)]">
            We don&rsquo;t stop at the <em>report.</em>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-mute">{site.description}</p>
          <div className="mt-9 space-y-5 border-l-2 border-accent-soft pl-6">
            {pillars.map((p) => (
              <p key={p.title} className="text-mute">
                <strong className="display mr-2 text-xl font-normal text-ink">{p.title}.</strong>
                {p.description}
              </p>
            ))}
          </div>
          <div className="mt-9">
            <TextLink href="/about">More about Malenga</TextLink>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
