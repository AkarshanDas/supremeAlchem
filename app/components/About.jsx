import React from 'react';
import Image from 'next/image'; // Import next/image

const About = () => {
  return (
    <div className="relative min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#D3D3D3]">
      {/* Background Image */}
      <div className="relative w-full md:w-3/4 h-[50vh] md:h-[79vh] max-w-3xl ml-0 md:ml-24 mt-10 md:mt-0">
        <div className="absolute inset-0 opacity-60"></div> {/* Dark overlay */}
        <Image
          src="/bg2.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Content Section */}
      <div className="absolute top-20 md:top-1/4 left-5 md:left-10 bg-[#B0C4DE] p-4 md:p-6 rounded-lg shadow-lg max-w-2xl mt-20">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold text-black mb-2 md:mb-4">About Our Company</h1>
          <p className="text-sm md:text-lg text-black mb-2 md:mb-4">
            We are a dynamic General Trading Company with expertise in Ethanol, Industrial Chemicals, Solvents, and food commodities. Our commitment to excellence drives us to meet the diverse needs of our clientele.
          </p>
        </div>
      </div>

      {/* Button Section */}
      <div className="absolute top-80 md:top-[60%] left-5 md:left-10">
        <div className="p-4 md:p-6 rounded-lg shadow-lg max-w-xl">
          <a href="/about" className="px-4 md:px-6 py-2 bg-[#B0C4DE] mt-12 text-black text-sm md:text-lg font-semibold rounded hover:bg-[#9fb9d3]">
            READ MORE
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
