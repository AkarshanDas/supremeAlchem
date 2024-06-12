import About from "./components/About";
import Footer from "./components/Footer";
import Homee from "./components/Home";
import Mission from "./components/Mission";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Homee />
        <About />
        <Mission />
        <Products />
      </main>
      <Footer />
    </div>
  );
}
