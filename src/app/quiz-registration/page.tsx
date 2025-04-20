'use client';

import React from 'react';
import Link from 'next/link';
import {ArrowLeft} from 'lucide-react';
import {Button} from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image";

const teamData = [
  {
    id: 1,
    name: 'The AI Wizards',
    members: ['Alice', 'Bob', 'Charlie'],
    memberCount: 3,
    image: 'https://picsum.photos/id/237/200/150',
  },
  {
    id: 2,
    name: 'Data Dominators',
    members: ['Diana', 'Eve', 'Frank'],
    memberCount: 3,
    image: 'https://picsum.photos/id/238/200/150',
  },
  {
    id: 3,
    name: 'Analytics Aces',
    members: ['Grace', 'Henry', 'Ivy'],
    memberCount: 3,
    image: 'https://picsum.photos/id/239/200/150',
  },
  {
    id: 4,
    name: 'Algorithm Alchemists',
    members: ['Jack', 'Kelly'],
    memberCount: 2,
    image: 'https://picsum.photos/id/240/200/150',
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
           <Card key={team.id} className="border rounded-lg p-4">
             <CardHeader>
                <CardTitle>{team.name}</CardTitle>
                <CardDescription>Members: {team.members.join(', ')}
                Team Size: {team.memberCount}</CardDescription>
              </CardHeader>
               <Image src={team.image} alt={team.name} className="w-full h-32 object-cover rounded-md mb-4"/>
                <CardContent>
                   <Button className="mt-4">Join Team</Button>
                </CardContent>
            </Card>
        ))}
      </div>
    </div>
  );
};

export default QuizRegistrationPage;
