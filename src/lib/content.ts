export type Language = 'en' | 'ar' | 'de';

type Education = {
  degree: string;
  institution: string;
  year: string;
};

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
    careerAspiration: string;
    skills: string;
    technicalSkills: string;
    softSkills: string;
    education: string;
    generateResume: string;
  };
  languages: Record<Language, string>;
};

export const content: Record<Language, Content> = {
  en: {
    name: 'Ahmed Jayousi',
    title: 'Full-Stack Developer',
    location: 'Dubai, UAE',
    contact: {
      email: 'ahmed.jayousi@example.com',
      phone: '+971 50 123 4567',
    },
    links: {
      linkedin: 'https://www.linkedin.com/in/ahmedjayousi',
      github: 'https://github.com/ahmedjayousi',
      linktree: 'https://linktr.ee/ahmedjayousi',
    },
    careerAspiration:
      'Passionate full-stack developer with a drive for building innovative and high-quality applications. Eager to contribute to dynamic teams, tackle complex challenges, and stay at the forefront of technology.',
    skills: {
      technical: ['React', 'Next.js', 'Node.js', 'TypeScript', 'GraphQL', 'PostgreSQL', 'Docker', 'AWS'],
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
      careerAspiration: 'Career Aspiration',
      skills: 'Skills',
      technicalSkills: 'Technical Skills',
      softSkills: 'Soft Skills',
      education: 'Education',
      generateResume: 'Generate AI Resume',
    },
    languages: {
      en: 'English',
      ar: 'العربية',
      de: 'Deutsch',
    },
  },
  ar: {
    name: 'أحمد الجيوسي',
    title: 'مطور متكامل',
    location: 'دبي، الإمارات العربية المتحدة',
    contact: {
      email: 'ahmed.jayousi@example.com',
      phone: '+٩٧١ ٥٠ ١٢٣ ٤٥٦٧',
    },
    links: {
      linkedin: 'https://www.linkedin.com/in/ahmedjayousi',
      github: 'https://github.com/ahmedjayousi',
      linktree: 'https://linktr.ee/ahmedjayousi',
    },
    careerAspiration:
      'مطور متكامل شغوف ببناء تطبيقات مبتكرة وعالية الجودة. حريص على المساهمة في فرق ديناميكية، ومواجهة التحديات المعقدة، والبقاء في طليعة التكنولوجيا.',
    skills: {
      technical: ['React', 'Next.js', 'Node.js', 'TypeScript', 'GraphQL', 'PostgreSQL', 'Docker', 'AWS'],
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
      careerAspiration: 'الطموح الوظيفي',
      skills: 'المهارات',
      technicalSkills: 'المهارات التقنية',
      softSkills: 'المهارات الشخصية',
      education: 'التعليم',
      generateResume: 'إنشاء سيرة ذاتية بالذكاء الاصطناعي',
    },
    languages: {
      en: 'English',
      ar: 'العربية',
      de: 'Deutsch',
    },
  },
  de: {
    name: 'Ahmed Jayousi',
    title: 'Full-Stack-Entwickler',
    location: 'Dubai, VAE',
    contact: {
      email: 'ahmed.jayousi@example.com',
      phone: '+971 50 123 4567',
    },
    links: {
      linkedin: 'https://www.linkedin.com/in/ahmedjayousi',
      github: 'https://github.com/ahmedjayousi',
      linktree: 'https://linktr.ee/ahmedjayousi',
    },
    careerAspiration:
      'Leidenschaftlicher Full-Stack-Entwickler mit dem Antrieb, innovative und qualitativ hochwertige Anwendungen zu erstellen. Bestrebt, in dynamischen Teams mitzuwirken, komplexe Herausforderungen zu bewältigen und an der Spitze der Technologie zu bleiben.',
    skills: {
      technical: ['React', 'Next.js', 'Node.js', 'TypeScript', 'GraphQL', 'PostgreSQL', 'Docker', 'AWS'],
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
      careerAspiration: 'Karriereziele',
      skills: 'Fähigkeiten',
      technicalSkills: 'Technische Fähigkeiten',
      softSkills: 'Soft Skills',
      education: 'Ausbildung',
      generateResume: 'KI-Lebenslauf erstellen',
    },
    languages: {
      en: 'English',
      ar: 'العربية',
      de: 'Deutsch',
    },
  },
};
