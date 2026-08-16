export type AudiencePortfolioItem = {
  title: string;
  intro: string;
  items: readonly string[];
  imageSrc: string;
  imageAlt: string;
};

export type AudiencePortfolioContent = {
  headingId: string;
  title: string;
  subtitle: string;
  ariaLabel: string;
  cta: {
    to: string;
    label: string;
  };
  items: readonly AudiencePortfolioItem[];
};
