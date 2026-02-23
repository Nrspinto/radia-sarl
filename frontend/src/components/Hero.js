import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Sparkles } from 'lucide-react';
import { siteImages } from '../config/images';

const Hero = () => {
  const { t } = useLanguage();

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={siteImages.hero}
          alt="Luxury Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center space-x-2 px-6 py-2 rounded-full bg-[#D4AF37]/10 backdrop-blur-sm border border-[#D4AF37]/30">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-[#D4AF37] text-sm font-medium uppercase tracking-wider">Excellence & Innovation</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="text-white block mb-2">{t('hero.title')}</span>
        </h1>

        <p className="text-[#D4AF37] text-xl md:text-2xl font-semibold mb-4 tracking-wide">
          {t('hero.subtitle')}
        </p>

        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
          {t('hero.description')}
        </p>

        <button
          onClick={scrollToPortfolio}
          className="group inline-flex items-center space-x-3 px-8 py-4 bg-[#D4AF37] text-black font-semibold rounded-lg hover:bg-[#C5A028] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#D4AF37]/50"
        >
          <span className="text-lg">{t('hero.cta')}</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#D4AF37] rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-[#D4AF37] rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
