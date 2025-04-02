"use client";

import React from 'react';

export default function Roadmap() {
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
      title: 'Treasure Hunt ',
      completed: false,
      items: [
        'Introduce staking and long-term holding rewards. ',
        'Develop tools and resources for Aztec Coin holders to maximize their wealth potential. '
      ]
    },
    {
      phase: 'Phase 3',
      title: 'Unlock the Wealth ',
      completed: false,
      items: [
        'Expand Aztec Coin’s ecosystem with strategic partnerships and new opportunities for users to unlock additional wealth. ',
        'Host events and treasure hunts within the Aztec Coin community to increase engagement and reward holders. '
      ]
    }
  ];

  return (
    <section id="roadmap" className="py-20 bg-gradient-to-b from-dark to-dark/90 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Road</span>map
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our strategic plan for developing and growing the Aztec Treasury ecosystem.
          </p>
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/30"></div>

          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <div key={index} className="relative">
                {/* Phase indicator for desktop */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -top-4 w-12 h-12 rounded-full bg-dark border-4 border-primary items-center justify-center z-10">
                  <span className="text-primary font-bold">{index + 1}</span>
                </div>

                <div className={`md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Date section */}
                  <div className="md:w-1/2 flex items-center justify-center md:justify-end p-4">
                    {/* <div className={`bg-primary/10 px-6 py-3 rounded-full font-bold ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                      {item.date}
                    </div> */}
                  </div>

                  {/* Content section */}
                  <div className="md:w-1/2 p-4">
                    <div className="bg-dark/50 p-6 rounded-xl border border-primary/20 transform transition-transform hover:scale-[1.02]">
                      <div className="md:hidden flex items-center mb-4">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mr-3">
                          <span className="text-dark font-bold">{index + 1}</span>
                        </div>
                        <span className="text-primary font-bold">{item.phase}</span>
                      </div>
                      <h3 className="hidden md:block text-2xl font-bold mb-2 text-primary">{item.phase}: {item.title}</h3>
                      <h3 className="md:hidden text-2xl font-bold mb-2 text-primary">{item.title}</h3>
                      <ul className="space-y-2 mt-4">
                        {item.items.map((listItem, i) => (
                          <li key={i} className="flex items-start">
                            <span className={`inline-block w-4 h-4 ${item.completed ? 'bg-green-500' : 'bg-gray-600'} rounded-full mr-3 mt-1`}></span>
                            <span className="text-gray-300">{listItem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}