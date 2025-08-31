'use server';

/**
 * @fileOverview This file defines a Genkit flow to generate a resume in Markdown format from the provided user data.
 *
 * - generateResumeMarkdown - A function that accepts user data and returns a Markdown-formatted resume.
 * - GenerateResumeMarkdownInput - The input type for the generateResumeMarkdown function.
 * - GenerateResumeMarkdownOutput - The return type for the generateResumeMarkdown function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateResumeMarkdownInputSchema = z.object({
  name: z.string().describe('The full name of the person.'),
  location: z.string().describe('The location of the person.'),
  contactDetails: z.string().describe('Contact details of the person (e.g., email, phone number).'),
  linkedin: z.string().describe('LinkedIn profile URL.'),
  github: z.string().describe('GitHub profile URL.'),
  linktree: z.string().optional().describe('Linktree URL, if available.'),
  education: z.string().describe('Educational background of the person.'),
  skills: z.string().describe('Technical and soft skills of the person.'),
  careerAspiration: z.string().describe('Career goals and aspirations of the person.'),
});

export type GenerateResumeMarkdownInput = z.infer<typeof GenerateResumeMarkdownInputSchema>;

const GenerateResumeMarkdownOutputSchema = z.object({
  markdownResume: z.string().describe('The generated resume in Markdown format.'),
});

export type GenerateResumeMarkdownOutput = z.infer<typeof GenerateResumeMarkdownOutputSchema>;

export async function generateResumeMarkdown(input: GenerateResumeMarkdownInput): Promise<GenerateResumeMarkdownOutput> {
  return generateResumeMarkdownFlow(input);
}

const resumePrompt = ai.definePrompt({
  name: 'resumePrompt',
  input: {schema: GenerateResumeMarkdownInputSchema},
  output: {schema: GenerateResumeMarkdownOutputSchema},
  prompt: `Given the following information, generate a resume in Markdown format.

Name: {{{name}}}
Location: {{{location}}}
Contact Details: {{{contactDetails}}}
LinkedIn: {{{linkedin}}}
GitHub: {{{github}}}
{{#if linktree}}Linktree: {{{linktree}}}{{/if}}
Education: {{{education}}}
Skills: {{{skills}}}
Career Aspiration: {{{careerAspiration}}}

Ensure the Markdown is well-formatted and suitable for inclusion in job applications.
`,
});

const generateResumeMarkdownFlow = ai.defineFlow(
  {
    name: 'generateResumeMarkdownFlow',
    inputSchema: GenerateResumeMarkdownInputSchema,
    outputSchema: GenerateResumeMarkdownOutputSchema,
  },
  async input => {
    const {output} = await resumePrompt(input);
    return output!;
  }
);
