import type { OfferUseCasesContent } from "@/content/offerUseCases";

export function OfferUseCasesSection({
  headingId,
  title,
  description,
  images,
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
          <div className="flex flex-col justify-center">
            {items.map((item) => (
              <div
                key={item.title}
                className="border-b border-pm-light-container-border/60 py-4 first:pt-0 last:border-b-0 last:pb-0 lg:py-6"
              >
                <h3 className="text-xl leading-tight tracking-tight text-pm-light-headline sm:text-[1.35rem]">
                  {item.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-pm-light-text-1">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="hidden md:block relative mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none">
            <div className="flex flex-col justify-between gap-4 lg:gap-5">
              {images.map((image, index) => (
                <div
                  key={image.src}
                  className={`relative w-[62%] sm:w-[58%] ${
                    index % 2 === 0 ? "self-start" : "self-end"
                  }`}
                >
                  <div className="overflow-hidden rounded-2xl border border-pm-light-container-border bg-pm-light-container p-1.5 shadow-[0_16px_32px_-16px_rgb(2_52_78_/0.18)] sm:p-2">
                    <div className="overflow-hidden rounded-xl bg-white">
                      <img
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                        decoding="async"
                        className="aspect-5/4 w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
