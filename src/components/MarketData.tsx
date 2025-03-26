"use client";

import React from 'react';

export default function MarketData() {
  // Mock data for market stats
  const marketStats = {
    price: '$0.0072',
    priceChange: '+12.5%',
    marketCap: '$7,200,000',
    volume24h: '$1,450,000',
    holders: '15,230',
    liquidity: '$2,100,000'
  };

  // Mock data for price chart
  const generateChartData = () => {
    const data = [];
    let value = 35;
    
    for (let i = 0; i < 30; i++) {
      // Generate random price movement with slight upward bias
      const change = (Math.random() - 0.45) * 10;
      value = Math.max(10, value + change);
      data.push(value);
    }
    
    return data;
  };
  
  const chartData = generateChartData();
  
  // Calculate chart path
  const chartWidth = 1000;
  const chartHeight = 200;
  const chartPath = chartData.map((point, index) => {
    const x = (index / (chartData.length - 1)) * chartWidth;
    const y = chartHeight - ((point / Math.max(...chartData)) * chartHeight);
    return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
  }).join(' ');

  return (
    <section id="market" className="py-20 bg-gradient-to-b from-dark/90 to-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Market</span> Data
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-time market information and performance metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Market stats */}
          <div className="lg:col-span-1">
            <div className="bg-dark/50 p-8 rounded-xl border border-primary/20 h-full">
              <h3 className="text-2xl font-bold mb-6 text-primary">Market Stats</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Current Price</span>
                    <div className="flex items-center">
                      <span className="text-2xl font-bold text-primary mr-2">{marketStats.price}</span>
                      <span className="text-green-500 text-sm">{marketStats.priceChange}</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-700 h-1 rounded-full overflow-hidden">
                    <div className="bg-primary h-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-400 mb-1">Market Cap</p>
                    <p className="text-xl font-semibold">{marketStats.marketCap}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">24h Volume</p>
                    <p className="text-xl font-semibold">{marketStats.volume24h}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">Holders</p>
                    <p className="text-xl font-semibold">{marketStats.holders}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">Liquidity</p>
                    <p className="text-xl font-semibold">{marketStats.liquidity}</p>
                  </div>
                </div>

                <div className="pt-4">
                  <h4 className="text-xl font-bold mb-4 text-primary">Buy AZTEC</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <button className="bg-primary hover:bg-secondary text-dark font-bold py-3 px-4 rounded-lg transition">
                      Uniswap
                    </button>
                    <button className="bg-primary hover:bg-secondary text-dark font-bold py-3 px-4 rounded-lg transition">
                      PancakeSwap
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Price chart */}
          <div className="lg:col-span-2">
            <div className="bg-dark/50 p-8 rounded-xl border border-primary/20 h-full">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-primary">Price Chart</h3>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 rounded-md bg-primary/20 hover:bg-primary/30 text-primary text-sm">1D</button>
                  <button className="px-3 py-1 rounded-md bg-primary/20 hover:bg-primary/30 text-primary text-sm">1W</button>
                  <button className="px-3 py-1 rounded-md bg-primary text-dark text-sm">1M</button>
                  <button className="px-3 py-1 rounded-md bg-primary/20 hover:bg-primary/30 text-primary text-sm">1Y</button>
                </div>
              </div>
              
              <div className="relative h-[300px] w-full">
                <svg 
                  viewBox={`0 0 ${chartWidth} ${chartHeight}`} 
                  className="h-full w-full overflow-visible"
                  preserveAspectRatio="none"
                >
                  {/* Chart grid */}
                  {[0, 1, 2, 3].map((i) => (
                    <line
                      key={`grid-${i}`}
                      x1="0"
                      y1={i * (chartHeight / 3)}
                      x2={chartWidth}
                      y2={i * (chartHeight / 3)}
                      stroke="#333"
                      strokeWidth="1"
                      strokeDasharray="5,5"
                    />
                  ))}
                  
                  {/* Chart line */}
                  <path
                    d={`${chartPath}`}
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="3"
                  />
                  
                  {/* Chart area */}
                  <path
                    d={`${chartPath} L ${chartWidth} ${chartHeight} L 0 ${chartHeight} Z`}
                    fill="url(#areaGradient)"
                    opacity="0.2"
                  />
                  
                  {/* Gradients */}
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#E1B954" />
                      <stop offset="100%" stopColor="#FFD700" />
                    </linearGradient>
                    <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#E1B954" />
                      <stop offset="100%" stopColor="#E1B95400" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* X-axis labels */}
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>30 days ago</span>
                  <span>20 days ago</span>
                  <span>10 days ago</span>
                  <span>Today</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                <div className="bg-dark/30 p-4 rounded-lg">
                  <p className="text-gray-400 text-sm">All-Time High</p>
                  <p className="text-xl font-bold text-green-500">$0.0089</p>
                </div>
                <div className="bg-dark/30 p-4 rounded-lg">
                  <p className="text-gray-400 text-sm">All-Time Low</p>
                  <p className="text-xl font-bold text-red-500">$0.0012</p>
                </div>
                <div className="bg-dark/30 p-4 rounded-lg">
                  <p className="text-gray-400 text-sm">Circulating Supply</p>
                  <p className="text-xl font-bold">623,450,000 AZTEC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 