import type { LucideIcon } from "lucide-react";

export type OfferProcessStep = {
  stageLabel: string;
  title: string;
  description: readonly string[];
  icon: LucideIcon;
  imageSrc: string;
  imageAlt: string;
};

export type OfferProcessContent = {
  headingId: string;
  title: string;
  subtitle: string;
  steps: readonly OfferProcessStep[];
};
