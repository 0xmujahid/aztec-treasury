"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from "framer-motion";
import { Cinzel, Playfair_Display, Orbitron } from 'next/font/google';

// Load custom fonts
const cinzel = Cinzel({ 
  subsets: ['latin'],
  weight: ['400', '700', '900']
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '600', '700']
});

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900']
});

export default function Roadmap() {
  // Section reference for all animations
  const sectionRef = useRef(null);
  
  // Get scroll progress for the entire section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Create animations for title
  const titleScale = useTransform(scrollYProgress, [0, 0.2], [0.7, 1.1]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  
  // Create animations for top cards with enhanced effects
  const topCard1Y = useTransform(scrollYProgress, [0.1, 0.4], [100, -10]);
  const topCard2Y = useTransform(scrollYProgress, [0.15, 0.45], [100, -10]);
  const topCardsOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const topCard1Scale = useTransform(scrollYProgress, [0.1, 0.4], [0.8, 1.05]);
  const topCard2Scale = useTransform(scrollYProgress, [0.15, 0.45], [0.8, 1.05]);

  // Create animations for bottom cards with enhanced effects
  const bottomCard1Y = useTransform(scrollYProgress, [0.4, 0.7], [100, -10]);
  const bottomCard2Y = useTransform(scrollYProgress, [0.45, 0.75], [100, -10]);
  const bottomCardsOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const bottomCard1Scale = useTransform(scrollYProgress, [0.4, 0.7], [0.8, 1.05]);
  const bottomCard2Scale = useTransform(scrollYProgress, [0.45, 0.75], [0.8, 1.05]);

  // Create text scaling animations for each card with enhanced effects
  const topCard1TextScale = useTransform(scrollYProgress, [0.1, 0.4], [0.9, 1.15]);
  const topCard2TextScale = useTransform(scrollYProgress, [0.15, 0.45], [0.9, 1.15]);
  const bottomCard1TextScale = useTransform(scrollYProgress, [0.4, 0.7], [0.9, 1.15]);
  const bottomCard2TextScale = useTransform(scrollYProgress, [0.45, 0.75], [0.9, 1.15]);

  // Roadmap data
  const roadmapItems = [
    {
      phase: 'Phase 1',
      title: 'Discovery',
      completed: false,
      items: [
        'Launch Aztec Coin and spread the word to crypto enthusiasts.',
        'Begin building a community passionate about discovering hidden treasures.'
      ]
    },
    {
      phase: 'Phase 2',
      title: 'Treasure Hunt',
      completed: false,
      items: [
        'Introduce staking and long-term holding rewards.',
        'Develop tools and resources for Aztec Coin holders to maximize their wealth potential.'
      ]
    },
    {
      phase: 'Phase 3',
      title: 'Unlock the Wealth',
      completed: false,
      items: [
        "Expand Aztec Coin's ecosystem with strategic partnerships and new opportunities for users to unlock additional wealth.",
        'Host events and treasure hunts within the Aztec Coin community to increase engagement and reward holders.'
      ]
    },
    {
      phase: 'Phase 4',
      title: 'Unlock the Wealth',
      completed: false,
      items: [
        "Expand $Azt Coin's ecosystem with strategic partnerships and new opportunities for users to unlock additional wealth.",
        "Host events and treasure hunts within the $Azt Coin community to increase engagement and reward holders."
      ]
    }
  ];

  // Image paths for cards
  const cardImages = [
    '/images/roadmap1.webp',  // Placeholder image for Phase 1
    '/images/roadmap2.jpg',  // Placeholder image for Phase 2
    '/images/roadmap3.webp',
    '/images/roadmap4.webp' // Placeholder image for Phase 3
  ];

  // Get the cards for top and bottom rows
  const topCards = roadmapItems.slice(0, 2);
  const bottomCards = roadmapItems.slice(2, 4);

  return (
    <section 
      ref={sectionRef} 
      id="roadmap" 
      className="py-20 bg-black text-white overflow-hidden relative"
    >
      <div className="container mx-auto px-4">
        {/* Title with animation */}
        <motion.div
          className={`${cinzel.className} text-center mb-16 md:mb-20`}
          style={{
            scale: titleScale,
            opacity: titleOpacity
          }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 via-amber-500 to-yellow-600 pb-2 inline-block">
            Roadmap
          </h2>
          <div className="w-40 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto opacity-60 mt-4"></div>
          <p className={`${playfair.className} text-lg md:text-xl text-amber-100/80 italic mt-6 max-w-3xl mx-auto`}>
            Our strategic journey to build the Aztec ecosystem and unlock wealth for our community
          </p>
        </motion.div>

        {/* Top row cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-4xl mx-auto mb-12">
          {/* First top card */}
          <motion.div
            className="transform-gpu"
            style={{ 
              y: topCard1Y,
              opacity: topCardsOpacity,
              scale: topCard1Scale
            }}
          >
            <div className="relative overflow-hidden rounded-xl p-[1px] h-full">
              {/* Animated border */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-50 group-hover:opacity-80">
                  <div className="absolute top-0 right-0 w-1/2 h-[1px] bg-gradient-to-r from-transparent to-amber-400 animate-shimmer"></div>
                  <div className="absolute bottom-0 left-0 w-1/2 h-[1px] bg-gradient-to-r from-amber-400 to-transparent animate-shimmer-reverse"></div>
                  <div className="absolute top-0 left-0 w-[1px] h-1/2 bg-gradient-to-b from-amber-400 to-transparent animate-shimmer-vertical"></div>
                  <div className="absolute bottom-0 right-0 w-[1px] h-1/2 bg-gradient-to-b from-transparent to-amber-400 animate-shimmer-vertical-reverse"></div>
                </div>
              </div>

              {/* Card content */}
              <div className="relative bg-black backdrop-blur-sm p-5 md:p-6 rounded-xl h-full flex flex-col items-center text-center overflow-hidden">
                {/* Centered image */}
                <div className="w-48 h-48 md:w-56 md:h-56 mb-4 relative mx-auto">
                  <Image
                    src="/images/roadmap1.webp"
                    alt={`${topCards[0].phase} - ${topCards[0].title}`}
                    fill
                    className="object-cover"
                  />
        </div>

                <div className={`${orbitron.className} bg-black/60 text-amber-500 px-3 py-1 rounded-full text-sm font-bold mb-2`}>
                  {topCards[0].phase}
                </div>

                {/* Text content with scale effect */}
                <motion.div
                  // style={{ scale: topCard1TextScale }}
                  className="transform-gpu flex flex-col items-center w-full"
                >
                  <h3 className={`${orbitron.className} text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-400 mb-2 md:mb-3`}>
                    {topCards[0].title}
                  </h3>
                  <ul className="space-y-2 w-full pl-1">
                    {topCards[0].items.map((item, i) => (
                      <li key={i} className="flex items-start text-left">
                        <span className="min-w-[12px] h-3 bg-amber-500/50 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                        <span className="text-white text-sm break-words">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Second top card */}
          <motion.div
            className="transform-gpu"
            style={{ 
              y: topCard2Y,
              opacity: topCardsOpacity,
              scale: topCard2Scale
            }}
          >
            <div className="relative overflow-hidden rounded-xl p-[1px] h-full">
              {/* Animated border */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-50 group-hover:opacity-80">
                  <div className="absolute top-0 right-0 w-1/2 h-[1px] bg-gradient-to-r from-transparent to-amber-400 animate-shimmer"></div>
                  <div className="absolute bottom-0 left-0 w-1/2 h-[1px] bg-gradient-to-r from-amber-400 to-transparent animate-shimmer-reverse"></div>
                  <div className="absolute top-0 left-0 w-[1px] h-1/2 bg-gradient-to-b from-amber-400 to-transparent animate-shimmer-vertical"></div>
                  <div className="absolute bottom-0 right-0 w-[1px] h-1/2 bg-gradient-to-b from-transparent to-amber-400 animate-shimmer-vertical-reverse"></div>
                </div>
              </div>

              {/* Card content */}
              <div className="relative bg-black backdrop-blur-sm p-5 md:p-6 rounded-xl h-full flex flex-col items-center text-center overflow-hidden">
                {/* Centered image */}
                <div className="w-48 h-48 md:w-56 md:h-56 mb-4 relative mx-auto">
                  <Image
                    src="/images/roadmap2.jpg"
                    alt={`${topCards[1].phase} - ${topCards[1].title}`}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className={`${orbitron.className} bg-black/60 text-amber-500 px-3 py-1 rounded-full text-sm font-bold mb-2`}>
                  {topCards[1].phase}
                </div>

                {/* Text content with scale effect */}
                <motion.div
                  
                  className="transform-gpu flex flex-col items-center w-full"
                >
                  <h3 className={`${orbitron.className} text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-400 mb-2 md:mb-3`}>
                    {topCards[1].title}
                  </h3>
                  <ul className="space-y-2 w-full pl-1">
                    {topCards[1].items.map((item, i) => (
                      <li key={i} className="flex items-start text-left">
                        <span className="min-w-[12px] h-3 bg-amber-500/50 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                        <span className="text-white text-sm break-words">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center my-6 md:my-8">
          <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent max-w-xl mx-auto"></div>
        </div>

        {/* Bottom row cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-4xl mx-auto">
          {/* First bottom card */}
          <motion.div
            className="transform-gpu"
            style={{ 
              y: bottomCard1Y,
              opacity: bottomCardsOpacity,
              scale: bottomCard1Scale
            }}
          >
            <div className="relative overflow-hidden rounded-xl p-[1px] h-full">
              {/* Animated border */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-50 group-hover:opacity-80">
                  <div className="absolute top-0 right-0 w-1/2 h-[1px] bg-gradient-to-r from-transparent to-amber-400 animate-shimmer"></div>
                  <div className="absolute bottom-0 left-0 w-1/2 h-[1px] bg-gradient-to-r from-amber-400 to-transparent animate-shimmer-reverse"></div>
                  <div className="absolute top-0 left-0 w-[1px] h-1/2 bg-gradient-to-b from-amber-400 to-transparent animate-shimmer-vertical"></div>
                  <div className="absolute bottom-0 right-0 w-[1px] h-1/2 bg-gradient-to-b from-transparent to-amber-400 animate-shimmer-vertical-reverse"></div>
                </div>
                  </div>

              {/* Card content */}
              <div className="relative bg-black backdrop-blur-sm p-5 md:p-6 rounded-xl h-full flex flex-col items-center text-center overflow-hidden">
                {/* Centered image */}
                <div className="w-48 h-48 md:w-56 md:h-56 mb-4 relative mx-auto">
                  <Image
                    src="/images/roadmap3.webp"
                    alt={`${bottomCards[0].phase} - ${bottomCards[0].title}`}
                    fill
                    className="object-cover"
                  />
                        </div>
                
                <div className={`${orbitron.className} bg-black/60 text-amber-500 px-3 py-1 rounded-full text-sm font-bold mb-2`}>
                  {bottomCards[0].phase}
                      </div>

                {/* Text content with scale effect */}
                <motion.div
                  className="transform-gpu flex flex-col items-center w-full"
                >
                  <h3 className={`${orbitron.className} text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-400 mb-2 md:mb-3`}>
                    {bottomCards[0].title}
                  </h3>
                  <ul className="space-y-2 w-full pl-1">
                    {bottomCards[0].items.map((item, i) => (
                      <li key={i} className="flex items-start text-left">
                        <span className="min-w-[12px] h-3 bg-amber-500/50 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                        <span className="text-white text-sm break-words">{item}</span>
                          </li>
                        ))}
                      </ul>
                </motion.div>
                    </div>
                  </div>
          </motion.div>

          {/* Second bottom card */}
          <motion.div
            className="transform-gpu"
            style={{ 
              y: bottomCard2Y,
              opacity: bottomCardsOpacity,
              scale: bottomCard2Scale
            }}
          >
            <div className="relative overflow-hidden rounded-xl p-[1px] h-full">
              {/* Animated border */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-50 group-hover:opacity-80">
                  <div className="absolute top-0 right-0 w-1/2 h-[1px] bg-gradient-to-r from-transparent to-amber-400 animate-shimmer"></div>
                  <div className="absolute bottom-0 left-0 w-1/2 h-[1px] bg-gradient-to-r from-amber-400 to-transparent animate-shimmer-reverse"></div>
                  <div className="absolute top-0 left-0 w-[1px] h-1/2 bg-gradient-to-b from-amber-400 to-transparent animate-shimmer-vertical"></div>
                  <div className="absolute bottom-0 right-0 w-[1px] h-1/2 bg-gradient-to-b from-transparent to-amber-400 animate-shimmer-vertical-reverse"></div>
                </div>
              </div>

              {/* Card content */}
              <div className="relative bg-black backdrop-blur-sm p-5 md:p-6 rounded-xl h-full flex flex-col items-center text-center overflow-hidden">
                {/* Centered image */}
                <div className="w-48 h-48 md:w-56 md:h-56 mb-4 relative mx-auto">
                  <Image
                    src="/images/roadmap4.webp"
                    alt={`${bottomCards[1].phase} - ${bottomCards[1].title}`}
                    fill
                    className="object-contain"
                  />
                </div>
                
                <div className={`${orbitron.className} bg-black/60 text-amber-500 px-3 py-1 rounded-full text-sm font-bold mb-2`}>
                  {bottomCards[1].phase}
                </div>

                {/* Text content with scale effect */}
                <motion.div
                  className="transform-gpu flex flex-col items-center w-full"
                >
                  <h3 className={`${orbitron.className} text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-400 mb-2 md:mb-3`}>
                    {bottomCards[1].title}
                  </h3>
                  <ul className="space-y-2 w-full pl-1">
                    {bottomCards[1].items.map((item, i) => (
                      <li key={i} className="flex items-start text-left">
                        <span className="min-w-[12px] h-3 bg-amber-500/50 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                        <span className="text-white text-sm break-words">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
          </div>
          </motion.div>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx global>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes shimmer-reverse {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes shimmer-vertical {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes shimmer-vertical-reverse {
          0% { transform: translateY(100%); }
          100% { transform: translateY(-100%); }
        }
        .animate-shimmer {
          animation: shimmer 4s linear infinite;
        }
        .animate-shimmer-reverse {
          animation: shimmer-reverse 4s linear infinite;
        }
        .animate-shimmer-vertical {
          animation: shimmer-vertical 4s linear infinite;
        }
        .animate-shimmer-vertical-reverse {
          animation: shimmer-vertical-reverse 4s linear infinite;
        }
      `}</style>
    </section>
  );
}