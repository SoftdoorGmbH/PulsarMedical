import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Check } from "lucide-react";
import type { OfferUseCasesContent } from "@/content/offerUseCases";

const DEFAULT_EYEBROW = "Einsatzfälle";

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

function moveActiveIndex(from: number, key: string, count: number) {
  if (key === "ArrowDown" || key === "ArrowRight") return (from + 1) % count;
  if (key === "ArrowUp" || key === "ArrowLeft") {
    return (from - 1 + count) % count;
  }
  if (key === "Home") return 0;
  if (key === "End") return count - 1;
  return null;
}

export function OfferUseCasesSection({
  headingId,
  title,
  description,
  eyebrow = DEFAULT_EYEBROW,
  image,
  items,
}: OfferUseCasesContent) {
  const listId = useId();
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);
  const mobileScrollRef = useRef<HTMLUListElement>(null);
  const mobileScrollRafRef = useRef<number | null>(null);

  useEffect(() => {
    setActiveIndex(0);
    setMobileActiveIndex(0);
  }, [headingId]);

  const selectIndex = (index: number) => {
    setActiveIndex(index);
    document.getElementById(`${listId}-option-${index}`)?.focus();
  };

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
          aria-label={eyebrow}
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

        <div className="relative hidden w-full flex-col items-stretch justify-center md:flex lg:mt-10 lg:flex-row lg:items-center lg:justify-start lg:gap-8">
          <div className="relative w-full min-w-0 lg:w-152.5 lg:shrink-0">
            <div
              role="radiogroup"
              aria-labelledby={headingId}
              className="flex w-full flex-col gap-2.5"
            >
              {items.map((item, index) => {
                const selected = index === activeIndex;
                const optionId = `${listId}-option-${index}`;
                const descriptionId = `${listId}-description-${index}`;

                return (
                  <div
                    key={item.title}
                    id={optionId}
                    role="radio"
                    aria-checked={selected}
                    aria-labelledby={`${optionId}-label`}
                    aria-describedby={selected ? descriptionId : undefined}
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setActiveIndex(index)}
                    onKeyDown={(event) => {
                      const next = moveActiveIndex(
                        index,
                        event.key,
                        items.length,
                      );
                      if (next == null) return;
                      event.preventDefault();
                      selectIndex(next);
                    }}
                    className={`relative cursor-pointer rounded-2xl border-2 border-pm-light-container-border px-5 py-4 transition-[background-color,box-shadow] duration-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pm-light-text-2 sm:px-6 sm:py-5 ${
                      selected
                        ? "bg-white shadow-[0_8px_24px_-12px_rgb(2_52_78_/0.12)]"
                        : "hover:bg-pm-light-container/70"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="flex size-6 shrink-0 items-center justify-center rounded-full border border-pm-light-icon-border bg-pm-light-icon-bg text-pm-light-icon shadow-[0_1px_2px_rgb(2_52_78_/0.06)]"
                        aria-hidden
                      >
                        <Check className="size-3.5" strokeWidth={2.25} />
                      </span>
                      <p
                        id={`${optionId}-label`}
                        className="min-w-0 text-sm font-medium leading-6 text-pm-light-headline sm:text-base md:text-lg md:leading-7"
                      >
                        {item.title}
                      </p>
                    </div>
                    <div
                      aria-hidden={!selected}
                      className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-in-out motion-reduce:transition-none ${
                        selected
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="min-h-0 overflow-hidden">
                        <p
                          id={descriptionId}
                          className="pt-3 text-base font-normal leading-6 text-pm-light-text-1"
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative mx-auto hidden w-full max-w-md overflow-hidden rounded-2xl p-2 shadow-[0_8px_24px_-12px_rgb(2_52_78_/0.1)] sm:p-3 md:block lg:mx-0 lg:w-140 lg:max-w-140 lg:shrink-0">
            <div className="relative w-full pb-3 pr-3">
              <div
                aria-hidden
                className="absolute right-0 bottom-0 h-[calc(100%-0.75rem)] w-[calc(100%-0.75rem)] rounded-2xl bg-pm-dark-container"
              />
              <div className="relative overflow-hidden rounded-2xl border-6 border-pm-light-container-border bg-pm-light-container shadow-[0_14px_44px_-14px_rgb(2_52_78_/0.14)]">
                <img
                  src={image.src}
                  alt={image.alt}
                  width={640}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="aspect-4/5 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
