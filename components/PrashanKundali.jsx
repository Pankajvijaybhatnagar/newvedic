'use client';
import { GiCrystalBall, GiMagicLamp, GiSpellBook } from 'react-icons/gi';
import { FiHelpCircle } from 'react-icons/fi';

const PrashanKundali = () => {
  const features = [
    {
      icon: <FiHelpCircle className="text-5xl" />,
      title: "Ask Any Question",
      description: "Get answers to specific questions about your life, career, relationships, or any concern"
    },
    {
      icon: <GiMagicLamp className="text-5xl" />,
      title: "Instant Results",
      description: "Receive immediate insights based on the time of your query using Prashan methodology"
    },
    {
      icon: <GiSpellBook className="text-5xl" />,
      title: "Ancient Wisdom",
      description: "Solutions based on thousands of years old Vedic astrology techniques"
    }
  ];

  return (
    <section id="kundali" className="py-16 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <GiCrystalBall className="text-7xl text-cyan-400 animate-pulse drop-shadow-2xl" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Prashan Kundali
          </h2>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Get instant astrological answers to your burning questions through the ancient art of Prashan Jyotish
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20 group"
            >
              <div className="text-cyan-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-center">{feature.title}</h3>
              <p className="text-white/80 text-center leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-2 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Ask Your Question Now
          </h3>
          <p className="text-center text-white/70 mb-6 text-sm">
            Your question will be answered based on the exact time of submission
          </p>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="px-6 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent focus:bg-white/30 transition"
              />
              <input 
                type="date" 
                placeholder="Date of Birth" 
                className="px-6 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent focus:bg-white/30 transition"
              />
            </div>
            <textarea 
              rows={4}
              placeholder="Write your question here... (Be specific for accurate predictions)" 
              className="w-full px-6 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent focus:bg-white/30 transition resize-none"
            ></textarea>
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <p className="text-xs text-white/70 mb-2">
                💡 <strong className="text-white">Pro Tip:</strong> Ask specific, focused questions for better accuracy
              </p>
              <p className="text-xs text-white/60">
                Examples: "Will I get the job I interviewed for?", "Should I invest in this business?"
              </p>
            </div>
            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-cyan-600 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-purple-500/50"
            >
              Get Your Answer - ₹499
            </button>
            <p className="text-center text-xs text-white/60">
              ⚡ Instant delivery • 🔒 100% confidential • ✓ Expert astrologers
            </p>
          </form>
        </div>

        {/* Additional Trust Elements */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
            <div className="text-2xl font-bold text-cyan-400">10,000+</div>
            <div className="text-xs text-white/70">Questions Answered</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
            <div className="text-2xl font-bold text-purple-400">98%</div>
            <div className="text-xs text-white/70">Accuracy Rate</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
            <div className="text-2xl font-bold text-pink-400">24/7</div>
            <div className="text-xs text-white/70">Available</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
            <div className="text-2xl font-bold text-cyan-400">5 Min</div>
            <div className="text-xs text-white/70">Avg Response Time</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default PrashanKundali;
