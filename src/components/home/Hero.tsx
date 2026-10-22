import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { services } from "@/content/services";

/** Constant-angle parallelogram, matching the slant of the logo's strokes. */
const strip = { clipPath: "polygon(0 0, calc(100% - 34px) 0, 100% 100%, 34px 100%)" } as const;

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="on-dark hero-cut relative flex min-h-[100svh] items-center bg-ink pb-28 pt-32 text-paper sm:pb-32"
    >
      <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-6">
          <p className="eyebrow rise">Strategy · Innovation · Implementation</p>
          <h1
            id="hero-title"
            className="display rise rise-1 mt-6 text-[clamp(2.9rem,6.6vw,6rem)]"
          >
            We turn ideas into <em>reality.</em>
          </h1>
          <p className="rise rise-2 mt-8 max-w-lg text-lg leading-relaxed text-paper/80 sm:text-xl">
            Malenga Consulting is a Sandton-based consulting company. We advise, we build, and we stay on to see
            the work through.
          </p>
          <div className="rise rise-3 mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="/contact" variant="gold">Request a Consultation</ButtonLink>
            <ButtonLink href="/services" variant="outlineLight">Explore Our Services</ButtonLink>
          </div>
        </div>

        <div className="rise rise-2 lg:col-span-6">
          <ul
            aria-label="Our five consulting divisions"
            className="flex h-[360px] sm:h-[480px] lg:h-[min(66vh,620px)]"
          >
            {services.map((s, i) => (
              <li
                key={s.slug}
                style={strip}
                className={`group relative min-w-0 flex-1 bg-charcoal transition-[flex-grow] duration-500 ease-out hover:flex-[2.8] focus-within:flex-[2.8] ${
                  i > 0 ? "-ml-7" : ""
                }`}
              >
                <Photo
                  name={s.image}
                  sizes="(min-width: 1024px) 360px, 50vw"
                  priority={i < 2}
                  className="!absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                />
                <Link
                  href={`/services/${s.slug}`}
                  aria-label={`${s.title}: ${s.blurb}`}
                  className="absolute inset-0 flex flex-col justify-end outline-offset-[-6px]"
                >
                  <span className="block bg-ink/85 pb-5 pl-11 pr-8 pt-3">
                    <span className="display block text-3xl text-accent-soft">{s.number}</span>
                    <span className="block max-h-0 overflow-hidden text-sm leading-snug opacity-0 transition-all duration-500 group-hover:mt-1 group-hover:max-h-24 group-hover:opacity-100 group-focus-within:mt-1 group-focus-within:max-h-24 group-focus-within:opacity-100">
                      {s.title.replace(/ Consulting$/, "").replace(/ Solutions$/, "")}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs uppercase tracking-[0.14em] text-paper/60">
            Five divisions. Hover or tap a strip to explore.
          </p>
        </div>
      </Container>
    </section>
  );
}
