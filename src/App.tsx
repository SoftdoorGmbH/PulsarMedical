import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ScrollToTop } from "@/components/ScrollToTop";
import { CookieConsentProvider } from "@/context/CookieConsentContext";
import { AblaufPage } from "@/pages/AblaufPage";
import { AboutPage } from "@/pages/AboutPage";
import { BlogPage } from "@/pages/BlogPage";
import { BlogPostPage } from "@/pages/BlogPostPage";
import { CareerPage } from "@/pages/CareerPage";
import { ContactPage } from "@/pages/ContactPage";
import { DatenschutzPage } from "@/pages/DatenschutzPage";
import { AudiencePage } from "@/pages/AudiencePage";
import { OfferPage } from "@/pages/OfferPage";
import { HomePage } from "@/pages/HomePage";
import { ImpressumPage } from "@/pages/ImpressumPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

export default function App() {
  return (
    <CookieConsentProvider>
      <ScrollToTop />
      <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="jobcenter" element={<AudiencePage slug="jobcenter" />} />
        <Route
          path="berufsgenossenschaften"
          element={<AudiencePage slug="berufsgenossenschaften" />}
        />
        <Route
          path="rueckversicherer"
          element={<AudiencePage slug="rueckversicherer" />}
        />
        <Route
          path="unternehmen"
          element={<Navigate to="/rueckversicherer" replace />}
        />
        <Route
          path="medizinische-begutachtungen"
          element={<OfferPage slug="medizinische-begutachtungen" />}
        />
        <Route
          path="psychologische-begutachtungen"
          element={<OfferPage slug="psychologische-begutachtungen" />}
        />
        <Route
          path="arbeits-sozialmedizinische-begutachtungen"
          element={
            <OfferPage slug="arbeits-sozialmedizinische-begutachtungen" />
          }
        />
        <Route
          path="fachuebergreifende-begutachtungen"
          element={<OfferPage slug="fachuebergreifende-begutachtungen" />}
        />
        <Route
          path="meldeversaeumnisse"
          element={<OfferPage slug="meldeversaeumnisse" />}
        />
        <Route path="karriere" element={<CareerPage />} />
        <Route path="ablauf" element={<AblaufPage />} />
        <Route path="ueber-uns" element={<AboutPage />} />
        <Route path="kontakt" element={<ContactPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog/:slug" element={<BlogPostPage />} />
        <Route path="impressum" element={<ImpressumPage />} />
        <Route path="datenschutz" element={<DatenschutzPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
    </CookieConsentProvider>
  );
}
