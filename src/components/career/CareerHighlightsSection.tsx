import { CalendarCheck, HeartPulse, Sparkles } from "lucide-react";
import { CAREER_HIGHLIGHTS } from "@/content/careerJobs";

const HIGHLIGHT_ICONS = {
  purpose: CalendarCheck,
  growth: Sparkles,
  impact: HeartPulse,
} as const;

/** Drei Spalten mit Icons — Lyra-inspirierte Highlights. */
export function CareerHighlightsSection() {
  return (
    <section
      className="py-16 md:py-24"
      aria-labelledby="career-highlights-heading"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-10">
        <h2 id="career-highlights-heading" className="sr-only">
          Warum Pulsar Medical
        </h2>

        <ul className="grid gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">
          {CAREER_HIGHLIGHTS.map((item) => {
            const Icon = HIGHLIGHT_ICONS[item.id];

            return (
              <li key={item.id} className="text-center md:text-left">
                <div className="mx-auto inline-flex size-14 items-center justify-center rounded-2xl bg-pm-light-icon-bg text-pm-light-text-2 md:mx-0">
                  <Icon className="size-7" strokeWidth={1.5} aria-hidden />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-pm-light-headline">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-pm-light-text-1">
                  {item.text}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
