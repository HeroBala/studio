"use client";

import Link from 'next/link';
import {Button} from '@/components/ui/button';

interface NavbarProps {
  aiConsultationLink?: string;
}

export const Navbar: React.FC<NavbarProps> = ({aiConsultationLink}) => {
  return (
    <nav className="bg-primary text-primary-foreground py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          AI Insight Hub
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/" className="hover:text-accent-foreground">
            Home
          </Link>
          <Link href="/services" className="hover:text-accent-foreground">
            Services
          </Link>
          <Link href="/about" className="hover:text-accent-foreground">
            About
          </Link>
          {aiConsultationLink && (
            <Link href={aiConsultationLink} className="hover:text-accent-foreground">
              AI Consultation
            </Link>
          )}
          <Button variant="outline" size="sm">
            Contact Us
          </Button>
        </div>
      </div>
    </nav>
  );
};
