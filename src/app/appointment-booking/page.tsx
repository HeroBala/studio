'use client';

import React, {useState} from 'react';
import {Calendar} from '@/components/ui/calendar';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {cn} from '@/lib/utils';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {useRouter} from 'next/navigation';
import {ArrowLeft} from "lucide-react";
import Link from 'next/link';
import {format} from "date-fns";

const bookingSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  message: z.string().optional(),
});

const AppointmentBookingPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const router = useRouter();

  const form = useForm<z.infer<typeof bookingSchema>>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof bookingSchema>) {
    console.log(values)
  }

  return (
    <div className="container mx-auto py-12">
      <Link href="/" className="mb-8 inline-flex items-center gap-2 text-lg" prefetch>
        <ArrowLeft className="h-5 w-5"/>
        Back to Home
      </Link>
      <h1 className="text-3xl font-semibold text-center mb-8">Book an Appointment</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Calendar Section */}
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Select Date</h2>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="rounded-md border"
            modifiers={{
              disabled: { before: new Date() },
            }}
          />
          {selectedDate && (
            <p className="mt-4">Selected Date: {selectedDate.toLocaleDateString()}</p>
          )}
        </div>

        {/* Booking Form Section */}
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Your Information</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 animate-fade-in">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="animate-slide-in-left">
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="animate-slide-in-right">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="example@example.com" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="animate-slide-in-bottom">
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="123-456-7890" type="tel" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="animate-slide-in-bottom">
                    <FormLabel>Message (Optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Any additional information?"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full animate-slide-in-top">
                Book Appointment
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBookingPage;
