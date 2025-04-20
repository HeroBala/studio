'use client';

import React from 'react';
import Link from 'next/link';
import {ArrowLeft} from 'lucide-react';
import {Button} from "@/components/ui/button";

const CareersPage = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="flex justify-start mb-8">
        <Link href="/" className="inline-flex items-center gap-2 text-lg" prefetch>
          <ArrowLeft className="h-5 w-5"/>
          Back to Home
        </Link>
      </div>
      <h1 className="text-3xl font-semibold text-center mb-8">Join Our Team</h1>
      <p className="text-lg text-gray-600 mb-6 text-center">
        Explore exciting career opportunities at AI Insight Hub.
      </p>

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
