import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-black border-t border-yellow-500/10 py-6">

      <div className="max-w-6xl mx-auto px-6 flex 
      flex-col md:flex-row justify-between items-center gap-4">

        <p className="text-gray-500 text-sm">
          © 2026 <span className="text-yellow-400">Mounika Bodam</span>
        </p>

        <div className="flex gap-4 text-lg">

          <a
            href="https://github.com/MouniBodam"
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 flex items-center justify-center
            rounded-full border border-yellow-500/20
            hover:bg-yellow-500 hover:text-black
            transition duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/mounika-bodam-852171235/"
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 flex items-center justify-center
            rounded-full border border-yellow-500/20
            hover:bg-blue-500 hover:text-black
            transition duration-300"
          >
            <FaLinkedin />
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;