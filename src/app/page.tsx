'use client';

import Image from 'next/image';
import Link from 'next/link';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion';
import {ContactForm} from '@/components/contact-form';
import {TitleOptimizerForm} from '@/components/title-optimizer-form';
import {ContentSummarizer} from '@/components/content-summarizer';
import {useEffect, useState, useRef} from 'react';
import {Navbar} from '@/components/navbar';
import Chatbot from '@/components/chatbot';
import dynamic from 'next/dynamic';
import {useInView} from 'react-intersection-observer';

const testimonials = [
  {
    name: 'Jane Doe',
    title: 'CEO, Company X',
    quote: "AI Insight Hub has revolutionized our business strategy. The insights we've gained have been invaluable.",
    rating: 5,
    image: 'https://lh3.googleusercontent.com/gps-proxy/AAWznzYjLzD0y-W990Gv9wE6N4QWJ8-B84-kX4Bf6Fp227nK_eD_48-8yRz7aN31B-2h1n19h8g3W5S6M5n6_vBHznKzYjHn323_Lg_87i1n304B6o-R6g2w=w408-h306-k-no',
  },
  {
    name: 'Richard Roe',
    title: 'CTO, Company Y',
    quote: "Their AI solutions automated our processes, saving us time and resources. Highly recommend!",
    rating: 4,
    image: 'https://lh3.googleusercontent.com/gps-proxy/AAWznzYjLzD0y-W990Gv9wE6N4QWJ8-B84-kX4Bf6Fp227nK_eD_48-8yRz7aN31B-2h1n19h8g3W5S6M5n6_vBHznKzYjHn323_Lg_87i1n304B6o-R6g2w=w408-h306-k-no',
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
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const chatbotRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Client-side rendering, safe to use window
    console.log("Client-side rendering");
    if (chatbotRef.current) {
      chatbotRef.current.scrollTop = chatbotRef.current.scrollHeight;
    }
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
      <Navbar aiConsultationLink="/appointment-booking" />
      <main className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 flex-grow">
        {/* AI Suggestion Section */}
        <section className="text-center mb-8">
          <h2 className="text-2xl font-semibold mb-4">AI-Powered Business Insights</h2>
          <ul className="list-disc list-inside text-lg text-gray-600">
            {aiSuggestions.map((suggestion, index) => (
              <li key={index} className="mb-1">{suggestion}</li>
            ))}
          </ul>
        </section>

        {/* Hero Section */}
        <section className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Empower Your Business with AI-Driven Solutions and Data Analytics</h1>
          <p className="text-lg text-gray-600 mb-6">
            Welcome to AI Insight Hub, where cutting-edge AI technology meets data analytics to deliver smart solutions and actionable insights.
            Our expert services and personalized consultations leverage the power of AI to optimize your business processes, drive decision-making,
            and unlock growth opportunities.
          </p>
          <Button size="lg" asChild>
            <Link href="/appointment-booking" prefetch>Start Your AI-Driven Transformation Today</Link>
          </Button>
        </section>

        {/* Services Offered */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">Services Offered</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* AI-Powered Business Strategy Consulting */}
            <Card className="hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">AI-Powered Business Strategy Consulting</CardTitle>
                <CardDescription className="text-gray-500">
                  Use predictive analytics and AI algorithms to help businesses make informed decisions and drive future growth.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4">
                <Image
                  src="https://picsum.photos/200/150"
                  alt="AI Consulting"
                  width={200}
                  height={150}
                  className="rounded-md mb-2"
                />
                <p className="text-sm text-gray-500 mb-2">
                  We leverage AI to analyze market trends and provide strategic recommendations.
                </p>
                <div className="flex items-center justify-between">
                  <div className="star-rating">
                    {renderStars(4)}
                  </div>
                  <Button variant="link" asChild>
                    <Link href="/services/ai-strategy-consulting" prefetch>Learn More</Link>
                  </Button>
                </div>
              </CardContent>
              <CardContent className="p-4 flex justify-end">
                <Button asChild>
                  <Link href="/appointment-booking" prefetch>Book an Appointment</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Data Analytics and Reporting */}
            <Card className="hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Data Analytics and Reporting</CardTitle>
                <CardDescription className="text-gray-500">
                  Provide detailed analytics reports to uncover insights about customer behavior, sales trends, and more, enabling businesses to
                  optimize operations and performance.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4">
                <Image
                  src="https://picsum.photos/201/150"
                  alt="Data Analytics"
                  width={200}
                  height={150}
                  className="rounded-md mb-2"
                />
                <p className="text-sm text-gray-500 mb-2">
                  Our reports offer actionable insights to improve your business performance.
                </p>
                <div className="flex items-center justify-between">
                  <div className="star-rating">
                    {renderStars(5)}
                  </div>
                  <Button variant="link" asChild>
                    <Link href="/services/data-analytics-reporting" prefetch>Learn More</Link>
                  </Button>
                </div>
              </CardContent>
              <CardContent className="p-4 flex justify-end">
                <Button asChild>
                  <Link href="/appointment-booking" prefetch>Book an Appointment</Link>
                </Button>
              </CardContent>
            </Card>

            {/* AI-Driven Marketing Solutions */}
            <Card className="hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">AI-Driven Marketing Solutions</CardTitle>
                <CardDescription className="text-gray-500">
                  Optimize marketing strategies using AI-powered tools like customer segmentation, predictive lead scoring, and personalized marketing
                  campaigns.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4">
                <Image
                  src="https://picsum.photos/202/150"
                  alt="AI Marketing"
                  width={200}
                  height={150}
                  className="rounded-md mb-2"
                />
                <p className="text-sm text-gray-500 mb-2">
                  Increase your marketing ROI with our AI-driven solutions.
                </p>
                <div className="flex items-center justify-between">
                  <div className="star-rating">
                    {renderStars(3)}
                  </div>
                  <Button variant="link" asChild>
                    <Link href="/services/ai-marketing-solutions" prefetch>Learn More</Link>
                  </Button>
                </div>
              </CardContent>
              <CardContent className="p-4 flex justify-end">
                <Button asChild>
                  <Link href="/appointment-booking" prefetch>Book an Appointment</Link>
                </Button>
              </CardContent>
            </Card>

            {/* AI Solutions for Process Automation */}
            <Card className="hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">AI Solutions for Process Automation</CardTitle>
                <CardDescription className="text-gray-500">
                  Help businesses automate their workflows with AI, reducing operational costs and increasing efficiency.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4">
                <Image
                  src="https://picsum.photos/203/150"
                  alt="AI Automation"
                  width={200}
                  height={150}
                  className="rounded-md mb-2"
                />
                <p className="text-sm text-gray-500 mb-2">
                  Automate repetitive tasks and free up your resources with our AI solutions.
                </p>
                <div className="flex items-center justify-between">
                  <div className="star-rating">
                    {renderStars(4)}
                  </div>
                  <Button variant="link" asChild>
                    <Link href="/services/ai-process-automation" prefetch>Learn More</Link>
                  </Button>
                </div>
              </CardContent>
              <CardContent className="p-4 flex justify-end">
                <Button asChild>
                  <Link href="/appointment-booking" prefetch>Book an Appointment</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Customized AI Solutions for Businesses */}
            <Card className="hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Customized AI Solutions for Businesses</CardTitle>
                <CardDescription className="text-gray-500">Create and implement AI models tailored to your client's specific industry needs.</CardDescription>
              </CardHeader>
              <CardContent className="p-4">
                <Image
                  src="https://picsum.photos/204/150"
                  alt="Custom AI"
                  width={200}
                  height={150}
                  className="rounded-md mb-2"
                />
                <p className="text-sm text-gray-500 mb-2">
                  We build custom AI models to address your unique business challenges.
                </p>
                <div className="flex items-center justify-between">
                  <div className="star-rating">
                    {renderStars(5)}
                  </div>
                  <Button variant="link" asChild>
                    <Link href="/services/custom-ai-solutions" prefetch>Learn More</Link>
                  </Button>
                </div>
              </CardContent>
              <CardContent className="p-4 flex justify-end">
                <Button asChild>
                  <Link href="/appointment-booking" prefetch>Book an Appointment</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

         {/* Our Team Section */}
         <section className="mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Team Member 1 */}
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-4">
                <Image
                  src="https://picsum.photos/100/100"
                  alt="Team Member 1"
                  width={100}
                  height={100}
                  className="rounded-full mx-auto mb-2"
                />
                <h3 className="text-lg font-semibold">John Smith</h3>
                <p className="text-sm text-gray-500">AI Specialist</p>
                <p className="text-sm text-gray-500">Expert in machine learning and AI solutions.</p>
              </CardContent>
            </Card>

            {/* Team Member 2 */}
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-4">
                <Image
                  src="https://picsum.photos/101/100"
                  alt="Team Member 2"
                  width={100}
                  height={100}
                  className="rounded-full mx-auto mb-2"
                />
                <h3 className="text-lg font-semibold">Emily Johnson</h3>
                <p className="text-sm text-gray-500">Data Analyst</p>
                <p className="text-sm text-gray-500">Expert in data analytics and reporting.</p>
              </CardContent>
            </Card>

            {/* Team Member 3 */}
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-4">
                <Image
                  src="https://picsum.photos/102/100"
                  alt="Team Member 3"
                  width={100}
                  height={100}
                  className="rounded-full mx-auto mb-2"
                />
                <h3 className="text-lg font-semibold">David Brown</h3>
                <p className="text-sm text-gray-500">Marketing Strategist</p>
                <p className="text-sm text-gray-500">Expert in AI-driven marketing solutions.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-500 text-sm">{testimonial.title}</p>
                  </div>
                </div>
                <blockquote>
                  <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                </blockquote>
                <div className="star-rating">
                  {renderStars(testimonial.rating)}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">How It Works</h2>
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
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">AI-Driven Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Title Optimizer</CardTitle>
                <CardDescription>Generate alternative titles and headlines based on keywords and SEO best practices.</CardDescription>
              </CardHeader>
              <CardContent className="p-4">
                <TitleOptimizerForm />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Content Summarizer</CardTitle>
                <CardDescription>Automatically generate concise summaries of the provided content.</CardDescription>
              </CardHeader>
              <CardContent className="p-4">
                <ContentSummarizer />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">Contact Us</h2>
          <ContactForm />
        </section>
      </main>

      {showChatbot && (
        <div className="fixed bottom-4 right-4 z-40" ref={chatbotRef}>
          <Chatbot />
        </div>
      )}
    </div>
  );
}
