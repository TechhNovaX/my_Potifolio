import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Download, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const Hero = () => {
  const navigate = useNavigate();   // ✅ Added

  return (
    <div className="relative min-h-screen text-center flex flex-col items-center justify-start pt-40 px-6 overflow-hidden bg-[#09090b]">
      {/* Golden Glow Background */}
      <div className="absolute top-32 left-1/4 w-[500px] h-[500px] bg-yellow-500/10 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-32 right-1/4 w-[500px] h-[500px] bg-amber-400/10 blur-[150px] rounded-full"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-4xl mx-auto"
      >

        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full 
          bg-yellow-500/10 border border-yellow-500/30 
          text-yellow-400 text-sm mb-8"
        >
          ✨ Junior Software Engineer
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl font-bold text-white leading-tight"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-300 
          bg-clip-text text-transparent">
            
            Mounika Bodam
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="mt-6 text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto"
        >
          Junior Software Engineer With 2 Years of Experience in Java, MERN Stack, 
          and Software Training. Passionate About Building Scalable Systems 
          and Delivering Impactful Solutions.
        </motion.p>

        {/* Contact Row */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-6 mt-8 text-gray-400 text-sm"
        >
          <div className="flex items-center gap-2 hover:text-yellow-400 transition">
            <Mail size={16} />
            mounireddybodam@gmail.com
          </div>

          <div className="flex items-center gap-2 hover:text-yellow-400 transition">
            <MapPin size={16} />
            Andhra Pradesh
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-6 mt-10"
        >

          {/* ✅ Updated Button */}
          <button
            onClick={() => navigate("/contact")}
            className="flex items-center gap-2 px-8 py-3 rounded-full 
            bg-gradient-to-r from-yellow-500 to-amber-600 
            text-black font-semibold shadow-lg shadow-yellow-500/20 
            hover:scale-105 transition duration-300"
          >
            Get In Touch <ArrowRight size={18} />
          </button>

          <a
            href="/Resume.pdf"
            download
            className="flex items-center gap-2 px-8 py-3 rounded-full 
            border border-yellow-500 text-yellow-400 
            hover:bg-yellow-500/10 hover:scale-105 
            transition duration-300"
          >
            <Download size={18} />
            Resume
          </a>

        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20"
        >

          <div className="bg-[#111]/80 backdrop-blur-xl border border-yellow-500/20 
          rounded-2xl p-6 hover:-translate-y-2 hover:border-yellow-400/40 
          transition duration-300">
            <h3 className="text-3xl font-bold text-yellow-400">2+</h3>
            <p className="text-gray-400 mt-2 text-sm">Years Experience</p>
          </div>

          <div className="bg-[#111]/80 backdrop-blur-xl border border-yellow-500/20 
          rounded-2xl p-6 hover:-translate-y-2 hover:border-yellow-400/40 
          transition duration-300">
            <h3 className="text-3xl font-bold text-yellow-400">2</h3>
            <p className="text-gray-400 mt-2 text-sm">Projects</p>
          </div>

          <div className="bg-[#111]/80 backdrop-blur-xl border border-yellow-500/20 
          rounded-2xl p-6 hover:-translate-y-2 hover:border-yellow-400/40 
          transition duration-300">
            <h3 className="text-3xl font-bold text-yellow-400">800+</h3>
            <p className="text-gray-400 mt-2 text-sm">Students Trained</p>
          </div>

        </motion.div>

      </motion.div>
    </div>
  );
};

export default Hero;