import { CheckCircle2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type {
  OfferProcessContent,
  OfferProcessStep,
} from "@/content/offerProcess";

const checkClassName =
  "mt-0.5 size-6 shrink-0 text-pm-light-text-2 [&>circle]:fill-pm-light-icon-bg [&>circle]:stroke-pm-light-icon-border [&>path]:origin-[12px_12px] [&>path]:scale-[1.18] [&>path]:stroke-[1.75] [&>path]:stroke-pm-light-text-2";

const imageWrapperClassName =
  "relative aspect-4/3 overflow-hidden rounded-2xl border-6 border-pm-light-container-border bg-pm-light-container shadow-[0_14px_44px_-14px_rgb(2_52_78_/0.14)]";

function StepEyebrow({
  icon: Icon,
  label,
}: {
  icon: LucideIcon;
  label: string;
}) {
  return (
    <div className="inline-flex items-center gap-2.5 rounded-full border border-pm-light-container-border bg-pm-light-icon-bg px-3.5 py-2">
      <Icon
        className="size-4 shrink-0 text-pm-light-icon"
        strokeWidth={1.75}
        aria-hidden
      />
      <span className="text-xs font-semibold tracking-[0.06em] text-pm-light-tag">
        {label}
      </span>
    </div>
  );
}

function ProcessStep({
  index,
  stageLabel,
  title,
  description,
  icon,
  imageSrc,
  imageAlt,
  isLast,
}: OfferProcessStep & {
  index: number;
  isLast: boolean;
}) {
  const imageFirst = index % 2 === 1;
  const headingId = `offer-process-step-${index + 1}`;

  return (
    <div className={`relative ${isLast ? "" : "pb-10 sm:pb-12 lg:pb-20"}`}>
      <article
        aria-labelledby={headingId}
        className="relative grid items-center gap-10 pl-9 lg:grid-cols-2 lg:gap-14 lg:pl-0 xl:gap-16"
      >
        <div className={imageFirst ? "lg:order-2" : undefined}>
          <StepEyebrow icon={icon} label={stageLabel} />

          <h3
            id={headingId}
            className="mt-4 max-w-lg text-2xl font-semibold leading-snug tracking-tight text-pm-light-headline sm:text-3xl"
          >
            {title}
          </h3>

          <ul className="mt-4 flex max-w-lg flex-col gap-3">
            {description.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className={checkClassName} aria-hidden />
                <span className="text-base leading-relaxed text-pm-light-text-1">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`${imageWrapperClassName} ${imageFirst ? "lg:order-1" : ""}`}
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            loading="lazy"
            decoding="async"
            className="size-full object-cover"
          />
        </div>
      </article>
    </div>
  );
}

export function OfferProcessSection({
  headingId,
  title,
  subtitle,
  steps,
}: OfferProcessContent) {
  return (
    <section
      className="border-y border-pm-light-container-border bg-pm-light-bg py-16 sm:py-20 md:py-24"
      aria-labelledby={headingId}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-left md:text-center">
          <h2
            id={headingId}
            className={
              "text-3xl leading-tight tracking-tight text-pm-light-headline md:text-4xl lg:text-[2.75rem] lg:leading-[1.12] "
            }
          >
            {title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-pm-light-text-1 md:mt-6 md:text-lg">
            {subtitle}
          </p>
        </div>

        <div className="relative mt-10 sm:mt-12">
          <div
            aria-hidden
            className="absolute top-7.5 bottom-0 left-2.75 w-0.5 bg-pm-light-container-border lg:hidden"
          />
          {steps.map((step, index) => (
            <ProcessStep
              key={step.title}
              index={index}
              isLast={index === steps.length - 1}
              {...step}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
