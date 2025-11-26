import React from 'react';
import { Clock, Heart, Sparkles, Star, Zap, Gem, GraduationCap, Scissors, Users } from 'lucide-react';
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

          {/* What is it Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.whatIsIt}</h2>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
              <p className="text-gray-600 leading-relaxed mb-4">
                {t.whatIsItDesc}
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t.principleDesc}
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t.techniqueDesc}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t.meridianDesc}
              </p>
            </div>
          </div>

          {/* Description Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Beschreibung</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t.description1}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t.description2}
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.treatmentTypes}</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="font-medium">{t.fullBodyWithHead}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-pink-600" />
                  </div>
                  <span className="font-medium">{t.backAndHead}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-indigo-600" />
                  </div>
                  <span className="font-medium">{t.frontAndHead}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Effects Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.effectsAndBenefits}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-purple-50 rounded-2xl">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">{t.energyFlow}</h3>
                <p className="text-sm text-gray-600">{t.energyFlowDesc}</p>
              </div>
              
              <div className="text-center p-6 bg-pink-50 rounded-2xl">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="font-semibold mb-2">{t.relaxation}</h3>
                <p className="text-sm text-gray-600">{t.relaxationDesc}</p>
              </div>
              
              <div className="text-center p-6 bg-indigo-50 rounded-2xl">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="font-semibold mb-2">{t.regeneration}</h3>
                <p className="text-sm text-gray-600">{t.regenerationDesc}</p>
              </div>
            </div>
          </div>

          {/* Physical Benefits Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Vorteile - Physisch, Emotional und Mental</h2>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.physicalBenefits}</h3>
              <ul className="space-y-2 text-gray-600">
                {t.physicalBenefitsList.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Applications Section */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-white">
            <div className="flex items-center space-x-3 mb-4">
              <Users className="w-6 h-6" />
              <h3 className="text-xl font-bold">{t.suitableFor}</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {t.suitableForList.map((item, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <span className="text-pink-200 font-bold">•</span>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Was ist Reiki?</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t.description1}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t.description2}
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.treatmentForms}</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <Heart className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="font-medium">{t.directReiki}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-pink-600" />
                  </div>
                  <span className="font-medium">{t.distanceReiki}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Gem className="w-4 h-4 text-indigo-600" />
                  </div>
                  <span className="font-medium">{t.crystalReikiCombo}</span>
                </div>
              </div>
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
              <ul className="text-sm text-gray-600 space-y-1">
                {t.directTreatmentBenefits.map((benefit, index) => (
                  <li key={index}>• {benefit}</li>
                ))}
              </ul>
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

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-white">
            <h3 className="text-xl font-bold mb-4">{t.reikiEffects}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">{t.physicalLevel}</h4>
                <ul className="text-sm space-y-1">
                  {t.physicalBenefits.map((benefit, index) => (
                    <li key={index}>• {benefit}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">{t.emotionalLevel}</h4>
                <ul className="text-sm space-y-1">
                  {t.emotionalBenefits.map((benefit, index) => (
                    <li key={index}>• {benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Kristalltherapie: React.FC<ServicePageProps> = ({ onBack, currentLanguage }) => {
  const t = translations[currentLanguage].serviceDetails.kristalltherapie;
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
              <Gem className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{t.title}</h1>
              <p className="text-purple-600 font-medium">{t.subtitle}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Die Kraft der Kristalle</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t.description1}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t.description2}
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.popularCrystals}</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <Gem className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <span className="font-medium">{t.amethyst}</span>
                    <p className="text-xs text-gray-600">{t.amethystDesc}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                    <Gem className="w-4 h-4 text-pink-600" />
                  </div>
                  <div>
                    <span className="font-medium">{t.roseQuartz}</span>
                    <p className="text-xs text-gray-600">{t.roseQuartzDesc}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Gem className="w-4 h-4 text-indigo-600" />
                  </div>
                  <div>
                    <span className="font-medium">{t.clearQuartz}</span>
                    <p className="text-xs text-gray-600">{t.clearQuartzDesc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.treatmentProcess}</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-purple-50 rounded-2xl">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold text-purple-600">1</span>
                </div>
                <h3 className="font-semibold mb-2">{t.consultation}</h3>
                <p className="text-sm text-gray-600">{t.consultationDesc}</p>
              </div>
              
              <div className="text-center p-4 bg-pink-50 rounded-2xl">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold text-pink-600">2</span>
                </div>
                <h3 className="font-semibold mb-2">{t.placement}</h3>
                <p className="text-sm text-gray-600">{t.placementDesc}</p>
              </div>
              
              <div className="text-center p-4 bg-indigo-50 rounded-2xl">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold text-indigo-600">3</span>
                </div>
                <h3 className="font-semibold mb-2">{t.reikiStep}</h3>
                <p className="text-sm text-gray-600">{t.reikiStepDesc}</p>
              </div>
              
              <div className="text-center p-4 bg-emerald-50 rounded-2xl">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold text-emerald-600">4</span>
                </div>
                <h3 className="font-semibold mb-2">{t.integration}</h3>
                <p className="text-sm text-gray-600">{t.integrationDesc}</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-purple-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.chakraHealing}</h3>
              <p className="text-gray-600 mb-4">
                {t.chakraHealingDesc}
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                {t.chakraList.map((chakra, index) => (
                  <li key={index}>• {chakra}</li>
                ))}
              </ul>
            </div>
            
            <div className="bg-pink-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.crystalMeditation}</h3>
              <p className="text-gray-600 mb-4">
                {t.crystalMeditationDesc}
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                {t.crystalMeditationBenefits.map((benefit, index) => (
                  <li key={index}>• {benefit}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-white">
            <h3 className="text-xl font-bold mb-4">{t.applications}</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2">{t.physical}</h4>
                <ul className="text-sm space-y-1">
                  {t.physicalBenefits.map((benefit, index) => (
                    <li key={index}>• {benefit}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">{t.emotional}</h4>
                <ul className="text-sm space-y-1">
                  {t.emotionalBenefits.map((benefit, index) => (
                    <li key={index}>• {benefit}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">{t.spiritual}</h4>
                <ul className="text-sm space-y-1">
                  {t.spiritualBenefits.map((benefit, index) => (
                    <li key={index}>• {benefit}</li>
                  ))}
                </ul>
              </div>
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

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Werden Sie selbst zum Heiler</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t.description1}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t.description2}
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.courseFormats}</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <Clock className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="font-medium">{t.weekendIntensive}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-pink-600" />
                  </div>
                  <span className="font-medium">{t.individualLessons}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Heart className="w-4 h-4 text-indigo-600" />
                  </div>
                  <span className="font-medium">{t.smallGroups}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.availableCourses}</h2>
            <div className="space-y-6">
              <div className="bg-purple-50 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{t.reikiGrade1.title}</h3>
                    <p className="text-purple-600 font-medium">{t.reikiGrade1.subtitle}</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">{t.reikiGrade1.contents}</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {t.reikiGrade1.contentsList.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{t.reikiGrade1.details}</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {t.reikiGrade1.detailsList.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-pink-50 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{t.reikiGrade2.title}</h3>
                    <p className="text-pink-600 font-medium">{t.reikiGrade2.subtitle}</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">{t.reikiGrade2.contents}</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {t.reikiGrade2.contentsList.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{t.reikiGrade2.requirements}</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {t.reikiGrade2.requirementsList.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-indigo-50 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Gem className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{t.crystalTherapy.title}</h3>
                    <p className="text-indigo-600 font-medium">{t.crystalTherapy.subtitle}</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">{t.crystalTherapy.contents}</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {t.crystalTherapy.contentsList.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{t.crystalTherapy.included}</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {t.crystalTherapy.includedList.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-white">
            <h3 className="text-xl font-bold mb-4">{t.whyLearnWithMe}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">{t.experienceCompetence}</h4>
                <ul className="text-sm space-y-1">
                  {t.experienceList.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">{t.personalSupport}</h4>
                <ul className="text-sm space-y-1">
                  {t.supportList.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
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
              <Scissors className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{t.title}</h1>
              <p className="text-purple-600 font-medium">{t.subtitle}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Entdecken Sie die Kunst des Makramee</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t.description1}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t.description2}
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.highlights}</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <Heart className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="font-medium">{t.relaxingAtmosphere}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-pink-600" />
                  </div>
                  <span className="font-medium">{t.allMaterialsIncluded}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-indigo-600" />
                  </div>
                  <span className="font-medium">{t.smallGroups}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.workshopOffers}</h2>
            <div className="space-y-6">
              <div className="bg-purple-50 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{t.wallHanging.title}</h3>
                    <p className="text-purple-600 font-medium">{t.wallHanging.subtitle}</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">{t.wallHanging.whatYouLearn}</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {t.wallHanging.learnList.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{t.wallHanging.yourProject}</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {t.wallHanging.projectList.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-pink-50 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{t.plantHanger.title}</h3>
                    <p className="text-pink-600 font-medium">{t.plantHanger.subtitle}</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">{t.plantHanger.features}</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {t.plantHanger.featuresList.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{t.plantHanger.included}</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {t.plantHanger.includedList.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-indigo-50 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Gem className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{t.jewelry.title}</h3>
                    <p className="text-indigo-600 font-medium">{t.jewelry.subtitle}</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">{t.jewelry.projects}</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {t.jewelry.projectsList.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{t.jewelry.materials}</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {t.jewelry.materialsList.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-purple-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.meditativeEffect}</h3>
              <p className="text-gray-600 mb-4">
                {t.meditativeEffectDesc}
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                {t.meditativeEffectList.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
            
            <div className="bg-pink-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.suitableFor}</h3>
              <p className="text-gray-600 mb-4">
                {t.suitableForDesc}
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                {t.suitableForList.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-white">
            <h3 className="text-xl font-bold mb-4">{t.workshopInfo}</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2">{t.schedule}</h4>
                <ul className="text-sm space-y-1">
                  {t.scheduleList.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">{t.included}</h4>
                <ul className="text-sm space-y-1">
                  {t.includedList.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">{t.special}</h4>
                <ul className="text-sm space-y-1">
                  {t.specialList.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};