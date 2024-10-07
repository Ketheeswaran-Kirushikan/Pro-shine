import React from 'react';
import { 
  FaFacebook, 
  FaInstagram, 
  FaTwitter 
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-screen-xl px-4 pt-16 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex justify-center text-teal-300 sm:justify-start">
              <span className="text-2xl font-bold text-white">ProShineInc</span>
            </div>
            <p className="max-w-md mx-auto mt-6 leading-relaxed text-center text-gray-400 sm:max-w-xs sm:mx-0 sm:text-left">
              ProShineInc is dedicated to providing top-notch cleaning services to ensure your property shines. Our professional and eco-friendly solutions cater to all your cleaning needs, whether residential or commercial.
            </p>
            <ul className="flex justify-center gap-6 mt-8 md:gap-8 sm:justify-start">
              <li>
                <a href="/" className="text-teal-500 transition hover:text-teal-500/75">
                  <FaFacebook className="h-6 w-6 text-teal-500" />
                </a>
              </li>
              <li>
                <a href="/" className="text-teal-500 transition hover:text-teal-500/75">
                  <FaInstagram className="h-6 w-6 text-teal-500" />
                </a>
              </li>
              <li>
                <a href="/" className="text-teal-500 transition hover:text-teal-500/75">
                  <FaTwitter className="h-6 w-6 text-teal-500" />
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 md:grid-cols-4">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Services</p>
              <nav className="mt-8">
                <ul className="space-y-4 text-sm">
                  <li><a className="text-white transition hover:text-white/75" href="/">Property Cleaning</a></li>
                  <li><a className="text-white transition hover:text-white/75" href="/">Domestic Cleaning</a></li>
                  <li><a className="text-white transition hover:text-white/75" href="/">Window Cleaning</a></li>
                  <li><a className="text-white transition hover:text-white/75" href="/">House Cleaning</a></li>
                  <li><a className="text-white transition hover:text-white/75" href="/">Office Cleaning</a></li>
                </ul>
              </nav>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Quick Links</p>
              <nav className="mt-8">
                <ul className="space-y-4 text-sm">
                  <li><a className="text-white transition hover:text-white/75" href="/">About Company</a></li>
                  <li><a className="text-white transition hover:text-white/75" href="/">Services</a></li>
                  <li><a className="text-white transition hover:text-white/75" href="/">About</a></li>
                  <li><a className="text-white transition hover:text-white/75" href="/">Blog</a></li>
                  <li><a className="text-white transition hover:text-white/75" href="/">Contact Us</a></li>
                </ul>
              </nav>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Contact Us</p>
              <ul className="mt-8 space-y-4 text-sm">
                <li className="text-white">27 Wantanopa Crescent, Scarborough, ON M1H 2B2</li>
                <li className="text-white"><a className="transition hover:text-white/75" href="/">Get Direction</a></li>
                <li className="text-white"><a className="transition hover:text-white/75" href="/">Get Free Estimate</a></li>
                <li className="text-white">Call: <a className="transition hover:text-white/75" href="tel:+14168252265">+141 6825 2265</a></li>
                <li className="text-white">Email: <a className="transition hover:text-white/75" href="mailto:info@proshineinc.com">info@proshineinc.com</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-6 mt-12 border-t border-gray-800">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-gray-400">
              <span className="block sm:inline">All rights reserved.</span>
              <a className="inline-block text-teal-500 underline transition hover:text-teal-500/75" href="/">Terms & Conditions</a>
              <span>&middot;</span>
              <a className="inline-block text-teal-500 underline transition hover:text-teal-500/75" href="/">Privacy Policy</a>
            </p>
            <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
              Copyright ©2023 ProShineInc. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
