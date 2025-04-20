'use client';

import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import {ArrowLeft} from 'lucide-react';
import {Button} from "@/components/ui/button";
import {CalendarIcon} from "lucide-react";
import { useRouter } from 'next/navigation';
import Image from 'next/image';

// Define quiz categories
const quizCategories = [
  'AI & Analytics',
  'Mathematics',
  'Science & Technology',
  'General Knowledge',
  'History & Culture',
  'Geography',
  'Entertainment',
  'Sports',
];

// Mock function to fetch quiz questions from a CMS (replace with actual CMS fetch)
async function fetchQuizQuestions(category: string) {
  // Simulate fetching quiz questions from a CMS
  return new Promise((resolve) => {
    setTimeout(() => {
      const questions = [
        {
          question: `What is the primary method used for measuring website traffic in ${category}?`,
          options: ['Surveys', 'Analytics tools', 'Guesswork', 'Hallucination'],
          correctAnswer: 'Analytics tools',
        },
        {
          question: `A user answers 8 correct and 2 incorrect and has completed a level, what are their scores?`,
          options: ['80%', '20%', '100%', '0%'],
          correctAnswer: '80%',
        },
        {
          question: `Fill out with a random text?`,
          options: ['Yes', 'No'],
          correctAnswer: 'Yes',
        },
      ];
      resolve(questions);
    }, 500); // Simulate network delay
  });
}

const QuizPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function loadQuestions() {
      if (selectedCategory) {
        const fetchedQuestions = await fetchQuizQuestions(selectedCategory);
        setQuestions(fetchedQuestions);
        setCurrentQuestionIndex(0);
        setUserAnswers({});
        setQuizCompleted(false);
      }
    }

    loadQuestions();
  }, [selectedCategory]);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const handleAnswerSelect = (answer: string) => {
    setUserAnswers({
      ...userAnswers,
      [currentQuestionIndex]: answer,
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleSubmitQuiz = () => {
    setQuizCompleted(true);
  };

   const handleRegisterClick = () => {
        router.push('/quiz-registration');
    };

  return (
    <div className="container mx-auto py-12" style={{ backgroundImage: `url('/images/brno-quiz-bg.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
      <div className="flex justify-between items-center mb-8">
        <Link href="/" className="inline-flex items-center gap-2 text-lg" prefetch>
          <ArrowLeft className="h-5 w-5"/>
          Back to Home
        </Link>
      </div>

      {/* New Section for Quiz Night at Utopia */}
      <section className="text-center mb-8">
        <h2 className="text-3xl font-semibold mb-4">Brno Brain Battle at Utopia!</h2>
        <p className="text-lg text-gray-600 mb-4">
          Are you a local, tourist, or student? Come join us this Sunday at Utopia for an epic quiz night!
        </p>
        <Image
            src="/images/utopia-brno.jpg"
            alt="Utopia Brno"
            width={800}
            height={400}
            className="rounded-md mx-auto mb-4"
          />
        <p className="text-gray-700">
          Enjoy a cold beer, challenge your knowledge, and expand your connection list with new people. Don’t miss out on the fun—let’s make this Sunday unforgettable!
        </p>
      </section>

      <h1 className="text-3xl font-semibold text-center mb-8">AI Trivia Quiz</h1>

      {!selectedCategory ? (
        <div className="text-lg text-gray-600 mb-6 text-center">
          <p className="mb-4">Select a category to start the quiz!</p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {quizCategories.map((category) => (
              <Button key={category} onClick={() => handleCategorySelect(category)}
                className="transition-colors duration-300 bg-primary text-primary-foreground hover:bg-primary/80"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      ) : !quizCompleted ? (
        <div>
          {questions.length > 0 ? (
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-4">Question {currentQuestionIndex + 1}</h2>
              <p className="text-lg text-gray-700 mb-4">{questions[currentQuestionIndex].question}</p>
              <div className="space-y-2">
                {questions[currentQuestionIndex].options.map((option, index) => (
                  <Button
                    key={index}
                    variant={userAnswers[currentQuestionIndex] === option ? 'secondary' : 'outline'}
                    onClick={() => handleAnswerSelect(option)}
                    disabled={userAnswers[currentQuestionIndex] !== undefined}
                    className="transition-colors duration-300"
                  >
                    {option}
                  </Button>
                ))}
              </div>
              <Button
                className="mt-4 transition-colors duration-300 bg-accent text-accent-foreground hover:bg-accent-foreground hover:text-accent"
                onClick={handleNextQuestion}
                disabled={userAnswers[currentQuestionIndex] === undefined}
              >
                {currentQuestionIndex === questions.length - 1 ? 'Submit Quiz' : 'Next Question'}
              </Button>
            </div>
          ) : (
            <p>Loading questions...</p>
          )}
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Quiz Completed!</h2>
          <p className="text-lg text-gray-700 mb-4">Your Score: {calculateScore()}%</p>
          <h3 className="text-xl font-semibold mb-2">Answer Breakdown:</h3>
          <ul>
            {questions.map((question, index) => (
              <li key={index} className="mb-2">
                <p>
                  <strong>Question:</strong> {question.question}
                </p>
                <p>
                  <strong>Your Answer:</strong> {userAnswers[index] || 'Not answered'}
                </p>
                <p>
                  <strong>Correct Answer:</strong> {question.correctAnswer}
                  {userAnswers[index] === question.correctAnswer ? (
                    <span className="text-green-500"> (Correct)</span>
                  ) : (
                    <span className="text-red-500"> (Incorrect)</span>
                  )}
                </p>
              </li>
            ))}
          </ul>
          <Button onClick={() => setSelectedCategory(null)}
            className="transition-colors duration-300 bg-secondary text-secondary-foreground hover:bg-secondary/80"
          >
            Play Again
          </Button>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
