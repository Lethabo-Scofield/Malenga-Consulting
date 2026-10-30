import { Hammer, Handshake, Layers, ShieldCheck, TrendingUp, type LucideIcon } from "lucide-react";
import { Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Photo } from "@/components/ui/Photo";
import { whyMalenga } from "@/content/company";

/** One icon per point, in the same order as `whyMalenga`. */
const icons: LucideIcon[] = [Hammer, Layers, Handshake, TrendingUp, ShieldCheck];

export function WhyChoose() {
  return (
    <Section labelledBy="why-title">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
          <h2 id="why-title" className="display text-[clamp(2rem,4.2vw,3.5rem)]">
            What you get when you work with <em>Malenga.</em>
          </h2>
          <Photo
            name="port"
            cut
            sizes="(min-width: 1024px) 480px, 100vw"
            className="mt-10 aspect-[4/3] lg:aspect-[4/5]"
          />
        </Reveal>

        <ul className="lg:col-span-6 lg:col-start-7">
          {whyMalenga.map((item, i) => {
            const Icon = icons[i];
            return (
              <li key={item.title} className="border-t border-line first:border-t-ink last:border-b last:border-line">
                <Reveal delay={i * 0.05}>
                  <article className="group flex items-start gap-5 py-7 sm:gap-6 sm:py-8">
                    <span className="flex size-14 shrink-0 items-center justify-center bg-ink text-accent-soft transition-colors duration-300 group-hover:bg-accent-soft group-hover:text-ink">
                      <Icon aria-hidden="true" className="size-6" />
                    </span>
                    <div className="transition-transform duration-300 group-hover:translate-x-1">
                      <h3 className="display text-[clamp(1.4rem,2.2vw,1.8rem)] leading-tight">{item.title}</h3>
                      <p className="mt-1.5 text-mute">{item.description}</p>
                    </div>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
