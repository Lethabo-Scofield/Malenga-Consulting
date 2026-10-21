import Image from "next/image";
import Link from "next/link";

/**
 * Official Malenga Consulting logo. "ink" uses the navy wordmark for light
 * backgrounds; "paper" uses the white wordmark for dark backgrounds.
 * Source files live in /public/brand.
 */
export function Wordmark({ tone = "ink", className = "h-12" }: { tone?: "ink" | "paper"; className?: string }) {
  return (
    <Link href="/" aria-label="Malenga Consulting, home" className="inline-block shrink-0">
      <Image
        src={tone === "ink" ? "/brand/logo.png" : "/brand/logo-light.png"}
        alt="Malenga Consulting"
        width={900}
        height={196}
        priority
        className={`${className} w-auto`}
      />
    </Link>
  );
}
