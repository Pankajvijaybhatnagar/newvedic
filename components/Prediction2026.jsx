'use client';
import { FiCalendar, FiTrendingUp, FiHeart, FiDollarSign } from 'react-icons/fi';
import { GiBriefcase } from 'react-icons/gi';

const Prediction2026 = () => {
  const predictions = [
    {
      icon: <GiBriefcase className="text-4xl" />,
      title: "Career Growth",
      description: "Discover career opportunities and professional advancement in 2026",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <FiHeart className="text-4xl" />,
      title: "Love & Relationships",
      description: "Find out what's in store for your romantic life this year",
      color: "from-pink-500 to-red-500"
    },
    {
      icon: <FiDollarSign className="text-4xl" />,
      title: "Financial Forecast",
      description: "Get insights on wealth accumulation and financial stability",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <FiTrendingUp className="text-4xl" />,
      title: "Personal Growth",
      description: "Understand your spiritual journey and self-development path",
      color: "from-purple-500 to-indigo-600"
    }
  ];

  return (
    <section id="predictions" className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-5 py-2 rounded-full mb-4 shadow-md">
            <FiCalendar className="text-lg" />
            <span className="font-semibold text-sm">Year 2026 Predictions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">How Will Be Your 2026?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get comprehensive predictions for all aspects of your life in 2026 based on Vedic astrology and planetary positions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {predictions.map((pred, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${pred.color} opacity-90 group-hover:opacity-100 transition-opacity`}></div>
              <div className="relative p-8 text-white h-full flex flex-col">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {pred.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{pred.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed">{pred.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl relative overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-400 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Get Your Personalized 2026 Report</h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-95">
              Receive a detailed 50+ page report covering all aspects of your life for the year 2026
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-4xl mx-auto">
              <input 
                type="text" 
                placeholder="Enter your name" 
                className="px-6 py-4 rounded-full w-full sm:w-64 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/50 shadow-lg"
              />
              <input 
                type="date" 
                placeholder="Birth Date" 
                className="px-6 py-4 rounded-full w-full sm:w-64 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/50 shadow-lg"
              />
              <button className="bg-white text-indigo-700 px-8 py-4 rounded-full font-bold hover:bg-yellow-200 hover:text-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl w-full sm:w-auto whitespace-nowrap">
                Get Report Now - ₹999
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-yellow-300 text-xl">✓</span>
                <span>50+ Pages Detailed Analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-300 text-xl">✓</span>
                <span>Personalized Remedies</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-300 text-xl">✓</span>
                <span>Instant Digital Delivery</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-12 grid md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-100">
            <div className="text-3xl font-bold text-indigo-600 mb-2">2026</div>
            <div className="text-sm text-gray-600">Complete Year Coverage</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-100">
            <div className="text-3xl font-bold text-purple-600 mb-2">12</div>
            <div className="text-sm text-gray-600">Months Analysis</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-100">
            <div className="text-3xl font-bold text-pink-600 mb-2">50+</div>
            <div className="text-sm text-gray-600">Report Pages</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-100">
            <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
            <div className="text-sm text-gray-600">Personalized</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prediction2026;
