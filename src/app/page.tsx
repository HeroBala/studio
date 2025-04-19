"use client";

import Image from 'next/image';
import Link from 'next/link';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion';
import {ContactForm} from '@/components/contact-form';
import {TitleOptimizerForm} from '@/components/title-optimizer-form';
import {ContentSummarizer} from '@/components/content-summarizer';
import TestimonialCard from '@/components/testimonial-card';
import {useEffect, useState} from 'react';
import {Navbar} from '@/components/navbar';
import Chatbot from '@/components/chatbot';
import {CalendarIcon} from 'lucide-react';

const testimonials = [
  {
    name: 'Jane Doe',
    title: 'CEO, Company X',
    quote: "AI Insight Hub has revolutionized our business strategy. The insights we've gained have been invaluable.",
    rating: 5,
    image: 'https://picsum.photos/40/40',
  },
  {
    name: 'Richard Roe',
    title: 'CTO, Company Y',
    quote: "Their AI solutions automated our processes, saving us time and resources. Highly recommend!",
    rating: 4,
    image: 'https://picsum.photos/41/40',
  },
];

const aiSuggestions = [
  "Improve customer segmentation using AI.",
  "Automate data analysis for quicker insights.",
  "Personalize marketing campaigns with AI-driven content.",
  "Predict future sales trends with machine learning.",
];

export default function Home() {
  const [showChatbot, setShowChatbot] = useState(false);

  useEffect(() => {
    // Client-side rendering, safe to use window
    console.log("Client-side rendering");
  }, []);

  const handleChatbotToggle = () => {
    setShowChatbot(!showChatbot);
  };

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

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar aiConsultationLink="/ai-consultation" />
      <main className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* AI Suggestion Section */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-semibold mb-8">AI-Powered Business Insights</h2>
          <ul className="list-disc list-inside text-lg text-gray-600">
            {aiSuggestions.map((suggestion, index) => (
              <li key={index} className="mb-2">{suggestion}</li>
            ))}
          </ul>
        </section>

        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Empower Your Business with AI-Driven Solutions and Data Analytics</h1>
          <p className="text-lg text-gray-600 mb-8">
            Welcome to AI Insight Hub, where cutting-edge AI technology meets data analytics to deliver smart solutions and actionable insights.
            Our expert services and personalized consultations leverage the power of AI to optimize your business processes, drive decision-making,
            and unlock growth opportunities.
          </p>
          <Button size="lg">Start Your AI-Driven Transformation Today</Button>
        </section>

        {/* Services Offered */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Services Offered</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI-Powered Business Strategy Consulting */}
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">AI-Powered Business Strategy Consulting</CardTitle>
                <CardDescription className="text-gray-500">
                  Use predictive analytics and AI algorithms to help businesses make informed decisions and drive future growth.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <Image
                  src="https://picsum.photos/200/150"
                  alt="AI Consulting"
                  width={200}
                  height={150}
                  className="rounded-md mb-4"
                />
                <p className="text-sm text-gray-500 mb-4">
                  We leverage AI to analyze market trends and provide strategic recommendations.
                </p>
                <div className="star-rating">
                  {renderStars(4)}
                </div>
                <Link href="/appointment-booking">
                  <Button className="mt-4 w-full">
                    Book an Appointment
                    <CalendarIcon className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Data Analytics and Reporting */}
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Data Analytics and Reporting</CardTitle>
                <CardDescription className="text-gray-500">
                  Provide detailed analytics reports to uncover insights about customer behavior, sales trends, and more, enabling businesses to
                  optimize operations and performance.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <Image
                  src="https://picsum.photos/201/150"
                  alt="Data Analytics"
                  width={200}
                  height={150}
                  className="rounded-md mb-4"
                />
                <p className="text-sm text-gray-500 mb-4">
                  Our reports offer actionable insights to improve your business performance.
                </p>
                <div className="star-rating">
                  {renderStars(5)}
                </div>
                <Link href="/appointment-booking">
                  <Button className="mt-4 w-full">
                    Book an Appointment
                    <CalendarIcon className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* AI-Driven Marketing Solutions */}
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">AI-Driven Marketing Solutions</CardTitle>
                <CardDescription className="text-gray-500">
                  Optimize marketing strategies using AI-powered tools like customer segmentation, predictive lead scoring, and personalized marketing
                  campaigns.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <Image
                  src="https://picsum.photos/202/150"
                  alt="AI Marketing"
                  width={200}
                  height={150}
                  className="rounded-md mb-4"
                />
                <p className="text-sm text-gray-500 mb-4">
                  Increase your marketing ROI with our AI-driven solutions.
                </p>
                <div className="star-rating">
                  {renderStars(3)}
                </div>
                <Link href="/appointment-booking">
                  <Button className="mt-4 w-full">
                    Book an Appointment
                    <CalendarIcon className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* AI Solutions for Process Automation */}
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">AI Solutions for Process Automation</CardTitle>
                <CardDescription className="text-gray-500">
                  Help businesses automate their workflows with AI, reducing operational costs and increasing efficiency.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <Image
                  src="https://picsum.photos/203/150"
                  alt="AI Automation"
                  width={200}
                  height={150}
                  className="rounded-md mb-4"
                />
                <p className="text-sm text-gray-500 mb-4">
                  Automate repetitive tasks and free up your resources with our AI solutions.
                </p>
                <div className="star-rating">
                  {renderStars(4)}
                </div>
                <Link href="/appointment-booking">
                  <Button className="mt-4 w-full">
                    Book an Appointment
                    <CalendarIcon className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Customized AI Solutions for Businesses */}
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Customized AI Solutions for Businesses</CardTitle>
                <CardDescription className="text-gray-500">Create and implement AI models tailored to your client's specific industry needs.</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <Image
                  src="https://picsum.photos/204/150"
                  alt="Custom AI"
                  width={200}
                  height={150}
                  className="rounded-md mb-4"
                />
                <p className="text-sm text-gray-500 mb-4">
                  We build custom AI models to address your unique business challenges.
                </p>
                <div className="star-rating">
                  {renderStars(5)}
                </div>
                <Link href="/appointment-booking">
                  <Button className="mt-4 w-full">
                    Book an Appointment
                    <CalendarIcon className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                title={testimonial.title}
                quote={testimonial.quote}
                rating={testimonial.rating}
                image={testimonial.image}
              />
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">How It Works</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="step-1">
              <AccordionTrigger>Step 1: AI &amp; Data Assessment</AccordionTrigger>
              <AccordionContent>
                We begin by understanding your business goals and collecting relevant data to assess your AI readiness.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="step-2">
              <AccordionTrigger>Step 2: Data Analysis and Insights Generation</AccordionTrigger>
              <AccordionContent>
                Our AI algorithms analyze your data to generate actionable insights and identify opportunities for improvement.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="step-3">
              <AccordionTrigger>Step 3: AI Solution Development &amp; Integration</AccordionTrigger>
              <AccordionContent>
                We develop and integrate custom AI models or analytics tools into your business operations.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="step-4">
              <AccordionTrigger>Step 4: Ongoing Monitoring and Optimization</AccordionTrigger>
              <AccordionContent>
                We continuously monitor performance and refine AI models to ensure long-term success and ROI.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* AI-Driven Tools */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">AI-Driven Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Title Optimizer</CardTitle>
                <CardDescription>Generate alternative titles and headlines based on keywords and SEO best practices.</CardDescription>
              </CardHeader>
              <CardContent>
                <TitleOptimizerForm />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Content Summarizer</CardTitle>
                <CardDescription>Automatically generate concise summaries of the provided content.</CardDescription>
              </CardHeader>
              <CardContent>
                <ContentSummarizer />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Form Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-8 text-center">Contact Us</h2>
          <ContactForm />
        </section>
      </main>

      {showChatbot && <Chatbot />}
      <div className="fixed bottom-4 right-4 z-40">
        <Button onClick={handleChatbotToggle}>
          {showChatbot ? 'Close Chatbot' : 'Open Chatbot'}
        </Button>
      </div>
    </div>
  );
}
