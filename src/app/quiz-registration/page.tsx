'use client';

import React, {useState} from 'react';
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
import {Label} from "@/components/ui/label";
import {v4 as uuidv4} from 'uuid';

const teamData = [
  {
    id: '1',
    name: 'The AI Wizards',
    members: ['Alice', 'Bob', 'Charlie', 'David'],
    memberCount: 4,
    image: 'https://picsum.photos/id/10/300/200', // Local placeholder image
    quote: 'Unlocking the secrets of AI, one algorithm at a time.',
  },
  {
    id: '2',
    name: 'Data Dominators',
    members: ['Diana', 'Eve', 'Frank', 'Gina'],
    memberCount: 4,
    image: 'https://picsum.photos/id/11/300/200',
    quote: 'Ruling the data landscape with precision and insight.',
  },
  {
    id: '3',
    name: 'Analytics Aces',
    members: ['Grace', 'Henry', 'Ivy', 'Jack'],
    memberCount: 4,
    image: 'https://picsum.photos/id/12/300/200',
    quote: 'Turning data into actionable strategies with a touch of magic.',
  },
  {
    id: 4,
    name: 'Algorithm Alchemists',
    members: ['Kelly', 'Liam', 'Mia', 'Noah'],
    memberCount: 4,
    image: 'https://picsum.photos/id/13/300/200',
    quote: 'Crafting gold from algorithms, one line of code at a time.',
  },
  {
    id: 5,
    name: 'Neural Navigators',
    members: ['Olivia', 'Peter', 'Quinn', 'Ryan'],
    memberCount: 4,
    image: 'https://picsum.photos/id/14/300/200',
    quote: 'Navigating the neural networks to discover new frontiers.',
  },
  {
    id: 6,
    name: 'Code Crusaders',
    members: ['Sophia', 'Tom', 'Uma', 'Victor'],
    memberCount: 4,
    image: 'https://picsum.photos/id/15/300/200',
    quote: 'On a mission to debug the world, one line of code at a time.',
  },
  {
    id: 7,
    name: 'Syntax Sentinels',
    members: ['Wendy', 'Xavier', 'Yara', 'Zack'],
    memberCount: 4,
    image: 'https://picsum.photos/id/16/300/200',
    quote: 'Guarding the gates of code with precision and vigilance.',
  },
  {
    id: 8,
    name: 'Debug Dynamos',
    members: ['Ava', 'Ben', 'Chloe', 'Daniel'],
    memberCount: 4,
    image: 'https://picsum.photos/id/17/300/200',
    quote: 'Harnessing the power of debugging to electrify solutions.',
  },
  {
    id: 9,
    name: 'Binary Bandits',
    members: ['Ella', 'Finn', 'Gia', 'Hugo'],
    memberCount: 4,
    image: 'https://picsum.photos/id/18/300/200',
    quote: 'Stealing the show with our binary brilliance.',
  },
  {
    id: 10,
    name: 'Logic Lancers',
    members: ['Isla', 'John', 'Kate', 'Leo'],
    memberCount: 4,
    image: 'https://picsum.photos/id/19/300/200',
    quote: 'Charging forward with logic and strategy as our guides.',
  },
  {
    id: 11,
    name: 'AI Innovators',
    members: ['Mila', 'Nathan', 'Olivia', 'Paul'],
    memberCount: 4,
    image: 'https://picsum.photos/id/20/300/200',
    quote: 'Innovating the future with the power of artificial intelligence.',
  },
  {
    id: 12,
    name: 'Tech Titans',
    members: ['Quinn', 'Ryan', 'Sophia', 'Tom'],
    memberCount: 4,
    image: 'https://picsum.photos/id/21/300/200',
    quote: 'Commanding the tech landscape with innovation and expertise.',
  },
  {
    id: 13,
    name: 'Cyber Cyclones',
    members: ['Uma', 'Victor', 'Wendy', 'Xavier'],
    memberCount: 4,
    image: 'https://picsum.photos/id/22/300/200',
    quote: 'Creating waves of change in the digital world with our cyber prowess.',
  },
  {
    id: 14,
    name: 'Quantum Questers',
    members: ['Yara', 'Zack', 'Alice', 'Bob'],
    memberCount: 4,
    image: 'https://picsum.photos/id/23/300/200',
    quote: 'Seeking the ultimate solutions in the quantum realm.',
  },
  {
    id: 15,
    name: 'Silicon Sharpshooters',
    members: ['Chloe', 'Daniel', 'Ella', 'Finn'],
    memberCount: 3,
    image: 'https://picsum.photos/id/24/300/200',
    quote: 'Hitting the mark with precision in the world of silicon.',
  },
  {
    id: 16,
    name: 'Digital Dynamos',
    members: ['Gina', 'Hugo', 'Isla', 'Jack'],
    memberCount: 4,
    image: 'https://picsum.photos/id/25/300/200',
    quote: 'Generating energy and innovation in the digital sphere.',
  },
  {
    id: 17,
    name: 'Inno Wizards',
    members: ['Kate', 'Leo', 'Mia', 'Noah'],
    memberCount: 4,
    image: 'https://picsum.photos/id/26/300/200',
    quote: 'Conjuring innovation and creativity with a touch of magic.',
  },
  {
    id: 18,
    name: 'Data Dazzlers',
    members: ['Paul', 'Quinn', 'Ryan', 'Sophia'],
    memberCount: 4,
    image: 'https://picsum.photos/id/27/300/200',
    quote: 'Dazzling the world with our insights into data and analytics.',
  },
  {
    id: 19,
    name: 'Vision Voyagers',
    members: ['Tom', 'Uma', 'Victor', 'Wendy'],
    memberCount: 4,
    image: 'https://picsum.photos/id/28/300/200',
    quote: 'Voyaging to the future with our innovative vision.',
  },
  {
    id: 20,
    name: 'Net Ninjas',
    members: ['Xavier', 'Yara', 'Zack', 'Alice'],
    memberCount: 4,
    image: 'https://picsum.photos/id/29/300/200',
    quote: 'Silently conquering the digital world with our coding skills.',
  },
];

const QuizRegistrationPage = () => {
  const [newTeamName, setNewTeamName] = useState('');
  const [newTeamSize, setNewTeamSize] = useState('4');
  const [newTeamQuote, setNewTeamQuote] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [memberCountFilter, setMemberCountFilter] = useState<number | null>(null);
  const [recentTeams, setRecentTeams] = useState<any[]>([]);

  const handleCreateTeam = () => {
    const newTeam = {
      id: uuidv4(),
      name: newTeamName,
      members: Array.from({length: parseInt(newTeamSize)}, (_, i) => `Member ${i + 1}`),
      memberCount: parseInt(newTeamSize),
      image: `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/300/200`,
      quote: newTeamQuote,
    };

    setRecentTeams([newTeam, ...recentTeams]);

    setNewTeamName('');
    setNewTeamSize('4');
    setNewTeamQuote('');
  };

  const filteredTeams = teamData.concat(recentTeams).filter(team => {
    const searchMatch = team.name.toLowerCase().includes(searchTerm.toLowerCase());
    const memberCountMatch = memberCountFilter === null || team.memberCount === memberCountFilter;
    return searchMatch && memberCountMatch;
  });

  return (
    <div className="container mx-auto py-12">
      <div className="flex justify-start mb-8">
        <Link href="/quiz-page" className="inline-flex items-center gap-2 text-lg" prefetch>
          <ArrowLeft className="h-5 w-5"/>
          Back
        </Link>
      </div>
      <h1 className="text-3xl font-bold text-center mb-6">AI Trivia Quiz Registration</h1>

      {/* New Team Creation Form */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">Create Your Own Team</h2>
        <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto p-4">
          <div className="md:w-1/3">
            <Label htmlFor="teamName">Team Name</Label>
            <Input
              type="text"
              id="teamName"
              placeholder="Enter team name"
              value={newTeamName}
              onChange={(e) => setNewTeamName(e.target.value)}
              className="mt-2"
            />
          </div>
          <div className="md:w-1/3">
            <Label htmlFor="teamSize">Team Size</Label>
            <Select value={newTeamSize} onValueChange={setNewTeamSize}>
              <SelectTrigger className="w-full mt-2">
                <SelectValue placeholder="Select team size"/>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3">3 Members</SelectItem>
                <SelectItem value="4">4 Members</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="md:w-1/3">
            <Label htmlFor="teamQuote">Team Quote</Label>
            <Input
              type="text"
              id="teamQuote"
              placeholder="Enter team quote"
              value={newTeamQuote}
              onChange={(e) => setNewTeamQuote(e.target.value)}
              className="mt-2"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <Button onClick={handleCreateTeam}>Create Team</Button>
        </div>
      </section>

      {/* Search and Filter */}
      <div className="flex justify-center space-x-4 mb-6">
        <Input
          type="text"
          placeholder="Search teams..."
          className="max-w-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Select onValueChange={(value) => setMemberCountFilter(value === '' ? null : parseInt(value))}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by size"/>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="3">3 Members</SelectItem>
            <SelectItem value="4">4 Members</SelectItem>
          </SelectContent>
        </Select>
      </div>

        {/* Recent Teams Section */}
        {recentTeams.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-center">Recently Created Teams</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-4">
              {recentTeams.map((team) => (
                <TeamCard key={team.id} team={team}/>
              ))}
            </div>
          </section>
        )}

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-4">
        {teamData.map((team) => ( // Assuming 'teams' is the array of team objects
          <TeamCard key={team.id} team={team}/>
        ))}
      </div>
    </div>
  );
};

const TeamCard = ({team}: { team: any }) => {
  return (
    <Card className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative">
      <div className="relative">
        <Image
          src={team.image}
          alt={team.name}
          width={300}
          height={200}
          style={{ width: '100%', height: 'auto' }}
          className="w-full h-32 object-cover"
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
        <p className="text-sm text-gray-600 mt-2 truncate">
          Members: {team.members.slice(0, 3).join(', ')}
          {team.members.length > 3 ? ', ...' : ''}
        </p>
        <p className="text-sm text-gray-500 mt-1">
          Total Members: {team.memberCount}
        </p>
        <p className="text-sm text-gray-500 mt-1 italic">
          "{team.quote}"
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
    
    

