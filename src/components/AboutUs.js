import React from 'react';
import about1 from '../assets/about1.jpg';
import about2 from '../assets/about2.jpg';
import about3 from '../assets/about3.jpg';
import Faq from './Faq'

const AboutUs = () => {
  return (
    <div className="bg-white sm:px-6">
      <h1 className="text-3xl md:text-5xl p-2 text-cyan-800 tracking-loose text-center mb-6 sm:mb-10 animate-jump-in animate-delay-1000 animate-once">About Us</h1>
      <section className="text-white md:mt-10 sm:mt-0">
        <div className="container-fluid flex flex-col md:flex-row items-center lg:space-x-20">
          <div className="flex flex-col w-full lg:w-2/3 justify-center items-center md:items-start p-4 order-2 md:order-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl leading-relaxed md:leading-snug mb-2 text-emerald-950 animate-fade-up">
              Experiences on cleaning area with successful projects ongoing.
            </h2>
            <p className="text-sm md:text-base text-cyan-500 mb-4 animate-fade-up">
              We provide janitorial and specialized cleaning services for all types and sizes of complexes.
            </p>
            <a href="#" className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
              Explore Now
            </a>
          </div>
          <div className="mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-6 lg:w-3/3 justify-between order-1 md:order-2 hidden sm:block">
            <div className="flex flex-wrap justify-between">
              <div className="w-1/3 flex justify-center hidden sm:block p-4 mt-10">
                <img className="w-full h-60 object-cover rounded-full " src={about1} alt="About 1" />
              </div>
              <div className="w-1/3 flex justify-center hidden sm:block p-4">
                <img className="w-full h-80 object-cover rounded-full" src={about2} alt="About 2" />
              </div>
              <div className="mt-30 w-1/3 flex justify-center hidden sm:block p-4">
                <img className="w-full h-60 object-cover rounded-full" src={about3} alt="About 3" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-justify">
          <div className="bg-cyan-100 p-8 rounded-sm shadow-md transition transform duration-200 hover:shadow-xl hover:scale-105 hover:bg-cyan-500">
            <h3 className="text-2xl font-semibold text-gray-900 text-center">Our Vision</h3>
            <p className="mt-4 text-gray-700">
              To be the leading provider of comprehensive cleaning services, known for our commitment to excellence, sustainability, and community enhancement.
            </p>
            <ul className="mt-4 text-gray-700 list-disc list-inside">
              <li>Innovative cleaning solutions</li>
              <li>Eco-friendly practices</li>
              <li>Community engagement</li>
            </ul>
          </div>
          <div className="bg-yellow-100 p-8 rounded-sm shadow-md transition transform duration-200 hover:shadow-xl hover:scale-105 hover:bg-yellow-400">
            <h3 className="text-2xl font-semibold text-gray-900 text-center">Our Mission</h3>
            <p className="mt-4 text-gray-700">
              To deliver unparalleled cleaning services through dedicated teamwork, cutting-edge techniques, and a focus on customer satisfaction, ensuring healthy and pristine environments.
            </p>
            <ul className="mt-4 text-gray-700 list-disc list-inside">
              <li>Customer-centric approach</li>
              <li>High standards of quality</li>
              <li>Continuous improvement</li>
            </ul>
          </div>
          <div className="bg-cyan-100 p-8 rounded-sm shadow-md transition transform duration-200 hover:shadow-xl hover:scale-105 hover:bg-cyan-500">
            <h3 className="text-2xl font-semibold text-gray-900 text-center">Our Goal</h3>
            <p className="mt-4 text-gray-700">
              To set the standard in the cleaning industry by fostering innovation, delivering exceptional service, and building long-lasting relationships with our clients and community.
            </p>
            <ul className="mt-4 text-gray-700 list-disc list-inside">
              <li>Excellence in service</li>
              <li>Client satisfaction</li>
              <li>Industry leadership</li>
            </ul>
          </div>
        </div>
      </div>
      <Faq/>
    </div>
  );
};

export default AboutUs;
