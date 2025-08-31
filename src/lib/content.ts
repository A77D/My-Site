export type Language = 'en' | 'ar' | 'de';

type Education = {
  degree: string;
  institution: string;
  year: string;
  training?: string;
};

type NavHeadings = {
  about: string;
  skills: string;
  contact: string;
}

type AboutMe = {
  summary: string;
  passion: string;
  p1: string;
  p2: string;
  p3: string;
  attributes: string[];
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
  aboutMe: AboutMe;
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
    aboutMe: {
      summary: 'Recent graduate with a passion for innovation and a commitment to technical excellence.',
      passion: 'Passionate about creating user-friendly applications and innovative digital solutions. Specialized in Flutter, JavaScript, and mobile development.',
      p1: "Recent graduate in Applied Computing with a strong foundation in programming languages and software concepts.",
      p2: "I'm passionate about mobile programming and game development, with a focus on user-friendly applications and innovative digital solutions.",
      p3: "Enthusiastic about lifelong learning and staying at the forefront of technological advancements, looking to contribute to innovative teams and make a meaningful impact in the tech industry.",
      attributes: ["Problem Solver", "Fast Learner", "Team Player", "Creative Thinker", "Detail-Oriented", "Adaptable", "Curious", "Motivated", "Analytical", "Resilient", "Open-Minded", "Goal-Driven"]
    },
    careerAspiration:
      'To become a proficient programmer, delivering high-quality applications and creative solutions that combine technical excellence with user-centric design.',
    skills: {
      technical: ['Flutter', 'JavaScript', 'React', 'Next.js', 'Node.js', 'TypeScript', 'GraphQL', 'PostgreSQL', 'Docker', 'AWS'],
      soft: ['Problem Solving', 'Team Collaboration', 'Agile Methodologies', 'Communication', 'Creativity'],
    },
    education: [
      {
        degree: "Bachelor's in Applied Computing",
        institution: 'Palestine Technical University - Kadoorie (PTUK)',
        year: '2018 - 2022',
        training: 'PHP Course • Python AI/ML • Multiple Online Courses'
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
    aboutMe: {
        summary: 'خريج حديث شغوف بالابتكار وملتزم بالتميز التقني.',
        passion: 'شغوف بإنشاء تطبيقات سهلة الاستخدام وحلول رقمية مبتكرة. متخصص في Flutter و JavaScript وتطوير الموبايل.',
        p1: "خريج حديث في الحوسبة التطبيقية مع أساس قوي في لغات البرمجة ومفاهيم البرمجيات.",
        p2: "أنا متحمس لبرمجة الموبايل وتطوير الألعاب ، مع التركيز على التطبيقات سهلة الاستخدام والحلول الرقمية المبتكرة.",
        p3: "متحمس للتعلم مدى الحياة والبقاء في طليعة التطورات التكنولوجية ، وأتطلع إلى المساهمة في فرق مبتكرة وإحداث تأثير هادف في صناعة التكنولوجيا.",
        attributes: ["حل المشاكل", "متعلم سريع", "لاعب فريق", "مفكر مبدع", "موجه نحو التفاصيل", "قابل للتكيف", "فضولي", "متحفز", "تحليلي", "مرن", "منفتح", "موجه نحو الهدف"]
    },
    careerAspiration:
      'أن أصبح مبرمجًا محترفًا ، وأقدم تطبيقات عالية الجودة وحلولًا إبداعية تجمع بين التميز التقني والتصميم المرتكز على المستخدم.',
    skills: {
      technical: ['Flutter', 'JavaScript', 'React', 'Next.js', 'Node.js', 'TypeScript', 'GraphQL', 'PostgreSQL', 'Docker', 'AWS'],
      soft: ['حل المشاكل', 'التعاون ضمن الفريق', 'المنهجيات الرشيقة', 'التواصل', 'الإبداع'],
    },
    education: [
      {
        degree: 'بكالوريوس في الحوسبة التطبيقية',
        institution: 'جامعة فلسطين التقنية - خضوري',
        year: '٢٠١٨ - ٢٠٢٢',
        training: 'دورة PHP • Python AI/ML • دورات متعددة عبر الإنترنت'
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
    aboutMe: {
        summary: 'Absolvent mit einer Leidenschaft für Innovation und einem Bekenntnis zu technischer Exzellenz.',
        passion: 'Leidenschaft für die Entwicklung benutzerfreundlicher Anwendungen und innovativer digitaler Lösungen. Spezialisiert auf Flutter, JavaScript und mobile Entwicklung.',
        p1: "Absolvent der Angewandten Informatik mit einer soliden Grundlage in Programmiersprachen und Softwarekonzepten.",
        p2: "Ich begeistere mich für mobile Programmierung und Spieleentwicklung mit Fokus auf benutzerfreundliche Anwendungen und innovative digitale Lösungen.",
        p3: "Begeistert vom lebenslangen Lernen und dem Bleiben an der Spitze der technologischen Fortschritte, möchte ich zu innovativen Teams beitragen und einen bedeutenden Einfluss auf die Tech-Branche ausüben.",
        attributes: ["Problemlöser", "Schneller Lerner", "Teamplayer", "Kreativer Denker", "Detailorientiert", "Anpassungsfähig", "Neugierig", "Motiviert", "Analytisch", "Belastbar", "Aufgeschlossen", "Zielorientiert"]
    },
    careerAspiration:
      'Ein kompetenter Programmierer zu werden, der hochwertige Anwendungen und kreative Lösungen liefert, die technische Exzellenz mit benutzerzentriertem Design verbinden.',
    skills: {
      technical: ['Flutter', 'JavaScript', 'React', 'Next.js', 'Node.js', 'TypeScript', 'GraphQL', 'PostgreSQL', 'Docker', 'AWS'],
      soft: ['Problemlösung', 'Teamzusammenarbeit', 'Agile Methoden', 'Kommunikation', 'Kreativität'],
    },
    education: [
      {
        degree: 'B.Sc. in Angewandter Informatik',
        institution: 'Palästinensische Technische Universität - Kadoorie (PTUK)',
        year: '2018 - 2022',
        training: 'PHP-Kurs • Python AI/ML • Mehrere Online-Kurse'
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
