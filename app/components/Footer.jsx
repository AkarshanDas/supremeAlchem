import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#D3D9D4] text-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center justify-center mb-4 mr-12">
            <img src="/logo1.png" alt="SUPREME ALCHEM" className="h-13 w-28" />
          </div>
          <div className="flex items-center justify-center mb-4 mr-10">
            <img src="/name.png" alt="Company Image" className="h-5 w-80" />
          </div>
          
        </div>
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul>
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
            <li><a href="#" className="hover:underline">Quality Controls</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Products & Services</h3>
          <ul>
            <li><a href="#" className="hover:underline">Ethanol & Industry Chemicals</a></li>
            <li><a href="#" className="hover:underline">Solvents</a></li>
            <li><a href="#" className="hover:underline">Food Commodities</a></li>
            <li><a href="#" className="hover:underline">Consultancy Services</a></li>
          </ul>
        </div>
        <div className="text-center">
          <h3 className="font-semibold mb-2">Contact Us</h3>
          <div className="flex items-center mb-2">
            <img src="/location.png" alt="Map Marker" className="h-6 w-6 mr-2" />
            <p className="mb-1">57 Cybercity Fourth Floor, Ebene Mews, Mauritius</p>
          </div>
          <div className="flex items-center mb-2">
            <img src="/mail.png" alt="Envelope" className="h-6 w-6 mr-2" />
            <p className="mb-1">corporate@supremeAlchem.com</p>
          </div>
          <div className="flex items-center mb-2">
            <img src="/contact.png" alt="Phone" className="h-6 w-6 mr-2" />
            <p className="mb-1">Telephone: +230 489909</p>
          </div>
          <div className="flex items-center mb-2">
            <p className="mb-1">Monday - Friday: 9.00am to 5.00pm</p>
          </div>
        </div>
      </div>
      <div className="relative mt-8 flex justify-end items-end">
        <a href="#top" className="p-2 bg-gray-200 rounded-full shadow-lg mb-5 mr-3">
          <img src="/arrow.png" alt="Go to top" className="w-6 h-6" />
        </a>
      </div>
      <div className="bg-[#124E66] text-white py-4">
        <div className="max-w-6xl mx-auto px-4 text-center">
          Copyright © 2024 SUPREME ALCHEM All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
