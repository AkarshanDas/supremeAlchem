import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#B0C4DE] text-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <img src="/supreme.png" alt="SUPREME ALCHEM" className="w-25 h-auto mt-[-46px] pr-4 " /> {/* Adjusted margin-top to move the logo upwards */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-blue-600"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-black"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-blue-600"><i className="fab fa-skype"></i></a>
            <a href="#" className="text-blue-600"><i className="fab fa-linkedin-in"></i></a>
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
        <div>
          <h3 className="font-semibold mb-2">Contact Us</h3>
          <p>
            <strong>Add:</strong> 57 Cybercity Fourth Floor, Ebene Mews, Mauritius
          </p>
          <p>
            <i className="fas fa-phone-alt"></i> +230 4899090
          </p>
          <p>
            <i className="fas fa-envelope"></i> info@supremeAlchem.com
          </p>
          <p>
            <i className="fas fa-clock"></i> Monday - Friday: 9.00am to 5.00pm
          </p>
        </div>
      </div>
      <div className="relative mt-8 flex justify-end items-end">
        <a href="#top" className="p-2 bg-gray-200 rounded-full shadow-lg">
          <img src="/arrow.png" alt="Go to top" className="w-6 h-6" /> {/* Replace '/up-arrow.png' with your image URL */}
        </a>
      </div>
      <div className="bg-[#1b262c] text-white py-4">
        <div className="max-w-6xl mx-auto px-4 text-center">
          Copyright © 2024 SUPREME ALCHEM All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
