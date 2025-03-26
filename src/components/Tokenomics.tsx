"use client";

import React from 'react';

export default function Tokenomics() {
  const tokenData = [
    { name: 'Public Sale', percentage: 60, color: 'bg-primary',svgcolor:'fill-primary' },
    { name: 'Marketing & Partnerships', percentage: 20, color: 'bg-blue-500',svgcolor:'fill-blue-500' },
    { name: 'Community Rewards', percentage: 15, color: 'bg-green-500', svgcolor:'fill-green-500'},
    { name: 'Development', percentage: 5, color: 'bg-purple-500' ,svgcolor:'fill-purple-500'},
  ];

  return (
    <section id="tokenomics" className="py-20 bg-gradient-to-b from-dark/90 to-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Token</span>omics
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our token distribution is designed for long-term sustainability with a focus on community ownership.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-dark/50 p-8 rounded-xl border border-primary/20">
              <h3 className="text-2xl font-bold mb-6 text-primary">Token Details</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg">Token Name:</span>
                  <span className="text-lg font-bold text-primary">AZTEC</span>
                </div>
                <div className="h-px bg-gray-700"></div>
                
                <div className="flex justify-between items-center">
                  <span className="text-lg">Total Supply:</span>
                  <span className="text-lg font-bold text-primary">15,000,000 AZTEC</span>
                </div>
                <div className="h-px bg-gray-700"></div>
                
                <div className="flex justify-between items-center">
                  <span className="text-lg">Initial Price:</span>
                  <span className="text-lg font-bold text-primary">Market Determined</span>
                </div>
                <div className="h-px bg-gray-700"></div>
                
                <div className="flex justify-between items-center">
                  <span className="text-lg">Network:</span>
                  <span className="text-lg font-bold text-primary">Solana (SPL Token)</span>
                </div>
                <div className="h-px bg-gray-700"></div>
                
                <div className="flex justify-between items-center">
                  <span className="text-lg">Presale:</span>
                  <span className="text-lg font-bold text-primary">None</span>
                </div>
                <div className="h-px bg-gray-700"></div>
                
                <div className="flex justify-between items-center">
                  <span className="text-lg">Transaction Tax:</span>
                  <span className="text-lg font-bold text-primary">0%</span>
                </div>
                <div className="h-px bg-gray-700"></div>

                <div className="flex justify-between items-center">
                  <span className="text-lg">Contract:</span>
                  <span className="text-lg font-bold text-primary">Renounced</span>
                </div>
                <div className="h-px bg-gray-700"></div>

                <div className="flex justify-between items-center">
                  <span className="text-lg">Liquidity:</span>
                  <span className="text-lg font-bold text-primary">Burnt</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-xl font-bold mb-4 text-primary">True Community Ownership</h4>
                <p className="text-gray-300">
                  Aztec Coin is 100% community-driven with no team allocations, no presale, and no transaction taxes. All liquidity has been burnt, ensuring long-term stability for all holders.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center text-primary">Distribution</h3>
            <div className="relative pt-1">
              <div className="flex h-60 w-60 mx-auto">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {tokenData.map((item, index) => {
                    // Calculate the starting position for this slice
                    const previousPercentages = tokenData
                      .slice(0, index)
                      .reduce((sum, curr) => sum + curr.percentage, 0);
                    
                    const startAngle = (previousPercentages / 100) * 360;
                    const endAngle = ((previousPercentages + item.percentage) / 100) * 360;
                    
                    // Convert angles to coordinates on the circle
                    const startX = 50 + 40 * Math.cos((startAngle - 90) * (Math.PI / 180));
                    const startY = 50 + 40 * Math.sin((startAngle - 90) * (Math.PI / 180));
                    const endX = 50 + 40 * Math.cos((endAngle - 90) * (Math.PI / 180));
                    const endY = 50 + 40 * Math.sin((endAngle - 90) * (Math.PI / 180));
                    
                    // Determine if the arc should be drawn as a large arc
                    const largeArcFlag = item.percentage > 50 ? 1 : 0;
                    
                    // SVG path for the pie slice
                    const path = [
                      `M 50 50`,
                      `L ${startX} ${startY}`,
                      `A 40 40 0 ${largeArcFlag} 1 ${endX} ${endY}`,
                      `Z`
                    ].join(' ');
                    
                    return (
                      <path
                        key={index}
                        d={path}
                      
                        className={`${item.svgcolor} transform hover:scale-105 transition-transform`}
                        stroke="#1A1A1A"
                        strokeWidth="1"
                      />
                    );
                  })}
                </svg>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {tokenData.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className={`w-4 h-4 ${item.color} rounded-full mr-2`}></div>
                  <span className="mr-2">{item.name}:</span>
                  <span className="font-bold">{item.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* <div className="mt-16 bg-dark/30 p-8 rounded-xl border border-primary/10">
          <h3 className="text-2xl font-bold mb-6 text-center text-primary">AZTEC Advantages</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 bg-dark/50 rounded-lg border border-primary/20">
              <h4 className="text-xl font-bold mb-3 text-primary">Fast Transactions</h4>
              <p className="text-gray-300">Solana blockchain provides ultra-fast transaction speeds with near-zero fees</p>
            </div>
            <div className="p-6 bg-dark/50 rounded-lg border border-primary/20">
              <h4 className="text-xl font-bold mb-3 text-primary">No Hidden Fees</h4>
              <p className="text-gray-300">0% transaction taxes means you keep 100% of your tokens</p>
            </div>
            <div className="p-6 bg-dark/50 rounded-lg border border-primary/20">
              <h4 className="text-xl font-bold mb-3 text-primary">Burnt Liquidity</h4>
              <p className="text-gray-300">Permanently locked liquidity ensures long-term stability</p>
            </div>
            <div className="p-6 bg-dark/50 rounded-lg border border-primary/20">
              <h4 className="text-xl font-bold mb-3 text-primary">ATM Network</h4>
              <p className="text-gray-300">Coming soon: Seamless access to your assets via physical ATMs</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
} 