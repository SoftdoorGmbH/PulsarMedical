import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ScrollToTop } from "@/components/ScrollToTop";
import { AboutPage } from "@/pages/AboutPage";
import { BlogPage } from "@/pages/BlogPage";
import { BlogPostPage } from "@/pages/BlogPostPage";
import { CareerPage } from "@/pages/CareerPage";
import { DatenschutzPage } from "@/pages/DatenschutzPage";
import { CompaniesPage } from "@/pages/CompaniesPage";
import { HomePage } from "@/pages/HomePage";
import { ImpressumPage } from "@/pages/ImpressumPage";
import { JobCenterPage } from "@/pages/JobCenterPage";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="jobcenter" element={<JobCenterPage />} />
        <Route path="unternehmen" element={<CompaniesPage />} />
        <Route path="karriere" element={<CareerPage />} />
        <Route path="ueber-uns" element={<AboutPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog/:slug" element={<BlogPostPage />} />
        <Route path="impressum" element={<ImpressumPage />} />
        <Route path="datenschutz" element={<DatenschutzPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
    </>
  );
}
