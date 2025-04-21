import React from 'react';
import Link from 'next/link';
import {ArrowLeft} from 'lucide-react';
import {Button} from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {Progress} from "@/components/ui/progress";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const CareersPage = () => {
  const applicationData = [
    {
      position: "AI Consultant",
      date: "2024-07-01",
      status: "Accepted",
      feedback: "Excellent qualifications and experience.",
    },
    {
      position: "Data Scientist",
      date: "2024-06-15",
      status: "Rejected",
      feedback: "Did not meet specific technical requirements.",
    },
    {
      position: "Marketing Specialist",
      date: "2024-06-01",
      status: "Pending",
      feedback: null,
    },
  ];

  const ongoingApplicationData = [
    {
      position: "AI Solutions Architect",
      date: "2024-07-15",
      progress: 25,
      stage: "Application Submitted",
    },
    {
      position: "Machine Learning Engineer",
      date: "2024-07-10",
      progress: 50,
      stage: "Interview Scheduled",
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <div className="flex justify-start mb-8">
        <Link href="/" className="inline-flex items-center gap-2 text-lg" prefetch>
          <ArrowLeft className="h-5 w-5"/>
          Back to Home
        </Link>
      </div>
      <h1 className="text-3xl font-semibold text-center mb-8">Join Our Team</h1>
      <p className="text-lg text-muted-foreground mb-6 text-center">
        Explore exciting career opportunities at AI Insight Hub.
      </p>
      <div className="flex justify-center mb-8">
        <Link href="/teams" className="inline-flex items-center gap-2 text-lg">
          Meet Our Teams
        </Link>
      </div>

      {/* New Dashboard Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Your Application Dashboard</h2>
        {/* Previous Applications */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Previous Applications</h3>
          <div className="overflow-x-auto">
            <Table>
              <TableCaption>A list of your previous applications.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Position</TableHead>
                  <TableHead>Application Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Feedback</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {applicationData.map((app, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{app.position}</TableCell>
                    <TableCell>{app.date}</TableCell>
                    <TableCell>{app.status}</TableCell>
                    <TableCell>{app.feedback || "No feedback provided."}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Ongoing Applications */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Ongoing Applications</h3>
          <ul className="space-y-4">
            {ongoingApplicationData.map((app, index) => (
              <li key={index} className="border rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-lg font-semibold">{app.position}</h4>
                  <span className="text-sm text-muted-foreground">{app.date}</span>
                </div>
                <p className="text-sm text-muted-foreground">Stage: {app.stage}</p>
                <Progress value={app.progress}/>
                <p className="text-sm text-muted-foreground mt-2">Progress: {app.progress}%</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Open Positions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Job Card 1 */}
          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">AI Consultant</h3>
            <p className="text-gray-600">
              We are looking for experienced AI consultants to help our clients implement innovative AI solutions.
            </p>
            <Button className="mt-4">
              <a href="https://example.com/ai-consultant-apply" target="_blank" rel="noopener noreferrer">
                Apply Now
              </a>
            </Button>
          </div>

          {/* Job Card 2 */}
          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Data Scientist</h3>
            <p className="text-gray-600">
              Join our team of data scientists and work on cutting-edge projects in machine learning and data analysis.
            </p>
            <Button className="mt-4">
              <a href="https://example.com/data-scientist-apply" target="_blank" rel="noopener noreferrer">
                Apply Now
              </a>
            </Button>
          </div>

          {/* Job Card 3 */}
          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Marketing Specialist</h3>
            <p className="text-gray-600">
              We need a marketing specialist to drive our marketing strategies and increase brand awareness.
            </p>
            <Button className="mt-4">
              <a href="https://example.com/marketing-specialist-apply" target="_blank" rel="noopener noreferrer">
                Apply Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
