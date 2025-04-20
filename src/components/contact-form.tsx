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
import {getSuggestedFields, type ContactFormSubmission} from '@/services/contact-form';
import {useToast} from '@/hooks/use-toast';
import {cn} from "@/lib/utils";
import {Card, CardContent} from "@/components/ui/card";

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

export function ContactForm() {
  const [isSuggestionLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const {toast} = useToast();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    // Simulate AI suggestion loading
    try {
      const suggestions = await getSuggestedFields(values as ContactFormSubmission);

      if (suggestions) {
        form.setValue('name', suggestions.nameSuggestion || '');
        form.setValue('email', suggestions.emailSuggestion || '');
        form.setValue('message', suggestions.messageSuggestion || '');
      }
      toast({
        title: 'Form suggestions applied.',
        description: 'Utilizing AI to pre-fill the form',
      });
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error applying suggestions.',
        description: 'Failed to get suggestions from AI service.',
      });
    } finally {
      setIsLoading(false);
    }
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Card>
      <CardContent className="p-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 animate-fade-in flex flex-col justify-end">
          <FormField
            control={form.control}
            name="name"
            render={({field}) => (
              <FormItem className="animate-slide-in-left">
                <FormLabel className="text-lg font-semibold text-foreground">Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
                </FormControl>
                <FormDescription>What do you want us to call you?</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({field}) => (
              <FormItem className="animate-slide-in-right">
                <FormLabel className="text-lg font-semibold text-foreground">Email</FormLabel>
                <FormControl>
                  <Input placeholder="example@example.com" type="email" {...field} />
                </FormControl>
                <FormDescription>How can we reach you?</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({field}) => (
              <FormItem className="animate-slide-in-bottom">
                <FormLabel className="text-lg font-semibold text-foreground">Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Tell us more about your needs..." {...field} />
                </FormControl>
                <FormDescription>What do you want to tell us?</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isSuggestionLoading} className="animate-slide-in-top bg-accent text-accent-foreground hover:bg-accent-foreground hover:text-accent self-end">
            {isSuggestionLoading ? 'Loading...' : 'Submit'}
          </Button>
        </form>
      </Form>
      </CardContent>
    </Card>
  );
}
