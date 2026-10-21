import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export const metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <Container className="pb-28 pt-44">
      <p className="eyebrow">Error 404</p>
      <h1 className="display mt-5 max-w-3xl text-[clamp(2.4rem,5.5vw,4.5rem)]">This page could not be found.</h1>
      <p className="mt-6 max-w-lg text-lg text-mute">
        The page may have moved or the address may be incorrect. Try one of the links below.
      </p>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <ButtonLink href="/">Back to home</ButtonLink>
        <ButtonLink href="/services" variant="secondary">View services</ButtonLink>
      </div>
    </Container>
  );
}
