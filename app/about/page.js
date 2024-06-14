import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-black text-white pt-20 md:pt-48 mt-14 pb-16 text-center">
        <div className="absolute inset-0 bg-cover bg-center opacity-70" style={{ backgroundImage: "url('/bg1.jpg')" }}></div>
        <div className="relative max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-4">Who We Are</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-[#124E66]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-[#D3D9D4] rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#748D92] rounded-lg shadow-lg p-8">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Welcome to</h2>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-300 mb-4">Supreme Alchem</h2>
                <p className="mb-4 text-white">
                  Supreme Alchem is a premier General Trading Company specializing in Ethanol, Industrial Chemicals, Solvents, and food commodities (Trade License No – 16684). Our commitment to excellence drives us to proactively meet diverse client needs.
                </p>
                <p className="mb-4 text-white">
                  Led by Mr. Debasish Sengupta, our founder and Managing Director with extensive experience in Ethanol, Chemical Business, and finance, we have a global presence. Beyond trading, we offer innovative consulting services and comprehensive market research solutions.
                </p>
                <p className="mb-4 text-white">
                  We provide consultancy services for Ethanol and Chemical plant setups, particularly in African markets. Our insights ensure tailored advice for successful ventures.
                </p>
                <p className="mb-4 text-white">
                  At Supreme Alchem, we ensure competitive pricing and unparalleled service in international markets. Innovation and customer satisfaction are at the core of our operations, whether dealing in Ethanol, chemicals, solvents, or food commodities.
                </p>
                <p className="text-white">
                  Explore opportunities with Supreme Alchem, where innovation meets customer satisfaction.
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="relative w-full h-80 md:w-auto md:h-auto rounded-lg overflow-hidden">
                  <img src="/lab.jpg" alt="Supreme Alchem Laboratory" className="rounded-lg" />
                </div>
                <div className="relative w-full h-80 md:w-auto md:h-auto mt-8 md:mt-20 rounded-lg overflow-hidden">
                  <img src="/indus.jpg" alt="Industrial Image" className="rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
