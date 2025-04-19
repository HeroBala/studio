'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const CustomAISolutionsPage = () => {
  return (
    <div className="container mx-auto py-12">
      <Link href="/" className="mb-8 inline-flex items-center gap-2 text-lg" prefetch>
        <ArrowLeft className="h-5 w-5" />
        Back to Home
      </Link>
      <h1 className="text-3xl font-semibold text-center mb-8">Customized AI Solutions for Businesses</h1>
      <p className="text-lg text-gray-600 mb-6">
        Learn more about our customized AI solutions for businesses. We create and implement AI models tailored to your client's specific industry needs.
      </p>
      {/* Add more content here */}
    </div>
  );
};

export default CustomAISolutionsPage;
