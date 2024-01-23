import DownloadButton from "../components/DownloadButton";
import { MdConnectWithoutContact } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeIn, scaleUp } from "../utils/variants";

import { TypeAnimation } from "react-type-animation";
import Abstract from "../assets/abstract.png";
import JSlogo from "../assets/javascript-logo.svg";
import typescript from "../assets/typescript.svg";
import nodejs from "../assets/node-js.svg";
import github from "../assets/github.svg";
import react from "../assets/react.svg";
import mongodb from "../assets/mongodb.svg";
import mysql from "../assets/mysql.svg";
import redux from "../assets/redux.svg";
import framer from "../assets/framer.svg";
import tailwind from "../assets/tailwind.svg";
import git from "../assets/git.svg";
import api from "../assets/api.svg";
import { Link } from "react-router-dom";

const HeroPage = () => {
  const icons = [
    { src: JSlogo, alt: "JavaScript Logo" },
    { src: typescript, alt: "TypeScript Logo" },
    { src: nodejs, alt: "Node.js Logo" },
    { src: react, alt: "React.js Logo" },
    { src: github, alt: "Git.js Logo" },
    { src: mongodb, alt: "MongoDB.js Logo" },
    { src: mysql, alt: "MySQL.js Logo" },
    { src: redux, alt: "Redux.js Logo" },
    { src: framer, alt: "Framer.js Logo" },
    { src: tailwind, alt: "Tailwind.js Logo" },
    { src: git, alt: "Git.js Logo" },
    { src: api, alt: "API.js Logo" },
  ];

  return (
    <div className="h-full bg-transparent dark:text-white">
      <div className="w-full h-full">
        <div
          className="pt-10 text-center flex flex-col justify-center xl:pt-40
        xl:text-left h-full container mx-auto"
        >
          <div className="pl-2 mb-2">
            <motion.h2
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              transition={{ duration: 0.5 }}
              className="xl:border-l-4 border-red-600 xl:pl-2"
            >
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
            </motion.h2>
          </div>
          <motion.h1
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            transition={{ duration: 0.5 }}
            className="h1"
          >
            Crafting Tomorrow's <br />
            <span className="gradient-text">Digital Presence</span>{" "}
          </motion.h1>
          <motion.p
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            transition={{ duration: 1 }}
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-12
           dark:bg-none dark:text-gray-400 text-md md:text-lg"
          >
            In the dynamic world of web development, I specialize in crafting
            seamless front-end experiences and robust back-end functionalities.
            Proficient in HTML, CSS, JavaScript, TypeScript, React.js and
            Node/Express.js, I ensure visually appealing and high-performing
            websites. Let's shape the future of the web together!
          </motion.p>
          <motion.div
            variants={scaleUp(2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center gap-4 xl:justify-start
            dark:shadow-gray-900"
          >
            <DownloadButton />
            <Link to="/contact">
              <button
                className="inline-flex items-center justify-center p-0.5
             me-2 overflow-hidden xl:text-lg text-sm font-semibold text-rose-800 rounded-lg group
              bg-gradient-to-br from-red-400 to-red-600 group-hover:from-rose-600
               group-hover:to-red-500 hover:text-white focus:ring-4 focus:outline-none
               shadow-md shadow-gray-600 dark:shadow-lg dark:shadow-gray-800"
              >
                <span
                  className="flex items-center px-2 py-2 xl:py-3.5 transition-all ease-in
               duration-75 bg-white rounded-md group-hover:bg-opacity-0 dark:bg-[#011627] dark:text-gray-200"
                >
                  <MdConnectWithoutContact className="me-2 w-6 h-6" />
                  Hire Me
                </span>
              </button>
            </Link>
          </motion.div>
        </div>
        <div
          className="w-full h-full xl:max-w-[737px] max-h-[678px] absolute xl:top-[250px]
         xl:right-40 cloud overflow-hidden top-0 right-20 pt-6 max-w-md hero-cloud"
        >
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            transition={{ duration: 2 }}
            className="hidden xl:flex xl:max-w-none"
          >
            <img
              src={Abstract}
              alt="abstract"
              className="w-full max-w-[800px]"
            />
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            transition={{ duration: 2 }}
            className="circle"
          >
            {icons.map((icon, index) => (
              <img
                key={index}
                src={icon.src}
                alt={icon.alt}
                className={`circle__icon circle__icon--${index}`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
