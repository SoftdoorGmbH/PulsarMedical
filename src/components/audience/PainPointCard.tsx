import type { AudiencePainPoint } from "@/content/audiencePainPoints";

type PainPointCardProps = {
  item: AudiencePainPoint;
  painLabel: string;
  solutionEyebrow: string;
  className?: string;
};

export function PainPointCard({
  item,
  painLabel,
  solutionEyebrow,
  className = "",
}: PainPointCardProps) {
  return (
    <article
      className={`flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border-4 border-pm-dark-container-border bg-pm-dark-container p-5 sm:p-6 ${className}`}
    >
      <div>
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-pm-dark-tag sm:text-xs">
          {painLabel}
        </p>
        <blockquote className="mt-2.5 text-pretty font-display-serif text-base font-normal italic leading-snug text-pm-dark-text-2 sm:text-[1.05rem]">
          {item.quote}
        </blockquote>
      </div>

      <hr className="my-4 shrink-0 border-0 border-t border-pm-dark-divider" />

      <div>
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-pm-dark-tag sm:text-xs">
          {solutionEyebrow}
        </p>
        <h3 className="mt-2 text-pretty text-lg font-semibold leading-snug tracking-tight text-pm-dark-headline sm:text-xl">
          {item.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-pm-dark-text-1 sm:text-[0.9375rem]">
          {item.description}
        </p>
      </div>
    </article>
  );
}
