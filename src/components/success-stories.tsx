"use client";

import { ArrowRight } from "lucide-react";

interface TestimonialCardProps {
    quote: string;
    author: string;
    role: string;
    logoText: string;
    dark?: boolean;
}

function TestimonialCard({ quote, author, role, logoText, dark = false }: TestimonialCardProps) {
    return (
        <div className={`rounded-3xl px-7 py-12 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col justify-between flex-shrink-0 w-full min-h-[300px] ${dark ? 'bg-[#111111] text-white' : 'bg-white text-gray-900'}`}>
            <p className={`text-base sm:text-lg font-medium leading-relaxed mb-10 ${dark ? 'text-gray-100' : 'text-gray-800'}`}>
                &quot;{quote}&quot;
            </p>
            <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-3">
                    <div className={`h-10 w-10 rounded-full flex-shrink-0 ${dark ? 'bg-gray-700' : 'bg-gray-200'}`} />
                    <div className="flex flex-col">
                        <span className={`font-bold text-[14px] ${dark ? 'text-white' : 'text-gray-900'}`}>{author}</span>
                        <span className={`text-[11px] font-medium ${dark ? 'text-gray-400' : 'text-gray-500'}`}>{role}</span>
                    </div>
                </div>
                <div className={`font-black text-lg tracking-tighter ${dark ? 'text-white/80' : 'text-gray-400'}`}>
                    {logoText}
                </div>
            </div>
        </div>
    );
}

const col1Cards = [
    { quote: "Managing enterprise transactions at scale requires reliability. Finech's uptime and real-time monitoring make them the perfect partner.", author: "Frances Swann", role: "CEO of Toggl", logoText: "toggl" },
    { quote: "Security was our top concern, and Finech exceeded expectations. Their PCI DSS compliance and AI-powered fraud detection give us peace of mind.", author: "Autumn Phillips", role: "CTO at Spotify", logoText: "Spotify", dark: true },
    { quote: "Since integrating Finech, our transaction speed increased by 40%, and we've significantly reduced operational costs.", author: "Marcus Berg", role: "VP Finance at Notion", logoText: "Notion" },
    { quote: "Finech's real-time processing is unlike anything we've used. Our customers notice the difference immediately.", author: "Chris Lane", role: "Payments Lead at Shopify", logoText: "Shopify", dark: true },
];

const col2Cards = [
    { quote: "Issuing virtual and physical cards used to be complex, but with Finech, we did it in just days. Our customers love the seamless experience!", author: "Rhonda Rhodes", role: "Risk Manager at UpWork", logoText: "upwork" },
    { quote: "Finech has completely transformed our cross-border transactions. With seamless multi-currency support, we now process international payments 50% faster!", author: "Paula Mora", role: "CFO at Tesla", logoText: "TESLA" },
    { quote: "From integration to compliance, Finech handled it all. We can't imagine running our operations without their infrastructure.", author: "Sarah Miller", role: "Product Lead at Stripe", logoText: "stripe" },
    { quote: "The onboarding was fast and support is world-class. Finech is our go-to financial infrastructure partner.", author: "Daniel Wu", role: "CTO at Adobe", logoText: "Adobe" },
];

const col3Cards = [
    { quote: "Finech's API-first approach allowed us to integrate financial services effortlessly. As our business scaled, their infrastructure adapted without friction.", author: "Eddie Lake", role: "COO at Zoom", logoText: "zoom", dark: true },
    { quote: "Finech helped us reduce payout times from days to minutes. Our sellers are happier than ever, and transaction disputes have dropped significantly!", author: "Iva Ryan", role: "CTO at Discord", logoText: "Discord" },
    { quote: "Embedding financial services into our SaaS product was easier than we imagined. Finech's API saved us months of development time!", author: "Jason Chou", role: "Founder at Figma", logoText: "figma" },
    { quote: "We scaled from 100 to 10,000 transactions per day with zero interruptions. Finech's infrastructure is rock solid.", author: "Priya Kapoor", role: "Head of Growth at Vercel", logoText: "Vercel", dark: true },
];

export function SuccessStories() {
    return (
        <section className="relative w-full bg-[#f8fafc] py-20 sm:py-32 border-t border-gray-100 overflow-hidden">
            {/* Dotted background pattern */}
            <div className="absolute inset-0 z-0 opacity-40" style={{ backgroundImage: 'radial-gradient(#CBD5E1 2px, transparent 2px)', backgroundSize: '40px 40px' }} />

            {/* Top and bottom gradient masks to fade the scrolling columns */}
            <div className="absolute top-0 left-0 right-0 h-60 bg-gradient-to-b from-[#f8fafc] to-transparent pointer-events-none z-20" />
            <div className="absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-t from-[#f8fafc] to-transparent pointer-events-none z-20" />

            <style>{`
                @keyframes scrollUp {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(-50%); }
                }
                @keyframes scrollDown {
                    0% { transform: translateY(-50%); }
                    100% { transform: translateY(0); }
                }
                .scroll-up {
                    animation: scrollUp 20s linear infinite;
                }
                .scroll-down {
                    animation: scrollDown 20s linear infinite;
                }
            `}</style>

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <h2 className="text-[12px] font-bold tracking-[0.1em] text-[#0066FF] uppercase mb-4">
                        SUCCESS STORY
                    </h2>
                    <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight text-black mb-6">
                        How Businesses Thrive with Finech
                    </h3>
                    <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Join the growing list of companies that trust Finech to power their payments, banking, and financial services. From startups to enterprises, our platform delivers real results—faster transactions, improved security, and effortless scalability.
                    </p>
                </div>

                {/* Scrolling Card Columns - Fixed Height container */}
                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-5 h-auto md:h-[700px] max-w-4xl mx-auto">

                    {/* Column 1 – Scroll UP (Mobile: show first 2 cards, Desktop: animate all) */}
                    <div className="overflow-hidden h-auto md:h-full">
                        {/* Mobile: Show first 2 cards static */}
                        <div className="flex flex-col gap-6 md:hidden">
                            {col1Cards.slice(0, 2).map((card, i) => (
                                <TestimonialCard key={i} {...card} />
                            ))}
                        </div>
                        {/* Desktop: Show all cards with animation */}
                        <div className="hidden md:flex md:flex-col md:gap-6 scroll-up">
                            {[...col1Cards, ...col1Cards].map((card, i) => (
                                <TestimonialCard key={`desktop-${i}`} {...card} />
                            ))}
                        </div>
                    </div>

                    {/* Column 2 – Scroll DOWN (Hidden on mobile) */}
                    <div className="overflow-hidden h-auto md:h-full hidden md:block">
                        <div className="scroll-down flex flex-col gap-6">
                            {[...col2Cards, ...col2Cards].map((card, i) => (
                                <TestimonialCard key={i} {...card} />
                            ))}
                        </div>
                    </div>

                    {/* Column 3 – Scroll UP (Hidden on mobile) */}
                    <div className="overflow-hidden h-auto md:h-full hidden md:block">
                        <div className="scroll-up flex flex-col gap-6">
                            {[...col3Cards, ...col3Cards].map((card, i) => (
                                <TestimonialCard key={i} {...card} />
                            ))}
                        </div>
                    </div>

                    {/* Floating Explore Button - Centered at bottom */}
                    <div className="relative md:absolute md:-bottom-6 left-0 md:left-1/2 md:-translate-x-1/2 z-30 mt-8 md:mt-0 flex justify-center">
                        <button className="bg-[#0066FF] hover:bg-blue-600 text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all shadow-xl flex items-center justify-center gap-2 whitespace-nowrap">
                            Explore Case Studies
                            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
