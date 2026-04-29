import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();

  const links = [
    { id: 1, link: "home", path: "/" },
    { id: 2, link: "about", path: "/about" },
    { id: 3, link: "skills", path: "/skills" },
    { id: 4, link: "experience", path: "/experience" },
    { id: 5, link: "projects", path: "/projects" },
    { id: 6, link: "contact", path: "/contact" },
  ];

  return (
    <div className="fixed w-full h-20 flex justify-between items-center px-8 
    bg-black/90 backdrop-blur-lg border-b border-yellow-500/10 z-50">

      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 flex items-center justify-center 
        rounded-md bg-gradient-to-r from-yellow-500 to-amber-600 
        text-black font-bold text-sm shadow-lg">
          MB
        </div>

       <h1
          className="text-3xl font-bold 
          bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-300
          bg-clip-text text-transparent 
          gold-animate"
        >
        Mounika Bodam
       </h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-gray-400 font-medium">
        {links.map(({ id, link, path }) => (
          <li key={id}>
            <Link
              to={path}
              className={`capitalize hover:text-yellow-400 transition duration-300 ${
                location.pathname === path
                  ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
                  : ""
              }`}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Icon */}
      <div
        onClick={() => setNav(!nav)}
        className="md:hidden text-gray-300 cursor-pointer"
      >
        {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>
    </div>
  );
};

export default Navbar;