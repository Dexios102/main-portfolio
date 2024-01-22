import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import facebook from "../assets/facebook.svg";
import github from "../assets/github.svg";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.svg";
import { TbSocial } from "react-icons/tb";
import x from "../assets/x.png";
import ThemeMode from "../components/ThemeMode";
import { fadeIn } from "../utils/variants";

const socialMediaLinks = [
  {
    name: "Facebook",
    url: import.meta.env.VITE_APP_FACEBOOK,
    icon: facebook,
  },
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
  const lightModeBackgroundColor = "bg-white";
  const darkModeBackgroundColor = "bg-[#011627]";
  const backgroundColor = isDayMode
    ? lightModeBackgroundColor
    : darkModeBackgroundColor;
  const addBackground = isAboutPage ? `${backgroundColor}` : "";

  return (
    <header
      className={`flex justify-between items-center py-6 px-4 sticky top-0
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
        <ul className="hidden md:flex gap-2 lg:gap-4 items-center">
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
        <div className="">
          <ThemeMode setDayMode={setDayMode} isDayMode={isDayMode} />
        </div>
        <div
          className="md:hidden hover:scale-105 ease-in-out duration-300
        dark:bg-slate-800 rounded-full p-2 bg-gray-200"
        >
          <TbSocial className="text-xl text-slate-600 dark:text-gray-300" />
        </div>
      </div>
    </header>
  );
};

export default Header;
