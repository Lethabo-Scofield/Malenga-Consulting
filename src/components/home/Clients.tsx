import Image from "next/image";
import { Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { clients } from "@/content/clients";

export function Clients() {
  return (
    <Section tone="stone" labelledBy="clients-title" className="!py-16 sm:!py-24">
      <Reveal>
        <h2 id="clients-title" className="eyebrow">Businesses we&rsquo;ve worked with</h2>
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {clients.map((c) => (
            <li
              key={c.name}
              className="flex h-32 items-center justify-center border border-line bg-white p-5 max-sm:last:col-span-2 sm:h-36 sm:p-6"
            >
              {c.logo ? (
                <Image
                  src={c.logo.src}
                  alt={c.name}
                  width={c.logo.width}
                  height={c.logo.height}
                  sizes="(min-width: 1024px) 200px, 45vw"
                  className="h-auto max-h-full w-auto max-w-full object-contain"
                />
              ) : (
                <span className="display text-center text-[clamp(1.5rem,2.4vw,2rem)] leading-tight">{c.name}</span>
              )}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
