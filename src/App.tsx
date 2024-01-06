import { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import NET from "vanta/dist/vanta.net.min";

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
      color: 0xaa1c1c,
      backgroundColor: 0xffffff,
      points: 5.0,
      maxDistance: 24.0,
      spacing: 16.0,
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
      <div className="mx-32">
        <Navbar />
      </div>
    </div>
  );
};

export default App;
