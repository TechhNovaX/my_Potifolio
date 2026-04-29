import Navbar from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();

  return (
    <div className="relative min-h-screen flex flex-col bg-black text-white overflow-x-hidden">

      {/* 🔥 Premium Black Background with Subtle Gold Glow */}
      <div className="fixed inset-0 -z-10 bg-black">
        <div className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[160px]"></div>
        <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-amber-400/10 rounded-full blur-[160px]"></div>
      </div>

      <Navbar />

      {/* Page Content */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />

    </div>
  );
}

export default App;