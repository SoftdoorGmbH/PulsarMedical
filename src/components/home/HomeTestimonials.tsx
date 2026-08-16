import { useCallback, useEffect, useRef, useState } from "react";
import {
  HOME_TESTIMONIALS,
  HOME_TESTIMONIALS_SECTION,
  type HomeTestimonial,
} from "@/content/homeTestimonials";

const GHOST_MASK_FADE_DOWN =
  "linear-gradient(to bottom, transparent 0%, transparent 16%, rgb(0 0 0 / 0.9) 58%, rgb(0 0 0) 92%)";

const GHOST_MASK_FADE_UP =
  "linear-gradient(to bottom, rgb(0 0 0) 8%, rgb(0 0 0 / 0.9) 42%, transparent 84%, transparent 100%)";

function TestimonialGhostCard({ placement }: { placement: "top" | "bottom" }) {
  const mask = placement === "top" ? GHOST_MASK_FADE_DOWN : GHOST_MASK_FADE_UP;

  return (
    <div
      aria-hidden
      className="pointer-events-none h-48 shrink-0 select-none rounded-[1.75rem] border-6 border-pm-light-container-border/40 bg-pm-light-container shadow-[0_10px_32px_-16px_rgb(2_52_78_/0.18)]"
      style={{
        maskImage: mask,
        WebkitMaskImage: mask,
      }}
    />
  );
}

function TestimonialCard({
  testimonial,
  className = "",
}: {
  testimonial: HomeTestimonial;
  className?: string;
}) {
  return (
    <article
      className={`min-h-80 rounded-[1.75rem] border-6 border-pm-light-container-border bg-pm-light-container p-8 sm:p-9 lg:shadow-[0_10px_32px_-16px_rgb(2_52_78_/0.18)] ${className}`}
    >
      {testimonial.company ? (
        <h3 className="text-pretty text-base font-semibold tracking-tight text-pm-light-headline sm:text-lg">
          {testimonial.company}
        </h3>
      ) : null}
      <blockquote className="mt-5 text-pretty text-base leading-relaxed text-pm-light-text-1">
        <p>{testimonial.quote}</p>
      </blockquote>
      <footer className="mt-8">
        <p className="text-sm font-semibold text-pm-light-headline sm:text-[0.95rem]">
          {testimonial.author}
        </p>
        <p className="mt-1 text-sm text-pm-light-text-2">{testimonial.role}</p>
      </footer>
    </article>
  );
}

function TestimonialsMobileCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollRafRef = useRef<number | null>(null);

  const syncActiveIndex = useCallback(() => {
    const el = scrollRef.current;
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
    setActiveIndex((prev) => (prev === best ? prev : best));
  }, []);

  const onScroll = () => {
    if (scrollRafRef.current != null) {
      cancelAnimationFrame(scrollRafRef.current);
    }
    scrollRafRef.current = requestAnimationFrame(() => {
      scrollRafRef.current = null;
      syncActiveIndex();
    });
  };

  useEffect(() => {
    syncActiveIndex();
    window.addEventListener("resize", syncActiveIndex);
    return () => {
      window.removeEventListener("resize", syncActiveIndex);
      if (scrollRafRef.current != null) {
        cancelAnimationFrame(scrollRafRef.current);
      }
    };
  }, [syncActiveIndex]);

  const scrollToIndex = (idx: number) => {
    const scroller = scrollRef.current;
    const slide = scroller?.children[idx] as HTMLElement | undefined;
    slide?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  return (
    <div className="mt-12 md:hidden">
      <p className="sr-only" aria-live="polite">
        Aktuelle Stimme {activeIndex + 1} von {HOME_TESTIMONIALS.length}
      </p>

      <div
        ref={scrollRef}
        onScroll={onScroll}
        className="-mx-5 flex snap-x snap-mandatory flex-row gap-4 overflow-x-auto px-5 scrollbar-none [-webkit-overflow-scrolling:touch] sm:-mx-6 sm:px-6"
      >
        {HOME_TESTIMONIALS.map((testimonial) => (
          <div
            key={testimonial.id}
            className="w-[min(88vw,24rem)] max-w-md shrink-0 snap-center"
          >
            <TestimonialCard testimonial={testimonial} className="h-full" />
          </div>
        ))}
      </div>

      <div
        className="mt-6 flex justify-center gap-2"
        role="tablist"
        aria-label="Kundenstimmen"
      >
        {HOME_TESTIMONIALS.map((testimonial, idx) => (
          <button
            key={testimonial.id}
            type="button"
            aria-current={idx === activeIndex || undefined}
            aria-label={`Stimme ${idx + 1} von ${HOME_TESTIMONIALS.length}`}
            onClick={() => scrollToIndex(idx)}
            className={`h-2 rounded-full transition-all ${
              idx === activeIndex
                ? "w-8 bg-pm-light-button"
                : "w-2 bg-pm-light-container-border hover:bg-pm-light-text-2/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/** Kundenstimmen — Masonry-Grid auf Desktop, Carousel auf Mobile. */
export function HomeTestimonials() {
  const colLeft = HOME_TESTIMONIALS.slice(0, 2);
  const colMiddle = HOME_TESTIMONIALS.slice(2, 6);
  const colRight = HOME_TESTIMONIALS.slice(6, 8);

  const renderColumn = (
    testimonials: readonly HomeTestimonial[],
    withGhost: boolean,
  ) => (
    <div className="flex flex-col gap-8">
      {withGhost ? <TestimonialGhostCard placement="top" /> : null}
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
      ))}
      {withGhost ? <TestimonialGhostCard placement="bottom" /> : null}
    </div>
  );

  const { headline, subheadline } = HOME_TESTIMONIALS_SECTION;

  return (
    <section
      id="testimonials"
      className="border-b border-pm-light-container-border bg-pm-light-bg py-16 md:py-24"
      aria-labelledby="home-testimonials-heading"
    >
      <div className="mx-auto max-w-[min(90rem,calc(100%-2rem))] px-5 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-left md:text-center">
          <h2
            id="home-testimonials-heading"
            className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-pm-light-headline md:text-4xl lg:text-[2.5rem] lg:leading-[1.15]"
          >
            {headline}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-pm-light-text-1 md:mt-6 md:text-lg">
            {subheadline}
          </p>
        </div>

        <TestimonialsMobileCarousel />

        <ul className="mt-12 hidden list-none columns-2 gap-6 p-0 md:mt-14 md:block lg:hidden">
          {HOME_TESTIMONIALS.map((testimonial) => (
            <li key={testimonial.id} className="mb-8 break-inside-avoid">
              <TestimonialCard testimonial={testimonial} />
            </li>
          ))}
        </ul>

        <div className="mt-12 hidden gap-8 lg:mt-16 lg:grid lg:grid-cols-3 lg:gap-x-8">
          {renderColumn(colLeft, true)}
          {renderColumn(colMiddle, false)}
          {renderColumn(colRight, true)}
        </div>
      </div>
    </section>
  );
}
