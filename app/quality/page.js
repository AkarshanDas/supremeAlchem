import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Quality = () => {
  return (
    <div>
      <Navbar />
      {/* Top section with background and pipes */}
      <div className="bg-[#D3D3D3] relative mt-16">
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold">Quality Control</h1>
        </div>
        <div className="h-64 md:h-80 lg:h-96 bg-cover bg-center" style={{ backgroundImage: "url('/bg3.jpg')" }}>
          {/* Background Image */}
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
          <div className="bg-[#B0C4DE] p-8 rounded-lg shadow-lg flex flex-col md:flex-row md:items-center md:flex-row-reverse h-auto md:h-64">
            <div className="w-full md:w-1/3 h-48 md:h-full">
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <img src="/qc1.jpg" alt="Quality Control" className="w-full h-full object-cover rounded-lg" />
              </div>
            </div>
            <div className="w-full md:w-2/3 md:pr-8 flex items-center">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold">Quality Control Assurance at Supreme Alchem</h2>
                <p className="mt-4 text-gray-700">
                  At Supreme Alchem, our dedication to excellence permeates every facet of our operations. Rooted in ethical business practices, we have established a strong reputation in the international market over the past eight years. We understand the vital importance of quality and continuously aim to surpass our clients' expectations.
                </p>
              </div>
            </div>
          </div>

          {/* State-of-the-Art Facilities */}
          <div className="bg-[#B0C4DE] p-8 rounded-lg shadow-lg flex flex-col md:flex-row md:items-center h-auto md:h-64">
            <div className="w-full md:w-1/3 h-48 md:h-full">
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <img src="qc3.jpg" alt="State-of-the-Art Facilities" className="w-full h-full object-cover rounded-lg" />
              </div>
            </div>
            <div className="w-full md:w-2/3 md:pl-8 flex items-center">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold">State-of-the-Art Facilities</h2>
                <p className="mt-4 text-gray-700">
                  Our state-of-the-art facilities are equipped to commence quality control from the very source. From raw material selection to final packaging, we utilize advanced technologies and industry best practices to ensure top-tier quality throughout every production stage.
                </p>
              </div>
            </div>
          </div>

          {/* Stringent Standards */}
          <div className="bg-[#B0C4DE] p-8 rounded-lg shadow-lg flex flex-col md:flex-row md:items-center md:flex-row-reverse h-auto md:h-64">
            <div className="w-full md:w-1/3 h-48 md:h-full">
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <img src="qc2.jpg" alt="Stringent Standards" className="w-full h-full object-cover rounded-lg" />
              </div>
            </div>
            <div className="w-full md:w-2/3 md:pr-8 flex items-center">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold">Stringent Standards</h2>
                <p className="mt-4 text-gray-700">
                  We maintain our commitment to delivering high-quality products, including ethanol, chemicals, solvents, and food commodities, through rigorous quality control measures. Adherence to international standards ensures that every product meets or exceeds our clients' expectations.
                </p>
              </div>
            </div>
          </div>

          {/* Comprehensive Testing Protocols */}
          <div className="bg-[#B0C4DE] p-8 rounded-lg shadow-lg flex flex-col md:flex-row md:items-center h-auto md:h-64">
            <div className="w-full md:w-1/3 h-48 md:h-full">
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <img src="/qc4.jpg" alt="Comprehensive Testing" className="w-full h-full object-cover rounded-lg" />
              </div>
            </div>
            <div className="w-full md:w-2/3 md:pl-8 flex items-center">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold">Comprehensive Testing Protocols</h2>
                <p className="mt-4 text-gray-700">
                  We implement comprehensive testing protocols to maintain our supply chain's integrity. Our products undergo rigorous testing for purity, consistency, and regulatory compliance. This meticulous approach ensures our clients receive products that exceed industry benchmarks, with certificates from international agencies like SGS.
                </p>
              </div>
            </div>
          </div>

          {/* Packaging Excellence */}
          <div className="bg-[#B0C4DE] p-8 rounded-lg shadow-lg flex flex-col md:flex-row md:items-center md:flex-row-reverse h-auto md:h-64">
            <div className="w-full md:w-1/3 h-48 md:h-full">
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <img src="qc5.jpg" alt="Packaging Excellence" className="w-full h-full object-cover rounded-lg" />
              </div>
            </div>
            <div className="w-full md:w-2/3 md:pr-8 flex items-center">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold">Packaging Excellence</h2>
                <p className="mt-4 text-gray-700">
                  Understanding the importance of secure and reliable packaging, we offer a diverse range of options tailored to meet our clients' needs. Our packaging solutions include ISO tank containers, plastic drums, IBC containers, metal drums, and PP bags/drums, ensuring product quality is preserved during transportation and storage.
                </p>
              </div>
            </div>
          </div>

          {/* People-Centric Approach */}
          <div className="bg-[#B0C4DE] p-8 rounded-lg shadow-lg flex flex-col md:flex-row md:items-center h-auto md:h-64">
            <div className="w-full md:w-1/3 h-48 md:h-full">
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <img src="qc6.jpg" alt="People-Centric Approach" className="w-full h-full object-cover rounded-lg" />
              </div>
            </div>
            <div className="w-full md:w-2/3 md:pl-8 flex items-center">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold">People-Centric Approach</h2>
                <p className="mt-4 text-gray-700">
                  Central to our quality control philosophy is our recognition of the vital role our team members play. Our skilled and dedicated staff are trained to uphold the highest standards, fostering a culture where quality is ingrained in our organizational ethos. We value the trust our customers place in us as a testament to the quality we consistently deliver.
                </p>
              </div>
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
