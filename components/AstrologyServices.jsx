'use client';
import React from 'react';
import { GiCrystalBall, GiMagicPalm, GiBigDiamondRing } from 'react-icons/gi';
import { FiPhone, FiVideo, FiMessageCircle } from 'react-icons/fi';

const AstrologyServices = () => {
  const services = [
    {
      icon: <FiPhone />,
      title: "Phone Consultation",
      description: "Talk to expert astrologers",
      price: "₹21/min",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <FiVideo />,
      title: "Video Consultation",
      description: "Face-to-face guidance",
      price: "₹31/min",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <FiMessageCircle />,
      title: "Chat Consultation",
      description: "Get instant text answers",
      price: "₹11/min",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <GiMagicPalm />,
      title: "Palmistry",
      description: "Read your palm lines",
      price: "₹999",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <GiCrystalBall />,
      title: "Tarot Reading",
      description: "Discover hidden truths",
      price: "₹799",
      color: "from-pink-500 to-rose-600"
    },
    {
      icon: <GiBigDiamondRing />,
      title: "Match Making",
      description: "Find perfect compatibility",
      price: "₹1,499",
      color: "from-red-500 to-pink-500"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Astrology Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with expert astrologers through multiple consultation modes
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center text-white text-3xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-indigo-600">{service.price}</span>
                <button className={`bg-gradient-to-r ${service.color} text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 transition`}>
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-2xl p-8 text-center border border-indigo-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">First Consultation Free!</h3>
          <p className="text-lg text-gray-700 mb-6">
            Get 5 minutes free consultation with any astrologer. No credit card required.
          </p>
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition transform hover:scale-105 shadow-lg">
            Claim Your Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default AstrologyServices;
