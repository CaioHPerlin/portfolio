import { BrowserRouter, Route, Routes } from "react-router";
import BioPage from "./pages/bio";
import ContactPage from "./pages/contact";
import ProjectsPage from "./pages/projects";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BioPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
