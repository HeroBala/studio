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
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

const teamData = [
  {
    id: 1,
    name: 'The AI Wizards',
    members: ['Alice', 'Bob', 'Charlie', 'David'],
    memberCount: 4,
    image: 'https://picsum.photos/id/10/300/200', // Local placeholder image
  },
  {
    id: 2,
    name: 'Data Dominators',
    members: ['Diana', 'Eve', 'Frank', 'Gina'],
    memberCount: 4,
    image: 'https://picsum.photos/id/11/300/200',
  },
  {
    id: 3,
    name: 'Analytics Aces',
    members: ['Grace', 'Henry', 'Ivy', 'Jack'],
    memberCount: 4,
    image: 'https://picsum.photos/id/12/300/200',
  },
  {
    id: 4,
    name: 'Algorithm Alchemists',
    members: ['Kelly', 'Liam', 'Mia', 'Noah'],
    memberCount: 4,
    image: 'https://picsum.photos/id/13/300/200',
  },
  {
    id: 5,
    name: 'Neural Navigators',
    members: ['Olivia', 'Peter', 'Quinn', 'Ryan'],
    memberCount: 4,
    image: 'https://picsum.photos/id/14/300/200',
  },
  {
    id: 6,
    name: 'Code Crusaders',
    members: ['Sophia', 'Tom', 'Uma', 'Victor'],
    memberCount: 4,
    image: 'https://picsum.photos/id/15/300/200',
  },
  {
    id: 7,
    name: 'Syntax Sentinels',
    members: ['Wendy', 'Xavier', 'Yara', 'Zack'],
    memberCount: 4,
    image: 'https://picsum.photos/id/16/300/200',
  },
  {
    id: 8,
    name: 'Debug Dynamos',
    members: ['Ava', 'Ben', 'Chloe', 'Daniel'],
    memberCount: 4,
    image: 'https://picsum.photos/id/17/300/200',
  },
  {
    id: 9,
    name: 'Binary Bandits',
    members: ['Ella', 'Finn', 'Gia', 'Hugo'],
    memberCount: 4,
    image: 'https://picsum.photos/id/18/300/200',
  },
  {
    id: 10,
    name: 'Logic Lancers',
    members: ['Isla', 'John', 'Kate', 'Leo'],
    memberCount: 4,
    image: 'https://picsum.photos/id/19/300/200',
  },
  {
    id: 11,
    name: 'AI Innovators',
    members: ['Mila', 'Nathan', 'Olivia', 'Paul'],
    memberCount: 4,
    image: 'https://picsum.photos/id/20/300/200',
  },
  {
    id: 12,
    name: 'Tech Titans',
    members: ['Quinn', 'Ryan', 'Sophia', 'Tom'],
    memberCount: 4,
    image: 'https://picsum.photos/id/21/300/200',
  },
  {
    id: 13,
    name: 'Cyber Cyclones',
    members: ['Uma', 'Victor', 'Wendy', 'Xavier'],
    memberCount: 4,
    image: 'https://picsum.photos/id/22/300/200',
  },
  {
    id: 14,
    name: 'Quantum Questers',
    members: ['Yara', 'Zack', 'Alice', 'Bob'],
    memberCount: 4,
    image: 'https://picsum.photos/id/23/300/200',
  },
  {
    id: 15,
    name: 'Silicon Sharpshooters',
    members: ['Chloe', 'Daniel', 'Ella', 'Finn'],
    memberCount: 3,
    image: 'https://picsum.photos/id/24/300/200',
  },
  {
    id: 16,
    name: 'Digital Dynamos',
    members: ['Gina', 'Hugo', 'Isla', 'Jack'],
    memberCount: 4,
    image: 'https://picsum.photos/id/25/300/200',
  },
  {
    id: 17,
    name: 'Inno Wizards',
    members: ['Kate', 'Leo', 'Mia', 'Noah'],
    memberCount: 4,
    image: 'https://picsum.photos/id/26/300/200',
  },
  {
    id: 18,
    name: 'Data Dazzlers',
    members: ['Paul', 'Quinn', 'Ryan', 'Sophia'],
    memberCount: 4,
    image: 'https://picsum.photos/id/27/300/200',
  },
  {
    id: 19,
    name: 'Vision Voyagers',
    members: ['Tom', 'Uma', 'Victor', 'Wendy'],
    memberCount: 4,
    image: 'https://picsum.photos/id/28/300/200',
  },
  {
    id: 20,
    name: 'Net Ninjas',
    members: ['Xavier', 'Yara', 'Zack', 'Alice'],
    memberCount: 4,
    image: 'https://picsum.photos/id/29/300/200',
  },
];

const QuizRegistrationPage = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="flex justify-start mb-8">
        <Link href="/quiz-page" className="inline-flex items-center gap-2 text-lg" prefetch>
          <ArrowLeft className="h-5 w-5"/>
          Back
        </Link>
      </div>
      <h1 className="text-3xl font-bold text-center mb-6">AI Trivia Quiz Registration</h1>
      <div className="flex justify-center space-x-4 mb-6">
        <Input
            type="text"
            placeholder="Search teams..."
            className="max-w-sm"
        />
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by size"/>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="3">3 Members</SelectItem>
            <SelectItem value="4">4 Members</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-4">
        {teamData.map((team) => ( // Assuming 'teams' is the array of team objects
          <TeamCard key={team.id} team={team}/>
        ))}
      </div>
    </div>
  );
};

const TeamCard = ({team}: { team: (typeof teamData)[0] }) => {
  return (
      <Card className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative">
        <div className="relative">
          <Image
              src={team.image}
              alt={team.name}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
          />
          <div
              className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-60 transition-opacity duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
            <button className="bg-white text-black py-2 px-4 rounded hover:bg-gray-100 transition-colors duration-200">
              View Team
            </button>
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 truncate">{team.name}</h3>
          <p className="text-sm text-gray-600 mt-2">
            Members: {team.members.slice(0, 3).join(', ')}
            {team.members.length > 3 ? ', ...' : ''}
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Total Members: {team.memberCount}
          </p>
        </CardContent>
        <Button className="absolute bottom-2 right-2 rounded-md">Join Team</Button>
      </Card>
  );
};

export default QuizRegistrationPage;

/*
Note:

1.  Replace placeholder images with actual team logos or images.
2.  Integrate the search and filter logic by updating the TeamCard component's rendering based on the search term and selected member count.
3.  If using Framer or Webflow, translate the HTML structure and Tailwind CSS classes into their respective formats, ensuring responsiveness and interactions are maintained.
4. For framer, this is the html that goes inside the Framer component:
*/
    
    

