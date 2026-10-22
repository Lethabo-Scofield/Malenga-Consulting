import Link from "next/link";
import { Mail, MapPin, Phone, Smartphone } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/ui/CtaBand";
import { DraftTag } from "@/components/ui/DraftTag";
import { aboutDraft, pillars, values } from "@/content/company";
import { mapHref, site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Us",
  description:
    "Learn about Malenga Consulting, a South African multidisciplinary consulting company combining strategy, innovation and implementation.",
  path: "/about",
});

export default function AboutPage() {
  const { contact } = site;
  return (
    <>
      <PageHero
        eyebrow="About Malenga Consulting"
        title={<>Turning ideas into reality through strategy, innovation and <em>implementation.</em></>}
        image="sandton"
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Overview */}
      <Section labelledBy="overview-title">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
          <Reveal>
            <h2 id="overview-title" className="display text-[clamp(1.8rem,3.4vw,2.75rem)]">Company overview</h2>
            <div className="mt-5"><DraftTag /></div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="prose-copy space-y-0 text-lg leading-relaxed text-mute">
              {aboutDraft.overview.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <p>
                Explore our{" "}
                <Link href="/services" className="text-ink underline underline-offset-4 hover:text-accent">
                  five service divisions
                </Link>{" "}
                or the{" "}
                <Link href="/industries" className="text-ink underline underline-offset-4 hover:text-accent">
                  industries we support
                </Link>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Vision & mission */}
      <Section tone="ink" labelledBy="vm-title">
        <h2 id="vm-title" className="sr-only">Vision and mission</h2>
        <div className="grid gap-14 md:grid-cols-2 md:gap-20">
          {[
            { label: "Our vision", text: aboutDraft.vision },
            { label: "Our mission", text: aboutDraft.mission },
          ].map((b, i) => (
            <Reveal key={b.label} delay={i * 0.08}>
              <p className="eyebrow">{b.label}</p>
              <p className="display mt-5 text-[clamp(1.5rem,2.8vw,2.25rem)] leading-snug">{b.text}</p>
              <div className="mt-6 text-mute-dark"><DraftTag /></div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section labelledBy="values-title">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">What guides us</p>
          <h2 id="values-title" className="display mt-5 text-[clamp(2rem,4vw,3.25rem)]">Core values</h2>
        </Reveal>
        <ul className="mt-14 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <li key={v.title} className="border-b border-r border-line p-7 sm:p-9">
              <Reveal delay={(i % 3) * 0.05}>
                <p className="text-xs tabular-nums text-accent">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="display mt-3 text-2xl">{v.title}</h3>
                <p className="mt-3 text-mute">{v.description}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      {/* Philosophy */}
      <Section tone="stone" labelledBy="philosophy-title">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
          <Reveal>
            <h2 id="philosophy-title" className="display text-[clamp(1.8rem,3.4vw,2.75rem)]">Consulting philosophy</h2>
            <div className="mt-5"><DraftTag /></div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="prose-copy text-lg leading-relaxed text-mute">
              {aboutDraft.philosophy.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <dl className="mt-10 border-t border-ink">
              {pillars.map((p) => (
                <div key={p.title} className="grid gap-1 border-b border-line py-5 sm:grid-cols-[13rem_1fr] sm:gap-6">
                  <dt className="display text-2xl">{p.title}</dt>
                  <dd className="text-mute">{p.description}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Section>

      {/* Objectives */}
      <Section labelledBy="objectives-title">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
          <Reveal>
            <h2 id="objectives-title" className="display text-[clamp(1.8rem,3.4vw,2.75rem)]">Strategic objectives</h2>
            <div className="mt-5"><DraftTag /></div>
          </Reveal>
          <ol className="border-t border-ink">
            {aboutDraft.objectives.map((o, i) => (
              <li key={o} className="grid grid-cols-[3rem_1fr] border-b border-line py-6">
                <span className="display text-xl tabular-nums text-accent">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-lg">{o}</span>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* Contact */}
      <Section tone="stone" labelledBy="about-contact-title">
        <Reveal>
          <h2 id="about-contact-title" className="display text-[clamp(1.8rem,3.4vw,2.75rem)]">Company contact information</h2>
          <ul className="mt-12 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            <li>
              <Mail aria-hidden="true" className="size-5 text-accent" />
              <p className="mt-3 text-xs uppercase tracking-[0.14em] text-mute">Email</p>
              <a className="mt-1 block break-words hover:text-accent" href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <Phone aria-hidden="true" className="size-5 text-accent" />
              <p className="mt-3 text-xs uppercase tracking-[0.14em] text-mute">Telephone</p>
              <a className="mt-1 block hover:text-accent" href={`tel:${contact.telephone.href}`}>{contact.telephone.display}</a>
            </li>
            <li>
              <Smartphone aria-hidden="true" className="size-5 text-accent" />
              <p className="mt-3 text-xs uppercase tracking-[0.14em] text-mute">Mobile</p>
              <a className="mt-1 block hover:text-accent" href={`tel:${contact.mobile.href}`}>{contact.mobile.display}</a>
            </li>
            <li>
              <MapPin aria-hidden="true" className="size-5 text-accent" />
              <p className="mt-3 text-xs uppercase tracking-[0.14em] text-mute">Address</p>
              <a className="mt-1 block hover:text-accent" href={mapHref} target="_blank" rel="noopener noreferrer">
                {contact.address.lines.map((l) => (
                  <span key={l} className="block">{l}</span>
                ))}
              </a>
            </li>
          </ul>
        </Reveal>
      </Section>

      <CtaBand />
    </>
  );
}
