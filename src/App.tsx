import { useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { isMobile } from "react-device-detect";

import Header from "./components/Header";
import NET from "vanta/dist/vanta.net.min";
import HeroPage from "./pages/HeroPage";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";

const App = () => {
  const background = useRef(null);

  useEffect(() => {
    const netEffect = NET({
      el: background.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0xbf0603,
      backgroundColor: 0xffffff,
      points: isMobile ? 6.5 : 7.0,
      maxDistance: isMobile ? 18.0 : 22.0,
      spacing: isMobile ? 18.0 : 15.0,
    });

    return () => {
      if (netEffect) {
        netEffect.destroy();
      }
    };
  }, []);

  return (
    <div className="app">
      <div className="bg" ref={background}></div>
      <div className="xl:mx-32">
        <Header />
        <Navbar />
        <div className="px-4">
          <Routes>
            <Route path="/" element={<HeroPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
