import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary" | "light" | "outlineLight" | "gold";

const base =
  "group inline-flex items-center justify-center gap-2.5 whitespace-nowrap px-6 py-3.5 text-sm font-medium tracking-wide transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-paper hover:bg-charcoal border border-ink",
  secondary: "border border-ink text-ink hover:bg-ink hover:text-paper",
  light: "bg-paper text-ink border border-paper hover:bg-stone hover:border-stone",
  gold: "bg-accent-soft text-ink border border-accent-soft hover:bg-[#e3c44f] hover:border-[#e3c44f]",
  outlineLight: "border border-paper/50 text-paper hover:bg-paper hover:text-ink",
};

export const buttonClass = (variant: Variant = "primary", extra = "") =>
  `${base} ${variants[variant]} ${extra}`;

type LinkProps = Omit<ComponentProps<typeof Link>, "className"> & {
  variant?: Variant;
  arrow?: boolean;
  className?: string;
  children: ReactNode;
};

export function ButtonLink({ variant = "primary", arrow = true, className = "", children, ...rest }: LinkProps) {
  return (
    <Link className={buttonClass(variant, className)} {...rest}>
      {children}
      {arrow && (
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform duration-200 group-hover:translate-x-1"
        />
      )}
    </Link>
  );
}

/** Plain anchor variant for external, mailto, tel and WhatsApp links. */
export function ExternalButton({
  variant = "secondary",
  className = "",
  children,
  ...rest
}: Omit<ComponentProps<"a">, "className"> & { variant?: Variant; className?: string }) {
  return (
    <a className={buttonClass(variant, className)} {...rest}>
      {children}
    </a>
  );
}

/** Inline text link with an animated arrow. */
export function TextLink({ children, ...rest }: Omit<ComponentProps<typeof Link>, "className">) {
  return (
    <Link
      className="group inline-flex items-center gap-2 border-b border-current pb-0.5 text-sm font-medium tracking-wide transition-colors hover:text-accent"
      {...rest}
    >
      {children}
      <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
    </Link>
  );
}
