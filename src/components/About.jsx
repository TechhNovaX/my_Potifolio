import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaCode, FaUserTie, FaLaptopCode } from "react-icons/fa";

const About = () => {
  const stats = [
    { icon: <FaLaptopCode />, value: "2+", label: "Years Experience" },
    { icon: <FaCode />, value: "10+", label: "Projects Completed" },
    { icon: <FaUserTie />, value: "800+", label: "Students Trained" },
    { icon: <FaLaptopCode />, value: "MERN", label: "Full Stack Expertise" },
  ];

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center px-6 py-24 bg-black overflow-hidden">

      {/* Golden Background Glow */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-500/10 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-400/10 blur-[140px] rounded-full"></div>

      <div className="relative max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-yellow-400 uppercase tracking-widest text-sm mb-4">
            About Me
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Passionate Developer Focused on
            <span className="block bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-300 bg-clip-text text-transparent">
              Building Real-World Solutions
            </span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            Junior Software Engineer experienced in Java and MERN stack,
            building scalable applications and delivering professional training
            to global clients.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-[#111]/90 border border-yellow-500/10 
                rounded-2xl p-6 hover:border-yellow-400/40 
                transition duration-300"
              >
                <div className="text-yellow-400 text-3xl mb-3">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {item.value}
                </h3>

                <p className="text-gray-400 text-sm">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

       {/* RIGHT SIDE */}
<motion.div
  initial={{ opacity: 0, x: 60 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="flex"
>
  <div className="bg-[#111]/90 border border-yellow-500/10 
  p-10 rounded-3xl shadow-xl w-full flex flex-col justify-center">

    <h3 className="text-2xl font-bold text-white mb-8 text-center">
      Personal Strengths
    </h3>

    <div className="space-y-6">
      {[
        "Confident and determined professional",
        "Strong problem-solving mindset",
        "Self-motivated with leadership qualities",
        "Quick learner adapting to new technologies",
      ].map((item, index) => (
        <motion.div
          key={index}
          whileHover={{ x: 6 }}
          className="flex items-center gap-4 bg-black/60 p-4 rounded-xl 
          border border-yellow-500/10 hover:border-yellow-400/40 
          transition"
        >
          <FaCheckCircle className="text-yellow-400 text-xl" />
          <p className="text-gray-300">{item}</p>
        </motion.div>
      ))}
      <div className="mt-10 text-center text-yellow-400 font-semibold">
  Always Learning • Always Improving
</div>
    </div>

  </div>
  
</motion.div>

      </div>
    </div>
  );
};

export default About;