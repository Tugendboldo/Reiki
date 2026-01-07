export type Language = 'de' | 'en' | 'es';

export interface Translations {
  // Navigation
  nav: {
    home: string;
    about: string;
    services: string;
    contact: string;
  };
  
  // Hero Section
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    bookAppointment: string;
    discoverServices: string;
  };
  
  // Features
  features: {
    holisticHealing: {
      title: string;
      description: string;
    };
    crystalReiki: {
      title: string;
      description: string;
    };
    personalCare: {
      title: string;
      description: string;
    };
    bioenergeticMassage: {
      title: string;
      description: string;
    };
  };

  // Approach Section
  approach: {
    badge: string;
    title: string;
    titleHighlight: string;
    paragraphs: string[];
  };

  // About Section
  about: {
    badge: string;
    title: string;
    titleHighlight: string;
    description1: string;
    description2: string;
    certifiedTraining: string;
    reikiMasterCert: string;
    experience: string;
    holisticHealing: string;
    bookPersonalAppointment: string;
    certifiedReikiMaster: string;
  };
  
  // Services Section
  services: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    learnMore: string;
    personalConsultation: string;
    personalAppointments: string;
    personalAppointmentsDesc: string;
    personalAppointmentsNote: string;
    flexiblePackages: string;
    flexiblePackagesDesc: string;
    flexiblePackagesNote: string;
  };
  
  // Service Details
  serviceDetails: {
    bioenergetischeMassage: {
      title: string;
      subtitle: string;
      description1: string;
      description2: string;
      treatmentTypes: string;
      fullBodyWithHead: string;
      backAndHead: string;
      frontAndHead: string;
      effectsAndBenefits: string;
      energyFlow: string;
      energyFlowDesc: string;
      relaxation: string;
      relaxationDesc: string;
      regeneration: string;
      regenerationDesc: string;
      suitableFor: string;
      suitableForList: string[];
    };
    reiki: {
      title: string;
      subtitle: string;
      description1: string;
      description2: string;
      treatmentForms: string;
      directReiki: string;
      distanceReiki: string;
      crystalReikiCombo: string;
      reikiPrinciples: string;
      principlesIntro: string;
      principles: string[];
      directTreatment: string;
      directTreatmentDesc: string;
      directTreatmentBenefits: string[];
      distanceTreatment: string;
      distanceTreatmentDesc: string;
      distanceTreatmentBenefits: string[];
      reikiEffects: string;
      physicalLevel: string;
      physicalBenefits: string[];
      emotionalLevel: string;
      emotionalBenefits: string[];
    };
    kristalltherapie: {
      title: string;
      subtitle: string;
      description1: string;
      description2: string;
      popularCrystals: string;
      amethyst: string;
      amethystDesc: string;
      roseQuartz: string;
      roseQuartzDesc: string;
      clearQuartz: string;
      clearQuartzDesc: string;
      treatmentProcess: string;
      consultation: string;
      consultationDesc: string;
      placement: string;
      placementDesc: string;
      reikiStep: string;
      reikiStepDesc: string;
      integration: string;
      integrationDesc: string;
      chakraHealing: string;
      chakraHealingDesc: string;
      chakraList: string[];
      crystalMeditation: string;
      crystalMeditationDesc: string;
      crystalMeditationBenefits: string[];
      applications: string;
      physical: string;
      physicalBenefits: string[];
      emotional: string;
      emotionalBenefits: string[];
      spiritual: string;
      spiritualBenefits: string[];
    };
    fortbildungskurse: {
      title: string;
      subtitle: string;
      description1: string;
      description2: string;
      courseFormats: string;
      weekendIntensive: string;
      individualLessons: string;
      smallGroups: string;
      availableCourses: string;
      reikiGrade1: {
        title: string;
        subtitle: string;
        contents: string;
        contentsList: string[];
        details: string;
        detailsList: string[];
      };
      reikiGrade2: {
        title: string;
        subtitle: string;
        contents: string;
        contentsList: string[];
        requirements: string;
        requirementsList: string[];
      };
      crystalTherapy: {
        title: string;
        subtitle: string;
        contents: string;
        contentsList: string[];
        included: string;
        includedList: string[];
      };
      whyLearnWithMe: string;
      experienceCompetence: string;
      experienceList: string[];
      personalSupport: string;
      supportList: string[];
    };
    makrameeWorkshops: {
      title: string;
      subtitle: string;
      description1: string;
      description2: string;
      highlights: string;
      relaxingAtmosphere: string;
      allMaterialsIncluded: string;
      smallGroups: string;
      workshopOffers: string;
      wallHanging: {
        title: string;
        subtitle: string;
        whatYouLearn: string;
        learnList: string[];
        yourProject: string;
        projectList: string[];
      };
      plantHanger: {
        title: string;
        subtitle: string;
        features: string;
        featuresList: string[];
        included: string;
        includedList: string[];
      };
      jewelry: {
        title: string;
        subtitle: string;
        projects: string;
        projectsList: string[];
        materials: string;
        materialsList: string[];
      };
      meditativeEffect: string;
      meditativeEffectDesc: string;
      meditativeEffectList: string[];
      suitableFor: string;
      suitableForDesc: string;
      suitableForList: string[];
      workshopInfo: string;
      schedule: string;
      scheduleList: string[];
      included: string;
      includedList: string[];
      special: string;
      specialList: string[];
    };
  };
  
  // Contact Section
  contact: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    phone: string;
    phoneDesc: string;
    location: string;
    locationDesc: string;
    address: string[];
    hours: string;
    hoursDesc: string;
    schedule: string[];
    bookAppointment: string;
    name: string;
    namePlaceholder: string;
    telephone: string;
    telephonePlaceholder: string;
    desiredTreatment: string;
    treatmentOptions: string[];
    message: string;
    messagePlaceholder: string;
    sendInquiry: string;
  };
  
  // Footer
  footer: {
    description: string;
    services: string;
    servicesList: string[];
    contact: string;
    copyright: string;
  };
  
  // Common
  common: {
    backToServices: string;
  };
}