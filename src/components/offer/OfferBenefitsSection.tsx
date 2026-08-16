import { Link } from "react-router-dom";
import type { OfferBenefitItem, OfferBenefitsContent } from "@/content/offerBenefits";

function BenefitItem({
  title,
  description,
  icon: Icon,
  iconColor,
}: OfferBenefitItem) {
  return (
    <div className="flex gap-5 border-t-2 border-pm-dark-divider/60 pt-5">
      <div
        className="flex size-6 shrink-0 items-center justify-center"
        style={{ color: iconColor }}
      >
        <Icon className="size-6" strokeWidth={1.75} aria-hidden />
      </div>
      <div>
        <h3 className="text-base font-semibold text-pm-dark-headline sm:text-lg">
          {title}
        </h3>
        <p className="mt-2 text-pretty text-base leading-relaxed text-pm-dark-text-1">
          {description}
        </p>
      </div>
    </div>
  );
}

export function OfferBenefitsSection({
  headingId,
  title,
  cta,
  items,
}: OfferBenefitsContent) {
  return (
    <section
      className="bg-pm-dark-bg py-18 sm:py-20 md:py-24"
      aria-labelledby={headingId}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-10">
        <div className="mb-12 sm:mb-14 lg:mb-16">
          <h2
            id={headingId}
            className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-pm-dark-headline md:text-4xl lg:text-[2.5rem] lg:leading-[1.15]"
          >
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-10">
          {items.map((item) => (
            <BenefitItem key={item.title} {...item} />
          ))}
        </div>

        {cta ? (
          <div className="mt-12 flex justify-center sm:mt-14 lg:mt-16">
            <Link
              to={cta.to}
              className="inline-flex rounded-full bg-white px-8 py-3.5 text-base font-semibold text-pm-light-button no-underline shadow-md transition-[filter,transform] hover:brightness-95 active:scale-[0.99]"
            >
              {cta.label}
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
