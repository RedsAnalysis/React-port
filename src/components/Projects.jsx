// src/components/Projects.jsx
import { useState, useRef } from "react";
import { Link } from 'react-router-dom';
import { projects } from '../projectData.jsx'; // Make sure this path is correct
import { motion } from 'framer-motion';
import { TiLocationArrow } from "react-icons/ti"; // Re-added this import

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

// BentoCard component
export const BentoCard = ({
  videoSrc,
  cardImageSrc,
  title,
  description,
  // isComingSoon, // Prop removed as per previous request
  cardStaticBgClass,
  cardTextColor // Prop for explicit text color
}) => {

  // Determine background class: only apply static if no video and no image
  const backgroundClass = !videoSrc && !cardImageSrc && cardStaticBgClass ? cardStaticBgClass : '';
  
  // Determine text color: use provided cardTextColor or default to text-blue-50 if not provided
  // Ensure text-blue-50 is your desired light color class from Tailwind
  const textColorClass = cardTextColor || 'text-blue-50';


  return (
    <div className={`relative size-full ${backgroundClass}`}>
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
      {!videoSrc && cardImageSrc && (
        <img
          src={cardImageSrc}
          alt={typeof title === 'string' ? title.replace(/<[^>]+>/g, '') : 'Project Card Image'}
          className="absolute left-0 top-0 size-full object-cover object-center"
        />
      )}

      {/* Content Overlay - Now uses textColorClass directly */}
      <div className={`relative z-10 flex size-full flex-col justify-between p-5 ${textColorClass}`}>
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && ( // Show description if it exists
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
           {/* Logic for the "More..." icon if it's still relevant:
               Only show if it's a static background card AND the title includes "More"
           */}
           {!videoSrc && !cardImageSrc && cardStaticBgClass && 
            title && title.props && title.props.children && Array.isArray(title.props.children) &&
            title.props.children.some(child => typeof child === 'string' && child.includes("More")) && (
             <TiLocationArrow className={`m-5 scale-[5] self-end ${textColorClass}`} />
           )}
        </div>
        {/* "Coming Soon" button has been removed */}
      </div>
    </div>
  );
};

// Main Projects component
const Projects = () => (
  <section id="projects" className="bg-black pb-52">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <p className="font-circular-web text-lg text-blue-50">My Experience</p>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
          A showcase of my work, experiments and explorations in AI.
        </p>
      </div>

      <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-7 project-grid-container">
        {projects.map((project, index) => {
          const isFirstItemLarge = index === 0;
          const colSpanClass = isFirstItemLarge ? "md:col-span-2" : "md:col-span-1";
          const heightClass = isFirstItemLarge ? "h-96 md:h-[65vh]" : "h-[50vh] md:h-[60vh]";

          const gridItemAnimation = !isFirstItemLarge ? {
            animate: {
              transition: { ease: "linear", duration: 20, repeat: Infinity }
            },
            whileHover: {
              scale: 1.05,
              zIndex: 20,
              transition: { duration: 0.2 }
            },
          } : {};

          return (
            <Link
              to={`/project/${project.id}`}
              key={project.id}
              className={`block no-underline ${colSpanClass} ${heightClass} project-card-link`}
            >
              <motion.div
                className="h-full w-full"
                {...gridItemAnimation}
              >
                <BentoTilt className="border-hsla relative size-full overflow-hidden rounded-md">
                  <BentoCard
                    videoSrc={project.cardVideoSrc}
                    cardImageSrc={project.cardImageSrc}
                    title={project.cardTitle}
                    description={project.cardDescription}
                    cardStaticBgClass={project.cardStaticBgClass}
                    cardTextColor={project.cardTextColor}
                  />
                </BentoTilt> {/* <--- CORRECTED: Ensure BentoTilt has a proper closing tag */}
              </motion.div>
            </Link>
          );
        })}
      </div>
    </div>
  </section>
);

export default Projects;