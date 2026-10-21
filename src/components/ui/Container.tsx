import type { ElementType, ReactNode } from "react";

type Props = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

export function Container({ as: Tag = "div", className = "", children }: Props) {
  return (
    <Tag className={`mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </Tag>
  );
}

type SectionProps = {
  id?: string;
  tone?: "paper" | "stone" | "ink";
  className?: string;
  children: ReactNode;
  labelledBy?: string;
};

const tones = {
  paper: "bg-paper text-ink",
  stone: "bg-stone text-ink",
  ink: "on-dark bg-ink text-paper",
} as const;

export function Section({ id, tone = "paper", className = "", children, labelledBy }: SectionProps) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`${tones[tone]} py-20 sm:py-28 lg:py-32 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
