'use client';

import React, {useState} from 'react';
import Link from 'next/link';
import {ArrowLeft} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {cn} from '@/lib/utils';
import {Check} from "lucide-react";

const MembershipPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const benefits = [
    {
      text: "10% discount on all our services",
      icon: "/images/benefits/discount.png",
    },
    {
      text: "Exclusive access to premium AI tools and resources",
      icon: "/images/benefits/premium.png",
    },
    {
      text: "Get involved in real projects and learn by doing",
      icon: "/images/benefits/projects.png",
    },
    {
      text: "Personalized insights and tech recommendations",
      icon: "/images/benefits/insights.png",
    },
    {
      text: "Priority access to events like the weekly AI Quiz and more",
      icon: "/images/benefits/events.png",
    },
    {
      text: "Stay ahead by exploring the latest in tech with us",
      icon: "/images/benefits/tech.png",
    }
  ];

  return (
    <div className="container mx-auto py-12">
      <div className="flex justify-start mb-8">
        <Link href="/" className="inline-flex items-center gap-2 text-lg" prefetch>
          <ArrowLeft className="h-5 w-5"/>
          Back to Home
        </Link>
      </div>

      {/* Membership Benefits Section */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-center mb-6">Membership Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-card rounded-lg shadow-md transition-transform duration-300 hover:scale-105 animate-slide-in-bottom"
            >
              <img
                src={benefit.icon}
                alt={`Benefit ${index + 1}`}
                className="w-16 h-16 mb-4"
              />
              <p className="text-center text-muted-foreground">{benefit.text}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-2xl mx-auto mt-8">
        <h1 className="text-3xl font-semibold text-center mb-6">Join Our Membership Today</h1>
        <p className="text-lg text-muted-foreground text-center mb-4">
          We Believe in Connection: Come Join Us and Connect Like Never Before
        </p>
        <div className="space-y-6">
          <div>
            <Label htmlFor="email" className="text-lg font-semibold text-foreground">Email Address</Label>
            <Input type="email" id="email" placeholder="example@example.com" required className="mt-2"/>
          </div>
          <div>
            <Label htmlFor="password" className="text-lg font-semibold text-foreground">Password</Label>
            <div className="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Enter password"
                required
                className="mt-2 w-full"
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={togglePasswordVisibility}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:bg-accent/80"
              >
                {showPassword ? (
                  <span className="text-gray-500">Hide</span>
                ) : (
                  <span className="text-gray-500">Show</span>
                )}
              </Button>
            </div>
          </div>
          <div>
            <Label htmlFor="confirmPassword" className="text-lg font-semibold text-foreground">Confirm Password</Label>
            <div className="relative">
              <Input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                placeholder="Re-enter password"
                required
                className="mt-2 w-full"
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:bg-accent/80"
              >
                {showConfirmPassword ? (
                  <span className="text-gray-500">Hide</span>
                ) : (
                  <span className="text-gray-500">Show</span>
                )}
              </Button>
            </div>
          </div>
          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Sign Up</Button>
          <div className="text-center">
            <Link href="/" className="hover:underline text-muted-foreground">Back to Home</Link>
          </div>
          <div className="text-center">
            Already a member? <Link href="/sign-in" className="hover:underline text-accent">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipPage;
