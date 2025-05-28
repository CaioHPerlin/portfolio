import { BrowserRouter, Route, Routes } from "react-router";
import MyselfPage from "./pages/myself";
import ContactPage from "./pages/contact";
import PortfolioPage from "./pages/portfolio";
import Navbar from "./components/navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MyselfPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}
