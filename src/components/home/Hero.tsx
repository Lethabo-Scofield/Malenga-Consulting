import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { services } from "@/content/services";

/** Constant-angle parallelogram, matching the slant of the logo's strokes. */
const strip = { clipPath: "polygon(0 0, calc(100% - var(--slant)) 0, 100% 100%, var(--slant) 100%)" } as const;

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="hero-cut relative flex min-h-[100svh] items-center bg-white pb-28 pt-32 text-ink sm:pb-32"
    >
      <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-6">
          <h1
            id="hero-title"
            className="display rise rise-1 text-[clamp(2.9rem,6.6vw,6rem)]"
          >
            We turn ideas into <em>reality.</em>
          </h1>
          <p className="rise rise-2 mt-7 max-w-md text-lg text-mute sm:text-xl">
            Sandton-based consulting. We advise, we build, and we see it through.
          </p>
          <div className="rise rise-3 mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="/contact">Request a Consultation</ButtonLink>
            <ButtonLink href="/services" variant="secondary">Explore Our Services</ButtonLink>
          </div>
        </div>

        <div className="rise rise-2 lg:col-span-6">
          <ul
            aria-label="Our five consulting divisions"
            className="flex h-[340px] [--slant:12px] sm:h-[480px] sm:[--slant:26px] lg:h-[min(66vh,620px)] lg:[--slant:34px]"
          >
            {services.map((s, i) => (
              <li
                key={s.slug}
                style={strip}
                className={`group relative min-w-0 flex-1 bg-charcoal transition-[flex-grow] duration-500 ease-out hover:flex-[2.8] focus-within:flex-[2.8] ${
                  i > 0 ? "-ml-[calc(var(--slant)-4px)]" : ""
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
                  <span className="block bg-ink/85 pb-4 pl-4 pr-3 pt-3 sm:pb-5 sm:pl-11 sm:pr-8">
                    <span className="display block text-2xl text-accent-soft sm:text-3xl">{s.number}</span>
                    <span className="block max-h-0 overflow-hidden text-sm leading-snug opacity-0 transition-all duration-500 group-hover:mt-1 group-hover:max-h-24 group-hover:opacity-100 group-focus-within:mt-1 group-focus-within:max-h-24 group-focus-within:opacity-100">
                      {s.title.replace(/ Consulting$/, "").replace(/ Solutions$/, "")}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
