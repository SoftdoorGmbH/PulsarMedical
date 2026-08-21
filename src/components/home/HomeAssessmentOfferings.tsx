import { useCallback, useEffect, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/Button";
import { HOME_ASSESSMENT_OFFERINGS } from "@/content/homeAssessmentOfferings";

const checkClassName =
  "mt-0.5 size-6 shrink-0 text-pm-light-text-2 [&>circle]:fill-pm-light-icon-bg [&>circle]:stroke-pm-light-icon-border [&>path]:origin-[12px_12px] [&>path]:scale-[1.18] [&>path]:stroke-[1.75] [&>path]:stroke-pm-light-text-2";

function DotButton({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`h-2.5 rounded-full transition-all duration-300 ${
        active ? "w-6 bg-pm-light-button" : "w-2.5 bg-pm-light-container-border"
      }`}
      aria-label={label}
    />
  );
}

function StepEyebrow({
  icon: Icon,
  label,
  note,
}: {
  icon: LucideIcon;
  label: string;
  note?: string;
}) {
  return (
    <div className="hidden md:inline-flex w-fit flex-wrap items-center gap-2.5 rounded-full border border-pm-light-container-border bg-pm-light-icon-bg px-3.5 py-2">
      <Icon
        className="size-4 shrink-0 text-pm-light-icon"
        strokeWidth={1.75}
        aria-hidden
      />
      <span className="text-xs font-semibold tracking-[0.04em] text-pm-light-tag">
        {label}
      </span>
      {note ? (
        <span className="text-xs font-medium text-pm-light-text-1">{note}</span>
      ) : null}
    </div>
  );
}

function OfferingBlock({
  id,
  stageLabel,
  title,
  intro,
  bullets,
  cta,
  to,
  icon,
  imageSrc,
  imageAlt,
  panelClassName,
  note,
}: (typeof HOME_ASSESSMENT_OFFERINGS)[number] & {
  note?: string;
}) {
  const headingId = `assessment-offering-${id}`;

  return (
    <article
      aria-labelledby={headingId}
      className="flex w-[min(88vw,24rem)] max-w-md shrink-0 snap-center flex-col overflow-hidden rounded-[1.75rem] border-6 border-pm-light-container-border bg-white shadow-[0_14px_44px_-14px_rgb(2_52_78_/0.14)] md:w-full md:max-w-none md:snap-normal"
    >
      <div className="grid h-full flex-1 items-stretch lg:grid-cols-2">
        <div className="flex h-full flex-col px-7 py-6 sm:p-8 lg:p-10 xl:p-12">
          <StepEyebrow icon={icon} label={stageLabel} note={note} />

          <h3
            id={headingId}
            className="md:mt-5 max-w-xl text-2xl font-semibold leading-snug tracking-tight text-pm-light-headline sm:text-[1.65rem]"
          >
            {title}
          </h3>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-pm-light-text-1">
            {intro}
          </p>

          <ul className="mt-6 flex max-w-xl flex-col gap-3">
            {bullets.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className={checkClassName} aria-hidden />
                <span className="text-base leading-relaxed text-pm-light-text-1">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-8">
            <Button to={to} fullWidth>
              {cta}
            </Button>
          </div>
        </div>

        <div
          className={`relative hidden md:flex min-h-56 items-center justify-center overflow-hidden p-6 sm:min-h-64 sm:p-8 lg:min-h-full lg:p-10 ${panelClassName}`}
        >
          <div className="relative aspect-4/3 w-full max-w-md overflow-hidden rounded-2xl border-6 border-white/25 bg-white shadow-[0_24px_48px_-16px_rgb(0_0_0_/0.35)]">
            <img
              src={imageSrc}
              alt={imageAlt}
              loading="lazy"
              decoding="async"
              className="size-full object-cover"
            />
          </div>
        </div>
      </div>
    </article>
  );
}

/** Angebotsübersicht: fünf Begutachtungsarten als Split-Karten (Text links, Bild rechts). */
export function HomeAssessmentOfferings() {
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const mobileScrollRafRef = useRef<number | null>(null);

  const syncMobileActiveIndex = useCallback(() => {
    const el = mobileScrollRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.width === 0) return;
    const centerX = rect.left + rect.width / 2;
    let best = 0;
    let bestDist = Infinity;
    Array.from(el.children).forEach((child, i) => {
      const r = child.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const d = Math.abs(cx - centerX);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    setMobileActiveIndex((prev) => (prev === best ? prev : best));
  }, []);

  const onMobileScroll = () => {
    if (mobileScrollRafRef.current != null) {
      cancelAnimationFrame(mobileScrollRafRef.current);
    }
    mobileScrollRafRef.current = requestAnimationFrame(() => {
      mobileScrollRafRef.current = null;
      syncMobileActiveIndex();
    });
  };

  useEffect(() => {
    syncMobileActiveIndex();
    window.addEventListener("resize", syncMobileActiveIndex);
    return () => {
      window.removeEventListener("resize", syncMobileActiveIndex);
      if (mobileScrollRafRef.current != null) {
        cancelAnimationFrame(mobileScrollRafRef.current);
      }
    };
  }, [syncMobileActiveIndex]);

  const scrollMobileToIndex = (idx: number) => {
    const scroller = mobileScrollRef.current;
    const slide = scroller?.children[idx] as HTMLElement | undefined;
    slide?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  return (
    <section
      className="border-y border-pm-light-container-border bg-pm-light-container py-16 sm:py-20 md:py-24"
      aria-labelledby="assessment-offerings-heading"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-left md:text-center">
          <h2
            id="assessment-offerings-heading"
            className="text-3xl font-semibold leading-tight tracking-tight text-pm-light-headline md:text-4xl lg:text-[2.5rem] lg:leading-[1.15]"
          >
            Für jede gesundheitliche Fragestellung die passende fachliche
            Perspektive
          </h2>
          <p className="mt-5 text-base leading-relaxed text-pm-light-text-1 md:mt-6 md:text-lg">
            Unser Angebot reicht von medizinischen, psychologischen und
            psychiatrischen bis zu arbeits- und sozialmedizinischen
            Begutachtungen – bei Bedarf auch fachübergreifend kombiniert.
          </p>
        </div>

        <div
          ref={mobileScrollRef}
          onScroll={onMobileScroll}
          className="mt-12 -mx-2 flex snap-x snap-mandatory flex-row items-stretch gap-4 overflow-x-auto overflow-y-hidden scroll-pl-2 scroll-pr-2 px-2 [-webkit-overflow-scrolling:touch] scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:mt-16 md:flex-col md:gap-10 md:overflow-visible md:px-0 md:snap-none lg:gap-12"
        >
          {HOME_ASSESSMENT_OFFERINGS.map((offering) => (
            <OfferingBlock key={offering.id} {...offering} />
          ))}
        </div>

        <div
          className="mt-6 flex justify-center gap-2 md:hidden"
          role="tablist"
          aria-label="Begutachtungsarten"
        >
          {HOME_ASSESSMENT_OFFERINGS.map((offering, idx) => (
            <DotButton
              key={offering.id}
              active={mobileActiveIndex === idx}
              onClick={() => scrollMobileToIndex(idx)}
              label={`${offering.stageLabel} anzeigen`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
