import type { LucideIcon } from "lucide-react";

export const OFFER_PROCESS_STEP_IMAGES = [
  "/offers/medizinische_begutachtungen/magnific_documentarystyle-editoria_jU7FW8xLD0.webp",
  "/offers/medizinische_begutachtungen/similar-5535720.webp",
  "/offers/medizinische_begutachtungen/magnific_documentarystyle-editoria_P3Zsv3G42C.webp",
  "/offers/medizinische_begutachtungen/similar-5535771.webp",
] as const;

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
