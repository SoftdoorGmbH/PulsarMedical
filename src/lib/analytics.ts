const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let loaded = false;
let enabled = false;

function gtag() {
  window.dataLayer?.push(arguments);
}

export function loadGa(): void {
  if (loaded || !GA_MEASUREMENT_ID || typeof document === "undefined") return;
  loaded = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = gtag;
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, { send_page_view: false });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);
}

export function setAnalyticsEnabled(next: boolean): void {
  enabled = next;
  if (next) loadGa();
}

export function trackPageView(path: string): void {
  if (!enabled || typeof window.gtag !== "function") return;
  window.gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}

export function trackContactFormSubmit(topic: string): void {
  if (!enabled || typeof window.gtag !== "function") return;
  window.gtag("event", "contact_form_submit", {
    form_topic: topic,
  });
}
