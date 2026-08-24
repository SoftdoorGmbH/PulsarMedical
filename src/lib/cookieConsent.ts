export const CONSENT_COOKIE_NAME = "pm_cookie_consent";
export const CONSENT_LOCALE_KEY = "pm_cookie_locale";
export const CONSENT_VERSION = 1;
export const CONSENT_MAX_AGE_DAYS = 180;

export type CookieLocale = "de" | "en";

export type OptionalCookieCategory = "statistics" | "marketing";

export type CookieConsent = {
  version: number;
  necessary: true;
  statistics: boolean;
  marketing: boolean;
  updatedAt: string;
};

export type CookieSelection = Pick<CookieConsent, OptionalCookieCategory>;

function isConsent(value: unknown): value is CookieConsent {
  if (!value || typeof value !== "object") return false;
  const candidate = value as CookieConsent;
  return (
    candidate.version === CONSENT_VERSION &&
    candidate.necessary === true &&
    typeof candidate.statistics === "boolean" &&
    typeof candidate.marketing === "boolean" &&
    typeof candidate.updatedAt === "string"
  );
}

function parseConsent(raw: string | null): CookieConsent | null {
  if (!raw) return null;
  try {
    const parsed: unknown = JSON.parse(raw);
    return isConsent(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

function readCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const prefix = `${name}=`;
  const match = document.cookie
    .split("; ")
    .find((part) => part.startsWith(prefix));
  if (!match) return null;
  return decodeURIComponent(match.slice(prefix.length));
}

export function readConsent(): CookieConsent | null {
  const fromCookie = parseConsent(readCookie(CONSENT_COOKIE_NAME));
  if (fromCookie) return fromCookie;

  try {
    return parseConsent(localStorage.getItem(CONSENT_COOKIE_NAME));
  } catch {
    return null;
  }
}

export function writeConsent(consent: CookieConsent): void {
  const serialized = JSON.stringify(consent);
  const maxAge = CONSENT_MAX_AGE_DAYS * 24 * 60 * 60;
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${CONSENT_COOKIE_NAME}=${encodeURIComponent(serialized)}; Path=/; Max-Age=${maxAge}; SameSite=Lax${secure}`;

  try {
    localStorage.setItem(CONSENT_COOKIE_NAME, serialized);
  } catch {
    // Private mode or storage quota — the cookie is the source of truth.
  }
}

export function createConsent(selection: CookieSelection): CookieConsent {
  return {
    version: CONSENT_VERSION,
    necessary: true,
    statistics: selection.statistics,
    marketing: selection.marketing,
    updatedAt: new Date().toISOString(),
  };
}

export function hasCategoryConsent(
  consent: CookieConsent | null,
  category: OptionalCookieCategory,
): boolean {
  return consent?.version === CONSENT_VERSION && consent[category] === true;
}

export function detectLocale(): CookieLocale {
  try {
    const stored = localStorage.getItem(CONSENT_LOCALE_KEY);
    if (stored === "de" || stored === "en") return stored;
  } catch {
    // Ignore storage access errors.
  }

  if (typeof navigator === "undefined") return "de";
  return navigator.language.toLowerCase().startsWith("en") ? "en" : "de";
}

export function persistLocale(locale: CookieLocale): void {
  try {
    localStorage.setItem(CONSENT_LOCALE_KEY, locale);
  } catch {
    // Ignore storage access errors.
  }
}
