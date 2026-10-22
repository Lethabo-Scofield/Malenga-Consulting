import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/ui/CtaBand";
import { ButtonLink } from "@/components/ui/Button";
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
        eyebrow={`Division ${service.number}`}
        title={service.title}
        image={service.image}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      {/* Introduction */}
      <Section labelledBy="intro-title">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
          <Reveal>
            <h2 id="intro-title" className="display text-[clamp(1.8rem,3.4vw,2.75rem)]">Overview</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="prose-copy text-lg leading-relaxed text-mute">
              {service.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="mt-8">
              <ButtonLink href={`/contact?service=${service.slug}`}>Request a Consultation</ButtonLink>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Offerings */}
      <Section tone="stone" labelledBy="offerings-title">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">What we offer</p>
          <h2 id="offerings-title" className="display mt-5 text-[clamp(1.8rem,3.6vw,3rem)]">Service offerings</h2>
        </Reveal>
        <ul className="mt-12 grid gap-x-16 border-t border-ink md:grid-cols-2">
          {service.offerings.map((o, i) => (
            <li key={o.title} className="border-b border-line py-7">
              <Reveal delay={(i % 2) * 0.05}>
                <div className="flex gap-5">
                  <span className="pt-1 text-xs tabular-nums text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="display text-xl">{o.title}</h3>
                    <p className="mt-2 text-mute">{o.description}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      {/* Challenges + Support */}
      <Section labelledBy="challenges-title">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <h2 id="challenges-title" className="display text-[clamp(1.6rem,3vw,2.5rem)]">Business challenges we help with</h2>
            <ul className="mt-8 border-t border-ink">
              {service.challenges.map((c) => (
                <li key={c} className="flex gap-4 border-b border-line py-4 text-mute">
                  <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 bg-accent" />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display text-[clamp(1.6rem,3vw,2.5rem)]">How Malenga can support you</h2>
            <ol className="mt-8 border-t border-ink">
              {service.support.map((s, i) => (
                <li key={s.title} className="grid grid-cols-[2.5rem_1fr] border-b border-line py-5">
                  <span className="display text-lg tabular-nums text-accent">{i + 1}</span>
                  <div>
                    <h3 className="font-medium">{s.title}</h3>
                    <p className="mt-1 text-mute">{s.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </Section>

      {/* Audiences */}
      <Section tone="ink" labelledBy="audiences-title">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
          <Reveal>
            <p className="eyebrow">Who it is for</p>
            <h2 id="audiences-title" className="display mt-5 text-[clamp(1.8rem,3.4vw,2.75rem)]">Suited to these audiences</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <ul className="flex flex-wrap gap-3">
              {service.audiences.map((a) => (
                <li key={a} className="border border-line-dark px-4 py-2.5 text-sm">{a}</li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-mute-dark">
              See all{" "}
              <Link href="/industries" className="underline underline-offset-4 hover:text-paper">industries we serve</Link>.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Related */}
      <Section labelledBy="related-title">
        <Reveal>
          <h2 id="related-title" className="display text-[clamp(1.6rem,3vw,2.5rem)]">Related services</h2>
        </Reveal>
        <ul className="mt-10 grid border-t border-ink md:grid-cols-3">
          {related.map((r) => (
            <li key={r.slug} className="border-b border-line md:border-b-0 md:border-r md:last:border-r-0">
              <Link href={`/services/${r.slug}`} className="group flex h-full flex-col justify-between gap-8 p-6 transition-colors hover:bg-stone md:p-8">
                <span>
                  <span className="text-xs tabular-nums text-accent">{r.number}</span>
                  <span className="display mt-2 block text-xl leading-snug">{r.title}</span>
                </span>
                <ArrowUpRight aria-hidden="true" className="size-5 text-mute transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand
        serviceSlug={service.slug}
        title={`Discuss ${service.title.replace(/ Consulting$/, "").replace(/ Solutions$/, "")}`}
        text="Tell us about your situation and goals. We will respond to discuss how we can support you."
      />
    </>
  );
}
