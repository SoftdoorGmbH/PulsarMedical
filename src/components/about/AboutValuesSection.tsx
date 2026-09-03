import { useCallback, useEffect, useRef, useState } from "react";

const ABOUT_VALUES = [
  {
    title: "Wir hören genau hin",
    content:
      "Komplexe Situationen lassen sich nicht mit schnellen Antworten lösen. Wir nehmen uns die Zeit, Fragen richtig zu verstehen und die Perspektiven einzubeziehen, die für den jeweiligen Fall relevant sind.",
  },
  {
    title: "Wir verbinden Fachwissen mit Verständlichkeit",
    content:
      "Medizinische und psychologische Einschätzungen müssen fundiert sein. Sie müssen aber auch so aufbereitet werden, dass Auftraggeber damit arbeiten und Entscheidungen nachvollziehbar treffen können.",
  },
  {
    title: "Wir arbeiten respektvoll",
    content:
      "Eine Begutachtung ist für viele Menschen keine Alltagssituation. Wir begegnen jeder Person mit Respekt, Ruhe und professioneller Distanz – unabhängig davon, wie komplex oder belastend die persönliche Situation ist.",
  },
  {
    title: "Wir bleiben lösungsorientiert",
    content:
      "Nicht jeder Fall ist eindeutig. Wenn Informationen fehlen, Fragen offen sind oder mehrere Perspektiven zusammenkommen, suchen wir nach einem strukturierten Weg, der die weitere Planung möglich macht.",
  },
  {
    title: "Wir begegnen Menschen auf Augenhöhe",
    content:
      "Jeder Mensch bringt individuelle Erfahrungen, Voraussetzungen und Herausforderungen mit. Deshalb orientieren wir uns an der jeweiligen Lebenssituation, erklären unser Vorgehen verständlich und beziehen die Person aktiv in das Gespräch ein. So schaffen wir eine vertrauensvolle Grundlage, auf der sich Menschen ernst genommen, verstanden und dort abgeholt fühlen, wo sie aktuell stehen.",
  },
  {
    title: "Wir machen Zusammenarbeit einfach",
    content:
      "Hinter jedem Auftrag stehen viele Beteiligte, Termine und sensible Informationen. Wir wollen, dass Zusammenarbeit klar, verlässlich und unkompliziert bleibt – mit festen Ansprechpartner:innen und nachvollziehbaren Abläufen.",
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

export function AboutValuesSection() {
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
      className="bg-pm-light-bg py-16 md:py-24"
      aria-labelledby="about-values-heading"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-10">
        <h2
          id="about-values-heading"
          className="text-left text-3xl font-semibold leading-snug tracking-tight text-pm-light-headline md:text-center md:text-4xl"
        >
          Was uns wichtig ist
        </h2>
        <ul
          ref={mobileScrollRef}
          onScroll={onMobileScroll}
          className="mt-10 -mx-2 flex list-none snap-x snap-mandatory flex-row items-stretch gap-4 overflow-x-auto overflow-y-hidden scroll-pl-2 scroll-pr-2 px-2 [-webkit-overflow-scrolling:touch] scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:mt-14 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:snap-none lg:gap-8"
        >
          {ABOUT_VALUES.map((value) => (
            <li
              key={value.title}
              className="w-[min(88vw,24rem)] max-w-md shrink-0 snap-center rounded-2xl border-4 border-pm-light-container-border bg-white p-6 shadow-[0_8px_24px_-12px_rgb(2_52_78_/0.12)] md:w-auto md:max-w-none md:snap-normal md:p-8 md:odd:last:col-span-2 md:odd:last:w-[calc((100%-1.5rem)/2)] md:odd:last:justify-self-center lg:odd:last:w-[calc((100%-2rem)/2)]"
            >
              <h3 className="text-xl font-semibold tracking-tight text-pm-light-headline">
                {value.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-pm-light-text-1">
                {value.content}
              </p>
            </li>
          ))}
        </ul>
        <div
          className="mt-6 flex justify-center gap-2 md:hidden"
          role="tablist"
          aria-label="Werte"
        >
          {ABOUT_VALUES.map((value, idx) => (
            <DotButton
              key={value.title}
              active={mobileActiveIndex === idx}
              onClick={() => scrollMobileToIndex(idx)}
              label={`${value.title} anzeigen`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
