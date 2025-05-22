// src/components/ProjectPage.jsx
import React, { useEffect, useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Link/RouterLink not needed for these controls
import { motion } from 'framer-motion';
import { projects } from '../projectData.jsx';
import AnimatedTitle from './AnimatedTitle';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './ProjectPageNav.css';

// ... (your pureSlideVariants or other transition variants) ...
const pureSlideVariants = { /* ... as defined before ... */
  initial: (direction) => ({ x: direction > 0 ? "100vw" : "-100vw" }),
  in: { x: 0, transition: { type: "spring", stiffness: 70, damping: 20, duration: 0.5 } },
  out: (direction) => ({ x: direction < 0 ? "100vw" : "-100vw", transition: { type: "spring", stiffness: 70, damping: 20, duration: 0.4 } })
};


const ProjectPage = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [navDirection, setNavDirection] = useState(1);

  const { project, currentIndex } = useMemo(() => {
    const foundIndex = projects.findIndex(p => p.id === projectId);
    return foundIndex === -1 ? { project: null, currentIndex: -1 } : { project: projects[foundIndex], currentIndex: foundIndex };
  }, [projectId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  const handleNavigation = (path, direction) => {
    setNavDirection(direction);
    navigate(path);
  };

  if (!project) {
    // ... (Not found JSX - can also be wrapped in motion.div if desired)
    return (
      <motion.div /* ... */ className="container ... min-h-screen">
        Project Not Found content...
      </motion.div>
    );
  }

  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const animatedPageTitle = typeof project.pageTitle === 'string' ? project.pageTitle : project.pageTitle;

  return (
    // Add position: relative to this main section for the absolute positioned nav zones
    <motion.section
      key={projectId}
      custom={navDirection}
      variants={pureSlideVariants}
      initial="initial"
      animate="in"
      exit="out"
      className="project-page-container relative bg-gray-950 text-blue-50 min-h-screen pt-10 pb-16 md:pt-16 md:pb-24" // Reduced top padding as navbar is gone
    >
      {/* Previous Project Clickable Zone */}
      {prevProject && (
        <div
          className="project-side-nav left-nav group"
          onClick={() => handleNavigation(`/project/${prevProject.id}`, -1)}
          title={`Previous: ${typeof prevProject.pageTitle === 'string' ? prevProject.pageTitle.replace(/<[^>]+>/g, '') : ''}`}
        >
          <FaArrowLeft className="nav-arrow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}

      {/* Next Project Clickable Zone */}
      {nextProject && (
        <div
          className="project-side-nav right-nav group"
          onClick={() => handleNavigation(`/project/${nextProject.id}`, 1)}
          title={`Next: ${typeof nextProject.pageTitle === 'string' ? nextProject.pageTitle.replace(/<[^>]+>/g, '') : ''}`}
        >
          <FaArrowRight className="nav-arrow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}

      {/* Main Content Area (needs padding to not be overlapped by side navs) */}
      <div className="container mx-auto px-4 md:px-10 relative z-10 project-content-area"> {/* Increased z-index */}
        <div className="project-hero mb-10 md:mb-16 text-center pt-12"> {/* Added padding-top here */}
          {project.pageHeroImage && (
            <motion.img /* ... */ />
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

        {/* "Back to Portfolio" button can remain or be removed if side nav is preferred */}
        <div className="mt-12 md:mt-20 text-center">
            <button
                onClick={() => handleNavigation("/", prevProject ? -1 : 1)} // Or just "/"
                className="project-nav-button back-to-portfolio-button"
            >
                Back to Portfolio
            </button>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectPage;