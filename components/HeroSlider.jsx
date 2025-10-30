"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { FiStar, FiTrendingUp } from 'react-icons/fi';
import { GiCrystalBall, GiSpellBook } from 'react-icons/gi';

const HeroSlider = () => {
  const slides = [
    {
      title: "Discover Your 2026 Predictions",
      subtitle: "Get personalized insights for the coming year",
      description: "Unlock the secrets of your future with accurate Vedic astrology predictions",
      icon: <FiTrendingUp className="text-6xl" />,
      gradient: "from-purple-600 to-pink-600",
      image: "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?w=1920&q=80" // Starry night sky
    },
    {
      title: "Prashan Kundali",
      subtitle: "Ask your questions, get instant answers",
      description: "Ancient wisdom to solve your modern problems through Prashan astrology",
      icon: <GiCrystalBall className="text-6xl" />,
      gradient: "from-blue-600 to-cyan-600",
      image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&q=80" // Galaxy/cosmic
    },
    {
      title: "Learn Jyotish from Basics",
      subtitle: "Master the art of Vedic astrology",
      description: "Comprehensive courses designed for beginners to advanced learners",
      icon: <GiSpellBook className="text-6xl" />,
      gradient: "from-orange-600 to-red-600",
      image: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=1920&q=80" // Mystical aurora
    },
    {
      title: "Life Predictions & Gemstones",
      subtitle: "Transform your destiny",
      description: "Get personalized gemstone recommendations based on your birth chart",
      icon: <FiStar className="text-6xl" />,
      gradient: "from-green-600 to-teal-600",
      image: "https://images.unsplash.com/photo-1464802686167-b939a6910659?w=1920&q=80" // Milky way
    }
  ];

  return (
    <section className="relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet !bg-white/50',
          bulletActiveClass: 'swiper-pagination-bullet-active !bg-white',
        }}
        navigation={true}
        loop={true}
        className="h-[600px] lg:h-[700px] hero-slider"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${slide.image}')` }}
              />
              
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} opacity-80`} />
              
              {/* Dark Overlay for Better Text Contrast */}
              <div className="absolute inset-0 bg-black/40" />
              
              {/* Content */}
              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="container mx-auto px-4 text-center text-white">
                  <div className="mb-6 flex justify-center animate-bounce">
                    {slide.icon}
                  </div>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in drop-shadow-2xl">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl lg:text-3xl mb-3 font-semibold drop-shadow-lg">
                    {slide.subtitle}
                  </p>
                  <p className="text-base md:text-lg lg:text-xl mb-8 max-w-2xl mx-auto opacity-95 drop-shadow-md">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-white text-indigo-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-200 hover:text-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                      Get Started Now
                    </button>
                    <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-xl">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        /* Custom Swiper Navigation Styles */
        .hero-slider .swiper-button-next,
        .hero-slider .swiper-button-prev {
          color: white;
          background: rgba(255, 255, 255, 0.2);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }
        
        .hero-slider .swiper-button-next:hover,
        .hero-slider .swiper-button-prev:hover {
          background: rgba(255, 255, 255, 0.4);
          transform: scale(1.1);
        }
        
        .hero-slider .swiper-button-next::after,
        .hero-slider .swiper-button-prev::after {
          font-size: 20px;
          font-weight: bold;
        }
        
        /* Pagination Bullets */
        .hero-slider .swiper-pagination {
          bottom: 30px !important;
        }
        
        .hero-slider .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          margin: 0 6px !important;
          transition: all 0.3s ease;
        }
        
        .hero-slider .swiper-pagination-bullet-active {
          width: 30px;
          border-radius: 6px;
        }
      `}</style>
    </section>
  );
};

export default HeroSlider;
