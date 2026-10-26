import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/ui/CtaBand";
import { serviceIcons } from "@/components/ui/icons";
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
        title={<>Five divisions, built around <em>implementation.</em></>}
        image="port"
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <Section className="!pt-8 sm:!pt-12">
        {services.map((s) => {
          const Icon = serviceIcons[s.slug];
          return (
            <Reveal key={s.slug}>
              <article className="grid gap-8 border-t border-ink py-12 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:py-14">
                <div className="flex items-start gap-5">
                  <span className="flex size-12 shrink-0 items-center justify-center bg-ink text-accent-soft">
                    <Icon aria-hidden="true" className="size-6" />
                  </span>
                  <div>
                    <h2 className="display text-[clamp(1.6rem,2.8vw,2.3rem)] leading-tight">
                      <Link href={`/services/${s.slug}`} className="hover:text-accent">{s.title}</Link>
                    </h2>
                    <Link
                      href={`/services/${s.slug}`}
                      aria-label={`View ${s.title}`}
                      className="group mt-5 inline-flex items-center gap-2 border-b border-current pb-0.5 text-sm font-medium tracking-wide hover:text-accent"
                    >
                      View division
                      <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
                <ul className="grid content-start gap-x-8 text-[0.95rem] sm:grid-cols-2">
                  {s.offerings.map((o) => (
                    <li key={o.title} className="border-b border-line py-2.5">{o.title}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </Section>

      <CtaBand title="Not sure which division fits?" />
    </>
  );
}
