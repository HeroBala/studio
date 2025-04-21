'use client';

import Image from 'next/image';
import Link from 'next/link';
import {Button} from '@/components/ui/button';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {ContactForm} from '@/components/contact-form';
import {useEffect, useState, useRef} from 'react';
import {Navbar} from '@/components/navbar';
import TestimonialCard from '@/components/testimonial-card';
import {CalendarIcon, ArrowRight} from "lucide-react";
import {cn} from "@/lib/utils";
import {Badge} from "@/components/ui/badge";
import {formatDistanceToNow, nextSunday, set, isSunday, addDays} from 'date-fns';
import {useRouter} from "next/navigation";

const testimonials = [
  {
    name: 'Jane Cooper',
    title: 'CEO, Acme Co.',
    quote: 'AI Insight Hub has transformed our business strategy with actionable insights!',
    rating: 5,
    image: 'https://lh3.googleusercontent.com/a/ACg8ocI_VzwbRDThv6VNN2jDyJru4ZECjIFZ6XUPe26W=w256-h256-k-no',
  },
  {
    name: 'John Smith',
    title: 'Marketing Manager, Beta Corp',
    quote: 'Their AI-driven marketing solutions have significantly increased our ROI.',
    rating: 4,
    image: 'https://lh3.googleusercontent.com/a/ACg8ocJ92F-ZtD_RlWTnKk-iaaR9eU0DcYwrW_1E8a7E=w256-h256-k-no',
  },
  {
    name: 'Emily Johnson',
    title: 'Data Analyst, Gamma Inc.',
    quote: 'The data analytics and reporting services are top-notch and very insightful.',
    rating: 5,
    image: 'https://lh3.googleusercontent.com/a/ACg8ocI1gYvJ59wO1_v9n62W9O6d9wLMWK-PzB-yE02p=w256-h256-k-no',
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
  const [currentSection, setCurrentSection] = useState('AI-Driven Solutions and Data Analytics');
  const router = useRouter();
  const titleRef = useRef<HTMLSpanElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleSectionChange = (sectionName: string) => {
    setCurrentSection(sectionName);
  };

  const handleCareersClick = () => {
    if (onSectionChange) {
      onSectionChange('Join Our Team');
    }
    router.push('/careers');
  };

   // August 7, 2024, 7:00 PM (Sunday)
  const [timeRemaining, setTimeRemaining] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Get the current date
      const now = new Date();

      // Find the next Sunday
      let nextSundayDate = nextSunday(now);

      // If today is Sunday, set the date to today
      if (isSunday(now)) {
        nextSundayDate = now;
      }
      // Set the time to 7:00 PM
      const quizTime = set(nextSundayDate, {
        hours: 19,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
      });

      const timeDiff = formatDistanceToNow(quizTime, {addSuffix: true});
      setTimeRemaining(timeDiff);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleQuizRegisterClick = () => {
    router.push('/quiz-registration');
  };

  const winningTeams = [
    {
      name: "The Algoslingers",
      image: "https://picsum.photos/id/300/800/450",
      description: "A team of machine learning specialists."
    },
    {
      name: "The Data Ninjas",
      image: "https://picsum.photos/id/301/800/450",
      description: "Experts in data mining and analysis."
    },
    {
      name: "The Neural Nets",
      image: "https://picsum.photos/id/302/800/450",
      description: "Passionate about neural networks and deep learning."
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar aiConsultationLink="/appointment-booking" onSectionChange={handleSectionChange} />
      <Badge className="z-50 top-2 right-2 text-white">Under Construction</Badge>
      <main className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 flex-grow">
        {/* Advertize Section */}
        <section
          className="mb-8 text-center relative rounded-lg p-6"
          style={{
            backgroundImage: "url('/images/utopia.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backgroundBlendMode: 'overlay',
            color: 'white',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease-in-out',
          }}
        >
           <Badge className="absolute top-2 right-2">Cheers With Beers</Badge>
          <h2 className="text-3xl font-semibold mb-4" style={{
            color: 'white',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
          }}>
            Sunday Funday in Brno!
          </h2>
          <p className="text-lg mb-4" style={{
            color: 'white',
            fontWeight: 'bold',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)',
          }}>
            Are you a local, tourist, or student? Come join us this Sunday at Utopia for an epic quiz night! Enjoy a cold beer, challenge your knowledge, and expand your connection list with new people. Don’t miss out on the fun—let’s make this Sunday unforgettable!
          </p>
          <p className="text-sm mb-4" style={{
            color: 'white',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)',
          }}>Time Remaining: {timeRemaining}</p>
          <div className="flex justify-center">
            <Button asChild className="group inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/80 pulse" onClick={handleQuizRegisterClick}>
              <Link href="/quiz-page" prefetch className="flex items-center gap-1">
                Visit Now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1"/>
              </Link>
            </Button>
          </div>
        </section>

        {/* Hero Section */}
        <section className="text-center mb-8">
          <h1 className="text-3xl font-semibold mb-4">{currentSection}</h1>
          <p className="text-lg text-muted-foreground mb-8">Empower Your Business with AI-Driven Solutions and Data Analytics</p>
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
        <section id="services" className="mb-8">
          <h2 className="text-3xl font-semibold mb-8 text-center">Services Offered</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Strategy & Planning */}
            <div className="hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
              <div className="text-2xl font-semibold leading-none tracking-tight">Strategy & Planning</div>
              <div className="text-sm text-muted-foreground">Define your business goals and create a roadmap for success using AI-powered insights and market analysis.</div>
              </div>
              <div className="p-6 pt-0">
              <ul className="list-disc list-inside text-sm text-muted-foreground mb-2">
                <li>Market Opportunity Analysis</li>
                <li>Strategic Roadmap Development</li>
                <li>Goal Setting and KPIs</li>
              </ul>
              <p className="text-sm text-muted-foreground mb-2">Tools: AI Market Research, Predictive Analytics</p>
              <p className="text-sm text-muted-foreground">"This service helped us clarify our vision and set achievable goals." - Happy Client</p>
              </div>
              <div className="p-6 flex justify-end">
                <Link href="/services/ai-strategy-consulting" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary underline-offset-4 hover:underline h-10 px-4 py-2" prefetch>Learn More</Link>
                <Link href="/appointment-booking" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2" prefetch>Book Appointment</Link>
              </div>
            </div>

          {/* Smart E-Shop Builder */}
            <div className="hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
              <div className="text-2xl font-semibold leading-none tracking-tight">Smart E-Shop Builder</div>
              <div className="text-sm text-muted-foreground">Launch a powerful online store with AI-driven product recommendations and personalized shopping experiences.</div>
              </div>
              <div className="p-6 pt-0">
              <ul className="list-disc list-inside text-sm text-muted-foreground mb-2">
                <li>E-commerce Platform Setup</li>
                <li>AI Product Recommendations</li>
                <li>Personalized User Experience</li>
              </ul>
              <p className="text-sm text-muted-foreground mb-2">Tools: Shopify, WooCommerce, AI Recommendation Engines</p>
              <p className="text-sm text-muted-foreground">"Our sales skyrocketed after implementing the Smart E-Shop Builder!" - E-commerce Store Owner</p>
              </div>
              <div className="p-6 flex justify-end">
                <Link href="/services/smart-eshop-builder" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary underline-offset-4 hover:underline h-10 px-4 py-2" prefetch>Learn More</Link>
                <Link href="/appointment-booking" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2" prefetch>Book Appointment</Link>
              </div>
            </div>

          {/* AI Business Assistant */}
            <div className="hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
              <div className="text-2xl font-semibold leading-none tracking-tight">AI Business Assistant</div>
              <div className="text-sm text-muted-foreground">Automate routine tasks, manage communications, and improve productivity with your AI-powered virtual assistant.</div>
              </div>
              <div className="p-6 pt-0">
              <ul className="list-disc list-inside text-sm text-muted-foreground mb-2">
                <li>Task Automation</li>
                <li>Intelligent Scheduling</li>
                <li>Communication Management</li>
              </ul>
              <p className="text-sm text-muted-foreground mb-2">Tools: Zapier, IFTTT, Custom AI Assistants</p>
              <p className="text-sm text-muted-foreground">"My AI assistant handles all the small tasks, so I can focus on what matters." - Busy Entrepreneur</p>
              </div>
              <div className="p-6 flex justify-end">
                <Link href="/services/ai-process-automation" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary underline-offset-4 hover:underline h-10 px-4 py-2" prefetch>Learn More</Link>
                <Link href="/appointment-booking" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2" prefetch>Book Appointment</Link>
              </div>
            </div>

          {/* AI-Powered Digital Marketing Engine */}
            <div className="hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
              <div className="text-2xl font-semibold leading-none tracking-tight">AI-Powered Digital Marketing Engine</div>
              <div className="text-sm text-muted-foreground">Maximize your online reach and engagement with AI-driven ad optimization, content strategy, and social media management.</div>
              </div>
              <div className="p-6 pt-0">
              <ul className="list-disc list-inside text-sm text-muted-foreground mb-2">
                <li>AI Ad Optimization</li>
                <li>Content Strategy & Creation</li>
                <li>Social Media Automation</li>
              </ul>
              <p className="text-sm text-muted-foreground mb-2">Tools: Google Ads, Facebook Ads Manager, AI Content Generators</p>
              <p className="text-sm text-muted-foreground">"Our digital marketing campaigns are now smarter and more effective thanks to this service." - Marketing Director</p>
              </div>
              <div className="p-6 flex justify-end">
                <Link href="/services/ai-marketing-solutions" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary underline-offset-4 hover:underline h-10 px-4 py-2" prefetch>Learn More</Link>
                <Link href="/appointment-booking" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2" prefetch>Book Appointment</Link>
              </div>
            </div>

          {/* Data-Driven Business Dashboard */}
            <div className="hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
              <div className="text-2xl font-semibold leading-none tracking-tight">Data-Driven Business Dashboard</div>
              <div className="text-sm text-muted-foreground">Visualize key performance indicators (KPIs) and make informed decisions with a centralized, AI-powered dashboard.</div>
              </div>
              <div className="p-6 pt-0">
              <ul className="list-disc list-inside text-sm text-muted-foreground mb-2">
                <li>KPI Tracking & Visualization</li>
                <li>Real-Time Data Analytics</li>
                <li>Customizable Reporting</li>
              </ul>
              <p className="text-sm text-muted-foreground mb-2">Tools: Tableau, Power BI, Custom AI Dashboards</p>
              <p className="text-sm text-muted-foreground">"The dashboard gives us a clear, up-to-date view of our business performance." - Operations Manager</p>
            </div>
              <div className="p-6 flex justify-end">
                <Link href="/services/data-analytics-reporting" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary underline-offset-4 hover:underline h-10 px-4 py-2" prefetch>Learn More</Link>
                <Link href="/appointment-booking" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2" prefetch>Book Appointment</Link>
              </div>
          </div>

          {/* AI Content Studio */}
            <div className="hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
              <div className="text-2xl font-semibold leading-none tracking-tight">AI Content Studio</div>
              <div className="text-sm text-muted-foreground">Generate high-quality content for your website, blog, or social media channels using advanced AI writing tools.</div>
              </div>
              <div className="p-6 pt-0">
              <ul className="list-disc list-inside text-sm text-muted-foreground mb-2">
                <li>Blog Post Generation</li>
                <li>Social Media Content</li>
                <li>Website Copywriting</li>
              </ul>
              <p className="text-sm text-muted-foreground mb-2">Tools: GPT-3, Copy.ai, Jasper</p>
              <p className="text-sm text-muted-foreground">"AI Content Studio helps us maintain a consistent and engaging online presence." - Content Strategist</p>
              </div>
              <div className="p-6 flex justify-end">
                <Link href="/services/custom-ai-solutions" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary underline-offset-4 hover:underline h-10 px-4 py-2" prefetch>Learn More</Link>
                <Link href="/appointment-booking" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2" prefetch>Book Appointment</Link>
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

        {/* Our Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="border rounded-lg p-4 text-center">
              <Image
                src="https://picsum.photos/100/100"
                alt="John Doe"
                width={100}
                height={100}
                className="rounded-full mx-auto mb-2"
              />
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-gray-500">CEO</p>
              <p className="text-gray-600">John is an experienced executive with a passion for leveraging AI to drive business growth.</p>
            </div>
            {/* Team Member 2 */}
            <div className="border rounded-lg p-4 text-center">
              <Image
                src="https://picsum.photos/101/100"
                alt="Jane Smith"
                width={100}
                height={100}
                className="rounded-full mx-auto mb-2"
              />
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p className="text-gray-500">CTO</p>
               <p className="text-gray-600">Jane is a technology expert with a focus on creating innovative AI solutions.</p>
            </div>
            {/* Team Member 3 */}
            <div className="border rounded-lg p-4 text-center">
              <Image
                src="https://picsum.photos/102/100"
                alt="Mike Johnson"
                width={100}
                height={100}
                className="rounded-full mx-auto mb-2"
              />
              <h3 className="text-xl font-semibold">Mike Johnson</h3>
              <p className="text-gray-500">Lead Data Scientist</p>
              <p className="text-gray-600">Mike is a data science leader specializing in machine learning and predictive analytics.</p>
            </div>
             {/* Team Member 4 */}
            <div className="border rounded-lg p-4 text-center">
              <Image
                src="https://picsum.photos/103/100"
                alt="Alice Brown"
                width={100}
                height={100}
                className="rounded-full mx-auto mb-2"
              />
              <h3 className="text-xl font-semibold">Alice Brown</h3>
              <p className="text-gray-500">Marketing Director</p>
              <p className="text-gray-600">Alice leads marketing efforts, focusing on AI-driven strategies to enhance brand awareness.</p>
            </div>
            {/* Team Member 5 */}
            <div className="border rounded-lg p-4 text-center">
              <Image
                src="https://picsum.photos/104/100"
                alt="David Lee"
                width={100}
                height={100}
                className="rounded-full mx-auto mb-2"
              />
              <h3 className="text-xl font-semibold">David Lee</h3>
              <p className="text-gray-500">AI Consultant</p>
              <p className="text-gray-600">David advises clients on AI implementations, ensuring optimal solutions for their unique needs.</p>
            </div>
             {/* Team Member 6 */}
            <div className="border rounded-lg p-4 text-center">
              <Image
                src="https://picsum.photos/105/100"
                alt="Sarah Green"
                width={100}
                height={100}
                className="rounded-full mx-auto mb-2"
              />
              <h3 className="text-xl font-semibold">Sarah Green</h3>
              <p className="text-gray-500">Data Analyst</p>
              <p className="text-gray-600">Sarah provides expertise in data analysis and reporting, delivering actionable insights to clients.</p>
            </div>
             {/* Team Member 7 */}
            <div className="border rounded-lg p-4 text-center">
              <Image
                src="https://picsum.photos/106/100"
                alt="Bob Williams"
                width={100}
                height={100}
                className="rounded-full mx-auto mb-2"
              />
              <h3 className="text-xl font-semibold">Bob Williams</h3>
              <p className="text-gray-500">Cybersecurity Expert</p>
              <p className="text-gray-600">Bob specializes in AI-enhanced cybersecurity solutions, protecting businesses from advanced digital threats.</p>
            </div>
          </div>
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

''
