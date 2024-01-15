import Information from "../components/about/Information";
import Skills from "../components/about/Skills";
import Education from "../components/about/Education";
import Experience from "../components/about/Experience";

const AboutPage = () => {
  return (
    <section className="dark:text-white">
      <div className="h-screen">
        <Information />
      </div>
      <div className="h-screen">
        <Skills />
      </div>
      <div className="h-screen">
        <Education />
      </div>
      <div className="h-screen">
        <Experience />
      </div>
    </section>
  );
};

export default AboutPage;
