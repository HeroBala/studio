'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import {Button} from "@/components/ui/button";
import Image from "next/image";

const AIStrategyConsultingPage = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="flex justify-start mb-8">
        <Link href="/" className="inline-flex items-center gap-2 text-lg" prefetch>
          <ArrowLeft className="h-5 w-5" />
          Back to Home
        </Link>
      </div>
      <h1 className="text-3xl font-semibold text-center mb-8">AI-Powered Business Strategy Consulting</h1>
      <p className="text-lg text-gray-600 mb-6">
        Learn more about our AI-powered business strategy consulting services. We use predictive analytics and AI algorithms to help businesses make informed decisions and drive future growth.
      </p>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our AI Business Strategy Consulting Services</h2>
        <ul className="list-disc list-inside">
          <li>Predictive Analytics</li>
          <li>AI Algorithms</li>
          <li>Strategic Recommendations</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Improved Decision Making</h3>
            <p className="text-gray-600">
              One of our clients saw a 40% increase in conversion rates after implementing our AI-driven marketing strategies.
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Drive Future Growth</h3>
            <p className="text-gray-600">
              Another client improved their marketing ROI by 50% through personalized AI-driven marketing automation.
            </p>
          </div>
        </div>
      </section>
      <section className="mb-8 flex justify-center">
        <Image
          src="https://picsum.photos/802/400"
          alt="ai"
          width={800}
          height={400}
          className="rounded-md mb-2"
        />
      </section>
    </div>
  );
};

export default AIStrategyConsultingPage;
