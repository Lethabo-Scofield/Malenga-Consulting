import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Photo } from "@/components/ui/Photo";
import { TextLink } from "@/components/ui/Button";
import { services } from "@/content/services";

export function ServicesOverview() {
  return (
    <Section tone="stone" labelledBy="services-title">
      <Reveal className="max-w-3xl">
        <p className="eyebrow">What we do</p>
        <h2 id="services-title" className="display mt-5 text-[clamp(2.1rem,4.4vw,3.6rem)]">
          Five ways we put ideas to <em>work.</em>
        </h2>
        <p className="mt-6 max-w-lg text-mute">
          Each division stands on its own, and they work well together. Start with the one that matches the
          problem in front of you.
        </p>
      </Reveal>

      <div className="mt-16 space-y-16 sm:space-y-24">
        {services.map((s, i) => {
          const flip = i % 2 === 1;
          return (
            <Reveal key={s.slug}>
              <article className="group grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
                <Link
                  href={`/services/${s.slug}`}
                  aria-label={s.title}
                  tabIndex={-1}
                  className={`block lg:col-span-6 ${flip ? "lg:order-2" : ""}`}
                >
                  <Photo
                    name={s.image}
                    cut
                    sizes="(min-width: 1024px) 560px, 100vw"
                    className="aspect-[4/3] transition-transform duration-700 group-hover:scale-[1.015]"
                  />
                </Link>
                <div className={`lg:col-span-5 ${flip ? "lg:order-1 lg:col-start-2" : "lg:col-start-8"}`}>
                  <p className="eyebrow">Division {s.number}</p>
                  <h3 className="display mt-4 text-[clamp(1.7rem,2.8vw,2.4rem)] leading-tight">
                    <Link href={`/services/${s.slug}`} className="hover:text-accent">
                      {s.title}
                    </Link>
                  </h3>
                  <p className="mt-4 max-w-md text-mute">{s.short}</p>
                  <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-mute">
                    {s.offerings.slice(0, 4).map((o) => (
                      <li key={o.title} className="flex items-center gap-2">
                        <span aria-hidden="true" className="h-0.5 w-2.5 shrink-0 -skew-x-[38deg] bg-accent" />
                        {o.title}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${s.slug}`}
                    className="mt-7 inline-flex items-center gap-2 border-b border-current pb-0.5 text-sm font-medium tracking-wide hover:text-accent"
                  >
                    See the division <ArrowUpRight aria-hidden="true" className="size-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-20">
        <TextLink href="/services">Compare all five divisions</TextLink>
      </div>
    </Section>
  );
}
