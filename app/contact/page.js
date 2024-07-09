import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="relative bg-[#748D9] text-white py-16 pt-32">
        {/* Added padding to top to avoid overlap with Navbar */}
        <div className="absolute inset-0 bg-black opacity-30"></div> {/* Dark overlay */}
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        </div>
        <div className="relative z-10 flex flex-col items-center mx-4 md:mx-16">
          <div className="bg-[#124E66] text-gray-800 p-8 rounded-lg shadow-lg w-full md:w-1/2 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">Contact Information</h2>
            <div className="flex items-center mb-4">
              <i className="fas fa-phone-alt mr-2 text-[#ef2d5e]"></i>
              <div>
                <p className='text-white'>+230 4899090</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <i className="fas fa-envelope mr-2 text-[#ef2d5e]"></i>
              <p className='text-white'>info@supremeAlchem.com</p>
            </div>
            <div className="flex items-center mb-4">
              <i className="fas fa-clock mr-2 text-[#ef2d5e]"></i>
              <p className='text-white'>Monday - Friday: 9.00am to 5.00pm</p>
            </div>
            <div className="flex items-center mb-4">
              <i className="fas fa-map-marker-alt mr-2 text-[#ef2d5e]"></i>
              <p className='text-white'>57 Cybercity Fourth Floor, Ebene Mews, Mauritius</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 text-gray-800 text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">Office Location</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3626.906192332079!2d55.44997837501304!3d25.39148282853232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f5c6e5b27ad1%3A0x65b4d0c29b3b3b09!2sAjman%20Free%20Zone!5e0!3m2!1sen!2s!4v1689876543210!5m2!1sen!2s"
              width="100%"
              height="300"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
        
      </div>
      <Footer />
    </>
  );
};

export default Contact;
