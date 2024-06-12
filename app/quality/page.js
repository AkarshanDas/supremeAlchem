import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Quality = () => {
  return (
    <div>
      <Navbar />
      {/* Top section with pink background and pipes */}
      <div className="bg-[#D3D3D3] relative mt-16">
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold">Quality Control</h1>
        </div>
        <div className="h-64 md:h-80 lg:h-96 bg-cover bg-center" style={{ backgroundImage: "url('/bg1.jpg')" }}>
          {/* Image will be here */}
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        {/* Breadcrumbs */}
        <div className="text-white text-lg mb-4">
          <span>HOME </span>
          <span className="text-white/70">→</span>
          <span> Quality Control</span>
        </div>

        {/* Cards Section */}
        <div className="space-y-8">
          {/* Quality Control Assurance */}
          <div className="bg-[#B0C4DE] p-8 rounded-lg shadow-lg flex flex-col md:flex-row md:items-center">
            <div className="w-full md:w-1/3">
              <div className="w-full h-48 md:h-auto bg-gray-300 flex items-center justify-center">
                <img src="/qc1.jpg" alt="Image" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="w-full md:w-2/3 md:pl-8">
              <h2 className="text-xl md:text-2xl font-semibold">Quality Control Assurance at Supreme Alchem:</h2>
              <p className="mt-4 text-gray-700">
                At Supreme Alchem, our commitment to excellence permeates every aspect of our operations. Built on ethical business practices, our reputation in the international market has grown rapidly over the past 8 years. We recognize the critical role that quality plays in our success and consistently strive to exceed the expectations of our discerning clientele.
              </p>
            </div>
          </div>

          {/* State-of-the-Art Facilities */}
          <div className="bg-[#B0C4DE] p-8 rounded-lg shadow-lg flex flex-col md:flex-row md:items-center">
            <div className="w-full md:w-1/3">
              <div className="w-full h-48 md:h-auto bg-gray-300 flex items-center justify-center">
                <img src="qc3.jpg" alt="Image" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="w-full md:w-2/3 md:pl-8">
              <h2 className="text-xl md:text-2xl font-semibold">State-of-the-Art Facilities:</h2>
              <p className="mt-4 text-gray-700">
                Equipped with state-of-the-art facilities, our quality control processes commence at the source. From raw material selection to final packaging, our team employs cutting-edge technologies and industry best practices to ensure the highest quality at every stage of production.
              </p>
            </div>
          </div>

          {/* Stringent Standards */}
          <div className="bg-[#B0C4DE] p-8 rounded-lg shadow-lg flex flex-col md:flex-row md:items-center">
            <div className="w-full md:w-1/3">
              <div className="w-full h-48 md:h-auto bg-gray-300 flex items-center justify-center">
                <img src="qc2.jpg" alt="Image" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="w-full md:w-2/3 md:pl-8">
              <h2 className="text-xl md:text-2xl font-semibold">Stringent Standards:</h2>
              <p className="mt-4 text-gray-700">
                We uphold our dedication to delivering superior products, including Ethanol, Chemicals, Solvents, and food commodities, through stringent quality control measures. Adhering to international standards ensures that every product we supply meets or exceeds the expectations of our clients.
              </p>
            </div>
          </div>

          {/* Comprehensive Testing Protocols */}
          <div className="bg-[#B0C4DE] p-8 rounded-lg shadow-lg flex flex-col md:flex-row md:items-center">
            <div className="w-full md:w-1/3">
              <div className="w-full h-48 md:h-auto bg-gray-300 flex items-center justify-center">
                <img src="/qc4.jpg" alt="Image" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="w-full md:w-2/3 md:pl-8">
              <h2 className="text-xl md:text-2xl font-semibold">Comprehensive Testing Protocols:</h2>
              <p className="mt-4 text-gray-700">
                To maintain the integrity of our supply chain, we implement comprehensive testing protocols. Our products undergo rigorous testing for purity, consistency, and compliance with regulatory standards. This meticulous approach guarantees that our clients receive products that surpass industry benchmarks, with testing certificates available from international agencies like SGS.
              </p>
            </div>
          </div>

          {/* Packaging Excellence */}
          <div className="bg-[#B0C4DE] p-8 rounded-lg shadow-lg flex flex-col md:flex-row md:items-center">
            <div className="w-full md:w-1/3">
              <div className="w-full h-48 md:h-auto bg-gray-300 flex items-center justify-center">
                <img src="qc5.jpg" alt="Image" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="w-full md:w-2/3 md:pl-8">
              <h2 className="text-xl md:text-2xl font-semibold">Packaging Excellence:</h2>
              <p className="mt-4 text-gray-700">
                Acknowledging the paramount significance of secure and dependable packaging, we meticulously curate a diverse array of options tailored to meet the varied needs of our esteemed clientele. Our packaging solutions encompass an extensive range, including ISO tank containers, plastic drums, IBC containers, metal drums, and PP bags/drums. Each packaging selection is meticulously crafted to ensure the utmost preservation of product quality throughout transportation and storage, thereby reaffirming our unwavering commitment to excellence in every aspect of our operations.
              </p>
            </div>
          </div>

          {/* People-Centric Approach */}
          <div className="bg-[#B0C4DE] p-8 rounded-lg shadow-lg flex flex-col md:flex-row md:items-center">
            <div className="w-full md:w-1/3">
              <div               className="w-full h-48 md:h-auto bg-gray-300 flex items-center justify-center">
                <img src="qc6.jpg" alt="Image" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="w-full md:w-2/3 md:pl-8">
              <h2 className="text-xl md:text-2xl font-semibold">People-Centric Approach:</h2>
              <p className="mt-4 text-gray-700">
                Central to our quality control philosophy lies a profound appreciation for the pivotal role played by our personnel. Our adept and devoted team members are meticulously trained to uphold the most exacting standards, thereby fostering a culture where quality is not merely a goal but an intrinsic part of our organizational ethos. We recognize that the trust bestowed upon us by our valued customers serves as a testament to the unparalleled quality we consistently deliver.
              </p>
            </div>
          </div>
        </div>

        {/* Final Statement */}
        <div className="mt-8 text-center bg-blue-400 text-black py-4 rounded-lg shadow-lg">
          <p>
            At Supreme Alchem, quality control is more than a process; it's our unwavering commitment to excellence, defining our identity.
          </p>
          <p className="mt-2">
            We extend a cordial invitation to experience the assurance of quality imbued in each product we deliver.
          </p>
          <p className="mt-2">
            As pioneers in the industry, we persistently strive to establish new benchmarks, setting the standard for others to follow.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Quality;

