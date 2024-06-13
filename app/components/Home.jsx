import React from 'react';

const Home = () => {
  return (
    <div>
      <header className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/bg1.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
        <div className="container mx-auto h-full flex flex-col justify-center items-center text-center relative z-10 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold">Your Trusted Trading Partner</h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl text-white">Meeting Your Diverse Needs</p>
          
        </div>
      </header>
    </div>
  );
};

export default Home;
