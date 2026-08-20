import { JOB_CENTER_LOGOS } from "@/content/jobCenterLogos";

function LogoTrack({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <>
      {JOB_CENTER_LOGOS.map((logo) => (
        <div
          key={logo.src}
          className="flex h-10 w-38 shrink-0 items-center justify-center sm:h-11 sm:w-44"
          aria-hidden={ariaHidden || undefined}
        >
          <img
            src={logo.src}
            alt={ariaHidden ? "" : logo.alt.replace(/^Logo: /, "")}
            width={182}
            height={40}
            loading="lazy"
            decoding="async"
            className="h-full w-auto max-w-full object-contain"
          />
        </div>
      ))}
    </>
  );
}

/** Vertrauensband unter dem Hero: Partner-Logos und Kennzahlen. */
export function HomeTrustBy() {
  return (
    <section
      className="border-b border-pm-light-container-border bg-pm-light-bg py-16 sm:py-20"
      aria-labelledby="trust-heading"
    >
      <div className="mx-auto max-w-4xl px-6 md:px-8 lg:px-10">
        <h2
          id="trust-heading"
          className="text-center text-2xl font-semibold leading-tight tracking-tight text-pm-light-headline sm:text-3xl"
        >
          Institutionelle Auftraggeber in ganz Deutschland vertrauen auf
          PULSAR Medical
        </h2>
      </div>

      <div
        className="relative mt-16 overflow-hidden"
        aria-label="Partner-Logos"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex w-max animate-pm-marquee-reverse motion-reduce:w-auto motion-reduce:max-w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-12 motion-reduce:px-6 motion-reduce:animate-none">
          <div className="flex shrink-0 items-center gap-12 pr-12 sm:gap-16 sm:pr-16">
            <LogoTrack />
          </div>
          <div
            className="flex shrink-0 items-center gap-12 pr-12 motion-reduce:hidden sm:gap-16 sm:pr-16"
            aria-hidden
          >
            <LogoTrack ariaHidden />
          </div>
        </div>
      </div>
    </section>
  );
}
