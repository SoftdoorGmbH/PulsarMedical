import { Check } from "lucide-react";
import type { OfferUseCasesContent } from "@/content/offerUseCases";

export function OfferUseCasesSection({
  headingId,
  title,
  description,
  image,
  items,
}: OfferUseCasesContent) {
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

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-2 lg:items-center lg:gap-14 xl:gap-20">
          <ul className="flex flex-col">
            {items.map((item) => (
              <li
                key={item.title}
                className="flex items-center gap-4 border-b border-pm-light-container-border/60 py-4 first:pt-0 last:border-b-0 last:pb-0 sm:gap-5 lg:py-5"
              >
                <span
                  className="flex size-8 md:size-11 shrink-0 items-center justify-center rounded-xl border border-pm-light-icon-border bg-pm-light-icon-bg text-pm-light-icon sm:size-9"
                  aria-hidden
                >
                  <Check className="size-4 md:size-5" strokeWidth={2} />
                </span>
                <div>
                  <h3 className="text-lg font-medium leading-tight tracking-tight text-pm-light-headline sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-1 leading-relaxed text-pm-light-text-1 text-base">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="hidden md:block relative mx-auto w-full max-w-md pb-3 pr-3 lg:mx-0 lg:max-w-none">
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
