import Image from 'next/image';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion';
import {ContactForm} from '@/components/contact-form';
import {TitleOptimizerForm} from '@/components/title-optimizer-form';
import {ContentSummarizer} from '@/components/content-summarizer';

export default function Home() {
  return (
    <div className="container mx-auto py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Empower Your Business with AI-Driven Solutions and Data Analytics</h1>
        <p className="text-lg text-muted-foreground mb-8">
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
          <Card>
            <CardHeader>
              <CardTitle>AI-Powered Business Strategy Consulting</CardTitle>
              <CardDescription>
                Use predictive analytics and AI algorithms to help businesses make informed decisions and drive future growth.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="https://picsum.photos/200/150"
                alt="AI Consulting"
                width={200}
                height={150}
                className="rounded-md mb-4"
              />
              <p className="text-sm text-muted-foreground">
                We leverage AI to analyze market trends and provide strategic recommendations.
              </p>
            </CardContent>
          </Card>

          {/* Data Analytics and Reporting */}
          <Card>
            <CardHeader>
              <CardTitle>Data Analytics and Reporting</CardTitle>
              <CardDescription>
                Provide detailed analytics reports to uncover insights about customer behavior, sales trends, and more, enabling businesses to
                optimize operations and performance.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="https://picsum.photos/201/150"
                alt="Data Analytics"
                width={200}
                height={150}
                className="rounded-md mb-4"
              />
              <p className="text-sm text-muted-foreground">
                Our reports offer actionable insights to improve your business performance.
              </p>
            </CardContent>
          </Card>

          {/* AI-Driven Marketing Solutions */}
          <Card>
            <CardHeader>
              <CardTitle>AI-Driven Marketing Solutions</CardTitle>
              <CardDescription>
                Optimize marketing strategies using AI-powered tools like customer segmentation, predictive lead scoring, and personalized marketing
                campaigns.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="https://picsum.photos/202/150"
                alt="AI Marketing"
                width={200}
                height={150}
                className="rounded-md mb-4"
              />
              <p className="text-sm text-muted-foreground">
                Increase your marketing ROI with our AI-driven solutions.
              </p>
            </CardContent>
          </Card>

          {/* AI Solutions for Process Automation */}
          <Card>
            <CardHeader>
              <CardTitle>AI Solutions for Process Automation</CardTitle>
              <CardDescription>
                Help businesses automate their workflows with AI, reducing operational costs and increasing efficiency.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="https://picsum.photos/203/150"
                alt="AI Automation"
                width={200}
                height={150}
                className="rounded-md mb-4"
              />
              <p className="text-sm text-muted-foreground">
                Automate repetitive tasks and free up your resources with our AI solutions.
              </p>
            </CardContent>
          </Card>

          {/* Customized AI Solutions for Businesses */}
          <Card>
            <CardHeader>
              <CardTitle>Customized AI Solutions for Businesses</CardTitle>
              <CardDescription>Create and implement AI models tailored to your client's specific industry needs.</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="https://picsum.photos/204/150"
                alt="Custom AI"
                width={200}
                height={150}
                className="rounded-md mb-4"
              />
              <p className="text-sm text-muted-foreground">
                We build custom AI models to address your unique business challenges.
              </p>
            </CardContent>
          </Card>
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
    </div>
  );
}

