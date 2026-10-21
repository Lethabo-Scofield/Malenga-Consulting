import Link from "next/link";
import { Container } from "./Container";

type Crumb = { label: string; href?: string };

type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
  crumbs?: Crumb[];
};

export function PageHero({ eyebrow, title, intro, crumbs }: Props) {
  return (
    <header className="border-b border-line bg-paper pt-36 pb-16 sm:pt-44 sm:pb-24">
      <Container>
        {crumbs && (
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-mute">
            <ol className="flex flex-wrap items-center gap-2">
              {crumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-2">
                  {c.href ? (
                    <Link href={c.href} className="underline-offset-4 hover:text-ink hover:underline">
                      {c.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-ink">{c.label}</span>
                  )}
                  {i < crumbs.length - 1 && <span aria-hidden="true">/</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <p className="eyebrow rise">{eyebrow}</p>
        <h1 className="display rise rise-1 mt-5 max-w-4xl text-[clamp(2.4rem,5.5vw,4.75rem)]">{title}</h1>
        {intro && <p className="rise rise-2 mt-8 max-w-2xl text-lg leading-relaxed text-mute">{intro}</p>}
      </Container>
    </header>
  );
}
