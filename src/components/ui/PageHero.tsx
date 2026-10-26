import Link from "next/link";
import { Container } from "./Container";
import { Photo } from "./Photo";
import type { PhotoKey } from "@/content/images";

type Crumb = { label: string; href?: string };

type Props = {
  eyebrow?: string;
  /** Plain string, or JSX when part of the title should be emphasised with <em>. */
  title: React.ReactNode;
  intro?: string;
  crumbs?: Crumb[];
  image?: PhotoKey;
};

export function PageHero({ eyebrow, title, intro, crumbs, image }: Props) {
  return (
    <header className="border-b border-line bg-paper pb-16 pt-32 sm:pb-24 sm:pt-40">
      <Container className={image ? "grid items-center gap-12 lg:grid-cols-12 lg:gap-14" : ""}>
        <div className={image ? "lg:col-span-7" : ""}>
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
          {eyebrow && <p className="eyebrow rise">{eyebrow}</p>}
          <h1 className="display rise rise-1 max-w-4xl text-[clamp(2.3rem,5vw,4.4rem)]">{title}</h1>
          {intro && <p className="rise rise-2 mt-8 max-w-2xl text-lg leading-relaxed text-mute">{intro}</p>}
        </div>
        {image && (
          <div className="rise rise-2 lg:col-span-5">
            <Photo name={image} cut priority sizes="(min-width: 1024px) 480px, 100vw" className="aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]" />
          </div>
        )}
      </Container>
    </header>
  );
}
