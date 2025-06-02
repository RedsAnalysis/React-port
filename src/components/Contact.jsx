import React, { useState } from 'react'; // Added useState
import { motion, AnimatePresence } from 'framer-motion'; // For modal animation
import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button"; // Assuming Button.jsx is correctly handling onClick
import { FaEnvelope, FaLinkedin, FaPhone, FaCopy, FaCheckCircle } from 'react-icons/fa'; // Icons

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} alt="" /> {/* Added alt attribute */}
  </div>
);

// Contact Info - configure this with your details
const contactDetails = [
  {
    id: 'email',
    label: 'Email',
    value: 'arambhumireddy@gmail.com', 
    icon: <FaEnvelope className="mr-2" />,
    href: 'mailto:arambhumireddy@gmail.com' 
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'https://www.linkedin.com/in/redtheanalyst/', 
    icon: <FaLinkedin className="mr-2" />,
    href: 'https://www.linkedin.com/in/redtheanalyst/'
  },
  {
    id: 'phone',
    label: 'Phone',
    value: '+1 (850) 300-0181', 
    icon: <FaPhone className="mr-2" />,
    href: 'tel:+18503000181' 
  }
];

// Framer Motion variants for modal
const modalBackdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.15 } }
};
const modalContentVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 30, duration: 0.3 } },
  exit: { opacity: 0, y: 20, scale: 0.95, transition: { duration: 0.2 } }
};

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copiedItemId, setCopiedItemId] = useState(null); // To show "Copied!" message

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setCopiedItemId(null); // Reset copied status when modal closes
  };

  const handleCopyToClipboard = (text, itemId) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopiedItemId(itemId);
        setTimeout(() => setCopiedItemId(null), 2000); // Hide "Copied!" after 2 seconds
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
        // You could add a more user-friendly error message here
      });
  };

  return (
    <>
      <div id="contact" className="my-20 min-h-96 w-screen px-4 md:px-10"> {/* Added responsive padding */}
        <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
          {/* Decorative Image Boxes */}
          <div className="absolute -left-10 top-0 hidden h-auto w-60 overflow-hidden sm:block md:-left-20 md:w-72 lg:left-10 lg:w-96"> {/* Adjusted positions */}
            <ImageClipBox
              src="/img/contact-1.png"
              clipClass="contact-clip-path-1"
            />
            <ImageClipBox
              src="/img/contact-2.png"
              clipClass="contact-clip-path-2 lg:translate-y-3 translate-y-3"
            />
          </div>
          <div className="absolute -top-20 left-5 w-48 sm:top-1/2 sm:-top-32 sm:left-10 md:left-auto md:right-5 lg:top-10 lg:w-72"> {/* Adjusted positions */}
            <ImageClipBox
              src="/img/swordman.jpg"
              clipClass="sword-man-clip-path md:scale-110" // Slightly reduced scale
            />
          </div>

          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center text-center"> {/* Ensure content is above images */}
            <p className="mb-10 font-general text-[10px] uppercase tracking-wider text-gray-400"> {/* Made text slightly more visible */}
              Let's Connect
            </p>

            <AnimatedTitle
              title="let me<b> kn</b>ow what <br /> you've been <br /> <b>working</b><b> on</b>."
              containerClass="special-font !text-4xl sm:!text-5xl md:!text-[5.5rem] lg:!text-[6.2rem] w-full font-zentry !font-black !leading-[.9]" // Responsive font sizes
            />

            <Button
              title="Show Contact Info" // Changed title
              containerClass="mt-10 cursor-pointer"
              onClick={openModal} // Add onClick handler
            />
          </div>
        </div>
      </div>

      {/* Contact Info Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
            variants={modalBackdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={closeModal} // Close on overlay click
          >
            <motion.div
              className="relative w-full max-w-md rounded-xl bg-gray-800 p-6 md:p-8 shadow-2xl text-blue-50"
              variants={modalContentVariants}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors text-2xl"
                aria-label="Close contact info"
              >
                ×
              </button>
              <h2 className="text-2xl md:text-3xl font-zentry text-yellow-300 mb-6 text-center">Contact Me</h2>
              <div className="space-y-5">
                {contactDetails.map((item) => (
                  item.value && ( // Only render if value exists
                    <div key={item.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center mb-2 sm:mb-0">
                        {item.icon}
                        <span className="font-semibold mr-2">{item.label}:</span>
                        {item.href ? (
                           <a href={item.href} target={item.id === 'linkedin' ? '_blank' : undefined} rel={item.id === 'linkedin' ? 'noopener noreferrer' : undefined} className="hover:text-yellow-300 transition-colors break-all">{item.value}</a>
                        ) : (
                          <span className="break-all">{item.value}</span>
                        )}
                      </div>
                      <button
                        onClick={() => handleCopyToClipboard(item.href || item.value, item.id)}
                        className={`ml-0 sm:ml-auto mt-1 sm:mt-0 px-3 py-1.5 text-xs rounded-md transition-all duration-150 ease-in-out flex items-center focus:outline-none focus:ring-2 focus:ring-yellow-400 whitespace-nowrap
                                      ${copiedItemId === item.id 
                                        ? 'bg-green-500 text-white' 
                                        : 'bg-gray-700 hover:bg-gray-600 text-gray-300'}`}
                        aria-label={`Copy ${item.label}`}
                      >
                        {copiedItemId === item.id ? (
                          <>
                            <FaCheckCircle className="mr-1.5" /> Copied!
                          </>
                        ) : (
                          <>
                            <FaCopy className="mr-1.5" /> Copy
                          </>
                        )}
                      </button>
                    </div>
                  )
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Contact;