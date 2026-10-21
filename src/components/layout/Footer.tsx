import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/ui/Wordmark";
import { navLinks } from "@/content/company";
import { services } from "@/content/services";
import { mapHref, site, whatsappHref } from "@/content/site";

const linkClass = "text-mute-dark transition-colors hover:text-paper";

export function Footer() {
  const { contact } = site;
  return (
    <footer className="on-dark bg-ink pb-10 pt-20 text-paper">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1.4fr_1.4fr]">
          <div>
            <Wordmark tone="paper" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-mute-dark">{site.motto}</p>
          </div>

          <nav aria-label="Footer">
            <h2 className="eyebrow">Navigate</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services">
            <h2 className="eyebrow">Services</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className={linkClass}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow">Contact</h2>
            <ul className="mt-5 space-y-3 text-sm text-mute-dark">
              <li><a className={linkClass} href={`mailto:${contact.email}`}>{contact.email}</a></li>
              <li>Tel: <a className={linkClass} href={`tel:${contact.telephone.href}`}>{contact.telephone.display}</a></li>
              <li>Mobile: <a className={linkClass} href={`tel:${contact.mobile.href}`}>{contact.mobile.display}</a></li>
              <li>
                <a className={linkClass} href={whatsappHref} target="_blank" rel="noopener noreferrer">
                  WhatsApp us
                </a>
              </li>
              <li>
                <a className={`${linkClass} not-italic`} href={mapHref} target="_blank" rel="noopener noreferrer">
                  <address className="not-italic">
                    {contact.address.lines.map((l) => (
                      <span key={l} className="block">{l}</span>
                    ))}
                  </address>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-line-dark pt-8 text-xs text-mute-dark sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>{site.headline}.</p>
        </div>
      </Container>
    </footer>
  );
}
