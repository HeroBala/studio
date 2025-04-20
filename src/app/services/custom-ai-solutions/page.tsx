'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import {Button} from "@/components/ui/button";
import Image from "next/image";

const CustomAISolutionsPage = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="flex justify-start mb-8">
        <Link href="/" className="inline-flex items-center gap-2 text-lg" prefetch>
          <ArrowLeft className="h-5 w-5" />
          Back to Home
        </Link>
      </div>
      <h1 className="text-3xl font-semibold text-center mb-8">Customized AI Solutions for Businesses</h1>
      <p className="text-lg text-gray-600 mb-6">
        Learn more about our customized AI solutions for businesses. We create and implement AI models tailored to your client's specific industry needs.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our AI Business Strategy Consulting Services</h2>
        <ul className="list-disc list-inside">
          <li>AI Model Development</li>
          <li>Custom AI Implementation</li>
          <li>Tailored Solutions</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Custom AI Development</h3>
            <p className="text-gray-600">
              One of our clients saw a 40% increase in conversion rates after implementing our AI-driven marketing strategies.
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Bespoke Analytics Solutions</h3>
            <p className="text-gray-600">
              Another client improved their marketing ROI by 50% through personalized AI-driven marketing automation.
            </p>
          </div>
        </div>
      </section>
      <section className="mb-8 flex justify-center">
        <Image
          src="https://picsum.photos/803/400"
          alt="ai"
          width={800}
          height={400}
          className="rounded-md mb-2"
        />
      </section>
    </div>
  );
};

export default CustomAISolutionsPage;
