import React, { useState } from 'react';
import { Clock, Heart, Sparkles, Star, Zap, Gem, GraduationCap, Scissors, Users, Award, X } from 'lucide-react';
import { Language } from '../types/translations';
import { translations } from '../data/translations';

interface ServicePageProps {
  onBack: () => void;
  currentLanguage: Language;
}

export const BioenergetischeMassage: React.FC<ServicePageProps> = ({ onBack, currentLanguage }) => {
  const t = translations[currentLanguage].serviceDetails.bioenergetischeMassage;
  const common = translations[currentLanguage].common;
  const [showPricesModal, setShowPricesModal] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <button
          onClick={onBack}
          className="mb-8 text-teal-700 hover:text-teal-700 font-medium"
        >
          {common.backToServices}
        </button>

        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-16 h-16 bg-teal-700 rounded-full flex items-center justify-center">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-stone-900">{t.title}</h1>
              <p className="text-teal-700 font-medium">{t.subtitle}</p>
            </div>
          </div>

          <div className="mb-8 flex justify-center">
            <img
              src="/11.png"
              alt={t.title}
              className="max-w-md w-full h-auto rounded-2xl"
            />
          </div>

          <div className="mb-8">
            <div className="space-y-4">
              <p className="text-stone-700 leading-relaxed text-lg">
                {t.intro1}
              </p>
              <p className="text-stone-700 leading-relaxed text-lg">
                {t.intro2}
              </p>
              <p className="text-stone-700 leading-relaxed text-lg">
                {t.intro3}
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">{t.howItWorks}</h2>
            <div className="bg-stone-50 rounded-2xl p-6">
              <p className="text-stone-700 leading-relaxed mb-4">
                {t.howItWorksIntro}
              </p>
              <ul className="space-y-3 text-stone-700">
                {t.benefitsList.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-teal-700 font-bold text-lg">•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <p className="text-stone-700 leading-relaxed mt-4 italic">
                {t.benefitsClosing}
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">{t.usefulFor}</h2>
            <div className="bg-stone-50 rounded-2xl p-6">
              <p className="text-stone-700 leading-relaxed mb-4">
                {t.usefulForIntro}
              </p>
              <ul className="space-y-3 text-stone-700 mb-4">
                {t.usefulForList.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-teal-700 font-bold text-lg">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-stone-700 leading-relaxed italic">
                {t.usefulForClosing}
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">{t.approach}</h2>
            <div className="bg-stone-50 rounded-2xl p-6 border-2 border-stone-200">
              <p className="text-stone-800 leading-relaxed mb-4">
                {t.approachText1}
              </p>
              <p className="text-stone-800 leading-relaxed">
                {t.approachText2}
              </p>
            </div>
          </div>

          <div className="mb-8">
            <div className="bg-teal-700 rounded-2xl p-8 text-white text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Sparkles className="w-6 h-6" />
                <h3 className="text-2xl font-bold">{t.invitation}</h3>
              </div>
              <p className="text-white leading-relaxed text-lg mb-6">
                {t.invitationText}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-teal-700 px-8 py-3 rounded-full font-semibold hover:bg-teal-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  {t.bookButton}
                </button>
                <button
                  onClick={() => setShowPricesModal(true)}
                  className="bg-white text-teal-700 px-8 py-3 rounded-full font-semibold hover:bg-teal-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  {t.pricesButton}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showPricesModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={() => setShowPricesModal(false)}>
          <div className="bg-white rounded-3xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-stone-900">{t.pricesModal.title}</h2>
              <button
                onClick={() => setShowPricesModal(false)}
                className="text-stone-500 hover:text-stone-700 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-teal-700 mb-2">{t.pricesModal.individualSessions}</h3>
              <p className="text-stone-600 mb-4">{t.pricesModal.individualSessionsSubtitle}</p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-stone-200">
                      <th className="text-left py-3 px-4 font-semibold text-stone-700">{t.pricesModal.session}</th>
                      <th className="text-left py-3 px-4 font-semibold text-stone-700">{t.pricesModal.duration}</th>
                      <th className="text-left py-3 px-4 font-semibold text-stone-700">{t.pricesModal.price}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {t.pricesModal.individualPrices.map((item, index) => (
                      <tr key={index} className="border-b border-stone-200 hover:bg-teal-50 transition-colors">
                        <td className="py-3 px-4 text-stone-800">{item.name}</td>
                        <td className="py-3 px-4 text-stone-800">{item.duration}</td>
                        <td className="py-3 px-4 text-stone-800 font-semibold">{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-teal-700 mb-2">{t.pricesModal.combinedSessions}</h3>
              <p className="text-stone-600 mb-4">{t.pricesModal.combinedSessionsSubtitle}</p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-stone-200">
                      <th className="text-left py-3 px-4 font-semibold text-stone-700">{t.pricesModal.combinedSession}</th>
                      <th className="text-left py-3 px-4 font-semibold text-stone-700">{t.pricesModal.duration}</th>
                      <th className="text-left py-3 px-4 font-semibold text-stone-700">{t.pricesModal.price}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {t.pricesModal.combinedPrices.map((item, index) => (
                      <tr key={index} className="border-b border-stone-200 hover:bg-stone-50 transition-colors">
                        <td className="py-3 px-4 text-stone-800">{item.name}</td>
                        <td className="py-3 px-4 text-stone-800">{item.duration}</td>
                        <td className="py-3 px-4 text-stone-800 font-semibold">{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-stone-50 rounded-2xl p-6 border-2 border-stone-200">
              <h4 className="text-lg font-semibold text-stone-900 mb-3 flex items-center">
                <span className="mr-2">ℹ️</span>
                {t.pricesModal.importantNote}
              </h4>
              <p className="text-stone-700 leading-relaxed mb-2">{t.pricesModal.note1}</p>
              <p className="text-stone-700 leading-relaxed">{t.pricesModal.note2}</p>
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={() => setShowPricesModal(false)}
                className="bg-teal-700 text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {t.pricesModal.close}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const Reiki: React.FC<ServicePageProps> = ({ onBack, currentLanguage }) => {
  const t = translations[currentLanguage].serviceDetails.reiki;
  const common = translations[currentLanguage].common;

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <button 
          onClick={onBack}
          className="mb-8 text-teal-700 hover:text-teal-700 font-medium"
        >
          {common.backToServices}
        </button>
        
        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-16 h-16 bg-teal-700 rounded-full flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-stone-900">{t.title}</h1>
              <p className="text-teal-700 font-medium">{t.subtitle}</p>
            </div>
          </div>

          <div className="mb-8 flex justify-center">
            <img
              src="/8.png"
              alt="Reiki Session"
              className="max-w-md w-full h-auto rounded-2xl"
            />
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">{t.whatIsReiki}</h2>
            <p className="text-stone-600 leading-relaxed mb-6">
              {t.description1}
            </p>
            <p className="text-stone-600 leading-relaxed">
              {t.description2}
            </p>
          </div>

          <div className="bg-stone-50 rounded-2xl p-6 border-2 border-stone-200 mb-8">
            <h3 className="text-2xl font-bold text-stone-900 mb-6 text-center">{t.sessionTitle}</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🕊</span>
                <span className="text-stone-700 font-medium">{t.sessionDuration}</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🌿</span>
                <span className="text-stone-700 font-medium">{t.sessionContact}</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🎶</span>
                <span className="text-stone-700 font-medium">{t.sessionMusic}</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🌸</span>
                <span className="text-stone-700 font-medium">{t.sessionAroma}</span>
              </div>
            </div>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full bg-teal-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {t.sessionButton}
            </button>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">{t.reikiPrinciples}</h2>
            <div className="bg-stone-50 rounded-2xl p-6">
              <div className="space-y-4">
                <p className="text-stone-700 font-medium">{t.principlesIntro}</p>
                <ul className="space-y-3 text-stone-600">
                  {t.principles.map((principle, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-teal-700 font-bold">•</span>
                      <span>{principle}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-stone-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-stone-900 mb-4">{t.directTreatment}</h3>
              <p className="text-stone-600 mb-4">
                {t.directTreatmentDesc}
              </p>
              <p className="text-stone-600">
                {t.directTreatmentBenefits}
              </p>
            </div>
            
            <div className="bg-stone-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-stone-900 mb-4">{t.distanceTreatment}</h3>
              <p className="text-stone-600 mb-4">
                {t.distanceTreatmentDesc}
              </p>
              <ul className="text-sm text-stone-600 space-y-1">
                {t.distanceTreatmentBenefits.map((benefit, index) => (
                  <li key={index}>• {benefit}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-stone-50 rounded-2xl p-6 mb-8 border border-stone-200">
            <h3 className="text-xl font-bold mb-2 text-stone-900">{t.reikiEffects}</h3>
            {t.reikiEffectsIntro && <p className="mb-4 text-sm text-stone-700">{t.reikiEffectsIntro}</p>}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <ul className="text-sm space-y-1 text-stone-700">
                  {t.physicalBenefits.map((benefit, index) => (
                    <li key={index}>• {benefit}</li>
                  ))}
                </ul>
              </div>
              <div>
                <ul className="text-sm space-y-1 text-stone-700">
                  {t.emotionalBenefits.map((benefit, index) => (
                    <li key={index}>• {benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div className="bg-stone-50 rounded-2xl p-8 border-2 border-stone-200 text-center">
              <p className="text-stone-800 leading-relaxed text-lg">
                {t.sessionClosing}
              </p>
            </div>
          </div>

          {t.medicalDisclaimer && (
            <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6">
              <h3 className="text-xl font-bold text-stone-900 mb-4">{t.medicalDisclaimer}</h3>
              <div className="space-y-3 text-stone-700">
                {t.medicalDisclaimerText.map((text, index) => (
                  <p key={index} className="leading-relaxed">{text}</p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const Kristalltherapie: React.FC<ServicePageProps> = ({ onBack, currentLanguage }) => {
  const t = translations[currentLanguage].serviceDetails.kristalltherapie;
  const common = translations[currentLanguage].common;

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <button
          onClick={onBack}
          className="mb-8 text-teal-700 hover:text-teal-700 font-medium"
        >
          {common.backToServices}
        </button>

        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-16 h-16 bg-teal-700 rounded-full flex items-center justify-center">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-stone-900">{t.title}</h1>
              <p className="text-teal-700 font-medium">{t.subtitle}</p>
            </div>
          </div>

          <div className="mb-8">
            <div className="space-y-4">
              <p className="text-stone-700 leading-relaxed text-lg">
                {t.intro}
              </p>
              <p className="text-stone-700 leading-relaxed">
                {t.intro2}
              </p>
            </div>
          </div>

          <div className="mb-8">
            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-stone-900 font-semibold text-lg">{t.practiceToHold}</p>
                </div>
                <div>
                  <p className="text-stone-900 font-semibold text-lg">{t.explorationToOpen}</p>
                </div>
                <div>
                  <p className="text-stone-900 font-semibold text-lg">{t.integrationToTransform}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div className="bg-stone-50 rounded-2xl p-8 border-2 border-stone-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-4 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-teal-700" />
                {t.circleName}
              </h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                <span className="font-semibold">{t.circleName}</span> {t.circleIntro}
              </p>
              <p className="text-stone-900 font-medium mb-4">{t.noExperienceNeeded}</p>
              <p className="text-stone-700 leading-relaxed mb-4">
                {t.rootedIn}
              </p>
              <p className="text-stone-700 leading-relaxed mb-4">
                {t.notFromMind}
              </p>
            </div>
          </div>

          <div className="mb-8">
            <div className="bg-white border-2 border-stone-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-stone-900 mb-4">{t.duringMeetings}</h3>
              <ul className="space-y-3 text-stone-700">
                {t.practicesList.map((practice, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-teal-700 font-bold mt-1">•</span>
                    <span>{practice}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200">
              <p className="text-stone-900 font-semibold text-lg mb-3">{t.groupEnergy}</p>
              <p className="text-stone-700 leading-relaxed mb-4">
                {t.whenWeTogether}
              </p>
              <p className="text-stone-700 leading-relaxed">
                {t.invitation}
              </p>
            </div>
          </div>

          <div className="mb-8">
            <div className="bg-amber-50 rounded-2xl p-6 border border-stone-200">
              <p className="text-stone-700 leading-relaxed mb-3">
                {t.contactText}
              </p>
              <p className="text-teal-700 font-medium text-lg">
                {t.pleasureText}
              </p>
            </div>
          </div>

          <div className="mb-8">
            <div className="bg-white border border-stone-200 rounded-2xl p-6">
              <p className="text-stone-700 leading-relaxed mb-3">
                {t.eachMeeting}
              </p>
              <p className="text-stone-700 leading-relaxed italic">
                {t.spaceFlexible}
              </p>
            </div>
          </div>

          <div className="mb-8">
            <div className="bg-stone-50 rounded-2xl p-6 border-2 border-stone-200">
              <h3 className="text-xl font-bold text-stone-900 mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-teal-700" />
                {t.contributionTitle}
              </h3>
              <p className="text-stone-700 leading-relaxed mb-3">
                {t.contributionText}
              </p>
              <p className="text-stone-700 leading-relaxed font-medium">
                {t.contributionFlexible}
              </p>
            </div>
          </div>

          <div className="bg-stone-50 rounded-2xl p-8 border-2 border-stone-200">
            <p className="text-stone-800 leading-relaxed text-lg mb-6 text-center">
              {t.listenBody}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-block bg-teal-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
              >
                {t.ctaPrimary}
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-block bg-white text-teal-700 border-2 border-teal-700 px-8 py-4 rounded-full font-semibold hover:bg-teal-50 transition-all duration-300 text-center"
              >
                {t.ctaSecondary}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Fortbildungskurse: React.FC<ServicePageProps> = ({ onBack, currentLanguage }) => {
  const t = translations[currentLanguage].serviceDetails.fortbildungskurse;
  const common = translations[currentLanguage].common;

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <button
          onClick={onBack}
          className="mb-8 text-teal-700 hover:text-teal-700 font-medium"
        >
          {common.backToServices}
        </button>

        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-16 h-16 bg-teal-700 rounded-full flex items-center justify-center">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-stone-900">{t.title}</h1>
              <p className="text-teal-700 font-medium">{t.subtitle}</p>
            </div>
          </div>

          <div className="mb-8">
            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200">
              <p className="text-stone-700 leading-relaxed mb-4">
                {t.mainDescription}
              </p>
              <p className="text-stone-700 leading-relaxed">
                {t.description2}
              </p>
            </div>
          </div>

          <div className="mb-8">
            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200">
              <h3 className="text-xl font-bold text-stone-900 mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-teal-700" />
                {t.certificationTitle}
              </h3>
              <p className="text-stone-700 leading-relaxed">
                {t.certificationText}
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-6 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-teal-700" />
              {t.approachTitle}
            </h2>
            <div className="bg-stone-50 rounded-2xl p-6">
              <p className="text-stone-700 leading-relaxed mb-4">
                {t.approachIntro}
              </p>
              <h4 className="font-semibold text-stone-900 mb-3">{t.approachIncludes}</h4>
              <ul className="space-y-2 text-stone-700 mb-4">
                {t.approachList.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-teal-700 font-bold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-stone-700 leading-relaxed italic border-l-4 border-teal-700 pl-4">
                {t.approachClosing}
              </p>
            </div>
          </div>

          <div className="mb-8 flex justify-center">
            <img
              src="/photo_2026-01-14_18-27-26.jpg"
              alt="Reiki Ausbildung"
              className="max-w-md w-full h-auto rounded-2xl"
            />
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-6 flex items-center gap-2">
              <Users className="w-6 h-6 text-teal-700" />
              {t.formatsTitle}
            </h2>
            <p className="text-stone-700 leading-relaxed mb-6">
              {t.formatsIntro}
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-teal-700" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-900">{t.inPersonTitle}</h3>
                </div>
                <p className="text-stone-700">{t.inPersonDesc}</p>
              </div>
              <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-teal-700" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-900">{t.onlineTitle}</h3>
                </div>
                <p className="text-stone-700">{t.onlineDesc}</p>
              </div>
            </div>
            <div className="bg-white border border-stone-200 rounded-xl p-6">
              <p className="text-stone-700 leading-relaxed mb-3 italic">
                {t.initiationNote}
              </p>
              <h4 className="font-semibold text-stone-900 mb-3">{t.formatsInclude}</h4>
              <ul className="space-y-2 text-stone-700">
                {t.formatsIncludeList.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-teal-700 font-bold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-6 flex items-center gap-2">
              <Star className="w-6 h-6 text-teal-700" />
              {t.levelsTitle}
            </h2>
            <div className="space-y-6">
              <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-teal-700">I</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-stone-900">{t.grade1.title}</h3>
                    <p className="text-teal-700 font-medium">{t.grade1.subtitle}</p>
                  </div>
                </div>
                <p className="text-stone-700 leading-relaxed mb-4">
                  {t.grade1.description}
                </p>
                <h4 className="font-semibold text-stone-900 mb-3">{t.grade1.learnTitle}</h4>
                <ul className="space-y-2 text-stone-700 mb-4">
                  {t.grade1.learnList.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-teal-700 font-bold mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-stone-600 italic">{t.grade1.availability}</p>
              </div>

              <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-teal-700">II</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-stone-900">{t.grade2.title}</h3>
                    <p className="text-teal-700 font-medium">{t.grade2.subtitle}</p>
                  </div>
                </div>
                <p className="text-stone-700 leading-relaxed mb-4">
                  {t.grade2.description}
                </p>
                <h4 className="font-semibold text-stone-900 mb-3">{t.grade2.contentsTitle}</h4>
                <ul className="space-y-2 text-stone-700 mb-4">
                  {t.grade2.contentsList.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-teal-700 font-bold mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-stone-600 italic">{t.grade2.availability}</p>
              </div>

              <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-teal-700">III</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-stone-900">{t.grade3.title}</h3>
                    <p className="text-teal-700 font-medium">{t.grade3.subtitle}</p>
                  </div>
                </div>
                <p className="text-stone-700 leading-relaxed mb-4">
                  {t.grade3.description}
                </p>
                <h4 className="font-semibold text-stone-900 mb-3">{t.grade3.supportsTitle}</h4>
                <ul className="space-y-2 text-stone-700 mb-4">
                  {t.grade3.supportsList.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-teal-700 font-bold mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-stone-600 italic">{t.grade3.availability}</p>
              </div>

              <div className="bg-stone-50 rounded-2xl p-6 border-2 border-stone-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center">
                    <Star className="w-7 h-7 text-teal-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-stone-900">{t.mastery.title}</h3>
                  </div>
                </div>
                <p className="text-stone-700 leading-relaxed mb-4">
                  {t.mastery.description}
                </p>
                <p className="text-stone-700 leading-relaxed mb-4">
                  {t.mastery.permission}
                </p>
                <p className="text-sm text-stone-600 italic">{t.mastery.format}</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200">
              <h3 className="text-xl font-bold text-stone-900 mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-teal-700" />
                {t.suitableForTitle}
              </h3>
              <p className="text-stone-700 mb-3">{t.suitableForIntro}</p>
              <ul className="space-y-2 text-stone-700 mb-4">
                {t.suitableForList.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-teal-700 font-bold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-stone-700 italic">{t.suitableForNote}</p>
            </div>
          </div>

          <div className="bg-stone-50 rounded-2xl p-8 border-2 border-stone-200">
            <h3 className="text-2xl font-bold text-stone-900 mb-4 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-teal-700" />
              {t.invitationTitle}
            </h3>
            <p className="text-stone-700 leading-relaxed mb-4">
              {t.invitationText}
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              {t.invitationContact}
            </p>
            <p className="text-teal-700 font-medium text-lg">
              {t.invitationClosing}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const MakrameeWorkshops: React.FC<ServicePageProps> = ({ onBack, currentLanguage }) => {
  const t = translations[currentLanguage].serviceDetails.makrameeWorkshops;
  const common = translations[currentLanguage].common;

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <button
          onClick={onBack}
          className="mb-8 text-teal-700 hover:text-teal-700 font-medium"
        >
          {common.backToServices}
        </button>

        <div className="bg-white rounded-3xl overflow-hidden shadow-sm">
          <div className="p-8">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-teal-700 rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-stone-900">{t.title}</h1>
                <p className="text-teal-700 font-medium">{t.subtitle}</p>
              </div>
            </div>

            <div className="mb-8 flex justify-center">
              <img
                src="/photo_2026-01-14_18-17-56.jpg"
                alt={t.title}
                className="max-w-md w-full h-auto rounded-2xl"
              />
            </div>

            <div className="space-y-8 mb-8">
              <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200">
                <p className="text-stone-700 leading-relaxed mb-4">
                  {t.intro}
                </p>
                <p className="text-stone-700 leading-relaxed mb-4">
                  {t.description1}
                </p>
                <p className="text-stone-700 leading-relaxed">
                  {t.description2}
                </p>
              </div>

              <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200">
                <h2 className="text-2xl font-bold text-stone-900 mb-4 flex items-center gap-2">
                  <Heart className="w-6 h-6 text-teal-700" />
                  {t.approachTitle}
                </h2>
                <p className="text-stone-700 leading-relaxed mb-4">
                  {t.approachDesc}
                </p>
                <p className="text-stone-700 leading-relaxed mb-4">
                  {t.approachDesc2}
                </p>
                <p className="text-stone-700 leading-relaxed mb-4">
                  {t.approachDesc3}
                </p>
                <p className="text-stone-700 leading-relaxed">
                  {t.approachDesc4}
                </p>
              </div>
            </div>

          <div className="mb-8 grid md:grid-cols-2 gap-6">
            <img
              src="/11_(3).png"
              alt="Workshop Moment 1"
              className="w-full h-auto rounded-2xl"
            />
            <img
              src="/10_(3).png"
              alt="Workshop Moment 2"
              className="w-full h-auto rounded-2xl"
            />
          </div>

          <div className="mb-8">
            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-4 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-teal-700" />
                {t.workshopsTitle}
              </h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                {t.workshopsDesc}
              </p>
              <p className="text-stone-700 leading-relaxed mb-4">
                {t.workshopsDesc2}
              </p>
              <p className="text-stone-900 font-semibold mb-2">{t.notForced}</p>
              <p className="text-stone-700 leading-relaxed">{t.safePath}</p>
            </div>
          </div>

          <div className="mb-8">
            <div className="bg-teal-50 rounded-2xl p-6 border border-stone-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-4">{t.focusTitle}</h2>
              <h3 className="text-lg font-semibold text-stone-800 mb-3">{t.focusSubtitle}</h3>
              <ul className="space-y-2 text-stone-700 mb-4">
                {t.focusList.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-stone-700 leading-relaxed italic border-l-4 border-teal-700 pl-4">
                {t.invitationTitle}
              </p>
            </div>
          </div>

          <div className="mb-8 flex justify-center">
            <img
              src="/10.png"
              alt="Workshops Moment"
              className="max-w-md w-full h-auto rounded-2xl"
            />
          </div>

          <div className="mb-8">
            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-4">{t.forWhomTitle}</h2>
              <p className="text-stone-700 leading-relaxed mb-3">{t.forWhomDesc}</p>
              <ul className="space-y-2 text-stone-700 mb-4">
                {t.forWhomList.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-teal-700 font-bold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-stone-900 font-semibold mb-2">{t.noExperience}</p>
              <p className="text-stone-700 leading-relaxed">{t.onlyOpenness}</p>
            </div>
          </div>

          <div className="bg-stone-50 rounded-2xl p-8 border-2 border-stone-200">
            <h3 className="text-2xl font-bold text-stone-900 mb-4 text-center">
              {t.finalInvitationTitle}
            </h3>
            <p className="text-stone-800 leading-relaxed text-lg mb-3 text-center">
              {t.finalInvitation}
            </p>
            <p className="text-stone-700 leading-relaxed mb-6 text-center">
              {t.finalInvitationCTA}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-block bg-teal-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
              >
                {t.ctaPrimary}
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-block bg-white text-teal-700 border-2 border-teal-700 px-8 py-4 rounded-full font-semibold hover:bg-teal-50 transition-all duration-300 text-center"
              >
                {t.ctaSecondary}
              </button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};