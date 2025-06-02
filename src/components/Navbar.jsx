import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

import Button from "./Button";

const navItems = ["Home", "Projects", "Story", "About", "Contact"];

const NavBar = ({ toggleVideoPlayback }) => {
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);

  const toggleVideoIndicator = () => {
    if (toggleVideoPlayback) {
      toggleVideoPlayback();
    }
    setIsIndicatorActive((prev) => !prev);
  };

  const navContainerRef = useRef(null);
  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (!navContainerRef.current) return;

    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    if (!navContainerRef.current) return;

    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault(); // Prevent default anchor jump

    if (targetId === 'home-equivalent') { // Special case for 'Home'
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        // Calculate position, accounting for fixed navbar height if necessary
        const navbarHeight = navContainerRef.current ? navContainerRef.current.offsetHeight : 0;
        // You might want to adjust this offset based on your navbar's actual height when it's visible
        // and whether it's floating or not. For simplicity, a small fixed offset.
        const offset = 80; // Adjust this value as needed (e.g., navbar height + some padding)

        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      } else {
        console.warn(`Target element with ID "${targetId}" not found.`);
        // Fallback to hash link if element not found, though ideally it should always be found
        window.location.hash = targetId;
      }
    }
  };

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <img src="/img/logo.png" alt="logo" className="w-10" />
            <Button
              elementType="a"
              href="https://github.com/RedsAnalysis/React-port"
              target="_blank"
              rel="noopener noreferrer"
              id="project-button"
              title="Project Source"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
            />
          </div>

          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item, index) => {
                const targetId = item.toLowerCase();
                return (
                  <a
                    key={index}
                    href={`#${targetId}`} // Keep href for accessibility and fallback
                    onClick={(e) => handleSmoothScroll(e, item.toLowerCase() === 'home' ? 'home-equivalent' : targetId)}
                    className="nav-hover-btn"
                  >
                    {item}
                  </a>
                );
              })}
            </div>

            <button
              onClick={toggleVideoIndicator}
              className="ml-10 flex items-center space-x-0.5"
              aria-label="Toggle video indicator"
            >
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={clsx("indicator-line", {
                    active: isIndicatorActive,
                  })}
                  style={{ "--animation-order": bar }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;