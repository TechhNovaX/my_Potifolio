import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaNodeJs,
  FaJava,
  FaDatabase,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaServer,
  FaCode,
  FaTools,
} from "react-icons/fa";
import { SiSpringboot, SiHibernate, SiMongodb, SiPostman } from "react-icons/si";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Skills = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const skills = [
    {
      name: "Programming Languages",
      icon: <FaCode />,
      desc: "Java, Advanced Java, and JavaScript with strong OOP and problem-solving skills.",
    },
    {
      name: "Frontend Development",
      icon: <FaReact />,
      desc: "React.js, HTML5, CSS3, and modern UI development practices.",
    },
    {
      name: "Backend Development",
      icon: <FaServer />,
      desc: "Spring Boot, Hibernate, Node.js, and Express.js for scalable REST APIs.",
    },
    {
      name: "Databases",
      icon: <FaDatabase />,
      desc: "SQL and MongoDB with optimized schema design and query performance.",
    },
    {
      name: "Tools & Platforms",
      icon: <FaTools />,
      desc: "Git, VS Code, and Postman for professional development workflow.",
    },
    {
      name: "Architecture & APIs",
      icon: <FaNodeJs />,
      desc: "MVC architecture, RESTful APIs, and clean modular backend structure.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-full min-h-screen px-6 py-24 overflow-hidden bg-black"
    >
      {/* Golden Background Glow */}
      <div className="absolute top-20 left-20 w-[450px] h-[450px] bg-yellow-500/10 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-[450px] h-[450px] bg-amber-400/10 blur-[150px] rounded-full"></div>

      <div className="relative max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            Technical
            <span className="ml-3 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-300 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto">
            Strong foundation in full-stack development, backend architecture, and scalable system design.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.06 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setPosition({
                  x: e.clientX - rect.left,
                  y: e.clientY - rect.top,
                });
              }}
              className="relative group bg-[#111] rounded-3xl p-8 border border-yellow-500/20 overflow-hidden cursor-pointer transition duration-500 hover:border-yellow-400 hover:shadow-yellow-500/20"
            >
              {/* Gold Spotlight Effect */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"
                style={{
                  background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(234,179,8,0.35), transparent 60%)`,
                }}
              ></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="text-yellow-400 text-4xl mb-6">
                  {skill.icon}
                </div>

                <h3 className="text-2xl font-semibold text-white mb-3">
                  {skill.name}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {skill.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.div>
  );
};

export default Skills;