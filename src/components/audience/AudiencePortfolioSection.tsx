import { useId, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/Button";
import type { AudiencePortfolioContent } from "@/content/audiencePortfolio";

const checkClassName =
  "mt-0.5 size-7 shrink-0 text-pm-light-text-2 [&>circle]:fill-pm-light-icon-bg [&>circle]:stroke-pm-light-icon-border [&>path]:origin-[12px_12px] [&>path]:scale-[1.18] [&>path]:stroke-[1.75] [&>path]:stroke-pm-light-text-2";

export function AudiencePortfolioSection({
  headingId,
  title,
  subtitle,
  ariaLabel,
  cta,
  items,
}: AudiencePortfolioContent) {
  const baseId = useId();
  const [activeIndex, setActiveIndex] = useState(0);
  const active = items[activeIndex]!;

  return (
    <section
      id="portfolio"
      className="scroll-mt-24 border-y border-pm-light-container-border bg-pm-light-container py-16 sm:py-20 md:py-24"
      aria-labelledby={headingId}
      aria-label={ariaLabel}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-left md:text-center">
          <h2
            id={headingId}
            className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-pm-light-headline md:text-4xl lg:text-[2.5rem] lg:leading-[1.15]"
          >
            {title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-pm-light-text-1 md:mt-6 md:text-lg">
            {subtitle}
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Leistungsbereiche"
          className="mx-auto mt-10 flex w-full max-w-5xl flex-wrap items-center justify-start gap-2.5 sm:mt-12 sm:gap-3 md:justify-center"
        >
          {items.map((item, index) => {
            const selected = index === activeIndex;
            const tabId = `${baseId}-tab-${index}`;
            const panelId = `${baseId}-panel-${index}`;

            return (
              <button
                key={item.title}
                id={tabId}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={panelId}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActiveIndex(index)}
                onKeyDown={(event) => {
                  if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") {
                    return;
                  }
                  event.preventDefault();
                  const delta = event.key === "ArrowRight" ? 1 : -1;
                  const next = (index + delta + items.length) % items.length;
                  setActiveIndex(next);
                  document.getElementById(`${baseId}-tab-${next}`)?.focus();
                }}
                className={`shrink-0 rounded-full border px-3.5 py-2 text-center text-sm font-semibold tracking-wide whitespace-nowrap transition-[color,background-color,border-color,transform] duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pm-light-text-2 sm:px-4 sm:py-2.5 ${
                  selected
                    ? "z-10 -rotate-2 border-pm-light-button bg-pm-light-button text-white shadow-md"
                    : "rotate-0 border-pm-light-container-border bg-white/70 text-pm-light-text-1 hover:border-pm-light-text-2/55 hover:text-pm-light-headline"
                }`}
              >
                {item.chipTitle}
              </button>
            );
          })}
        </div>

        <div
          key={active.title}
          id={`${baseId}-panel-${activeIndex}`}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${activeIndex}`}
          className="mx-auto mt-8 max-w-5xl overflow-hidden rounded-2xl border-4 border-pm-light-container-border bg-white shadow-[0_14px_44px_-14px_rgb(2_52_78_/0.14)] motion-safe:animate-pm-portfolio-card-in sm:mt-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr]">
            <div className="flex flex-col justify-center p-5 sm:p-6 md:p-7 lg:p-8">
              <h3 className="font-display-serif text-xl font-semibold tracking-tight text-pm-light-headline sm:text-2xl">
                {active.title}
              </h3>
              <p className="mt-1.5 text-sm font-semibold leading-relaxed text-pm-light-text-1 sm:text-base">
                {active.intro}
              </p>

              <ul className="mt-4 flex flex-col gap-3 sm:mt-5 sm:gap-3.5">
                {active.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className={checkClassName} aria-hidden />
                    <span className="text-sm leading-relaxed text-pm-light-text-1 sm:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 sm:mt-6">
                <Button to={active.cta?.to ?? cta.to} fullWidth>
                  {active.cta?.label ?? cta.label}
                </Button>
              </div>
            </div>

            <div className="relative hidden min-h-56 md:block md:min-h-full">
              <img
                src={active.imageSrc}
                alt={active.imageAlt}
                width={480}
                height={560}
                loading={activeIndex === 0 ? "eager" : "lazy"}
                decoding="async"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
