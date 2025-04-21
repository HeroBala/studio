'use client';

import React from 'react';

interface TeamCardProps {
  team: {
    id: number;
    name: string;
    members: string[];
    memberCount: number;
    image: string;
  };
}

const TeamCard: React.FC<TeamCardProps> = ({team}) => {
  return (
    <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
      <img
        src={team.image}
        alt={team.name}
        className="w-full h-32 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{team.name}</h3>
      <p className="text-gray-600">Members: {team.members.join(', ')}</p>
      <p className="text-gray-600">Team Size: {team.memberCount}</p>
    </div>
  );
};

export default TeamCard;
