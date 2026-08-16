export type OfferCompareColumn = {
  title: string;
  subtitle: string;
  items: readonly string[];
};

export type OfferCompareContent = {
  headingId: string;
  title: string;
  description: string;
  alternative: OfferCompareColumn;
  pulsar: OfferCompareColumn;
};
