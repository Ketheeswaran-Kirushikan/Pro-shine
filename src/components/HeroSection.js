import React, { useState } from 'react';

const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const services = [
    'Janitorial Service',
    'Property Maintenance',
    'Constructions',
  ];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredServices = services.filter((service) =>
    service.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <section className="relative">
        <div
          id="hero-section"
          className="w-full h-screen flex items-center justify-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-cover bg-center bg-hero-pattern"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#fb923c] to-blue-500 opacity-65"></div>
          <div id="hero-content" className="relative max-w-3xl text-center px-4">
            <h1 className="text-shadow text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white animate-jump-in animate-delay-1000 animate-once tracking-wider font-medium">
              Proshine Building <span className='text-cyan-200'>Services</span> Inc
            </h1>
            <form className="max-w-lg mx-auto mt-10">
              <div className="relative">
                <input
                  type="search"
                  id="search-dropdown"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setTimeout(() => setIsFocused(false), 200)} // Delay to allow click selection
                  className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-blue-50 rounded-lg border-gray-300 focus:outline-none opacity-80"
                  placeholder="Search services..."
                  required
                />
                <button
                  type="submit"
                  className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-cyan-600 rounded-r-lg hover:bg-cyan-800 focus:outline-none"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 19l-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span className="sr-only">Search</span>
                </button>
                {/* Display filtered services */}
                {isFocused && searchTerm && filteredServices.length > 0 && (
                  <ul className="absolute w-full bg-white shadow-lg border border-gray-300 mt-1 max-h-40 overflow-y-auto z-10 rounded-b-lg">
                    {filteredServices.map((service, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 text-xs text-gray-700 cursor-pointer hover:bg-blue-50"
                        onClick={() => {
                          setSearchTerm(service);
                          setIsFocused(false); // Hide dropdown after selection
                        }}
                      >
                        {service}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </form>
            <p className="text-shadow text-cyan-800 mt-5 font-semibold animate-fade-up animate-delay-500 animate-once tracking-wider">
              Get Amazing & Commercial Services
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
