import { Outlet, useLocation } from "react-router-dom";
import { CookieBanner } from "@/components/cookies/CookieBanner";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Seo } from "@/components/Seo";
import { isAudiencePagePath } from "@/content/audiencePages";
import { isOfferPagePath } from "@/content/offerPages";
import { resolvePageSeo } from "@/content/seo";

export function Layout() {
  const { pathname } = useLocation();
  const pageSeo = resolvePageSeo(pathname);
  const heroUnderNav =
    pathname === "/" ||
    isAudiencePagePath(pathname) ||
    isOfferPagePath(pathname);

  return (
    <div className="flex min-h-dvh flex-col bg-white text-pm-light-text-1">
      <Seo page={pageSeo} />
      <Navbar />
      <main className={heroUnderNav ? "flex-1" : "flex-1 pt-28 md:pt-32"}>
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
