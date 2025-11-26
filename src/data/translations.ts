import { Translations, Language } from '../types/translations';

export const translations: Record<Language, Translations> = {
  de: {
    // Navigation
    nav: {
      home: 'Startseite',
      about: 'Über mich',
      services: 'Leistungen',
      contact: 'Kontakt'
    },
    
    // Hero Section
    hero: {
      badge: 'Zertifizierte Reiki-Meisterin',
      title: 'Willkommen bei ',
      titleHighlight: 'Erika Natural Healing',
      description: 'Entdecken Sie die heilende Kraft von Reiki, bioenergetischen Massagen und Kristalltherapie. Ich begleite Sie auf Ihrem Weg zu innerer Balance, Entspannung und ganzheitlichem Wohlbefinden.',
      bookAppointment: 'Termin vereinbaren',
      discoverServices: 'Leistungen entdecken'
    },
    
    // Features
    features: {
      holisticHealing: {
        title: 'Ganzheitliche Heilung',
        description: 'Körper, Geist und Seele in Einklang bringen durch bewährte Heilmethoden'
      },
      crystalReiki: {
        title: 'Kristall-Reiki',
        description: 'Kombination aus Reiki-Energie und der heilenden Kraft von Kristallen'
      },
      personalCare: {
        title: 'Persönliche Betreuung',
        description: 'Individuelle Behandlungen, die auf Ihre spezifischen Bedürfnisse abgestimmt sind'
      }
    },
    
    // About Section
    about: {
      badge: 'Über mich',
      title: 'Ihre ',
      titleHighlight: 'Reiki-Meisterin',
      description1: 'Mit jahrelanger Erfahrung in der Energiearbeit und einer tiefen Leidenschaft für ganzheitliche Heilung begleite ich Menschen auf ihrem Weg zu mehr Wohlbefinden und innerer Balance.',
      description2: 'Meine Ausbildungen in Reiki, bioenergetischer Massage und Kristalltherapie ermöglichen es mir, individuelle Behandlungskonzepte zu entwickeln, die Körper, Geist und Seele harmonisieren.',
      certifiedTraining: 'Zertifizierte Ausbildung',
      reikiMasterCert: 'Reiki-Meister Zertifikat',
      experience: 'Langjährige Erfahrung',
      holisticHealing: 'Ganzheitliche Heilmethoden',
      bookPersonalAppointment: 'Persönlichen Termin buchen',
      certifiedReikiMaster: 'Zertifizierte Reiki-Meisterin'
    },
    
    // Services Section
    services: {
      badge: 'Meine Leistungen',
      title: 'Heilende ',
      titleHighlight: 'Behandlungen',
      description: 'Entdecken Sie mein vielfältiges Angebot an ganzheitlichen Heilmethoden, die Ihnen zu mehr Wohlbefinden und innerer Balance verhelfen.',
      learnMore: 'Mehr erfahren',
      personalConsultation: 'Persönliche Beratung',
      personalAppointments: 'Individuelle Termine',
      personalAppointmentsDesc: 'Alle Behandlungen werden individuell auf Ihre Bedürfnisse abgestimmt.',
      personalAppointmentsNote: 'Termine nach Vereinbarung',
      flexiblePackages: 'Flexible Pakete',
      flexiblePackagesDesc: 'Verschiedene Behandlungspakete für optimale Ergebnisse.',
      flexiblePackagesNote: 'Preise auf Anfrage'
    },
    
    // Service Details
    serviceDetails: {
      bioenergetischeMassage: {
        title: 'Bioenergetische Massage',
        subtitle: 'Ganzheitliche Entspannung für Körper und Seele',
        description1: 'Eine bioenergetische Massage ist eine Kombination aus sanfter Ölmassage und Energiearbeit. Es findet ein Chakra- und Aura-Ausgleich sowie eine Stimulierung von Reflexzonen und Meridianbahnen statt. Zudem wird die Muskulatur besser durchblutet, im Bindegewebe lösen sich Giftstoffe und die Lymphe wird aktiviert.',
        description2: 'Die Massage wirkt sich günstig auf Kreislauf, Nerven, Atmung, Verdauung, Harnwege, Bindegewebe sowie das Immun- und Hormonsystem aus.',
        treatmentTypes: 'Behandlungsarten',
        fullBodyWithHead: 'Ganzkörpermassage mit Kopf',
        backAndHead: 'Rücken- und Kopfmassage',
        frontAndHead: 'Vorderseite mit Kopf',
        effectsAndBenefits: 'Wirkung und Vorteile',
        energyFlow: 'Energiefluss',
        energyFlowDesc: 'Harmonisierung der Chakren und Aktivierung der Meridiane',
        relaxation: 'Tiefe Entspannung',
        relaxationDesc: 'Lösung von Verspannungen und Stress',
        regeneration: 'Regeneration',
        regenerationDesc: 'Stärkung des Immunsystems und der Selbstheilungskräfte',
        suitableFor: 'Geeignet für',
        suitableForList: [
          'Steigerung der Leistungsfähigkeit im Beruf und Sport',
          'Bei Nervosität, Schlafstörungen, Zähneknirschen und Burn Out',
          'Bei Schmerzen und Verspannungen',
          'Bei seelischen Krisen wie Neurosen, Depressionen, Wut und Ärger',
          'Ein Weg zur inneren Ruhe und Stabilität',
          'Harmonisierend auf das Herz-Kreislauf-System',
          'Festigt das Bindegewebe',
          'Nach Bandscheibenoperationen und Reha',
          'Bei Menstruations- und Wechseljahrbeschwerden',
          'Für einen freien und klaren Kopf',
          'Löst Kopfschmerzen und Migräne',
          'Bei Restless Legs Syndrom und schweren müden Beinen',
          'Steigert Wohlbefinden und Ausgeglichenheit'
        ],
        pricing: 'Preise',
        duration60: '60 Minuten - 60€',
        duration90: '90 Minuten - 79€',
        treatmentNote: 'Eine Behandlung dauert in der Regel 60 Minuten, plus ca. 15-20 Minuten Vorbereitung und ca. 10 Minuten Aufräumen.',
        physicalBenefits: 'Physische Vorteile',
        physicalBenefitsList: [
          'Hilft bei allen Verdauungsprozessen der Aufnahme und Ausscheidung',
          'Hilft bei der Entwässerung des Lymphsystems und verbessert die Blutzirkulation',
          'Verbessert die Schlafqualität',
          'Reduziert und beseitigt körperliche und geistige Erschöpfung',
          'Reduziert körperliche, geistige und emotionale Spannungen',
          'Verbessert psychosomatische Störungen',
          'Stimulation des Immunsystems, die dazu führt'
        ],
        whatIsIt: 'Was ist es?',
        whatIsItDesc: 'Die bioenergetische Massage basiert auf der Verschmelzung sanfter manueller Techniken und energetischer Techniken, die darauf abzielen, gleichzeitig unsere körperlichen und emotionalen Probleme zu lösen, basierend auf dem Prinzip, dass ein ungelöstes emotionales Problem auch ein Muskel- oder Verhaltensproblem verursachen kann.',
        principleDesc: 'Gleichzeitig basiert es auf dem Prinzip, dass ein ungelöstes emotionales Problem auch ein Muskel- oder Verhaltensproblem verursachen kann.',
        techniqueDesc: 'Bei dieser Technik werden sanfte Ölmassagen durchgeführt.',
        meridianDesc: 'Insbesondere durch die Kanäle, die als Energie gelten (Meridiane).'
      },
      reiki: {
        title: 'Reiki',
        subtitle: 'Universelle Lebensenergie für Heilung und Balance',
        description1: 'Reiki ist eine japanische Heilmethode, die auf der Übertragung universeller Lebensenergie basiert. Durch sanfte Handauflage oder Fernbehandlung wird der natürliche Energiefluss im Körper harmonisiert und die Selbstheilungskräfte aktiviert.',
        description2: 'Diese ganzheitliche Methode wirkt auf körperlicher, emotionaler und geistiger Ebene und bringt tiefe Entspannung und inneren Frieden.',
        treatmentForms: 'Behandlungsformen',
        directReiki: 'Direktes Reiki',
        distanceReiki: 'Fernreiki',
        crystalReikiCombo: 'Kristall-Reiki Kombination',
        reikiPrinciples: 'Die fünf Reiki-Lebensregeln',
        principlesIntro: 'Die Reiki-Prinzipien nach Dr. Mikao Usui:',
        principles: [
          'Gerade heute ärgere dich nicht',
          'Gerade heute sorge dich nicht',
          'Gerade heute sei dankbar',
          'Gerade heute arbeite ehrlich',
          'Gerade heute sei freundlich zu allen Lebewesen'
        ],
        directTreatment: 'Direkte Behandlung',
        directTreatmentDesc: 'Bei der direkten Reiki-Behandlung legen sich die Klienten bekleidet auf eine Liege. Durch sanfte Handauflage an verschiedenen Körperstellen wird die Energie übertragen.',
        directTreatmentBenefits: [
          'Tiefe Entspannung und Stressabbau',
          'Aktivierung der Selbstheilungskräfte',
          'Harmonisierung der Chakren',
          'Lösung von Energieblockaden'
        ],
        distanceTreatment: 'Fernbehandlung',
        distanceTreatmentDesc: 'Reiki kann auch über die Ferne übertragen werden. Zeit und Raum spielen bei der Energieübertragung keine Rolle.',
        distanceTreatmentBenefits: [
          'Behandlung von jedem Ort aus möglich',
          'Ideal für Menschen mit eingeschränkter Mobilität',
          'Energieübertragung zu vereinbarten Zeiten',
          'Gleiche Wirksamkeit wie direkte Behandlung'
        ],
        reikiEffects: 'Reiki-Wirkungen',
        physicalLevel: 'Körperliche Ebene',
        physicalBenefits: [
          'Schmerzlinderung',
          'Verbesserung der Durchblutung',
          'Stärkung des Immunsystems',
          'Beschleunigung von Heilungsprozessen'
        ],
        emotionalLevel: 'Emotionale Ebene',
        emotionalBenefits: [
          'Abbau von Stress und Ängsten',
          'Emotionale Balance',
          'Mehr Gelassenheit',
          'Innerer Frieden'
        ]
      },
      kristalltherapie: {
        title: 'Kristalltherapie',
        subtitle: 'Heilung durch die Kraft der Kristalle',
        description1: 'Die Kristalltherapie nutzt die natürlichen Schwingungen und Energien von Heilsteinen, um Körper, Geist und Seele in Balance zu bringen. Jeder Kristall besitzt einzigartige Eigenschaften und Schwingungsfrequenzen.',
        description2: 'Durch gezieltes Auflegen der Steine auf Chakren oder Energiepunkte werden Blockaden gelöst und der natürliche Energiefluss wiederhergestellt.',
        popularCrystals: 'Beliebte Kristalle',
        amethyst: 'Amethyst',
        amethystDesc: 'Beruhigung und spirituelle Klarheit',
        roseQuartz: 'Rosenquarz',
        roseQuartzDesc: 'Herzöffnung und Selbstliebe',
        clearQuartz: 'Bergkristall',
        clearQuartzDesc: 'Verstärkung und Reinigung',
        treatmentProcess: 'Behandlungsablauf',
        consultation: 'Beratung',
        consultationDesc: 'Analyse der Bedürfnisse',
        placement: 'Platzierung',
        placementDesc: 'Auflegen der Kristalle',
        reikiStep: 'Reiki-Energie',
        reikiStepDesc: 'Energieübertragung',
        integration: 'Integration',
        integrationDesc: 'Nachbesprechung',
        chakraHealing: 'Chakra-Heilung',
        chakraHealingDesc: 'Spezielle Kristalle werden auf die sieben Hauptchakren gelegt, um diese zu harmonisieren und zu aktivieren.',
        chakraList: [
          'Wurzelchakra - Erdung und Stabilität',
          'Sakralchakra - Kreativität und Emotionen',
          'Solarplexus - Persönliche Macht',
          'Herzchakra - Liebe und Mitgefühl',
          'Halschakra - Kommunikation',
          'Stirnchakra - Intuition',
          'Kronenchakra - Spiritualität'
        ],
        crystalMeditation: 'Kristall-Meditation',
        crystalMeditationDesc: 'Geführte Meditationen mit Kristallen verstärken die heilende Wirkung und fördern tiefe Entspannung.',
        crystalMeditationBenefits: [
          'Vertiefte Meditation',
          'Erhöhte Schwingung',
          'Klarheit des Geistes',
          'Spirituelle Verbindung'
        ],
        applications: 'Anwendungsbereiche',
        physical: 'Körperlich',
        physicalBenefits: [
          'Schmerzlinderung',
          'Energetisierung',
          'Entgiftung',
          'Immunstärkung'
        ],
        emotional: 'Emotional',
        emotionalBenefits: [
          'Stressabbau',
          'Emotionale Heilung',
          'Selbstvertrauen',
          'Innere Ruhe'
        ],
        spiritual: 'Spirituell',
        spiritualBenefits: [
          'Bewusstseinserweiterung',
          'Intuitionsstärkung',
          'Spirituelles Wachstum',
          'Energetische Reinigung'
        ]
      },
      fortbildungskurse: {
        title: 'Fortbildungskurse',
        subtitle: 'Lernen Sie die Kunst der Energiearbeit',
        description1: 'Entdecken Sie die faszinierende Welt der Energiearbeit und lernen Sie, selbst zu heilen. Meine Kurse vermitteln fundiertes Wissen und praktische Fähigkeiten in Reiki und Kristalltherapie.',
        description2: 'Ob Anfänger oder Fortgeschrittene - ich begleite Sie auf Ihrem Weg zum zertifizierten Energiearbeiter mit persönlicher Betreuung und praxisnahem Unterricht.',
        courseFormats: 'Kursformate',
        weekendIntensive: 'Wochenend-Intensivkurse',
        individualLessons: 'Einzelunterricht',
        smallGroups: 'Kleine Gruppen (max. 6 Personen)',
        availableCourses: 'Verfügbare Kurse',
        reikiGrade1: {
          title: 'Reiki 1. Grad',
          subtitle: 'Grundlagen der Reiki-Energie',
          contents: 'Kursinhalte',
          contentsList: [
            'Geschichte und Philosophie des Reiki',
            'Die fünf Reiki-Lebensregeln',
            'Erste Einweihung und Energieübertragung',
            'Grundlegende Handpositionen',
            'Selbstbehandlung mit Reiki',
            'Behandlung von Familie und Freunden'
          ],
          details: 'Kursdetails',
          detailsList: [
            'Dauer: 2 Tage (16 Stunden)',
            'Inklusive Skript und Zertifikat',
            'Praktische Übungen',
            'Lebenslange Nachbetreuung'
          ]
        },
        reikiGrade2: {
          title: 'Reiki 2. Grad',
          subtitle: 'Mentale Heilung und Fernbehandlung',
          contents: 'Erweiterte Techniken',
          contentsList: [
            'Die drei heiligen Reiki-Symbole',
            'Mentale und emotionale Heilung',
            'Fernreiki-Techniken',
            'Vergangenheits- und Zukunftsheilung',
            'Chakra-Ausgleich',
            'Professionelle Behandlungstechniken'
          ],
          requirements: 'Voraussetzungen',
          requirementsList: [
            'Reiki 1. Grad abgeschlossen',
            'Mindestens 3 Monate Praxis',
            'Regelmäßige Selbstbehandlung',
            'Bereitschaft zur Vertiefung'
          ]
        },
        crystalTherapy: {
          title: 'Kristalltherapie-Ausbildung',
          subtitle: 'Die Heilkraft der Steine verstehen und anwenden',
          contents: 'Ausbildungsinhalte',
          contentsList: [
            'Grundlagen der Kristallheilkunde',
            'Eigenschaften verschiedener Heilsteine',
            'Chakra-Arbeit mit Kristallen',
            'Reinigung und Programmierung',
            'Behandlungstechniken',
            'Kristall-Meditation'
          ],
          included: 'Im Preis enthalten',
          includedList: [
            'Umfangreiches Skript',
            'Starter-Set mit 12 Heilsteinen',
            'Praktische Übungen',
            'Zertifikat nach Abschluss'
          ]
        },
        whyLearnWithMe: 'Warum bei mir lernen?',
        experienceCompetence: 'Erfahrung & Kompetenz',
        experienceList: [
          'Über 10 Jahre Erfahrung in der Energiearbeit',
          'Zertifizierte Reiki-Meisterin',
          'Kontinuierliche Weiterbildung',
          'Hunderte zufriedene Schüler'
        ],
        personalSupport: 'Persönliche Betreuung',
        supportList: [
          'Kleine Kursgruppen für intensive Betreuung',
          'Individuelle Lerngeschwindigkeit',
          'Lebenslange Nachbetreuung',
          'Regelmäßige Übungsgruppen'
        ]
      },
      makrameeWorkshops: {
        title: 'Makramee Workshops',
        subtitle: 'Kreative Entspannung durch Knüpfkunst',
        description1: 'Entdecken Sie die meditative Kunst des Makramee-Knüpfens. In meinen Workshops lernen Sie, wunderschöne Wandbehänge, Pflanzenampeln und Schmuck zu kreieren, während Sie gleichzeitig zur Ruhe kommen.',
        description2: 'Makramee ist nicht nur ein kreatives Hobby, sondern auch eine Form der bewegten Meditation, die Stress abbaut und die Konzentration fördert.',
        highlights: 'Workshop-Highlights',
        relaxingAtmosphere: 'Entspannte Atmosphäre',
        allMaterialsIncluded: 'Alle Materialien inklusive',
        smallGroups: 'Kleine Gruppen (max. 8 Personen)',
        workshopOffers: 'Workshop-Angebote',
        wallHanging: {
          title: 'Wandbehang Workshop',
          subtitle: 'Ihr erstes Makramee-Kunstwerk',
          whatYouLearn: 'Was Sie lernen',
          learnList: [
            'Grundknoten des Makramee',
            'Symmetrische Muster erstellen',
            'Fransen und Verzierungen',
            'Aufhängung und Finishing'
          ],
          yourProject: 'Ihr Projekt',
          projectList: [
            'Wandbehang 40x60 cm',
            'Natürliche Baumwollkordel',
            'Holzstab als Aufhängung',
            'Individuelles Design'
          ]
        },
        plantHanger: {
          title: 'Pflanzenampel Workshop',
          subtitle: 'Grüne Oase zum Aufhängen',
          features: 'Besonderheiten',
          featuresList: [
            'Verschiedene Topfgrößen möglich',
            'Stabile Knüpftechnik',
            'Verstellbare Länge',
            'Wetterfest für Balkon geeignet'
          ],
          included: 'Inklusive',
          includedList: [
            'Hochwertiges Makramee-Garn',
            'Metallring zur Aufhängung',
            'Übertopf nach Wahl',
            'Pflegeanleitung'
          ]
        },
        jewelry: {
          title: 'Makramee-Schmuck Workshop',
          subtitle: 'Einzigartige Accessoires selbst gemacht',
          projects: 'Projekte',
          projectsList: [
            'Armbänder mit Perlen',
            'Halsketten mit Anhängern',
            'Ohrringe im Boho-Stil',
            'Ringe und Fußkettchen'
          ],
          materials: 'Materialien',
          materialsList: [
            'Gewachste Baumwollkordel',
            'Naturperlen und Edelsteine',
            'Metallverschlüsse',
            'Schmuckzubehör'
          ]
        },
        meditativeEffect: 'Meditativer Effekt',
        meditativeEffectDesc: 'Das rhythmische Knüpfen wirkt beruhigend auf Geist und Seele. Viele Teilnehmer beschreiben es als "Meditation in Bewegung".',
        meditativeEffectList: [
          'Stressabbau durch repetitive Bewegungen',
          'Förderung der Konzentration',
          'Achtsamkeitstraining',
          'Kreative Selbstverwirklichung'
        ],
        suitableFor: 'Geeignet für',
        suitableForDesc: 'Meine Workshops sind für alle Altersgruppen und Erfahrungslevel geeignet. Vorkenntnisse sind nicht erforderlich.',
        suitableForList: [
          'Anfänger ohne Vorerfahrung',
          'Fortgeschrittene zur Vertiefung',
          'Stressgeplagte zur Entspannung',
          'Kreative Menschen jeden Alters'
        ],
        workshopInfo: 'Workshop-Informationen',
        schedule: 'Termine',
        scheduleList: [
          'Samstags 10:00-16:00 Uhr',
          'Sonntags 10:00-14:00 Uhr',
          'Abendworkshops nach Vereinbarung'
        ],
        included: 'Inklusive',
        includedList: [
          'Alle Materialien',
          'Werkzeuge und Zubehör',
          'Getränke und Snacks',
          'Anleitung zum Mitnehmen'
        ],
        special: 'Besonderes',
        specialList: [
          'Entspannte Atmosphäre',
          'Persönliche Betreuung',
          'Individuelle Projekte möglich',
          'Nachbetreuung bei Fragen'
        ]
      }
    },
    
    // Contact Section
    contact: {
      badge: 'Kontakt',
      title: 'Bereit für Ihre ',
      titleHighlight: 'Heilungsreise?',
      description: 'Kontaktieren Sie mich für ein persönliches Beratungsgespräch oder um einen Termin zu vereinbaren. Ich freue mich darauf, Sie kennenzulernen.',
      phone: 'Telefon',
      phoneDesc: 'Rufen Sie mich gerne an für eine persönliche Beratung',
      location: 'Standort',
      locationDesc: 'Besuchen Sie mich in meiner Praxis',
      address: [
        'Lister Hof-Oase Bronsartstr. 5',
        'Hinterhofgebäude',
        '30161 Hannover'
      ],
      hours: 'Öffnungszeiten',
      hoursDesc: 'Termine nach Vereinbarung',
      schedule: [
        'Montag - Freitag: 9:00 - 18:00',
        'Samstag: 10:00 - 16:00',
        'Sonntag: Nach Vereinbarung'
      ],
      bookAppointment: 'Termin vereinbaren',
      name: 'Name',
      namePlaceholder: 'Ihr vollständiger Name',
      telephone: 'Telefon',
      telephonePlaceholder: 'Ihre Telefonnummer',
      desiredTreatment: 'Gewünschte Behandlung',
      treatmentOptions: [
        'Bioenergetische Massage',
        'Reiki-Behandlung',
        'Kristalltherapie',
        'Fortbildungskurs',
        'Makramee Workshop',
        'Beratungsgespräch'
      ],
      message: 'Nachricht',
      messagePlaceholder: 'Beschreiben Sie Ihre Wünsche oder Fragen...',
      sendInquiry: 'Anfrage senden'
    },
    
    // Footer
    footer: {
      description: 'Ihr Weg zu ganzheitlichem Wohlbefinden durch bewährte Heilmethoden und persönliche Betreuung.',
      services: 'Leistungen',
      servicesList: [
        'Bioenergetische Massage',
        'Reiki-Behandlungen',
        'Kristalltherapie',
        'Fortbildungskurse',
        'Makramee Workshops'
      ],
      contact: 'Kontakt',
      copyright: '© 2024 Erika Natural Healing. Alle Rechte vorbehalten.'
    },
    
    // Common
    common: {
      backToServices: '← Zurück zu den Leistungen'
    }
  },
  
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      contact: 'Contact'
    },
    
    // Hero Section
    hero: {
      badge: 'Certified Reiki Master',
      title: 'Welcome to ',
      titleHighlight: 'Erika Natural Healing',
      description: 'Discover the healing power of Reiki, bioenergetic massages, and crystal therapy. I guide you on your journey to inner balance, relaxation, and holistic well-being.',
      bookAppointment: 'Book Appointment',
      discoverServices: 'Discover Services'
    },
    
    // Features
    features: {
      holisticHealing: {
        title: 'Holistic Healing',
        description: 'Bringing body, mind, and soul into harmony through proven healing methods'
      },
      crystalReiki: {
        title: 'Crystal Reiki',
        description: 'Combination of Reiki energy and the healing power of crystals'
      },
      personalCare: {
        title: 'Personal Care',
        description: 'Individual treatments tailored to your specific needs'
      }
    },
    
    // About Section
    about: {
      badge: 'About Me',
      title: 'Your ',
      titleHighlight: 'Reiki Master',
      description1: 'With years of experience in energy work and a deep passion for holistic healing, I guide people on their path to greater well-being and inner balance.',
      description2: 'My training in Reiki, bioenergetic massage, and crystal therapy enables me to develop individual treatment concepts that harmonize body, mind, and soul.',
      certifiedTraining: 'Certified Training',
      reikiMasterCert: 'Reiki Master Certificate',
      experience: 'Years of Experience',
      holisticHealing: 'Holistic Healing Methods',
      bookPersonalAppointment: 'Book Personal Appointment',
      certifiedReikiMaster: 'Certified Reiki Master'
    },
    
    // Services Section
    services: {
      badge: 'My Services',
      title: 'Healing ',
      titleHighlight: 'Treatments',
      description: 'Discover my diverse range of holistic healing methods that help you achieve greater well-being and inner balance.',
      learnMore: 'Learn More',
      personalConsultation: 'Personal Consultation',
      personalAppointments: 'Individual Appointments',
      personalAppointmentsDesc: 'All treatments are individually tailored to your needs.',
      personalAppointmentsNote: 'Appointments by arrangement',
      flexiblePackages: 'Flexible Packages',
      flexiblePackagesDesc: 'Various treatment packages for optimal results.',
      flexiblePackagesNote: 'Prices on request'
    },
    
    // Service Details
    serviceDetails: {
      bioenergetischeMassage: {
        title: 'Bioenergetic Massage',
        subtitle: 'Holistic relaxation for body and soul',
        description1: 'A bioenergetic massage is a combination of gentle oil massage and energy work. It includes chakra and aura balancing as well as stimulation of reflex zones and meridian pathways. Additionally, muscle circulation is improved, toxins are released from connective tissue, and lymph is activated.',
        description2: 'The massage has beneficial effects on circulation, nerves, breathing, digestion, urinary tract, connective tissue, as well as the immune and hormonal systems.',
        treatmentTypes: 'Treatment Types',
        fullBodyWithHead: 'Full body massage with head',
        backAndHead: 'Back and head massage',
        frontAndHead: 'Front with head',
        effectsAndBenefits: 'Effects and Benefits',
        energyFlow: 'Energy Flow',
        energyFlowDesc: 'Harmonization of chakras and activation of meridians',
        relaxation: 'Deep Relaxation',
        relaxationDesc: 'Release of tension and stress',
        regeneration: 'Regeneration',
        regenerationDesc: 'Strengthening of immune system and self-healing powers',
        suitableFor: 'Suitable For',
        suitableForList: [
          'Increasing performance capacity in work and sports',
          'For nervousness, sleep disorders, teeth grinding, and burnout',
          'For pain and tension',
          'For emotional crises like neuroses, depression, anger, and rage',
          'A path to inner peace and stability',
          'Harmonizing effect on the cardiovascular system',
          'Strengthens connective tissue',
          'After disc operations and rehabilitation',
          'For menstrual and menopausal complaints',
          'For a free and clear head',
          'Relieves headaches and migraines',
          'For Restless Legs Syndrome and heavy tired legs',
          'Increases well-being and balance'
        ],
        pricing: 'Pricing',
        duration60: '60 minutes - 60€',
        duration90: '90 minutes - 79€',
        treatmentNote: 'A treatment usually lasts 60 minutes, plus about 15-20 minutes preparation and about 10 minutes cleanup.',
        physicalBenefits: 'Physical Benefits',
        physicalBenefitsList: [
          'Helps with all digestive processes of absorption and elimination',
          'Helps with lymphatic system drainage and improves blood circulation',
          'Improves sleep quality',
          'Reduces and eliminates physical and mental exhaustion',
          'Reduces physical, mental, and emotional tension',
          'Improves psychosomatic disorders',
          'Stimulation of the immune system'
        ],
        whatIsIt: 'What is it?',
        whatIsItDesc: 'Bioenergetic massage is based on the fusion of gentle manual techniques and energetic techniques that aim to simultaneously solve our physical and emotional problems, based on the principle that an unresolved emotional problem can also cause a muscle or behavioral problem.',
        principleDesc: 'At the same time, it is based on the principle that an unresolved emotional problem can also cause a muscle or behavioral problem.',
        techniqueDesc: 'In this technique, gentle oil massages are performed.',
        meridianDesc: 'Especially through the channels that are considered energy (meridians).'
      },
      reiki: {
        title: 'Reiki',
        subtitle: 'Universal life energy for healing and balance',
        description1: 'Reiki is a Japanese healing method based on the transmission of universal life energy. Through gentle laying on of hands or distance healing, the natural energy flow in the body is harmonized and self-healing powers are activated.',
        description2: 'This holistic method works on physical, emotional, and mental levels, bringing deep relaxation and inner peace.',
        treatmentForms: 'Treatment Forms',
        directReiki: 'Direct Reiki',
        distanceReiki: 'Distance Reiki',
        crystalReikiCombo: 'Crystal-Reiki Combination',
        reikiPrinciples: 'The Five Reiki Life Rules',
        principlesIntro: 'The Reiki principles according to Dr. Mikao Usui:',
        principles: [
          'Just for today, do not anger',
          'Just for today, do not worry',
          'Just for today, be grateful',
          'Just for today, work honestly',
          'Just for today, be kind to all living beings'
        ],
        directTreatment: 'Direct Treatment',
        directTreatmentDesc: 'In direct Reiki treatment, clients lie clothed on a treatment table. Energy is transmitted through gentle laying on of hands at various body positions.',
        directTreatmentBenefits: [
          'Deep relaxation and stress reduction',
          'Activation of self-healing powers',
          'Harmonization of chakras',
          'Release of energy blockages'
        ],
        distanceTreatment: 'Distance Treatment',
        distanceTreatmentDesc: 'Reiki can also be transmitted over distance. Time and space play no role in energy transmission.',
        distanceTreatmentBenefits: [
          'Treatment possible from any location',
          'Ideal for people with limited mobility',
          'Energy transmission at agreed times',
          'Same effectiveness as direct treatment'
        ],
        reikiEffects: 'Reiki Effects',
        physicalLevel: 'Physical Level',
        physicalBenefits: [
          'Pain relief',
          'Improved circulation',
          'Strengthening of immune system',
          'Acceleration of healing processes'
        ],
        emotionalLevel: 'Emotional Level',
        emotionalBenefits: [
          'Reduction of stress and anxiety',
          'Emotional balance',
          'More serenity',
          'Inner peace'
        ]
      },
      kristalltherapie: {
        title: 'Crystal Therapy',
        subtitle: 'Healing through the power of crystals',
        description1: 'Crystal therapy uses the natural vibrations and energies of healing stones to bring body, mind, and soul into balance. Each crystal possesses unique properties and vibrational frequencies.',
        description2: 'Through targeted placement of stones on chakras or energy points, blockages are released and natural energy flow is restored.',
        popularCrystals: 'Popular Crystals',
        amethyst: 'Amethyst',
        amethystDesc: 'Calming and spiritual clarity',
        roseQuartz: 'Rose Quartz',
        roseQuartzDesc: 'Heart opening and self-love',
        clearQuartz: 'Clear Quartz',
        clearQuartzDesc: 'Amplification and purification',
        treatmentProcess: 'Treatment Process',
        consultation: 'Consultation',
        consultationDesc: 'Analysis of needs',
        placement: 'Placement',
        placementDesc: 'Laying of crystals',
        reikiStep: 'Reiki Energy',
        reikiStepDesc: 'Energy transmission',
        integration: 'Integration',
        integrationDesc: 'Follow-up discussion',
        chakraHealing: 'Chakra Healing',
        chakraHealingDesc: 'Special crystals are placed on the seven main chakras to harmonize and activate them.',
        chakraList: [
          'Root Chakra - Grounding and stability',
          'Sacral Chakra - Creativity and emotions',
          'Solar Plexus - Personal power',
          'Heart Chakra - Love and compassion',
          'Throat Chakra - Communication',
          'Third Eye - Intuition',
          'Crown Chakra - Spirituality'
        ],
        crystalMeditation: 'Crystal Meditation',
        crystalMeditationDesc: 'Guided meditations with crystals enhance the healing effect and promote deep relaxation.',
        crystalMeditationBenefits: [
          'Deepened meditation',
          'Elevated vibration',
          'Mental clarity',
          'Spiritual connection'
        ],
        applications: 'Applications',
        physical: 'Physical',
        physicalBenefits: [
          'Pain relief',
          'Energizing',
          'Detoxification',
          'Immune strengthening'
        ],
        emotional: 'Emotional',
        emotionalBenefits: [
          'Stress reduction',
          'Emotional healing',
          'Self-confidence',
          'Inner peace'
        ],
        spiritual: 'Spiritual',
        spiritualBenefits: [
          'Consciousness expansion',
          'Intuition strengthening',
          'Spiritual growth',
          'Energetic cleansing'
        ]
      },
      fortbildungskurse: {
        title: 'Training Courses',
        subtitle: 'Learn the art of energy work',
        description1: 'Discover the fascinating world of energy work and learn to heal yourself. My courses provide comprehensive knowledge and practical skills in Reiki and crystal therapy.',
        description2: 'Whether beginner or advanced - I accompany you on your path to certified energy worker with personal support and practical instruction.',
        courseFormats: 'Course Formats',
        weekendIntensive: 'Weekend intensive courses',
        individualLessons: 'Individual instruction',
        smallGroups: 'Small groups (max. 6 people)',
        availableCourses: 'Available Courses',
        reikiGrade1: {
          title: 'Reiki 1st Degree',
          subtitle: 'Basics of Reiki energy',
          contents: 'Course Contents',
          contentsList: [
            'History and philosophy of Reiki',
            'The five Reiki life rules',
            'First attunement and energy transmission',
            'Basic hand positions',
            'Self-treatment with Reiki',
            'Treatment of family and friends'
          ],
          details: 'Course Details',
          detailsList: [
            'Duration: 2 days (16 hours)',
            'Including manual and certificate',
            'Practical exercises',
            'Lifetime follow-up support'
          ]
        },
        reikiGrade2: {
          title: 'Reiki 2nd Degree',
          subtitle: 'Mental healing and distance treatment',
          contents: 'Advanced Techniques',
          contentsList: [
            'The three sacred Reiki symbols',
            'Mental and emotional healing',
            'Distance Reiki techniques',
            'Past and future healing',
            'Chakra balancing',
            'Professional treatment techniques'
          ],
          requirements: 'Requirements',
          requirementsList: [
            'Reiki 1st degree completed',
            'At least 3 months practice',
            'Regular self-treatment',
            'Willingness to deepen'
          ]
        },
        crystalTherapy: {
          title: 'Crystal Therapy Training',
          subtitle: 'Understanding and applying the healing power of stones',
          contents: 'Training Contents',
          contentsList: [
            'Basics of crystal healing',
            'Properties of various healing stones',
            'Chakra work with crystals',
            'Cleansing and programming',
            'Treatment techniques',
            'Crystal meditation'
          ],
          included: 'Included in Price',
          includedList: [
            'Comprehensive manual',
            'Starter set with 12 healing stones',
            'Practical exercises',
            'Certificate upon completion'
          ]
        },
        whyLearnWithMe: 'Why Learn With Me?',
        experienceCompetence: 'Experience & Competence',
        experienceList: [
          'Over 10 years experience in energy work',
          'Certified Reiki Master',
          'Continuous education',
          'Hundreds of satisfied students'
        ],
        personalSupport: 'Personal Support',
        supportList: [
          'Small course groups for intensive support',
          'Individual learning pace',
          'Lifetime follow-up support',
          'Regular practice groups'
        ]
      },
      makrameeWorkshops: {
        title: 'Macrame Workshops',
        subtitle: 'Creative relaxation through knotting art',
        description1: 'Discover the meditative art of macrame knotting. In my workshops, you learn to create beautiful wall hangings, plant hangers, and jewelry while finding peace at the same time.',
        description2: 'Macrame is not only a creative hobby but also a form of moving meditation that reduces stress and promotes concentration.',
        highlights: 'Workshop Highlights',
        relaxingAtmosphere: 'Relaxed atmosphere',
        allMaterialsIncluded: 'All materials included',
        smallGroups: 'Small groups (max. 8 people)',
        workshopOffers: 'Workshop Offers',
        wallHanging: {
          title: 'Wall Hanging Workshop',
          subtitle: 'Your first macrame artwork',
          whatYouLearn: 'What You Learn',
          learnList: [
            'Basic macrame knots',
            'Creating symmetrical patterns',
            'Fringes and decorations',
            'Hanging and finishing'
          ],
          yourProject: 'Your Project',
          projectList: [
            'Wall hanging 40x60 cm',
            'Natural cotton cord',
            'Wooden rod for hanging',
            'Individual design'
          ]
        },
        plantHanger: {
          title: 'Plant Hanger Workshop',
          subtitle: 'Green oasis to hang',
          features: 'Special Features',
          featuresList: [
            'Various pot sizes possible',
            'Stable knotting technique',
            'Adjustable length',
            'Weather-resistant for balcony use'
          ],
          included: 'Included',
          includedList: [
            'High-quality macrame yarn',
            'Metal ring for hanging',
            'Planter of choice',
            'Care instructions'
          ]
        },
        jewelry: {
          title: 'Macrame Jewelry Workshop',
          subtitle: 'Unique accessories handmade',
          projects: 'Projects',
          projectsList: [
            'Bracelets with beads',
            'Necklaces with pendants',
            'Boho-style earrings',
            'Rings and anklets'
          ],
          materials: 'Materials',
          materialsList: [
            'Waxed cotton cord',
            'Natural beads and gemstones',
            'Metal clasps',
            'Jewelry accessories'
          ]
        },
        meditativeEffect: 'Meditative Effect',
        meditativeEffectDesc: 'The rhythmic knotting has a calming effect on mind and soul. Many participants describe it as "meditation in motion".',
        meditativeEffectList: [
          'Stress reduction through repetitive movements',
          'Promotion of concentration',
          'Mindfulness training',
          'Creative self-realization'
        ],
        suitableFor: 'Suitable For',
        suitableForDesc: 'My workshops are suitable for all age groups and experience levels. No prior knowledge required.',
        suitableForList: [
          'Beginners without prior experience',
          'Advanced for deepening',
          'Stressed people for relaxation',
          'Creative people of all ages'
        ],
        workshopInfo: 'Workshop Information',
        schedule: 'Schedule',
        scheduleList: [
          'Saturdays 10:00-16:00',
          'Sundays 10:00-14:00',
          'Evening workshops by arrangement'
        ],
        included: 'Included',
        includedList: [
          'All materials',
          'Tools and accessories',
          'Drinks and snacks',
          'Instructions to take home'
        ],
        special: 'Special',
        specialList: [
          'Relaxed atmosphere',
          'Personal support',
          'Individual projects possible',
          'Follow-up support for questions'
        ]
      }
    },
    
    // Contact Section
    contact: {
      badge: 'Contact',
      title: 'Ready for Your ',
      titleHighlight: 'Healing Journey?',
      description: 'Contact me for a personal consultation or to schedule an appointment. I look forward to meeting you.',
      phone: 'Phone',
      phoneDesc: 'Feel free to call me for personal consultation',
      location: 'Location',
      locationDesc: 'Visit me at my practice',
      address: [
        'Lister Hof-Oase Bronsartstr. 5',
        'Backyard building',
        '30161 Hannover'
      ],
      hours: 'Hours',
      hoursDesc: 'Appointments by arrangement',
      schedule: [
        'Monday - Friday: 9:00 - 18:00',
        'Saturday: 10:00 - 16:00',
        'Sunday: By arrangement'
      ],
      bookAppointment: 'Book Appointment',
      name: 'Name',
      namePlaceholder: 'Your full name',
      telephone: 'Phone',
      telephonePlaceholder: 'Your phone number',
      desiredTreatment: 'Desired Treatment',
      treatmentOptions: [
        'Bioenergetic Massage',
        'Reiki Treatment',
        'Crystal Therapy',
        'Training Course',
        'Macrame Workshop',
        'Consultation'
      ],
      message: 'Message',
      messagePlaceholder: 'Describe your wishes or questions...',
      sendInquiry: 'Send Inquiry'
    },
    
    // Footer
    footer: {
      description: 'Your path to holistic well-being through proven healing methods and personal care.',
      services: 'Services',
      servicesList: [
        'Bioenergetic Massage',
        'Reiki Treatments',
        'Crystal Therapy',
        'Training Courses',
        'Macrame Workshops'
      ],
      contact: 'Contact',
      copyright: '© 2024 Erika Natural Healing. All rights reserved.'
    },
    
    // Common
    common: {
      backToServices: '← Back to Services'
    }
  },
  
  es: {
    // Navigation
    nav: {
      home: 'Inicio',
      about: 'Acerca de',
      services: 'Servicios',
      contact: 'Contacto'
    },
    
    // Hero Section
    hero: {
      badge: 'Maestra Reiki Certificada',
      title: 'Bienvenido a ',
      titleHighlight: 'Erika Natural Healing',
      description: 'Descubre el poder sanador del Reiki, masajes bioenergéticos y terapia con cristales. Te guío en tu camino hacia el equilibrio interior, la relajación y el bienestar holístico.',
      bookAppointment: 'Reservar Cita',
      discoverServices: 'Descubrir Servicios'
    },
    
    // Features
    features: {
      holisticHealing: {
        title: 'Sanación Holística',
        description: 'Armonizando cuerpo, mente y alma a través de métodos de sanación probados'
      },
      crystalReiki: {
        title: 'Reiki con Cristales',
        description: 'Combinación de energía Reiki y el poder sanador de los cristales'
      },
      personalCare: {
        title: 'Atención Personal',
        description: 'Tratamientos individuales adaptados a sus necesidades específicas'
      }
    },
    
    // About Section
    about: {
      badge: 'Acerca de Mí',
      title: 'Su ',
      titleHighlight: 'Maestra Reiki',
      description1: 'Con años de experiencia en trabajo energético y una profunda pasión por la sanación holística, guío a las personas en su camino hacia un mayor bienestar y equilibrio interior.',
      description2: 'Mi formación en Reiki, masaje bioenergético y terapia con cristales me permite desarrollar conceptos de tratamiento individuales que armonizan cuerpo, mente y alma.',
      certifiedTraining: 'Formación Certificada',
      reikiMasterCert: 'Certificado de Maestra Reiki',
      experience: 'Años de Experiencia',
      holisticHealing: 'Métodos de Sanación Holística',
      bookPersonalAppointment: 'Reservar Cita Personal',
      certifiedReikiMaster: 'Maestra Reiki Certificada'
    },
    
    // Services Section
    services: {
      badge: 'Mis Servicios',
      title: 'Tratamientos ',
      titleHighlight: 'Sanadores',
      description: 'Descubre mi amplia gama de métodos de sanación holística que te ayudan a lograr mayor bienestar y equilibrio interior.',
      learnMore: 'Saber Más',
      personalConsultation: 'Consulta Personal',
      personalAppointments: 'Citas Individuales',
      personalAppointmentsDesc: 'Todos los tratamientos se adaptan individualmente a sus necesidades.',
      personalAppointmentsNote: 'Citas con cita previa',
      flexiblePackages: 'Paquetes Flexibles',
      flexiblePackagesDesc: 'Varios paquetes de tratamiento para resultados óptimos.',
      flexiblePackagesNote: 'Precios bajo consulta'
    },
    
    // Service Details
    serviceDetails: {
      bioenergetischeMassage: {
        title: 'Masaje Bioenergético',
        subtitle: 'Relajación holística para cuerpo y alma',
        description1: 'Un masaje bioenergético es una combinación de masaje suave con aceite y trabajo energético. Incluye equilibrio de chakras y aura, así como estimulación de zonas reflejas y canales meridianos. Además, se mejora la circulación muscular, se liberan toxinas del tejido conectivo y se activa la linfa.',
        description2: 'El masaje tiene efectos beneficiosos en la circulación, nervios, respiración, digestión, tracto urinario, tejido conectivo, así como en los sistemas inmunológico y hormonal.',
        treatmentTypes: 'Tipos de Tratamiento',
        fullBodyWithHead: 'Masaje de cuerpo completo con cabeza',
        backAndHead: 'Masaje de espalda y cabeza',
        frontAndHead: 'Parte frontal con cabeza',
        effectsAndBenefits: 'Efectos y Beneficios',
        energyFlow: 'Flujo de Energía',
        energyFlowDesc: 'Armonización de chakras y activación de meridianos',
        relaxation: 'Relajación Profunda',
        relaxationDesc: 'Liberación de tensión y estrés',
        regeneration: 'Regeneración',
        regenerationDesc: 'Fortalecimiento del sistema inmunológico y poderes de autocuración',
        suitableFor: 'Adecuado Para',
        suitableForList: [
          'Aumentar la capacidad de rendimiento en el trabajo y deporte',
          'Para nerviosismo, trastornos del sueño, rechinar de dientes y agotamiento',
          'Para dolor y tensión',
          'Para crisis emocionales como neurosis, depresión, ira y rabia',
          'Un camino hacia la paz interior y estabilidad',
          'Efecto armonizador en el sistema cardiovascular',
          'Fortalece el tejido conectivo',
          'Después de operaciones de disco y rehabilitación',
          'Para molestias menstruales y de menopausia',
          'Para una cabeza libre y clara',
          'Alivia dolores de cabeza y migrañas',
          'Para Síndrome de Piernas Inquietas y piernas pesadas cansadas',
          'Aumenta el bienestar y equilibrio'
        ],
        pricing: 'Precios',
        duration60: '60 minutos - 60€',
        duration90: '90 minutos - 79€',
        treatmentNote: 'Un tratamiento generalmente dura 60 minutos, más unos 15-20 minutos de preparación y unos 10 minutos de limpieza.',
        physicalBenefits: 'Beneficios Físicos',
        physicalBenefitsList: [
          'Ayuda con todos los procesos digestivos de absorción y eliminación',
          'Ayuda con el drenaje del sistema linfático y mejora la circulación sanguínea',
          'Mejora la calidad del sueño',
          'Reduce y elimina el agotamiento físico y mental',
          'Reduce la tensión física, mental y emocional',
          'Mejora los trastornos psicosomáticos',
          'Estimulación del sistema inmunológico'
        ],
        whatIsIt: '¿Qué es?',
        whatIsItDesc: 'El masaje bioenergético se basa en la fusión de técnicas manuales suaves y técnicas energéticas que tienen como objetivo resolver simultáneamente nuestros problemas físicos y emocionales, basándose en el principio de que un problema emocional no resuelto también puede causar un problema muscular o de comportamiento.',
        principleDesc: 'Al mismo tiempo, se basa en el principio de que un problema emocional no resuelto también puede causar un problema muscular o de comportamiento.',
        techniqueDesc: 'En esta técnica se realizan masajes suaves con aceite.',
        meridianDesc: 'Especialmente a través de los canales que se consideran energía (meridianos).'
      },
      reiki: {
        title: 'Reiki',
        subtitle: 'Energía vital universal para sanación y equilibrio',
        description1: 'Reiki es un método de sanación japonés basado en la transmisión de energía vital universal. A través de la imposición suave de manos o sanación a distancia, se armoniza el flujo natural de energía en el cuerpo y se activan los poderes de autocuración.',
        description2: 'Este método holístico trabaja en niveles físicos, emocionales y mentales, trayendo relajación profunda y paz interior.',
        treatmentForms: 'Formas de Tratamiento',
        directReiki: 'Reiki Directo',
        distanceReiki: 'Reiki a Distancia',
        crystalReikiCombo: 'Combinación Cristal-Reiki',
        reikiPrinciples: 'Las Cinco Reglas de Vida Reiki',
        principlesIntro: 'Los principios Reiki según Dr. Mikao Usui:',
        principles: [
          'Solo por hoy, no te enojes',
          'Solo por hoy, no te preocupes',
          'Solo por hoy, sé agradecido',
          'Solo por hoy, trabaja honestamente',
          'Solo por hoy, sé amable con todos los seres vivos'
        ],
        directTreatment: 'Tratamiento Directo',
        directTreatmentDesc: 'En el tratamiento Reiki directo, los clientes se acuestan vestidos en una camilla de tratamiento. La energía se transmite a través de la imposición suave de manos en varias posiciones del cuerpo.',
        directTreatmentBenefits: [
          'Relajación profunda y reducción del estrés',
          'Activación de poderes de autocuración',
          'Armonización de chakras',
          'Liberación de bloqueos energéticos'
        ],
        distanceTreatment: 'Tratamiento a Distancia',
        distanceTreatmentDesc: 'Reiki también puede transmitirse a distancia. El tiempo y el espacio no juegan ningún papel en la transmisión de energía.',
        distanceTreatmentBenefits: [
          'Tratamiento posible desde cualquier ubicación',
          'Ideal para personas con movilidad limitada',
          'Transmisión de energía en horarios acordados',
          'Misma efectividad que el tratamiento directo'
        ],
        reikiEffects: 'Efectos del Reiki',
        physicalLevel: 'Nivel Físico',
        physicalBenefits: [
          'Alivio del dolor',
          'Mejora de la circulación',
          'Fortalecimiento del sistema inmunológico',
          'Aceleración de procesos de curación'
        ],
        emotionalLevel: 'Nivel Emocional',
        emotionalBenefits: [
          'Reducción del estrés y ansiedad',
          'Equilibrio emocional',
          'Más serenidad',
          'Paz interior'
        ]
      },
      kristalltherapie: {
        title: 'Terapia con Cristales',
        subtitle: 'Sanación a través del poder de los cristales',
        description1: 'La terapia con cristales utiliza las vibraciones naturales y energías de las piedras sanadoras para equilibrar cuerpo, mente y alma. Cada cristal posee propiedades únicas y frecuencias vibratorias.',
        description2: 'A través de la colocación dirigida de piedras en chakras o puntos energéticos, se liberan bloqueos y se restaura el flujo natural de energía.',
        popularCrystals: 'Cristales Populares',
        amethyst: 'Amatista',
        amethystDesc: 'Calma y claridad espiritual',
        roseQuartz: 'Cuarzo Rosa',
        roseQuartzDesc: 'Apertura del corazón y amor propio',
        clearQuartz: 'Cuarzo Transparente',
        clearQuartzDesc: 'Amplificación y purificación',
        treatmentProcess: 'Proceso de Tratamiento',
        consultation: 'Consulta',
        consultationDesc: 'Análisis de necesidades',
        placement: 'Colocación',
        placementDesc: 'Colocación de cristales',
        reikiStep: 'Energía Reiki',
        reikiStepDesc: 'Transmisión de energía',
        integration: 'Integración',
        integrationDesc: 'Discusión de seguimiento',
        chakraHealing: 'Sanación de Chakras',
        chakraHealingDesc: 'Se colocan cristales especiales en los siete chakras principales para armonizarlos y activarlos.',
        chakraList: [
          'Chakra Raíz - Conexión a tierra y estabilidad',
          'Chakra Sacro - Creatividad y emociones',
          'Plexo Solar - Poder personal',
          'Chakra del Corazón - Amor y compasión',
          'Chakra de la Garganta - Comunicación',
          'Tercer Ojo - Intuición',
          'Chakra Corona - Espiritualidad'
        ],
        crystalMeditation: 'Meditación con Cristales',
        crystalMeditationDesc: 'Las meditaciones guiadas con cristales mejoran el efecto sanador y promueven la relajación profunda.',
        crystalMeditationBenefits: [
          'Meditación profundizada',
          'Vibración elevada',
          'Claridad mental',
          'Conexión espiritual'
        ],
        applications: 'Aplicaciones',
        physical: 'Físico',
        physicalBenefits: [
          'Alivio del dolor',
          'Energización',
          'Desintoxicación',
          'Fortalecimiento inmunológico'
        ],
        emotional: 'Emocional',
        emotionalBenefits: [
          'Reducción del estrés',
          'Sanación emocional',
          'Autoconfianza',
          'Paz interior'
        ],
        spiritual: 'Espiritual',
        spiritualBenefits: [
          'Expansión de la conciencia',
          'Fortalecimiento de la intuición',
          'Crecimiento espiritual',
          'Limpieza energética'
        ]
      },
      fortbildungskurse: {
        title: 'Cursos de Formación',
        subtitle: 'Aprende el arte del trabajo energético',
        description1: 'Descubre el fascinante mundo del trabajo energético y aprende a sanar por ti mismo. Mis cursos proporcionan conocimiento integral y habilidades prácticas en Reiki y terapia con cristales.',
        description2: 'Ya sea principiante o avanzado, te acompaño en tu camino hacia trabajador energético certificado con apoyo personal e instrucción práctica.',
        courseFormats: 'Formatos de Curso',
        weekendIntensive: 'Cursos intensivos de fin de semana',
        individualLessons: 'Instrucción individual',
        smallGroups: 'Grupos pequeños (máx. 6 personas)',
        availableCourses: 'Cursos Disponibles',
        reikiGrade1: {
          title: 'Reiki 1er Grado',
          subtitle: 'Fundamentos de la energía Reiki',
          contents: 'Contenidos del Curso',
          contentsList: [
            'Historia y filosofía del Reiki',
            'Las cinco reglas de vida Reiki',
            'Primera sintonización y transmisión de energía',
            'Posiciones básicas de las manos',
            'Autotratamiento con Reiki',
            'Tratamiento de familia y amigos'
          ],
          details: 'Detalles del Curso',
          detailsList: [
            'Duración: 2 días (16 horas)',
            'Incluye manual y certificado',
            'Ejercicios prácticos',
            'Apoyo de seguimiento de por vida'
          ]
        },
        reikiGrade2: {
          title: 'Reiki 2do Grado',
          subtitle: 'Sanación mental y tratamiento a distancia',
          contents: 'Técnicas Avanzadas',
          contentsList: [
            'Los tres símbolos sagrados del Reiki',
            'Sanación mental y emocional',
            'Técnicas de Reiki a distancia',
            'Sanación del pasado y futuro',
            'Equilibrio de chakras',
            'Técnicas de tratamiento profesional'
          ],
          requirements: 'Requisitos',
          requirementsList: [
            'Reiki 1er grado completado',
            'Al menos 3 meses de práctica',
            'Autotratamiento regular',
            'Disposición para profundizar'
          ]
        },
        crystalTherapy: {
          title: 'Formación en Terapia con Cristales',
          subtitle: 'Entender y aplicar el poder sanador de las piedras',
          contents: 'Contenidos de Formación',
          contentsList: [
            'Fundamentos de la sanación con cristales',
            'Propiedades de varias piedras sanadoras',
            'Trabajo de chakras con cristales',
            'Limpieza y programación',
            'Técnicas de tratamiento',
            'Meditación con cristales'
          ],
          included: 'Incluido en el Precio',
          includedList: [
            'Manual integral',
            'Set inicial con 12 piedras sanadoras',
            'Ejercicios prácticos',
            'Certificado al completar'
          ]
        },
        whyLearnWithMe: '¿Por Qué Aprender Conmigo?',
        experienceCompetence: 'Experiencia y Competencia',
        experienceList: [
          'Más de 10 años de experiencia en trabajo energético',
          'Maestra Reiki certificada',
          'Educación continua',
          'Cientos de estudiantes satisfechos'
        ],
        personalSupport: 'Apoyo Personal',
        supportList: [
          'Grupos de curso pequeños para apoyo intensivo',
          'Ritmo de aprendizaje individual',
          'Apoyo de seguimiento de por vida',
          'Grupos de práctica regulares'
        ]
      },
      makrameeWorkshops: {
        title: 'Talleres de Macramé',
        subtitle: 'Relajación creativa a través del arte de anudar',
        description1: 'Descubre el arte meditativo del anudado de macramé. En mis talleres, aprendes a crear hermosos colgantes de pared, colgadores de plantas y joyería mientras encuentras paz al mismo tiempo.',
        description2: 'El macramé no es solo un pasatiempo creativo sino también una forma de meditación en movimiento que reduce el estrés y promueve la concentración.',
        highlights: 'Destacados del Taller',
        relaxingAtmosphere: 'Atmósfera relajada',
        allMaterialsIncluded: 'Todos los materiales incluidos',
        smallGroups: 'Grupos pequeños (máx. 8 personas)',
        workshopOffers: 'Ofertas de Taller',
        wallHanging: {
          title: 'Taller de Colgante de Pared',
          subtitle: 'Tu primera obra de arte de macramé',
          whatYouLearn: 'Lo Que Aprenderás',
          learnList: [
            'Nudos básicos de macramé',
            'Crear patrones simétricos',
            'Flecos y decoraciones',
            'Colgado y acabado'
          ],
          yourProject: 'Tu Proyecto',
          projectList: [
            'Colgante de pared 40x60 cm',
            'Cordón de algodón natural',
            'Vara de madera para colgar',
            'Diseño individual'
          ]
        },
        plantHanger: {
          title: 'Taller de Colgador de Plantas',
          subtitle: 'Oasis verde para colgar',
          features: 'Características Especiales',
          featuresList: [
            'Varios tamaños de maceta posibles',
            'Técnica de anudado estable',
            'Longitud ajustable',
            'Resistente al clima para uso en balcón'
          ],
          included: 'Incluido',
          includedList: [
            'Hilo de macramé de alta calidad',
            'Anillo de metal para colgar',
            'Maceta a elección',
            'Instrucciones de cuidado'
          ]
        },
        jewelry: {
          title: 'Taller de Joyería de Macramé',
          subtitle: 'Accesorios únicos hechos a mano',
          projects: 'Proyectos',
          projectsList: [
            'Pulseras con cuentas',
            'Collares con colgantes',
            'Aretes estilo boho',
            'Anillos y tobilleras'
          ],
          materials: 'Materiales',
          materialsList: [
            'Cordón de algodón encerado',
            'Cuentas naturales y gemas',
            'Cierres de metal',
            'Accesorios de joyería'
          ]
        },
        meditativeEffect: 'Efecto Meditativo',
        meditativeEffectDesc: 'El anudado rítmico tiene un efecto calmante en mente y alma. Muchos participantes lo describen como "meditación en movimiento".',
        meditativeEffectList: [
          'Reducción del estrés a través de movimientos repetitivos',
          'Promoción de la concentración',
          'Entrenamiento de atención plena',
          'Autorrealización creativa'
        ],
        suitableFor: 'Adecuado Para',
        suitableForDesc: 'Mis talleres son adecuados para todos los grupos de edad y niveles de experiencia. No se requiere conocimiento previo.',
        suitableForList: [
          'Principiantes sin experiencia previa',
          'Avanzados para profundizar',
          'Personas estresadas para relajación',
          'Personas creativas de todas las edades'
        ],
        workshopInfo: 'Información del Taller',
        schedule: 'Horario',
        scheduleList: [
          'Sábados 10:00-16:00',
          'Domingos 10:00-14:00',
          'Talleres nocturnos con cita previa'
        ],
        included: 'Incluido',
        includedList: [
          'Todos los materiales',
          'Herramientas y accesorios',
          'Bebidas y aperitivos',
          'Instrucciones para llevar a casa'
        ],
        special: 'Especial',
        specialList: [
          'Atmósfera relajada',
          'Apoyo personal',
          'Proyectos individuales posibles',
          'Apoyo de seguimiento para preguntas'
        ]
      }
    },
    
    // Contact Section
    contact: {
      badge: 'Contacto',
      title: '¿Listo para Su ',
      titleHighlight: 'Viaje de Sanación?',
      description: 'Contácteme para una consulta personal o para programar una cita. Espero conocerle.',
      phone: 'Teléfono',
      phoneDesc: 'No dude en llamarme para consulta personal',
      location: 'Ubicación',
      locationDesc: 'Visíteme en mi consulta',
      address: [
        'Lister Hof-Oase Bronsartstr. 5',
        'Edificio del patio trasero',
        '30161 Hannover'
      ],
      hours: 'Horarios',
      hoursDesc: 'Citas con cita previa',
      schedule: [
        'Lunes - Viernes: 9:00 - 18:00',
        'Sábado: 10:00 - 16:00',
        'Domingo: Con cita previa'
      ],
      bookAppointment: 'Reservar Cita',
      name: 'Nombre',
      namePlaceholder: 'Su nombre completo',
      telephone: 'Teléfono',
      telephonePlaceholder: 'Su número de teléfono',
      desiredTreatment: 'Tratamiento Deseado',
      treatmentOptions: [
        'Masaje Bioenergético',
        'Tratamiento Reiki',
        'Terapia con Cristales',
        'Curso de Formación',
        'Taller de Macramé',
        'Consulta'
      ],
      message: 'Mensaje',
      messagePlaceholder: 'Describa sus deseos o preguntas...',
      sendInquiry: 'Enviar Consulta'
    },
    
    // Footer
    footer: {
      description: 'Su camino hacia el bienestar holístico a través de métodos de sanación probados y atención personal.',
      services: 'Servicios',
      servicesList: [
        'Masaje Bioenergético',
        'Tratamientos Reiki',
        'Terapia con Cristales',
        'Cursos de Formación',
        'Talleres de Macramé'
      ],
      contact: 'Contacto',
      copyright: '© 2024 Erika Natural Healing. Todos los derechos reservados.'
    },
    
    // Common
    common: {
      backToServices: '← Volver a Servicios'
    }
  }
};