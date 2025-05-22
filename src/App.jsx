// src/App.jsx
import { useState } from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import About from "./components/About";
import NewHero from "./components/NewHero";
import NavBar from "./components/Navbar";
import Projects from "./components/Projects";
import ProjectPage from "./components/ProjectPage";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { motion } from 'framer-motion'; // Make sure motion is imported if HomePageLayout is here

// Define fade variants (can be in a separate utils/animations.js file too)
const pageFadeVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    transition: { duration: 0.4, ease: "easeInOut" } // Adjust duration/easing
  },
  out: {
    opacity: 0,
    transition: { duration: 0.3, ease: "easeInOut" } // Adjust duration/easing
  }
};

const HomePageLayout = () => {
  return (
    // Apply motion and variants to the top-level element of your page layout
    <motion.div
      variants={pageFadeVariants}
      initial="initial"
      animate="in"
      exit="out"
    >
      <NewHero />
      <About />
      <Projects />
      <Story />
      <Contact />
    </motion.div>
  );
};


function App() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const toggleVideoPlayback = () => setIsVideoPlaying((prev) => !prev);
  const location = useLocation();

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden"> {/* Ensure this background is dark via body style */}
      <NavBar isVideoPlaying={isVideoPlaying} toggleVideoPlayback={toggleVideoPlayback} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePageLayout />} />
          <Route path="/project/:projectId" element={<ProjectPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </main>
  );
}

export default App;