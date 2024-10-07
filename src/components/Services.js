import React, { useState, useRef, useEffect } from 'react';

const servicesData = [
  {
    title: 'Janitorial Services',
    image: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_2800/https://progressiveclean.com/wp-content/uploads/2019/10/5-reasons-to-hire-a-janitorial-service-for-your-office-e1572117040413.jpg', // Free image link from Unsplash
    description: 'Comprehensive janitorial services for commercial buildings. Our team ensures cleanliness with customized schedules to meet your needs.',
    price: '$250/month',
    details: 'Includes daily cleaning, floor maintenance, restroom sanitization, and waste disposal. Our flexible cleaning plans are designed to fit your operational hours, providing a safe, healthy, and clean environment for employees and customers alike.'
  },
  {
    title: 'Window Cleaning',
    image: 'https://www.pristinehousekeepers.com.au/wp-content/uploads/2023/09/how-to-clean-windows.jpeg',
    description: 'Expert window cleaning services for a spotless shine on all your building’s glass surfaces.',
    price: '$100 per session',
    details: 'Our service includes cleaning inside and outside windows with eco-friendly cleaning solutions. We clean hard-to-reach areas and ensure no streaks, spots, or smudges are left behind, helping to improve the building’s appearance and natural lighting.'
  },
  {
    title: 'Carpet Cleaning',
    image: 'https://media.angi.com/s3fs-public/carpet-cleaner-removing-dirt.jpg?impolicy=leadImage',
    description: 'High-quality carpet cleaning services that help extend carpet life and remove deep-seated dirt.',
    price: '$150 per session',
    details: 'Steam cleaning, stain removal, and deodorizing are included in the package. This service is essential for high-traffic areas and helps maintain indoor air quality by removing allergens, dirt, and dust from carpets.'
  },
  {
    title: 'Floor Maintenance',
    image: 'https://www.fairprice.com.sg/wp-content/uploads/2021/07/How-to-clean-vinyl-flooring-970x526.png',
    description: 'Professional floor stripping, waxing, and polishing services to keep your floors looking brand new.',
    price: '$200/month',
    details: 'We offer services for vinyl, tile, and hardwood floors. Our maintenance includes stripping old finishes, applying fresh coats of wax, and buffing floors to a high shine, ensuring a clean and safe surface.'
  },
  {
    title: 'Property Maintenance',
    image: 'https://www.obrienrealestate.com.au/wp-content/uploads/2021/09/property-maintenance-checklist.png',
    description: 'General property maintenance services for both interior and exterior areas of commercial buildings.',
    price: '$400/month',
    details: 'Our property maintenance covers everything from minor repairs, landscaping, HVAC maintenance, to plumbing checks. It ensures your property remains in optimal condition and helps prevent costly breakdowns.'
  },
  {
    title: 'Day Porter',
    image: 'https://octoclean.com/wp-content/uploads/2019/07/day-porter.jpg',
    description: 'Day porter services to keep your facility clean and operational during business hours.',
    price: '$300/month',
    details: 'Our day porter provides ongoing cleaning and maintenance services, ensuring common areas are tidy, restrooms are restocked, and garbage is removed. They work in real-time to keep your facility clean and presentable throughout the day.'
  },
  {
    title: 'Disposal Services',
    image: 'https://www.forgerecycling.co.uk/blog/wp-content/uploads/2020/04/bigstock-Two-Garbage-Men-Working-Togeth-344763700-2-1-1-825x510.jpg',
    description: 'Efficient disposal services for commercial waste, recycling, and hazardous materials.',
    price: '$75 per pickup',
    details: 'Our disposal service includes safe and efficient waste removal, recycling services, and handling of hazardous materials. We ensure that all waste is properly disposed of, following environmental regulations.'
  },
  {
    title: 'Construction Clean Up',
    image: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1920/https://progressiveclean.com/wp-content/uploads/2019/12/What-are-the-phases-of-post-construction-cleaning.png',
    description: 'Post-construction cleaning services to ensure a dust-free environment after construction work.',
    price: '$500 per project',
    details: 'We handle the removal of construction debris, dust, and leftover materials, preparing the site for move-in or final inspections. This service is perfect for construction sites, renovations, and remodels.'
  },
  {
    title: 'Parking Lot Maintenance',
    image: 'https://www.dirtworkscapecod.com/wp-content/uploads/2011/03/parking-lot-striping-cape-cod.jpg',
    description: 'Comprehensive parking lot maintenance services, including sweeping and minor repairs.',
    price: '$150/month',
    details: 'This service includes regular sweeping, trash removal, and minor pothole repairs, ensuring that your parking lot remains safe and well-maintained. It also helps improve the visual appeal of your business’s exterior.'
  },
  {
    title: 'Power & Steam Washing',
    image: 'https://mcagroup.ca/wp-content/uploads/2015/11/exterior-cleaning-power-washing-commercial-cleaning-aurora-ontario-1170x460.jpg',
    description: 'Power and steam washing services for buildings and sidewalks to keep them looking pristine.',
    price: '$200 per session',
    details: 'We provide power washing for exteriors, sidewalks, and parking lots. Our service removes grime, algae, and dirt buildup, making your property look fresh and inviting.'
  },
];


const Services = () => {
  const [selectedService, setSelectedService] = useState(null); // Track selected service for modal
  const modalRef = useRef(null); // Ref for the modal

  const openModal = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    if (selectedService) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedService]);

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Services</h2>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
          Making Your Building As Good As New
        </p>
      </div>
      <div className="mt-10">
        <ul className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
          {servicesData.map((service, index) => (
            <li
              key={index}
              className="bg-blue-100 p-3 rounded-lg shadow-md cursor-pointer transform transition-transform hover:scale-105 text-white"
              onClick={() => openModal(service)}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-sm font-semibold text-orange-600">{service.title}</h3>
            </li>
          ))}
        </ul>
      </div>

      {/* Modal */}
      {selectedService && (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 h-screen">
    <div 
      ref={modalRef} 
      className="bg-white p-6 rounded-lg shadow-lg w-11/12 sm:w-2/3 lg:w-2/3 h-fit flex flex-col lg:flex-row items-center lg:items-start overflow-auto scrollbar-hide"
    >
      {/* Image Section (comes first in mobile view) */}
      <div className="lg:w-1/2 md:h-96 mt-6 lg:mt-0 flex items-center justify-center order-1 lg:order-2">
        <img
          src={selectedService.image}
          alt={selectedService.title}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {/* Content Section */}
      <div className="lg:w-1/2 lg:pr-6 flex flex-col justify-between md:h-96 order-2 lg:order-1">
        <h3 className="text-base md:text-2xl font-bold text-gray-900">{selectedService.title}</h3>
        <p className="text-xs md:text-sm mt-4 text-gray-600">{selectedService.description}</p>
        <p className="text-xs md:text-sm mt-2 text-gray-500">{selectedService.details}</p>
        <p className="mt-2 text-sm md:text-lg font-semibold text-cyan-600">Price: {selectedService.price}</p>
        <a
          href="#contact"  // Placeholder for actual contact link or functionality
          className="mt-6 px-4 py-2 text-xs md:text-sm bg-cyan-600 text-white font-semibold rounded hover:bg-cyan-800 block text-center"
        >
          Contact Us
        </a>
      </div>
    </div>
  </div>
)}



    </div>
  );
};

export default Services;
