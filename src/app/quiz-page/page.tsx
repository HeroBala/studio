'use client';

import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import {ArrowLeft} from 'lucide-react';
import {Button} from "@/components/ui/button";

// Define quiz categories
const quizCategories = [
  'Analytics',
  'Math',
  'Science',
  'General Knowledge',
  'History',
  'Technology',
  'Geography',
  'Entertainment',
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

  const calculateScore = () => {
    let correctAnswersCount = 0;
    questions.forEach((question, index) => {
      if (userAnswers[index] === question.correctAnswer) {
        correctAnswersCount++;
      }
    });
    return (correctAnswersCount / questions.length) * 100;
  };

  return (
    <div className="container mx-auto py-12">
      <div className="flex justify-start mb-8">
        <Link href="/" className="inline-flex items-center gap-2 text-lg" prefetch>
          <ArrowLeft className="h-5 w-5"/>
          Back to Home
        </Link>
      </div>
      <h1 className="text-3xl font-semibold text-center mb-8">AI Trivia Quiz</h1>

      {!selectedCategory ? (
        <div className="text-lg text-gray-600 mb-6 text-center">
          <p className="mb-4">Select a category to start the quiz!</p>
          <div className="flex flex-wrap justify-center gap-4">
            {quizCategories.map((category) => (
              <Button key={category} onClick={() => handleCategorySelect(category)}>
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
                  >
                    {option}
                  </Button>
                ))}
              </div>
              <Button
                className="mt-4"
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
          <Button onClick={() => setSelectedCategory(null)}>
            Play Again
          </Button>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
