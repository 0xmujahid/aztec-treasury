"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-dark/90 backdrop-blur-sm text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/images/New Logo for Aztec.png" 
            alt="Aztec Coin Logo" 
            width={40} 
            height={40}
            className="h-10 w-auto"
          />
          <span className="text-2xl font-bold text-primary">Aztec Coin</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-primary transition">Home</Link>
          <Link href="#about" className="hover:text-primary transition">About</Link>
          <Link href="#tokenomics" className="hover:text-primary transition">Tokenomics</Link>
          <Link href="#how-to-buy" className="hover:text-primary transition">How to Buy</Link>
          <Link href="#roadmap" className="hover:text-primary transition">Roadmap</Link>
          <Link href="#market" className="hover:text-primary transition">Market</Link>
          <Link href="#community" className="hover:text-primary transition">Community</Link>
          <Link href="#faq" className="hover:text-primary transition">FAQ</Link>
          <a 
            href="https://jup.ag"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-secondary text-dark font-bold py-2 px-4 rounded-full transition"
          >
            Buy $AZT
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark/95 backdrop-blur-sm py-4 shadow-lg">
          <div className="container mx-auto px-4 flex flex-col gap-4">
            <Link href="/" className="hover:text-primary transition py-2">Home</Link>
            <Link href="#about" className="hover:text-primary transition py-2">About</Link>
            <Link href="#tokenomics" className="hover:text-primary transition py-2">Tokenomics</Link>
            <Link href="#how-to-buy" className="hover:text-primary transition py-2">How to Buy</Link>
            <Link href="#roadmap" className="hover:text-primary transition py-2">Roadmap</Link>
            <Link href="#market" className="hover:text-primary transition py-2">Market</Link>
            <Link href="#community" className="hover:text-primary transition py-2">Community</Link>
            <Link href="#faq" className="hover:text-primary transition py-2">FAQ</Link>
            <a 
              href="https://jup.ag"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-secondary text-dark font-bold py-2 px-4 rounded-full transition w-full text-center"
            >
              Buy $AZT
            </a>
          </div>
        </div>
      )}
    </nav>
  );
} 