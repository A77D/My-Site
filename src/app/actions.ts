'use server';

import { generateResumeMarkdown } from '@/ai/flows/generate-resume-markdown';
import type { GenerateResumeMarkdownInput } from '@/ai/flows/generate-resume-markdown';

export async function createResumeAction(data: GenerateResumeMarkdownInput) {
  try {
    const result = await generateResumeMarkdown(data);
    if (!result || !result.markdownResume) {
        throw new Error('AI failed to generate a resume.');
    }
    return { success: true, markdown: result.markdownResume };
  } catch (error) {
    console.error('Error generating resume:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return { success: false, error: `Failed to generate resume: ${errorMessage}` };
  }
}
