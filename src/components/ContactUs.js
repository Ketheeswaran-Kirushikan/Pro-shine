import React from 'react';
import backgroundImage from '../assets/map.jpg';

const ContactUs = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat min-h-screen flex py-20"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-start justify-center lg:space-x-10">
        <div className="flex flex-col w-full lg:w-1/3 space-y-4 mb-10 lg:mb-0">
          <div className="bg-cyan-100 bg-opacity-80 p-6 rounded-lg shadow-lg">
            <h3 className="text-1xl font-semibold text-gray-900 mb-4">Contact Information</h3>
            <p className="text-gray-700 mb-2">Email: <a href="mailto:info@proshineinc.com" className="text-yellow-600">info@proshineinc.com</a></p>
            <p className="text-gray-700 mb-2">Phone: <a href="tel:+14168252265" className="text-yellow-600">+141 6825 2265</a></p>
            <p className="text-gray-700">Address: 27 Wantanopa Crescent, Scarborough, ON M1H 2B2</p>
          </div>
          <div className="bg-cyan-100 bg-opacity-80 p-6 rounded-lg shadow-lg">
            <h3 className="text-1xl font-semibold text-gray-900 mb-4">Our Services</h3>
            <p className="text-gray-700">We provide a range of janitorial and specialized cleaning services for various types and sizes of complexes.</p>
          </div>
          <div className="bg-cyan-100 bg-opacity-80 p-6 rounded-lg shadow-lg">
            <h3 className="text-1xl font-semibold text-gray-900 mb-4">Eco-Friendly Products</h3>
            <p className="text-gray-700">We use eco-friendly products and practices to ensure a safe and healthy environment.</p>
          </div>
        </div>
        <div className="py-6 lg:py-8 px-6 md:px-6 bg-emerald-50 bg-opacity-60 rounded-xl shadow-lg w-full lg:w-7/12 backdrop-blur-lg">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
            Contact Us
          </h2>
          <p className="mb-6 lg:mb-8 font-light text-center text-gray-700 sm:text-base">
            Have questions about our cleaning services? Need a quote or want to schedule an appointment? Let us know!
          </p>
          <form action="#" className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                placeholder="name@example.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
                placeholder="Let us know how we can assist you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-green-500 focus:border-green-500"
                placeholder="Leave your message here..."
                required
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="py-2.5 px-5 text-sm font-medium text-white rounded-lg bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-300 focus:outline-none"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
