import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#B0C4DE] text-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <img src="/supreme.png" alt="POMPOM GLOBAL - F.Z.E" className="w-25 h-auto mt-[-46px] pr-4 " /> {/* Adjusted margin-top to move the logo upwards */}
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
            <strong>Add:</strong> POMPOM Global F.Z.E. Office C1 – 1F – SF1530 1st Floor, Ajman Free Zone C1 Building P.O.BOX 119582, Ajman, U.A.E
          </p>
          <p>
            <i className="fas fa-phone-alt"></i> +971 58 958 9271<br />
            <i className="fas fa-phone-alt"></i> +971 50 450 2110<br />
            <i className="fas fa-phone-alt"></i> +91 9871108023
          </p>
          <p>
            <i className="fas fa-envelope"></i> info@pompomglobalfze.com
          </p>
          <p>
            <i className="fas fa-globe"></i> www.pompomglobalfze.com
          </p>
        </div>
      </div>
      <div className="bg-[#1b262c] text-white py-4 mt-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          Copyright © 2024 POMPOM GLOBAL F.Z.E.. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
