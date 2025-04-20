'use client';

import React from 'react';
import Link from 'next/link';
import {ArrowLeft} from 'lucide-react';
import {Button} from "@/components/ui/button";

const teamData = [
  {
    id: 1,
    name: 'The AI Wizards',
    members: ['Alice', 'Bob', 'Charlie'],
    memberCount: 3,
    image: 'https://picsum.photos/id/237/200/150',
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Data Dominators',
    members: ['Diana', 'Eve', 'Frank'],
    memberCount: 3,
    image: 'https://picsum.photos/id/238/200/150',
    rating: 4.8,
  },
  {
    id: 3,
    name: 'Analytics Aces',
    members: ['Grace', 'Henry', 'Ivy'],
    memberCount: 3,
    image: 'https://picsum.photos/id/239/200/150',
    rating: 4.2,
  },
  {
    id: 4,
    name: 'Algorithm Alchemists',
    members: ['Jack', 'Kelly'],
    memberCount: 2,
    image: 'https://picsum.photos/id/240/200/150',
    rating: 4.9,
  },
];

const QuizRegistrationPage = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="flex justify-start mb-8">
        <Link href="/" className="inline-flex items-center gap-2 text-lg" prefetch>
          <ArrowLeft className="h-5 w-5"/>
          Back to Home
        </Link>
      </div>
      <h1 className="text-3xl font-semibold text-center mb-8">Register for AI Trivia Quiz</h1>
      <p className="text-lg text-gray-600 mb-6 text-center">
        Join a team and test your AI knowledge in our weekly quiz!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamData.map((team) => (
          <div key={team.id} className="border rounded-lg p-4">
            <img src={team.image} alt={team.name} className="w-full h-32 object-cover rounded-md mb-4"/>
            <h3 className="text-xl font-semibold mb-2">{team.name}</h3>
            <p className="text-gray-500">Members: {team.members.join(', ')}</p>
            <p className="text-gray-500">Team Size: {team.memberCount}</p>
            <div className="flex items-center mt-2">
              <span className="text-yellow-500 mr-1">Rating:</span>
              <span>{team.rating}</span>
            </div>
            <Button className="mt-4">Join Team</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizRegistrationPage;
