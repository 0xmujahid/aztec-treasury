"use client";

import React from 'react';
import Image from 'next/image';

export default function Tokenomics() {
 

  return (
    <section id="tokenomics" className="py-20 bg-gradient-to-b from-dark/90 to-dark text-white">
  <div className="container mx-auto px-4">
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-5xl font-bold mb-4"><span className='text-primary'>Token</span>omics</h2>
    <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>

    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Column 1 */}
  <div className="bg-[#E1B954] p-6 rounded-full border-2 border-white/10 flex flex-col items-center justify-center 
                 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#E1B954]/50 hover:border-white/30">
    <h3 className="text-2xl md:text-3xl font-bold text-center">Total Supply: 1,000,000,000</h3>
  </div>

  {/* Column 2 */}
  <div className="bg-[#E1B954] p-6 rounded-full border-2 border-white/10 flex flex-col items-center justify-center 
                 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#E1B954]/50 hover:border-white/30">
    <div className="flex items-center gap-2">
      <h3 className="text-2xl md:text-3xl font-bold">Solana Network</h3>
      <Image
        src="/images/solana-sol-logo.png" 
        alt="Solana Logo"
        width={132}
        height={132}
        className="w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 hover:rotate-12"
      />
    </div>
  </div>

  {/* Column 3 */}
  <div className="bg-[#E1B954] p-6 rounded-full border-2 border-white/10 flex flex-col items-center justify-center 
                 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#E1B954]/50 hover:border-white/30">
    <h3 className="text-2xl md:text-3xl font-bold text-center">LP: Burnt</h3>
  </div>
</div>
  </div>
</section>
  );
} 