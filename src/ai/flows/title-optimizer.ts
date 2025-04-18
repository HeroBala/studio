//Title Optimizer Flow
'use server';

/**
 * @fileOverview A title optimizer AI agent.
 *
 * - optimizeTitle - A function that handles the title optimization process.
 * - OptimizeTitleInput - The input type for the optimizeTitle function.
 * - OptimizeTitleOutput - The return type for the optimizeTitle function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const OptimizeTitleInputSchema = z.object({
  title: z.string().describe('The original title to optimize.'),
  keywords: z.string().describe('Comma separated keywords related to the title.'),
  seoBestPractices: z.string().optional().describe('SEO best practices to consider.'),
});

export type OptimizeTitleInput = z.infer<typeof OptimizeTitleInputSchema>;

const OptimizeTitleOutputSchema = z.object({
  optimizedTitles: z.array(z.string()).describe('An array of optimized titles based on SEO best practices.'),
});

export type OptimizeTitleOutput = z.infer<typeof OptimizeTitleOutputSchema>;

export async function optimizeTitle(input: OptimizeTitleInput): Promise<OptimizeTitleOutput> {
  return optimizeTitleFlow(input);
}

const prompt = ai.definePrompt({
  name: 'optimizeTitlePrompt',
  input: {
    schema: z.object({
      title: z.string().describe('The original title to optimize.'),
      keywords: z.string().describe('Comma separated keywords related to the title.'),
      seoBestPractices: z.string().optional().describe('SEO best practices to consider.'),
    }),
  },
  output: {
    schema: z.object({
      optimizedTitles: z.array(z.string()).describe('An array of optimized titles based on SEO best practices.'),
    }),
  },
  prompt: `You are an expert in SEO and marketing. Your goal is to optimize the given title based on the provided keywords and SEO best practices.\n\nOriginal Title: {{{title}}}\nKeywords: {{{keywords}}}\nSEO Best Practices: {{{seoBestPractices}}}\n\nPlease generate 5 alternative titles that are optimized for SEO. Return an array of strings. The titles should be engaging and relevant to the keywords.\n`,
});

const optimizeTitleFlow = ai.defineFlow<
  typeof OptimizeTitleInputSchema,
  typeof OptimizeTitleOutputSchema
>(
  {
    name: 'optimizeTitleFlow',
    inputSchema: OptimizeTitleInputSchema,
    outputSchema: OptimizeTitleOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
