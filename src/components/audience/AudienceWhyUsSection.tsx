import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/Button";
import type {
  AudienceWhyUsContent,
  AudienceWhyUsItem,
} from "@/content/audienceWhyUs";

function DarkAccordion({
  items,
  defaultOpenIndex = 0,
  className = "",
}: {
  items: readonly AudienceWhyUsItem[];
  defaultOpenIndex?: number;
  className?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  return (
    <div className={className}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.title}
            data-state={isOpen ? "open" : "closed"}
            className="mb-4 overflow-hidden rounded-xl border-2 border-pm-dark-container-border bg-pm-dark-container transition-[border-color] duration-200 last:mb-0 hover:border-pm-dark-icon/40 data-[state=open]:border-pm-dark-icon/60"
          >
            <button
              type="button"
              aria-expanded={isOpen}
              className="flex w-full cursor-pointer items-center justify-between gap-3 px-4 py-3.5 text-left sm:px-5 md:px-6 md:py-4"
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <h3 className="min-w-0 flex-1 text-base font-semibold leading-tight text-pm-dark-headline sm:text-lg">
                {item.title}
              </h3>
              <span className="shrink-0 text-pm-dark-icon" aria-hidden>
                {isOpen ? (
                  <Minus className="size-5 sm:size-6" strokeWidth={2} />
                ) : (
                  <Plus className="size-5 sm:size-6" strokeWidth={2} />
                )}
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-120 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-4 pb-4 sm:px-5 md:px-6 md:pb-5">
                <div className="border-t border-pm-dark-divider pt-3 md:pt-4">
                  <p className="text-sm leading-relaxed text-pm-dark-text-1 md:text-base">
                    {item.content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function AudienceWhyUsSection({
  headingId,
  title,
  subtitle,
  ariaLabel,
  items,
  cta,
  imageSrc,
  imageAlt,
}: AudienceWhyUsContent) {
  return (
    <section
      className="border-y border-pm-dark-divider bg-pm-dark-bg py-16 md:py-24"
      aria-labelledby={headingId}
      aria-label={ariaLabel}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div className="w-full">
            <h2
              id={headingId}
              className="text-3xl font-semibold leading-tight tracking-tight text-pm-dark-headline md:text-4xl lg:text-[2.5rem] lg:leading-[1.15]"
            >
              {title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-pm-dark-text-1 md:mt-6 md:text-lg">
              {subtitle}
            </p>

            <DarkAccordion items={items} className="mt-10" />

            <div className="relative mt-8 aspect-4/3 overflow-hidden rounded-2xl ring-1 ring-white/10 md:hidden">
              <img
                src={imageSrc}
                alt={imageAlt}
                width={640}
                height={480}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 size-full object-cover"
              />
            </div>

            <div className="mt-8">
              <Button to={cta.to} variant="dark" fullWidth="md">
                {cta.label}
              </Button>
            </div>
          </div>

          <div className="relative hidden aspect-4/5 w-full overflow-hidden rounded-2xl ring-1 ring-white/10 md:block lg:aspect-auto lg:min-h-112">
            <img
              src={imageSrc}
              alt={imageAlt}
              width={640}
              height={800}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 size-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
