"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Always show navbar at top of page
      if (currentScrollPos < 50) {
        setIsVisible(true);
        setPrevScrollPos(currentScrollPos);
        return;
      }

      // Hide when scrolling down, show when scrolling up
      if (currentScrollPos > prevScrollPos) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'How to Buy', href: '#how-to-buy' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Tokenomics', href: '#tokenomics' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        prevScrollPos > 50 
          ? 'bg-dark/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      {/* Gold accent line at the bottom */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-40 md:h-44">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="#" className="flex items-center">
              <div className="relative w-40 h-40 ml-20">
                <Image 
                  src="/images/New Logo for Aztec.png" 
                  alt="Aztec Coin Logo" 
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block mr-20">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-primary transition-colors duration-200 font-medium"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="#"
                className="bg-primary hover:bg-secondary text-dark font-bold py-2 px-5 rounded-full transition-all duration-300 transform hover:scale-105 text-sm"
              >
                Buy Now
              </a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              type="button" 
              className="text-gray-400 hover:text-primary focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {!mobileMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-dark/95 backdrop-blur-md shadow-lg border-primary/10 border-y">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-primary block px-3 py-2 text-base font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="#"
            className="bg-primary hover:bg-secondary text-dark font-bold py-2 px-5 rounded-full transition-all duration-300 block w-full text-center mt-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            Buy Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;