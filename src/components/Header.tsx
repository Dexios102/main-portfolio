import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import facebook from "../assets/facebook.svg";
import github from "../assets/github.svg";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.svg";
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

const Header = () => {
  return (
    <header className="flex justify-between items-center py-6 px-4">
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

      <div className="flex gap-6 items-center">
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
          <ThemeMode />
        </div>
      </div>
    </header>
  );
};

export default Header;
