'use client';

import React, {useState} from 'react';
import Link from 'next/link';
import {ArrowLeft} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';

const SignInPage = () => {
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
        <h1 className="text-3xl font-semibold text-center mb-6">Sign In</h1>
        <p className="text-lg text-muted-foreground text-center mb-8">
          Sign in to access exclusive content, services, and personalized AI-driven solutions.
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
          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Sign In</Button>
          <div className="text-center">
            <Link href="/" className="hover:underline text-muted-foreground">Back to Home</Link>
          </div>
          <div className="text-center">
            Not a member? <Link href="/membership" className="hover:underline text-accent">Join Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
