import { JOB_CENTER_LOGOS } from "@/content/jobCenterLogos";

function LogoTrack({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <>
      {JOB_CENTER_LOGOS.map((logo) => (
        <div
          key={logo.src}
          className="flex shrink-0 items-center px-8 md:px-12"
          aria-hidden={ariaHidden || undefined}
        >
          <img
            src={logo.src}
            alt={ariaHidden ? "" : logo.alt.replace(/^Logo: /, "")}
            width={320}
            height={118}
            loading="lazy"
            decoding="async"
            className="h-14 w-auto max-w-44 object-contain md:h-16"
          />
        </div>
      ))}
    </>
  );
}

export function JobCenterLogoMarquee() {
  return (
    <section
      className="bg-white py-16 md:py-20"
      aria-labelledby="jobcenter-logos-heading"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <h2
          id="jobcenter-logos-heading"
          className="text-center text-3xl font-semibold tracking-tight text-pm-light-headline md:text-4xl lg:text-[2.5rem]"
        >
          Diese Jobcenter vertrauen uns bereits
        </h2>
      </div>

      <div
        className="relative mt-10 overflow-hidden md:mt-12"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex w-max animate-pm-marquee motion-reduce:w-auto motion-reduce:max-w-6xl motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-x-8 motion-reduce:gap-y-6 motion-reduce:px-6 motion-reduce:animate-none">
          <div className="flex shrink-0">
            <LogoTrack />
          </div>
          <div className="flex shrink-0 motion-reduce:hidden" aria-hidden>
            <LogoTrack ariaHidden />
          </div>
        </div>
      </div>
    </section>
  );
}
