import { useCallback, useEffect, useRef, useState } from "react";
import type { OfferPartnershipContent } from "@/content/offerPartnership";

const cardClassName =
  "flex h-full flex-col rounded-2xl border-6 border-pm-light-container-border bg-pm-light-container p-6 shadow-[0_14px_44px_-14px_rgb(2_52_78_/0.14)] sm:p-8";

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

function PartnershipCard({
  number,
  title,
  description,
  icon: Icon,
}: OfferPartnershipContent["steps"][number]) {
  return (
    <article className={cardClassName}>
      <div className="flex items-center justify-between gap-3">
        <span
          className="flex size-12 items-center justify-center rounded-2xl border border-pm-light-icon-border bg-pm-light-icon-bg text-pm-light-icon"
          aria-hidden
        >
          <Icon className="size-6" strokeWidth={1.5} />
        </span>
        <span className="font-display-serif text-3xl font-semibold tracking-tight text-pm-light-text-2">
          {number}
        </span>
      </div>

      <h3 className="mt-6 text-xl font-semibold tracking-tight text-pm-light-headline">
        {title}
      </h3>
      <p className="mt-3 text-base leading-relaxed text-pm-light-text-1">
        {description}
      </p>
    </article>
  );
}

export function OfferPartnershipSection({
  headingId,
  title,
  subtitle,
  steps,
}: OfferPartnershipContent) {
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);
  const mobileScrollRef = useRef<HTMLOListElement>(null);
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

        <ol
          ref={mobileScrollRef}
          onScroll={onMobileScroll}
          className="mt-10 -mx-2 flex list-none snap-x snap-mandatory flex-row gap-4 overflow-x-auto scroll-pl-2 scroll-pr-2 p-0 px-2 [-webkit-overflow-scrolling:touch] scrollbar-none [-ms-overflow-style:none] sm:mt-12 [&::-webkit-scrollbar]:hidden lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:px-0 lg:snap-none"
        >
          {steps.map((step) => (
            <li
              key={step.number}
              className="w-[min(88vw,24rem)] max-w-md shrink-0 snap-center lg:w-auto lg:max-w-none lg:snap-normal"
            >
              <PartnershipCard {...step} />
            </li>
          ))}
        </ol>

        <div
          className="mt-6 flex justify-center gap-2 lg:hidden"
          role="tablist"
          aria-label="Partnerschaftsschritte"
        >
          {steps.map((step, idx) => (
            <DotButton
              key={step.number}
              active={mobileActiveIndex === idx}
              onClick={() => scrollMobileToIndex(idx)}
              label={`${step.title} anzeigen`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
