import React from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="relative w-full min-h-screen bg-black text-white py-28 px-6 overflow-hidden">

      {/* Gold Background Glow */}
      <div className="absolute top-20 left-1/4 w-[450px] h-[450px] bg-yellow-500/10 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-20 right-1/4 w-[450px] h-[450px] bg-amber-400/10 blur-[140px] rounded-full"></div>

      <div className="relative max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r 
          from-yellow-400 via-amber-500 to-yellow-300 
          bg-clip-text text-transparent">
            Let’s Build Something Amazing
          </h2>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            I'm open to freelance projects, internships, and full-time roles.
            Let’s connect and create impactful digital experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >

            {/* Email Card */}
            <div className="bg-[#111] p-8 rounded-2xl 
            border border-yellow-500/20 
            hover:border-yellow-400 hover:scale-105 
            transition duration-300 shadow-lg">
              <div className="flex items-center gap-5">
                <div className="p-4 bg-yellow-500/10 rounded-full">
                  <FaEnvelope className="text-yellow-400" size={22} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email Address</p>
                  <p className="font-semibold text-white text-lg">
                    mounireddybodam@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-[#111] p-8 rounded-2xl 
            border border-yellow-500/20 
            hover:border-yellow-400 hover:scale-105 
            transition duration-300 shadow-lg">
              <div className="flex items-center gap-5">
                <div className="p-4 bg-yellow-500/10 rounded-full">
                  <FaMapMarkerAlt className="text-yellow-400" size={22} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="font-semibold text-white text-lg">
                    Andhra Pradesh, India
                  </p>
                </div>
              </div>
            </div>

            {/* Availability Badge */}
            <div className="bg-gradient-to-r from-yellow-500/10 to-amber-500/10 
            border border-yellow-500/20 p-6 rounded-xl text-center">
              <p className="text-yellow-400 font-medium">
                🚀 Available for New Opportunities
              </p>
            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#111] p-12 rounded-2xl 
            border border-yellow-500/20 shadow-2xl"
          >
            <h3 className="text-2xl font-semibold text-center mb-10">
              Connect With Me
            </h3>

            <div className="flex flex-col gap-6">

              {/* GitHub */}
              <a
                href="https://github.com/MouniBodam"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 
                border border-yellow-500/30 py-4 rounded-xl 
                font-medium hover:bg-yellow-500 
                hover:text-black hover:scale-105 
                transition duration-300"
              >
                <FaGithub size={20} />
                View GitHub
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/mounika-bodam-852171235/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 
                bg-gradient-to-r from-yellow-500 to-amber-600 
                text-black py-4 rounded-xl font-semibold 
                hover:scale-105 transition duration-300 
                shadow-lg shadow-yellow-500/20"
              >
                <FaLinkedin size={20} />
                LinkedIn Profile
              </a>

              {/* Email Button */}
              <a
                href="mailto:mounireddybodam@gmail.com"
                className="flex items-center justify-center gap-3 
                border border-yellow-500 py-4 rounded-xl 
                font-medium hover:bg-yellow-500/10 
                hover:scale-105 transition duration-300"
              >
                <FaPaperPlane size={18} />
                Send Email
              </a>

            </div>

            <p className="text-gray-500 text-center mt-10 text-sm">
              Let’s turn your ideas into reality.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;