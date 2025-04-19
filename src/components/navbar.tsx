"use client";

import Link from 'next/link';
import {Button} from '@/components/ui/button';
import {useEffect, useState} from 'react';

interface NavbarProps {
  aiConsultationLink?: string;
}

export const Navbar: React.FC<NavbarProps> = ({aiConsultationLink}) => {
  const [suggestedLinks, setSuggestedLinks] = useState<string[]>([]);

  useEffect(() => {
    const fetchSuggestedLinks = async () => {
      try {
          setSuggestedLinks(['Home', 'Services', 'About', 'Appointment Booking', 'Contact Us']);
      } catch (error) {
        console.error('Error fetching optimized links:', error);
        setSuggestedLinks(['Home', 'Services', 'About', 'Appointment Booking', 'Contact Us']);
      }
    };

    fetchSuggestedLinks();
  }, []);

  return (
    <nav className="bg-primary text-primary-foreground py-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          <span className="ai-insight-hub-animation">AI Insight Hub</span>
        </Link>
        <div className="flex items-center space-x-4">
          {['Home', 'Services', 'About', 'Appointment Booking', 'Contact'].map(link => {
            let href = '/';
            if (link.toLowerCase() === 'services') {
              href = '/services';
            } else if (link.toLowerCase() === 'about') {
              href = '/about';
            } else if (link.toLowerCase() === 'appointment booking') {
              href = '/appointment-booking';
            } else if (link.toLowerCase() === 'contact') {
              href = '/contact';
            }
            return (
              <Link key={link} href={href} className="hover:text-accent-foreground" prefetch>
                {link}
              </Link>
            );
          })}
          
        </div>
      </div>
    </nav>
  );
};
