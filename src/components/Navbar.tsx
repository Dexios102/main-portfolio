import facebook from "../assets/facebook.svg";
import github from "../assets/github.svg";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.svg";
import x from "../assets/x.png";
import ThemeMode from "./ThemeMode";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6 px-4">
      {/* Menu */}
      <ul
        className="flex items-center gap-8 text-xl font-semibold
      tracking-wide"
      >
        <li className="nav-pages">Home</li>
        <li className="nav-pages">About</li>
        <li className="nav-pages">Projects</li>
        <li className="nav-pages">Contact</li>
      </ul>
      {/* Logo */}
      <div className="text-3xl font-extrabold tracking-wide">
        <h1 className="gradient-text">Dexios.dev</h1>
      </div>
      {/* Social Links */}
      <div className="flex gap-6 items-center">
        <ul className="flex gap-4 items-center">
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
        {/* Theme Toggle */}
        <div>
          <ThemeMode />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
