"use client";

import { useState } from "react";
import { Lock, ShieldCheck, Sparkles, Scale, Cpu, Hexagon, Command, Eclipse } from "lucide-react";

export function SecurityCompliance() {
    const [activeItem, setActiveItem] = useState(0);

    const items = [
        {
            title: "End-to-End Encryption",
            desc: "Every transaction is encrypted, safeguarding sensitive financial data from unauthorized access.",
            icon: Lock
        },
        {
            title: "PCI DSS Level 1 Compliance",
            desc: "Ensuring the highest level of payment security for processing transactions.",
            icon: ShieldCheck
        },
        {
            title: "AI-Powered Fraud Detection",
            desc: "Advanced machine learning models analyze transaction patterns to detect and prevent fraudulent activities in real-time.",
            icon: Sparkles
        },
        {
            title: "Regulatory Compliance (KYC, AML, PSD2)",
            desc: "Built-in compliance solutions to meet global financial regulations and ensure a seamless user verification process.",
            icon: Scale
        }
    ];

    return (
        <section id="security" className="relative w-full bg-white py-16 sm:py-24 overflow-hidden border-t border-gray-100">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <h2 className="text-[12px] font-bold tracking-[0.1em] text-[#0066FF] uppercase mb-4">
                        SECURITY & COMPLIANCE
                    </h2>
                    <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight text-black mb-5">
                        Enterprise-Grade Protection for Your Business
                    </h3>
                    <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Our platform is designed to meet the highest industry standards, ensuring your transactions, customer data, and financial operations remain secure and fully compliant with global regulations.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">

                    {/* Left: Interactive List */}
                    <div className="flex flex-col gap-2">
                        {items.map((item, i) => (
                            <div
                                key={i}
                                onMouseEnter={() => setActiveItem(i)}
                                className={`flex flex-col gap-2 pl-6 py-4 cursor-pointer transition-all duration-300 border-l-[3px] ${activeItem === i ? 'border-[#0066FF]' : 'border-transparent opacity-60 hover:opacity-100'}`}
                            >
                                <div className="flex items-center gap-3">
                                    <item.icon className="h-5 w-5 text-gray-800" strokeWidth={2.5} />
                                    <h4 className="text-[16px] font-bold text-black">{item.title}</h4>
                                </div>
                                <p className="text-sm text-gray-500 leading-relaxed max-w-md">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Right: Card Visualization */}
                    <div className="relative w-full aspect-square max-w-md mx-auto flex items-center justify-center">
                        {/* Dotted background */}
                        <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#9ca3af 2px, transparent 2px)', backgroundSize: '32px 32px' }} />

                        {/* The Card */}
                        <div className="relative z-10 w-[340px] h-[210px] bg-[#111111] rounded-[20px] shadow-[0_20px_40px_-5px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col justify-between p-6">
                            {/* Abstract card shapes */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.02] rounded-full blur-[40px] translate-x-1/3 -translate-y-1/3" />
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/[0.03] rounded-full blur-[30px] -translate-x-1/4 translate-y-1/4" />

                            {/* Card Chip & Elements */}
                            <div className="flex justify-between items-start relative z-10">
                                <div className="flex gap-2">
                                    <div className="w-16 h-8 bg-white/10 rounded-md backdrop-blur-md" />
                                </div>
                                <div className="w-24 h-6 bg-white/5 rounded-full" />
                            </div>

                            {/* Card Mid bars */}
                            <div className="flex gap-2 relative z-10 mt-2">
                                <div className="w-12 h-6 bg-white/10 rounded-full" />
                                <div className="w-12 h-6 bg-white/10 rounded-full" />
                                <div className="w-12 h-6 bg-white/10 rounded-full" />
                                <div className="w-12 h-6 bg-white/10 rounded-full" />
                            </div>

                            {/* Card Bottom / Logo */}
                            <div className="flex justify-between items-end relative z-10">
                                <div className="flex flex-col gap-2">
                                    <div className="w-8 h-2 bg-white/10 rounded-full" />
                                    <div className="w-16 h-2 bg-white/10 rounded-full" />
                                </div>
                                <div className="flex items-center">
                                    <div className="w-7 h-7 rounded-full bg-red-500 mix-blend-screen" />
                                    <div className="w-7 h-7 rounded-full bg-yellow-500 mix-blend-screen -ml-3" />
                                    <span className="text-[6px] font-bold text-white ml-1 mt-6 absolute right-0">mastercard</span>
                                </div>
                            </div>
                        </div>

                        {/* Floating Labels */}
                        {/* Top Lock Badge */}
                        <div className="absolute top-[20%] left-[8%] bg-white rounded-2xl px-3 py-2 shadow-[0_10px_20px_rgba(0,0,0,0.1)] border border-gray-100 z-20 flex items-center justify-center transform -translate-y-1/2">
                            <Lock className="w-5 h-5 text-gray-700" strokeWidth={2} />
                        </div>

                        {/* Middle Right Main Numbers */}
                        <div className="absolute top-[50%] right-[0%] bg-white rounded-full px-5 py-2.5 shadow-[0_15px_25px_rgba(0,0,0,0.1)] border border-gray-100 z-20 flex items-center justify-center transform -translate-y-1/2 translate-x-4">
                            <span className="font-bold text-gray-600 tracking-[0.2em] text-sm">**** **** **** ****</span>
                        </div>

                        {/* Bottom Left Small Numbers */}
                        <div className="absolute bottom-[20%] left-[10%] bg-white rounded-full px-4 py-2 shadow-[0_10px_20px_rgba(0,0,0,0.1)] border border-gray-100 z-20 flex items-center justify-center transform translate-y-2">
                            <span className="font-bold text-gray-600 tracking-[0.2em] text-sm">** ** ** **</span>
                        </div>

                        {/* Faint accent lines around card */}
                        <div className="absolute top-1/4 right-[20%] w-32 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent z-0" />
                        <div className="absolute bottom-[20%] right-[20%] w-32 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent z-0" />
                    </div>
                </div>

                {/* Bottom Logo Bar */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-items-center opacity-70">
                    <div className="flex items-center gap-2 text-gray-500 grayscale hover:grayscale-0 transition-all cursor-pointer">
                        <Hexagon className="w-8 h-8 flex-shrink-0" fill="currentColor" />
                        <span className="font-bold text-xl tracking-tight">Logoipsum</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 grayscale hover:grayscale-0 transition-all cursor-pointer">
                        <Eclipse className="w-8 h-8 flex-shrink-0" fill="currentColor" />
                        <span className="font-bold text-xl tracking-tight">Logoipsum</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 grayscale hover:grayscale-0 transition-all cursor-pointer">
                        <Command className="w-8 h-8 flex-shrink-0" fill="currentColor" />
                        <span className="font-bold text-xl tracking-tight">Logoipsum</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 grayscale hover:grayscale-0 transition-all cursor-pointer">
                        <Cpu className="w-8 h-8 flex-shrink-0" fill="currentColor" />
                        <span className="font-bold text-xl tracking-tight">Logoipsum</span>
                    </div>
                </div>

            </div>
        </section>
    );
}
