import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { AboutPage } from "@/pages/AboutPage";
import { BlogPage } from "@/pages/BlogPage";
import { CareerPage } from "@/pages/CareerPage";
import { CompaniesPage } from "@/pages/CompaniesPage";
import { HomePage } from "@/pages/HomePage";
import { JobCenterPage } from "@/pages/JobCenterPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="jobcenter" element={<JobCenterPage />} />
        <Route path="unternehmen" element={<CompaniesPage />} />
        <Route path="karriere" element={<CareerPage />} />
        <Route path="ueber-uns" element={<AboutPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
