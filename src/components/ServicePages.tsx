import React from 'react';
import { Clock, Heart, Sparkles, Star, Zap, Gem, GraduationCap, Scissors, Users, Award } from 'lucide-react';
import { Language } from '../types/translations';
import { translations } from '../data/translations';

interface ServicePageProps {
  onBack: () => void;
  currentLanguage: Language;
}

export const BioenergetischeMassage: React.FC<ServicePageProps> = ({ onBack, currentLanguage }) => {
  const t = translations[currentLanguage].serviceDetails.bioenergetischeMassage;
  const common = translations[currentLanguage].common;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <button
          onClick={onBack}
          className="mb-8 text-purple-600 hover:text-purple-700 font-medium"
        >
          {common.backToServices}
        </button>

        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{t.title}</h1>
              <p className="text-purple-600 font-medium">{t.subtitle}</p>
            </div>
          </div>

          <div className="mb-8">
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed text-lg">
                {t.intro1}
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                {t.intro2}
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                {t.intro3}
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.howItWorks}</h2>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                {t.howItWorksIntro}
              </p>
              <ul className="space-y-3 text-gray-700">
                {t.benefitsList.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-purple-600 font-bold text-lg">•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4 italic">
                {t.benefitsClosing}
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.usefulFor}</h2>
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                {t.usefulForIntro}
              </p>
              <ul className="space-y-3 text-gray-700 mb-4">
                {t.usefulForList.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-pink-600 font-bold text-lg">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 leading-relaxed italic">
                {t.usefulForClosing}
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.approach}</h2>
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-6 border-2 border-purple-200">
              <p className="text-gray-800 leading-relaxed mb-4">
                {t.approachText1}
              </p>
              <p className="text-gray-800 leading-relaxed">
                {t.approachText2}
              </p>
            </div>
          </div>

          <div className="mb-8">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Sparkles className="w-6 h-6" />
                <h3 className="text-2xl font-bold">{t.invitation}</h3>
              </div>
              <p className="text-white leading-relaxed text-lg mb-6">
                {t.invitationText}
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {t.bookButton}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Reiki: React.FC<ServicePageProps> = ({ onBack, currentLanguage }) => {
  const t = translations[currentLanguage].serviceDetails.reiki;
  const common = translations[currentLanguage].common;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <button 
          onClick={onBack}
          className="mb-8 text-purple-600 hover:text-purple-700 font-medium"
        >
          {common.backToServices}
        </button>
        
        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{t.title}</h1>
              <p className="text-purple-600 font-medium">{t.subtitle}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.whatIsReiki}</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t.description1}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t.description2}
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{t.sessionTitle}</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🕊</span>
                  <span className="text-gray-700 font-medium">{t.sessionDuration}</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🌿</span>
                  <span className="text-gray-700 font-medium">{t.sessionContact}</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🎶</span>
                  <span className="text-gray-700 font-medium">{t.sessionMusic}</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🌸</span>
                  <span className="text-gray-700 font-medium">{t.sessionAroma}</span>
                </div>
              </div>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {t.sessionButton}
              </button>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.reikiPrinciples}</h2>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
              <div className="space-y-4">
                <p className="text-gray-700 font-medium">{t.principlesIntro}</p>
                <ul className="space-y-3 text-gray-600">
                  {t.principles.map((principle, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-purple-600 font-bold">•</span>
                      <span>{principle}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-purple-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.directTreatment}</h3>
              <p className="text-gray-600 mb-4">
                {t.directTreatmentDesc}
              </p>
              <p className="text-gray-600">
                {t.directTreatmentBenefits}
              </p>
            </div>
            
            <div className="bg-pink-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.distanceTreatment}</h3>
              <p className="text-gray-600 mb-4">
                {t.distanceTreatmentDesc}
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                {t.distanceTreatmentBenefits.map((benefit, index) => (
                  <li key={index}>• {benefit}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 mb-8 border border-purple-200/50">
            <h3 className="text-xl font-bold mb-2 text-gray-900">{t.reikiEffects}</h3>
            {t.reikiEffectsIntro && <p className="mb-4 text-sm text-gray-700">{t.reikiEffectsIntro}</p>}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <ul className="text-sm space-y-1 text-gray-700">
                  {t.physicalBenefits.map((benefit, index) => (
                    <li key={index}>• {benefit}</li>
                  ))}
                </ul>
              </div>
              <div>
                <ul className="text-sm space-y-1 text-gray-700">
                  {t.emotionalBenefits.map((benefit, index) => (
                    <li key={index}>• {benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 border-2 border-purple-200 text-center">
              <p className="text-gray-800 leading-relaxed text-lg">
                {t.sessionClosing}
              </p>
            </div>
          </div>

          {t.medicalDisclaimer && (
            <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.medicalDisclaimer}</h3>
              <div className="space-y-3 text-gray-700">
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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <button
          onClick={onBack}
          className="mb-8 text-orange-600 hover:text-orange-700 font-medium"
        >
          {common.backToServices}
        </button>

        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{t.title}</h1>
              <p className="text-orange-600 font-medium">{t.subtitle}</p>
            </div>
          </div>

          <div className="mb-8">
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed text-lg">
                {t.intro}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t.intro2}
              </p>
            </div>
          </div>

          <div className="mb-8">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-100">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-gray-900 font-semibold text-lg">{t.practiceToHold}</p>
                </div>
                <div>
                  <p className="text-gray-900 font-semibold text-lg">{t.explorationToOpen}</p>
                </div>
                <div>
                  <p className="text-gray-900 font-semibold text-lg">{t.integrationToTransform}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl p-8 border-2 border-orange-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-orange-600" />
                {t.circleName}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <span className="font-semibold">{t.circleName}</span> {t.circleIntro}
              </p>
              <p className="text-gray-900 font-medium mb-4">{t.noExperienceNeeded}</p>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t.rootedIn}
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t.notFromMind}
              </p>
            </div>
          </div>

          <div className="mb-8">
            <div className="bg-white border-2 border-amber-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.duringMeetings}</h3>
              <ul className="space-y-3 text-gray-700">
                {t.practicesList.map((practice, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-orange-600 font-bold mt-1">•</span>
                    <span>{practice}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <div className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-2xl p-6 border border-pink-100">
              <p className="text-gray-900 font-semibold text-lg mb-3">{t.groupEnergy}</p>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t.whenWeTogether}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t.invitation}
              </p>
            </div>
          </div>

          <div className="mb-8">
            <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200">
              <p className="text-gray-700 leading-relaxed mb-3">
                {t.contactText}
              </p>
              <p className="text-orange-700 font-medium text-lg">
                {t.pleasureText}
              </p>
            </div>
          </div>

          <div className="mb-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <p className="text-gray-700 leading-relaxed mb-3">
                {t.eachMeeting}
              </p>
              <p className="text-gray-700 leading-relaxed italic">
                {t.spaceFlexible}
              </p>
            </div>
          </div>

          <div className="mb-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-green-600" />
                {t.contributionTitle}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                {t.contributionText}
              </p>
              <p className="text-gray-700 leading-relaxed font-medium">
                {t.contributionFlexible}
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-100 to-pink-100 rounded-2xl p-8 border-2 border-orange-200">
            <p className="text-gray-800 leading-relaxed text-lg mb-6 text-center">
              {t.listenBody}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-block bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
              >
                {t.ctaPrimary}
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-block bg-white text-orange-600 border-2 border-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-orange-50 transition-all duration-300 text-center"
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <button
          onClick={onBack}
          className="mb-8 text-purple-600 hover:text-purple-700 font-medium"
        >
          {common.backToServices}
        </button>

        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{t.title}</h1>
              <p className="text-purple-600 font-medium">{t.subtitle}</p>
            </div>
          </div>

          <div className="mb-8">
            <div className="bg-gradient-to-br from-cyan-50 via-purple-50/30 to-pink-50/40 rounded-2xl p-6 border border-purple-100">
              <p className="text-gray-700 leading-relaxed mb-4">
                {t.mainDescription}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t.description2}
              </p>
            </div>
          </div>

          <div className="mb-8">
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 border border-purple-200/50">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-purple-600" />
                {t.certificationTitle}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t.certificationText}
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-purple-600" />
              {t.approachTitle}
            </h2>
            <div className="bg-purple-50 rounded-2xl p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                {t.approachIntro}
              </p>
              <h4 className="font-semibold text-gray-900 mb-3">{t.approachIncludes}</h4>
              <ul className="space-y-2 text-gray-700 mb-4">
                {t.approachList.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 leading-relaxed italic border-l-4 border-purple-300 pl-4">
                {t.approachClosing}
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Users className="w-6 h-6 text-pink-600" />
              {t.formatsTitle}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {t.formatsIntro}
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-2xl p-6 border border-pink-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{t.inPersonTitle}</h3>
                </div>
                <p className="text-gray-700">{t.inPersonDesc}</p>
              </div>
              <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{t.onlineTitle}</h3>
                </div>
                <p className="text-gray-700">{t.onlineDesc}</p>
              </div>
            </div>
            <div className="bg-white border border-purple-200 rounded-xl p-6">
              <p className="text-gray-700 leading-relaxed mb-3 italic">
                {t.initiationNote}
              </p>
              <h4 className="font-semibold text-gray-900 mb-3">{t.formatsInclude}</h4>
              <ul className="space-y-2 text-gray-700">
                {t.formatsIncludeList.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Star className="w-6 h-6 text-purple-600" />
              {t.levelsTitle}
            </h2>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-green-600">I</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{t.grade1.title}</h3>
                    <p className="text-green-600 font-medium">{t.grade1.subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t.grade1.description}
                </p>
                <h4 className="font-semibold text-gray-900 mb-3">{t.grade1.learnTitle}</h4>
                <ul className="space-y-2 text-gray-700 mb-4">
                  {t.grade1.learnList.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-600 italic">{t.grade1.availability}</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600">II</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{t.grade2.title}</h3>
                    <p className="text-blue-600 font-medium">{t.grade2.subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t.grade2.description}
                </p>
                <h4 className="font-semibold text-gray-900 mb-3">{t.grade2.contentsTitle}</h4>
                <ul className="space-y-2 text-gray-700 mb-4">
                  {t.grade2.contentsList.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-600 italic">{t.grade2.availability}</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-6 border border-purple-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-purple-600">III</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{t.grade3.title}</h3>
                    <p className="text-purple-600 font-medium">{t.grade3.subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t.grade3.description}
                </p>
                <h4 className="font-semibold text-gray-900 mb-3">{t.grade3.supportsTitle}</h4>
                <ul className="space-y-2 text-gray-700 mb-4">
                  {t.grade3.supportsList.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-600 italic">{t.grade3.availability}</p>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-6 border-2 border-amber-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <Star className="w-7 h-7 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{t.mastery.title}</h3>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t.mastery.description}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t.mastery.permission}
                </p>
                <p className="text-sm text-gray-600 italic">{t.mastery.format}</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 border border-purple-200/50">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-purple-600" />
                {t.suitableForTitle}
              </h3>
              <p className="text-gray-700 mb-3">{t.suitableForIntro}</p>
              <ul className="space-y-2 text-gray-700 mb-4">
                {t.suitableForList.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 italic">{t.suitableForNote}</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 border-2 border-pink-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-pink-600" />
              {t.invitationTitle}
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              {t.invitationText}
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              {t.invitationContact}
            </p>
            <p className="text-purple-700 font-medium text-lg">
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
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <button
          onClick={onBack}
          className="mb-8 text-purple-600 hover:text-purple-700 font-medium"
        >
          {common.backToServices}
        </button>

        <div className="bg-white rounded-3xl overflow-hidden shadow-sm">
          <div className="w-full h-[400px] relative overflow-hidden">
            <img
              src="/workshops_web_bild.png"
              alt={t.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>

          <div className="p-8">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{t.title}</h1>
                <p className="text-cyan-600 font-medium">{t.subtitle}</p>
              </div>
            </div>

          <div className="mb-8">
            <div className="bg-gradient-to-br from-cyan-50 to-purple-50 rounded-2xl p-6 border border-cyan-100">
              <p className="text-gray-700 leading-relaxed mb-4">
                {t.intro}
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t.description1}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t.description2}
              </p>
            </div>
          </div>

          <div className="mb-8">
            <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Heart className="w-6 h-6 text-purple-600" />
                {t.approachTitle}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t.approachDesc}
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t.approachDesc2}
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t.approachDesc3}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t.approachDesc4}
              </p>
            </div>
          </div>

          <div className="mb-8">
            <div className="bg-gradient-to-r from-cyan-50 to-teal-50 rounded-2xl p-6 border border-cyan-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-cyan-600" />
                {t.workshopsTitle}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t.workshopsDesc}
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t.workshopsDesc2}
              </p>
              <p className="text-gray-900 font-semibold mb-2">{t.notForced}</p>
              <p className="text-gray-700 leading-relaxed">{t.safePath}</p>
            </div>
          </div>

          <div className="mb-8">
            <div className="bg-teal-50 rounded-2xl p-6 border border-teal-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.focusTitle}</h2>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{t.focusSubtitle}</h3>
              <ul className="space-y-2 text-gray-700 mb-4">
                {t.focusList.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 leading-relaxed italic border-l-4 border-teal-300 pl-4">
                {t.invitationTitle}
              </p>
            </div>
          </div>

          <div className="mb-8">
            <div className="bg-pink-50 rounded-2xl p-6 border border-pink-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.forWhomTitle}</h2>
              <p className="text-gray-700 leading-relaxed mb-3">{t.forWhomDesc}</p>
              <ul className="space-y-2 text-gray-700 mb-4">
                {t.forWhomList.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-pink-600 font-bold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-900 font-semibold mb-2">{t.noExperience}</p>
              <p className="text-gray-700 leading-relaxed">{t.onlyOpenness}</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 border-2 border-purple-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              {t.finalInvitationTitle}
            </h3>
            <p className="text-gray-800 leading-relaxed text-lg mb-3 text-center">
              {t.finalInvitation}
            </p>
            <p className="text-gray-700 leading-relaxed mb-6 text-center">
              {t.finalInvitationCTA}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-block bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
              >
                {t.ctaPrimary}
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-block bg-white text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300 text-center"
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