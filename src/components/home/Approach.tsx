import { Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { approach } from "@/content/company";

export function Approach() {
  return (
    <Section tone="stone" labelledBy="approach-title">
      <Reveal className="max-w-3xl">
        <p className="eyebrow">Our approach</p>
        <h2 id="approach-title" className="display mt-5 text-[clamp(2rem,4.2vw,3.5rem)]">
          A clear path from first conversation to lasting result.
        </h2>
        <p className="mt-6 max-w-xl text-mute">
          A typical engagement may follow four stages. Each engagement is scoped with the client, so the
          emphasis and duration of each stage will vary.
        </p>
      </Reveal>

      <ol className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-8">
        <span aria-hidden="true" className="absolute left-[0.4rem] top-2 hidden h-px w-full bg-ink/30 md:block" />
        {approach.map((a, i) => (
          <li key={a.step} className="relative pl-8 md:pl-0 md:pt-10">
            <span
              aria-hidden="true"
              className="absolute left-0 top-2 size-3 rounded-full border border-ink bg-stone md:top-[0.1rem]"
            />
            <span aria-hidden="true" className="absolute left-[0.34rem] top-6 h-full w-px bg-ink/20 md:hidden" />
            <Reveal delay={i * 0.08}>
              <p className="text-xs tabular-nums text-accent">{a.step}</p>
              <h3 className="display mt-2 text-2xl">{a.title}</h3>
              <p className="mt-3 text-mute">{a.description}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
