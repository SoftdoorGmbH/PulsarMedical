import { Check } from "lucide-react";
import { Button } from "@/components/Button";
import type { AudienceHeroContent } from "@/content/audiencePages";

export function AudienceHero({
  ariaLabel,
  title,
  paragraphs,
  badges,
}: AudienceHeroContent) {
  return (
    <section
      className="relative md:my-6 overflow-hidden lg:min-h-168 bg-linear-to-br from-[#93D9FF] from-65% to-[#D9E8F6] pt-28 pb-10 md:pt-36 md:pb-12 lg:mx-5 lg:mb-8 lg:rounded-[2.5rem] lg:pt-[clamp(8.5rem,18vw,12rem)] lg:pb-14"
      aria-label={ariaLabel}
    >
      <div className="relative mx-auto max-w-7xl px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="flex max-w-3xl flex-col items-start text-left">
          <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-pm-light-headline sm:text-5xl">
            {title}
          </h1>
          {paragraphs.map((paragraph, index) => (
            <p
              key={paragraph}
              className={[
                "text-lg leading-relaxed text-pm-light-text-1 md:text-xl",
                index === 0 ? "mt-6" : "mt-4",
              ].join(" ")}
            >
              {paragraph}
            </p>
          ))}

          <div className="mt-6 md:mt-8">
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:justify-start sm:gap-6 md:gap-x-4">
              <Button to="/kontakt">Beratungstermin anfragen</Button>
              <Button to="/jobcenter" variant="secondary">
                Lösungen entdecken
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-6 md:mt-8">
          <ul className="flex flex-col items-start gap-y-2 text-sm sm:flex-row sm:flex-nowrap sm:justify-start sm:gap-x-5 sm:gap-y-0 sm:text-base md:gap-x-6 lg:gap-x-8">
            {badges.map((label) => (
              <li
                key={label}
                className="inline-flex items-center gap-1.5 font-medium text-pm-light-headline"
              >
                <Check
                  className="size-3.5 shrink-0 text-pm-light-text-2"
                  strokeWidth={2.5}
                  aria-hidden
                />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
