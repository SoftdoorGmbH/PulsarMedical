export type OfferUseCaseItem = {
  title: string;
  description: string;
};

export type OfferUseCaseImage = {
  src: string;
  alt: string;
};

export type OfferUseCasesContent = {
  headingId: string;
  title: string;
  description: string;
  images: readonly [OfferUseCaseImage, OfferUseCaseImage, OfferUseCaseImage];
  items: readonly OfferUseCaseItem[];
};
