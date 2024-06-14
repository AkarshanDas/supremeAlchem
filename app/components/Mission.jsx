import React from 'react';
import Image from 'next/image'; // Import next/image

const Mission = () => {
  return (
    <div className="bg-[#124E66] p-8 min-h-screen"> {/* Changed h-screen to min-h-screen */}
      <style>
        {`
          .mission-card {
            transition: all 0.3s ease;
          }

          .mission-card:hover {
            transform: scale(1.1);
            z-index: 1;
          }

          .mission-card:not(:hover) {
            transform: scale(0.95);
          }
        `}
      </style>
      <div className="max-w-6xl mx-auto  ">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">MISSIONS VALUES AND VISIONS</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="mission-card bg-[#D3D9D4] rounded-lg shadow-lg p-6 mt-12">
            <div className="rounded-t-lg relative w-full h-48">
              <Image
                src="/mission.jpg"
                alt="Steps to starting a business"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <h2 className="text-xl md:text-2xl text-center font-semibold mt-4">Our Mission</h2>
            <p className="mt-2 text-gray-600">
              Our mission is to excel as a global leader in ethanol, chemicals, solvents, and food trading. We're dedicated to delivering top-tier products, upholding integrity, sustainability, and social responsibility.
            </p>
          </div>
          <div className="mission-card bg-[#D3D9D4] rounded-lg shadow-lg p-6 mt-12">
            <div className="rounded-t-lg relative w-full h-48">
              <Image
                src="/values.jpg"
                alt="Start-Up Success"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <h2 className="text-xl md:text-2xl text-center font-semibold mt-4">Our Values</h2>
            <p className="mt-2 text-gray-600">
              At Supreme Alchem, we aim to lead in ethanol, chemical, and food trading. Our vision is to set industry standards for excellence and sustainability, guided by client needs and expert professionals.
            </p>
          </div>
          <div className="mission-card bg-[#D3D9D4] rounded-lg shadow-lg p-6 mt-12">
            <div className="rounded-t-lg relative w-full h-48">
              <Image
                src="/vision.jpg"
                alt="Make Extra Money"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <h2 className="text-xl md:text-2xl text-center font-semibold mt-4">Our Vision</h2>
            <p className="mt-2 text-gray-600">
              We prioritize ethics, honesty, and teamwork in our approach. ♦ Our focus is on quality, efficiency, and competitiveness. ♦ We aim to satisfy customers, stakeholders, and partners.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
