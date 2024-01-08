import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import facebook from "../assets/facebook.svg";
import github from "../assets/github.svg";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.svg";
import x from "../assets/x.png";
import ThemeMode from "./ThemeMode";
import { fadeIn } from "../variants";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="flex justify-between items-center py-6 px-4">
      {/* Logo */}
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

      {/* Hamburger Menu Icon */}
      <div className="block md:hidden">
        <button onClick={toggleMenu}>
          <svg
            className="w-8 h-8 text-gray-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${menuOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col items-center text-xl font-semibold tracking-wide">
          <li className="nav-pages">Home</li>
          <li className="nav-pages">About</li>
          <li className="nav-pages">Projects</li>
          <li className="nav-pages">Contact</li>
        </ul>
      </div>

      {/* Social Links and Theme Toggle */}
      <div className="hidden md:flex gap-6 items-center">
        {/* ... (your existing social links and theme toggle) */}
        <ul className="flex gap-2 lg:gap-4 items-center">
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
        <ThemeMode />
      </div>
    </header>
  );
};

export default Header;
