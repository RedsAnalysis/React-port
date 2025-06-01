// src/components/ProjectPage.jsx
import React, { useEffect, useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../projectData.jsx';
import AnimatedTitle from './AnimatedTitle';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './ProjectPageNav.css';

const snappySlideVariants = {
  initial: (direction) => ({
    x: direction > 0 ? "100vw" : "-100vw",
  }),
  in: {
    x: 0,
    transition: { type: "tween", ease: "easeInOut", duration: 0.3 }
  },
  out: (direction) => ({
    x: direction < 0 ? "100vw" : "-100vw",
    transition: { type: "tween", ease: "easeInOut", duration: 0.3 }
  })
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
    return (
      <motion.div
        variants={snappySlideVariants}
        initial="initial"
        animate="in"
        exit="out"
        custom={1} // Default direction for not found
        className="container mx-auto flex min-h-screen items-center justify-center bg-gray-950 text-xl text-white"
      >
        Project Not Found. Please check the URL or go back to the portfolio.
      </motion.div>
    );
  }

  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const animatedPageTitle = typeof project.pageTitle === 'string' ? project.pageTitle : project.pageTitle;

  return (
    <motion.section
      key={projectId}
      custom={navDirection}
      variants={snappySlideVariants}
      initial="initial"
      animate="in"
      exit="out"
      className="project-page-container relative bg-gray-950 text-blue-50 min-h-screen pt-10 pb-16 md:pt-16 md:pb-24 overflow-y-auto"
    >
      {/* Side Navigation Arrows */}
      {prevProject && (
        <div
          className="project-side-nav left-nav group"
          onClick={() => handleNavigation(`/project/${prevProject.id}`, -1)}
          title={`Previous: ${typeof prevProject.pageTitle === 'string' ? prevProject.pageTitle.replace(/<[^>]+>/g, '') : ''}`}
        >
          <FaArrowLeft className="nav-arrow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}
      {nextProject && (
        <div
          className="project-side-nav right-nav group"
          onClick={() => handleNavigation(`/project/${nextProject.id}`, 1)}
          title={`Next: ${typeof nextProject.pageTitle === 'string' ? nextProject.pageTitle.replace(/<[^>]+>/g, '') : ''}`}
        >
          <FaArrowRight className="nav-arrow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}

      {/* Main Content Area - Wider and with top padding for title/hero */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-7xl relative z-10 project-content-area">
        
        {/* Hero Section: Title and Optional Hero Image */}
        <header className="project-hero mb-12 md:mb-20 text-center pt-12">
          {project.pageHeroImage && (
            <motion.img
              src={project.pageHeroImage}
              alt={`${project.pageTitle} hero banner`}
              className="mx-auto mb-8 h-auto max-h-[50vh] w-full max-w-5xl rounded-lg object-cover shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            />
          )}
          <AnimatedTitle title={animatedPageTitle} containerClass="!text-3xl sm:!text-4xl md:!text-5xl !text-yellow-300 !leading-tight mb-6" />
          
          {project.pageIntro && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="prose prose-lg prose-invert lg:prose-xl mx-auto max-w-3xl text-center"
              dangerouslySetInnerHTML={{ __html: project.pageIntro }}
            />
          )}
        </header>

        {/* Alternating Image and Text Sections */}
        <div className="space-y-16 md:space-y-24">
          {project.pageSections && project.pageSections.map((section, index) => (
            <motion.div
              key={index}
              className={`flex flex-col gap-8 md:gap-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 * (index % 3) }} // Stagger slightly
            >
              {/* Image Column */}
              <div className="md:w-1/2 flex items-center justify-center">
                {section.image && (
                  <img
                    src={section.image}
                    alt={section.alt || `Project image ${index + 1}`}
                    // Use aspect-video for 16:9. Ensure your images match or use object-cover.
                    // Added rounded-lg and shadow-xl for better visuals.
                    className={`w-full h-auto max-h-[500px] object-contain md:object-cover rounded-lg shadow-xl ${section.imageCustomStyle || 'aspect-video'}`}
                  />
                )}
              </div>
              {/* Text Column */}
              <div className="md:w-1/2 flex flex-col justify-center">
                <div
                  className="prose prose-lg prose-invert lg:prose-xl max-w-none" // max-w-none to fill its half
                  dangerouslySetInnerHTML={{ __html: section.text }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Back to Portfolio Button */}
        <div className="mt-16 md:mt-24 text-center">
          <button
            onClick={() => handleNavigation("/", prevProject ? -1 : 1)}
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