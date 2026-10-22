import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Statement } from "@/components/home/Statement";
import { Clients } from "@/components/home/Clients";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { AboutIntro } from "@/components/home/AboutIntro";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { WhyChoose } from "@/components/home/WhyChoose";
import { Approach } from "@/components/home/Approach";
import { CtaBand } from "@/components/ui/CtaBand";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";

export const metadata: Metadata = {
  ...buildMetadata({
    title: `${site.name} | ${site.headline}`,
    description: site.description,
    path: "/",
  }),
  title: { absolute: `${site.name} | ${site.headline}` },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Statement />
      <ServicesOverview />
      <AboutIntro />
      <IndustriesSection />
      <Clients />
      <WhyChoose />
      <Approach />
      <CtaBand />
    </>
  );
}
