import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { content, type Language } from '@/lib/content';
import { GithubIcon, LinktreeIcon } from '@/components/icons';
import { Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import LanguageSwitcher from '@/components/language-switcher';
import ResumeGenerator from '@/components/resume-generator';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

type PageProps = {
  searchParams?: {
    lang?: Language;
  };
};

export default function Home({ searchParams }: PageProps) {
  const lang = searchParams?.lang || 'en';
  const c = content[lang];
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  const contactInfo = [
    { icon: Mail, text: c.contact.email, href: `mailto:${c.contact.email}` },
    { icon: Phone, text: c.contact.phone, href: `tel:${c.contact.phone}` },
    { icon: MapPin, text: c.location },
  ];

  const socialLinks = [
    { icon: Linkedin, href: c.links.linkedin, label: 'LinkedIn' },
    { icon: GithubIcon, href: c.links.github, label: 'GitHub' },
    { icon: LinktreeIcon, href: c.links.linktree, label: 'Linktree' },
  ];

  return (
    <div dir={dir} className="min-h-screen text-foreground">
      <header className="absolute top-0 right-0 p-4 sm:p-6">
        <LanguageSwitcher currentLang={lang} />
      </header>

      <main className="container mx-auto max-w-4xl px-4 py-16 sm:py-24">
        <div className="flex flex-col items-center text-center">
          <h1 className="font-headline text-5xl md:text-7xl font-black tracking-tighter mb-4">
            <span className="bg-gradient-to-r from-[#6A5ACD] to-[#7B68EE] bg-clip-text text-transparent">
              {c.name}
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground font-medium mb-6">{c.title}</h2>
          
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 mb-8 text-sm text-muted-foreground">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <item.icon className="h-4 w-4" />
                {item.href ? (
                  <a href={item.href} className="hover:text-primary transition-colors">{item.text}</a>
                ) : (
                  <span>{item.text}</span>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mb-12">
            {socialLinks.map((link) => (
              <Button key={link.label} variant="outline" size="icon" asChild className="bg-transparent border-border hover:bg-accent hover:border-primary hover:text-primary transition-all duration-300 hover:shadow-[0_0_15px_hsl(var(--primary))]">
                <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                  <link.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>
        </div>

        <div className="space-y-12">
          <section id="about">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="font-headline text-3xl">{c.headings.careerAspiration}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{c.careerAspiration}</p>
              </CardContent>
            </Card>
          </section>

          <section id="skills">
             <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="font-headline text-3xl">{c.headings.skills}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                    <h3 className="font-bold text-lg mb-4 text-primary">{c.headings.technicalSkills}</h3>
                    <div className="flex flex-wrap gap-2">
                        {c.skills.technical.map((skill) => <Badge key={skill} variant="secondary" className="text-sm py-1 px-3">{skill}</Badge>)}
                    </div>
                </div>
                 <div>
                    <h3 className="font-bold text-lg mb-4 text-primary">{c.headings.softSkills}</h3>
                    <div className="flex flex-wrap gap-2">
                        {c.skills.soft.map((skill) => <Badge key={skill} variant="secondary" className="text-sm py-1 px-3">{skill}</Badge>)}
                    </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section id="education">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="font-headline text-3xl">{c.headings.education}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {c.education.map((edu, index) => (
                     <li key={index} className="space-y-1">
                        <h3 className="font-bold text-lg">{edu.degree}</h3>
                        <p className="text-muted-foreground">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground/80">{edu.year}</p>
                     </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>
        </div>

        <Separator className="my-16 bg-border/20" />

        <footer className="text-center">
          <ResumeGenerator data={c} buttonText={c.headings.generateResume} />
        </footer>
      </main>
    </div>
  );
}
