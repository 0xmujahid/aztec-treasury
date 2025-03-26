"use client";

import React from 'react';
import Image from 'next/image';

export default function Community() {
  const socialLinks = [
    { name: 'Telegram', url: 'https://t.me/aztectreasury', icon: 'paper-plane' },
    { name: 'Twitter', url: 'https://twitter.com/aztectreasury', icon: 'twitter' },
    { name: 'Discord', url: 'https://discord.gg/aztectreasury', icon: 'discord' },
    { name: 'Reddit', url: 'https://reddit.com/r/aztectreasury', icon: 'reddit-alien' },
    { name: 'Medium', url: 'https://medium.com/@aztectreasury', icon: 'medium' },
    { name: 'GitHub', url: 'https://github.com/aztectreasury', icon: 'github' },
  ];

  // Mock recent updates
  const updates = [
    {
      id: 1,
      title: 'Treasury Vote Results Are In!',
      date: 'June 12, 2024',
      content: 'The community has voted to allocate 125,000 AZTEC tokens to expand our marketing efforts in Asia.',
    },
    {
      id: 2,
      title: 'New Exchange Listing Confirmed',
      date: 'June 8, 2024',
      content: 'We\'re excited to announce that AZTEC will be listed on a major Tier 1 exchange next week.',
    },
    {
      id: 3,
      title: 'Staking Platform Beta Launch',
      date: 'June 3, 2024',
      content: 'Our staking platform beta is now live. Early adopters will receive a 20% APY bonus for the first month.',
    },
  ];

  return (
    <section id="community" className="py-20 bg-gradient-to-b from-dark to-dark/90 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Join Our</span> Community
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with fellow treasure hunters and stay updated on the latest developments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Social links */}
          <div className="lg:col-span-1">
            <div className="bg-dark/50 p-8 rounded-xl border border-primary/20 h-full">
              <h3 className="text-2xl font-bold mb-6 text-primary">Join Us</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-6 bg-dark/50 rounded-lg border border-primary/10 hover:border-primary/30 transition-all hover:transform hover:scale-105"
                  >
                    <i className={`fab fa-${link.icon} text-3xl mb-3 text-primary`}></i>
                    <span className="font-medium">{link.name}</span>
                  </a>
                ))}
              </div>

              <div className="mt-8 bg-dark/30 p-6 rounded-lg text-center">
                <h4 className="text-xl font-bold mb-3 text-primary">Community Stats</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-2xl font-bold">65K+</p>
                    <p className="text-sm text-gray-400">Followers</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">25K+</p>
                    <p className="text-sm text-gray-400">Members</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">18K+</p>
                    <p className="text-sm text-gray-400">Holders</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent updates */}
          <div className="lg:col-span-2">
            <div className="bg-dark/50 p-8 rounded-xl border border-primary/20 h-full">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-primary">Recent Updates</h3>
                <a href="#" className="text-primary hover:underline">View All</a>
              </div>
              
              <div className="space-y-6">
                {updates.map((update) => (
                  <div 
                    key={update.id} 
                    className="p-6 bg-dark/30 rounded-lg border border-primary/10 hover:border-primary/30 transition-all"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-xl font-bold">{update.title}</h4>
                      <span className="text-sm text-gray-400">{update.date}</span>
                    </div>
                    <p className="text-gray-300">{update.content}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-primary/10 rounded-lg">
                <h4 className="text-xl font-bold mb-4 text-primary">Join Our Newsletter</h4>
                <p className="text-gray-300 mb-4">Get the latest updates about Aztec Treasury directly to your inbox.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="bg-dark/70 text-white rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button className="bg-primary hover:bg-secondary text-dark font-bold py-3 px-6 rounded-lg transition whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Community images */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative h-48 md:h-64 rounded-xl overflow-hidden">
            <Image 
              src="/images/shutterstock_2450963731.jpg" 
              alt="Community gathering" 
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h4 className="text-xl font-bold">Community Events</h4>
            </div>
          </div>
          <div className="relative h-48 md:h-64 rounded-xl overflow-hidden">
            <Image 
              src="/images/shutterstock_2424677341.jpg" 
              alt="Development team" 
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h4 className="text-xl font-bold">Developer Community</h4>
            </div>
          </div>
          <div className="relative h-48 md:h-64 rounded-xl overflow-hidden">
            <Image 
              src="/images/shutterstock_2425153259.jpg" 
              alt="Global community" 
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h4 className="text-xl font-bold">Global Network</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 