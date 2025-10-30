'use client';
import { GiSpellBook, GiOpenBook, GiDiploma } from 'react-icons/gi';
import { FiUsers, FiVideo, FiAward } from 'react-icons/fi';

const LearnJyotish = () => {
  const courses = [
    {
      level: "Beginner",
      title: "Foundations of Vedic Astrology",
      duration: "6 Weeks",
      lessons: "24 Lessons",
      price: "₹4,999",
      features: [
        "Understanding Birth Charts",
        "Planets and Their Significance",
        "12 Houses Explained",
        "Basic Predictions"
      ],
      color: "from-green-500 to-emerald-600"
    },
    {
      level: "Intermediate",
      title: "Advanced Jyotish Techniques",
      duration: "12 Weeks",
      lessons: "48 Lessons",
      price: "₹9,999",
      popular: true,
      features: [
        "Dasha Systems",
        "Transit Analysis",
        "Yogas and Doshas",
        "Remedial Measures"
      ],
      color: "from-blue-500 to-indigo-600"
    },
    {
      level: "Advanced",
      title: "Professional Astrologer Program",
      duration: "24 Weeks",
      lessons: "96 Lessons",
      price: "₹19,999",
      features: [
        "Advanced Predictive Techniques",
        "Prashan Kundali Mastery",
        "Muhurta Selection",
        "Certification Included"
      ],
      color: "from-purple-500 to-pink-600"
    }
  ];

  const stats = [
    { icon: <FiUsers />, number: "10,000+", label: "Students Enrolled" },
    { icon: <FiVideo />, number: "500+", label: "Video Lessons" },
    { icon: <FiAward />, number: "5,000+", label: "Certified Graduates" },
    { icon: <GiDiploma />, number: "100+", label: "Expert Instructors" }
  ];

  return (
    <section id="learn" className="py-16 bg-gradient-to-b from-indigo-50 via-purple-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <GiSpellBook className="text-7xl text-indigo-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Learn Jyotish from the Basics</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Master the sacred science of Vedic astrology with our comprehensive courses designed for all skill levels
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl text-indigo-600 mb-2 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Courses */}
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 ${course.popular ? 'border-amber-400 transform md:scale-105' : 'border-gray-100'}`}
            >
              {course.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-4 py-1 rounded-bl-lg font-bold text-sm shadow-lg z-10">
                  ⭐ Most Popular
                </div>
              )}
              
              <div className={`h-32 bg-gradient-to-br ${course.color} flex items-center justify-center relative`}>
                <GiOpenBook className="text-6xl text-white drop-shadow-lg" />
              </div>

              <div className="p-6">
                <div className="inline-block bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full mb-3">
                  {course.level}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{course.title}</h3>
                
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4 pb-4 border-b border-gray-200">
                  <span className="flex items-center gap-1">
                    ⏱️ {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    📚 {course.lessons}
                  </span>
                </div>

                <ul className="space-y-3 mb-6">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="text-green-600 text-lg font-bold flex-shrink-0">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-gray-200 pt-4 mt-auto">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold text-gray-900">{course.price}</span>
                    <span className="text-sm text-gray-400 line-through">₹{parseInt(course.price.replace('₹', '').replace(',', '')) * 2}</span>
                    <span className="ml-auto text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">
                      50% OFF
                    </span>
                  </div>
                  <button className={`w-full bg-gradient-to-r ${course.color} text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg`}>
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-center shadow-xl">
          <p className="text-white text-lg mb-4">Not sure which course to choose?</p>
          <button className="bg-white text-indigo-700 px-8 py-3 rounded-full font-bold hover:bg-yellow-200 hover:text-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Talk to Course Advisor
          </button>
        </div>
      </div>
    </section>
  );
};

export default LearnJyotish;
