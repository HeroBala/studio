'use client';

import React from 'react';
import Link from 'next/link';
import {Facebook, Instagram, Linkedin, Twitter} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">
              123 AI Insights Avenue, Tech City, State 12345
            </p>
            <p className="mb-2">
              Email: <Link href="mailto:info@aiinsighthub.com" className="hover:underline">info@aiinsighthub.com</Link>
            </p>
            <p>
              Phone: (123) 456-7890
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="list-none pl-0">
              <li className="mb-2">
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/appointment-booking" className="hover:underline">
                  Appointment
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:underline">
                 Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-primary-foreground hover:text-secondary">
                <Facebook className="h-6 w-6"/>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-primary-foreground hover:text-secondary">
                <Twitter className="h-6 w-6"/>
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-primary-foreground hover:text-secondary">
                <Linkedin className="h-6 w-6"/>
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-primary-foreground hover:text-secondary">
                <Instagram className="h-6 w-6"/>
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          &copy; {new Date().getFullYear()} AI Insight Hub. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
