export default function Menu() {
  const items = ["Biriyani", "Mix Rice", "Fried Rice", "Rice & Curry", "Yellow Rice"];

  return (
    <section id="menu" className="py-20">
      <h3 className="text-3xl font-bold text-center text-white mb-12">Our Menu</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item}
            className="bg-[#2a2a2a] border border-gray-700 rounded-3xl py-6 text-center text-gray-200 shadow-lg transform hover:scale-105 transition"
          >
            {item}
          </div>
        ))}
      </div>
      <p className="text-center text-gray-400 mt-8">Pork & beef are not available</p>
    </section>
  );
}
