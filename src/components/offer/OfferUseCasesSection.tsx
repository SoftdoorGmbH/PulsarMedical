import { useCallback, useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import type { OfferUseCasesContent } from "@/content/offerUseCases";

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

export function OfferUseCasesSection({
  headingId,
  title,
  description,
  image,
  items,
}: OfferUseCasesContent) {
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);
  const mobileScrollRef = useRef<HTMLUListElement>(null);
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
      className="bg-pm-light-bg py-16 sm:py-20 md:py-24"
      aria-labelledby={headingId}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-10">
        <header className="mx-auto max-w-3xl text-left md:text-center">
          <h2
            id={headingId}
            className="text-3xl leading-tight tracking-tight text-pm-light-headline md:text-4xl lg:text-[2.75rem] lg:leading-[1.12]"
          >
            {title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-pm-light-text-1 md:mt-6 md:text-lg">
            {description}
          </p>
        </header>

        <ul
          ref={mobileScrollRef}
          onScroll={onMobileScroll}
          className="mt-12 -mx-2 flex list-none snap-x snap-mandatory flex-row items-stretch gap-4 overflow-x-auto overflow-y-hidden scroll-pl-2 scroll-pr-2 px-2 [-webkit-overflow-scrolling:touch] scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:hidden"
        >
          {items.map((item) => (
            <li
              key={item.title}
              className="flex w-[min(88vw,24rem)] max-w-md shrink-0 snap-center flex-col rounded-2xl border-4 border-pm-light-container-border bg-white p-6 shadow-[0_8px_24px_-12px_rgb(2_52_78_/0.12)]"
            >
              <span
                className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-pm-light-icon-border bg-pm-light-icon-bg text-pm-light-icon"
                aria-hidden
              >
                <Check className="size-4" strokeWidth={2} />
              </span>
              <h3 className="mt-4 text-lg font-medium leading-tight tracking-tight text-pm-light-headline">
                {item.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-pm-light-text-1">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
        <div
          className="mt-6 flex justify-center gap-2 md:hidden"
          role="tablist"
          aria-label="Einsatzfälle"
        >
          {items.map((item, idx) => (
            <DotButton
              key={item.title}
              active={mobileActiveIndex === idx}
              onClick={() => scrollMobileToIndex(idx)}
              label={`${item.title} anzeigen`}
            />
          ))}
        </div>

        <div className="mt-12 hidden gap-10 md:grid lg:mt-16 lg:grid-cols-2 lg:items-center lg:gap-14 xl:gap-20">
          <ul className="flex flex-col">
            {items.map((item) => (
              <li
                key={item.title}
                className="flex items-center gap-4 border-b border-pm-light-container-border/60 py-4 first:pt-0 last:border-b-0 last:pb-0 sm:gap-5 lg:py-5"
              >
                <span
                  className="flex size-8 shrink-0 items-center justify-center rounded-xl border border-pm-light-icon-border bg-pm-light-icon-bg text-pm-light-icon sm:size-9 md:size-11"
                  aria-hidden
                >
                  <Check className="size-4 md:size-5" strokeWidth={2} />
                </span>
                <div>
                  <h3 className="text-lg font-medium leading-tight tracking-tight text-pm-light-headline sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-base leading-relaxed text-pm-light-text-1">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="relative mx-auto w-full max-w-md pb-3 pr-3 lg:mx-0 lg:max-w-none">
            <div
              aria-hidden
              className="absolute right-0 bottom-0 h-[calc(100%-0.75rem)] w-[calc(100%-0.75rem)] rounded-2xl bg-pm-dark-container"
            />
            <div className="relative overflow-hidden rounded-2xl border-6 border-pm-light-container-border bg-pm-light-container shadow-[0_14px_44px_-14px_rgb(2_52_78_/0.14)]">
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                className="aspect-4/5 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
