'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import {Button} from "@/components/ui/button";
import Image from "next/image";

const AICybersecuritySolutionsPage = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="flex justify-start mb-8">
        <Link href="/" className="inline-flex items-center gap-2 text-lg" prefetch>
          <ArrowLeft className="h-5 w-5" />
          Back to Home
        </Link>
      </div>
      <h1 className="text-3xl font-semibold text-center mb-8">AI-Enhanced Cybersecurity Solutions</h1>
      <p className="text-lg text-gray-600 mb-6">
        Learn more about our AI-enhanced cybersecurity solutions. We protect businesses from advanced digital threats using cutting-edge AI technology.
      </p>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
        <p className="text-lg text-gray-600">
          With our AI solutions, businesses can protect their digital assets, reducing the risk of cyberattacks and data breaches.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our AI Cybersecurity Services</h2>
        <ul className="list-disc list-inside">
          <li>Threat Detection</li>
          <li>Intrusion Prevention</li>
          <li>Vulnerability Management</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Improved Threat Detection</h3>
            <p className="text-gray-600">
              One of our clients saw a 40% increase in threat detection after implementing our AI-driven cybersecurity strategies.
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Reduced Security Incidents</h3>
            <p className="text-gray-600">
              Another client reduced their security incidents by 50% through personalized AI-driven threat prevention.
            </p>
          </div>
        </div>
      </section>
      <section className="mb-8 flex justify-center">
        <Image
          src="https://picsum.photos/805/400"
          alt="ai"
          width={800}
          height={400}
          className="rounded-md mb-2"
        />
      </section>
    </div>
  );
};

export default AICybersecuritySolutionsPage;
