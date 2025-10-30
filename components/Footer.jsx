'use client';
import Link from 'next/link';
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { GiCrystalBall } from 'react-icons/gi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GiCrystalBall className="text-3xl text-primary-500" />
              <span className="text-2xl font-bold">Astro Jyotish</span>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Your trusted guide to Vedic astrology, providing accurate predictions and spiritual guidance for over a decade.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-primary-500 transition">
                <FiFacebook className="text-2xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition">
                <FiTwitter className="text-2xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition">
                <FiInstagram className="text-2xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition">
                <FiYoutube className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
              <li><Link href="#horoscope" className="text-gray-400 hover:text-white transition">Daily Horoscope</Link></li>
              <li><Link href="#kundali" className="text-gray-400 hover:text-white transition">Kundali</Link></li>
              <li><Link href="#predictions" className="text-gray-400 hover:text-white transition">Predictions</Link></li>
              <li><Link href="#gemstones" className="text-gray-400 hover:text-white transition">Gemstones</Link></li>
              <li><Link href="#learn" className="text-gray-400 hover:text-white transition">Learn Jyotish</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-400">Our Services</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white transition">Phone Consultation</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition">Video Consultation</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition">Chat Consultation</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition">Palmistry</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition">Tarot Reading</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition">Match Making</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-400">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400">
                <FiMapPin className="text-primary-500 mt-1 flex-shrink-0" />
                <span>123 Astrology Street, Jyotish Nagar, New Delhi - 110001</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FiPhone className="text-primary-500 flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FiMail className="text-primary-500 flex-shrink-0" />
                <a href="mailto:info@astrojyotish.com" className="hover:text-white transition">info@astrojyotish.com</a>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="font-semibold mb-2">Subscribe to Newsletter</h4>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 px-4 py-2 rounded-lg bg-dark-800 border border-gray-700 focus:outline-none focus:border-primary-500 transition"
                />
                <button className="bg-primary-600 px-4 py-2 rounded-lg font-semibold hover:bg-primary-700 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Astro Jyotish. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition">Terms of Service</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition">Refund Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
