"use client";

import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';

import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {Textarea} from '@/components/ui/textarea';
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form';
import {useToast} from '@/hooks/use-toast';
import {optimizeTitle, type OptimizeTitleInput} from '@/ai/flows/title-optimizer';
import {Card, CardContent} from '@/components/ui/card';

const formSchema = z.object({
  title: z.string().min(5, {
    message: 'Title must be at least 5 characters.',
  }),
  keywords: z.string().min(2, {
    message: 'Keywords must be at least 2 characters.',
  }),
  seoBestPractices: z.string().optional(),
});

export function TitleOptimizerForm() {
  const [optimizedTitles, setOptimizedTitles] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      keywords: '',
      seoBestPractices: '',
    },
  });

  const {toast} = useToast();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      const result = await optimizeTitle(values as OptimizeTitleInput);

      if (result?.optimizedTitles) {
        setOptimizedTitles(result.optimizedTitles);
      } else {
        setOptimizedTitles([]);
      }
      toast({
        title: 'Titles optimized.',
        description: 'Generated alternative titles based on your input.',
      });
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error optimizing titles.',
        description: 'Failed to generate optimized titles.',
      });
      setOptimizedTitles([]);
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
            name="title"
            render={({field}) => (
              <FormItem>
                <FormLabel>Original Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter original title" {...field} />
                </FormControl>
                <FormDescription>Enter the original title you want to optimize.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="keywords"
            render={({field}) => (
              <FormItem>
                <FormLabel>Keywords</FormLabel>
                <FormControl>
                  <Input placeholder="Separate keywords with commas" {...field} />
                </FormControl>
                <FormDescription>Enter keywords related to the title.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="seoBestPractices"
            render={({field}) => (
              <FormItem>
                <FormLabel>SEO Best Practices (Optional)</FormLabel>
                <FormControl>
                  <Textarea placeholder="Enter SEO best practices to consider" {...field} />
                </FormControl>
                <FormDescription>Enter SEO best practices to consider.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Optimizing...' : 'Optimize Title'}
          </Button>
        </form>
      </Form>
      {optimizedTitles.length > 0 && (
        <div className="mt-4">
          <h3 className="text-sm font-medium">Optimized Titles:</h3>
          <div className="mt-2 space-y-2">
            {optimizedTitles.map((title, index) => (
              <Card key={index}>
                <CardContent>{title}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
