import React from 'react';

const Products = () => {
  return (
    <div className="bg-[#D3D3D3] p-8 min-h-screen flex items-center"> {/* Adjusted height */}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-4 text-black">PRODUCTS & SERVICES</h1>
        <p className="text-black mb-8 text-center">
          The Company has a well-managed effective distribution network for the distribution of ethanol, chemicals, solvents, food commodities, and other products in key international markets.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-7">
          {/* Card 1 */}
          <div className="relative bg-gray-800 text-white rounded-lg overflow-hidden">
            <img
              src="/prod1.jpg"
              alt="Supply of Ethanol & industry Chemicals"
              className="w-full h-48 object-cover opacity-75"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-xl font-semibold text-center">Supply of Ethanol & Industry Chemicals</h2>
            </div>
            <div className="absolute inset-0 bg-[#ebe8d4] flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
              <a href="products" className="text-black font-semibold text-lg">See more</a>
            </div>
          </div>
          {/* Card 2 */}
          <div className="relative bg-gray-800 text-white rounded-lg overflow-hidden">
            <img
              src="/prod2.jpg"
              alt="Supply of Solvents"
              className="w-full h-48 object-cover opacity-75"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-xl font-semibold text-center">Supply of Solvents</h2>
            </div>
            <div className="absolute inset-0 bg-[#ebe8d4] flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
              <a href="products" className="text-black font-semibold text-lg">See more</a>
            </div>
          </div>
          {/* Card 3 */}
          <div className="relative bg-gray-800 text-white rounded-lg overflow-hidden">
            <img
              src="/prod3.jpg"
              alt="Supply of Food Commodities"
              className="w-full h-48 object-cover opacity-75"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-xl font-semibold text-center">Supply of Food Commodities</h2>
            </div>
            <div className="absolute inset-0 bg-[#ebe8d4] flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
              <a href="products" className="text-black font-semibold text-lg">See more</a>
            </div>
          </div>
          {/* Card 4 */}
          <div className="relative bg-gray-800 text-white rounded-lg overflow-hidden">
            <img
              src="/prod4.jpg"
              alt="Consultancy Services"
              className="w-full h-48 object-cover opacity-75"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-xl font-semibold text-center">Consultancy Services</h2>
            </div>
            <div className="absolute inset-0 bg-[#ebe8d4] flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
              <a href="products" className="text-black font-semibold text-lg">See more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
