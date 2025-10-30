"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FiStar } from 'react-icons/fi';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai, Maharashtra",
      rating: 5,
      text: "The predictions were incredibly accurate! The astrologer helped me understand my career path and I got my dream job within 2 months.",
      service: "Career Consultation"
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi, NCR",
      rating: 5,
      text: "I was skeptical at first, but the gemstone recommendation changed my life. My business has grown exponentially since I started wearing it.",
      service: "Gemstone Consultation"
    },
    {
      name: "Anita Desai",
      location: "Bangalore, Karnataka",
      rating: 5,
      text: "The Prashan Kundali service gave me instant answers to my pressing questions. The insights were spot-on and very helpful.",
      service: "Prashan Kundali"
    },
    {
      name: "Vikram Singh",
      location: "Jaipur, Rajasthan",
      rating: 5,
      text: "Learning Jyotish from their courses was a life-changing experience. The instructors are knowledgeable and very supportive.",
      service: "Jyotish Course"
    },
    {
      name: "Meera Patel",
      location: "Ahmedabad, Gujarat",
      rating: 5,
      text: "The 2026 prediction report was detailed and eye-opening. It helped me prepare for important life decisions ahead.",
      service: "Year Prediction"
    },
    {
      name: "Amit Verma",
      location: "Pune, Maharashtra",
      rating: 5,
      text: "The life prediction report covered everything - career, health, relationships. It's like having a roadmap for my future!",
      service: "Life Prediction"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-indigo-50 via-purple-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied clients who transformed their lives with our guidance
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet !bg-gray-300',
            bulletActiveClass: 'swiper-pagination-bullet-active !bg-indigo-600',
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12 testimonial-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-lg p-6 h-full hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col">
                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} className="text-yellow-500 fill-yellow-500 text-lg" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 italic leading-relaxed flex-grow text-sm">
                  "{testimonial.text}"
                </p>
                
                {/* Author Info */}
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                  <p className="text-sm text-gray-600 mb-2">{testimonial.location}</p>
                  <div className="inline-block">
                    <span className="text-xs font-semibold text-indigo-700 bg-indigo-100 px-3 py-1 rounded-full">
                      {testimonial.service}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Statistics Section */}
        <div className="text-center mt-12">
          <div className="inline-flex flex-wrap items-center justify-center gap-8 bg-white rounded-2xl px-8 py-6 shadow-xl border border-gray-100 max-w-4xl">
            <div className="text-center min-w-[120px]">
              <div className="flex items-center justify-center gap-1 mb-1">
                <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">4.9</span>
                <span className="text-xl text-gray-400">/5</span>
              </div>
              <div className="text-xs md:text-sm text-gray-600">Average Rating</div>
              <div className="flex items-center justify-center gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="text-yellow-500 fill-yellow-500 text-xs" />
                ))}
              </div>
            </div>
            
            <div className="h-12 w-px bg-gray-300 hidden sm:block"></div>
            
            <div className="text-center min-w-[120px]">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">50,000+</div>
              <div className="text-xs md:text-sm text-gray-600">Happy Clients</div>
              <div className="text-xs text-indigo-600 font-semibold mt-1">🎉 Growing Daily</div>
            </div>
            
            <div className="h-12 w-px bg-gray-300 hidden sm:block"></div>
            
            <div className="text-center min-w-[120px]">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">98%</div>
              <div className="text-xs md:text-sm text-gray-600">Satisfaction Rate</div>
              <div className="text-xs text-green-600 font-semibold mt-1">✓ Verified Reviews</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">Ready to transform your life?</p>
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full font-bold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Start Your Journey Today
          </button>
        </div>
      </div>

      <style jsx global>{`
        .testimonial-swiper .swiper-pagination {
          bottom: 0 !important;
        }
        
        .testimonial-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          transition: all 0.3s ease;
        }
        
        .testimonial-swiper .swiper-pagination-bullet-active {
          width: 24px;
          border-radius: 5px;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
