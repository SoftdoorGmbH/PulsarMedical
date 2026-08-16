import type { ReactNode } from "react";
import { BarChart3, Heart, Sparkles, Users } from "lucide-react";

const iconProps = {
  className: "size-7",
  strokeWidth: 1.75,
  "aria-hidden": true as const,
};

function FeatureCard({
  variant,
  icon,
  children,
  className = "",
}: {
  variant: "dark" | "light";
  icon: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  const dark = variant === "dark";
  return (
    <article
      className={`min-h-64 max-h-72 relative rounded-[1.75rem] p-6 shadow-[0_14px_44px_-14px_rgb(2_52_78_/0.22)] md:p-8 ${dark ? "bg-pm-dark-container border-6 border-pm-dark-container-border" : "bg-pm-light-container border-6 border-pm-light-container-border"} ${className}`}
    >
      <div className="inline-flex rounded-xl bg-white p-2.5 shadow-sm ring-1 ring-black/6">
        <span className={dark ? "text-pm-dark-icon" : "text-pm-light-icon"}>
          {icon}
        </span>
      </div>
      <p
        className={
          dark
            ? "mt-5 text-base leading-relaxed text-pm-dark-text-2 md:text-lg"
            : "mt-5 text-base leading-relaxed text-pm-light-text-1 md:text-lg"
        }
      >
        {children}
      </p>
    </article>
  );
}

const CARDS: {
  id: string;
  variant: "dark" | "light";
  icon: ReactNode;
  text: string;
  overlap: string;
}[] = [
  {
    id: "process",
    variant: "dark",
    icon: <BarChart3 {...iconProps} />,
    text: "Klare Abläufe und belastbare Kennzahlen: Wir strukturieren Diagnostik, Dokumentation und Übergaben so, dass Teams schneller die richtigen Entscheidungen treffen — ohne bürokratische Brüche.",
    overlap: "z-10 md:z-20",
  },
  {
    id: "people",
    variant: "light",
    icon: <Heart {...iconProps} />,
    text: "Menschen stehen im Mittelpunkt — ob Bewerbung, Einarbeitung oder langfristige Betreuung. Unser Ansatz bleibt respektvoll, transparent und auf echte Bedarfe zugeschnitten.",
    overlap: "z-20 md:-ml-4 md:mt-1 lg:-ml-6 lg:mt-8",
  },
  {
    id: "innovation",
    variant: "light",
    icon: <Sparkles {...iconProps} />,
    text: "Moderne Methoden und pragmatische Standards verbinden wir zu Lösungen, die im Klinikalltag funktionieren — von digitalen Schnittstellen bis zu bewährten Qualitätsritualen im Team.",
    overlap: "z-10 md:-mt-4 md:mr-1 lg:-mt-6 lg:mr-2",
  },
  {
    id: "network",
    variant: "dark",
    icon: <Users {...iconProps} />,
    text: "Ein eingespieltes Netzwerk aus Fach- und Führungskräften steht Ihnen zur Seite: Wir bringen die richtigen Profile zusammen — schnell, verlässlich und regelkonform.",
    overlap: "z-30 md:-ml-4 md:-mt-4 lg:-ml-12 lg:-mt-5",
  },
];

/** Feature-Karten unter dem Hero: weißer Seitenhintergrund, überlappendes 2×2-Raster. */
export function HomeFeatureCards() {
  return (
    <section
      className="bg-pm-light-bg py-16"
      aria-labelledby="feature-cards-heading"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-10">
        <h2
          id="feature-cards-heading"
          className="mx-auto max-w-3xl text-center text-3xl font-semibold leading-tight tracking-tight text-pm-light-headline md:text-4xl lg:text-[2.5rem] lg:leading-[1.15]"
        >
          Gemeinsam die nächste Stufe der Versorgung gestalten
        </h2>

        <div className="relative mx-auto mt-14 max-w-lg sm:max-w-2xl md:mt-20 md:max-w-4xl lg:max-w-5xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 md:gap-3 lg:gap-4">
            {CARDS.map((card) => (
              <FeatureCard
                key={card.id}
                variant={card.variant}
                icon={card.icon}
                className={card.overlap}
              >
                {card.text}
              </FeatureCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
