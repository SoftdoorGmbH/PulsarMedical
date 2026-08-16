import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { isAudiencePagePath } from "@/content/audiencePages";
import { isOfferPagePath } from "@/content/offerPages";

export function Layout() {
  const { pathname } = useLocation();
  const heroUnderNav =
    pathname === "/" ||
    isAudiencePagePath(pathname) ||
    isOfferPagePath(pathname);

  return (
    <div className="flex min-h-dvh flex-col bg-white text-pm-light-text-1">
      <Navbar />
      <main className={heroUnderNav ? "flex-1" : "flex-1 pt-28 md:pt-32"}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
