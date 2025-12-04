import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration - User will need to set up their own account
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Uncomment and configure when EmailJS is set up:
       await emailjs.send(
         'service_k4mci8s',
         'template_sg0rey1',
         formData,
         'OTVBDGFeVr5bwL8rA'
       );

      toast.success(t('contact.success'));
      setFormData({
        name: '',
        email: '',
        phone: '',
        city: '',
        service: '',
        budget: '',
        message: ''
      });
    } catch (error) {
      console.error('Error:', error);
      toast.error(t('contact.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('contact.title')}
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6" />
          <p className="text-gray-400 text-xl">{t('contact.subtitle')}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 p-8 rounded-2xl border border-[#D4AF37]/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white mb-2 text-sm font-medium">
                      {t('contact.form.name')}
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-black/50 border-[#D4AF37]/20 text-white focus:border-[#D4AF37] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2 text-sm font-medium">
                      {t('contact.form.email')}
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-black/50 border-[#D4AF37]/20 text-white focus:border-[#D4AF37] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white mb-2 text-sm font-medium">
                      {t('contact.form.phone')}
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="bg-black/50 border-[#D4AF37]/20 text-white focus:border-[#D4AF37] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2 text-sm font-medium">
                      {t('contact.form.city')}
                    </label>
                    <Select onValueChange={(value) => handleSelectChange('city', value)} required>
                      <SelectTrigger className="bg-black/50 border-[#D4AF37]/20 text-white focus:border-[#D4AF37]">
                        <SelectValue placeholder={t('contact.form.cityPlaceholder')} />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-900 border-[#D4AF37]/20">
                        {t('contact.form.cities').map((city, index) => (
                          <SelectItem key={index} value={city} className="text-white hover:bg-[#D4AF37]/20">
                            {city}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white mb-2 text-sm font-medium">
                      {t('contact.form.service')}
                    </label>
                    <Select onValueChange={(value) => handleSelectChange('service', value)} required>
                      <SelectTrigger className="bg-black/50 border-[#D4AF37]/20 text-white focus:border-[#D4AF37]">
                        <SelectValue placeholder={t('contact.form.servicePlaceholder')} />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-900 border-[#D4AF37]/20">
                        {t('contact.form.services').map((service, index) => (
                          <SelectItem key={index} value={service} className="text-white hover:bg-[#D4AF37]/20">
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-white mb-2 text-sm font-medium">
                      {t('contact.form.budget')}
                    </label>
                    <Select onValueChange={(value) => handleSelectChange('budget', value)} required>
                      <SelectTrigger className="bg-black/50 border-[#D4AF37]/20 text-white focus:border-[#D4AF37]">
                        <SelectValue placeholder={t('contact.form.budgetPlaceholder')} />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-900 border-[#D4AF37]/20">
                        {t('contact.form.budgets').map((budget, index) => (
                          <SelectItem key={index} value={budget} className="text-white hover:bg-[#D4AF37]/20">
                            {budget}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-white mb-2 text-sm font-medium">
                    {t('contact.form.message')}
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder={t('contact.form.messagePlaceholder')}
                    className="bg-black/50 border-[#D4AF37]/20 text-white focus:border-[#D4AF37] transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#D4AF37] hover:bg-[#C5A028] text-black font-semibold py-6 text-lg transition-all duration-300 transform hover:scale-105"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center space-x-2">
                      <span className="animate-spin">⏳</span>
                      <span>{t('contact.form.sending')}</span>
                    </span>
                  ) : (
                    <span className="flex items-center justify-center space-x-2">
                      <Send className="w-5 h-5" />
                      <span>{t('contact.form.submit')}</span>
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 p-8 rounded-2xl border border-[#D4AF37]/20">
              <h3 className="text-2xl font-bold text-white mb-6">{t('contact.info.title')}</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Adresse</h4>
                    <p className="text-gray-400 text-sm">{t('contact.info.address')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{t('contact.info.whatsapp')}</h4>
                    <a href="https://wa.me/237650446668" className="text-gray-400 hover:text-[#D4AF37] text-sm transition-colors">
                      +237 650 44 66 68
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <a href="mailto:radiadeco2631@gmail.com" className="text-gray-400 hover:text-[#D4AF37] text-sm transition-colors">
                      radiadeco2631@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Horaires</h4>
                    <p className="text-gray-400 text-sm">{t('contact.info.hours')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 p-8 rounded-2xl border border-[#D4AF37]/20">
              <h3 className="text-xl font-bold text-white mb-4">Réseaux Sociaux</h3>
              <div className="space-y-3">
                <a
                  href="https://wa.me/237650446668"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-400 hover:text-[#D4AF37] transition-colors group"
                >
                  <div className="w-10 h-10 bg-[#D4AF37]/10 group-hover:bg-[#D4AF37]/20 rounded-lg flex items-center justify-center transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span>WhatsApp</span>
                </a>
                <a
                  href="https://www.facebook.com/radiashop27/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-400 hover:text-[#D4AF37] transition-colors group"
                >
                  <div className="w-10 h-10 bg-[#D4AF37]/10 group-hover:bg-[#D4AF37]/20 rounded-lg flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
