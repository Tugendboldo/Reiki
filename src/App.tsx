import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Heart, Sparkles, Menu, X, Star, User, Calendar, Activity, Compass, Award, BookOpen, Shield, Quote } from 'lucide-react';
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
    <div className="font-serif min-h-screen text-stone-800 bg-stone-50">
      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur border-b border-stone-200">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-5 h-16">
          <button onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })} className="flex items-center gap-3">
            <img 
              src="/photo_2025-11-26_18-12-23.jpg" 
              alt="Erika Natural Healing Logo" 
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="hidden sm:block text-sm font-medium tracking-wide text-stone-700">
              Erika Natural Healing
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm text-stone-600 hover:text-teal-700 transition-colors">{t.nav.home}</a>
            <a href="#about" className="text-sm text-stone-600 hover:text-teal-700 transition-colors">{t.nav.about}</a>
            <a href="#approach" className="text-sm text-stone-600 hover:text-teal-700 transition-colors">{t.nav.approach}</a>
            <a href="#services" className="text-sm text-stone-600 hover:text-teal-700 transition-colors">{t.nav.services}</a>
            <a href="#contact" className="text-sm text-stone-600 hover:text-teal-700 transition-colors">{t.nav.contact}</a>
            <LanguageSelector
              currentLanguage={currentLanguage}
              onLanguageChange={changeLanguage}
            />
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-stone-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-stone-200 pb-4">
            <a href="#home" className="block w-full text-left px-6 py-3 text-sm text-stone-600 hover:bg-stone-50">{t.nav.home}</a>
            <a href="#about" className="block w-full text-left px-6 py-3 text-sm text-stone-600 hover:bg-stone-50">{t.nav.about}</a>
            <a href="#approach" className="block w-full text-left px-6 py-3 text-sm text-stone-600 hover:bg-stone-50">{t.nav.approach}</a>
            <a href="#services" className="block w-full text-left px-6 py-3 text-sm text-stone-600 hover:bg-stone-50">{t.nav.services}</a>
            <a href="#contact" className="block w-full text-left px-6 py-3 text-sm text-stone-600 hover:bg-stone-50">{t.nav.contact}</a>
            <div className="px-6 pt-3">
              <LanguageSelector
                currentLanguage={currentLanguage}
                onLanguageChange={changeLanguage}
              />
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex items-center px-6 sm:px-10 lg:px-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/photo_2025-11-26_14-50-57.jpg" 
            alt="Peaceful mountain lake surrounded by nature" 
            className="w-full h-full object-cover"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/75 via-stone-900/55 to-stone-900/30"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 w-full py-20">
          <div className="text-left">
            <div className="relative z-10 inline-block px-4 py-1.5 rounded-full bg-teal-700/80 text-teal-50 text-xs tracking-widest uppercase mb-6">
              <Sparkles className="w-4 h-4 inline mr-1.5" />
              <span>{t.hero.badge}</span>
            </div>
            <h1 className="relative z-10 text-4xl md:text-6xl font-light text-white leading-tight mb-6 drop-shadow-lg">
              {t.hero.title}{' '}
              <span className="block text-teal-300 font-normal">{t.hero.titleHighlight}</span>
            </h1>
            <p className="relative z-10 text-lg md:text-xl text-stone-200 mb-8 leading-relaxed drop-shadow-md font-light">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <button className="relative z-10 px-6 py-3 bg-teal-700 hover:bg-teal-800 text-white rounded-lg text-sm tracking-wide transition-colors">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>{t.hero.bookAppointment}</span>
                </div>
              </button>
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="relative z-10 px-6 py-3 border border-white/30 hover:border-white/60 text-white rounded-lg text-sm tracking-wide transition-colors"
              >
                {t.hero.discoverServices}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Tagline */}
      <section className="pt-16 pb-6 px-6 sm:px-10 lg:px-16 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4 md:gap-8 text-center">
            <p className="text-lg md:text-xl font-medium text-teal-700">
              {t.hero.spaceToHold}
            </p>
            <p className="text-lg md:text-xl font-medium text-teal-700">
              {t.hero.timeToExplore}
            </p>
            <p className="text-lg md:text-xl font-medium text-teal-700">
              {t.hero.pathToIntegrate}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="pt-6 pb-16 px-4 sm:px-6 lg:px-8 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto mb-10 bg-white/70 backdrop-blur-sm border border-teal-100 rounded-2xl p-6 md:p-8 shadow-sm">
            <p className="text-center text-base md:text-lg text-stone-700 font-light leading-relaxed">
              {t.hero.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <button
              onClick={() => handleServiceClick('reiki')}
              className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col justify-center cursor-pointer border border-purple-100/50"
            >
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Heart className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-stone-800">{t.features.holisticHealing.title}</h3>
              <p className="text-gray-600 text-sm px-2">{t.features.holisticHealing.description}</p>
            </button>

            <button
              onClick={() => {
                const element = document.getElementById('gruppenangebote');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
              }}
              className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col justify-center cursor-pointer border border-purple-100/50"
            >
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Sparkles className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-stone-800">{t.features.crystalReiki.title}</h3>
              <p className="text-gray-600 text-sm px-2">{t.features.crystalReiki.description}</p>
            </button>

            <button
              onClick={() => handleServiceClick('fortbildungskurse')}
              className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col justify-center cursor-pointer border border-purple-100/50"
            >
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <User className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-stone-800">{t.features.personalCare.title}</h3>
              <p className="text-gray-600 text-sm px-2">{t.features.personalCare.description}</p>
            </button>

            <button
              onClick={() => handleServiceClick('bioenergetische-massage')}
              className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col justify-center cursor-pointer border border-purple-100/50"
            >
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Activity className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-stone-800">{t.features.bioenergeticMassage.title}</h3>
              <p className="text-gray-600 text-sm px-2">{t.features.bioenergeticMassage.description}</p>
            </button>
          </div>

          <p className="text-center text-lg md:text-xl text-stone-600 font-light italic leading-relaxed max-w-3xl mx-auto mt-14">
            {t.hero.featuresHeading}
          </p>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="pt-20 pb-4 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-50 via-purple-50/30 to-pink-50/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-100 to-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Compass className="w-4 h-4" />
              <span>{t.approach.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t.approach.title}
              <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">{t.approach.titleHighlight}</span>
            </h2>

            <div className="mt-8 mb-12">
              <img
                src="/erika-49 copy.jpg"
                alt="Healing hands with crystal stone"
                className="w-full max-w-2xl mx-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-8 border border-cyan-100/50">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Quote className="w-6 h-6 text-cyan-600" />
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-light text-gray-800 mb-4 leading-relaxed">
                  {t.approach.intro}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {t.approach.introDescription}
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-cyan-100/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{t.approach.philosophyTitle}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{t.approach.philosophy}</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-purple-100/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{t.approach.credentialsTitle}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{t.approach.credentials}</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm mb-8 border border-blue-100/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{t.approach.trainingTitle}</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">{t.approach.training}</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 mb-8 shadow-xl border border-purple-100/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-purple-700" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">{t.approach.principlesTitle}</h3>
            </div>
            <div className="space-y-4">
              {t.approach.principles.map((principle, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-medium text-purple-700">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{principle}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
              {t.approach.vision}
            </p>
            <div className="bg-gradient-to-r from-cyan-50 via-purple-50 to-pink-50 rounded-2xl p-8 inline-block border border-purple-200/50">
              <p className="text-lg bg-gradient-to-r from-cyan-700 via-purple-700 to-pink-700 bg-clip-text text-transparent font-medium italic">
                "{t.approach.closing}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="pt-12 pb-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm text-purple-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm mb-6">
                  <User className="w-4 h-4" />
                  <span>{t.about.badge}</span>
                </div>

                {/* Mobile - Image between badge and title */}
                <div className="mb-8 lg:hidden">
                  <img
                    src="/photo_2026-01-10_19-32-06.jpg"
                    alt="Peaceful healing moment"
                    className="w-3/4 mx-auto rounded-2xl shadow-lg"
                  />
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                  {t.about.title}
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{t.about.titleHighlight}</span>
                </h2>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-800 leading-relaxed font-light mb-6 first-letter:text-5xl first-letter:font-bold first-letter:text-purple-600 first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:mt-1">
                  {t.about.description1}
                </p>

                <div className="space-y-5">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t.about.description2}
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t.about.description3}
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t.about.description4}
                  </p>

                  <div className="bg-white/60 backdrop-blur-sm border-l-4 border-purple-400 pl-6 py-4 rounded-r-lg shadow-sm">
                    <p className="text-lg text-gray-800 leading-relaxed font-medium italic">
                      {t.about.description5}
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-200 to-pink-200 border border-purple-300/60 rounded-2xl px-6 pt-6 pb-5 shadow-md mt-2">
                    <p className="text-base md:text-lg text-purple-900 leading-relaxed font-light italic mb-5">
                      {t.about.closingText}
                    </p>
                    <p className="text-base md:text-lg text-purple-900 leading-relaxed font-medium italic">
                      {t.about.closingText2}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-block bg-teal-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-teal-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  {t.about.bookPersonalAppointment}
                </button>
              </div>
            </div>

            {/* Desktop Image - hidden on mobile */}
            <div className="hidden lg:block relative lg:sticky lg:top-24">
              <div className="relative max-w-sm mx-auto">
                <img
                  src="/photo_2026-01-10_19-32-06.jpg"
                  alt="Peaceful healing moment"
                  className="w-full rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="pt-10 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
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
              <div
                key={index}
                id={service.page === 'kristalltherapie' ? 'gruppenangebote' : undefined}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
                onClick={() => handleServiceClick(service.page)}
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    {service.subtitle && (
                      <p className="text-purple-600 font-medium">{service.subtitle}</p>
                    )}
                  </div>
                  <img
                    src="/photo_2026-01-14_18-54-36.jpg"
                    alt="Service Icon"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>

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
                    +49 177 8970969
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
                
                <button className="w-full bg-teal-700 text-white py-4 rounded-full font-semibold hover:bg-teal-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
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
                  src="/photo_2025-11-26_18-12-23.jpg" 
                  alt="Erika Natural Healing Logo" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold">Erika Natural Healing</h3>
                  <p className="text-gray-400 text-sm">{t.nav.brandSubtitle}</p>
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
                  <span>+49 177 8970969</span>
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