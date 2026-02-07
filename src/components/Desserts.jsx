export default function Desserts() {
  const desserts = ["Biscuit Pudding", "Watalappan", "Caramel Pudding", "Jar Cake"];

  return (
    <section className="py-20">
      <h3 className="text-3xl font-bold text-center text-white mb-12">Dessert Menu</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {desserts.map((item) => (
          <div
            key={item}
            className="bg-[#2a2a2a] border border-gray-700 rounded-3xl py-6 text-center text-gray-200 shadow-lg transform hover:scale-105 transition"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
