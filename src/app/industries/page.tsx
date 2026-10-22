import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/ui/CtaBand";
import { industryIcons, serviceIcons } from "@/components/ui/icons";
import { industries } from "@/content/company";
import { getService } from "@/content/services";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Industries",
  description:
    "How Malenga Consulting’s advisory, implementation and technology capabilities apply to logistics, retail, manufacturing, SMEs, startups, education, public sector, non-profits, technology and professional services.",
  path: "/industries",
});

const shortName = (title: string) => title.replace(/ Consulting$/, "").replace(/ Solutions$/, "");

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={<>Capabilities that apply across <em>sectors.</em></>}
        image="truckYard"
        intro="Our multidisciplinary approach lets us support a wide range of organisations. Find your sector below to see how our capabilities may apply."
        crumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]}
      />

      {/* Quick jump */}
      <Section tone="stone" labelledBy="find-title" className="!py-14 sm:!py-20">
        <h2 id="find-title" className="display text-[clamp(1.5rem,2.6vw,2.1rem)]">Find your sector</h2>
        <ul className="mt-8 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-3 lg:grid-cols-5">
          {industries.map((ind) => {
            const Icon = industryIcons[ind.slug];
            return (
              <li key={ind.slug} className="bg-stone">
                <a
                  href={`#${ind.slug}`}
                  className="group flex h-full flex-col gap-4 p-5 transition-colors hover:bg-ink hover:text-paper sm:p-6"
                >
                  <Icon aria-hidden="true" className="size-7 text-accent transition-colors group-hover:text-accent-soft" />
                  <span className="text-sm font-medium leading-snug">{ind.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </Section>

      {/* Detail */}
      <Section labelledBy="detail-title" className="!pt-8 sm:!pt-12">
        <h2 id="detail-title" className="sr-only">How we support each sector</h2>
        <div>
          {industries.map((ind) => {
            const Icon = industryIcons[ind.slug];
            return (
              <Reveal key={ind.slug}>
                <article
                  id={ind.slug}
                  className="grid gap-8 border-t border-ink py-12 lg:grid-cols-12 lg:gap-12 lg:py-16"
                >
                  <div className="flex items-start gap-5 lg:col-span-4">
                    <span className="flex size-14 shrink-0 items-center justify-center bg-ink text-accent-soft">
                      <Icon aria-hidden="true" className="size-7" />
                    </span>
                    <h3 className="display text-[clamp(1.6rem,2.4vw,2.1rem)] leading-tight">{ind.name}</h3>
                  </div>

                  <div className="lg:col-span-8">
                    <p className="max-w-2xl text-lg leading-relaxed text-mute">{ind.description}</p>

                    <div className="mt-8 grid gap-8 md:grid-cols-2">
                      <div>
                        <p className="eyebrow">Where we can help</p>
                        <ul className="mt-4 space-y-3">
                          {ind.help.map((h) => (
                            <li key={h} className="flex gap-3">
                              <span aria-hidden="true" className="mt-2.5 h-0.5 w-3 shrink-0 -skew-x-[38deg] bg-accent" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="eyebrow">Relevant divisions</p>
                        <ul className="mt-4 space-y-2">
                          {ind.services.map((slug) => {
                            const s = getService(slug);
                            if (!s) return null;
                            const SIcon = serviceIcons[slug];
                            return (
                              <li key={slug}>
                                <Link
                                  href={`/services/${slug}`}
                                  className="group flex items-center gap-3 border border-line px-4 py-3 transition-colors hover:border-ink hover:bg-ink hover:text-paper"
                                >
                                  <SIcon aria-hidden="true" className="size-5 shrink-0 text-accent group-hover:text-accent-soft" />
                                  <span className="flex-1 text-sm font-medium">{shortName(s.title)}</span>
                                  <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <CtaBand
        title="Working in a sector not listed?"
        text="We work with many kinds of organisations. Tell us about yours and we will talk through how we can help."
      />
    </>
  );
}
