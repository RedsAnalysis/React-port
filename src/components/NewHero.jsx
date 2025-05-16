import React, { useRef } from 'react';
import './NewHero.css';

// GSAP Imports
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

// Array of your SVG filenames
const svgLogos = [
  'claude', 'gemini', 'grok-text', 'mistral', 'qwen', 'grok', 'chatgpt', 'deepseek', 'gemini-brand', 'hf', 'nvidia'
  // Make sure these names (without .svg) match your files in public/img/
];

const NewHero = () => {
  const itemCount = svgLogos.length;
  const heroWrapperRef = useRef(null);
  const animatedFrameRef = useRef(null);

  useGSAP(() => {
    if (!animatedFrameRef.current || !heroWrapperRef.current) {
      console.warn("NewHero: Refs not connected for GSAP animation.");
      return;
    }

    gsap.set(animatedFrameRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      zIndex: 10,
    });

    gsap.to(animatedFrameRef.current, {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: heroWrapperRef.current,
        start: "center center",
        end: "bottom top",
        scrub: true,
      },
    });
  }, { scope: heroWrapperRef });

  return (
    <div className="new-hero-wrapper" ref={heroWrapperRef}>
      <div className="animated-hero-frame" ref={animatedFrameRef}>
        <div className="new-hero-background-image-container" />
        <div className="banner">
          <div className="slider" style={{ '--quantity': itemCount }}>
            {svgLogos.map((logoName, index) => (
              <div
                className="item svg-item" // Added svg-item class
                key={logoName}
                style={{ '--position': index + 1 }}
              >
                {/* Corrected path to use .svg */}
                <img src={`/img/${logoName}.svg`} alt={`${logoName} logo`} />
              </div>
            ))}
          </div>
          <div className="content">
            <div className="model" />
          </div>
        </div>
      </div>
      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black revealed-text">
        AI
      </h1>
    </div>
  );
};

export default NewHero;