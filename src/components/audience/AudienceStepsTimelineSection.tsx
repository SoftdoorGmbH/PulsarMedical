import type {
  AudienceProcessStep,
  AudienceStepsTimelineContent,
} from "@/content/audienceSteps";

function StepCard({
  step,
  stepNumber,
}: {
  step: AudienceProcessStep;
  stepNumber: number;
}) {
  const Icon = step.icon;

  const iconBox = (
    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-pm-light-icon-border bg-pm-light-icon-bg text-pm-light-icon sm:size-12">
      <Icon className="size-5 sm:size-6" strokeWidth={1.75} aria-hidden />
    </div>
  );

  return (
    <article className="overflow-hidden rounded-2xl border-4 border-pm-light-container-border bg-white p-5 shadow-[0_10px_32px_-16px_rgb(2_52_78_/0.12)] sm:p-6">
      <div className="relative md:hidden">
        <div className="absolute top-0 right-0">{iconBox}</div>
        <div className="pr-14">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-pm-light-text-2">
            Schritt {stepNumber}
          </p>
          <h3 className="mt-1 text-lg font-semibold leading-snug tracking-tight text-pm-light-headline sm:text-xl">
            {step.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-pm-light-text-1 sm:text-base">
            {step.description}
          </p>
        </div>
      </div>

      <div className="hidden items-start gap-4 md:flex">
        {iconBox}
        <div className="min-w-0">
          <h3 className="text-lg font-semibold leading-snug tracking-tight text-pm-light-headline sm:text-xl">
            {step.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-pm-light-text-1 sm:text-base">
            {step.description}
          </p>
        </div>
      </div>
    </article>
  );
}

function StepLabel({
  stepNumber,
  prefix,
  align,
}: {
  stepNumber: number;
  prefix: string;
  align: "left" | "right";
}) {
  return (
    <p
      className={[
        "text-sm font-semibold uppercase tracking-[0.2em] text-pm-light-text-2 sm:text-base",
        align === "right" ? "text-right" : "text-left",
      ].join(" ")}
    >
      {prefix} {stepNumber}
    </p>
  );
}

function TimelineDot() {
  return (
    <div
      className="relative z-10 size-3.5 shrink-0 rounded-full border-2 border-white bg-pm-light-button shadow-[0_0_0_4px_var(--color-pm-light-icon-bg)] sm:size-4"
      aria-hidden
    />
  );
}

function DesktopTimelineRow({
  step,
  stepNumber,
  stepLabelPrefix,
  cardOnLeft,
}: {
  step: AudienceProcessStep;
  stepNumber: number;
  stepLabelPrefix: string;
  cardOnLeft: boolean;
}) {
  return (
    <li className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-x-6 lg:gap-x-10">
      <div
        className={cardOnLeft ? "justify-self-end" : "justify-self-end pr-2"}
      >
        {cardOnLeft ? (
          <div className="max-w-md">
            <StepCard step={step} stepNumber={stepNumber} />
          </div>
        ) : (
          <StepLabel
            stepNumber={stepNumber}
            prefix={stepLabelPrefix}
            align="right"
          />
        )}
      </div>

      <div className="flex items-center justify-center px-1">
        <TimelineDot />
      </div>

      <div
        className={
          cardOnLeft ? "justify-self-start pl-2" : "justify-self-start"
        }
      >
        {cardOnLeft ? (
          <StepLabel
            stepNumber={stepNumber}
            prefix={stepLabelPrefix}
            align="left"
          />
        ) : (
          <div className="max-w-md">
            <StepCard step={step} stepNumber={stepNumber} />
          </div>
        )}
      </div>
    </li>
  );
}

function MobileTimelineItem({
  step,
  stepNumber,
  isLast,
}: {
  step: AudienceProcessStep;
  stepNumber: number;
  isLast: boolean;
}) {
  return (
    <li className="relative pl-10">
      {!isLast ? (
        <span
          className="absolute top-4 left-2.75 h-[calc(100%+1.5rem)] w-px -translate-x-1/2 bg-pm-light-container-border"
          aria-hidden
        />
      ) : null}
      <div className="absolute top-4 left-3 -translate-x-1/2">
        <TimelineDot />
      </div>
      <StepCard step={step} stepNumber={stepNumber} />
    </li>
  );
}

export function AudienceStepsTimelineSection({
  headingId,
  title,
  subtitle,
  stepLabelPrefix = "Schritt",
  steps,
}: AudienceStepsTimelineContent) {
  return (
    <section
      className="bg-pm-light-bg py-16 sm:py-20 md:py-24"
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

        <div className="mt-12 md:mt-16">
          <ol className="relative space-y-8 md:hidden">
            {steps.map((step, index) => (
              <MobileTimelineItem
                key={step.title}
                step={step}
                stepNumber={index + 1}
                isLast={index === steps.length - 1}
              />
            ))}
          </ol>

          <div className="relative mx-auto hidden max-w-5xl md:block">
            <div
              className="absolute top-4 bottom-4 left-1/2 w-px -translate-x-1/2 bg-pm-light-container-border"
              aria-hidden
            />
            <ol className="relative space-y-12 lg:space-y-14">
              {steps.map((step, index) => (
                <DesktopTimelineRow
                  key={step.title}
                  step={step}
                  stepNumber={index + 1}
                  stepLabelPrefix={stepLabelPrefix}
                  cardOnLeft={index % 2 === 0}
                />
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
