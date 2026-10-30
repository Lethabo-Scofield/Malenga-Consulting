import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { founder, teamPhoto } from "@/content/team";

const exists = (src: string) => fs.existsSync(path.join(process.cwd(), "public", src));

/** Founder portrait plus a team photo. Each photo appears once its file is in /public/team. */
export function Team() {
  const hasFounder = exists(founder.photo);
  const hasTeam = exists(teamPhoto.src);

  return (
    <Section tone="stone" labelledBy="team-title">
      <h2 id="team-title" className="display text-[clamp(2rem,4vw,3.25rem)]">
        The <em>team.</em>
      </h2>

      <div className="mt-12 grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <div className="photo-cut relative aspect-[4/5] overflow-hidden bg-ink">
            {hasFounder ? (
              <Image
                src={founder.photo}
                alt={founder.alt}
                fill
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-cover"
                style={{ objectPosition: "center 35%" }}
              />
            ) : (
              <Image
                src="/brand/mark.png"
                alt=""
                aria-hidden="true"
                width={480}
                height={316}
                className="absolute inset-0 m-auto h-24 w-auto opacity-90"
              />
            )}
          </div>
        </Reveal>

        <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.08}>
          {founder.name && <p className="eyebrow">{founder.role}</p>}
          <h3 className="display mt-4 text-[clamp(2rem,3.8vw,3.25rem)] leading-tight">
            {founder.name || founder.role}
          </h3>
          <span aria-hidden="true" className="mt-6 block h-1 w-16 -skew-x-[38deg] bg-accent-soft" />
        </Reveal>
      </div>

      {hasTeam && (
        <Reveal className="mt-16 sm:mt-20">
          <div className="photo-cut relative aspect-[4/3] overflow-hidden bg-ink sm:aspect-[16/9]">
            <Image
              src={teamPhoto.src}
              alt={teamPhoto.alt}
              fill
              sizes="(min-width: 1280px) 1180px, 100vw"
              className="object-cover"
              style={{ objectPosition: "center 40%" }}
            />
          </div>
          <p className="mt-4 text-xs uppercase tracking-[0.14em] text-mute">{teamPhoto.caption}</p>
        </Reveal>
      )}
    </Section>
  );
}
