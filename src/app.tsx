import { BrowserRouter, Route, Routes } from "react-router";
import BioPage from "./pages/bio";
import ContactPage from "./pages/contact";
import ProjectsPage from "./pages/projects";
import Navbar from "./components/navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="w-[45rem] mx-auto mt-20 py-10">
        <Routes>
          <Route path="/" element={<BioPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
