import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import useScrollToTop from "./hooks/useScrollToTop.js";

import HomePage from "./pages/HomePage.jsx";
import ChoosePlanPage from "./pages/ChoosePlanPage.jsx";
import GameDetailPage from "./pages/GameDetailPage.jsx";
import CompetitionPage from "./pages/CompetitionPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

export default function App() {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-navy-gradient bg-fixed flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/plan" element={<ChoosePlanPage />} />
          <Route path="/game/:slug" element={<GameDetailPage />} />
          <Route path="/competition" element={<CompetitionPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
