"use client";

import { useState } from "react";
import { MoveRight, Mail, CheckCircle2, MoveUpRight } from "lucide-react";

export function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <main className="flex-1 relative flex items-center min-h-screen py-24 md:py-12 lg:py-0 mt-20 md:mt-0"
      style={{
        backgroundImage: 'url(/hero-background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{ 
          background: 'radial-gradient(ellipse 120% 100% at 50% 10%, rgba(37,99,235,0.3) 0%, rgba(30,64,175,0.4) 15%, rgba(30,58,138,0.5) 30%, rgba(30,41,59,0.7) 50%, rgba(15,23,42,0.85) 70%, rgba(2,6,23,0.95) 90%, rgba(0,0,0,1) 100%)',
        }}
      />
      
      <div 
        className="absolute top-0 left-0 h-full w-[60%] pointer-events-none z-0"
        style={{ 
          background: 'radial-gradient(ellipse 70% 100% at 0% 50%, rgba(255,255,255,0.15) 0%, rgba(200,230,255,0.08) 25%, rgba(150,200,255,0.04) 50%, transparent 80%)' 
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:items-center lg:gap-x-12">

          <div className="max-w-xl text-center lg:text-left mx-auto lg:mx-0">
            <span className="inline-block text-[10px] font-bold tracking-[0.3em] text-white mb-4 uppercase">
              Finance Solution
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl leading-[1.12]">
              Empowering the Next Generation of Financial Infrastructure, Designed for You
            </h1>
            <p className="mt-6 text-sm leading-relaxed text-gray-400 max-w-sm mx-auto lg:mx-0">
              Powerful APIs and seamless integrations to help businesses move money, manage risk, and scale globally.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row max-w-[400px] items-center gap-3 sm:gap-0 bg-white rounded-2xl sm:rounded-xl p-1.5 shadow-lg mx-auto lg:mx-0">
              <div className="flex flex-1 items-center px-3 py-2 sm:py-0 gap-2.5 w-full">
                <Mail className="h-4 w-4 text-gray-400" />
                <input
                  type="email"
                  placeholder="Send your email"
                  className="w-full border-none bg-transparent p-0 text-gray-900 text-xs placeholder:text-gray-400 focus:ring-0 outline-none cursor-text"
                />
              </div>
              <button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-2.5 sm:py-2 text-[13px] font-semibold text-white transition-all hover:bg-blue-700 whitespace-nowrap active:scale-95 active:shadow-inner"
              >
                Talk to Sales
                <MoveRight className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-12">
              <p className="text-[10px] font-bold text-white uppercase tracking-widest">Partners in Financial Success</p>
              <div className="mt-6 grid grid-cols-2 md:flex md:flex-wrap gap-x-8 sm:gap-x-10 gap-y-4 items-center justify-center lg:justify-start">
                <div className="flex items-center gap-2 text-white hover:text-white/70 transition-colors cursor-default justify-center md:justify-start">
                  <span className="text-base sm:text-lg font-bold tracking-tighter">slack</span>
                </div>
                <div className="flex items-center gap-2 text-white hover:text-white/70 transition-colors cursor-default justify-center md:justify-start">
                  <span className="text-base sm:text-lg font-bold tracking-tighter italic font-serif">amazon</span>
                </div>
                <div className="flex items-center gap-2 text-white hover:text-white/70 transition-colors cursor-default justify-center md:justify-start">
                  <span className="text-base sm:text-lg font-bold tracking-tighter">Dropbox</span>
                </div>
                <div className="flex items-center gap-2 text-white hover:text-white/70 transition-colors cursor-default justify-center md:justify-start">
                  <span className="text-base sm:text-lg font-bold tracking-tighter">loom</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`relative h-[500px] sm:h-[550px] w-full flex items-center justify-center transition-all duration-700 ${isHovered ? 'scale-[1.02]' : 'scale-100'}`}>
            <div className="relative w-full h-full max-w-[380px] flex flex-col items-center justify-center overflow-visible">

              <div className={`relative w-[90%] z-30 transition-all duration-700 -rotate-[2.5deg] -translate-x-3 ${isHovered ? '-translate-y-6 -rotate-[4deg] scale-102 shadow-2xl shadow-emerald-500/10' : ''}`}>
                <div className="bg-[#1a1b1e] rounded-[16px] p-0.5 shadow-2xl ring-1 ring-white/10">
                  <div className="flex items-center gap-1.5 px-4 h-8 border-b border-white/5">
                    <div className="h-1.5 w-1.5 rounded-full bg-white/20" />
                    <div className="h-1.5 w-1.5 rounded-full bg-white/20" />
                    <div className="h-1.5 w-1.5 rounded-full bg-white/20" />
                  </div>
                  <div className="bg-white m-0 rounded-b-[14px] p-4 lg:p-6">
                    <pre className="font-mono text-[10px] sm:text-[12px] leading-relaxed text-gray-900 font-black">
                      <code>
                        <span className="text-emerald-500">GET</span> <span className="text-gray-900">/payments</span>{"\n"}
                        <span className="text-gray-900">Host:</span> <span className="text-emerald-500">api.finech.com</span>{"\n"}
                        <span className="text-gray-900">Auth: Bearer</span> <span className="text-orange-500">YOUR_API_KEY</span>
                      </code>
                    </pre>
                  </div>
                </div>
              </div>

              <div className={`relative mt-[-25px] w-[105%] z-20 transition-all duration-700 rotate-[2deg] translate-x-1 ${isHovered ? 'shadow-[0_48px_80px_-20px_rgba(255,255,255,0.05)]' : ''}`}>
                <div className="bg-white rounded-[20px] p-5 sm:p-7 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.3)] border border-gray-100/50">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2 text-gray-400 text-[9px] font-black uppercase tracking-widest">
                      <MoveUpRight className="h-3.5 w-3.5" />
                      <span>Transfer</span>
                    </div>
                    <div className="flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[8px] font-black text-emerald-600 border border-emerald-100">
                      <CheckCircle2 className="h-2.5 w-2.5" />
                      Success
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-[8px] font-black text-gray-300 mb-0.5 uppercase tracking-widest">TXN-9823745</p>
                    <p className="text-sm sm:text-base font-black text-gray-900">Business Payment</p>
                  </div>

                  <div className="relative h-px w-full bg-gray-100 mb-7 flex items-center">
                    <div className="absolute left-0 h-3.5 w-3.5 rounded-full bg-black ring-4 ring-white" />
                    <div className="h-0.5 w-1/2 bg-emerald-500" />
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 ring-4 ring-white" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-300 text-[9px] font-bold mb-2 uppercase">Source</p>
                      <p className="text-base sm:text-lg font-black text-gray-900 mb-1">$1,250.00</p>
                      <p className="text-[10px] text-gray-900 font-bold">M. Johnson</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-300 text-[9px] font-bold mb-2 uppercase">Destination</p>
                      <p className="text-base sm:text-lg font-black text-gray-900 mb-1">¥187,500</p>
                      <p className="text-[10px] text-gray-900 font-bold">H. Tanaka</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative mt-[-15px] w-[100%] z-30 flex gap-3 sm:gap-4 justify-center">
                <div className={`transition-all duration-700 -rotate-[3.5deg] -translate-y-1 ${isHovered ? '-translate-y-6 -rotate-[6deg] brightness-110' : ''}`}>
                  <div className="bg-[#1a1b1e] rounded-[16px] p-0.5 ring-1 ring-white/10 shadow-2xl">
                    <div className="flex items-center gap-1 px-3 h-7 border-b border-white/5">
                      <div className="h-1.5 w-1.5 rounded-full bg-white/20" />
                      <div className="h-1.5 w-1.5 rounded-full bg-white/20" />
                      <div className="h-1.5 w-1.5 rounded-full bg-white/20" />
                    </div>
                    <div className="bg-white m-0 rounded-b-[14px] p-4 sm:p-6 w-24 sm:w-32 text-center">
                      <p className="text-xl sm:text-2xl font-black text-gray-900 tracking-tighter mb-0.5">0.01%</p>
                      <p className="text-[7px] sm:text-[9px] font-black text-gray-400 uppercase tracking-widest">Failure</p>
                    </div>
                  </div>
                </div>

                <div className={`transition-all duration-700 rotate-[3deg] translate-y-3 ${isHovered ? '-translate-y-4 rotate-[5deg] brightness-110' : ''}`}>
                  <div className="bg-[#1a1b1e] rounded-[16px] p-0.5 ring-1 ring-white/10 shadow-2xl">
                    <div className="flex items-center gap-1 px-3 h-7 border-b border-white/5">
                      <div className="h-1.5 w-1.5 rounded-full bg-white/20" />
                      <div className="h-1.5 w-1.5 rounded-full bg-white/20" />
                      <div className="h-1.5 w-1.5 rounded-full bg-white/20" />
                    </div>
                    <div className="bg-white m-0 rounded-b-[14px] p-4 sm:p-6 w-24 sm:w-32 text-center">
                      <p className="text-xl sm:text-2xl font-black text-gray-900 tracking-tighter mb-0.5">95%</p>
                      <p className="text-[7px] sm:text-[9px] font-black text-gray-400 uppercase tracking-widest">Faster</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
