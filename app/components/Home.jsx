import React from "react";
import Image from 'next/image'; // Import next/image

const Home = () => {
  return (
    <div className="bg-[#124E66] text-white p-4 min-h-screen flex items-center justify-center mt-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          {/* Text Section */}
          <div className="md:col-span-2 p-4 border border-gray-700 rounded-lg relative z-10 bg-[#D3D9D4] bg-opacity-90">
            <div className="mb-8 text-center md:text-left">
              <h1 className="text-3xl text-black sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              Elevate Your Business with Supreme Alchem
              </h1>
              <p className="text-md text-black sm:text-lg md:text-xl lg:text-2xl mt-4">
              Discover exceptional solutions for your industrial needs with our innovative products and services.
              </p>
              
            </div>
          </div>

          {/* Main Image */}
          <div className="relative md:col-span-1 md:row-span-2 h-full">
            <Image
              src="/h1.jpg" // Replace with your main image path
              alt="Main Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

          {/* Other Images */}
          <div className="relative md:col-span-1 md:row-span-1">
            <Image
              src="/h2.jpg" // Replace with your second image path
              alt="Second Image"
              layout="responsive"
              width={500}
              height={600}
              className="rounded-lg"
            />
          </div>
          <div className="relative md:col-span-1 md:row-span-1">
            <Image
              src="/h3.jpg" // Replace with your third image path
              alt="Third Image"
              layout="responsive"
              width={500}
              height={600}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
