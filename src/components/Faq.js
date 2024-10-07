import React, { useState } from 'react';
import FaqImage from '../assets/Qu.jpg';

const faqs = [
  {
    question: "What types of cleaning services do you provide?",
    answer: "We offer a comprehensive range of janitorial and specialized cleaning services for all types and sizes of complexes, including office buildings, retail spaces, industrial facilities, and residential properties."
  },
  {
    question: "What makes your cleaning services stand out?",
    answer: "Our commitment to excellence, sustainability, and community engagement sets us apart. We use innovative cleaning solutions and eco-friendly practices to ensure a healthy and pristine environment."
  },
  {
    question: "Do you use eco-friendly cleaning products?",
    answer: "Yes, we prioritize the use of eco-friendly cleaning products and practices to minimize our environmental impact and ensure the safety of our clients and their surroundings."
  },
  {
    question: "Can I schedule regular cleaning services?",
    answer: "Absolutely! We offer flexible scheduling options to meet your needs, whether you require daily, weekly, or monthly cleaning services."
  },
  {
    question: "What is your approach to customer satisfaction?",
    answer: "Customer satisfaction is at the core of our mission. We adopt a customer-centric approach, ensuring high standards of quality and continuous improvement in our services."
  }
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 container-fluid">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-6">
        <div className="flex flex-col justify-center items-center gap-x-16 gap-y-5 xl:gap-28 lg:flex-row lg:justify-between max-lg:max-w-2xl mx-auto max-w-full">
          <div className="w-full lg:w-1/2">
            <img src={FaqImage} alt="FAQ section" className="w-full rounded-xl" />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-xl">
              <div className="mb-6 lg:mb-16">
                <h6 className="text-2xl text-center font-bold mb-2 lg:text-left text-cyan-800 tracking-loose animate-jump-in animate-delay-1000 animate-once">FAQs</h6>
                <h2 className="text-4xl text-center font-normal text-yellow-500 leading-[3.25rem] mb-5 lg:text-left">Looking for answers?</h2>
              </div>
              <div className="accordion-group">
                {faqs.map((faq, index) => (
                  <div key={index} className={`accordion pb-8 border-b border-solid border-gray-200 ${activeIndex === index ? 'active' : ''}`}>
                    <button
                      className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-600 w-full transition duration-500 hover:text-cyan-600"
                      onClick={() => toggleAccordion(index)}
                    >
                      <h5>{faq.question}</h5>
                      <svg
                        className={`text-gray-900 transition duration-500 group-hover:text-cyan-600 tracking-wide sm:text-1xl ${activeIndex === index ? 'rotate-180' : ''}`}
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </button>
                    <div className={`accordion-content w-full px-0 overflow-hidden pr-4 ${activeIndex === index ? 'active' : ''}`} style={{ maxHeight: activeIndex === index ? '100px' : '0', transition: 'max-height 0.3s ease' }}>
                      <p className="text-base font-normal text-yellow-600 tracking-wide mt-2 text-justify">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
