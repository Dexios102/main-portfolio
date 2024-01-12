import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { SpeedInsights } from "@vercel/speed-insights/react";

import Background from "./components/Background";
import Header from "./components/Header";
import HeroPage from "./pages/HeroPage";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";
import Transitions from "./components/Transitions";

const App = () => {
  const location = useLocation();

  return (
    <div className="app h-screen">
      <Background />
      <AnimatePresence mode="wait">
        <Transitions key={location.pathname} />
        <div className="xl:mx-32">
          <Header />
          <Navbar />
          <div className="px-4">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HeroPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </div>
        </div>
      </AnimatePresence>
      <SpeedInsights />
    </div>
  );
};

export default App;
