import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone, ExternalLink, Briefcase } from 'lucide-react';
import type { Language } from '@/lib/content';
import { content } from '@/lib/content';
import Link from 'next/link';

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

export default function Home({ searchParams }: PageProps) {
  const lang = searchParams?.lang || 'en';
  const c = content[lang];
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  return (
    <div dir={dir} className="min-h-screen flex flex-col text-foreground font-body antialiased">
      <div id="background-swirl"></div>
      <div id="background-dots"></div>

      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
        <nav className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="bg-primary/20 border border-primary/50 text-primary rounded-full h-10 w-10 flex items-center justify-center font-bold text-lg">
              AJ
            </div>
            <span className="font-bold text-lg hidden sm:block">{c.name}</span>
          </Link>

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
        </nav>
      </header>

      <main className="flex-grow flex items-center justify-center">
        <div className="container mx-auto max-w-4xl px-4 py-16 sm:py-24 text-center">
          
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
          
          <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed mb-8">{c.careerAspiration}</p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_20px_hsl(var(--primary))] transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="mr-2" />
              {c.headings.getInTouch}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-border hover:bg-accent hover:border-primary hover:text-primary transition-all duration-300 hover:shadow-[0_0_15px_hsl(var(--primary))]"
            >
              <Briefcase className="mr-2"/>
              {c.headings.viewProjects}
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
      </main>
    </div>
  );
}
