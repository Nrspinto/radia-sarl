import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('testimonials.title')}
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6" />
          <p className="text-gray-400 text-xl">{t('testimonials.subtitle')}</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t('testimonials.items').slice(0, 3).map((testimonial, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-900/50 to-black/50 p-8 rounded-2xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-500 hover:transform hover:scale-105"
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/20 transition-colors duration-300">
                <Quote className="w-6 h-6 text-[#D4AF37]" />
              </div>

              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-full flex items-center justify-center">
                  <span className="text-[#D4AF37] font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Testimonials (Mobile: Show as list) */}
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          {t('testimonials.items').slice(3).map((testimonial, index) => (
            <div
              key={index + 3}
              className="group bg-gradient-to-br from-gray-900/50 to-black/50 p-8 rounded-2xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-500 hover:transform hover:scale-105"
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/20 transition-colors duration-300">
                <Quote className="w-6 h-6 text-[#D4AF37]" />
              </div>

              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-full flex items-center justify-center">
                  <span className="text-[#D4AF37] font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
