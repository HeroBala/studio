'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import {Button} from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  const router = useRouter();
  const [quizAnswer, setQuizAnswer] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Basic quiz validation
    if (quizAnswer.toLowerCase() === 'ai') {
      setFeedbackMessage('Correct! Redirecting to homepage...');
      setIsCorrect(true);
    } else {
      setFeedbackMessage('Incorrect answer. Try again!');
      setIsCorrect(false);
    }
  };

  useEffect(() => {
    if (feedbackMessage) {
      const timer = setTimeout(() => {
        router.push('/');
      }, 3000); // Redirect after 3 seconds

      return () => clearTimeout(timer); // Clear timeout if component unmounts
    }
  }, [feedbackMessage, router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background text-foreground">
       <div className="flex justify-start mt-8">
        <Link href="/" className="inline-flex items-center gap-2 text-lg" prefetch>
          <ArrowLeft className="h-5 w-5"/>
          Back to Home
        </Link>
      </div>
      <h1 className="text-4xl font-semibold mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Oops! The page you are looking for does not exist.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
        <label htmlFor="quiz" className="text-lg font-semibold">
          What powers our insights?
        </label>
        <input
          type="text"
          id="quiz"
          className="border rounded-md p-2 w-64 text-black"
          placeholder="Enter your answer"
          value={quizAnswer}
          onChange={(e) => setQuizAnswer(e.target.value)}
          disabled={feedbackMessage !== ''}
        />
        <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent-foreground hover:text-accent" disabled={feedbackMessage !== ''}>
          Submit Answer
        </Button>
      </form>

      {feedbackMessage && (
        <div className={`mt-4 p-4 rounded-md ${isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'} animate-pulse`}>
          {feedbackMessage}
        </div>
      )}
    </div>
  );
}




