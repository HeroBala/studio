"use client";

import React from 'react';
import Image from 'next/image';

interface TestimonialCardProps {
  name: string;
  title: string;
  quote: string;
  rating: number;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  title,
  quote,
  rating,
  image,
}) => {
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`star ${i <= rating ? 'active' : ''}`}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-96">
      <div className="flex items-center mb-4">
        <Image
          src={image}
          alt={name}
          width={50}
          height={50}
          className="rounded-full mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-gray-500 text-sm">{title}</p>
        </div>
      </div>
      <blockquote className="flex-grow">
        <p className="text-gray-700 italic mb-4">"{quote}"</p>
      </blockquote>
      <div className="star-rating">
        {renderStars(rating)}
      </div>
    </div>
  );
};

export default TestimonialCard;
