import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/ui/CtaBand";
import { industries } from "@/content/company";
import { getService } from "@/content/services";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Industries",
  description:
    "How Malenga Consulting’s advisory, implementation and technology capabilities apply to logistics, retail, manufacturing, SMEs, startups, education, public sector, non-profits, technology and professional services.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Capabilities that apply across sectors."
        intro="Our multidisciplinary approach allows us to support a wide range of organisations. Below is how our capabilities may apply to each sector."
        crumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]}
      />

      <Section className="!pt-8 sm:!pt-12">
        <ul className="border-b border-line">
          {industries.map((ind, i) => (
            <li key={ind.name} className="border-t border-line">
              <Reveal>
                <div className="grid gap-4 py-9 md:grid-cols-[4rem_1fr_1.3fr_1fr] md:gap-10">
                  <span className="display text-xl tabular-nums text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <h2 className="display text-[clamp(1.4rem,2.2vw,1.8rem)] leading-tight">{ind.name}</h2>
                  <p className="text-mute">{ind.description}</p>
                  <ul className="flex flex-wrap content-start gap-x-4 gap-y-1 text-sm md:justify-end">
                    {ind.services.map((slug) => {
                      const s = getService(slug);
                      if (!s) return null;
                      return (
                        <li key={slug}>
                          <Link href={`/services/${slug}`} className="underline underline-offset-4 hover:text-accent">
                            {s.title.replace(/ Consulting$/, "").replace(/ Solutions$/, "")}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand title="Working in a sector not listed?" text="We work with many kinds of organisations. Tell us about yours and we will discuss how we can help." />
    </>
  );
}
