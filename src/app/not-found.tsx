'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import {Button} from "@/components/ui/button";

export default function NotFound() {
  const router = useRouter();
  const [quizAnswer, setQuizAnswer] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Basic quiz validation
    if (quizAnswer.toLowerCase() === 'ai') {
      alert('Correct! Redirecting to homepage.');
    } else {
      alert('Incorrect answer. Try again!');
      return;
    }
    router.push('/');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background text-foreground">
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
        />
        <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent-foreground hover:text-accent">
          Submit Answer
        </Button>
      </form>
    </div>
  );
}

