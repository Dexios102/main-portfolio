import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import facebook from "../assets/facebook.svg";
import github from "../assets/github.svg";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.svg";
import x from "../assets/x.png";
import ThemeMode from "../components/ThemeMode";
import { fadeIn } from "../utils/variants";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-6 px-4">
      <motion.div
        variants={fadeIn("left", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl font-extrabold tracking-wide
      cursor-pointer"
      >
        <Link to="/">
          <h1 className="gradient-text">Dexios.dev</h1>
        </Link>
      </motion.div>

      <div className="flex gap-6 items-center">
        <ul className="hidden md:flex gap-2 lg:gap-4 items-center">
          <li>
            <img
              src={facebook}
              alt="facebook_icon"
              className="w-10 h-10 icons"
            />
          </li>
          <li>
            <img
              src={instagram}
              alt="instagram_icon"
              className="w-9 h-9 icons"
            />
          </li>
          <li>
            <img src={github} alt="github_icon" className="w-10 h-10 icons" />
          </li>
          <li>
            <img
              src={linkedin}
              alt="linkedin_icon"
              className="w-10 h-10 icons"
            />
          </li>
          <li>
            <img src={x} alt="x_icon" className="w-9 h-9 icons" />
          </li>
        </ul>
        <div className="">
          <ThemeMode />
        </div>
        {/* <div className="md:hidden">
          <button>SM</button>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
