import { Button } from '@/components/ui/button';
import { Mail, Phone, Briefcase, MapPin, Code, Zap, Globe, ChevronsRight, BrainCircuit, Users, Target, Rocket, GraduationCap, Award, Database, Smartphone, Wrench, MessageCircle, Lightbulb, Zap as ZapIcon, Eye, TrendingUp, Shield, AtSign, Languages as LanguagesIcon, ChevronRight, Send } from 'lucide-react';
import type { Language, SoftSkill } from '@/lib/content';
import { content } from '@/lib/content';
import Link from 'next/link';
import LanguageSwitcher from '@/components/language-switcher';
import { GithubIcon, LinktreeIcon } from '@/components/icons';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import React from 'react';

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

export default function Home({ searchParams }: PageProps) {
  const lang = searchParams?.lang || 'en';
  const c = content[lang];
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  return (
    <div dir={dir} className="min-h-screen flex flex-col text-foreground font-body antialiased relative">
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
                <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                  {c.name}
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium mb-6">{c.title}</h2>
              
              <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed mb-8">{c.aboutMe.summary}</p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_20px_hsl(var(--primary))] transition-all duration-300 transform hover:scale-105"
                  asChild
                >
                  <a href="#contact">
                    <Send className="mr-2" />
                    {c.headings.getInTouch}
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-border hover:bg-accent hover:border-primary hover:text-primary transition-all duration-300 hover:shadow-[0_0_15px_hsl(var(--primary))]"
                  asChild
                >
                  <a href={c.links.github} target="_blank" rel="noopener noreferrer">
                    <Briefcase className="mr-2"/>
                    {c.headings.viewProjects}
                  </a>
                </Button>
              </div>
              
              <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a href={`mailto:${c.contact.email}`} className="hover:text-primary transition-colors">{c.contact.email}</a>
                </div>
                <div className="hidden sm:block text-muted-foreground/50">•</div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <a href={`tel:${c.contact.phone}`} className="hover:text-primary transition-colors">{c.contact.phone}</a>
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
                            {Icon && <Icon className="h-10 w-10 text-primary mb-2" />}
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
                        <Users className="h-10 w-10 text-primary mb-2" />
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
                        <LanguagesIcon className="h-10 w-10 text-primary mb-2" />
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
            <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-primary">{c.headings.getInTouch}</h2>
              <p className="mt-4 text-lg text-muted-foreground">I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out.</p>
              <div className="mt-8 flex justify-center">
                <a href={`mailto:${c.contact.email}`} className="text-2xl font-semibold text-primary hover:underline">{c.contact.email}</a>
              </div>
              <div className="mt-8 flex justify-center gap-6">
                <a href={c.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href={c.links.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <GithubIcon className="h-8 w-8" />
                </a>
                <a href={c.links.linktree} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                   <LinktreeIcon className="h-8 w-8" />
                </a>
              </div>
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
