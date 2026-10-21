"use client";

import { Container } from "@/components/ui/Container";
import { buttonClass, ButtonLink } from "@/components/ui/Button";

export default function GlobalError({ reset }: { error: Error; reset: () => void }) {
  return (
    <Container className="pb-28 pt-44">
      <p className="eyebrow">Something went wrong</p>
      <h1 className="display mt-5 max-w-3xl text-[clamp(2.2rem,5vw,4rem)]">We could not load this page.</h1>
      <p className="mt-6 max-w-lg text-lg text-mute">Please try again. If the problem continues, contact us directly.</p>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <button type="button" onClick={reset} className={buttonClass("primary")}>Try again</button>
        <ButtonLink href="/contact" variant="secondary">Contact us</ButtonLink>
      </div>
    </Container>
  );
}
