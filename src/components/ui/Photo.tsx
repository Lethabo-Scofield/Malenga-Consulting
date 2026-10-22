import Image from "next/image";
import { photos, type PhotoKey } from "@/content/images";

type Props = {
  name: PhotoKey;
  sizes: string;
  className?: string;
  priority?: boolean;
  /** Cut the bottom-left corner on a diagonal, echoing the logo's strokes. */
  cut?: boolean;
  /** Navy multiply so photos from different sources sit together. */
  tint?: boolean;
  alt?: string;
};

export function Photo({ name, sizes, className = "", priority, cut, tint = true, alt }: Props) {
  const p = photos[name];
  return (
    <div className={`relative overflow-hidden bg-charcoal ${cut ? "photo-cut" : ""} ${className}`}>
      <Image
        src={p.src}
        alt={alt ?? p.alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
        style={{ objectPosition: p.position }}
      />
      {tint && <div aria-hidden="true" className="absolute inset-0 bg-ink/15 mix-blend-multiply" />}
    </div>
  );
}
