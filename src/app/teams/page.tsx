'use client';

import React, {useState} from 'react';
import TeamCard from '@/components/TeamCard';
import {ArrowLeft} from "lucide-react";
import Link from "next/link";

const teamData = Array.from({length: 20}, (_, i) => ({
  id: i + 1,
  name: `Team ${i + 1}`,
  members: [`Member ${i * 3 + 1}`, `Member ${i * 3 + 2}`, `Member ${i * 3 + 3}`],
  memberCount: 3,
  image: `https://picsum.photos/id/${i + 100}/200/150`,
}));

const TeamsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [memberCountFilter, setMemberCountFilter] = useState<number | null>(null);

  const filteredTeams = teamData.filter(team => {
    const searchMatch = team.name.toLowerCase().includes(searchTerm.toLowerCase());
    const memberCountMatch = memberCountFilter === null || team.memberCount === memberCountFilter;
    return searchMatch && memberCountMatch;
  });

  return (
    <div className="container mx-auto py-12">
      <div className="flex justify-start mb-8">
        <Link href="/" className="inline-flex items-center gap-2 text-lg" prefetch>
          <ArrowLeft className="h-5 w-5"/>
          Back to Home
        </Link>
      </div>
      <h1 className="text-3xl font-semibold text-center mb-8">Our Teams</h1>

      {/* Search and Filter */}
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search by team name"
          className="border rounded-md p-2 w-1/3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="border rounded-md p-2"
          onChange={(e) => setMemberCountFilter(e.target.value === '' ? null : parseInt(e.target.value))}
        >
          <option value="">All Member Counts</option>
          <option value="3">3 Members</option>
          <option value="4">4 Members</option>
        </select>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTeams.map(team => (
          <TeamCard key={team.id} team={team}/>
        ))}
      </div>
    </div>
  );
};

export default TeamsPage;
