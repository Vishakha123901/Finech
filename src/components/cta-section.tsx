"use client";

import { Mail, ArrowRight } from "lucide-react";

export function CtaSection() {
    return (
        <section className="relative w-full bg-black overflow-hidden">

            {/* ─── TOP CTA BLOCK ─── */}
            <div
                className="relative w-full py-24 sm:py-32 flex flex-col items-center justify-center text-center px-6"
                style={{
                    backgroundImage: 'url(/cta-background.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                {/* Overlay gradient for better text visibility */}
                <div 
                    className="absolute inset-0 pointer-events-none z-0"
                    style={{ 
                        background: 'radial-gradient(ellipse 100% 100% at 50% 0%, rgba(26,58,107,0.7) 0%, rgba(15,37,80,0.8) 30%, rgba(4,17,30,0.9) 65%, rgba(0,0,0,0.95) 100%)',
                    }}
                />
                {/* Dot pattern */}
                <div
                    className="absolute inset-0 z-0 opacity-25 pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(#4a7cbf 1.5px, transparent 1.5px)', backgroundSize: '38px 38px' }}
                />

                {/* Left white side glow */}
                <div className="absolute top-0 left-0 w-64 h-full bg-gradient-to-r from-white/15 to-transparent pointer-events-none z-0" />
                {/* Right white side glow - stronger to match left */}
                <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-white/20 to-transparent pointer-events-none z-0" />
                {/* Extra blurred blob on right for visibility */}
                <div className="absolute top-1/4 right-0 w-80 h-80 bg-white/10 rounded-full blur-[80px] pointer-events-none z-0" />

                {/* Corner red glows */}
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-red-900/25 rounded-full blur-[110px] pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-red-900/25 rounded-full blur-[110px] pointer-events-none" />

                {/* Content */}
                <div className="relative z-10 w-full max-w-2xl mx-auto">
                    <p className="text-[11px] font-bold tracking-[0.2em] text-[#3b82f6] uppercase mb-5">
                        FINANCE SOLUTION
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-5 leading-tight">
                        Ready to Scale Your Payments?
                    </h2>
                    <p className="text-gray-400 text-sm sm:text-base max-w-lg mx-auto leading-relaxed mb-10">
                        Join thousands of businesses worldwide using Finech to simplify transactions, enhance security, and drive growth.
                    </p>

                    {/* Email Input — stacks on mobile */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center w-full max-w-md mx-auto gap-3 sm:gap-0 sm:bg-white sm:rounded-full sm:shadow-2xl sm:overflow-hidden sm:pl-5 sm:pr-1.5 sm:py-1.5">
                        {/* Icon only visible on sm+ */}
                        <Mail className="hidden sm:block h-4 w-4 text-gray-400 flex-shrink-0" strokeWidth={2} />

                        {/* Mobile: bordered input */}
                        <div className="flex items-center bg-white rounded-full pl-4 pr-3 py-3 sm:hidden shadow-lg">
                            <Mail className="h-4 w-4 text-gray-400 flex-shrink-0 mr-2" strokeWidth={2} />
                            <input
                                type="email"
                                placeholder="Send your email"
                                className="flex-1 text-sm text-gray-800 placeholder-gray-400 bg-transparent focus:outline-none font-medium"
                            />
                        </div>

                        {/* Desktop: seamless input inside pill */}
                        <input
                            type="email"
                            placeholder="Send your email"
                            className="hidden sm:block flex-1 text-sm text-gray-800 placeholder-gray-400 bg-transparent focus:outline-none font-medium"
                        />

                        <button className="bg-[#0066FF] hover:bg-blue-700 text-white text-sm font-bold rounded-full px-6 py-3 sm:py-2.5 flex items-center justify-center gap-2 whitespace-nowrap transition-colors duration-200 flex-shrink-0 shadow-lg sm:shadow-none">
                            Talk to Sales
                            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                        </button>
                    </div>
                </div>
            </div>

            {/* ─── LOGO MARQUEE ─── */}
            <div className="relative bg-[#0a0a0a] py-5 border-t border-white/5">
                <style>{`
                    @keyframes ticker {
                        from { transform: translateX(0); }
                        to   { transform: translateX(-50%); }
                    }
                    .ticker-inner {
                        display: flex;
                        width: max-content;
                        animation: ticker 28s linear infinite;
                        will-change: transform;
                    }
                    .ticker-inner:hover {
                        animation-play-state: paused;
                    }
                `}</style>

                {/* Fade edges */}
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

                <div className="overflow-hidden">
                    <div className="ticker-inner">
                        {[0, 1].map((set) => (
                            <div key={set} className="flex items-center gap-10 sm:gap-14 px-6 sm:px-10">
                                <span className="font-black italic text-xl text-gray-300 whitespace-nowrap select-none">amazon</span>

                                <span className="flex items-center gap-1.5 text-gray-300 whitespace-nowrap select-none">
                                    <svg viewBox="0 0 256 218" className="h-5 w-5 fill-current flex-shrink-0"><path d="M63.995 0L0 40.967l63.995 40.966 64.007-40.966L63.995 0zm128.01 0l-64.007 40.967 64.007 40.966L256 40.967 192.005 0zM0 122.9l63.995 40.967 64.007-40.967-64.007-40.966L0 122.9zm192.005-40.966L128.002 122.9l63.997 40.967L256 122.9l-63.995-40.966zM64 177.541l64.007 40.456L192 177.541l-64.007-40.967L64 177.541z" /></svg>
                                    <span className="font-bold text-lg">Dropbox</span>
                                </span>

                                <span className="flex items-center gap-1.5 text-gray-300 whitespace-nowrap select-none">
                                    <span className="text-lg font-black">✳</span>
                                    <span className="font-bold text-lg">loom</span>
                                </span>

                                <span className="flex items-center gap-1.5 text-gray-300 whitespace-nowrap select-none">
                                    <span className="font-black text-xl leading-none">●●</span>
                                    <span className="font-bold text-lg">Medium</span>
                                </span>

                                <span className="flex items-center gap-1.5 text-gray-300 whitespace-nowrap select-none">
                                    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current flex-shrink-0"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z" /></svg>
                                    <span className="font-black text-lg">twitch</span>
                                </span>

                                <span className="flex items-center gap-1.5 text-gray-300 whitespace-nowrap select-none">
                                    <svg viewBox="0 0 127.14 96.36" className="h-5 w-5 fill-current flex-shrink-0"><path d="M107.7 8.07A105.15 105.15 0 0 0 81.47 0a72.06 72.06 0 0 0-3.36 6.83 97.68 97.68 0 0 0-29.11 0A72.37 72.37 0 0 0 45.64 0a105.89 105.89 0 0 0-26.25 8.09C2.79 32.65-1.71 56.6.54 80.21a105.73 105.73 0 0 0 32.17 16.15 77.7 77.7 0 0 0 6.89-11.11 68.42 68.42 0 0 1-10.85-5.18c.91-.66 1.8-1.34 2.66-2a75.57 75.57 0 0 0 64.32 0c.87.71 1.76 1.39 2.66 2a68.68 68.68 0 0 1-10.87 5.19 77 77 0 0 0 6.89 11.1 105.25 105.25 0 0 0 32.19-16.14c2.64-27.38-4.51-51.11-18.9-72.15zM42.45 65.69C36.18 65.69 31 60 31 53s5-12.74 11.43-12.74S54 46 53.89 53s-5.05 12.69-11.44 12.69zm42.24 0C78.41 65.69 73.25 60 73.25 53s5-12.74 11.44-12.74S96.23 46 96.12 53s-5.04 12.69-11.43 12.69z" /></svg>
                                    <span className="font-bold text-lg">Discord</span>
                                </span>

                                <span className="flex items-center gap-1.5 text-gray-300 whitespace-nowrap select-none">
                                    <span className="font-bold text-lg">mailchimp</span>
                                </span>

                                <span className="flex items-center gap-1.5 text-gray-300 whitespace-nowrap select-none">
                                    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current flex-shrink-0"><path d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-6-4.5H9a1.5 1.5 0 0 0-1.5 1.5v5.625L9 13.5V10.5h7.5V9A1.5 1.5 0 0 0 18 7.5zm-4.5 9H18a1.5 1.5 0 0 0 1.5-1.5V9.375L18 10.5v3H10.5V15a1.5 1.5 0 0 0 1.5 1.5h1.5z" /></svg>
                                    <span className="font-bold text-lg">Zoom</span>
                                </span>

                                <span className="flex items-center gap-1.5 text-gray-300 whitespace-nowrap select-none">
                                    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current flex-shrink-0"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zm2.521-10.123a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zm10.122 2.521a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.268 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zm-2.523 10.122a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.268a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" /></svg>
                                    <span className="font-bold text-lg">Slack</span>
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
}
