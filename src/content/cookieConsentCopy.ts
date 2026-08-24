import type { CookieLocale } from "@/lib/cookieConsent";

export const cookieConsentCopy = {
  de: {
    eyebrow: "Cookies",
    title: "Ihre Cookie-Einstellungen",
    description:
      "Wir verwenden Cookies, um die Website bereitzustellen und – sofern Sie einwilligen – die Nutzung zu analysieren sowie Inhalte und Anzeigen zu verbessern. Technisch notwendige Cookies sind immer aktiv.",
    privacy: "Datenschutzerklärung",
    acceptAll: "Alle akzeptieren",
    rejectAll: "Alle ablehnen",
    settings: "Einstellungen",
    save: "Auswahl speichern",
    close: "Schließen",
    languageLabel: "Sprache",
    necessary: "Technisch notwendig",
    necessaryHint: "Immer aktiv",
    necessaryDesc:
      "Speichert Ihre Cookie-Auswahl, damit wir uns Ihre Einwilligung merken können.",
    statistics: "Statistik",
    statisticsDesc:
      "Hilft uns zu verstehen, wie die Website genutzt wird, zum Beispiel über Seitenaufrufe und Verweildauer.",
    marketing: "Marketing",
    marketingDesc:
      "Ermöglicht die Messung und Aussteuerung von Werbeanzeigen.",
    footerLink: "Cookie-Einstellungen",
  },
  en: {
    eyebrow: "Cookies",
    title: "Your cookie settings",
    description:
      "We use cookies to provide this website and – if you consent – to analyse usage and to improve content and advertising. Strictly necessary cookies are always active.",
    privacy: "Privacy policy",
    acceptAll: "Accept all",
    rejectAll: "Reject all",
    settings: "Settings",
    save: "Save selection",
    close: "Close",
    languageLabel: "Language",
    necessary: "Strictly necessary",
    necessaryHint: "Always on",
    necessaryDesc:
      "Stores your cookie choice so we can remember your consent.",
    statistics: "Statistics",
    statisticsDesc:
      "Helps us understand how the website is used, for example page views and time spent.",
    marketing: "Marketing",
    marketingDesc: "Allows us to measure and deliver advertising.",
    footerLink: "Cookie settings",
  },
} as const satisfies Record<CookieLocale, Record<string, string>>;
