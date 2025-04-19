"use client";

import Link from 'next/link';
import {Button} from '@/components/ui/button';
import {useEffect, useState} from 'react';
//import {optimizeNavbarLinks} from '@/ai/flows/navbar-optimizer';

interface NavbarProps {
  aiConsultationLink?: string;
}

export const Navbar: React.FC<NavbarProps> = ({aiConsultationLink}) => {
  const [suggestedLinks, setSuggestedLinks] = useState<string[]>([]);

  useEffect(() => {
    const fetchSuggestedLinks = async () => {
      try {
       // const result = await optimizeNavbarLinks({
        //  originalLinks: 'Home, Services, About, AI Consultation, Contact Us',
        //});
        //if (result?.optimizedLinks) {
         // setSuggestedLinks(result.optimizedLinks);
       // } else {
          setSuggestedLinks(['Home', 'Services', 'About', 'AI Consultation', 'Contact Us']);
       // }
      } catch (error) {
        console.error('Error fetching optimized links:', error);
        setSuggestedLinks(['Home', 'Services', 'About', 'AI Consultation', 'Contact Us']);
      }
    };

    fetchSuggestedLinks();
  }, []);
  return (
    <nav className="bg-primary text-primary-foreground py-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          AI Insight Hub
        </Link>
        <div className="flex items-center space-x-4">
          {['Home', 'Services', 'About', 'AI Consultation', 'Contact Us'].map(link => {
            let href = '/';
            if (link.toLowerCase() === 'services') {
              href = '/services';
            } else if (link.toLowerCase() === 'about') {
              href = '/about';
            } else if (link.toLowerCase() === 'ai consultation') {
              href = '/ai-consultation';
            } else if (link.toLowerCase() === 'contact us') {
              href = '/contact';
            }
            return (
              <Link key={link} href={href} className="hover:text-accent-foreground">
                {link}
              </Link>
            );
          })}
          
        </div>
      </div>
    </nav>
  );
};


