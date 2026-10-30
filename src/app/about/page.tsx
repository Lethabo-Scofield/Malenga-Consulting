import { Mail, MapPin, Phone, Smartphone } from "lucide-react";
import { Team } from "@/components/about/Team";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/ui/CtaBand";
import { aboutContent, values } from "@/content/company";
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
        title={<>Turning ideas into reality through strategy, innovation and <em>implementation.</em></>}
        image="sandton"
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Overview */}
      <Section labelledBy="overview-title">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-24">
          <Reveal>
            <h2 id="overview-title" className="display text-[clamp(1.8rem,3.4vw,2.75rem)]">Who we are</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="display text-[clamp(1.4rem,2.4vw,2rem)] leading-snug">{aboutContent.overview[0]}</p>
          </Reveal>
        </div>
      </Section>

      <Team />

      {/* Vision & mission */}
      <Section tone="ink" labelledBy="vm-title">
        <h2 id="vm-title" className="sr-only">Vision and mission</h2>
        <div className="grid gap-14 md:grid-cols-2 md:gap-20">
          {[
            { label: "Vision", text: aboutContent.vision },
            { label: "Mission", text: aboutContent.mission },
          ].map((b, i) => (
            <Reveal key={b.label} delay={i * 0.08}>
              <h3 className="eyebrow">{b.label}</h3>
              <p className="display mt-5 text-[clamp(1.5rem,2.8vw,2.25rem)] leading-snug">{b.text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section labelledBy="values-title">
        <h2 id="values-title" className="display text-[clamp(2rem,4vw,3.25rem)]">Core values</h2>
        <ul className="mt-12 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <li key={v.title} className="border-b border-r border-line p-7 sm:p-9">
              <Reveal>
                <h3 className="display text-2xl">{v.title}</h3>
                <p className="mt-2 text-mute">{v.description}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      {/* Philosophy + objectives */}
      <Section tone="stone" labelledBy="philosophy-title">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <h2 id="philosophy-title" className="display text-[clamp(1.8rem,3.4vw,2.75rem)]">Consulting philosophy</h2>
            <p className="mt-8 text-lg leading-relaxed text-mute">{aboutContent.philosophy[0]}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display text-[clamp(1.8rem,3.4vw,2.75rem)]">Strategic objectives</h2>
            <ol className="mt-8 border-t border-ink">
              {aboutContent.objectives.map((o, i) => (
                <li key={o} className="grid grid-cols-[2.5rem_1fr] border-b border-line py-4">
                  <span className="display text-lg tabular-nums text-accent">{i + 1}</span>
                  <span>{o}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </Section>

      {/* Contact */}
      <Section labelledBy="about-contact-title" className="!py-16 sm:!py-20">
        <h2 id="about-contact-title" className="sr-only">Company contact information</h2>
        <ul className="grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          <li>
            <Mail aria-hidden="true" className="size-5 text-accent" />
            <a className="mt-3 block break-words hover:text-accent" href={`mailto:${contact.email}`}>{contact.email}</a>
          </li>
          <li>
            <Phone aria-hidden="true" className="size-5 text-accent" />
            <a className="mt-3 block hover:text-accent" href={`tel:${contact.telephone.href}`}>{contact.telephone.display}</a>
          </li>
          <li>
            <Smartphone aria-hidden="true" className="size-5 text-accent" />
            <a className="mt-3 block hover:text-accent" href={`tel:${contact.mobile.href}`}>{contact.mobile.display}</a>
          </li>
          <li>
            <MapPin aria-hidden="true" className="size-5 text-accent" />
            <a className="mt-3 block hover:text-accent" href={mapHref} target="_blank" rel="noopener noreferrer">
              {contact.address.lines.map((l) => (
                <span key={l} className="block">{l}</span>
              ))}
            </a>
          </li>
        </ul>
      </Section>

      <CtaBand />
    </>
  );
}
