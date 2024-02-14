import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { TbSocial } from "react-icons/tb";
import ThemeMode from "../components/ThemeMode";
import { fadeIn, scaleUp } from "../utils/variants";

import facebook from "../assets/facebook.svg";
import github from "../assets/github.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import x from "../assets/x.svg";

const socialMediaLinks = [
  { name: "Facebook", url: import.meta.env.VITE_APP_FACEBOOK, icon: facebook },
  {
    name: "Instagram",
    url: import.meta.env.VITE_APP_INSTAGRAM_URL,
    icon: instagram,
  },
  { name: "GitHub", url: import.meta.env.VITE_APP_GITHUB_URL, icon: github },
  {
    name: "LinkedIn",
    url: import.meta.env.VITE_APP_LINKEDIN_URL,
    icon: linkedin,
  },
  { name: "Twitter", url: import.meta.env.VITE_APP_TWITTER_URL, icon: x },
];

interface HeaderProps {
  setDayMode: React.Dispatch<React.SetStateAction<boolean>>;
  isDayMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ setDayMode, isDayMode }) => {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";
  const backgroundColor = isDayMode ? "bg-white" : "bg-[#011627]";
  const addBackground = isAboutPage ? backgroundColor : "";

  const [showSocialMedia, setShowSocialMedia] = useState(false);
  const toggleShowSocialMedia = () => setShowSocialMedia(!showSocialMedia);

  const renderSocialMediaIcons = (hiddenClass = "") => (
    <ul className={`flex ${hiddenClass} gap-2 lg:gap-4 items-center`}>
      {socialMediaLinks.map((socialMedia, index) => (
        <li key={index}>
          <a href={socialMedia.url} rel="noopener noreferrer">
            <img
              src={socialMedia.icon}
              alt={`${socialMedia.name}_icon`}
              className="w-10 h-10 icons"
            />
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <header
      className={`flex justify-between items-center py-6 px-4 sticky top-0 z-20
       ${addBackground}`}
    >
      <motion.div
        variants={fadeIn("left", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="text-xl md:text-2xl lg:text-3xl font-extrabold tracking-wide
         cursor-pointer"
      >
        <Link to="/">
          <h1 className="gradient-text">Dexios.dev</h1>
        </Link>
      </motion.div>

      <div className="flex gap-2 items-center md:gap-6">
        {renderSocialMediaIcons("hidden md:flex")}

        <div>
          <ThemeMode setDayMode={setDayMode} isDayMode={isDayMode} />
        </div>

        <button
          className="md:hidden hover:scale-105 ease-in-out duration-300
           dark:bg-slate-800 rounded-full p-2 bg-gray-200 z-50"
          onClick={toggleShowSocialMedia}
        >
          <TbSocial
            className="text-xl text-slate-600 dark:text-gray-300
          social-spin"
          />
        </button>
      </div>

      {showSocialMedia && (
        <div
          className="bg-white-5 backdrop-blur-md h-screen w-full absolute
         top-0 left-0"
        >
          <div className="flex items-center justify-center h-full flex-col">
            <motion.h1
              className="text-center text-black dark:text-white text-2xl font-bold mb-6"
              variants={scaleUp(0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              Connect with me
            </motion.h1>

            <motion.ul
              className="flex gap-2 lg:gap-4 items-center justify-center"
              variants={scaleUp(1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              {renderSocialMediaIcons()}
            </motion.ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
