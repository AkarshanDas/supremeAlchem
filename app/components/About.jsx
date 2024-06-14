import React from 'react';

const About = () => {
  return (
    <div className="relative min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#748D92]">
      {/* Background Image */}
      <div className="relative w-full md:w-3/4 h-[50vh] md:h-[79vh] max-w-3xl ml-0 md:ml-24 mt-10 md:mt-0">
        <div className="absolute inset-0 opacity-60"></div> {/* Dark overlay */}
        {/* Replace Image component with your actual background image */}
        <img
          src="/bg2.jpg"
          alt="Background"
          className="rounded-lg object-cover w-full h-full"
        />
      </div>

      {/* Content Section */}
      <div className="absolute top-20 md:top-1/4 left-5 md:left-10 bg-[#124E66] p-4 md:p-6 rounded-lg shadow-lg max-w-2xl mt-20">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-4">About Our Company</h1>
          <p className="text-sm md:text-lg text-white mb-2 md:mb-4">
            We are a dynamic General Trading Company with expertise in Ethanol, Industrial Chemicals, Solvents, and food commodities. Our commitment to excellence drives us to meet the diverse needs of our clientele.
          </p>
        </div>
      </div>

      {/* Button Section */}
      <div className="absolute top-80 md:top-[60%] left-5 md:left-10">
        <div className="p-4 md:p-6 rounded-lg  max-w-xl">
          <a href="/about" className="px-6 py-3 bg-[#124E66] text-white text-lg font-semibold rounded hover:bg-[#3a87a5]">
            READ MORE
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
