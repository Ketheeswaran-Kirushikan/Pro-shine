import React from 'react';
import crane from '../assets/download.png';
import azalis from '../assets/azelis-canada.png';

const CompanyLogos = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
          Our Premium Customers
        </h2>
        <div className="flex flex-wrap justify-center items-center space-x-8 lg:space-x-16">
          <a
            href="https://www.cranesupply.com/"
            className="flex justify-center items-center"
          >
            <img
              src={crane}
              alt="Company 1 Logo"
              className="h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 object-contain"
            />
          </a>

          <a
            href="https://explore.azelis.com/en_US/canada"
            className="flex justify-center items-center"
          >
            <img
              src={azalis}
              alt="Company 2 Logo"
              className="h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 object-contain"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;
