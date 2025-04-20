'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import {Button} from "@/components/ui/button";

const QuizPage = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="flex justify-start mb-8">
        <Link href="/" className="inline-flex items-center gap-2 text-lg" prefetch>
          <ArrowLeft className="h-5 w-5" />
          Back to Home
        </Link>
      </div>
      <h1 className="text-3xl font-semibold text-center mb-8">Register for AI Quiz</h1>
      <p className="text-lg text-gray-600 mb-6 text-center">
        Join us every Sunday at 7:00 PM in Utopia, Brno for an exciting AI Quiz!
      </p>
      <div className="flex justify-center">
        <Button>
          <a href="https://example.com/quiz-registration" target="_blank" rel="noopener noreferrer">
            Register Here
          </a>
        </Button>
      </div>
    </div>
  );
};

export default QuizPage;

