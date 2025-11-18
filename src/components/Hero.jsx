import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Business with
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Creative Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Expert consultation, stunning design, and powerful marketing strategies to elevate your brand to new heights.
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-purple-600 to-blue-600 cursor-pointer text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-shadow flex items-center gap-2"
            >
              Get Started <ArrowRight size={20} />
            </button>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-400 to-blue-500 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop"
                alt="Creative team working"
                className="rounded-2xl w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;