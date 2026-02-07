export default function Navbar() {
  return (
    <nav className="w-full bg-gradient-to-r from-orange-600 to-yellow-400 text-white px-6 py-4 shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wider">NS Food Catering</h1>
        <a
          href="#contact"
          className="bg-white text-orange-600 px-5 py-2 rounded-full font-semibold shadow-md hover:bg-yellow-50 transition"
        >
          Order Now
        </a>
      </div>
    </nav>
  );
}
