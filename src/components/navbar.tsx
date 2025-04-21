'use client';

import Link from 'next/link';
import {Button} from '@/components/ui/button';
import {useEffect, useState, useRef} from 'react';
import {ArrowRight} from "lucide-react";
import {useRouter} from "next/navigation";
import {cn} from "@/lib/utils";
import {Bell, Wrench} from "lucide-react";

interface NavbarProps {
  aiConsultationLink?: string;
  onSectionChange?: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({aiConsultationLink = "/appointment-booking", onSectionChange}) => {
  const [suggestedLinks, setSuggestedLinks] = useState<string[]>([]);
  const router = useRouter();
  const titleRef = useRef<HTMLSpanElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const fetchSuggestedLinks = async () => {
      try {
        setSuggestedLinks(['Home', 'Services', 'Appointment', 'Careers']);
      } catch (error) {
        console.error('Error fetching optimized links:', error);
        setSuggestedLinks(['Home', 'Services', 'Appointment', 'Careers']);
      }
    };

    fetchSuggestedLinks();
  }, []);

  const handleCareersClick = () => {
    if (onSectionChange) {
      onSectionChange('Join Our Team');
    }
    router.push('/careers');
  };

  return (
    <nav className="bg-primary text-primary-foreground py-4 sticky top-0 z-50 shadow-md transition-all duration-300">
      <div className="text-center text-lg font-semibold py-1 bg-secondary text-secondary-foreground animate-pulse">
        <Wrench className="inline-block w-6 h-6 mr-2"/>
        <span>This page is under construction</span>
        <Wrench className="inline-block w-6 h-6 ml-2"/>
      </div>
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-2xl font-bold hover:text-accent-foreground transition-colors duration-200" prefetch>
          <span
            ref={titleRef}
            className={cn(
              "ai-insight-hub-animation",
              isHovered ? "animation-paused" : ""
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            AI Insight Hub
          </span>
        </Link>
        <div className="flex items-center space-x-4">
          <Link key="Home" href="/" className="relative group hover:text-accent-foreground transition-colors duration-200 prefetch" onClick={() => onSectionChange ? onSectionChange('AI-Driven Solutions and Data Analytics') : null}>
            Home
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent origin-left transform scale-x-0 transition-transform group-hover:scale-x-100 duration-300"></span>
          </Link>
          <Link key="Services" href="#services" className="relative group hover:text-accent-foreground transition-colors duration-200 prefetch" onClick={() => onSectionChange ? onSectionChange('Services Offered') : null}>
            Services
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent origin-left transform scale-x-0 transition-transform group-hover:scale-x-100 duration-300"></span>
          </Link>
          <Link key="Appointment" href="/appointment-booking" className="relative group hover:text-accent-foreground transition-colors duration-200 prefetch" onClick={() => onSectionChange ? onSectionChange('Appointment Booking') : null}>
            Appointment
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent origin-left transform scale-x-0 transition-transform group-hover:scale-x-100 duration-300"></span>
          </Link>
          <Link key="Careers" href="/careers" className="relative group hover:text-accent-foreground transition-colors duration-200 prefetch" onClick={handleCareersClick}>
            Careers
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent origin-left transform scale-x-0 transition-transform group-hover:scale-x-100 duration-300"></span>
          </Link>
          <Button asChild className="group inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80">
            <Link href="/membership" prefetch className="flex items-center gap-1">
              <span className="text-accent">Membership</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1"/>
            </Link>
          </Button>
          <Bell className="h-6 w-6 animate-pulse" />
        </div>
      </div>
    </nav>
  );
};
