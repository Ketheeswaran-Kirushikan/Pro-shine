import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/ps.png'; // Your logo

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsNavOpen(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-cyan-600 text-xs dark:bg-neutral-800 md:py-0 lg:py-0 xl:py-0 py-3">
      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center justify-between">
          <a className="flex-none text-xs font-semibold text-white focus:outline-none focus:opacity-80" href="#hero" aria-label="Brand">
            <img src={logo} alt="logo" className="w-fit h-14 p-1 mr-10" />
          </a>
          <div className="sm:hidden">
            <button
              type="button"
              onClick={toggleNav}
              className="relative flex justify-center items-center gap-x-2 rounded-lg text-white" // Ensure text is white for visibility
              aria-expanded={isNavOpen ? 'true' : 'false'}
              aria-controls="hs-navbar-example"
              aria-label="Toggle navigation"
            >
              <svg className={`${isNavOpen ? 'hidden' : 'block'} w-6 h-6`} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
              <svg className={`${isNavOpen ? 'block' : 'hidden'} w-6 h-6`} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile and desktop nav links */}
        <div id="hs-navbar-example" className={`${isNavOpen ? 'block' : 'hidden'} hs-collapse transition-all duration-300 basis-full grow sm:block z-40`}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-5 mt-5 sm:mt-0">
            <a className="text-white text-xs font-medium hover:text-gray-200 transition duration-300 py-2" href="#hero">
              Home
            </a>
            <a className="text-white text-xs font-medium hover:text-gray-200 transition duration-300 py-2" href="#about">
              About
            </a>
            <a className="text-white text-xs font-medium hover:text-gray-200 transition duration-300 py-2" href="#services">
              Services
            </a>
            <a className="text-white text-xs font-medium hover:text-gray-200 transition duration-300 py-2" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
