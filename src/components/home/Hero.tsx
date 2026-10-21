import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { services } from "@/content/services";

/** Quiet line-work: a route threading five points, one per division. */
function RouteLines() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 400 560"
      preserveAspectRatio="xMaxYMid slice"
      className="pointer-events-none absolute inset-0 h-full w-full text-accent-soft opacity-[0.25]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <path d="M-20 520 C 80 470, 120 380, 200 360 S 330 250, 420 120" />
      <path d="M-20 440 C 60 400, 140 330, 210 300 S 340 190, 420 60" />
      <path d="M40 580 C 90 480, 180 440, 250 380 S 350 300, 420 220" />
      <circle cx="200" cy="360" r="3" fill="currentColor" />
      <circle cx="300" cy="228" r="3" fill="currentColor" />
      <circle cx="120" cy="404" r="3" fill="currentColor" />
    </svg>
  );
}

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="bg-paper pt-28 sm:pt-32">
      <Container className="grid items-stretch gap-12 pb-20 lg:grid-cols-[1.25fr_1fr] lg:gap-16 lg:pb-28">
        <div className="flex flex-col justify-center py-8 lg:py-16">
          <p className="eyebrow rise">Strategy · Innovation · Implementation</p>
          <h1
            id="hero-title"
            className="display rise rise-1 mt-6 text-[clamp(3rem,7.4vw,6.4rem)]"
          >
            We Turn Ideas Into&nbsp;Reality.
          </h1>
          <p className="rise rise-2 mt-8 max-w-xl text-lg leading-relaxed text-mute sm:text-xl">
            Malenga Consulting is a South African multidisciplinary consulting company. We combine strategic
            advisory with hands-on implementation to support entrepreneurs, SMEs, corporations and institutions.
          </p>
          <div className="rise rise-3 mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="/contact">Request a Consultation</ButtonLink>
            <ButtonLink href="/services" variant="secondary">
              Explore Our Services
            </ButtonLink>
          </div>
        </div>

        <aside
          aria-label="Our five consulting divisions"
          className="on-dark rise rise-2 relative overflow-hidden bg-charcoal p-7 text-paper sm:p-10"
        >
          <RouteLines />
          <div className="relative">
            <p className="eyebrow">Five divisions</p>
            <ol className="mt-8 divide-y divide-line-dark border-y border-line-dark">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group flex items-start gap-5 py-5 transition-colors"
                  >
                    <span className="display pt-0.5 text-lg tabular-nums text-accent-soft">{s.number}</span>
                    <span className="flex-1 text-[0.95rem] leading-snug transition-transform duration-300 group-hover:translate-x-1">
                      {s.title}
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="mt-1 size-4 shrink-0 text-mute-dark transition-colors group-hover:text-paper"
                    />
                  </Link>
                </li>
              ))}
            </ol>
            <Image
              src="/brand/mark.png"
              alt=""
              aria-hidden="true"
              width={480}
              height={316}
              className="mt-12 h-14 w-auto"
            />
          </div>
        </aside>
      </Container>
    </section>
  );
}
