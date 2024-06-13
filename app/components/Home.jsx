import React from "react";
import Image from 'next/image'; // Import next/image

const Home = () => {
  return (
    <div>
      <header className="relative h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/bg1.jpg"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
        </div>

        {/* Content */}
        <div className="container mx-auto h-full flex flex-col justify-center items-center text-center relative z-10 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold">
            Your Trusted Trading Partner
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl text-white">
            Meeting Your Diverse Needs
          </p>
        </div>
      </header>
    </div>
  );
};

export default Home;
