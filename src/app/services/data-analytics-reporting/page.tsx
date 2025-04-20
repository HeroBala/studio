'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import {Button} from "@/components/ui/button";
import Image from "next/image";

const DataAnalyticsReportingPage = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="flex justify-start mb-8">
        <Link href="/" className="inline-flex items-center gap-2 text-lg" prefetch>
          <ArrowLeft className="h-5 w-5" />
          Back to Home
        </Link>
      </div>
      <h1 className="text-3xl font-semibold text-center mb-8">Data Analytics and Reporting</h1>
      <p className="text-lg text-gray-600 mb-6">
        Learn more about our data analytics and reporting services. We provide detailed analytics reports to uncover insights about customer behavior, sales trends, and more.
      </p>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Data Analytics Services</h2>
        <ul className="list-disc list-inside">
          <li>Customer Behavior Analysis</li>
          <li>Sales Trends Analysis</li>
          <li>Detailed Analytics Reports</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Increased Customer Understanding</h3>
            <p className="text-gray-600">
              One of our clients saw a 40% increase in conversion rates after implementing our AI-driven marketing strategies.
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Sales Trends Optimization</h3>
            <p className="text-gray-600">
              Another client improved their marketing ROI by 50% through personalized AI-driven marketing automation.
            </p>
          </div>
        </div>
      </section>
      <section className="mb-8 flex justify-center">
        <Image
          src="https://picsum.photos/804/400"
          alt="ai"
          width={800}
          height={400}
          className="rounded-md mb-2"
        />
      </section>
    </div>
  );
};

export default DataAnalyticsReportingPage;
