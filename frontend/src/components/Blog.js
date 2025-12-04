import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Calendar, Tag, ArrowRight } from 'lucide-react';

const Blog = () => {
  const { t } = useLanguage();

  return (
    <section id="blog" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('blog.title')}
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6" />
          <p className="text-gray-400 text-xl">{t('blog.subtitle')}</p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t('blog.articles').map((article, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-500 hover:transform hover:scale-105"
            >
              {/* Category Badge */}
              <div className="p-6 pb-0">
                <div className="flex items-center space-x-2 mb-4">
                  <Tag className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-[#D4AF37] text-xs font-semibold uppercase tracking-wider">
                    {article.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors duration-300 line-clamp-2">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Date */}
                <div className="flex items-center space-x-2 text-gray-500 text-xs mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>

                {/* Read More Link */}
                <button className="group/btn flex items-center space-x-2 text-[#D4AF37] hover:text-[#C5A028] transition-colors duration-300 text-sm font-semibold mb-6">
                  <span>{t('blog.readMore')}</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
