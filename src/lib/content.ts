export type Language = 'en' | 'ar' | 'de';

type Education = {
  degree: string;
  institution: string;
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
  p1?: string;
  p2?: string;
  p3?: string;
}

export type SoftSkill = {
  name: string;
}

type Expertise = {
  title: string;
  items: string[];
}

type LanguageSkill = {
  name: string;
  level: string;
  proficiency: number;
}

type Skills = {
  expertise: Expertise[];
  soft: SoftSkill[];
  languages: LanguageSkill[];
}

type ContactContent = {
  email: string;
  phone: string;
  pitch: string;
  opportunities: string[];
  responseTime: string;
}

type Content = {
  name: string;
  title: string;
  location: string;
  contact: ContactContent;
  links: {
    linkedin: string;
    github: string;
    linktree: string;
  };
  aboutMe: AboutMe;
  careerAspiration: string;
  skills: Skills;
  education: Education[];
  headings: {
    nav: NavHeadings;
    about: string;
    careerAspiration: string;
    skills: string;
    skillsSubheading: string;
    softSkills: string;
    languages: string;
    education: string;
    getInTouch: string;
    viewProjects: string;
    letsConnect: string;
    quickActions: string;
    lookingFor: string;
    sendMessage: string;
    socialsPitch: string;
    visitLinktree: string;
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
      pitch: "Ready to collaborate or discuss opportunities? I'd love to hear from you",
      opportunities: [
        'Frontend Development',
        'Mobile App Development',
        'Full-Stack Development',
        'Game Development',
      ],
      responseTime: 'Response time: Usually within 24 hours'
    },
    links: {
      linkedin: 'https://www.linkedin.com/in/ahmedjayousi',
      github: 'https://github.com/ahmedjayousi',
      linktree: 'https://linktr.ee/ahmedjayousi',
    },
    aboutMe: {
      summary: 'Recent graduate with a passion for innovation and a commitment to technical excellence.',
      passion: 'Passionate about creating user-friendly applications and innovative digital solutions. Specialized in Flutter, JavaScript, and mobile development.',
    },
    careerAspiration:
      'To become a proficient programmer, delivering high-quality applications and creative solutions that combine technical excellence with user-centric design.',
    skills: {
      expertise: [
        { title: 'Frontend Development', items: ['HTML', 'CSS', 'JavaScript', 'Flutter', 'Responsive Design'] },
        { title: 'Backend & Programming', items: ['PHP', 'Java', 'Python', 'Laravel', 'C++', 'C#'] },
        { title: 'Mobile Development', items: ['Flutter (Dart)', 'Android Studio (Java)', 'Cross-Platform Apps'] },
        { title: 'Tools & Technologies', items: ['Git', 'Cisco Packet Tracer', 'MS Office', 'Ethernet Wiring'] },
      ],
      soft: [
        { name: 'Team Collaboration' }, { name: 'Clear Communication' }, { name: 'Problem Solving' },
        { name: 'Fast Learning' }, { name: 'Creative Thinking' }, { name: 'Detail-Oriented' },
        { name: 'Adaptable' }, { name: 'Curious' }, { name: 'Motivated' },
        { name: 'Analytical' }, { name: 'Resilient' }, { name: 'Goal-Driven' }
      ],
      languages: [
        { name: 'Arabic', level: 'Native', proficiency: 100 },
        { name: 'English', level: 'Advanced', proficiency: 85 },
        { name: 'German', level: 'Beginner', proficiency: 20 },
      ],
    },
    education: [
      {
        degree: "Bachelor's in Applied Computing",
        institution: 'Palestine Technical University - Kadoorie (PTUK)',
        training: 'PHP Course • Python AI/ML • Multiple Online Courses'
      },
    ],
    headings: {
      nav: {
        about: 'About',
        skills: 'Skills',
        contact: 'Contact',
      },
      about: 'About Me',
      careerAspiration: 'Career Aspiration',
      skills: 'Skills & Expertise',
      skillsSubheading: 'A comprehensive toolkit for modern software development',
      softSkills: 'Soft Skills',
      languages: 'Languages',
      education: 'Education',
      getInTouch: 'Get In Touch',
      viewProjects: 'View Projects',
      letsConnect: "Let's Connect",
      quickActions: 'Quick Actions',
      lookingFor: 'Looking for opportunities in:',
      sendMessage: 'Send Message',
      socialsPitch: 'Find all my social links and projects in one place',
      visitLinktree: 'Visit My Linktree',
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
      pitch: "هل أنت مستعد للتعاون أو مناقشة الفرص؟ أحب أن أسمع منك",
      opportunities: [
        'تطوير الواجهات الأمامية',
        'تطوير تطبيقات الموبايل',
        'تطوير متكامل',
        'تطوير الألعاب',
      ],
      responseTime: 'وقت الاستجابة: عادة في غضون 24 ساعة'
    },
    links: {
      linkedin: 'https://www.linkedin.com/in/ahmedjayousi',
      github: 'https://github.com/ahmedjayousi',
      linktree: 'https://linktr.ee/ahmedjayousi',
    },
    aboutMe: {
        summary: 'خريج حديث شغوف بالابتكار وملتزم بالتميز التقني.',
        passion: 'شغوف بإنشاء تطبيقات سهلة الاستخدام وحلول رقمية مبتكرة. متخصص في Flutter و JavaScript وتطوير الموبايل.',
    },
    careerAspiration:
      'أن أصبح مبرمجًا محترفًا ، وأقدم تطبيقات عالية الجودة وحلولًا إبداعية تجمع بين التميز التقني والتصميم المرتكز على المستخدم.',
    skills: {
      expertise: [
        { title: 'تطوير الواجهات الأمامية', items: ['HTML', 'CSS', 'JavaScript', 'Flutter', 'تصميم متجاوب'] },
        { title: 'البرمجة والخلفية', items: ['PHP', 'Java', 'Python', 'Laravel', 'C++', 'C#'] },
        { title: 'تطوير الموبايل', items: ['Flutter (Dart)', 'Android Studio (Java)', 'تطبيقات متعددة المنصات'] },
        { title: 'الأدوات والتقنيات', items: ['Git', 'Cisco Packet Tracer', 'MS Office', 'Ethernet Wiring'] },
      ],
      soft: [
        { name: 'التعاون ضمن الفريق' }, { name: 'تواصل واضح' }, { name: 'حل المشاكل' },
        { name: 'تعلم سريع' }, { name: 'تفكير إبداعي' }, { name: 'موجه نحو التفاصيل' },
        { name: 'قابل للتكيف' }, { name: 'فضولي' }, { name: 'متحفز' },
        { name: 'تحليلي' }, { name: 'مرن' }, { name: 'موجه نحو الهدف' }
      ],
      languages: [
        { name: 'العربية', level: 'لغة أم', proficiency: 100 },
        { name: 'الإنجليزية', level: 'متقدم', proficiency: 85 },
        { name: 'الألمانية', level: 'مبتدئ', proficiency: 20 },
      ],
    },
    education: [
      {
        degree: 'بكالوريوس في الحوسبة التطبيقية',
        institution: 'جامعة فلسطين التقنية - خضوري',
        training: 'دورة PHP • Python AI/ML • دورات متعددة عبر الإنترنت'
      },
    ],
    headings: {
      nav: {
        about: 'حول',
        skills: 'المهارات',
        contact: 'اتصل',
      },
      about: 'عني',
      careerAspiration: 'الطموح الوظيفي',
      skills: 'المهارات والخبرات',
      skillsSubheading: 'مجموعة أدوات شاملة لتطوير البرمجيات الحديثة',
      softSkills: 'المهارات الشخصية',
      languages: 'اللغات',
      education: 'التعليم',
      getInTouch: 'تواصل معي',
      viewProjects: 'عرض المشاريع',
      letsConnect: "دعنا نتواصل",
      quickActions: 'إجراءات سريعة',
      lookingFor: 'أبحث عن فرص في:',
      sendMessage: 'إرسال رسالة',
      socialsPitch: 'ابحث عن جميع روابطي الاجتماعية ومشاريعي في مكان واحد',
      visitLinktree: 'زيارة Linktree الخاص بي',
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
      pitch: "Bereit zur Zusammenarbeit oder zur Besprechung von Möglichkeiten? Ich würde gerne von Ihnen hören",
      opportunities: [
        'Frontend-Entwicklung',
        'Mobile-App-Entwicklung',
        'Full-Stack-Entwicklung',
        'Spieleentwicklung',
      ],
      responseTime: 'Antwortzeit: Normalerweise innerhalb von 24 Stunden'
    },
    links: {
      linkedin: 'https://www.linkedin.com/in/ahmedjayousi',
      github: 'https://github.com/ahmedjayousi',
      linktree: 'https://linktr.ee/ahmedjayousi',
    },
    aboutMe: {
        summary: 'Absolvent mit einer Leidenschaft für Innovation und einem Bekenntnis zu technischer Exzellenz.',
        passion: 'Leidenschaft für die Entwicklung benutzerfreundlicher Anwendungen und innovativer digitaler Lösungen. Spezialisiert auf Flutter, JavaScript und mobile Entwicklung.',
    },
    careerAspiration:
      'Ein kompetenter Programmierer zu werden, der hochwertige Anwendungen und kreative Lösungen liefert, die technische Exzellenz mit benutzerzentriertem Design verbinden.',
    skills: {
      expertise: [
        { title: 'Frontend-Entwicklung', items: ['HTML', 'CSS', 'JavaScript', 'Flutter', 'Responsive Design'] },
        { title: 'Backend & Programmierung', items: ['PHP', 'Java', 'Python', 'Laravel', 'C++', 'C#'] },
        { title: 'Mobile Entwicklung', items: ['Flutter (Dart)', 'Android Studio (Java)', 'Cross-Platform-Apps'] },
        { title: 'Tools & Technologien', items: ['Git', 'Cisco Packet Tracer', 'MS Office', 'Ethernet Wiring'] },
      ],
      soft: [
        { name: 'Teamarbeit' }, { name: 'Klare Kommunikation' }, { name: 'Problemlösung' },
        { name: 'Schnelles Lernen' }, { name: 'Kreatives Denken' }, { name: 'Detailorientiert' },
        { name: 'Anpassungsfähig' }, { name: 'Neugierig' }, { name: 'Motiviert' },
        { name: 'Analytisch' }, { name: 'Belastbar' }, { name: 'Zielorientiert' }
      ],
      languages: [
        { name: 'Arabisch', level: 'Muttersprache', proficiency: 100 },
        { name: 'Englisch', level: 'Fortgeschritten', proficiency: 85 },
        { name: 'Deutsch', level: 'Anfänger', proficiency: 20 },
      ],
    },
    education: [
      {
        degree: 'B.Sc. in Angewandter Informatik',
        institution: 'Palästinensische Technische Universität - Kadoorie (PTUK)',
        training: 'PHP-Kurs • Python AI/ML • Mehrere Online-Kurse'
      },
    ],
    headings: {
      nav: {
        about: 'Über mich',
        skills: 'Fähigkeiten',
        contact: 'Kontakt',
      },
      about: 'Über mich',
      careerAspiration: 'Karriereziele',
      skills: 'Fähigkeiten & Kenntnisse',
      skillsSubheading: 'Ein umfassendes Toolkit für die moderne Softwareentwicklung',
      softSkills: 'Soft Skills',
      languages: 'Sprachen',
      education: 'Ausbildung',
      getInTouch: 'Kontakt aufnehmen',
      viewProjects: 'Projekte ansehen',
      letsConnect: "Lass uns verbinden",
      quickActions: 'Schnelle Aktionen',
      lookingFor: 'Suche nach Möglichkeiten in:',
      sendMessage: 'Nachricht senden',
      socialsPitch: 'Finden Sie alle meine sozialen Links und Projekte an einem Ort',
      visitLinktree: 'Besuchen Sie mein Linktree',
    },
    languages: {
      en: 'English',
      ar: 'العربية',
      de: 'Deutsch',
    },
  },
};
