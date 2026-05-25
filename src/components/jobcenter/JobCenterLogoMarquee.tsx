const JOB_CENTER_LOGOS = [
  {
    alt: "Logo: Jobcenter Kreis Siegen-Wittgenstein",
    src: "https://pulsarmed.de/wp-content/uploads/2023/10/logo-jc-siegen-wittgenstein.jpg",
  },
  {
    alt: "Logo: Jobcenter Landkreis Northeim",
    src: "https://pulsarmed.de/wp-content/uploads/2023/10/logo-jc-northeim.jpg",
  },
  {
    alt: "Logo: Jobcenter Holzminden",
    src: "https://pulsarmed.de/wp-content/uploads/2023/10/logo-jc-holzminden.jpg",
  },
  {
    alt: "Logo: Jobcenter Hameln-Pyrmont",
    src: "https://pulsarmed.de/wp-content/uploads/2023/10/logo-jc-hameln-pyrmont.jpg",
  },
  {
    alt: "Logo: Jobcenter Herford",
    src: "https://pulsarmed.de/wp-content/uploads/2023/10/jc-herford.png",
  },
  {
    alt: "Logo: Jobcenter Remscheid",
    src: "https://pulsarmed.de/wp-content/uploads/2023/10/logo-jc-remscheid.jpg",
  },
  {
    alt: "Logo: kommunales Jobcenter Solingen",
    src: "https://pulsarmed.de/wp-content/uploads/2023/10/logo-kommunales-jobcenter-solingen.jpg",
  },
  {
    alt: "Logo: Jobcenter Wolfsburg",
    src: "https://pulsarmed.de/wp-content/uploads/2024/08/jobcenter-wolfsburg.jpg",
  },
  {
    alt: "Logo: Jobcenter Region Hannover",
    src: "https://pulsarmed.de/wp-content/uploads/2024/05/logo-jobcenter-rgb.jpg",
  },
  {
    alt: "Logo: Jobcenter Wuppertal",
    src: "https://pulsarmed.de/wp-content/uploads/2023/10/logo-jc-wuppertal.jpg",
  },
  {
    alt: "Logo: Jobcenter Kreis Gütersloh",
    src: "https://pulsarmed.de/wp-content/uploads/2024/12/logo-jobcenter-kreis-gutersloh.jpg",
  },
  {
    alt: "Logo: Jobcenter Ebersberg",
    src: "https://pulsarmed.de/wp-content/uploads/2025/01/jobcenterlogo-ebersberg-a2ll-wappen.jpg",
  },
  {
    alt: "Logo: Jobcenter Freising",
    src: "https://pulsarmed.de/wp-content/uploads/2025/01/logo-jobcenter-freising.jpg",
  },
  {
    alt: "Logo: Jobcenter Aruso Erding",
    src: "https://pulsarmed.de/wp-content/uploads/2025/01/logo-jobcenter-erding.png",
  },
  {
    alt: "Logo: Jobcenter Dachau",
    src: "https://pulsarmed.de/wp-content/uploads/2025/01/logo-jobcenter-dachau-aktuell.jpg",
  },
] as const;

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
