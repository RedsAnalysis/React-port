import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Define the props if you're using TypeScript
// interface VerticalParallaxScrollTextProps {
//   children: React.ReactNode;
//   className?: string;
//   speedFactor?: number; // How much faster/slower it scrolls than the page
//   startOffset?: number; // When the parallax effect should start relative to element visibility
//   endOffset?: number;   // When it should end
// }

export function VerticalParallaxScrollText({
  children,
  className = "",
  speedFactor = 0.3, // Example: scrolls at 30% of the page scroll speed upwards
}) {
  const { scrollY } = useScroll(); // Get general page scrollY

  // This transform will move the text upwards as the page scrolls down.
  // We want it to move upwards, so we'll use a negative value derived from scrollY.
  // The range [0, 1] for scrollYProgress is a simplification; typically, you'd tie this
  // to when the element is in view. For a simpler start, let's use scrollY directly
  // and adjust the output range.
  //
  // Let's say we want it to move up 300px for every 1000px of page scroll.
  const y = useTransform(scrollY, [0, 1000], [0, -300 * speedFactor], {
    clamp: false, // Allow it to go beyond if needed
  });
  // A more common parallax approach is to tie it to the element's visibility:
  // const targetRef = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: targetRef,
  //   offset: ["start end", "end start"] // Trigger when element enters/leaves viewport
  // });
  // const y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]); // Moves up by 50% of its height

  return (
    <motion.div
      className={`vertical-parallax-text-container ${className}`}
      // ref={targetRef} // If using target-based scrollYProgress
      style={{ y }} // Apply the vertical transform
    >
      {children}
    </motion.div>
  );
}