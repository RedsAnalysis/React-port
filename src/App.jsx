// src/App.jsx
import { useState } from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Components
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectPage from "./components/ProjectPage";
import HomePageLayout from "./layouts/HomePageLayout"; // Assuming this is correct

// ... (your pageFadeVariants or pureSlideVariants) ...
const pureSlideVariants = { /* ... as defined before ... */
  initial: (direction) => ({ x: direction > 0 ? "100vw" : "-100vw" }),
  in: { x: 0, transition: { type: "spring", stiffness: 70, damping: 20, duration: 0.5 } },
  out: (direction) => ({ x: direction < 0 ? "100vw" : "-100vw", transition: { type: "spring", stiffness: 70, damping: 20, duration: 0.4 } })
};


function App() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const toggleVideoPlayback = () => setIsVideoPlaying((prev) => !prev);
  const location = useLocation();

  // Determine if the current page is a project detail page
  const isProjectPage = location.pathname.startsWith('/project/');

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      {/* Conditionally render NavBar */}
      {!isProjectPage && (
        <NavBar isVideoPlaying={isVideoPlaying} toggleVideoPlayback={toggleVideoPlayback} />
      )}

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePageLayout />} />
          <Route path="/project/:projectId" element={<ProjectPage />} />
          {/* Consider a NotFoundPage component for the "*" route */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </AnimatePresence>

      {/* Conditionally render Footer if you want it hidden on project pages too */}
      {/* {!isProjectPage && <Footer />} */}
      {/* Or always show footer: */}
      <Footer />
    </main>
  );
}

export default App;