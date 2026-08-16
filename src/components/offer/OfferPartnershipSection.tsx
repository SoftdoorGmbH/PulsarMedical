import type { OfferPartnershipContent } from "@/content/offerPartnership";

const cardClassName =
  "flex h-full flex-col rounded-2xl border-6 border-pm-light-container-border bg-pm-light-container p-6 shadow-[0_14px_44px_-14px_rgb(2_52_78_/0.14)] sm:p-8";

function PartnershipCard({
  number,
  title,
  description,
  icon: Icon,
}: OfferPartnershipContent["steps"][number]) {
  return (
    <li className={cardClassName}>
      <div className="flex items-center justify-between gap-3">
        <span
          className="flex size-12 items-center justify-center rounded-2xl border border-pm-light-icon-border bg-pm-light-icon-bg text-pm-light-icon"
          aria-hidden
        >
          <Icon className="size-6" strokeWidth={1.5} />
        </span>
        <span className="font-display-serif text-3xl font-semibold tracking-tight text-pm-light-text-2">
          {number}
        </span>
      </div>

      <h3 className="mt-6 text-xl font-semibold tracking-tight text-pm-light-headline">
        {title}
      </h3>
      <p className="mt-3 text-base leading-relaxed text-pm-light-text-1">
        {description}
      </p>
    </li>
  );
}

export function OfferPartnershipSection({
  headingId,
  title,
  subtitle,
  steps,
}: OfferPartnershipContent) {
  return (
    <section
      className="border-y border-pm-light-container-border bg-pm-light-container py-16 sm:py-20 md:py-24"
      aria-labelledby={headingId}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-left md:text-center">
          <h2
            id={headingId}
            className={
              "text-3xl leading-tight tracking-tight text-pm-light-headline md:text-4xl lg:text-[2.75rem] lg:leading-[1.12] "
            }
          >
            {title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-pm-light-text-1 md:mt-6 md:text-lg">
            {subtitle}
          </p>
        </div>

        <ol className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 lg:grid-cols-3 lg:gap-8">
          {steps.map((step) => (
            <PartnershipCard key={step.number} {...step} />
          ))}
        </ol>
      </div>
    </section>
  );
}
