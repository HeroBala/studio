'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Image from "next/image";

const AIMarketingSolutionsPage = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="flex justify-start mb-8">
        <Link href="/" className="inline-flex items-center gap-2 text-lg" prefetch>
          <ArrowLeft className="h-5 w-5" />
          Back to Home
        </Link>
      </div>
      <h1 className="text-3xl font-semibold text-center mb-8">AI-Driven Marketing Solutions</h1>
      <p className="text-lg text-gray-600 mb-6">
        Explore how AI-driven marketing solutions can transform your business.
        We use AI-powered tools like customer segmentation, predictive lead scoring, and personalized marketing campaigns to optimize marketing strategies.
      </p>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our AI Marketing Services</h2>
        <ul className="list-disc list-inside">
          <li>Customer Segmentation</li>
          <li>Predictive Lead Scoring</li>
          <li>Personalized Marketing Campaigns</li>
          <li>Marketing Automation</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Increased Conversion Rates</h3>
            <p className="text-gray-600">
              One of our clients saw a 40% increase in conversion rates after implementing our AI-driven marketing strategies.
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Improved ROI</h3>
            <p className="text-gray-600">
              Another client improved their marketing ROI by 50% through personalized AI-driven marketing automation.
            </p>
          </div>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
        <p className="text-lg text-gray-600">
          We help businesses automate their workflows with AI, reducing operational costs and increasing efficiency.
        </p>
      </section>
      <section className="mb-8 flex justify-center">
        <Image
          src="https://picsum.photos/800/400"
          alt="ai"
          width={800}
          height={400}
          className="rounded-md mb-2"
        />
      </section>
    </div>
  );
};

export default AIMarketingSolutionsPage;
