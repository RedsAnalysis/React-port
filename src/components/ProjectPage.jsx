// src/components/ProjectPage.jsx
import React, { useEffect, useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../projectData.jsx'; // Ensure this path is correct
import AnimatedTitle from './AnimatedTitle';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import ImageSlider from './ImageSlider'; // Import the new ImageSlider component
import './ProjectPageNav.css'; // Ensure this contains your .project-side-nav styles
// Ensure your main index.css contains the .image-modal-overlay, .image-modal-content, etc. styles

const snappySlideVariants = {
  initial: (direction) => ({ x: direction > 0 ? "100vw" : "-100vw" }),
  in: { x: 0, transition: { type: "tween", ease: "easeInOut", duration: 0.3 } },
  out: (direction) => ({ x: direction < 0 ? "100vw" : "-100vw", transition: { type: "tween", ease: "easeInOut", duration: 0.3 } })
};

// Modal variants
const modalBackdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.15 } }
};
const modalContentVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.25, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2, ease: "easeIn" } }
};


const ProjectPage = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [navDirection, setNavDirection] = useState(1);

  const [isSectionModalOpen, setIsSectionModalOpen] = useState(false);
  const [selectedSectionImage, setSelectedSectionImage] = useState(null);

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

  const openSectionImageModal = (imageSrc) => {
    setSelectedSectionImage(imageSrc);
    setIsSectionModalOpen(true);
  };

  const closeSectionImageModal = () => {
    setIsSectionModalOpen(false);
    setTimeout(() => setSelectedSectionImage(null), 200);
  };
  
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isSectionModalOpen) {
        closeSectionImageModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isSectionModalOpen]);


  if (!project) {
    return (
      <motion.div
        variants={snappySlideVariants}
        initial="initial"
        animate="in"
        exit="out"
        custom={1}
        className="container mx-auto flex min-h-screen items-center justify-center bg-gray-950 text-xl text-white"
      >
        Project Not Found. Please check the URL or go back to the portfolio.
      </motion.div>
    );
  }

  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;
  const animatedPageTitle = typeof project.pageTitle === 'string' ? project.pageTitle : project.pageTitle;

  // Check if the Kiyo-Drip project has the special gallery structure
  const kiyoDripTopSliderImages = project.id === "Kiyo-Drip" && project.pageSections && project.pageSections[0] && project.pageSections[0].images_for_gallery
    ? project.pageSections[0].images_for_gallery
    : null;
  const kiyoDripTopSliderTitle = project.id === "Kiyo-Drip" && project.pageSections && project.pageSections[0] && project.pageSections[0].image_gallery_title
    ? project.pageSections[0].image_gallery_title
    : null;
  const kiyoDripTopSliderCaption = project.id === "Kiyo-Drip" && project.pageSections && project.pageSections[0] && project.pageSections[0].text_for_gallery_caption
    ? project.pageSections[0].text_for_gallery_caption
    : null;

  // Filter out the gallery section for Kiyo-Drip if it exists, so it's not rendered again in the main loop
  const regularPageSections = project.id === "Kiyo-Drip" && kiyoDripTopSliderImages
    ? project.pageSections.slice(1)
    : project.pageSections;


  return (
    <>
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
        )} {/* Corrected: Added closing curly brace */}
        {nextProject && (
          <div
            className="project-side-nav right-nav group"
            onClick={() => handleNavigation(`/project/${nextProject.id}`, 1)}
            title={`Next: ${typeof nextProject.pageTitle === 'string' ? nextProject.pageTitle.replace(/<[^>]+>/g, '') : ''}`}
          >
            <FaArrowRight className="nav-arrow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        )}

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-7xl relative z-10 project-content-area">
          <header className="project-hero mb-10 md:mb-16 text-center pt-12">
            <AnimatedTitle title={animatedPageTitle} containerClass="!text-3xl sm:!text-4xl md:!text-5xl !text-yellow-300 !leading-tight mb-6" />
            
            {/* Conditionally render the top ImageSlider for Kiyo-Drip or others with `topSliderImages` */}
            {(project.topSliderImages || kiyoDripTopSliderImages) && (
              <div className="mb-8 md:mb-12">
                {(project.topSliderTitle || kiyoDripTopSliderTitle) && (
                  <div
                    className="prose prose-lg prose-invert lg:prose-xl mx-auto max-w-3xl text-center mb-4"
                    dangerouslySetInnerHTML={{ __html: project.topSliderTitle || kiyoDripTopSliderTitle }}
                  />
                )}
                <ImageSlider images={project.topSliderImages || kiyoDripTopSliderImages} />
                {(project.topSliderCaption || kiyoDripTopSliderCaption) && (
                   <div
                    className="prose prose-sm prose-invert mx-auto max-w-2xl text-center"
                    dangerouslySetInnerHTML={{ __html: project.topSliderCaption || kiyoDripTopSliderCaption }}
                  />
                )}
              </div>
            )}
            
            {/* Render pageHeroImage only if no topSlider logic is active for this project */}
            {!(project.topSliderImages || kiyoDripTopSliderImages) && project.pageHeroImage && (
              <motion.img
                src={project.pageHeroImage}
                alt={`${project.pageTitle} hero banner`}
                className="mx-auto mb-8 h-auto max-h-[50vh] w-full max-w-5xl rounded-lg object-cover shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
              />
            )}

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

          {/* Use `regularPageSections` which filters out Kiyo-Drip's gallery if it was used for the top slider */}
          <div className="space-y-16 md:space-y-24">
            {regularPageSections && regularPageSections.map((section, index) => (
              // Ensure section.image and section.text exist before trying to render
              section.image && section.text ? (
                <motion.div
                  key={index}
                  className={`flex flex-col gap-8 md:gap-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index % 4) }}
                >
                  <div className="md:w-1/2 flex items-center justify-center">
                    <img
                      src={section.image}
                      alt={section.alt || `Project image ${index + 1}`}
                      className={`w-full h-auto max-h-[500px] object-contain md:object-cover rounded-lg shadow-xl cursor-pointer hover:opacity-80 transition-opacity ${section.imageCustomStyle || 'aspect-video'}`}
                      onClick={() => openSectionImageModal(section.image)}
                    />
                  </div>
                  <div className="md:w-1/2 flex flex-col justify-center">
                    <div
                      className="prose prose-lg prose-invert lg:prose-xl max-w-none"
                      dangerouslySetInnerHTML={{ __html: section.text }}
                    />
                  </div>
                </motion.div>
              ) : null // Skip rendering if section.image or section.text is missing
            ))}
          </div>

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

      <AnimatePresence>
        {isSectionModalOpen && selectedSectionImage && (
          <motion.div
            className="image-modal-overlay"
            variants={modalBackdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={closeSectionImageModal}
          >
            <motion.div
              className="image-modal-content"
              variants={modalContentVariants}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedSectionImage} alt="Expanded project content" />
              <button
                className="image-modal-close-button"
                onClick={closeSectionImageModal}
                aria-label="Close image view"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectPage;