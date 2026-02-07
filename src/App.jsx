import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Desserts from "./components/Desserts";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="w-full bg-[#1f1f1f] min-h-screen font-sans">
      <Navbar />
      <Hero />
      
      {/* Centered content for menu & desserts */}
      <div className="max-w-6xl mx-auto px-4">
        <Menu />
        <Desserts />
      </div>
      
      <Contact />
      <Footer />
    </div>
  );
}
