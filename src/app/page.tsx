'use client';

import Image from 'next/image';
import Link from 'next/link';
import {Button} from '@/components/ui/button';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {ContactForm} from '@/components/contact-form';
import {useEffect, useState, useRef} from 'react';
import {Navbar} from '@/components/navbar';
import TestimonialCard from '@/components/testimonial-card';
import {CalendarIcon} from "lucide-react";
import {cn} from "@/lib/utils";

const testimonials = [
  {
    name: 'Jane Cooper',
    title: 'CEO, Acme Co.',
    quote: 'AI Insight Hub has transformed our business strategy with actionable insights!',
    rating: 5,
    image: 'https://picsum.photos/50/50',
  },
  {
    name: 'John Smith',
    title: 'Marketing Manager, Beta Corp',
    quote: 'Their AI-driven marketing solutions have significantly increased our ROI.',
    rating: 4,
    image: 'https://picsum.photos/51/50',
  },
  {
    name: 'Emily Johnson',
    title: 'Data Analyst, Gamma Inc.',
    quote: 'The data analytics and reporting services are top-notch and very insightful.',
    rating: 5,
    image: 'https://picsum.photos/52/50',
  },
];

const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span
        key={i}
        className={`star ${i <= rating ? 'active' : ''}`}
      >
        ★
      </span>
    );
  }
  return stars;
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar aiConsultationLink="/appointment-booking"/>
      <main className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 flex-grow">
        {/* Hero Section */}
        <section className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Empower Your Business with AI-Driven Solutions and Data Analytics</h1>
          <p className="text-lg text-muted-foreground mb-8">Welcome to AI Insight Hub, where cutting-edge AI technology meets data analytics to deliver smart solutions and actionable insights. Our expert services and personalized consultations leverage the power of AI to optimize your business processes, drive decision-making, and unlock growth opportunities.</p>
          {/* AI-Powered Business Insights */}
          <div className="text-left md:text-center">
            <h2 className="text-2xl font-semibold mb-4">AI-Powered Business Insights</h2>
            <ul className="list-disc list-inside text-muted-foreground">
              <li>Improve customer segmentation using AI.</li>
              <li>Automate data analysis for quicker insights.</li>
              <li>Personalize marketing campaigns with AI-driven content.</li>
              <li>Predict future sales trends with machine learning.</li>
            </ul>
          </div>
          <div className="mb-8">
            <Button asChild className="group inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80">
              <Link href="/appointment-booking" prefetch className="flex items-center gap-1">
                Start Your AI-Driven Transformation Today
                <CalendarIcon className="h-4 w-4 transition-transform group-hover:translate-x-1"/>
              </Link>
            </Button>
          </div>
        </section>

        {/* Services Offered Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-8 text-center">Services Offered</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* AI-Powered Business Strategy Consulting */}
            <div className="hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="text-2xl font-semibold leading-none tracking-tight">AI-Powered Business Strategy Consulting</div>
                <div className="text-sm text-muted-foreground">Use predictive analytics and AI algorithms to help businesses make informed decisions and drive future growth.</div>
              </div>
              <div className="p-6 pt-0">
                <Image
                  src="https://picsum.photos/200/150"
                  alt="AI Consulting"
                  width={200}
                  height={150}
                  style={{objectFit: 'cover'}}
                  className="rounded-md mb-2"
                />
                <p className="text-sm text-muted-foreground mb-2">We leverage AI to analyze market trends and provide strategic recommendations.</p>
                <div className="flex items-center justify-between">
                  <div className="star-rating">
                    {renderStars(4)}
                    <span className="ml-1">4.0</span>
                  </div>
                  <Button variant="link" asChild>
                    <Link href="/services/ai-strategy-consulting" prefetch>
                      Learn More
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="p-6 flex justify-end">
                <Button asChild>
                  <Link href="/appointment-booking" prefetch>Book an Appointment</Link>
                </Button>
              </div>
            </div>

            {/* Data Analytics and Reporting */}
            <div className="hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="text-2xl font-semibold leading-none tracking-tight">Data Analytics and Reporting</div>
                <div className="text-sm text-muted-foreground">Provide detailed analytics reports to uncover insights about customer behavior, sales trends, and more, enabling businesses to optimize operations and performance.</div>
              </div>
              <div className="p-6 pt-0">
                <Image
                  src="https://picsum.photos/201/150"
                  alt="Data Analytics"
                  width={200}
                  height={150}
                  style={{objectFit: 'cover'}}
                  className="rounded-md mb-2"
                />
                <p className="text-sm text-muted-foreground mb-2">Our reports offer actionable insights to improve your business performance.</p>
                <div className="flex items-center justify-between">
                  <div className="star-rating">
                    {renderStars(5)}
                    <span className="ml-1">5.0</span>
                  </div>
                  <Button variant="link" asChild>
                    <Link href="/services/data-analytics-reporting" prefetch>
                      Learn More
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="p-6 flex justify-end">
                <Button asChild>
                  <Link href="/appointment-booking" prefetch>Book an Appointment</Link>
                </Button>
              </div>
            </div>

            {/* AI-Driven Marketing Solutions */}
            <div className="hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="text-2xl font-semibold leading-none tracking-tight">AI-Driven Marketing Solutions</div>
                <div className="text-sm text-muted-foreground">Optimize marketing strategies using AI-powered tools like customer segmentation, predictive lead scoring, and personalized marketing campaigns.</div>
              </div>
              <div className="p-6 pt-0">
                <Image
                  src="https://picsum.photos/202/150"
                  alt="AI Marketing"
                  width={200}
                  height={150}
                  style={{objectFit: 'cover'}}
                  className="rounded-md mb-2"
                />
                <p className="text-sm text-muted-foreground mb-2">Increase your marketing ROI with our AI-driven solutions.</p>
                <div className="flex items-center justify-between">
                  <div className="star-rating">
                    {renderStars(3)}
                    <span className="ml-1">3.0</span>
                  </div>
                  <Button variant="link" asChild>
                    <Link href="/services/ai-marketing-solutions" prefetch>
                      Learn More
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="p-6 flex justify-end">
                <Button asChild>
                  <Link href="/appointment-booking" prefetch>Book an Appointment</Link>
                </Button>
              </div>
            </div>

            {/* AI Solutions for Process Automation */}
            <div className="hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="text-2xl font-semibold leading-none tracking-tight">AI Solutions for Process Automation</div>
                <div className="text-sm text-muted-foreground">Help businesses automate their workflows with AI, reducing operational costs and increasing efficiency.</div>
              </div>
              <div className="p-6 pt-0">
                <Image
                  src="https://picsum.photos/203/150"
                  alt="AI Automation"
                  width={200}
                  height={150}
                  style={{objectFit: 'cover'}}
                  className="rounded-md mb-2"
                />
                <p className="text-sm text-muted-foreground mb-2">Automate repetitive tasks and free up your resources with our AI solutions.</p>
                <div className="flex items-center justify-between">
                  <div className="star-rating">
                    {renderStars(4)}
                    <span className="ml-1">4.0</span>
                  </div>
                  <Button variant="link" asChild>
                    <Link href="/services/ai-process-automation" prefetch>
                      Learn More
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="p-6 flex justify-end">
                <Button asChild>
                  <Link href="/appointment-booking" prefetch>Book an Appointment</Link>
                </Button>
              </div>
            </div>

            {/* Customized AI Solutions for Businesses */}
            <div className="hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="text-2xl font-semibold leading-none tracking-tight">Customized AI Solutions for Businesses</div>
                <div className="text-sm text-muted-foreground">Create and implement AI models tailored to your client's specific industry needs.</div>
              </div>
              <div className="p-6 pt-0">
                <Image
                  src="https://picsum.photos/204/150"
                  alt="Custom AI"
                  width={200}
                  height={150}
                  style={{objectFit: 'cover'}}
                  className="rounded-md mb-2"
                />
                <p className="text-sm text-muted-foreground mb-2">We build custom AI models to address your unique business challenges.</p>
                <div className="flex items-center justify-between">
                  <div className="star-rating">
                    {renderStars(5)}
                    <span className="ml-1">5.0</span>
                  </div>
                  <Button variant="link" asChild>
                    <Link href="/services/custom-ai-solutions" prefetch>
                      Learn More
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="p-6 flex justify-end">
                <Button asChild>
                  <Link href="/appointment-booking" prefetch>Book an Appointment</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">How It Works</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="step-1">
              <AccordionTrigger>Step 1: AI &amp; Data Assessment</AccordionTrigger>
              <AccordionContent>We begin by understanding your business goals and collecting relevant data to assess your AI readiness.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="step-2">
              <AccordionTrigger>Step 2: Data Analysis and Insights Generation</AccordionTrigger>
              <AccordionContent>Our AI algorithms analyze your data to generate actionable insights and identify opportunities for improvement.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="step-3">
              <AccordionTrigger>Step 3: AI Solution Development &amp; Integration</AccordionTrigger>
              <AccordionContent>We develop and integrate custom AI models or analytics tools into your business operations.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="step-4">
              <AccordionTrigger>Step 4: Ongoing Monitoring and Optimization</AccordionTrigger>
              <AccordionContent>We continuously monitor performance and refine AI models to ensure long-term success and ROI.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Contact Us Section */}
        <section id="contact">
          <h2 className="text-3xl font-semibold mb-8 text-center">Contact Us</h2>
          <ContactForm/>
        </section>
      </main>
    </div>
  );
}
