import { Button } from "@/components/Button";
import {
  ABLAUF_RETURN_STORAGE_KEY,
  type AudiencePageSlug,
} from "@/content/audiencePages";
import {
  PROCESS_PREVIEW,
  type AudienceProcessStep,
  type AudienceStepsTimelineContent,
} from "@/content/audienceSteps";

function StepChip({ step }: { step: AudienceProcessStep }) {
  const Icon = step.icon;

  return (
    <li className="inline-flex items-center gap-2 rounded-full border border-pm-light-container-border bg-pm-light-icon-bg/70 px-3 py-1.5 text-sm font-semibold tracking-wide text-pm-light-headline sm:px-3.5 sm:py-2">
      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-white text-pm-light-icon ring-1 ring-pm-light-icon-border">
        <Icon className="size-3.5" strokeWidth={1.75} aria-hidden />
      </span>
      {step.title}
    </li>
  );
}

export function AudienceStepsPreviewSection({
  headingId,
  title,
  subtitle,
  steps,
  audienceSlug,
}: AudienceStepsTimelineContent & { audienceSlug: AudiencePageSlug }) {
  const { promise, cta } = PROCESS_PREVIEW;
  const returnTo = `/${audienceSlug}#ablauf`;

  return (
    <section
      id="ablauf"
      className="scroll-mt-24 bg-pm-light-bg py-16 sm:py-20 md:py-24"
      aria-labelledby={headingId}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-left md:text-center">
          <h2
            id={headingId}
            className="text-3xl font-semibold leading-tight tracking-tight text-pm-light-headline md:text-4xl lg:text-[2.5rem] lg:leading-[1.15]"
          >
            {title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-pm-light-text-1 md:mt-6 md:text-lg">
            {subtitle}
          </p>
        </div>

        <article className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border-4 border-pm-light-container-border bg-white p-5 shadow-[0_10px_32px_-16px_rgb(2_52_78_/0.12)] sm:mt-12 sm:p-7 md:mt-14 md:p-8">
          <p className="text-left text-base font-semibold leading-snug tracking-tight text-pm-light-headline md:text-center md:text-lg">
            {promise}
          </p>

          <ol
            aria-label="Schritte im Überblick"
            className="mt-6 flex flex-wrap items-center justify-start gap-2 sm:mt-7 sm:gap-2.5 md:justify-center"
          >
            {steps.map((step) => (
              <StepChip key={step.title} step={step} />
            ))}
          </ol>

          <div className="mt-7 flex justify-start md:mt-8 md:justify-center">
            <Button
              to={cta.to}
              state={{ from: returnTo }}
              fullWidth="sm"
              onClick={() => {
                sessionStorage.setItem(ABLAUF_RETURN_STORAGE_KEY, returnTo);
              }}
            >
              {cta.label}
            </Button>
          </div>
        </article>
      </div>
    </section>
  );
}
