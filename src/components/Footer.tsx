"use client";

import React, { useRef } from 'react';
import { Cinzel, Playfair_Display } from 'next/font/google';
import Link from 'next/link';
import { motion, useScroll, useTransform } from "framer-motion";

// Load custom fonts
const cinzel = Cinzel({ 
  subsets: ['latin'],
  weight: ['400', '700', '900']
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '600', '700']
});

export default function Footer() {
  // References for the sections
  const footerRef = useRef(null);
  const disclaimerRef = useRef(null);
  
  // Get scroll progress for footer animations
  const { scrollYProgress: footerScrollProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "center center"]
  });
  
  // Get scroll progress for disclaimer animations
  const { scrollYProgress: disclaimerScrollProgress } = useScroll({
    target: disclaimerRef,
    offset: ["start end", "center center"]
  });
  
  // Create animations for headings
  const headingScale = useTransform(footerScrollProgress, [0.1, 0.4], [0.8, 1]);
  const headingOpacity = useTransform(footerScrollProgress, [0.1, 0.4], [0, 1]);
  
  // Create animations for paragraph text
  const textScale = useTransform(footerScrollProgress, [0.2, 0.5], [0.9, 1]);
  const textOpacity = useTransform(footerScrollProgress, [0.2, 0.5], [0, 1]);
  
  // Create animations for social icons
  const socialScale = useTransform(footerScrollProgress, [0.3, 0.6], [0.7, 1]);
  const socialOpacity = useTransform(footerScrollProgress, [0.3, 0.6], [0, 1]);
  
  // Create animations for disclaimer section
  const disclaimerHeadingScale = useTransform(disclaimerScrollProgress, [0.1, 0.4], [0.8, 1]);
  const disclaimerHeadingOpacity = useTransform(disclaimerScrollProgress, [0.1, 0.4], [0, 1]);
  const disclaimerTextScale = useTransform(disclaimerScrollProgress, [0.2, 0.5], [0.9, 1]);
  const disclaimerTextOpacity = useTransform(disclaimerScrollProgress, [0.2, 0.5], [0, 1]);
  const contactScale = useTransform(disclaimerScrollProgress, [0.3, 0.6], [0.9, 1]);
  const contactOpacity = useTransform(disclaimerScrollProgress, [0.3, 0.6], [0, 1]);

  return (
    <footer ref={footerRef} className="bg-black text-white pt-16 pb-8 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Left side */}
          <div className="space-y-6">
            <motion.div 
              className={`${cinzel.className}`}
              style={{
                scale: headingScale,
                opacity: headingOpacity
              }}
            >
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500 mb-4">
                Enjoy the Journey
              </h3>
            </motion.div>
            <motion.div 
              className={`${playfair.className}`}
              style={{
                scale: textScale,
                opacity: textOpacity
              }}
            >
              <p className="text-white leading-relaxed">
                When you hold $Azt Coin you're part of the Hidden Treasures Community that understands the true 
                potential of limited assets. Share insights, have fun and watch your wealth grow.
              </p>
            </motion.div>
          </div>

          {/* Right side */}
          <div className="space-y-6">
            <motion.div 
              className={`${cinzel.className}`}
              style={{
                scale: headingScale,
                opacity: headingOpacity
              }}
            >
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500 mb-4">
                Follow Us
              </h3>
            </motion.div>
            <motion.div 
              className={`${playfair.className}`}
              style={{
                scale: textScale,
                opacity: textOpacity
              }}
            >
              <p className="text-white leading-relaxed mb-6">
                Join the Hidden Treasures Community and start your journey towards wealth.
              </p>
            </motion.div>
            <motion.div 
              className="flex space-x-6"
              style={{
                scale: socialScale,
                opacity: socialOpacity
              }}
            >
              <Link href="#" className="text-amber-400 hover:text-amber-300 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="#" className="text-amber-400 hover:text-amber-300 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link href="#" className="text-amber-400 hover:text-amber-300 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="#" className="text-amber-400 hover:text-amber-300 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.975 20.855a11.462 11.462 0 01-6.055-5.982c-.158-.393.164-.795.582-.795h3.367c.246 0 .452.157.531.377a7.307 7.307 0 0013.2 0c.079-.22.285-.377.531-.377h3.367c.418 0 .74.402.582.795a11.462 11.462 0 01-6.055 5.982A11.457 11.457 0 0112 22a11.457 11.457 0 01-3.025-1.145zM12 2C6.477 2 2 6.477 2 12c0 1.14.188 2.24.537 3.267.083.244.317.41.577.41h3.367c.246 0 .452-.157.531-.377a7.334 7.334 0 013.013-4.773V12.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1.973A7.334 7.334 0 0117.988 15.3c.079.22.285.377.531.377h3.367c.26 0 .494-.166.577-.41.349-1.027.537-2.127.537-3.267 0-5.523-4.477-10-10-10z" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Stylish divider */}
        <div className="relative py-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-amber-500/30"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-[#0A0A0A] px-4">
              <div className="h-4 w-4 rounded-full bg-gradient-to-r from-yellow-500 to-amber-600"></div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div ref={disclaimerRef} className="mt-8 text-center">
          <motion.h4 
            className={`${cinzel.className} text-xl font-bold text-amber-400 mb-4`}
            style={{
              scale: disclaimerHeadingScale,
              opacity: disclaimerHeadingOpacity
            }}
          >
            Disclaimer
          </motion.h4>
          <motion.p 
            className="text-white text-sm max-w-4xl mx-auto mb-8 leading-relaxed"
            style={{
              scale: disclaimerTextScale,
              opacity: disclaimerTextOpacity
            }}
          >
            $Azt Coin is a treasure for the bold, but crypto is risky. Only invest what you can afford to lose. 
            Do your research—the Hidden Treasures come with their share of adventure.
          </motion.p>
          
          <motion.div 
            className="text-white text-sm mb-4"
            style={{
              scale: contactScale,
              opacity: contactOpacity
            }}
          >
            <a href="mailto:contact@coinaztec.com" className="hover:text-amber-400 transition-colors duration-300">
              contact@coinaztec.com
            </a>
          </motion.div>
          
          <motion.p 
            className="text-white text-xs"
            style={{
              scale: contactScale,
              opacity: contactOpacity
            }}
          >
            All rights reserved. $AZTCOIN
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
