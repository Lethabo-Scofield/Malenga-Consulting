import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/Button";
import { services } from "@/content/services";

export function ServicesOverview() {
  return (
    <Section tone="stone" labelledBy="services-title">
      <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <p className="eyebrow">What we do</p>
          <h2 id="services-title" className="display mt-5 text-[clamp(2rem,4vw,3.25rem)]">
            Five divisions, one practical approach.
          </h2>
          <p className="mt-6 max-w-sm text-mute">
            From supply chains to software, from first-time founders to leadership teams, each division is
            built around turning plans into working results.
          </p>
          <div className="mt-8">
            <TextLink href="/services">View all services</TextLink>
          </div>
        </Reveal>

        <ul className="border-t border-line">
          {services.map((s, i) => (
            <li key={s.slug} className="border-b border-line">
              <Reveal delay={i * 0.04}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group grid grid-cols-[auto_1fr_auto] items-start gap-x-6 gap-y-3 py-8 sm:gap-x-10 sm:py-10"
                >
                  <span className="display text-xl tabular-nums text-accent">{s.number}</span>
                  <span>
                    <span className="display block text-[clamp(1.35rem,2.4vw,1.9rem)] leading-tight transition-transform duration-300 group-hover:translate-x-1.5">
                      {s.title}
                    </span>
                    <span className="mt-3 block max-w-xl text-mute">{s.short}</span>
                    <span className="mt-4 block text-xs uppercase tracking-[0.14em] text-mute">
                      {s.offerings.length} service areas
                    </span>
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="mt-1.5 size-5 text-mute transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                  />
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
