export type Language = 'en' | 'ar' | 'de';

type Education = {
  degree: string;
  institution: string;
  year: string;
};

type NavHeadings = {
  about: string;
  skills: string;
  contact: string;
}

type Content = {
  name: string;
  title: string;
  location: string;
  contact: {
    email: string;
    phone: string;
  };
  links: {
    linkedin: string;
    github: string;
    linktree: string;
  };
  careerAspiration: string;
  skills: {
    technical: string[];
    soft: string[];
  };
  education: Education[];
  headings: {
    nav: NavHeadings,
    careerAspiration: string;
    skills: string;
    technicalSkills: string;
    softSkills: string;
    education: string;
    generateResume: string;
    getInTouch: string;
    viewProjects: string;
  };
  languages: Record<Language, string>;
};

export const content: Record<Language, Content> = {
  en: {
    name: 'Ahmed Jayousi',
    title: 'Frontend & Mobile Developer',
    location: 'Tulkarem, Palestine',
    contact: {
      email: 'ahmad20jayyousi@gmail.com',
      phone: '+970 597 320 456',
    },
    links: {
      linkedin: 'https://www.linkedin.com/in/ahmedjayousi',
      github: 'https://github.com/ahmedjayousi',
      linktree: 'https://linktr.ee/ahmedjayousi',
    },
    careerAspiration:
      'Passionate about creating user-friendly applications and innovative digital solutions. Specialized in Flutter, JavaScript, and mobile development.',
    skills: {
      technical: ['Flutter', 'JavaScript', 'React', 'Next.js', 'Node.js', 'TypeScript', 'GraphQL', 'PostgreSQL', 'Docker', 'AWS'],
      soft: ['Problem Solving', 'Team Collaboration', 'Agile Methodologies', 'Communication', 'Creativity'],
    },
    education: [
      {
        degree: 'B.Sc. in Computer Science',
        institution: 'University of Innovation',
        year: '2018 - 2022',
      },
    ],
    headings: {
      nav: {
        about: 'About',
        skills: 'Skills',
        contact: 'Contact',
      },
      careerAspiration: 'Career Aspiration',
      skills: 'Skills',
      technicalSkills: 'Technical Skills',
      softSkills: 'Soft Skills',
      education: 'Education',
      generateResume: 'Generate AI Resume',
      getInTouch: 'Get In Touch',
      viewProjects: 'View Projects'
    },
    languages: {
      en: 'English',
      ar: 'العربية',
      de: 'Deutsch',
    },
  },
  ar: {
    name: 'أحمد الجيوسي',
    title: 'مطور واجهات أمامية وموبايل',
    location: 'طولكرم، فلسطين',
    contact: {
      email: 'ahmad20jayyousi@gmail.com',
      phone: '+٩٧٠ ٥٩٧ ٣٢٠ ٤٥٦',
    },
    links: {
      linkedin: 'https://www.linkedin.com/in/ahmedjayousi',
      github: 'https://github.com/ahmedjayousi',
      linktree: 'https://linktr.ee/ahmedjayousi',
    },
    careerAspiration:
      'شغوف بإنشاء تطبيقات سهلة الاستخدام وحلول رقمية مبتكرة. متخصص في Flutter و JavaScript وتطوير الموبايل.',
    skills: {
      technical: ['Flutter', 'JavaScript', 'React', 'Next.js', 'Node.js', 'TypeScript', 'GraphQL', 'PostgreSQL', 'Docker', 'AWS'],
      soft: ['حل المشاكل', 'التعاون ضمن الفريق', 'المنهجيات الرشيقة', 'التواصل', 'الإبداع'],
    },
    education: [
      {
        degree: 'بكالوريوس في علوم الحاسوب',
        institution: 'جامعة الابتكار',
        year: '٢٠١٨ - ٢٠٢٢',
      },
    ],
    headings: {
      nav: {
        about: 'حول',
        skills: 'المهارات',
        contact: 'اتصل',
      },
      careerAspiration: 'الطموح الوظيفي',
      skills: 'المهارات',
      technicalSkills: 'المهارات التقنية',
      softSkills: 'المهارات الشخصية',
      education: 'التعليم',
      generateResume: 'إنشاء سيرة ذاتية بالذكاء الاصطناعي',
      getInTouch: 'تواصل معي',
      viewProjects: 'عرض المشاريع'
    },
    languages: {
      en: 'English',
      ar: 'العربية',
      de: 'Deutsch',
    },
  },
  de: {
    name: 'Ahmed Jayousi',
    title: 'Frontend- und Mobil-Entwickler',
    location: 'Tulkarem, Palästina',
    contact: {
      email: 'ahmad20jayyousi@gmail.com',
      phone: '+970 597 320 456',
    },
    links: {
      linkedin: 'https://www.linkedin.com/in/ahmedjayousi',
      github: 'https://github.com/ahmedjayousi',
      linktree: 'https://linktr.ee/ahmedjayousi',
    },
    careerAspiration:
      'Leidenschaft für die Entwicklung benutzerfreundlicher Anwendungen und innovativer digitaler Lösungen. Spezialisiert auf Flutter, JavaScript und mobile Entwicklung.',
    skills: {
      technical: ['Flutter', 'JavaScript', 'React', 'Next.js', 'Node.js', 'TypeScript', 'GraphQL', 'PostgreSQL', 'Docker', 'AWS'],
      soft: ['Problemlösung', 'Teamzusammenarbeit', 'Agile Methoden', 'Kommunikation', 'Kreativität'],
    },
    education: [
      {
        degree: 'B.Sc. in Informatik',
        institution: 'Universität für Innovation',
        year: '2018 - 2022',
      },
    ],
    headings: {
      nav: {
        about: 'Über mich',
        skills: 'Fähigkeiten',
        contact: 'Kontakt',
      },
      careerAspiration: 'Karriereziele',
      skills: 'Fähigkeiten',
      technicalSkills: 'Technische Fähigkeiten',
      softSkills: 'Soft Skills',
      education: 'Ausbildung',
      generateResume: 'KI-Lebenslauf erstellen',
      getInTouch: 'Kontakt aufnehmen',
      viewProjects: 'Projekte ansehen'
    },
    languages: {
      en: 'English',
      ar: 'العربية',
      de: 'Deutsch',
    },
  },
};
