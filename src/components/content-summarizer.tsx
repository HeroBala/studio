"use client";

import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';

import {Button} from '@/components/ui/button';
import {Label} from '@/components/ui/label';
import {Textarea} from '@/components/ui/textarea';
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form';
import {useToast} from '@/hooks/use-toast';
import {summarizeContent, type SummarizeContentInput} from '@/ai/flows/content-summarizer';
import {Card, CardContent} from '@/components/ui/card';

const formSchema = z.object({
  content: z.string().min(10, {
    message: 'Content must be at least 10 characters.',
  }),
});

export function ContentSummarizer() {
  const [summary, setSummary] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: '',
    },
  });

  const {toast} = useToast();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      const result = await summarizeContent(values as SummarizeContentInput);

      if (result?.summary) {
        setSummary(result.summary);
      } else {
        setSummary('');
      }
      toast({
        title: 'Content summarized.',
        description: 'Generated a concise summary of the provided content.',
      });
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error summarizing content.',
        description: 'Failed to generate a summary.',
      });
      setSummary('');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="content"
            render={({field}) => (
              <FormItem>
                <FormLabel>Content to Summarize</FormLabel>
                <FormControl>
                  <Textarea placeholder="Enter content to summarize" {...field} />
                </FormControl>
                <FormDescription>Enter the content you want to summarize.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Summarizing...' : 'Summarize Content'}
          </Button>
        </form>
      </Form>
      {summary && (
        <div className="mt-4">
          <h3 className="text-sm font-medium">Summary:</h3>
          <Card>
            <CardContent>{summary}</CardContent>
          </Card>
        </div>
      )}
    </>
  );
}
