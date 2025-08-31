'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { createResumeAction } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Copy, Check, ExternalLink } from 'lucide-react';
import type { GenerateResumeMarkdownInput } from '@/ai/flows/generate-resume-markdown';

type ResumeGeneratorProps = {
  data: any;
  buttonText: string;
};

export default function ResumeGenerator({ data, buttonText }: ResumeGeneratorProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [markdown, setMarkdown] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    setIsLoading(true);
    setMarkdown('');
    setIsOpen(true);

    const resumeData: GenerateResumeMarkdownInput = {
        name: data.name,
        location: data.location,
        contactDetails: `${data.contact.email}, ${data.contact.phone}`,
        linkedin: data.links.linkedin,
        github: data.links.github,
        linktree: data.links.linktree,
        education: data.education.map((e: any) => `${e.degree}, ${e.institution} (${e.year})`).join('; '),
        skills: [...data.skills.technical, ...data.skills.soft].join(', '),
        careerAspiration: data.careerAspiration,
    };

    const result = await createResumeAction(resumeData);

    setIsLoading(false);

    if (result.success) {
      setMarkdown(result.markdown);
    } else {
      setIsOpen(false);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: result.error || 'Failed to generate resume.',
      });
    }
  };

  const handleCopy = () => {
    if (markdown) {
      navigator.clipboard.writeText(markdown);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <>
      <Button
        onClick={handleGenerate}
        disabled={isLoading}
        size="lg"
        className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_20px_hsl(var(--primary))] transition-all duration-300 transform hover:scale-105"
      >
        {isLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <ExternalLink className="mr-2 h-4 w-4" />
        )}
        {buttonText}
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl w-[90vw] h-[80vh] flex flex-col bg-popover text-popover-foreground">
          <DialogHeader>
            <DialogTitle>Generated Resume</DialogTitle>
            <DialogDescription>
              Here is your resume in Markdown format. You can copy it and use it anywhere.
            </DialogDescription>
          </DialogHeader>
          <div className="flex-grow min-h-0">
            {isLoading ? (
              <div className="flex items-center justify-center h-full">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : (
              <ScrollArea className="h-full rounded-md border border-border bg-background p-4">
                <pre className="text-sm whitespace-pre-wrap font-code">{markdown}</pre>
              </ScrollArea>
            )}
          </div>
          <DialogFooter>
            <Button onClick={handleCopy} disabled={!markdown || isLoading}>
              {isCopied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
              {isCopied ? 'Copied!' : 'Copy Markdown'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
