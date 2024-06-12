import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-[#DEB0C4] text-white pt-20 md:pt-48 pb-16 text-center ">
        <div className="absolute inset-0 bg-cover bg-center opacity-70" style={{ backgroundImage: "url('/bg1.jpg')" }}></div>
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center">
            <p className="text-white"><a href="/">HOME</a> → About Us</p>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">Who We Are</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-[#4BC6CB]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-[#97E3E6] rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#D3D3D3] rounded-lg shadow-lg p-8">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Welcome to</h2>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-pink-500 mb-4">Supreme Alchem</h2>
                <p className="mb-4">
                  Welcome to Supreme Alchem, a dynamic and customer-centric enterprise. With a robust trade license (No – 16684), we are a premier General Trading Company specializing in Ethanol, Industrial Chemicals, Solvents, and food commodities. Our commitment to excellence is exemplified by our proactive approach and ability to meet the diverse needs of our clientele.
                </p>
                <p className="mb-4">
                  Under the leadership of our founder and Managing Director, Mr. Debasish Sengupta, a seasoned expert with extensive experience in Ethanol, Chemical Business, and finance, we have established a prominent presence in the global market. We are not merely traders; we are innovators and consultants, offering comprehensive market and product research solutions to our clients.
                </p>
                <p className="mb-4">
                  Beyond our core trading activities, we provide support to clients aiming to establish Ethanol or Chemical plants and industries, particularly in the African markets. Our consultancy services are based on a profound understanding of the industry, ensuring that our clients receive tailored advice for successful ventures.
                </p>
                <p className="mb-4">
                  At Supreme Alchem, we are committed to delivering exceptional results. We leverage the strength of our portfolio, expand our presence in key markets, and capitalize on the expertise of our skilled team. Whether dealing in Ethanol, chemicals, solvents, or food commodities, we serve international markets with a dedication to competitive pricing and unparalleled service.
                </p>
                <p>
                  Driven by innovation and customer satisfaction, we invite you to explore a world of opportunities with Supreme Alchem.
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img src="/lab.jpg" alt="Supreme Alchem" className="w-full md:w-auto h-auto rounded-lg" />
                <img src="/indus.jpg" alt="Second Image" className="w-full md:w-auto h-auto mt-8 md:mt-20 rounded-lg" />
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
