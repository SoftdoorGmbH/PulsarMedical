export type OfferUseCaseItem = {
  title: string;
  description: string;
};

export type OfferUseCasesContent = {
  headingId: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  items: readonly OfferUseCaseItem[];
};
