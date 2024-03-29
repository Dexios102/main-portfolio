import Information from "../components/about/Information";
import Skills from "../components/about/Skills";
import Education from "../components/about/Education";
import Experience from "../components/about/Experience";

import { motion, useScroll, useSpring } from "framer-motion";

const AboutPage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <section className="dark:text-white">
      <motion.div className="progress-bar z-30" style={{ scaleX }} />
        <Information />
        <Skills />
        <Education />
        <Experience />
    </section>
  );
};

export default AboutPage;
