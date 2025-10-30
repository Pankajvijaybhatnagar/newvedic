"use client";
import { GiAries, GiTaurus, GiGemini, GiCancer, GiLeo, GiVirgo, GiLibra, GiScorpio, GiSagittarius, GiCapricorn, GiAquarius, GiPisces } from 'react-icons/gi';

const DailyHoroscope = () => {
  const zodiacSigns = [
    { name: "Aries", icon: <GiAries />, color: "text-red-600", bgColor: "bg-red-50", dates: "Mar 21 - Apr 19" },
    { name: "Taurus", icon: <GiTaurus />, color: "text-green-600", bgColor: "bg-green-50", dates: "Apr 20 - May 20" },
    { name: "Gemini", icon: <GiGemini />, color: "text-yellow-600", bgColor: "bg-yellow-50", dates: "May 21 - Jun 20" },
    { name: "Cancer", icon: <GiCancer />, color: "text-slate-600", bgColor: "bg-slate-50", dates: "Jun 21 - Jul 22" },
    { name: "Leo", icon: <GiLeo />, color: "text-amber-600", bgColor: "bg-amber-50", dates: "Jul 23 - Aug 22" },
    { name: "Virgo", icon: <GiVirgo />, color: "text-emerald-700", bgColor: "bg-emerald-50", dates: "Aug 23 - Sep 22" },
    { name: "Libra", icon: <GiLibra />, color: "text-pink-600", bgColor: "bg-pink-50", dates: "Sep 23 - Oct 22" },
    { name: "Scorpio", icon: <GiScorpio />, color: "text-purple-700", bgColor: "bg-purple-50", dates: "Oct 23 - Nov 21" },
    { name: "Sagittarius", icon: <GiSagittarius />, color: "text-indigo-600", bgColor: "bg-indigo-50", dates: "Nov 22 - Dec 21" },
    { name: "Capricorn", icon: <GiCapricorn />, color: "text-stone-700", bgColor: "bg-stone-50", dates: "Dec 22 - Jan 19" },
    { name: "Aquarius", icon: <GiAquarius />, color: "text-cyan-600", bgColor: "bg-cyan-50", dates: "Jan 20 - Feb 18" },
    { name: "Pisces", icon: <GiPisces />, color: "text-teal-600", bgColor: "bg-teal-50", dates: "Feb 19 - Mar 20" }
  ];

  return (
    <section id="horoscope" className="py-16 bg-gradient-to-b from-white via-indigo-50/30 to-purple-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Daily Horoscope</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Check your daily horoscope and discover what the stars have in store for you today
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {zodiacSigns.map((sign, index) => (
            <div 
              key={index}
              className={`${sign.bgColor} rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group border border-gray-100`}
            >
              <div className={`text-6xl mb-3 ${sign.color} group-hover:scale-110 transition-transform duration-300 flex justify-center`}>
                {sign.icon}
              </div>
              <h3 className="text-xl font-bold text-center text-gray-900 mb-1">
                {sign.name}
              </h3>
              <p className="text-xs text-gray-500 text-center">
                {sign.dates}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition transform hover:scale-105 shadow-lg">
            View Detailed Horoscope
          </button>
        </div>
      </div>
    </section>
  );
};

export default DailyHoroscope;
