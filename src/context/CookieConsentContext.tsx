import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  createConsent,
  detectLocale,
  persistLocale,
  readConsent,
  writeConsent,
  type CookieConsent,
  type CookieLocale,
  type CookieSelection,
} from "@/lib/cookieConsent";

type CookieConsentContextValue = {
  consent: CookieConsent | null;
  locale: CookieLocale;
  setLocale: (locale: CookieLocale) => void;
  bannerOpen: boolean;
  settingsOpen: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  saveSelection: (selection: CookieSelection) => void;
  openSettings: () => void;
  closeBanner: () => void;
};

const CookieConsentContext = createContext<CookieConsentContextValue | null>(
  null,
);

function persistAndSet(
  selection: CookieSelection,
  setConsent: (consent: CookieConsent) => void,
  setBannerOpen: (open: boolean) => void,
  setSettingsOpen: (open: boolean) => void,
) {
  const next = createConsent(selection);
  writeConsent(next);
  setConsent(next);
  setBannerOpen(false);
  setSettingsOpen(false);
}

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<CookieConsent | null>(readConsent);
  const [locale, setLocaleState] = useState<CookieLocale>(detectLocale);
  const [bannerOpen, setBannerOpen] = useState(() => readConsent() === null);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const setLocale = useCallback((next: CookieLocale) => {
    setLocaleState(next);
    persistLocale(next);
  }, []);

  const acceptAll = useCallback(() => {
    persistAndSet(
      { statistics: true, marketing: true },
      setConsent,
      setBannerOpen,
      setSettingsOpen,
    );
  }, []);

  const rejectAll = useCallback(() => {
    persistAndSet(
      { statistics: false, marketing: false },
      setConsent,
      setBannerOpen,
      setSettingsOpen,
    );
  }, []);

  const saveSelection = useCallback((selection: CookieSelection) => {
    persistAndSet(selection, setConsent, setBannerOpen, setSettingsOpen);
  }, []);

  const openSettings = useCallback(() => {
    setSettingsOpen(true);
    setBannerOpen(true);
  }, []);

  const closeBanner = useCallback(() => {
    if (consent === null) return;
    setBannerOpen(false);
    setSettingsOpen(false);
  }, [consent]);

  const value = useMemo(
    () => ({
      consent,
      locale,
      setLocale,
      bannerOpen,
      settingsOpen,
      acceptAll,
      rejectAll,
      saveSelection,
      openSettings,
      closeBanner,
    }),
    [
      consent,
      locale,
      setLocale,
      bannerOpen,
      settingsOpen,
      acceptAll,
      rejectAll,
      saveSelection,
      openSettings,
      closeBanner,
    ],
  );

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error("useCookieConsent must be used within CookieConsentProvider");
  }
  return context;
}
