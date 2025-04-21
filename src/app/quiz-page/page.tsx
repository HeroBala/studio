'use client';

import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import {ArrowLeft} from 'lucide-react';
import {Button} from "@/components/ui/button";
import {CalendarIcon} from "lucide-react";
import {useRouter} from 'next/navigation';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

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

  const calculateScore = () => {
    let correctAnswersCount = 0;
    questions.forEach((question, index) => {
      if (userAnswers[index] === question.correctAnswer) {
        correctAnswersCount++;
      }
    });
    return ((correctAnswersCount / questions.length) * 100).toFixed(2);
  };

  const utopiaProducts = [
    {
      name: 'Snacks',
      description: 'Enjoy a variety of tasty snacks during the quiz.',
      image: '/images/snacks.jpg',
    },
    {
      name: 'Beer',
      description: 'Selection of beers to quench your thirst.',
      image: '/images/beer.jpg',
    },
    {
      name: 'Tea',
      description: 'A variety of teas to quench your thirst.',
      image: '/images/tea.jpg',
    },
     {
      name: 'Cold Tea',
      description: 'Selection of cold teas to quench your thirst.',
      image: '/images/cold_tea.jpg',
    },
     {
      name: 'Hookah',
      description: 'Selection of hookah to make more fun.',
      image: '/images/hookah.jpg',
    },
     {
      name: 'Food',
      description: 'Selection of foods to make more hunger to make it easier to win.',
      image: '/images/foods.jpg',
    },
     {
      name: 'Non alcoholic',
      description: 'Selection of non alcoholic for health.',
      image: '/images/non_alcholic.jpg',
    },
      {
      name: 'Pool',
      description: 'selection of pool.',
      image: '/images/pool.jpg',
    },
      {
      name: 'Chess',
      description: 'selection of Chess.',
      image: '/images/chess.jpg',
    },
  ];

  const handleRegisterClick = () => {
    router.push('/quiz-registration');
  };

  const winningTeams = [
    {
      name: "The Algoslingers",
      image: "https://picsum.photos/id/300/800/450",
      description: "A team of machine learning specialists.",
      wins: 5,
    },
    {
      name: "The Data Ninjas",
      image: "https://picsum.photos/id/301/800/450",
      description: "Experts in data mining and analysis.",
      wins: 3,
    },
    {
      name: "The Neural Nets",
      image: "https://picsum.photos/id/302/800/450",
      description: "Passionate about neural networks and deep learning.",
      wins: 2,
    },
  ];

  return (
    <div className="container mx-auto py-12" style={{backgroundImage: `url('/images/brno-quiz-bg.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh'}}>
      <div className="flex justify-between items-center mb-8">
        <Link href="/" className="inline-flex items-center gap-2 text-lg" prefetch>
          <ArrowLeft className="h-5 w-5"/>
          Back to Home
        </Link>
        <div className="space-x-4">
          <Button onClick={() => router.push('/moderator-application')}
            className="transition-colors duration-300 bg-accent text-accent-foreground hover:bg-accent-foreground hover:text-accent"
          >
            Be an Event Moderator🎙️
          </Button>
        </div>
      </div>

      {/* New Section for Quiz Night at Utopia */}
      <section className="text-center mb-8">
        <h2 className="text-3xl font-semibold mb-4">Brno Brain Battle </h2>
        {/* Replace the paragraph and button with the following */}
        
        <Button className="transition-colors duration-300 bg-primary text-primary-foreground hover:bg-primary/80 pulse" onClick={handleRegisterClick}>
        Register for Quiz <CalendarIcon className="w-4 h-4 ml-2" />
          </Button>
          
          {/* Hall of Fame Section */}
          <section className="mb-8 mt-8">
            <h2 className="text-3xl font-semibold mb-4 text-center">Hall of Fame</h2>
            {/*Display only one team at a time */}
            <div className="flex overflow-x-auto snap-x">
            {winningTeams.slice(0, 1).map((team, index) => (
              <div key={index} className="snap-start w-full flex-shrink-0 p-4">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={team.image}
                    alt={team.name}
                    width={800}
                    height={450}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">
                      {index === 0 && <span className="mr-2">👑</span>} {/* Crown for the top team */}
                      {team.name}
                    </h3>
                    <p className="text-gray-600">{team.description}</p>
                    <p className="text-sm text-gray-500">Wins: {team.wins}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </section>

         {/* Utopia's Treats Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-center">Utopia's Treats</h2>
          <p className="text-lg text-gray-600 mb-4 text-center">
            Fuel your brainpower with these tasty offerings!
          </p>

          {/* Display Product Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {utopiaProducts.map((product, index) => (
              <Card key={index} className="border rounded-lg p-4">
                <CardHeader>
                  <CardTitle>{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <Image src={product.image} alt={product.name} className="w-full h-32 object-cover rounded-md mb-4" width={300} height={200}/>
                <CardContent>
                  <Button>View More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </section>

      <h1 className="text-3xl font-semibold text-center mb-8">AI Trivia Quiz</h1>

      {!selectedCategory ? (
       <div className="text-lg text-gray-600 mb-6 text-center">
          <p className="mb-4">Ready to Compete in All Categories?</p>
          <Button
            onClick={() => handleCategorySelect('All Categories')}
            className="transition-colors duration-300 bg-primary text-primary-foreground hover:bg-primary/80"
          >
            Start the Ultimate Quiz Challenge!
          </Button>
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
