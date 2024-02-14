import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useState } from "react";

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
  const [isDayMode, setDayMode] = useState<boolean>(() => {
    const localTheme = window.localStorage.getItem("theme");
    return localTheme ? localTheme === "true" : true;
  });

  return (
    <div className="app h-screen">
      <Background isDayMode={isDayMode} />
      <AnimatePresence mode="wait">
        <Transitions key={location.pathname}/>
        <div className="xl:mx-32">
          <Header setDayMode={setDayMode} isDayMode={isDayMode} />
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
