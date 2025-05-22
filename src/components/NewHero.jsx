import React, { useRef } from 'react';
import './NewHero.css'; // Your existing hero styles

// Framer Motion imports for parallax
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

// GSAP Imports
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const svgLogos = [
  'claude', 'gemini', 'grok-text', 'mistral', 'qwen', 'grok', 'chatgpt', 'deepseek', 'gemini-brand', 'hf', 'nvidia'
];

// --- Component for the vertically scrolling parallax text ---
// Keeping it within NewHero.jsx as requested
const BottomScrollText = ({ children, speedFactor = 0.3, className = "" }) => {
  const { scrollY } = useScroll(); // Tracks window scroll

  // Transform scrollY into a translateY value.
  // As scrollY increases (page scrolls down), y decreases (element moves up).
  const y = useTransform(scrollY, [0, 1000], [0, -1000 * speedFactor], { // Example: moves up 300px if factor is 0.3 for 1000px scroll
    clamp: false
  });

  return (
    <motion.div
      className={`w-full text-center ${className}`} // Ensure it spans width and centers text
      style={{ y }} // Apply the transform
    >
      {children}
    </motion.div>
  );
};
// --- End of BottomScrollText component ---


const NewHero = () => {
  const itemCount = svgLogos.length;
  const heroWrapperRef = useRef(null); // This is the trigger for GSAP animation
  const animatedFrameRef = useRef(null); // This is the element GSAP animates

  // GSAP Animation for the lift-off effect (Kept as is)
  useGSAP(() => {
    if (!animatedFrameRef.current || !heroWrapperRef.current) {
      console.warn("NewHero: Refs not connected for GSAP animation.");
      return;
    }
    gsap.set(animatedFrameRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      zIndex: 20, // Ensure it's above the revealed "AI" text and parallax text initially
    });
    gsap.to(animatedFrameRef.current, {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: heroWrapperRef.current,
        start: "center center",
        end: "bottom top", // Animates fully by the time the top of heroWrapper hits bottom of viewport
        scrub: true,
      },
    });
  }, { scope: heroWrapperRef });

  return (
    <div className="new-hero-wrapper" ref={heroWrapperRef}> {/* Height 100vh, relative */}
      <div className="animated-hero-frame" ref={animatedFrameRef}> {/* Full size, relative, overflow hidden for clipPath */}
        <div className="new-hero-background-image-container" /> {/* z-index 1 in its CSS */}

        {/* Main Banner Content (SVG Slider and Model Image) */}
        <div className="banner relative z-30"> {/* High z-index to be on top of everything within animated-hero-frame */}
          <div className="slider" style={{ '--quantity': itemCount }}>
            {svgLogos.map((logoName, index) => (
              <div
                className="item svg-item"
                key={logoName}
                style={{ '--position': index + 1 }}
              >
                <img src={`/img/${logoName}.svg`} alt={`${logoName} logo`} />
              </div>
            ))}
          </div>
          <div className="content">
            <div className="model" /> {/* z-index 1 within .banner .content */}
          </div>
        </div>
      </div>

      {/* Revealed text on scroll - Sibling to animated-hero-frame */}
      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black revealed-text z-10">
        AI
      </h1>
    </div>
  );
};

export default NewHero;