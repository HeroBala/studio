'use client';

import React, {useState} from 'react';
import Link from 'next/link';
import {ArrowLeft} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {cn} from '@/lib/utils';

const MembershipPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container mx-auto py-12">
      <div className="flex justify-start mb-8">
        <Link href="/" className="inline-flex items-center gap-2 text-lg" prefetch>
          <ArrowLeft className="h-5 w-5"/>
          Back to Home
        </Link>
      </div>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-semibold text-center mb-6">Join Our Membership Today</h1>
        <p className="text-lg text-muted-foreground text-center mb-8">
          Sign up to gain access to exclusive content, services, and personalized AI-driven solutions.
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
                className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:bg-primary/80"
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
            <Input
              type="password"
              id="confirmPassword"
              placeholder="Re-enter password"
              required
              className="mt-2"
            />
          </div>
          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Sign Up</Button>
          <div className="text-center">
            <Link href="/" className="hover:underline text-muted-foreground">Back to Home</Link>
          </div>
          <div className="text-center">
            Already a member? <Link href="/" className="hover:underline text-accent">Sign In</Link>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">Membership Benefits</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Exclusive access to AI-driven tools and resources</li>
            <li>Personalized insights and recommendations</li>
            <li>Priority access to events, like the weekly AI Quiz or other special content.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MembershipPage;
