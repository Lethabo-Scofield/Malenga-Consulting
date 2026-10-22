import { Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { clients } from "@/content/clients";

export function Clients() {
  return (
    <Section tone="stone" labelledBy="clients-title" className="!py-16 sm:!py-24">
      <Reveal>
        <p className="eyebrow">Businesses we&rsquo;ve worked with</p>
        <h2 id="clients-title" className="sr-only">Businesses we&rsquo;ve worked with</h2>
        <ul className="mt-8 flex flex-col divide-y divide-line border-y border-line md:flex-row md:divide-x md:divide-y-0">
          {clients.map((name) => (
            <li
              key={name}
              className="display flex-1 px-0 py-7 text-[clamp(1.5rem,2.4vw,2.1rem)] leading-tight md:px-8 md:first:pl-0 md:last:pr-0"
            >
              {name}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
