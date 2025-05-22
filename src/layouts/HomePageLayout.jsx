// src/layouts/HomePageLayout.jsx
import { motion } from 'framer-motion';
import NewHero from '../components/NewHero';     // Corrected path: one level up, then into components
import About from '../components/About';       // Corrected path
import Projects from '../components/Projects';   // Corrected path
import Story from '../components/Story';       // Corrected path
import Contact from '../components/Contact';     // Corrected path

// Define fade variants (can be in a separate utils/animations.js file too)
const fadeVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
  out: { opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } }
};

const HomePageLayout = () => {
  return (
    <motion.div
      key="homepage" // Good to have a key for AnimatePresence direct children
      variants={fadeVariants}
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

export default HomePageLayout;