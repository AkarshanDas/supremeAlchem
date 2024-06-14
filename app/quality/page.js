import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Image from 'next/image'; // Import next/image

const Quality = () => {
  return (
    <div className="bg-[#748D92]">
      <Navbar />
      {/* Top section with background and pipes */}
      <div className="relative mt-16">
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold ">Quality Control</h1>
        </div>
        <div className="h-64 md:h-80 lg:h-96 relative">
          {/* Background Image */}
          <Image
            src="/bg3.jpg"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg" />
          <div className="absolute inset-0 flex justify-center items-center">
            <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold ">Quality Control</h1>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-16">
        {/* Breadcrumbs */}
        
        

        {/* Cards Section */}
        <div className="space-y-8">
          {/* Quality Control Assurance */}
          <div className="bg-[#124E66] p-8 rounded-lg shadow-lg flex flex-col md:flex-row md:items-center md:flex-row-reverse h-auto md:h-64">
            <div className="w-full md:w-1/3 h-48 md:h-full relative">
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <Image
                  src="/qc1.jpg"
                  alt="Quality Control"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 md:pr-8 flex items-center ">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-white">Quality Control Assurance at Supreme Alchem</h2>
                <p className="mt-4 text-white">
                  At Supreme Alchem, our dedication to excellence permeates every facet of our operations. Rooted in ethical business practices, we have established a strong reputation in the international market over the past eight years. We understand the vital importance of quality and continuously aim to surpass our clients' expectations.
                </p>
              </div>
            </div>
          </div>

          {/* State-of-the-Art Facilities */}
          <div className="bg-[#124E66] p-8 rounded-lg shadow-lg flex flex-col md:flex-row md:items-center h-auto md:h-64">
            <div className="w-full md:w-1/3 h-48 md:h-full relative">
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <Image
                  src="/qc3.jpg"
                  alt="State-of-the-Art Facilities"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 md:pl-8 flex items-center">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-white">State-of-the-Art Facilities</h2>
                <p className="mt-4 text-white">
                  Our state-of-the-art facilities are equipped to commence quality control from the very source. From raw material selection to final packaging, we utilize advanced technologies and industry best practices to ensure top-tier quality throughout every production stage.
                </p>
              </div>
            </div>
          </div>

          {/* Stringent Standards */}
          <div className="bg-[#124E66] p-8 rounded-lg shadow-lg flex flex-col md:flex-row md:items-center md:flex-row-reverse h-auto md:h-64">
            <div className="w-full md:w-1/3 h-48 md:h-full relative">
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <Image
                  src="/qc2.jpg"
                  alt="Stringent Standards"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 md:pr-8 flex items-center">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-white">Stringent Standards</h2>
                <p className="mt-4 text-white">
                  We maintain our commitment to delivering high-quality products, including ethanol, chemicals, solvents, and food commodities, through rigorous quality control measures. Adherence to international standards ensures that every product meets or exceeds our clients' expectations.
                </p>
              </div>
            </div>
          </div>

          {/* Comprehensive Testing Protocols */}
          <div className="bg-[#124E66] p-8 rounded-lg shadow-lg flex flex-col md:flex-row md:items-center h-auto md:h-64">
            <div className="w-full md:w-1/3 h-48 md:h-full relative">
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <Image
                  src="/qc4.jpg"
                  alt="Comprehensive Testing"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 md:pl-8 flex items-center">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-white">Comprehensive Testing Protocols</h2>
                <p className="mt-4 text-white">
                  We implement comprehensive testing protocols to maintain our supply chain's integrity. Our products undergo rigorous testing for purity, consistency, and regulatory compliance. This meticulous approach ensures our clients receive products that exceed industry benchmarks, with certificates from international agencies like SGS.
                </p>
              </div>
            </div>
          </div>

          {/* Packaging Excellence */}
          <div className="bg-[#124E66] p-8 rounded-lg shadow-lg flex flex-col md:flex-row md:items-center md:flex-row-reverse h-auto md:h-64">
            <div className="w-full md:w-1/3 h-48 md:h-full relative">
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <Image
                  src="/qc5.jpg"
                  alt="Packaging Excellence"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 md:pr-8 flex items-center">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-white">Packaging Excellence</h2>
                <p className="mt-4 text-white">
                  Understanding the importance of secure and reliable packaging, we offer a diverse range of options tailored to meet our clients' needs. Our packaging solutions include ISO tank containers, plastic drums, IBC containers, metal drums, and PP bags/drums, ensuring product quality is preserved during transportation and storage.
                </p>
              </div>
            </div>
          </div>

          {/* People-Centric Approach */}
          <div className="bg-[#124E66] p-8 rounded-lg shadow-lg flex flex-col md:flex-row md:items-center h-auto md:h-64">
            <div className="w-full md:w-1/3 h-48 md:h-full relative">
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <Image
                  src="/qc6.jpg"
                  alt="People-Centric Approach"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 md:pl-8 flex items-center">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-white">People-Centric Approach</h2>
                <p className="mt-4 text-white">
                  Central to our quality control philosophy is our recognition of the vital role our team members play. Our skilled and dedicated staff are trained to uphold the highest standards, fostering a culture where quality is ingrained in our organizational ethos. We value the trust our customers place in us as a testament to the quality we consistently deliver.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Final Statement */}
        <div className="mt-8 text-center bg-[#D3D9D4] text-black py-4 rounded-lg shadow-lg">
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
