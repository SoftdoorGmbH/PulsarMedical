import { CheckCircle2 } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import type {
  OfferUseCaseItem,
  OfferUseCasesContent,
} from "@/content/offerUseCases";

const VISIBLE_COUNT = 3;
const VIEWPORT_HEIGHT = 390;
const ITEM_HEIGHT = VIEWPORT_HEIGHT / VISIBLE_COUNT;
const STICKY_TOP = 112;
const IMAGE_MAX_HEIGHT = 460;

const checkClassName =
  "mt-0.5 size-6 shrink-0 text-pm-light-text-2 [&>circle]:fill-pm-light-icon-bg [&>circle]:stroke-pm-light-icon-border [&>path]:origin-[12px_12px] [&>path]:scale-[1.18] [&>path]:stroke-[1.75] [&>path]:stroke-pm-light-text-2";

const imageWrapperClassName =
  "relative overflow-hidden rounded-2xl border-6 border-pm-light-container-border bg-pm-light-container shadow-[0_14px_44px_-14px_rgb(2_52_78_/0.14)]";

function MobileAccordionTrigger({
  open,
  onToggle,
  title,
}: {
  open: boolean;
  onToggle: () => void;
  title: string;
}) {
  return (
    <button
      type="button"
      aria-expanded={open}
      className="flex w-full cursor-pointer items-center justify-between pt-6 pb-5.5 lg:hidden"
      onClick={onToggle}
    >
      <h3 className="flex items-start gap-3 pr-4 text-left text-xl leading-tight tracking-tight text-pm-light-headline">
        <CheckCircle2 className={checkClassName} aria-hidden />
        <span>{title}</span>
      </h3>
      <span
        className="relative flex h-4 min-w-4 shrink-0 items-center justify-center"
        aria-hidden
      >
        <span
          className={`absolute h-4 w-0.5 rounded-full bg-pm-light-headline transition-transform duration-300 ${open ? "scale-0 rotate-90" : "scale-100"}`}
        />
        <span className="absolute h-0.5 w-4 rounded-full bg-pm-light-headline" />
      </span>
    </button>
  );
}

function UseCaseImage({
  imageSrc,
  imageAlt,
  className = "",
  compact = false,
}: {
  imageSrc: string;
  imageAlt: string;
  className?: string;
  compact?: boolean;
}) {
  return (
    <div
      className={[
        imageWrapperClassName,
        compact ? "mx-auto w-[88%]" : "aspect-4/3",
        className,
      ].join(" ")}
      style={compact ? { maxHeight: IMAGE_MAX_HEIGHT } : undefined}
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        loading="lazy"
        decoding="async"
        className="size-full object-cover"
      />
    </div>
  );
}

function UseCaseSection({
  item,
  index,
  isLast,
  mobileOpen,
  onMobileToggle,
  imageSrc,
  imageAlt,
}: {
  item: OfferUseCaseItem;
  index: number;
  isLast: boolean;
  mobileOpen: boolean;
  onMobileToggle: () => void;
  imageSrc: string;
  imageAlt: string;
}) {
  const panelId = `offer-use-case-panel-${index}`;

  return (
    <div data-index={index} className="relative">
      <article
        className={[
          "relative box-border bg-white lg:flex lg:h-32.5 lg:flex-col lg:justify-center lg:px-8 lg:py-3 lg:pl-8 lg:pr-6",
          isLast ? "" : "border-b border-pm-light-container-border",
        ].join(" ")}
      >
        <MobileAccordionTrigger
          open={mobileOpen}
          onToggle={onMobileToggle}
          title={item.title}
        />

        <div className="hidden lg:block lg:mb-1">
          <h3 className="flex items-start gap-3 text-lg leading-snug tracking-tight text-pm-light-headline">
            <CheckCircle2 className={checkClassName} aria-hidden />
            <span>{item.title}</span>
          </h3>
        </div>

        <div
          id={panelId}
          className={[
            "overflow-hidden transition-[grid-template-rows] duration-300 ease-out lg:block! lg:overflow-hidden",
            mobileOpen
              ? "grid grid-rows-[1fr] pb-7.5 lg:pb-0"
              : "grid grid-rows-[0fr] lg:grid-rows-none",
          ].join(" ")}
        >
          <div className="min-h-0 lg:min-h-0">
            <p className="line-clamp-2 text-sm leading-relaxed text-pm-light-text-1 lg:max-w-xl">
              {item.description}
            </p>
            <UseCaseImage
              imageSrc={imageSrc}
              imageAlt={imageAlt}
              className="mt-6.5 lg:hidden"
            />
          </div>
        </div>
      </article>
    </div>
  );
}

export function OfferUseCasesSection({
  headingId,
  title,
  description,
  imageSrc,
  imageAlt,
  items,
}: OfferUseCasesContent) {
  const pinRef = useRef<HTMLDivElement>(null);
  const spacerRef = useRef<HTMLDivElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [mobileOpenIndex, setMobileOpenIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  const scrollLength = Math.max(0, items.length - VISIBLE_COUNT) * ITEM_HEIGHT;

  const updateScroll = useCallback(() => {
    if (!window.matchMedia("(min-width: 1024px)").matches) return;

    const pin = pinRef.current;
    const spacer = spacerRef.current;
    if (!pin || !spacer) return;

    const pinTop = pin.getBoundingClientRect().top;
    const pinHeight = pin.offsetHeight;
    const pinBottom = STICKY_TOP + pinHeight;
    const spacerTop = spacer.getBoundingClientRect().top;
    const isPinned = pinTop <= STICKY_TOP + 1;

    if (!isPinned) {
      if (spacerTop <= pinBottom - scrollLength) {
        setScrollOffset(scrollLength);
      } else {
        setScrollOffset(0);
      }
      return;
    }

    setScrollOffset(Math.max(0, Math.min(scrollLength, pinBottom - spacerTop)));
  }, [scrollLength]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const syncDesktop = () => setIsDesktop(mq.matches);
    syncDesktop();
    mq.addEventListener("change", syncDesktop);
    return () => mq.removeEventListener("change", syncDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll);

    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, [isDesktop, updateScroll]);

  const showTopFade = scrollOffset > 0;
  const showBottomFade = scrollOffset < scrollLength;

  return (
    <section
      className="relative mb-10 bg-pm-light-bg py-16 sm:py-20 md:py-24 lg:mb-28"
      aria-labelledby={headingId}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-10">
        <div ref={pinRef} className="lg:sticky lg:top-28">
          <header className="mx-auto mb-7.5 max-w-3xl text-center md:mb-10">
            <h2
              id={headingId}
              className="text-3xl max-md:text-left leading-tight tracking-tight text-pm-light-headline md:text-4xl lg:text-[2.75rem] lg:leading-[1.12]"
            >
              {title}
            </h2>
            <p className="mt-5 text-base max-md:text-left leading-relaxed text-pm-light-text-1 md:mt-6 md:text-lg">
              {description}
            </p>
          </header>

          <div style={isDesktop ? { height: VIEWPORT_HEIGHT } : undefined}>
            <div className="relative md:mt-24 flex h-full items-center gap-x-10 lg:gap-x-17.5">
              <div className="hidden h-full flex-1 items-center justify-center lg:flex">
                <UseCaseImage imageSrc={imageSrc} imageAlt={imageAlt} compact />
              </div>

              <div className="relative h-full w-full lg:flex-1 lg:overflow-hidden">
                <div
                  className={[
                    "pointer-events-none absolute top-0 left-0 z-10 hidden h-12.5 w-full bg-linear-to-b from-pm-light-bg to-transparent transition-opacity duration-300 lg:block",
                    showTopFade ? "opacity-100" : "opacity-0",
                  ].join(" ")}
                  aria-hidden
                />
                <div
                  className={[
                    "pointer-events-none absolute bottom-0 left-0 z-10 hidden h-12.5 w-full bg-linear-to-t from-pm-light-bg to-transparent transition-opacity duration-300 lg:block",
                    showBottomFade ? "opacity-100" : "opacity-0",
                  ].join(" ")}
                  aria-hidden
                />

                <div
                  className="relative will-change-transform lg:max-w-xl xl:max-w-2xl"
                  style={
                    isDesktop
                      ? { transform: `translateY(-${scrollOffset}px)` }
                      : undefined
                  }
                >
                  {items.map((item, index) => (
                    <UseCaseSection
                      key={item.title}
                      item={item}
                      index={index}
                      isLast={index === items.length - 1}
                      mobileOpen={mobileOpenIndex === index}
                      onMobileToggle={() =>
                        setMobileOpenIndex((current) =>
                          current === index ? -1 : index,
                        )
                      }
                      imageSrc={imageSrc}
                      imageAlt={imageAlt}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {isDesktop && scrollLength > 0 ? (
          <div
            ref={spacerRef}
            className="hidden lg:block"
            style={{ height: scrollLength }}
            aria-hidden
          />
        ) : null}
      </div>
    </section>
  );
}
