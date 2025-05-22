// src/components/ProjectPage.jsx
import React, { useEffect, useMemo, useState } from 'react'; // Added useState
import { useParams, Link as RouterLink, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../projectData.jsx';
import AnimatedTitle from './AnimatedTitle';
import { useWindowScroll } from "react-use";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Using the simpleSlideVariants (or define specific ones like slideVariantsLeftToRight etc.)
const simpleSlideVariants = {
  initial: (direction) => ({
    x: direction > 0 ? "100vw" : "-100vw",
    opacity: 0
  }),
  in: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 60, damping: 15, duration: 0.5 }
  },
  out: (direction) => ({
    x: direction < 0 ? "100vw" : "-100vw",
    opacity: 0,
    transition: { type: "spring", stiffness: 60, damping: 15, duration: 0.3 }
  })
};

const ProjectPage = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [navDirection, setNavDirection] = useState(1); // 1 for next/initial, -1 for prev

  const { project, currentIndex } = useMemo(() => {
    // ... (same project finding logic)
    const foundIndex = projects.findIndex(p => p.id === projectId);
    if (foundIndex === -1) {
      return { project: null, currentIndex: -1 };
    }
    return { project: projects[foundIndex], currentIndex: foundIndex };
  }, [projectId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  const handleNavigation = (path, direction) => {
    setNavDirection(direction); // Set direction before navigating
    // No need for setTimeout with AnimatePresence mode="wait" and framer-motion handling exit
    navigate(path);
  };


  if (!project) {
    // ... (Not found JSX, wrap with motion.div and variants if desired)
    return (
      <motion.div
        key="not-found"
        custom={navDirection} // Or a default direction like 1
        variants={simpleSlideVariants}
        initial="initial"
        animate="in"
        exit="out"
        className="container mx-auto px-3 md:px-10 py-40 text-center text-white min-h-screen"
      >
         <h2 className="text-3xl mb-4">Project Not Found</h2>
        <p className="mb-6">Sorry, we couldn't find the project you were looking for.</p>
        <RouterLink
          to="/"
          className="inline-block bg-yellow-300 text-black font-general text-sm uppercase px-6 py-3 rounded-full hover:bg-yellow-400 transition-colors"
        >
          Go Back to Home
        </RouterLink>
      </motion.div>
    );
  }

  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const animatedPageTitle = typeof project.pageTitle === 'string'
    ? project.pageTitle
    : project.pageTitle;

  return (
    <motion.section
      key={projectId} // Keying the motion component helps AnimatePresence differentiate
      custom={navDirection} // Pass direction to variants
      variants={simpleSlideVariants}
      initial="initial"
      animate="in"
      exit="out"
      className="project-page-container bg-gray-950 text-blue-50 min-h-screen pt-24 pb-16 md:pt-32 md:pb-24"
    >
      <div className="container mx-auto px-4 md:px-10">
        {/* ... Hero Image and AnimatedTitle (can also be motion components) ... */}
        <div className="project-hero mb-10 md:mb-16 text-center">
          {project.pageHeroImage && (
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              src={project.pageHeroImage}
              alt={`${typeof project.pageTitle === 'string' ? project.pageTitle.replace(/<[^>]+>/g, '') : 'Project'} hero`}
              className="w-full md:w-10/12 lg:w-8/12 max-h-[70vh] object-contain rounded-lg mx-auto mb-6 md:mb-10 shadow-2xl"
            />
          )}
          <AnimatedTitle title={animatedPageTitle} containerClass="!text-3xl sm:!text-4xl md:!text-5xl !text-yellow-300 !leading-tight mb-6" />
        </div>

        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="prose prose-lg prose-invert lg:prose-xl mx-auto project-content max-w-3xl"
          dangerouslySetInnerHTML={{ __html: project.pageContent }}
        />

        {/* Navigation Buttons - Updated onClick */}
        <div className="mt-12 md:mt-20 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-8">
          <div className="w-full sm:w-auto flex justify-start">
            {prevProject ? (
              <button // Changed back to button to control navigation timing with direction
                onClick={() => handleNavigation(`/project/${prevProject.id}`, -1)} // Pass -1 for previous
                className="project-nav-button group"
                aria-label={`Previous project: ${typeof prevProject.pageTitle === 'string' ? prevProject.pageTitle.replace(/<[^>]+>/g, '') : 'Previous'}`}
              >
                <FaArrowLeft className="project-nav-icon transition-transform duration-300 group-hover:-translate-x-1" />
                <span className="ml-2 hidden sm:inline">Previous</span>
                <span className="ml-2 sm:hidden">Prev</span>
              </button>
            ) : ( <div className="h-[38px] w-[100px] sm:w-auto"> </div>
            )}
          </div>

          <RouterLink
            to="/"
            onClick={() => setNavDirection(1)} // Assume going "back" to home slides like "next"
            className="project-nav-button back-to-portfolio-button order-first sm:order-none"
          >
            Back to Portfolio
          </RouterLink>

          <div className="w-full sm:w-auto flex justify-end">
            {nextProject ? (
              <button // Changed back to button
                onClick={() => handleNavigation(`/project/${nextProject.id}`, 1)} // Pass 1 for next
                className="project-nav-button group"
                aria-label={`Next project: ${typeof nextProject.pageTitle === 'string' ? nextProject.pageTitle.replace(/<[^>]+>/g, '') : 'Next'}`}
              >
                <span className="mr-2 hidden sm:inline">Next</span>
                <span className="mr-2 sm:hidden">Next</span>
                <FaArrowRight className="project-nav-icon transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            ) : ( <div className="h-[38px] w-[100px] sm:w-auto"> </div>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectPage;