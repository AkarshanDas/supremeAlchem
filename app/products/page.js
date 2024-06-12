import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const products = () => {
  return (
    <div>
      <Navbar />
      {/* Top section with pink background and pipes */}
      <div className="bg-black relative mt-16">
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="text-white text-5xl font-bold">Products & Services</h1>
        </div>
        <div className="h-64 bg-cover bg-center" style={{ backgroundImage: "url('/path-to-your-pipe-image.jpg')" }}>
          {/* Image will be here */}
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        {/* Breadcrumbs */}
        <div className="text-white text-lg mb-4">
          <span>HOME </span>
          <span className="text-white/70">→</span>
          <span> Products & Services</span>
        </div>

        {/* Cards Section */}
        <div className="space-y-8">
          {/* Ethanol & Industry Chemicals */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2">
                <div className="w-full h-48 bg-gray-300 flex items-center justify-center mb-4 md:mb-0">
                  <img src="/prod1.jpg" alt="Ethanol" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="w-full md:w-1/2 md:pl-8">
                <h2 className="text-2xl font-semibold">Supply of Ethanol & Industry Chemicals</h2>
                <p className="mt-4 text-gray-700">
                  We source ethanol of all grades and industrial chemicals from India, Pakistan, and Brazil, and distribute these products globally through our extensive network. Our presence is particularly robust in West African markets.
                </p>
              </div>
            </div>
          </div>

          {/* Solvents */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 md:order-2">
                <div className="w-full h-48 bg-gray-300 flex items-center justify-center mb-4 md:mb-0">
                  <img src="/prod2.jpg" alt="Solvents" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="w-full md:w-1/2 md:pr-8">
                <h2 className="text-2xl font-semibold">Supply of Solvents</h2>
                <p className="mt-4 text-gray-700">
                  We specialize in sourcing a wide range of solvents, including those for food and industrial applications, from both India and international sources. These products are then distributed globally through our well-established distribution network. Our dominance in West African markets further solidifies our expertise and presence in the industry.
                </p>
              </div>
            </div>
          </div>

          {/* Food Commodities */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2">
                <div className="w-full h-48 bg-gray-300 flex items-center justify-center mb-4 md:mb-0">
                  <img src="/prod3.jpg" alt="Food Commodities" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="w-full md:w-1/2 md:pl-8">
                <h2 className="text-2xl font-semibold">Supply of Food Commodities</h2>
                <p className="mt-4 text-gray-700">
                  We procure a variety of food commodities, such as sugar, salt, liquid glucose, and more, primarily from India and Brazil. These products are then exported to numerous destinations worldwide via our extensive distribution network. Our exceptional strength in West African markets underscores our capability and prominence in the industry.
                </p>
              </div>
            </div>
          </div>

          {/* Consultancy Services */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 md:order-2">
                <div className="w-full h-48 bg-gray-300 flex items-center justify-center mb-4 md:mb-0">
                  <img src="/prod4.jpg" alt="Consultancy Services" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="w-full md:w-1/2 md:pr-8">
                <h2 className="text-2xl font-semibold">Consultancy Services</h2>
                <p className="mt-4 text-gray-700">
                  In addition to our primary trading endeavors, we provide comprehensive support to clients interested in establishing ethanol or chemical plants and industries, with a particular emphasis on African markets. Our consultancy services are built upon a profound understanding of the industry, guaranteeing that our clients receive personalized guidance tailored to ensure the success of their ventures.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default products;