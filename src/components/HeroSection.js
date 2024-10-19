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
