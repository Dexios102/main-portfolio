import { FaHome, FaMailBulk, FaUserCircle } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="flex flex-col xl:justify-center gap-y-4 fixed h-max
     bottom-4 xl:bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16
      xl:max-w-md xl:h-screen xl:px-0 px-14"
    >
      <ul
        className="w-full flex xl:flex-col items-center justify-between
       xl:justify-center gap-y-10 px-10 md:px-40 xl:px-0 h-8 bg-red-800
        xl:h-max py-6 backdrop-blur-sm text-2xl xl:text-xl rounded-full
         text-white shadow-lg shadow-gray-400"
      >
        {[
          { to: "/", icon: <FaHome />, text: "Home" },
          { to: "/about", icon: <FaUserCircle />, text: "About" },
          { to: "/projects", icon: <MdOutlineWork />, text: "Projects" },
          { to: "/contact", icon: <FaMailBulk />, text: "Contact" },
        ].map((item, index) => (
          <li key={index}>
            <Link to={item.to}>
              <div className="group nav-info">
                {item.icon}
                <span className="group-hover:scale-100">{item.text}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
