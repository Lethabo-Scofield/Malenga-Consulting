import { Container } from "./Container";
import { Photo } from "./Photo";
import { ButtonLink, ExternalButton } from "./Button";
import { Reveal } from "./Reveal";
import { site, whatsappHref } from "@/content/site";

type Props = {
  title?: string;
  text?: string;
  serviceSlug?: string;
};

export function CtaBand({
  title = "Got an idea that needs to become real?",
  text = "Tell us what you are working towards. We will get back to you to talk through how Malenga Consulting can help.",
  serviceSlug,
}: Props) {
  const href = serviceSlug ? `/contact?service=${serviceSlug}` : "/contact";
  return (
    <section aria-labelledby="cta-title" className="on-dark relative overflow-hidden bg-ink py-24 text-paper sm:py-32">
      <Photo name="skylineDusk" sizes="100vw" tint={false} className="!absolute inset-0" />
      <div aria-hidden="true" className="absolute inset-0 bg-ink/80" />
      <Container className="relative">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div>
              <p className="eyebrow">Get in touch</p>
              <h2 id="cta-title" className="display mt-5 text-[clamp(2rem,4.5vw,3.75rem)]">{title}</h2>
              <p className="mt-6 max-w-xl text-lg text-mute-dark">{text}</p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <ButtonLink href={href} variant="gold">Request a Consultation</ButtonLink>
              <ExternalButton variant="outlineLight" href={whatsappHref} target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </ExternalButton>
              <a
                href={`mailto:${site.contact.email}`}
                className="text-sm text-mute-dark underline-offset-4 transition-colors hover:text-paper hover:underline lg:pt-1"
              >
                {site.contact.email}
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
