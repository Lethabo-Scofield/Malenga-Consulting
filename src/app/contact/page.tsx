import { Mail, MapPin, MessageCircle, Phone, Smartphone } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { mapHref, site, whatsappHref } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact Malenga Consulting in Sandton to request a consultation. Email, telephone, WhatsApp or send an enquiry online.",
  path: "/contact",
});

export default async function ContactPage({ searchParams }: PageProps<"/contact">) {
  const params = await searchParams;
  const service = typeof params.service === "string" ? params.service : undefined;
  const { contact } = site;

  const rows = [
    { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { icon: Phone, label: "Telephone", value: contact.telephone.display, href: `tel:${contact.telephone.href}` },
    { icon: Smartphone, label: "Mobile", value: contact.mobile.display, href: `tel:${contact.mobile.href}` },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request a consultation."
        intro="Tell us about your organisation and what you are working towards. We will respond to discuss how we can help."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <Section className="!pt-14 sm:!pt-20">
        <div className="grid gap-16 lg:grid-cols-[1.25fr_1fr] lg:gap-24">
          <div>
            <h2 className="display text-[clamp(1.6rem,3vw,2.25rem)]">Send an enquiry</h2>
            <p className="mt-3 text-mute">Fields marked optional can be left blank.</p>
            <div className="mt-10">
              <ContactForm defaultService={service} />
            </div>
          </div>

          <aside aria-label="Company contact details" className="lg:pt-2">
            <h2 className="display text-[clamp(1.6rem,3vw,2.25rem)]">Contact details</h2>
            <ul className="mt-10 border-t border-ink">
              {rows.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="border-b border-line">
                  <a href={href} className="group flex items-center gap-5 py-5">
                    <Icon aria-hidden="true" className="size-5 shrink-0 text-accent" />
                    <span>
                      <span className="block text-xs uppercase tracking-[0.14em] text-mute">{label}</span>
                      <span className="mt-0.5 block break-all group-hover:text-accent">{value}</span>
                    </span>
                  </a>
                </li>
              ))}
              <li className="border-b border-line">
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-5 py-5">
                  <MessageCircle aria-hidden="true" className="size-5 shrink-0 text-accent" />
                  <span>
                    <span className="block text-xs uppercase tracking-[0.14em] text-mute">WhatsApp</span>
                    <span className="mt-0.5 block group-hover:text-accent">Message us on WhatsApp</span>
                  </span>
                </a>
              </li>
              <li className="border-b border-line">
                <a href={mapHref} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-5 py-5">
                  <MapPin aria-hidden="true" className="mt-1 size-5 shrink-0 text-accent" />
                  <span>
                    <span className="block text-xs uppercase tracking-[0.14em] text-mute">Address</span>
                    <address className="mt-0.5 not-italic group-hover:text-accent">
                      {contact.address.lines.map((l) => (
                        <span key={l} className="block">{l}</span>
                      ))}
                    </address>
                  </span>
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </Section>
    </>
  );
}
