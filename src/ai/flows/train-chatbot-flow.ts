'use server';

/**
 * @fileOverview A flow to train the chatbot with content from the webpage.
 *
 * - trainChatbot - A function that trains the chatbot with content from the webpage.
 * - TrainChatbotInput - The input type for the trainChatbot function.
 * - TrainChatbotOutput - The return type for the trainChatbot function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const TrainChatbotInputSchema = z.object({
  webpageUrl: z.string().describe('The URL of the webpage to train the chatbot with.'),
});

export type TrainChatbotInput = z.infer<typeof TrainChatbotInputSchema>;

const TrainChatbotOutputSchema = z.object({
  success: z.boolean().describe('Whether the chatbot was successfully trained.'),
  message: z.string().describe('A message indicating the result of the training process.'),
});

export type TrainChatbotOutput = z.infer<typeof TrainChatbotOutputSchema>;

/**
 * Trains the chatbot with content from the specified webpage.
 *
 * @param input - The input containing the webpage URL.
 * @returns A promise resolving to the training result.
 */
export async function trainChatbot(input: TrainChatbotInput): Promise<TrainChatbotOutput> {
  return trainChatbotFlow(input);
}

const prompt = ai.definePrompt({
  name: 'trainChatbotPrompt',
  input: {
    schema: z.object({
      webpageContent: z.string().describe('The content of the webpage.'),
    }),
  },
  output: {
    schema: z.object({
      success: z.boolean().describe('Whether the chatbot was successfully trained.'),
      message: z.string().describe('A message indicating the result of the training process.'),
    }),
  },
  prompt: `You are an expert AI chatbot trainer. You will be provided with the content of a webpage, and you will use this content to train the AI chatbot.
  Ensure the chatbot is able to answer questions based on the content of the webpage.

  Webpage Content: {{{webpageContent}}}

  If the training is successful, return success as true and return a message indicating this. If not, return success as false and return an error message.
  `,
});

const fetchWebpageContent = ai.defineTool(
  {
    name: 'fetchWebpageContent',
    description: 'Retrieves the content of a webpage from a given URL.',
    inputSchema: z.object({
      url: z.string().describe('The URL of the webpage to fetch content from.'),
    }),
    outputSchema: z.string(),
  },
  async input => {
    try {
      const response = await fetch(input.url);
      if (!response.ok) {
        throw new Error(`Failed to fetch webpage content: ${response.status} ${response.statusText}`);
      }
      return await response.text();
    } catch (error: any) {
      console.error('Error fetching webpage content:', error);
      return `Error: Could not retrieve content from ${input.url}. ${error.message}`;
    }
  }
);

const trainChatbotFlow = ai.defineFlow<
  typeof TrainChatbotInputSchema,
  typeof TrainChatbotOutputSchema
>(
  {
    name: 'trainChatbotFlow',
    inputSchema: TrainChatbotInputSchema,
    outputSchema: TrainChatbotOutputSchema,
  },
  async input => {
    const {webpageUrl} = input;

    const webpageContent = await fetchWebpageContent({url: webpageUrl});
    if (webpageContent.startsWith('Error:')) {
      return {
        success: false,
        message: `Failed to train chatbot: ${webpageContent}`,
      };
    }

    const {output} = await prompt({webpageContent});
    return output!;
  }
);
