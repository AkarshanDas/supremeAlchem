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
          <div className="bg-[#124E66] text-gray-800 p-8 rounded-lg shadow-lg w-full md:w-1/2 mb-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Contact Information</h2>
            <div className="flex flex-col items-center mb-4">
              <div className="flex items-center justify-center mb-2">
                
                <p className='text-white font-bold text-xl'>Supreme Alchem Limited</p>
              </div>
              <div className="flex items-center justify-center">
                <img src="/location.png" alt="Map Marker" className="h-6 w-6 mr-2" />
                <p className='text-white font-bold'>
                  57 Cybercity Fourth Floor,
                  
                  Ebene Mews, Mauritius
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center mb-4">
              <img src="/mail.png" alt="Envelope" className="h-6 w-6 mr-2" />
              <p className='text-white font-bold'>Email: corporate@supremeAlchem.com</p>
            </div>
            <div className="flex items-center justify-center mb-4">
              <img src="/contact.png" alt="Phone" className="h-6 w-6 mr-2" />
              <p className='text-white font -bold'>Telephone: +230 489909</p>
            </div>
            <div className="flex items-center justify-center mb-4">
              <img src="/web.png" alt="Globe" className="h-6 w-6 mr-2" />
              <p className='text-white font-bold'>Website: www.supremealchem.com</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
