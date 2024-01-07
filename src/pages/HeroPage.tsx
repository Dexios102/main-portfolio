import DownloadButton from "../components/DownloadButton";
import { MdConnectWithoutContact } from "react-icons/md";

import { TypeAnimation } from "react-type-animation";

const HeroPage = () => {
  return (
    <div className="h-full">
      <div className="w-full h-full">
        <div
          className="pt-10 text-center flex flex-col justify-center xl:pt-40
        xl:text-left h-full container mx-auto"
        >
          <div className="pl-2 mb-2">
            <h2 className="xl:border-l-4 border-red-600 xl:pl-2">
              Hello👋🏻, I'm{" "}
              <span className="text-medium font-semibold text-red-600">
                <TypeAnimation
                  sequence={[
                    "Dexter Dave Cajayon",
                    1000,
                    "Full Stack Developer",
                    1000,
                    "Freelancer",
                    1000,
                    "BSIT Graduate🎓",
                    1000,
                  ]}
                  wrapper="span"
                  speed={40}
                  deletionSpeed={80}
                  style={{ display: "inline-block" }}
                  repeat={Infinity}
                />
              </span>
            </h2>
          </div>
          <h1 className="h1">
            Crafting Tomorrow's <br />
            <span className="gradient-text">Digital Presence</span>{" "}
          </h1>
          <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-12">
            In the dynamic world of web development, I specialize in crafting
            seamless front-end experiences and robust back-end functionalities.
            Proficient in HTML, CSS, JavaScript, TypeScript, React.js and
            Node/Express.js, I ensure visually appealing and high-performing
            websites. Let's shape the future of the web together!
          </p>
          <div className="flex items-center justify-center gap-4 xl:justify-start">
            <DownloadButton />
            <button
              className="relative inline-flex items-center justify-center p-0.5
             me-2 overflow-hidden text-lg font-semibold text-rose-800 rounded-lg group
              bg-gradient-to-br from-red-400 to-red-600 group-hover:from-rose-600
               group-hover:to-red-500 hover:text-white focus:ring-4 focus:outline-none
               shadow-md shadow-gray-600"
            >
              <span
                className="relative flex items-center px-2 py-3.5 transition-all ease-in
               duration-75 bg-white rounded-md group-hover:bg-opacity-0"
              >
                <MdConnectWithoutContact className="me-2 w-6 h-6" />
                Hire Me
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
