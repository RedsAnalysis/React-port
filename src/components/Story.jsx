import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion"; // For modal
import Button from "./Button";
import AnimatedTitle from "./AnimatedTitle";

// --- Configuration Constants ---
const NUM_UNIQUE_IMAGES = 15; // << SET THIS TO THE NUMBER OF YOUR UNIQUE IMAGES
const IMAGE_BASE_PATH = "/img/ai-generated/";
const IMAGE_FILE_PREFIX = "ai_gen_";
const IMAGE_EXTENSION = ".png";

const SLIDER_IMAGE_DISPLAY_HEIGHT_PX = 220; // Height of images in the slider
const SLIDER_IMAGE_DISPLAY_WIDTH_PX = 220;  // Width of images (since they are square 1536x1536)
const SLIDER_IMAGE_MARGIN_PX = 15;        // Space between images
const SECONDS_PER_IMAGE_FOR_ANIMATION_SPEED = 3.5; // Adjust for desired scroll speed
// --- End Configuration Constants ---

const aiGeneratedImages = Array.from({ length: NUM_UNIQUE_IMAGES }, (_, i) => ({
  id: i,
  src: `${IMAGE_BASE_PATH}${IMAGE_FILE_PREFIX}${i + 1}${IMAGE_EXTENSION}`,
  alt: `AI Generated Image ${i + 1}`,
}));

// Framer Motion variants for modal
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

const Story = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const sliderTrackRef = useRef(null);

  // Duplicate images for infinite scroll effect
  const duplicatedImages = [...aiGeneratedImages, ...aiGeneratedImages];

  const itemTotalWidthWithMargin = SLIDER_IMAGE_DISPLAY_WIDTH_PX + SLIDER_IMAGE_MARGIN_PX;
  const trackWidthSingleSet = NUM_UNIQUE_IMAGES * itemTotalWidthWithMargin;
  const animationDuration = NUM_UNIQUE_IMAGES * SECONDS_PER_IMAGE_FOR_ANIMATION_SPEED;

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
    if (sliderTrackRef.current) {
      sliderTrackRef.current.classList.add("paused");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Delay removing selectedImage to allow exit animation
    setTimeout(() => setSelectedImage(null), 200); 
    if (sliderTrackRef.current) {
      sliderTrackRef.current.classList.remove("paused");
    }
  };

  // Handle Escape key to close modal
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
  }, [isModalOpen]); // Re-run effect if isModalOpen changes

  return (
    <div id="story" className="min-h-dvh w-screen bg-black text-blue-50 overflow-x-hidden"> {/* Added overflow-x-hidden */}
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase md:text-[10px]">
          The new world order
        </p>

        <div className="relative w-full flex flex-col items-center">
          <AnimatedTitle
            title="The st<b>o</b>ry of <br /> ai ris<b>e</b>"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-20"
          />

          {/* --- Image Slider --- */}
          <div className="story-slider-container w-full mt-10 md:mt-12 mb-8"> {/* Adjusted margins */}
            <div
              ref={sliderTrackRef}
              className="story-slider-track"
              style={{
                '--track-width-single-set': `${trackWidthSingleSet}px`,
                '--animation-duration': `${animationDuration}s`,
                width: `${trackWidthSingleSet * 2}px` // Total width for the duplicated track
              }}
            >
              {duplicatedImages.map((image, index) => (
                <div
                  key={`${image.id}-${index}`} // Unique key for duplicated items
                  className="story-slider-item"
                  style={{ 
                    height: `${SLIDER_IMAGE_DISPLAY_HEIGHT_PX}px`, 
                    width: `${SLIDER_IMAGE_DISPLAY_WIDTH_PX}px`, 
                    marginRight: `${SLIDER_IMAGE_MARGIN_PX}px` 
                  }}
                  onClick={() => handleImageClick(image.src)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleImageClick(image.src); }}
                  aria-label={`View larger image: ${image.alt}`}
                >
                  <img src={image.src} alt={image.alt} />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* --- End Image Slider --- */}

        <div className="relative z-10 -mt-2 flex w-full max-w-xl px-6 justify-center text-center md:-mt-0 md:max-w-md md:justify-end md:me-44 md:text-start">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 text-base font-circular-web text-violet-50">
              AI's rise is a convergence of limitless potential, unlocking new opportunities to reshape industries and drive innovation.
              As we explore its secrets, we gain the power to shape the future.
            </p>
            <Button
              id="realm-btn"
              title="Find out More"
              containerClass="mt-5"
            />
          </div>
        </div>
      </div>

      {/* --- Modal for Expanded Image --- */}
      <AnimatePresence>
        {isModalOpen && selectedImage && (
          <motion.div
            className="image-modal-overlay"
            variants={modalBackdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={closeModal} // Close on overlay click
          >
            <motion.div
              className="image-modal-content"
              variants={modalContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside content
            >
              <img src={selectedImage} alt="Expanded AI Generated Content" />
              <button
                className="image-modal-close-button"
                onClick={closeModal}
                aria-label="Close image view"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* --- End Modal --- */}
    </div>
  );
};

export default Story;