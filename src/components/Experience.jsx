import React from "react";
import { motion } from "framer-motion";
import { CalendarDays, Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Junior Software Engineer & Trainer",
    company: "PurpleLane (MERN & Java)",
    type: "Full-time",
    period: "May 2, 2025 – Present",
    points: [
      "Working on MERN stack and Java-based application development.",
      "Conducting training sessions on Core Java, Advanced Java, and MERN stack.",
      "Delivering online classes for US and Canada clients.",
      "Assisting in backend development, REST API integration, and database handling.",
      "Supporting students with hands-on coding and debugging.",
    ],
  },
  {
    role: "Freelance Java Trainer",
    company: "Freelancer",
    type: "Part-time",
    period: "Dec 2024 – Apr 2025",
    points: [
      "Conducted online Java training for international clients.",
      "Explained Core Java, OOPs, JDBC, SQL, and Spring concepts.",
      "Provided real-time coding demonstrations and doubt support.",
    ],
  },
  {
    role: "Java Trainer",
    company: "Durga Software Solutions",
    type: "Full-time",
    period: "Jan 2024 – Jan 2025",
    points: [
      "Delivered Java training sessions.",
      "Covered Core Java, JDBC, SQL, and Spring basics.",
      "Conducted real-time coding demonstrations.",
      "Prepared structured learning materials.",
    ],
  },
];

const Experience = () => {
  return (
    <section className="relative min-h-screen bg-black text-white py-28 px-6 overflow-hidden">

      {/* Golden Glow Background */}
      <div className="absolute top-20 left-20 w-[450px] h-[450px] bg-yellow-500/10 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-[450px] h-[450px] bg-amber-400/10 blur-[150px] rounded-full"></div>

      <div className="max-w-6xl mx-auto relative">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl font-bold">
            Work{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-300 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-gray-400 mt-4">
            My professional journey in software development and training
          </p>
        </motion.div>

        <div className="relative">

          {/* Golden Timeline Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="absolute left-4 top-0 w-[3px] bg-gradient-to-b from-yellow-400 via-amber-500 to-yellow-300 rounded-full shadow-[0_0_20px_rgba(234,179,8,0.6)]"
          ></motion.div>

          <div className="ml-16 space-y-20">

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative group"
              >

                {/* Golden Dot */}
                <div className="absolute -left-[30px] top-8 w-5 h-5 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 border-4 border-black shadow-lg animate-pulse"></div>

                {/* Card */}
                <div className="bg-[#111] p-8 rounded-2xl border border-yellow-500/20 shadow-xl 
                transition duration-500 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-yellow-500/20">

                  {/* Top Row */}
                  <div className="flex justify-between flex-wrap gap-4 items-center">
                    <div className="flex items-center gap-3 text-sm text-gray-400">
                      <CalendarDays size={16} />
                      {exp.period}
                      <span className="ml-3 px-3 py-1 text-xs rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-[#1a1a1a] border border-yellow-500/20 text-gray-300 text-sm">
                      <Briefcase size={14} />
                      {exp.company}
                    </div>
                  </div>

                  {/* Role */}
                  <h3 className="text-2xl font-semibold mt-6 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-300 bg-clip-text text-transparent">
                    {exp.role}
                  </h3>

                  {/* Points */}
                  <ul className="mt-6 space-y-4">
                    {exp.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-gray-300 leading-relaxed transition duration-300 hover:text-white"
                      >
                        <span className="text-yellow-400 mt-1">→</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                </div>
              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;