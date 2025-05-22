// src/components/Projects.jsx
import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { Link } from 'react-router-dom';
import { projects } from '../projectData.jsx';
import { motion } from 'framer-motion'; // Import motion

// BentoTilt component (remains the same)
export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;
    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();
    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;
    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    // MODIFIED LINE: Removed scale3d
    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

// BentoCard component (remains the same)
export const BentoCard = ({ videoSrc, title, description, isComingSoon, cardStaticBgClass }) => {
  // ... (BentoCard code) ...
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMoveCard = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();
    setCursorPosition({ x: event.clientX - rect.left, y: event.clientY - rect.top });
  };
  const handleMouseEnterCard = () => setHoverOpacity(1);
  const handleMouseLeaveCard = () => setHoverOpacity(0);

  return (
    <div className={`relative size-full ${!videoSrc && cardStaticBgClass ? cardStaticBgClass : ''}`}>
      {videoSrc && (
        <video
          src={videoSrc}
          loop
          muted
          autoPlay
          playsInline
          className="absolute left-0 top-0 size-full object-cover object-center"
        />
      )}
      <div className={`relative z-10 flex size-full flex-col justify-between p-5 ${!videoSrc && cardStaticBgClass ? 'text-black' : 'text-blue-50'}`}>
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (videoSrc || !cardStaticBgClass) && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
           {!videoSrc && title.props && title.props.children.some(child => typeof child === 'string' && child.includes("More")) && (
             <TiLocationArrow className="m-5 scale-[5] self-end text-black" />
           )}
        </div>
        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMoveCard}
            onMouseEnter={handleMouseEnterCard}
            onMouseLeave={handleMouseLeaveCard}
            className={`border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full px-5 py-2 text-xs uppercase
                        ${!videoSrc && cardStaticBgClass ? 'bg-white text-black/70 border-black/30' : 'bg-black text-white/20'}`}
          >
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, 
                                          ${!videoSrc && cardStaticBgClass ? '#A891E288' : '#656fe288'}, 
                                          #00000026)`,
              }}
            />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20">coming soon</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Main Projects component
const Projects = () => (
  <section id="projects" className="bg-black pb-52">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <p className="font-circular-web text-lg text-blue-50">My Projects</p>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
          A showcase of my work, experiments, and explorations in AI, Data Science, and Web Development.
        </p>
      </div>

      <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-7 project-grid-container">
        {projects.map((project, index) => {
          const isFirstItemLarge = index === 0;
          const colSpanClass = isFirstItemLarge ? "md:col-span-2" : "md:col-span-1";
          // Ensure consistent height for better visual of rotation and scaling for grid items
          const heightClass = isFirstItemLarge ? "h-96 md:h-[65vh]" : "h-[50vh] md:h-[60vh]"; // Or a fixed pixel height like h-96

          // --- Animation props for the grid items (not the first large one) ---
          const gridItemAnimation = !isFirstItemLarge ? {
            animate: {
              transition: { ease: "linear", duration: 20, repeat: Infinity } // Slower duration for subtle bg rotation
            },
            whileHover: {
              scale: 1.05, // Pop effect: scale up slightly
              zIndex: 20,  // Bring to front on hover
              transition: { duration: 0.2 }
            },
          } : {}; // No animation for the first large card


          return (
            <Link
              to={`/project/${project.id}`}
              key={project.id}
              className={`block no-underline ${colSpanClass} ${heightClass} project-card-link`}
            >
              {/* Wrap BentoTilt with motion.div for the grid items */}
              <motion.div
                className="h-full w-full" // Ensure motion.div fills the Link
                {...gridItemAnimation} // Spread the animation props
              >
                <BentoTilt className="border-hsla relative size-full overflow-hidden rounded-md">
                  <BentoCard
                    videoSrc={project.cardVideoSrc}
                    title={project.cardTitle}
                    description={project.cardDescription}
                    isComingSoon={project.isComingSoon}
                    cardStaticBgClass={project.cardStaticBgClass}
                  />
                </BentoTilt>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </div>
  </section>
);

export default Projects;