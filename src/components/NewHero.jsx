import React, { useRef } from 'react';
import './NewHero.css';

// GSAP Imports
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const NewHero = () => {
  const itemCount = 10; // Or however many dragon images you have
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
        end: "bottom top", // Adjust as needed
        scrub: true,
      },
    });

  }, { scope: heroWrapperRef });

  return (
    <div className="new-hero-wrapper" ref={heroWrapperRef}>
      <div className="animated-hero-frame" ref={animatedFrameRef}>
        <div className="new-hero-background-image-container" /> {/* For bg.png */}
        <div className="banner">
          <div className="slider" style={{ '--quantity': itemCount }}>
            {Array.from({ length: itemCount }).map((_, index) => (
              <div
                className="item"
                key={index}
                style={{ '--position': index + 1 }}
              >
                <img src={`/img/dragon_${index + 1}.jpg`} alt={`Dragon ${index + 1}`} />
              </div>
            ))}
          </div>
          {/* Content div is kept for structure if .model is still used within it,
              but h1 and author are removed. */}
          <div className="content">
            {/* <h1 data-content="CSS ONLY"></h1> Removed */}
            {/* <div className="author"></div> Removed */}
            <div className="model" /> {/* For model.png background */}
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