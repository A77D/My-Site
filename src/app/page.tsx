import { Button } from '@/components/ui/button';
import { Mail, Phone, Briefcase, MapPin, Code, Zap, Globe, ChevronsRight, BrainCircuit, Users, Target, Rocket, GraduationCap, Award, Database, Smartphone, Wrench, MessageCircle, Lightbulb, Zap as ZapIcon, Eye, TrendingUp, Shield, AtSign, Languages as LanguagesIcon, ChevronRight, Send, ExternalLink, CalendarDays } from 'lucide-react';
import type { Language, SoftSkill } from '@/lib/content';
import { content } from '@/lib/content';
import Link from 'next/link';
import LanguageSwitcher from '@/components/language-switcher';
import { GithubIcon, LinktreeIcon } from '@/components/icons';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import React from 'react';
import { FacebookIcon, InstagramIcon, XIcon, DiscordIcon } from '@/components/social-icons';


type PageProps = {
  searchParams?: {
    lang?: Language;
  };
};

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

const softSkillIcons: Record<SoftSkill['name'], React.ElementType> = {
  'Team Collaboration': Users,
  'Clear Communication': MessageCircle,
  'Problem Solving': Lightbulb,
  'Fast Learning': ZapIcon,
  'Creative Thinking': BrainCircuit,
  'Detail-Oriented': Eye,
  'Adaptable': Globe,
  'Curious': AtSign,
  'Motivated': Rocket,
  'Analytical': TrendingUp,
  'Resilient': Shield,
  'Goal-Driven': Target,
};

const expertiseIcons: Record<string, React.ElementType> = {
  'Frontend Development': Globe,
  'Backend & Programming': Database,
  'Mobile Development': Smartphone,
  'Tools & Technologies': Wrench,
};

const socialLinks = [
  { name: 'GitHub', icon: GithubIcon, url: 'https://github.com/A77D', gradient: 'from-gray-700 to-gray-900', border: 'border-gray-600/50' },
  { name: 'LinkedIn', icon: (props: any) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>, url: 'https://www.linkedin.com/in/a7madjay2k/', gradient: 'from-blue-600 to-blue-800', border: 'border-blue-500/50' },
  { name: 'Facebook', icon: FacebookIcon, url: 'https://web.facebook.com/ahmad.jay2k/', gradient: 'from-blue-500 to-blue-700', border: 'border-blue-400/50' },
  { name: 'Instagram', icon: InstagramIcon, url: 'https://www.instagram.com/ja.a7mad/', gradient: 'from-pink-500 via-red-500 to-yellow-500', border: 'border-red-500/50' },
  { name: 'X', icon: XIcon, url: 'https://x.com/a7madjay2k', gradient: 'from-gray-800 to-black', border: 'border-gray-700/50' },
  { name: 'Discord', icon: DiscordIcon, url: 'https://discord.gg/cjBpKjWUyr', gradient: 'from-indigo-600 to-indigo-800', border: 'border-indigo-500/50' },
];

export default function Home({ searchParams }: PageProps) {
  const lang = searchParams?.lang || 'en';
  const c = content[lang];
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  const contactItems = [
    { icon: Mail, label: 'Email', value: c.contact.email, href: `mailto:${c.contact.email}` },
    { icon: Phone, label: 'Phone', value: c.contact.phone, href: 'https://wa.me/970597320456' },
    { icon: (props: any) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>, label: 'LinkedIn', value: 'a7madjay2k', href: c.links.linkedin },
    { icon: GithubIcon, label: 'GitHub', value: 'A77D', href: c.links.github },
  ];

  return (
    <div dir={dir} className="min-h-screen flex flex-col text-foreground font-body antialiased relative">
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <clipPath id="squircleClip" clipPathUnits="objectBoundingBox">
            <path d="M 0,0.5 C 0,0 0,0 0.5,0 S 1,0 1,0.5 1,1 0.5,1 0,1 0,0.5"></path>
          </clipPath>
          <filter width="300%" x="-100%" height="300%" y="-100%" id="unopaq">
            <feColorMatrix
              values="1 0 0 0 0 
                      0 1 0 0 0 
                      0 0 1 0 0 
                      0 0 0 9 0"
            ></feColorMatrix>
          </filter>
          <filter width="300%" x="-100%" height="300%" y="-100%" id="unopaq2">
            <feColorMatrix
              values="1 0 0 0 0 
                      0 1 0 0 0 
                      0 0 1 0 0 
                      0 0 0 3 0"
            ></feColorMatrix>
          </filter>
          <filter width="300%" x="-100%" height="300%" y="-100%" id="unopaq3">
            <feColorMatrix
              values="1 0 0 0.2 0 
                      0 1 0 0.2 0 
                      0 0 1 0.2 0 
                      0 0 0 2 0"
            ></feColorMatrix>
          </filter>
        </defs>
      </svg>
      <div className="background-container"></div>
      <div className="relative z-10 flex flex-col flex-grow">
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm">
          <nav className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="bg-primary/20 border border-primary/50 text-primary rounded-full h-10 w-10 flex items-center justify-center font-bold text-lg">
                AJ
              </div>
              <span className="font-bold text-lg hidden sm:block">{c.name}</span>
            </Link>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {c.headings.nav[link.label.toLowerCase() as keyof typeof c.headings.nav]}
                  </a>
                ))}
              </div>
              <LanguageSwitcher currentLang={lang} />
            </div>
          </nav>
        </header>

        <main className="flex-grow">
          {/* Hero Section */}
          <section id="home" className="min-h-screen flex items-center justify-center text-center py-24">
            <div className="container mx-auto max-w-4xl px-4">
              <div className="flex justify-center mb-4">
                 <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm border border-primary/20">
                  <MapPin className="h-4 w-4" />
                  <span>{c.location}</span>
                </div>
              </div>

              <h1 className="font-headline text-5xl md:text-7xl font-black tracking-tighter mb-4">
                <span className="animated-text">
                  {c.name}
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium mb-6">{c.title}</h2>
              
              <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed mb-8">{c.aboutMe.summary}</p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
                <a href="#contact" className="relative">
                  <button className="new-real-button"></button>
                  <div className="new-backdrop"></div>
                  <div className="new-button-container">
                    <div className="new-spin new-spin-blur"></div>
                    <div className="new-spin new-spin-intense"></div>
                    <div className="new-backdrop"></div>
                    <div className="new-button-border">
                      <div className="new-spin new-spin-inside"></div>
                      <div className="new-button">
                        <div className="flex items-center gap-2">
                          <Send />
                          <span>{c.headings.getInTouch}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href={c.links.github} target="_blank" rel="noopener noreferrer" className="relative">
                  <button className="new-real-button"></button>
                  <div className="new-backdrop"></div>
                  <div className="new-button-container">
                    <div className="new-spin new-spin-blur"></div>
                    <div className="new-spin new-spin-intense"></div>
                    <div className="new-backdrop"></div>
                    <div className="new-button-border">
                      <div className="new-spin new-spin-inside"></div>
                      <div className="new-button">
                        <div className="flex items-center gap-2">
                          <Briefcase />
                          <span>{c.headings.viewProjects}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              
              <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a href={`mailto:${c.contact.email}`} className="hover:text-primary transition-colors">{c.contact.email}</a>
                </div>
                <div className="hidden sm:block text-muted-foreground/50">•</div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <a href="https://wa.me/970597320456" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">{c.contact.phone}</a>
                </div>
              </div>
            </div>
          </section>

          {/* About Me Section */}
          <section id="about" className="py-24 bg-card/50">
            <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-primary">{c.headings.about}</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">{c.aboutMe.passion}</p>
              </div>

              <div className="grid md:grid-cols-5 gap-8">
                <div className="md:col-span-3 text-lg text-muted-foreground space-y-6">
                   <p>Recent graduate in <span className="text-primary">Applied Computing</span> with a strong foundation in programming languages and software concepts.</p>
                  <p>I'm passionate about <span className="text-primary">mobile programming and game development</span>, with a focus on user-friendly applications and innovative digital solutions.</p>
                  <p>Enthusiastic about <span className="text-primary">lifelong learning</span> and staying at the forefront of technological advancements, looking to contribute to <span className="text-primary">innovative teams</span> and make a meaningful impact in the tech industry.</p>
                </div>

                <div className="md:col-span-2 space-y-8">
                  <Card className="bg-background/50 border-border">
                    <CardHeader className="flex-row items-center gap-4 space-y-0 pb-4">
                      <GraduationCap className="h-8 w-8 text-primary"/>
                      <CardTitle className="text-primary">{c.headings.education}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {c.education.map((edu, index) => (
                        <div key={index} className={index > 0 ? 'mt-4' : ''}>
                          <h3 className="font-semibold text-card-foreground">{edu.degree}</h3>
                          <p className="text-muted-foreground">{edu.institution}</p>
                          {edu.training && (
                            <div className="mt-4">
                              <h4 className="font-semibold text-card-foreground">Additional Training</h4>
                              <p className="text-sm text-muted-foreground">{edu.training}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card className="bg-background/50 border-border">
                    <CardHeader className="flex-row items-center gap-4 space-y-0 pb-4">
                      <Award className="h-8 w-8 text-primary"/>
                      <CardTitle className="text-primary">{c.headings.careerAspiration}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">To become a <span className="text-primary font-semibold">proficient programmer</span>, delivering high-quality applications and creative solutions that combine <span className="text-primary font-semibold">technical excellence</span> with <span className="text-primary font-semibold">user-centric design</span>.</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-24">
            <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">{c.headings.skills}</span>
                </h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">{c.headings.skillsSubheading}</p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-8 mb-8">
                {c.skills.expertise.map((exp, index) => {
                  const Icon = expertiseIcons[exp.title];
                  return (
                    <div key={index} className="skill-card">
                      <div className="skill-card-content">
                        <div className="back">
                          <div className="back-content">
                            {Icon && <Icon className="h-10 w-10 mb-2" />}
                            <strong className="text-xl font-bold text-center">{exp.title}</strong>
                          </div>
                        </div>
                        <div className="front">
                           <div className="front-content">
                              <div className="flex-grow">
                                  <h3 className="text-lg font-bold text-primary mb-4">{exp.title}</h3>
                                  <ul className="space-y-2 text-sm text-left">
                                    {exp.items.map((item, i) => (
                                      <li key={i} className="flex items-center gap-2">
                                        <ChevronRight className="h-4 w-4 text-primary shrink-0" />
                                        <span>{item}</span>
                                      </li>
                                    ))}
                                  </ul>
                              </div>
                           </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="skill-card-large">
                  <div className="skill-card-content">
                    <div className="back">
                      <div className="back-content">
                        <Users className="h-10 w-10 mb-2" />
                        <strong className="text-xl font-bold">{c.headings.softSkills}</strong>
                      </div>
                    </div>
                    <div className="front">
                      <div className="front-content p-6">
                        <CardHeader className="flex-row items-center gap-4 space-y-0 p-0 mb-4">
                          <Users className="h-8 w-8 text-primary"/>
                          <CardTitle className="text-primary text-lg font-bold">{c.headings.softSkills}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-4">
                            {c.skills.soft.map((skill, index) => {
                              const Icon = softSkillIcons[skill.name];
                              return (
                                <div key={index} className="flex items-center gap-3">
                                  {Icon && <Icon className="h-6 w-6 text-primary" />}
                                  <span className="font-medium">{skill.name}</span>
                                </div>
                              )
                            })}
                          </div>
                        </CardContent>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="skill-card-large">
                  <div className="skill-card-content">
                    <div className="back">
                      <div className="back-content">
                        <LanguagesIcon className="h-10 w-10 mb-2" />
                        <strong className="text-xl font-bold text-center">{c.headings.languages}</strong>
                      </div>
                    </div>
                    <div className="front">
                      <div className="front-content p-6">
                        <CardHeader className="flex-row items-center gap-4 space-y-0 p-0 mb-4">
                          <LanguagesIcon className="h-8 w-8 text-primary"/>
                          <CardTitle className="text-primary text-lg font-bold">{c.headings.languages}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                          <ul className="space-y-4">
                            {c.skills.languages.map((lang, index) => (
                              <li key={index}>
                                <div className="flex justify-between items-center mb-1">
                                  <span className="font-semibold text-card-foreground">{lang.name}</span>
                                  <span className="text-sm text-muted-foreground">{lang.level}</span>
                                </div>
                                <Progress value={lang.proficiency} className="h-2 [&>div]:bg-primary" />
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-24 bg-card/50">
            <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-primary">{c.headings.letsConnect}</h2>
                <p className="mt-4 text-lg text-muted-foreground">{c.contact.pitch}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {/* Left Card */}
                <Card className="bg-background/50 border-border p-6 md:p-8">
                  <CardHeader className="flex-row items-center gap-4 p-0 mb-6">
                    <Send className="h-6 w-6 text-primary" />
                    <CardTitle className="text-xl text-primary">{c.headings.getInTouch}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 space-y-6">
                    {contactItems.map((item, index) => (
                      <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                        <div className="bg-primary/10 text-primary p-3 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <item.icon className="h-5 w-5" />
                        </div>
                        <div className="flex-grow">
                          <p className="font-semibold text-card-foreground">{item.label}</p>
                          <p className="text-muted-foreground group-hover:text-primary transition-colors">{item.value}</p>
                        </div>
                        <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </a>
                    ))}
                     <div className="flex items-center gap-4">
                        <div className="bg-primary/10 text-primary p-3 rounded-lg">
                          <MapPin className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-semibold text-card-foreground">{c.location}</p>
                        </div>
                      </div>
                  </CardContent>
                </Card>

                {/* Right Card */}
                <Card className="bg-background/50 border-border p-6 md:p-8">
                   <CardHeader className="flex-row items-center gap-4 p-0 mb-6">
                    <CalendarDays className="h-6 w-6 text-primary" />
                    <CardTitle className="text-xl text-primary">{c.headings.quickActions}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 space-y-6">
                     <div className="bg-card p-4 rounded-lg">
                        <h4 className="font-semibold text-card-foreground mb-3">{c.headings.lookingFor}</h4>
                        <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                          {c.contact.opportunities.map((opp, i) => <li key={i}>{opp}</li>)}
                        </ul>
                      </div>
                      <Button asChild size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_20px_hsl(var(--primary))] transition-all duration-300">
                        <a href={`mailto:${c.contact.email}`}>
                          <Mail className="mr-2 h-4 w-4" />
                          {c.headings.sendMessage}
                        </a>
                      </Button>
                      <p className="text-center text-sm text-muted-foreground">{c.contact.responseTime}</p>
                  </CardContent>
                </Card>
              </div>

               <Card className="bg-background/50 border-border p-6">
                  <CardContent className="p-0 flex flex-col items-center justify-center gap-6">
                    <p className="text-muted-foreground text-center">{c.headings.socialsPitch}</p>
                    <div className="relative">
                      <div className="absolute inset-0 bg-black/20 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl"></div>
                      <div className="relative flex flex-wrap items-center justify-center gap-2 p-2">
                        {socialLinks.map((social) => (
                           <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                            <div
                              className={`squircle-icon-button w-14 h-14 bg-gradient-to-br ${social.gradient} rounded-xl flex items-center justify-center shadow-lg border ${social.border} cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-1 hover:shadow-2xl`}
                            >
                              <social.icon className="h-7 w-7 text-white" />
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </CardContent>
              </Card>

            </div>
          </section>
        </main>

        <footer className="py-6 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} {c.name}. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
}
