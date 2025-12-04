import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { key: 'home', id: 'hero' },
    { key: 'about', id: 'about' },
    { key: 'services', id: 'services' },
    { key: 'portfolio', id: 'portfolio' },
    { key: 'blog', id: 'blog' },
    { key: 'testimonials', id: 'testimonials' },
    { key: 'contact', id: 'contact' }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-[#D4AF37]/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-[#D4AF37]">RADIA</span>
              <span className="text-white ml-2">SARL</span>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              {t('footer.aboutText')}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/237XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 rounded-lg flex items-center justify-center text-[#D4AF37] transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/radiasarl"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 rounded-lg flex items-center justify-center text-[#D4AF37] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.key}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm"
                  >
                    {t(`nav.${item.key}`)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">{t('services.title')}</h3>
            <ul className="space-y-3">
              {t('services.items').slice(0, 6).map((service, index) => (
                <li key={index}>
                  <span className="text-gray-400 text-sm">{service.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">{t('contact.info.address')}</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <a href="https://wa.me/237XXXXXXXXX" className="text-gray-400 hover:text-[#D4AF37] text-sm transition-colors">
                  +237 XXX XXX XXX
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <a href="mailto:contact@radiasarldesign.cm" className="text-gray-400 hover:text-[#D4AF37] text-sm transition-colors">
                  contact@radiasarldesign.cm
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#D4AF37]/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} RADIA SARL. {t('footer.rights')}
            </p>
            <p className="text-gray-500 text-sm text-center md:text-right">
              {t('footer.tagline')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
