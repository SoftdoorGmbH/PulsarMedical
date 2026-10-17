import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useCookieConsent } from "@/context/CookieConsentContext";
import { setAnalyticsEnabled, trackPageView } from "@/lib/analytics";
import { hasCategoryConsent } from "@/lib/cookieConsent";

export function Analytics() {
  const { consent } = useCookieConsent();
  const { pathname } = useLocation();
  const statistics = hasCategoryConsent(consent, "statistics");

  useEffect(() => {
    setAnalyticsEnabled(statistics);
    if (!statistics) return;
    trackPageView(pathname);
  }, [statistics, pathname]);

  return null;
}
