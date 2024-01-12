import { isMobile } from "react-device-detect";
import { useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";

interface BackgroundProps {
  isDayMode: boolean;
}
/* gg */
const Background: React.FC<BackgroundProps> = ({ isDayMode }) => {
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
      backgroundColor: isDayMode ? 0xffffff : 0x011627,
      points: isMobile ? 6.5 : 7.0,
      maxDistance: isMobile ? 18.0 : 22.0,
      spacing: isMobile ? 18.0 : 15.0,
    });

    return () => {
      if (netEffect) {
        netEffect.destroy();
      }
    };
  }, [isDayMode]);

  return <div className="bg" ref={background}></div>;
};

export default Background;
