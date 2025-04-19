'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const DataAnalyticsReportingPage = () => {
  return (
    <div className="container mx-auto py-12">
      <Link href="/" className="mb-8 inline-flex items-center gap-2 text-lg" prefetch>
        <ArrowLeft className="h-5 w-5" />
        Back to Home
      </Link>
      <h1 className="text-3xl font-semibold text-center mb-8">Data Analytics and Reporting</h1>
      <p className="text-lg text-gray-600 mb-6">
        Learn more about our data analytics and reporting services. We provide detailed analytics reports to uncover insights about customer behavior, sales trends, and more.
      </p>
      {/* Add more content here */}
    </div>
  );
};

export default DataAnalyticsReportingPage;
