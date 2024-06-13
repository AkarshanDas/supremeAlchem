import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Image from 'next/image'; // Import next/image

const Products = () => {
  return (
    <div>
      <Navbar />
      {/* Top section with pink background and pipes */}
      <div className="bg-black relative mt-16">
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold">Products & Services</h1>
        </div>
        <div className="h-64 md:h-80 lg:h-96 relative">
          {/* Image will be here */}
          <Image
            src="/indus.jpg"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg" />
          <div className="absolute inset-0 flex justify-center items-center">
            <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold">Products & Services</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Breadcrumbs */}
        <div className="text-white text-lg mb-4">
          <span>HOME </span>
          <span className="text-white/70">→</span>
          <span> Products & Services</span>
        </div>

        {/* Cards Section */}
        <div className="space-y-8">
          {/* Ethanol & Industry Chemicals */}
          <div className="bg-[#B0C4DE] p-8 rounded-lg shadow-lg flex flex-col md:flex-row md:items-center md:flex-row-reverse h-auto md:h-64">
            <div className="w-full md:w-1/3 h-48 md:h-full relative">
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <Image
                  src="/prod1.jpg"
                  alt="Ethanol & Industry Chemicals"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 md:pr-8 flex items-center">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold">Ethanol & Industry Chemicals</h2>
                <p className="mt-4 text-gray-700">
                  We source and supply various grades of ethanol and industrial chemicals from India, Pakistan, and Brazil. Our robust distribution network ensures global reach, with a particularly strong presence in West Africa.
                </p>
              </div>
            </div>
          </div>

          {/* Solvents */}
          <div className="bg-[#B0C4DE] p-8 rounded-lg shadow-lg flex flex-col md:flex-row md:items-center h-auto md:h-64">
            <div className="w-full md:w-1/3 h-48 md:h-full relative">
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <Image
                  src="/prod2.jpg"
                  alt="Solvents"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 md:pl-8 flex items-center">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold">Solvents</h2>
                <p className="mt-4 text-gray-700">
                  Our expertise lies in sourcing a wide range of solvents for both food and industrial applications. These are procured from trusted global sources and distributed worldwide, with significant market strength in West Africa.
                </p>
              </div>
            </div>
          </div>

          {/* Food Commodities */}
          <div className="bg-[#B0C4DE] p-8 rounded-lg shadow-lg flex flex-col md:flex-row md:items-center md:flex-row-reverse h-auto md:h-64">
            <div className="w-full md:w-1/3 h-48 md:h-full relative">
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <Image
                  src="/prod3.jpg"
                  alt="Food Commodities"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 md:pr-8 flex items-center">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold">Food Commodities</h2>
                <p className="mt-4 text-gray-700">
                  We procure and supply various food commodities, including sugar, salt, and liquid glucose, from India and Brazil. Our extensive distribution network enables us to export globally, with a strong foothold in West African markets.
                </p>
              </div>
            </div>
          </div>

          {/* Consultancy Services */}
          <div className="bg-[#B0C4DE] p-8 rounded-lg shadow-lg flex flex-col md:flex-row md:items-center h-auto md:h-64">
            <div className="w-full md:w-1/3 h-48 md:h-full relative">
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <Image
                  src="/prod4.jpg"
                  alt="Consultancy Services"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 md:pl-8 flex items-center">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold">Consultancy Services</h2>
                <p className="mt-4 text-gray-700">
                  Our consultancy services support clients in establishing ethanol or chemical plants, with a special focus on the African market. We provide expert guidance to ensure the successful execution of projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
