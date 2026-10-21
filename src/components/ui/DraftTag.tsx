import { site } from "@/content/site";

/** Marks wording that still needs approval against the official company profile. */
export function DraftTag() {
  if (!site.showDraftLabels) return null;
  return (
    <span className="inline-block border border-current px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-[0.14em] text-mute">
      Draft wording · pending approval
    </span>
  );
}
