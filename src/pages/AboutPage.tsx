import Information from "../components/about/Information";
import Skills from "../components/about/Skills";
import Education from "../components/about/Education";
import Experience from "../components/about/Experience";

const AboutPage = () => {
  return (
    <section>
      <div>
        <Information />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <Education />
      </div>
      <div>
        <Experience />
      </div>
    </section>
  );
};

export default AboutPage;
