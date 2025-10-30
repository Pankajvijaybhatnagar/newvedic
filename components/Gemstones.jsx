'use client';
import { GiDiamondRing, GiGemChain, GiCrystalShine } from 'react-icons/gi';

const Gemstones = () => {
  const gemstones = [
    {
      name: "Ruby (Manik)",
      planet: "Sun",
      benefits: "Leadership, Confidence, Fame",
      color: "from-red-600 to-rose-800",
      image: "💎"
    },
    {
      name: "Pearl (Moti)",
      planet: "Moon",
      benefits: "Peace of Mind, Emotional Balance",
      color: "from-slate-100 to-gray-300",
      image: "⚪"
    },
    {
      name: "Red Coral (Moonga)",
      planet: "Mars",
      benefits: "Courage, Energy, Vitality",
      color: "from-orange-600 to-red-600",
      image: "🔴"
    },
    {
      name: "Emerald (Panna)",
      planet: "Mercury",
      benefits: "Intelligence, Communication, Success",
      color: "from-emerald-500 to-green-700",
      image: "💚"
    },
    {
      name: "Yellow Sapphire (Pukhraj)",
      planet: "Jupiter",
      benefits: "Wisdom, Wealth, Prosperity",
      color: "from-yellow-400 to-amber-600",
      image: "💛"
    },
    {
      name: "Diamond (Heera)",
      planet: "Venus",
      benefits: "Luxury, Beauty, Relationships",
      color: "from-blue-100 to-pink-200",
      image: "💍"
    },
    {
      name: "Blue Sapphire (Neelam)",
      planet: "Saturn",
      benefits: "Discipline, Success, Protection",
      color: "from-blue-700 to-indigo-900",
      image: "🔵"
    },
    {
      name: "Hessonite (Gomed)",
      planet: "Rahu",
      benefits: "Removes Obstacles, Success",
      color: "from-amber-700 to-orange-800",
      image: "🟠"
    },
    {
      name: "Cat's Eye (Lehsunia)",
      planet: "Ketu",
      benefits: "Spiritual Growth, Intuition",
      color: "from-lime-600 to-emerald-800",
      image: "👁️"
    }
  ];

  return (
    <section id="gemstones" className="py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <GiDiamondRing className="text-7xl text-purple-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Gemstone Recommendations</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the perfect gemstone for you based on your birth chart. Strengthen weak planets and enhance positive energies
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {gemstones.map((gem, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`h-32 bg-gradient-to-br ${gem.color} flex items-center justify-center text-6xl`}>
                {gem.image}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{gem.name}</h3>
                <p className="text-sm text-purple-600 font-semibold mb-3">Planet: {gem.planet}</p>
                <p className="text-gray-600 text-sm mb-4">{gem.benefits}</p>
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 rounded-2xl p-8 md:p-12 text-white shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <GiGemChain className="text-6xl mb-4" />
              <h3 className="text-3xl font-bold mb-4">Get Personalized Gemstone Recommendation</h3>
              <p className="text-lg mb-4 opacity-90">
                Our expert astrologers will analyze your birth chart and recommend the most beneficial gemstone for you
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <GiCrystalShine /> Detailed birth chart analysis
                </li>
                <li className="flex items-center gap-2">
                  <GiCrystalShine /> Multiple gemstone options
                </li>
                <li className="flex items-center gap-2">
                  <GiCrystalShine /> Wearing method & mantras
                </li>
                <li className="flex items-center gap-2">
                  <GiCrystalShine /> Certified gemstone sourcing
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 text-gray-900">
              <h4 className="text-2xl font-bold mb-4">Book Consultation</h4>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                />
                <textarea 
                  rows={3}
                  placeholder="Your concern or question..." 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                ></textarea>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition"
                >
                  Get Recommendation - ₹999
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gemstones;
