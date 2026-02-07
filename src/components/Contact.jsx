export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-20 bg-gradient-to-r from-orange-600 to-yellow-400 text-center"
    >
      <h3 className="text-3xl font-bold text-white mb-6">Contact & Orders</h3>
      <p className="text-white mb-8 text-lg md:text-xl">
        Available for daily orders & events 🇱🇰
      </p>
      <a
        href="https://wa.me/947XXXXXXXX"
        className="inline-block bg-white text-green-600 px-8 py-4 rounded-full font-bold shadow-lg hover:bg-gray-100 transition"
      >
        Order via WhatsApp
      </a>
    </section>
  );
}
