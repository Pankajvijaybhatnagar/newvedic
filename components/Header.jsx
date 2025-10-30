"use client";
import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX, FiPhone, FiMail } from 'react-icons/fi';
import { GiCrystalBall } from 'react-icons/gi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-purple-300 transition">
              <FiPhone /> +91 98765 43210
            </a>
            <a href="mailto:info@astrojyotish.com" className="hidden md:flex items-center gap-2 hover:text-purple-300 transition">
              <FiMail /> info@astrojyotish.com
            </a>
          </div>
          <div className="text-xs">
            <span>🌟 Free Kundali Report - Limited Time Offer!</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-white text-2xl font-bold hover:text-yellow-200 transition">
            <GiCrystalBall className="text-3xl" />
            <span>Astro Jyotish</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6 text-white font-medium">
            <li><Link href="/" className="hover:text-yellow-200 transition">Home</Link></li>
            <li><Link href="#horoscope" className="hover:text-yellow-200 transition">Horoscope</Link></li>
            <li><Link href="#kundali" className="hover:text-yellow-200 transition">Kundali</Link></li>
            <li><Link href="#predictions" className="hover:text-yellow-200 transition">Predictions</Link></li>
            <li><Link href="#gemstones" className="hover:text-yellow-200 transition">Gemstones</Link></li>
            <li><Link href="#learn" className="hover:text-yellow-200 transition">Learn Jyotish</Link></li>
            <li>
              <button className="bg-white text-indigo-600 px-6 py-2 rounded-full font-semibold hover:bg-yellow-200 hover:text-purple-700 transition shadow-lg">
                Consult Now
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
            <ul className="flex flex-col gap-3 text-gray-900 font-medium">
              <li><Link href="/" className="block py-2 hover:text-indigo-600 transition">Home</Link></li>
              <li><Link href="#horoscope" className="block py-2 hover:text-indigo-600 transition">Horoscope</Link></li>
              <li><Link href="#kundali" className="block py-2 hover:text-indigo-600 transition">Kundali</Link></li>
              <li><Link href="#predictions" className="block py-2 hover:text-indigo-600 transition">Predictions</Link></li>
              <li><Link href="#gemstones" className="block py-2 hover:text-indigo-600 transition">Gemstones</Link></li>
              <li><Link href="#learn" className="block py-2 hover:text-indigo-600 transition">Learn Jyotish</Link></li>
              <li>
                <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 transition">
                  Consult Now
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
