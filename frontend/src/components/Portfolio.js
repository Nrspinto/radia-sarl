import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ZoomIn } from 'lucide-react';

const Portfolio = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);

  const projectImages = [
    'https://images.unsplash.com/photo-1649083048337-4aeb6dda80bb?crop=entropy&cs=srgb&fm=jpg&q=85',
    'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?crop=entropy&cs=srgb&fm=jpg&q=85',
    'https://images.unsplash.com/photo-1614255976202-8ce52bfcb655?crop=entropy&cs=srgb&fm=jpg&q=85',
    'https://images.unsplash.com/photo-1762065442954-e7820cdc5f69?crop=entropy&cs=srgb&fm=jpg&q=85',
    'https://images.unsplash.com/photo-1762117361009-63b48aafe314?crop=entropy&cs=srgb&fm=jpg&q=85',
    'https://images.unsplash.com/photo-1758957530781-4ff54e09bee2?crop=entropy&cs=srgb&fm=jpg&q=85',
    'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?crop=entropy&cs=srgb&fm=jpg&q=85',
    'https://images.pexels.com/photos/34992780/pexels-photo-34992780.jpeg?auto=compress&cs=tinysrgb&w=800'
  ];

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('portfolio.title')}
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6" />
          <p className="text-gray-400 text-xl">{t('portfolio.subtitle')}</p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t('portfolio.projects').map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
              onClick={() => setSelectedProject(index)}
            >
              {/* Image */}
              <div className="aspect-[4/5] overflow-hidden bg-gray-900">
                <img
                  src={projectImages[index]}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-[#D4AF37] text-black text-xs font-semibold rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {project.description}
                  </p>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300">
                  <ZoomIn className="w-5 h-5 text-black" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Project Details */}
      {selectedProject !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div className="max-w-4xl w-full bg-gray-900 rounded-2xl overflow-hidden border border-[#D4AF37]/30">
            <img
              src={projectImages[selectedProject]}
              alt={t('portfolio.projects')[selectedProject].title}
              className="w-full h-96 object-cover"
            />
            <div className="p-8">
              <span className="inline-block px-3 py-1 bg-[#D4AF37] text-black text-xs font-semibold rounded-full mb-4">
                {t('portfolio.projects')[selectedProject].category}
              </span>
              <h3 className="text-3xl font-bold text-white mb-4">
                {t('portfolio.projects')[selectedProject].title}
              </h3>
              <p className="text-gray-400 text-lg">
                {t('portfolio.projects')[selectedProject].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
