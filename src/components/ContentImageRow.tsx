type ContentImageRowProps = {
  title: string;
  content: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
};

/** Zwei-Spalten-Block: Bild und Text, Bild links oder rechts. */
export function ContentImageRow({
  title,
  content,
  imageSrc,
  imageAlt,
  imagePosition = "left",
}: ContentImageRowProps) {
  const imageOnRight = imagePosition === "right";

  return (
    <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
      <div
        className={[
          "order-1",
          imageOnRight ? "md:order-2" : "md:order-1",
        ].join(" ")}
      >
        <div className="mx-auto max-w-[530px]">
          <img
            src={imageSrc}
            alt={imageAlt}
            width={530}
            height={530}
            loading="lazy"
            decoding="async"
            className="aspect-square w-full rounded-2xl object-cover shadow-[0_20px_40px_-12px_rgb(2_52_78_/0.18)] ring-1 ring-pm-light-container-border"
          />
        </div>
      </div>

      <div
        className={[
          "order-2",
          imageOnRight ? "md:order-1" : "md:order-2",
        ].join(" ")}
      >
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-pm-light-headline md:text-4xl">
          {title}
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-pm-light-text-1 md:text-xl">
          {content}
        </p>
      </div>
    </div>
  );
}
