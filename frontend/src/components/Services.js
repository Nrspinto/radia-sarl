import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Ruler, Box, Wrench, Palette, Hammer, Waves, Sofa, ClipboardCheck } from 'lucide-react';

const Services = () => {
  const { t } = useLanguage();

  const serviceIcons = [Ruler, Box, Wrench, Palette, Hammer, Waves, Sofa, ClipboardCheck];

  const serviceImages = [
    'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?crop=entropy&cs=srgb&fm=jpg&q=85',
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?crop=entropy&cs=srgb&fm=jpg&q=85',
    'https://images.unsplash.com/photo-1487958449943-2429e8be8625?crop=entropy&cs=srgb&fm=jpg&q=85',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=srgb&fm=jpg&q=85',
    'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?crop=entropy&cs=srgb&fm=jpg&q=85',
    'https://images.unsplash.com/photo-1597201278257-3687be27d954?crop=entropy&cs=srgb&fm=jpg&q=85',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=srgb&fm=jpg&q=85',
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?crop=entropy&cs=srgb&fm=jpg&q=85'
  ];

  return (
    <section id="services" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('services.title')}
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6" />
          <p className="text-gray-400 text-xl">{t('services.subtitle')}</p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t('services.items').map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-500 hover:transform hover:scale-105"
              >
                {/* Background Image */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                  <img
                    src={serviceImages[index]}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="relative p-8">
                  <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#D4AF37]/20 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
