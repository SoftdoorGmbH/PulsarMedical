import { useCallback, useEffect, useRef, useState } from "react";
import { Building2, Landmark, Shield } from "lucide-react";
import { Button } from "@/components/Button";

const PILLARS = [
  {
    id: "jobcenter",
    label: "Für Jobcenter",
    headline: "Den Weg zurück in Arbeit realistisch planen.",
    body: "Wenn gesundheitliche oder psychische Herausforderungen den Weg in den Arbeitsmarkt beeinflussen, ermöglicht PULSAR Medical eine fundierte Einschätzung der individuellen Leistungsfähigkeit, vorhandener Ressourcen und passender Unterstützungsangebote.",
    cta: "Lösungen entdecken",
    to: "/jobcenter",
    icon: Building2,
  },
  {
    id: "berufsgenossenschaften",
    label: "Für Berufsgenossenschaften",
    headline: "Arbeitsfähigkeit nach einem Unfall klar beurteilen.",
    body: "PULSAR Medical bewertet Unfallfolgen und funktionelle Einschränkungen fundiert und zeigt mögliche Entwicklungsperspektiven auf – als verlässliche Grundlage für eine gezielte Rehabilitationsplanung und eine nachhaltige berufliche Wiedereingliederung.",
    cta: "Lösungen entdecken",
    to: "/berufsgenossenschaften",
    icon: Shield,
  },
  {
    id: "rueckversicherer",
    label: "Für Rückversicherer",
    headline: "Leistungsfälle sicher und nachvollziehbar bewerten.",
    body: "PULSAR Medical erstellt eine differenzierte Einschätzung der beruflichen Leistungsfähigkeit, relevanter funktioneller Einschränkungen und der weiteren Entwicklung. So entstehen transparente und medizinisch fundierte Entscheidungsgrundlagen für die Leistungsprüfung.",
    cta: "Lösungen entdecken",
    to: "/rueckversicherer",
    icon: Landmark,
  },
] as const;

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

/** Zielgruppen-Säulen: Jobcenter, BG, Rückversicherer — Kartenraster mit Mobile-Carousel. */
export function HomeAudiencePillars() {
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
      className="bg-pm-light-bg py-16 sm:py-20 md:py-24"
      aria-labelledby="audience-pillars-heading"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-left md:text-center">
          <h2
            id="audience-pillars-heading"
            className="text-3xl font-semibold leading-tight tracking-tight text-pm-light-headline md:text-4xl lg:text-[2.5rem] lg:leading-[1.15]"
          >
            Mehr Klarheit bei komplexen Entscheidungen
          </h2>
          <p className="mt-5 text-base leading-relaxed text-pm-light-text-1 md:mt-6 md:text-lg">
            PULSAR Medical schafft die fachliche Grundlage für fundierte
            Entscheidungen in Integration, Rehabilitation und Leistungsprüfung.
          </p>
        </div>

        <div
          ref={mobileScrollRef}
          onScroll={onMobileScroll}
          className="mt-12 -mx-2 flex snap-x snap-mandatory flex-row gap-4 overflow-x-auto scroll-pl-2 scroll-pr-2 px-2 [-webkit-overflow-scrolling:touch] scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:mt-16 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:snap-none lg:gap-8"
        >
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.id}
                className="flex h-full min-h-152 md:min-h-0 w-[min(88vw,24rem)] max-w-md shrink-0 snap-center flex-col rounded-[1.75rem] border-6 border-pm-dark-container-border bg-pm-dark-container p-7 shadow-[0_14px_44px_-14px_rgb(2_52_78_/0.28)] duration-300 md:w-auto md:max-w-none md:snap-normal md:p-8"
              >
                <div className="inline-flex w-fit rounded-xl bg-white/10 p-2.5 ring-1 ring-white/10">
                  <Icon
                    className="size-6 text-pm-dark-icon"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                </div>

                <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-pm-dark-tag">
                  {pillar.label}
                </p>

                <h3 className="mt-2 text-xl font-semibold leading-snug tracking-tight text-pm-dark-headline md:text-[1.35rem]">
                  {pillar.headline}
                </h3>

                <p className="mt-4 grow rounded-2xl bg-white/5 p-5 text-base leading-relaxed text-pm-dark-text-2 md:mt-5">
                  {pillar.body}
                </p>

                <div className="mt-6 md:mt-8">
                  <Button to={pillar.to} variant="dark" fullWidth>
                    {pillar.cta}
                  </Button>
                </div>
              </article>
            );
          })}
        </div>

        <div
          className="mt-6 flex justify-center gap-2 md:hidden"
          role="tablist"
          aria-label="Zielgruppen"
        >
          {PILLARS.map((pillar, idx) => (
            <DotButton
              key={pillar.id}
              active={mobileActiveIndex === idx}
              onClick={() => scrollMobileToIndex(idx)}
              label={`${pillar.label} anzeigen`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
