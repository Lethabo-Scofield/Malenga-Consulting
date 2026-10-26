import { Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/Button";

export function Statement() {
  return (
    <Section labelledBy="statement-title" className="!pb-12 sm:!pb-16">
      <Reveal className="max-w-5xl">
        <h2
          id="statement-title"
          className="display text-[clamp(2.1rem,5vw,4.25rem)] leading-[1.08]"
        >
          Plans are easy to write. We stay for the part where they have to <em>work.</em>
        </h2>
        <div className="mt-8">
          <TextLink href="/about">About Malenga</TextLink>
        </div>
      </Reveal>
    </Section>
  );
}
