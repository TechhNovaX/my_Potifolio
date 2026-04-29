import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Hospital Management System",
    desc: "Hospital operations automation system built using Java JDBC and MySQL with patient registration, appointment booking, and secure database management.",
    tech: "Java • JDBC • MySQL • SQL",
    github: "#",
  },
  {
    title: "Principal Dashboard (Real-Time)",
    desc: "Real-time academic monitoring dashboard with role-based access and backend API integration for structured student and institutional insights.",
    tech: "React • Node.js • REST APIs • SQL",
    github: "#",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Projects = () => {
  return (
    <motion.section
      className="relative w-full min-h-screen bg-black text-white py-28 px-6 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Gold Background Glow */}
      <div className="absolute top-20 left-1/4 w-[450px] h-[450px] bg-yellow-500/10 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-20 right-1/4 w-[450px] h-[450px] bg-amber-400/10 blur-[150px] rounded-full"></div>

      <div className="relative max-w-6xl mx-auto">

        {/* Header */}
        <motion.div variants={fadeUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-300 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Real-world systems built with structured architecture and performance focus.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ scale: 1.05, y: -6 }}
              transition={{ duration: 0.3 }}
              className="relative bg-[#111] p-8 rounded-3xl border border-yellow-500/20 shadow-lg cursor-pointer transition duration-500 hover:border-yellow-400 hover:shadow-yellow-500/20"
            >
              <h3 className="text-2xl font-semibold mb-4 text-white">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.desc}
              </p>

              <p className="text-yellow-400 text-sm mb-6">
                {project.tech}
              </p>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2 text-sm border border-yellow-500 rounded-lg hover:bg-yellow-500/10 transition w-fit"
              >
                <FaGithub size={14} />
                View Code
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
};

export default Projects;