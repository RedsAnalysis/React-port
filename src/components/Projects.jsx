// src/components/Projects.jsx
import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { Link } from 'react-router-dom'; // Import Link
import { projects } from '../projectData.jsx';

// BentoTilt component (keep as is)
export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;
    const { left, top, width, height } = itemRef.current.getBoundingClientRect();
    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;
    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;
    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };
  const handleMouseLeave = () => setTransformStyle("");
  return (
    <div ref={itemRef} className={className} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ transform: transformStyle }}>
      {children}
    </div>
  );
};

export const BentoCard = ({ videoSrc, title, description, isComingSoon, cardStaticBgClass }) => { // Added cardStaticBgClass
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
    // Apply static background if videoSrc is not present and cardStaticBgClass is
    <div className={`relative size-full ${!videoSrc && cardStaticBgClass ? cardStaticBgClass : ''}`}>
      {videoSrc && ( // Conditionally render video
        <video
          src={videoSrc}
          loop
          muted
          autoPlay
          playsInline
          className="absolute left-0 top-0 size-full object-cover object-center"
        />
      )}
      {/* Adjust text color for static background if needed */}
      <div className={`relative z-10 flex size-full flex-col justify-between p-5 ${!videoSrc && cardStaticBgClass ? 'text-black' : 'text-blue-50'}`}>
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {/* For the static card, the description might be different or not present */}
          {description && (videoSrc || !cardStaticBgClass) && ( // Only show description if it's a video card or explicitly provided for static
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
           {/* Special handling for "More coming soon" card's icon if it's part of cardStaticBgClass logic */}
           {!videoSrc && title.props && title.props.children.some(child => typeof child === 'string' && child.includes("More")) && (
             <TiLocationArrow className="m-5 scale-[5] self-end text-black" /> // Assuming icon for static card
           )}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMoveCard}
            onMouseEnter={handleMouseEnterCard}
            onMouseLeave={handleMouseLeaveCard}
            // Adjust button style if it's on a light static background
            className={`border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full px-5 py-2 text-xs uppercase
                        ${!videoSrc && cardStaticBgClass ? 'bg-white text-black/70 border-black/30' : 'bg-black text-white/20'}`}
          >
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, 
                                          ${!videoSrc && cardStaticBgClass ? '#A891E288' : '#656fe288'}, 
                                          #00000026)`, // Adjusted hover color for light bg
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

// The main Projects component mapping logic should now correctly display all 6 projects from projectData.jsx
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
          // Updated logic for varied grid item sizes. You can customize this further.
          // Example: First item spans 2 cols, others 1. Heights can also be varied.
          const colSpanClass = index === 0 ? "md:col-span-2" : "md:col-span-1";
          const heightClass = index === 0 ? "h-96 md:h-[65vh]" : "h-80 md:h-[60vh]"; // Adjusted height for grid items

          return (
            <Link
              to={`/project/${project.id}`}
              key={project.id}
              className={`block no-underline ${colSpanClass} ${heightClass} project-card-link`}
            >
              <BentoTilt className="border-hsla relative size-full overflow-hidden rounded-md">
                <BentoCard
                  videoSrc={project.cardVideoSrc}
                  title={project.cardTitle}
                  description={project.cardDescription}
                  isComingSoon={project.isComingSoon}
                  cardStaticBgClass={project.cardStaticBgClass} // Pass this new prop
                />
              </BentoTilt>
            </Link>
          );
        })}
      </div>
    </div>
  </section>
);

export default Projects;