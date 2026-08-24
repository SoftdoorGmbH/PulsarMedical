import { useEffect, useId, useState } from "react";
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
  showEyebrow = true,
}: OfferProcessStep & {
  index: number;
  isLast: boolean;
  showEyebrow?: boolean;
}) {
  const imageFirst = index % 2 === 1;
  const headingId = `offer-process-step-${index + 1}`;

  return (
    <div className={`relative ${isLast ? "" : "pb-10 sm:pb-12 lg:pb-20"}`}>
      <article
        aria-labelledby={headingId}
        className={`relative grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16 ${
          showEyebrow ? "pl-9 lg:pl-0" : ""
        }`}
      >
        <div className={imageFirst ? "lg:order-2" : undefined}>
          {showEyebrow ? <StepEyebrow icon={icon} label={stageLabel} /> : null}

          <h3
            id={headingId}
            className={`${showEyebrow ? "mt-4" : ""} max-w-lg text-2xl font-semibold leading-snug tracking-tight text-pm-light-headline sm:text-3xl`}
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
          className={`${imageWrapperClassName} ${imageFirst ? "lg:order-1" : ""} hidden lg:block`}
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            width={960}
            height={720}
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
  const baseId = useId();
  const [activeIndex, setActiveIndex] = useState(0);
  const active = steps[activeIndex]!;

  useEffect(() => {
    setActiveIndex(0);
  }, [headingId]);

  return (
    <section
      id="process"
      className="scroll-mt-24 border-y border-pm-light-container-border bg-pm-light-bg py-16 sm:py-20 md:py-24"
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

        <div className="mt-10 sm:mt-12 lg:hidden">
          <div
            role="tablist"
            aria-label="Ablaufschritte"
            className="grid grid-cols-2 gap-2.5"
          >
            {steps.map((step, index) => {
              const selected = index === activeIndex;
              const tabId = `${baseId}-tab-${index}`;
              const panelId = `${baseId}-panel`;
              const Icon = step.icon;

              return (
                <button
                  key={step.title}
                  id={tabId}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls={panelId}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={(event) => {
                    if (
                      event.key !== "ArrowRight" &&
                      event.key !== "ArrowLeft" &&
                      event.key !== "ArrowDown" &&
                      event.key !== "ArrowUp"
                    ) {
                      return;
                    }
                    event.preventDefault();
                    const delta =
                      event.key === "ArrowRight" || event.key === "ArrowDown"
                        ? 1
                        : -1;
                    const next = (index + delta + steps.length) % steps.length;
                    setActiveIndex(next);
                    document.getElementById(`${baseId}-tab-${next}`)?.focus();
                  }}
                  className={`inline-flex items-center justify-center gap-2 rounded-full border px-3.5 py-2 text-center text-sm font-semibold tracking-wide transition-[color,background-color,border-color] duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pm-light-text-2 ${
                    selected
                      ? "border-pm-light-button bg-pm-light-button text-white shadow-md"
                      : "border-pm-light-container-border bg-white text-pm-light-text-1 hover:border-pm-light-text-2/55 hover:text-pm-light-headline"
                  }`}
                >
                  <Icon className="size-3.5 shrink-0" strokeWidth={1.75} />
                  {step.stageLabel}
                </button>
              );
            })}
          </div>

          <div
            id={`${baseId}-panel`}
            role="tabpanel"
            aria-labelledby={`${baseId}-tab-${activeIndex}`}
            className="mt-8"
          >
            <ProcessStep
              key={active.title}
              index={activeIndex}
              isLast
              showEyebrow={false}
              {...active}
            />
          </div>

          <div className={`${imageWrapperClassName} mt-8`}>
            <img
              src={steps[0]!.imageSrc}
              alt={steps[0]!.imageAlt}
              width={960}
              height={720}
              loading="lazy"
              decoding="async"
              className="size-full object-cover"
            />
          </div>
        </div>

        <div className="relative mt-10 hidden sm:mt-12 lg:block">
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
