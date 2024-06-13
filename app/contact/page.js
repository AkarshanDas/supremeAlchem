import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="relative bg-[#ef2d5e] text-white py-16 pt-32"> {/* Added padding to top to avoid overlap with Navbar */}
        <div className="absolute inset-0 bg-black opacity-30"></div> {/* Dark overlay */}
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        </div>
        <div className="relative z-10 flex flex-col items-center mx-4 md:mx-16">
          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg w-full md:w-1/2 mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <div className="flex items-center mb-4">
              <i className="fas fa-phone-alt mr-2 text-[#ef2d5e]"></i>
              <div>
                <p>+971 58 958 9271</p>
                <p>+971 50 450 2110</p>
                <p>+91 9871108023</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <i className="fas fa-envelope mr-2 text-[#ef2d5e]"></i>
              <p>info@pompomglobalfze.com</p>
            </div>
            <div className="flex items-center mb-4">
              <i className="fas fa-clock mr-2 text-[#ef2d5e]"></i>
              <p>Monday - Friday: 9.00am to 5.00pm</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 text-gray-800">
            <h2 className="text-2xl font-bold mb-4">Office Location</h2>
            <iframe
              src="https://maps.google.com/maps?q=Ajman%20Free%20Zone&t=&z=13&ie=UTF8&iwloc=&output=embed"
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
        <div className="fixed bottom-10 right-10 bg-[#ef2d5e] text-white p-3 rounded-full shadow-lg cursor-pointer">
          <i className="fas fa-arrow-up"></i>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
