import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/ui/CtaBand";
import { ButtonLink } from "@/components/ui/Button";
import { serviceIcons } from "@/components/ui/icons";
import { getRelated, getService, services } from "@/content/services";
import { buildMetadata, jsonLd } from "@/lib/seo";
import { site } from "@/content/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.title,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const related = getRelated(service);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    url: `${site.url}/services/${service.slug}`,
    provider: { "@type": "ProfessionalService", name: site.name, url: site.url },
    areaServed: { "@type": "Country", name: "South Africa" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(serviceJsonLd) }} />
      <PageHero
        title={service.title}
        image={service.image}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      {/* Introduction */}
      <Section labelledBy="intro-title" className="!pb-10 sm:!pb-14">
        <Reveal className="max-w-3xl">
          <h2 id="intro-title" className="sr-only">Overview</h2>
          <p className="display text-[clamp(1.5rem,2.6vw,2.2rem)] leading-snug">{service.intro[0]}</p>
          <div className="mt-8">
            <ButtonLink href={`/contact?service=${service.slug}`}>Request a Consultation</ButtonLink>
          </div>
        </Reveal>
      </Section>

      {/* Offerings */}
      <Section tone="stone" labelledBy="offerings-title">
        <h2 id="offerings-title" className="display text-[clamp(1.8rem,3.6vw,3rem)]">What we offer</h2>
        <ul className="mt-10 grid gap-x-16 border-t border-ink md:grid-cols-2">
          {service.offerings.map((o) => (
            <li key={o.title} className="border-b border-line py-6">
              <Reveal>
                <h3 className="display text-xl">{o.title}</h3>
                <p className="mt-1.5 text-mute">{o.description}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      {/* Challenges + Support */}
      <Section labelledBy="challenges-title">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <h2 id="challenges-title" className="display text-[clamp(1.6rem,3vw,2.5rem)]">Challenges we help with</h2>
            <ul className="mt-8 border-t border-ink">
              {service.challenges.map((c) => (
                <li key={c} className="flex gap-4 border-b border-line py-4 text-mute">
                  <span aria-hidden="true" className="mt-2.5 h-0.5 w-3 shrink-0 -skew-x-[38deg] bg-accent" />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display text-[clamp(1.6rem,3vw,2.5rem)]">How we support you</h2>
            <ol className="mt-8 border-t border-ink">
              {service.support.map((s, i) => (
                <li key={s.title} className="grid grid-cols-[2.5rem_1fr] border-b border-line py-4">
                  <span className="display text-lg tabular-nums text-accent">{i + 1}</span>
                  <span className="font-medium">{s.title}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </Section>

      {/* Audiences */}
      <Section tone="ink" labelledBy="audiences-title" className="!py-16 sm:!py-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.6fr] lg:gap-24">
          <h2 id="audiences-title" className="display text-[clamp(1.6rem,3vw,2.5rem)]">Who it&rsquo;s for</h2>
          <ul className="flex flex-wrap gap-3">
            {service.audiences.map((a) => (
              <li key={a} className="border border-line-dark px-4 py-2.5 text-sm">{a}</li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Related */}
      <Section labelledBy="related-title" className="!py-16 sm:!py-20">
        <h2 id="related-title" className="display text-[clamp(1.6rem,3vw,2.5rem)]">Related services</h2>
        <ul className="mt-8 grid border-t border-ink md:grid-cols-3">
          {related.map((r) => {
            const Icon = serviceIcons[r.slug];
            return (
              <li key={r.slug} className="border-b border-line md:border-b-0 md:border-r md:last:border-r-0">
                <Link href={`/services/${r.slug}`} className="group flex h-full items-start gap-4 p-6 transition-colors hover:bg-stone md:p-8">
                  <Icon aria-hidden="true" className="mt-1 size-6 shrink-0 text-accent" />
                  <span className="display flex-1 text-xl leading-snug">{r.title}</span>
                  <ArrowUpRight aria-hidden="true" className="size-5 shrink-0 text-mute transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </li>
            );
          })}
        </ul>
      </Section>

      <CtaBand
        serviceSlug={service.slug}
        title={`Discuss ${service.title.replace(/ Consulting$/, "").replace(/ Solutions$/, "")}`}
      />
    </>
  );
}
