"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image 
                src="/images/New Logo for Aztec.png" 
                alt="Aztec Treasury Logo" 
                width={40} 
                height={40}
                className="h-10 w-auto"
              />
              <span className="text-2xl font-bold text-primary">Aztec Treasury</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Discover the hidden treasure of modern cryptocurrency. 
              Aztec Treasury combines ancient wisdom with cutting-edge blockchain technology.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/aztectreasury" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="https://t.me/aztectreasury" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7l-5.45-1.7c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z"/>
                </svg>
              </a>
              <a href="https://discord.gg/aztectreasury" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.39-.444.998-.608 1.435a19.82 19.82 0 0 0-5.49 0 12.221 12.221 0 0 0-.617-1.435.077.077 0 0 0-.079-.037c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.988-.32 15.285 1.67 20.448a.082.082 0 0 0 .031.037 20.32 20.32 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963.021-.041.001-.089-.041-.106a13.45 13.45 0 0 1-1.872-.878.077.077 0 0 1-.008-.127c.126-.093.252-.19.372-.289a.074.074 0 0 1 .077-.01c3.928 1.764 8.18 1.764 12.061 0a.074.074 0 0 1 .078.01c.12.099.246.196.373.29a.077.077 0 0 1-.007.126 12.633 12.633 0 0 1-1.873.881.077.077 0 0 0-.041.106c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 20.212 20.212 0 0 0 6.002-2.981.076.076 0 0 0 .032-.037c1.974-5.2 1.105-10.45-1.865-14.9a.06.06 0 0 0-.033-.027zm-13.31 11.92c-1.183 0-2.157-1.068-2.157-2.38 0-1.31.956-2.38 2.157-2.38 1.21 0 2.176 1.078 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.068-2.157-2.38 0-1.31.956-2.38 2.157-2.38 1.21 0 2.176 1.078 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z"/>
                </svg>
              </a>
              <a href="https://github.com/aztectreasury" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-primary">Home</Link></li>
              <li><Link href="#about" className="text-gray-400 hover:text-primary">About</Link></li>
              <li><Link href="#tokenomics" className="text-gray-400 hover:text-primary">Tokenomics</Link></li>
              <li><Link href="#roadmap" className="text-gray-400 hover:text-primary">Roadmap</Link></li>
              <li><Link href="#market" className="text-gray-400 hover:text-primary">Market Data</Link></li>
              <li><Link href="#faq" className="text-gray-400 hover:text-primary">FAQ</Link></li>
            </ul>
          </div>

          {/* Legal pages */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-primary">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-primary">Terms of Service</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary">Cookie Policy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary">Disclaimer</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary">Risk Disclosure</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-primary">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form>
              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-dark/70 text-white border border-gray-700 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-secondary text-dark font-bold py-2 px-4 rounded-lg transition"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Aztec Treasury. All rights reserved.
          </p>
          <div className="flex items-center mt-4 sm:mt-0">
            <div className="flex space-x-4 text-sm text-gray-500">
              <span>Contract: <a href="#" className="text-primary">0x1234...5678</a></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 