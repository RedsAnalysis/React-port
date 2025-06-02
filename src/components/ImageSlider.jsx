// src/components/ImageSlider.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Framer Motion variants for modal (can be shared or defined per component)
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

const ImageSlider = ({
  images, // expects array of { src: "...", alt: "..." }
  imageHeightPx = 220,
  imageWidthPx = 220,
  imageMarginPx = 15,
  animationSpeedFactor = 3.5, // seconds per image
  sliderContainerClass = "story-slider-container", // Default to existing class
  trackClass = "story-slider-track",
  itemClass = "story-slider-item"
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageSrc, setSelectedImageSrc] = useState(null);
  const sliderTrackRef = useRef(null);

  if (!images || images.length === 0) {
    return null; // Don't render if no images
  }

  const numUniqueImages = images.length;
  const duplicatedImages = [...images, ...images]; // For infinite loop

  const itemTotalWidthWithMargin = imageWidthPx + imageMarginPx;
  const trackWidthSingleSet = numUniqueImages * itemTotalWidthWithMargin;
  const animationDuration = numUniqueImages * animationSpeedFactor;

  const handleImageClick = (src) => {
    setSelectedImageSrc(src);
    setIsModalOpen(true);
    if (sliderTrackRef.current) {
      sliderTrackRef.current.classList.add("paused");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedImageSrc(null), 200); // Allow exit animation
    if (sliderTrackRef.current) {
      sliderTrackRef.current.classList.remove("paused");
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <>
      <div className={`${sliderContainerClass} w-full my-6 md:my-8`}>
        <div
          ref={sliderTrackRef}
          className={trackClass}
          style={{
            '--track-width-single-set': `${trackWidthSingleSet}px`,
            '--animation-duration': `${animationDuration}s`,
            width: `${trackWidthSingleSet * 2}px`
          }}
        >
          {duplicatedImages.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className={itemClass}
              style={{
                height: `${imageHeightPx}px`,
                width: `${imageWidthPx}px`,
                marginRight: `${imageMarginPx}px`
              }}
              onClick={() => handleImageClick(image.src)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleImageClick(image.src); }}
              aria-label={`View larger: ${image.alt}`}
            >
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && selectedImageSrc && (
          <motion.div
            className="image-modal-overlay" // Use existing modal CSS
            variants={modalBackdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={closeModal}
          >
            <motion.div
              className="image-modal-content" // Use existing modal CSS
              variants={modalContentVariants}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImageSrc} alt="Expanded view" />
              <button
                className="image-modal-close-button" // Use existing modal CSS
                onClick={closeModal}
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

export default ImageSlider;