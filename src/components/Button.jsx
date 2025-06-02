// src/components/Button.jsx
import clsx from "clsx";

const Button = ({
  id,
  title,
  rightIcon,
  leftIcon,
  containerClass,
  href,         // For URL
  target,       // For e.g., "_blank"
  rel,          // For e.g., "noopener noreferrer"
  onClick,      // For <button> or <a> onClick events
  elementType = 'button' // New prop: 'button' or 'a', defaults to 'button'
}) => {
  const commonClasses = clsx(
    "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black",
    // Example: Ensure text color contrasts with bg-violet-50. Black text on light violet is usually fine.
    // If bg-violet-50 is dark, you might need 'text-white' or similar.
    containerClass
  );

  const content = (
    <>
      {leftIcon}
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
          {title}
        </div>
        <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
          {title}
        </div>
      </span>
      {rightIcon}
    </>
  );

  // Determine if this should be a link based on presence of href OR if elementType is 'a'
  const isLink = href || elementType === 'a';

  if (isLink) {
    return (
      <a
        id={id}
        href={href || '#'} // Provide a fallback href if elementType='a' but no href given
        target={target}
        rel={rel}
        className={commonClasses}
        onClick={onClick} // onClick can be used for analytics or other JS actions on links
        // If you want to prevent default behavior for links when onClick is also present,
        // the onClick handler itself would need to call event.preventDefault()
      >
        {content}
      </a>
    );
  }

  // Default to rendering a button
  return (
    <button
      id={id}
      type="button" // Good practice to specify type for buttons
      className={commonClasses}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;