import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/ui/CtaBand";
import { services } from "@/content/services";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Five consulting divisions from Malenga Consulting: transport and supply chain, startup and business development, IT and software, strategy and marketing, and workshops, coaching and mentorship.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Five consulting divisions, built around implementation."
        intro="Each division combines advisory with hands-on support. Select a division to see the services we offer, the challenges we help with and how we work."
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <Section className="!pt-8 sm:!pt-12">
        <div className="space-y-0">
          {services.map((s, i) => (
            <Reveal key={s.slug}>
              <article className="grid gap-8 border-t border-ink py-12 lg:grid-cols-[6rem_1.1fr_1fr] lg:gap-12 lg:py-16">
                <p className="display text-4xl tabular-nums text-accent">{s.number}</p>
                <div>
                  <h2 className="display text-[clamp(1.6rem,3vw,2.5rem)]">
                    <Link href={`/services/${s.slug}`} className="hover:text-accent">
                      {s.title}
                    </Link>
                  </h2>
                  <p className="mt-5 max-w-lg text-mute">{s.intro[0]}</p>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group mt-7 inline-flex items-center gap-2 border-b border-current pb-0.5 text-sm font-medium tracking-wide hover:text-accent"
                    aria-label={`View ${s.title}`}
                  >
                    View division
                    <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
                <ul className={`grid content-start gap-x-8 text-[0.95rem] sm:grid-cols-2 ${i % 2 ? "" : ""}`}>
                  {s.offerings.map((o) => (
                    <li key={o.title} className="border-b border-line py-2.5">
                      {o.title}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand title="Not sure which division fits?" text="Describe what you are trying to achieve and we will help identify the right starting point." />
    </>
  );
}
