'use client';
import { FiActivity, FiHeart, FiBriefcase, FiHome } from 'react-icons/fi';
import { GiHeartKey, GiHealthNormal } from 'react-icons/gi';

const LifePrediction = () => {
  const areas = [
    {
      icon: <GiHealthNormal className="text-5xl" />,
      title: "Health & Wellness",
      description: "Understand health patterns and preventive measures",
      color: "bg-green-500",
      hoverColor: "hover:border-green-500"
    },
    {
      icon: <FiHeart className="text-5xl" />,
      title: "Love & Marriage",
      description: "Find your soulmate and marriage compatibility",
      color: "bg-red-500",
      hoverColor: "hover:border-red-500"
    },
    {
      icon: <FiBriefcase className="text-5xl" />,
      title: "Career & Success",
      description: "Discover your ideal career path and success timing",
      color: "bg-blue-500",
      hoverColor: "hover:border-blue-500"
    },
    {
      icon: <FiHome className="text-5xl" />,
      title: "Family & Children",
      description: "Insights about family life and progeny",
      color: "bg-purple-500",
      hoverColor: "hover:border-purple-500"
    },
    {
      icon: <FiActivity className="text-5xl" />,
      title: "Wealth & Prosperity",
      description: "Financial growth and wealth accumulation periods",
      color: "bg-yellow-500",
      hoverColor: "hover:border-yellow-500"
    },
    {
      icon: <GiHeartKey className="text-5xl" />,
      title: "Spiritual Growth",
      description: "Your spiritual journey and enlightenment path",
      color: "bg-indigo-500",
      hoverColor: "hover:border-indigo-500"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Life Prediction</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get comprehensive predictions for every aspect of your life based on your birth chart and planetary positions
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {areas.map((area, index) => (
            <div 
              key={index}
              className={`group bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-transparent ${area.hoverColor}`}
            >
              <div className={`${area.color} w-16 h-16 rounded-full flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {area.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{area.title}</h3>
              <p className="text-gray-600">{area.description}</p>
            </div>
          ))}
        </div>

        <div className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 rounded-2xl p-8 md:p-12 text-white shadow-2xl overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-indigo-500 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Get Your Complete Life Report</h3>
              <p className="text-lg mb-6 opacity-90">
                Receive a detailed analysis covering all major life events, opportunities, and challenges
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <span className="bg-indigo-600 w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0 shadow-lg">✓</span>
                  <span>100+ Pages Detailed Report</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="bg-indigo-600 w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0 shadow-lg">✓</span>
                  <span>Personalized Remedies & Solutions</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="bg-indigo-600 w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0 shadow-lg">✓</span>
                  <span>Gemstone Recommendations</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="bg-indigo-600 w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0 shadow-lg">✓</span>
                  <span>Free Consultation Included</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 shadow-2xl">
              <h4 className="text-xl font-bold mb-4 text-center">Order Your Report</h4>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="date" 
                    placeholder="Date of Birth" 
                    className="px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
                  />
                  <input 
                    type="time" 
                    placeholder="Time of Birth" 
                    className="px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
                  />
                </div>
                <input 
                  type="text" 
                  placeholder="Place of Birth" 
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
                />
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-4 rounded-lg font-bold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  Order Life Report - ₹2,499
                </button>
                <p className="text-xs text-center text-white/70">
                  🔒 Secure payment • 100% confidential
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifePrediction;
