'use server';
/**
 * @fileOverview A content summarization AI agent.
 *
 * - summarizeContent - A function that handles the content summarization process.
 * - SummarizeContentInput - The input type for the summarizeContent function.
 * - SummarizeContentOutput - The return type for the summarizeContent function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const SummarizeContentInputSchema = z.object({
  content: z.string().describe('The content to be summarized.'),
});
export type SummarizeContentInput = z.infer<typeof SummarizeContentInputSchema>;

const SummarizeContentOutputSchema = z.object({
  summary: z.string().describe('The concise summary of the content.'),
});
export type SummarizeContentOutput = z.infer<typeof SummarizeContentOutputSchema>;

export async function summarizeContent(input: SummarizeContentInput): Promise<SummarizeContentOutput> {
  return summarizeContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeContentPrompt',
  input: {
    schema: z.object({
      content: z.string().describe('The content to be summarized.'),
    }),
  },
  output: {
    schema: z.object({
      summary: z.string().describe('The concise summary of the content.'),
    }),
  },
  prompt: `You are an expert content summarizer. You will be provided with content, and you will generate a concise summary of the content.

Content: {{{content}}}`,
});

const summarizeContentFlow = ai.defineFlow<
  typeof SummarizeContentInputSchema,
  typeof SummarizeContentOutputSchema
>(
  {
    name: 'summarizeContentFlow',
    inputSchema: SummarizeContentInputSchema,
    outputSchema: SummarizeContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
