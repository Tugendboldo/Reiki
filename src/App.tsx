import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Heart, Sparkles, Menu, X, Star, User, Calendar } from 'lucide-react';
import { BioenergetischeMassage, Reiki, Kristalltherapie, Fortbildungskurse, MakrameeWorkshops } from './components/ServicePages';
import { LanguageSelector } from './components/LanguageSelector';
import { LeafletMap } from './components/LeafletMap';
import { useLanguage } from './hooks/useLanguage';
import { translations } from './data/translations';

type CurrentPage = 'home' | 'bioenergetische-massage' | 'reiki' | 'kristalltherapie' | 'fortbildungskurse' | 'makramee-workshops';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<CurrentPage>('home');
  const { currentLanguage, changeLanguage } = useLanguage();
  
  const t = translations[currentLanguage];

  const services = [
    {
      title: t.serviceDetails.bioenergetischeMassage.title,
      subtitle: t.serviceDetails.bioenergetischeMassage.subtitle,
      description: t.serviceDetails.bioenergetischeMassage.description1,
      page: 'bioenergetische-massage' as CurrentPage
    },
    {
      title: t.serviceDetails.reiki.title,
      subtitle: t.serviceDetails.reiki.subtitle, 
      description: t.serviceDetails.reiki.description1,
      page: 'reiki' as CurrentPage
    },
    {
      title: t.serviceDetails.kristalltherapie.title,
      subtitle: t.serviceDetails.kristalltherapie.subtitle,
      description: t.serviceDetails.kristalltherapie.description1,
      page: 'kristalltherapie' as CurrentPage
    },
    {
      title: t.serviceDetails.fortbildungskurse.title,
      subtitle: t.serviceDetails.fortbildungskurse.subtitle,
      description: t.serviceDetails.fortbildungskurse.description1,
      page: 'fortbildungskurse' as CurrentPage
    },
    {
      title: t.serviceDetails.makrameeWorkshops.title,
      subtitle: t.serviceDetails.makrameeWorkshops.subtitle,
      description: t.serviceDetails.makrameeWorkshops.description1,
      page: 'makramee-workshops' as CurrentPage
    }
  ];

  const handleServiceClick = (page: CurrentPage) => {
    setCurrentPage(page);
    // Scroll to top when entering a service page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    // Wait for the page to render, then scroll to services section
    setTimeout(() => {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Scroll to top when component mounts or page changes
  useEffect(() => {
    if (currentPage !== 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentPage]);

  // Render service pages
  if (currentPage === 'bioenergetische-massage') {
    return <BioenergetischeMassage onBack={handleBackToHome} currentLanguage={currentLanguage} />;
  }
  if (currentPage === 'reiki') {
    return <Reiki onBack={handleBackToHome} currentLanguage={currentLanguage} />;
  }
  if (currentPage === 'kristalltherapie') {
    return <Kristalltherapie onBack={handleBackToHome} currentLanguage={currentLanguage} />;
  }
  if (currentPage === 'fortbildungskurse') {
    return <Fortbildungskurse onBack={handleBackToHome} currentLanguage={currentLanguage} />;
  }
  if (currentPage === 'makramee-workshops') {
    return <MakrameeWorkshops onBack={handleBackToHome} currentLanguage={currentLanguage} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/Logo.JPG" 
                alt="Erika Natural Healing Logo" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Erika Natural Healing
                </h1>
                <p className="text-sm text-gray-600">Reiki Master & Wellness</p>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors">{t.nav.home}</a>
              <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">{t.nav.about}</a>
              <a href="#services" className="text-gray-700 hover:text-purple-600 transition-colors">{t.nav.services}</a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">{t.nav.contact}</a>
              <LanguageSelector 
                address="Musterstraße 123, 12345 Musterstadt, Deutschland"
                onLanguageChange={changeLanguage} 
              />
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <a href="#home" className="block py-2 text-gray-700 hover:text-purple-600">{t.nav.home}</a>
              <a href="#about" className="block py-2 text-gray-700 hover:text-purple-600">{t.nav.about}</a>
              <a href="#services" className="block py-2 text-gray-700 hover:text-purple-600">{t.nav.services}</a>
              <a href="#contact" className="block py-2 text-gray-700 hover:text-purple-600">{t.nav.contact}</a>
              <div className="py-2">
                <LanguageSelector 
                  currentLanguage={currentLanguage} 
                  onLanguageChange={changeLanguage} 
                />
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/photo_2025-11-26_14-50-57.jpg" 
            alt="Peaceful mountain lake surrounded by nature" 
            className="w-full h-full object-cover"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/70 via-pink-900/60 to-white/80"></div>
        </div>
        
        {/* Content */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="relative z-10 inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
              <Sparkles className="w-4 h-4" />
              <span>{t.hero.badge}</span>
            </div>
            <h1 className="relative z-10 text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              {t.hero.title}
              <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">{t.hero.titleHighlight}</span>
            </h1>
            <p className="relative z-10 text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="relative z-10 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-xl backdrop-blur-sm">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>{t.hero.bookAppointment}</span>
                </div>
              </button>
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="relative z-10 border-2 border-white/80 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 hover:border-white transition-all duration-300 backdrop-blur-sm shadow-lg"
              >
                {t.hero.discoverServices}
              </button>
            </div>
          </div>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="relative z-10 text-center p-6 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t.features.holisticHealing.title}</h3>
              <p className="text-gray-600">{t.features.holisticHealing.description}</p>
            </div>
            
            <div className="relative z-10 text-center p-6 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t.features.crystalReiki.title}</h3>
              <p className="text-gray-600">{t.features.crystalReiki.description}</p>
            </div>
            
            <div className="relative z-10 text-center p-6 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t.features.personalCare.title}</h3>
              <p className="text-gray-600">{t.features.personalCare.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <User className="w-4 h-4" />
                <span>{t.about.badge}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t.about.title}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{t.about.titleHighlight}</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {t.about.description1}
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {t.about.description2}
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{t.about.certifiedTraining}</h4>
                    <p className="text-sm text-gray-600">{t.about.reikiMasterCert}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{t.about.experience}</h4>
                    <p className="text-sm text-gray-600">{t.about.holisticHealing}</p>
                  </div>
                </div>
              </div>
              
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                {t.about.bookPersonalAppointment}
              </button>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <img 
                    src="/Logo.JPG" 
                    alt="Erika Natural Healing Logo" 
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
                  />
                  <p className="text-gray-700 font-medium">Erika</p>
                  <p className="text-gray-600">{t.about.certifiedReikiMaster}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>{t.services.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t.services.title}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{t.services.titleHighlight}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.services.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
                   onClick={() => handleServiceClick(service.page)}>
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    {service.subtitle && (
                      <p className="text-purple-600 font-medium">{service.subtitle}</p>
                    )}
                  </div>
                  <img 
                    src="/Logo.JPG" 
                    alt="Service Icon" 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                  {t.services.learnMore}
                </button>
              </div>
            ))}
          </div>

          {/* Special Packages */}
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{t.services.personalConsultation}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                <h4 className="text-xl font-bold text-gray-900 mb-3">{t.services.personalAppointments}</h4>
                <p className="text-gray-600 mb-4">{t.services.personalAppointmentsDesc}</p>
                <p className="text-sm text-gray-500">{t.services.personalAppointmentsNote}</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                <h4 className="text-xl font-bold text-gray-900 mb-3">{t.services.flexiblePackages}</h4>
                <p className="text-gray-600 mb-4">{t.services.flexiblePackagesDesc}</p>
                <p className="text-sm text-gray-500">{t.services.flexiblePackagesNote}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Phone className="w-4 h-4" />
              <span>{t.contact.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t.contact.title}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{t.contact.titleHighlight}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.contact.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-white rounded-3xl p-6 shadow-sm mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Find Us</h3>
                <LeafletMap 
                  address="Musterstraße 123, 12345 Musterstadt, Deutschland"
                  className="h-64"
                />
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t.contact.phone}</h3>
                  <p className="text-gray-600 mb-2">{t.contact.phoneDesc}</p>
                  <a href="tel:+491609946957" className="text-purple-600 font-semibold hover:text-purple-700 transition-colors">
                    +49 160 99463957
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t.contact.location}</h3>
                  <p className="text-gray-600 mb-2">{t.contact.locationDesc}</p>
                  <div className="text-gray-700">
                    {t.contact.address.map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t.contact.hours}</h3>
                  <p className="text-gray-600 mb-2">{t.contact.hoursDesc}</p>
                  <div className="text-gray-700 space-y-1">
                    {t.contact.schedule.map((time, index) => (
                      <p key={index}>{time}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t.contact.bookAppointment}</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.name}</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder={t.contact.namePlaceholder}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.telephone}</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder={t.contact.telephonePlaceholder}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.desiredTreatment}</label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                    {t.contact.treatmentOptions.map((option, index) => (
                      <option key={index}>{option}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.message}</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder={t.contact.messagePlaceholder}
                  ></textarea>
                </div>
                
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  {t.contact.sendInquiry}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/Logo.JPG" 
                  alt="Erika Natural Healing Logo" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold">Erika Natural Healing</h3>
                  <p className="text-gray-400 text-sm">Reiki Master & Wellness</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                {t.footer.description}
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">{t.footer.services}</h4>
              <ul className="space-y-2 text-gray-400">
                {t.footer.servicesList.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">{t.footer.contact}</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+49 160 99463957</span>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 mt-1" />
                  <div>
                    {t.contact.address.map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              {t.footer.copyright}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;