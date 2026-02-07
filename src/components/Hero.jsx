export default function Hero() {
  return (
    <section className="w-full text-center py-32 bg-[url('/hero-bg.jpg')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 max-w-3xl mx-auto text-white px-4">
        <h2 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
          Homemade Sri Lankan Food
        </h2>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Rice & curry, fried rice, short eats, desserts and beverages — made fresh with amma’s love ❤️
        </p>
        <a
          href="#menu"
          className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-full font-bold shadow-lg hover:bg-yellow-300 transition"
        >
          Explore Menu
        </a>
      </div>
    </section>
  );
}
