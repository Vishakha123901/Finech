"use client";

import { useState } from "react";
import { Globe, Building2, ArrowRight, ChevronDown, Maximize, Lock, ShieldCheck, Siren, Asterisk, Scale, LineChart } from "lucide-react";

export function FeaturesSection() {
    const [activeRow, setActiveRow] = useState<number | null>(0); // 0 is default hovered
    const [activeApiRow, setActiveApiRow] = useState<number | null>(null);
    const [activeSecurityCard, setActiveSecurityCard] = useState<number | null>(0);

    return (
        <section id="features" className="relative w-full bg-white py-16 sm:py-24 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Section Header */}
                <div className="mx-auto max-w-2xl text-center mb-10 sm:mb-12">
                    <h2 className="text-[12px] font-bold tracking-[0.15em] text-[#0066FF] uppercase mb-3">
                        Why Choose Finech?
                    </h2>
                    <p className="mt-2 text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight text-gray-900 leading-tight mb-4">
                        Powering the Future of Finance
                    </p>
                    <p className="text-base sm:text-lg leading-relaxed text-gray-500 font-medium max-w-xl mx-auto">
                        Unlock seamless transactions, secure financial services, and limitless scalability with our powerful, API-driven infrastructure.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">

                    {/* 1. Global Payments Card */}
                    <div className="bg-white rounded-[24px] border border-gray-100 p-5 sm:p-6 lg:p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] relative overflow-hidden flex flex-col animate-on-scroll stagger-1">
                        {/* Dotted background pattern */}
                        <div className="absolute inset-0 z-0 opacity-40" style={{ backgroundImage: 'radial-gradient(#d1d5db 2px, transparent 2px)', backgroundSize: '32px 32px' }} />

                        <div className="relative z-10 mb-8 mt-2">
                            <div className="flex items-center gap-3 mb-2">
                                <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-gray-900" strokeWidth={2.5} />
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Global Payments</h3>
                            </div>
                            <p className="text-gray-500 text-[13px] leading-relaxed font-medium pr-4">
                                Accept payments in 100+ currencies with instant settlement, ensuring smooth transactions across borders.
                            </p>
                        </div>

                        {/* Currency Rows Container */}
                        <div className="relative z-10 w-full mt-auto bg-white rounded-[16px] p-1.5 border border-gray-50 shadow-sm flex flex-col gap-1">
                            {[
                                { to: '€1,130.32', currency: 'EUR', color: 'bg-blue-600' },
                                { to: '£972.29', currency: 'GBP', color: 'bg-red-600' },
                                { to: '¥186,139.31', currency: 'JPY', color: 'bg-red-600' },
                                { to: 'A$1,884.74', currency: 'AUD', color: 'bg-blue-800' },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    onMouseEnter={() => setActiveRow(index)}
                                    className={`w-full flex items-center justify-between p-3 sm:p-4 rounded-[14px] transition-all duration-300 cursor-pointer ${activeRow === index ? 'bg-[#0f1115] text-white shadow-lg scale-[1.02]' : 'bg-transparent text-gray-900 hover:bg-gray-50'}`}
                                >
                                    <div className="flex flex-col gap-1">
                                        <span className={`text-lg sm:text-lg font-bold ${activeRow === index ? 'text-white' : 'text-gray-900'}`}>$1,237.58</span>
                                        <div className="flex items-center gap-1.5">
                                            <div className="h-2.5 w-3.5 bg-blue-800 relative rounded-[2px] overflow-hidden flex flex-col justify-between">
                                                <div className="bg-red-600 h-[30%]" />
                                                <div className="bg-white h-[40%]" />
                                                <div className="bg-blue-600 h-[30%]" />
                                            </div>
                                            <span className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-wider ${activeRow === index ? 'text-gray-400' : 'text-gray-500'}`}>USD</span>
                                        </div>
                                    </div>

                                    <div className={`h-5 w-5 rounded-full flex items-center justify-center shrink-0 ${activeRow === index ? 'bg-[#0066FF] text-white' : 'bg-gray-100 text-gray-400'}`}>
                                        <ArrowRight className="h-3 w-3" strokeWidth={2.5} />
                                    </div>

                                    <div className="flex flex-col gap-1 items-end">
                                        <span className={`text-lg sm:text-lg font-bold ${activeRow === index ? 'text-white' : 'text-gray-900'}`}>{item.to}</span>
                                        <div className="flex items-center gap-1.5 flex-row-reverse">
                                            {item.currency === 'JPY' ? (
                                                <div className="h-2.5 w-3.5 bg-white relative rounded-[2px] border border-gray-200 flex items-center justify-center">
                                                    <div className="h-1.5 w-1.5 rounded-full bg-red-600" />
                                                </div>
                                            ) : (
                                                <div className={`h-2.5 w-3.5 ${item.color} rounded-[2px]`} />
                                            )}
                                            <span className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-wider ${activeRow === index ? 'text-gray-400' : 'text-gray-500'}`}>{item.currency}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 2. Banking as a Service Card */}
                    <div className="bg-white rounded-[24px] border border-gray-100 p-5 sm:p-6 lg:p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] relative overflow-hidden flex flex-col animate-on-scroll stagger-2">
                        {/* Dotted background pattern */}
                        <div className="absolute inset-0 z-0 opacity-40" style={{ backgroundImage: 'radial-gradient(#d1d5db 2px, transparent 2px)', backgroundSize: '32px 32px' }} />

                        <div className="relative z-10 mb-6 mt-2">
                            <div className="flex items-center gap-3 mb-2">
                                <Building2 className="h-5 w-5 sm:h-6 sm:w-6 text-gray-900" strokeWidth={2.5} />
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Banking as a Service</h3>
                            </div>
                            <p className="text-gray-500 text-[13px] leading-relaxed font-medium pr-4">
                                Issue virtual and physical cards effortlessly, securely hold and manage funds, and seamlessly provide a wide range of financial services.
                            </p>
                        </div>

                        <div className="relative z-10 w-full mt-auto flex flex-col lg:flex-row gap-5">
                            {/* Left Side: Cards Visual */}
                            <div className="w-full lg:w-[45%] xl:w-[40%] relative flex flex-col justify-center gap-4 mt-2 sm:mt-0">
                                {/* Black Mastercard (Top) */}
                                <div className="w-full max-w-[280px] h-[160px] sm:h-[150px] bg-[#111111] rounded-[14px] p-5 flex flex-col justify-between shadow-[0_15px_30px_rgba(0,0,0,0.4)] relative z-20 mx-auto lg:mx-0">
                                    <div className="w-9 h-6 bg-gray-800 rounded-md" />
                                    <div className="flex flex-col gap-2.5">
                                        <div className="flex gap-2">
                                            <div className="h-1.5 w-9 bg-gray-800 rounded-full" />
                                            <div className="h-1.5 w-9 bg-gray-800 rounded-full" />
                                            <div className="h-1.5 w-9 bg-gray-800 rounded-full" />
                                            <div className="h-1.5 w-9 bg-gray-600 rounded-full" />
                                        </div>
                                        <div className="flex justify-between items-end">
                                            <div className="flex gap-3">
                                                <div className="h-1 w-10 bg-gray-800 rounded-full" />
                                                <div className="h-1 w-6 bg-gray-800 rounded-full" />
                                            </div>
                                            <div className="flex items-center">
                                                <div className="h-5 w-5 rounded-full bg-red-500 opacity-90" />
                                                <div className="h-5 w-5 rounded-full bg-yellow-500 -ml-2.5 opacity-90" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Silver Visa Card (Bottom) */}
                                <div className="w-full max-w-[280px] h-[160px] sm:h-[150px] bg-[#f3f4f6] rounded-[14px] p-5 flex flex-col justify-between border border-gray-200 shadow-md relative z-10 mx-auto lg:mx-0">
                                    <div className="w-9 h-6 bg-gray-300 rounded-md" />
                                    <div className="flex flex-col gap-2.5">
                                        <div className="flex gap-2">
                                            <div className="h-1.5 w-9 bg-gray-300 rounded-full" />
                                            <div className="h-1.5 w-9 bg-gray-300 rounded-full" />
                                            <div className="h-1.5 w-9 bg-gray-300 rounded-full" />
                                            <div className="h-1.5 w-9 bg-gray-400 rounded-full" />
                                        </div>
                                        <div className="flex justify-between items-end">
                                            <div className="flex gap-3">
                                                <div className="h-1 w-10 bg-gray-300 rounded-full" />
                                                <div className="h-1 w-6 bg-gray-300 rounded-full" />
                                            </div>
                                            <p className="text-[#1a1f71] font-extrabold italic text-[16px]">VISA</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side: Form */}
                            <div className="w-full lg:w-[55%] xl:w-[60%] bg-white rounded-[16px] p-5 lg:p-6 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] lg:ml-4 relative z-30">
                                <h4 className="text-[12px] font-bold text-gray-900 mb-4 uppercase tracking-wider">Create New Card</h4>

                                <div className="flex flex-col gap-3">
                                    {/* Input Group */}
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-[9px] font-bold text-gray-600 uppercase tracking-wide">Cardholder Name</label>
                                        <input
                                            type="text"
                                            placeholder="Cardholder Name"
                                            className="w-full text-[11px] sm:text-xs font-medium text-gray-900 placeholder-gray-400 border border-gray-200 rounded-md px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all"
                                        />
                                    </div>

                                    {/* Select Group 1 */}
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-[9px] font-bold text-gray-600 uppercase tracking-wide">Card Type</label>
                                        <div className="relative">
                                            <select className="w-full text-[11px] sm:text-xs font-medium text-gray-900 border border-gray-200 rounded-md px-3 py-2.5 appearance-none focus:outline-none focus:ring-2 focus:ring-[#0066FF] transition-all bg-white cursor-pointer">
                                                <option>Virtual</option>
                                                <option>Physical</option>
                                            </select>
                                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400 pointer-events-none" />
                                        </div>
                                    </div>

                                    {/* Select Group 2 */}
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-[9px] font-bold text-gray-600 uppercase tracking-wide">Card Network</label>
                                        <div className="relative">
                                            <select className="w-full text-[11px] sm:text-xs font-medium text-gray-900 border border-gray-200 rounded-md px-3 py-2.5 appearance-none focus:outline-none focus:ring-2 focus:ring-[#0066FF] transition-all bg-white cursor-pointer">
                                                <option>Visa</option>
                                                <option>Mastercard</option>
                                            </select>
                                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400 pointer-events-none" />
                                        </div>
                                    </div>

                                    {/* Select Group 3 */}
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-[9px] font-bold text-gray-600 uppercase tracking-wide">Currency</label>
                                        <div className="relative">
                                            <select className="w-full text-[11px] sm:text-xs font-medium text-gray-900 border border-gray-200 rounded-md pl-9 pr-3 py-2.5 appearance-none focus:outline-none focus:ring-2 focus:ring-[#0066FF] transition-all bg-white cursor-pointer">
                                                <option>USD</option>
                                                <option>EUR</option>
                                                <option>GBP</option>
                                            </select>
                                            <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center">
                                                <div className="h-2.5 w-3.5 bg-blue-800 relative rounded-[1px] overflow-hidden flex flex-col justify-between shrink-0">
                                                    <div className="bg-red-600 h-[30%]" />
                                                    <div className="bg-white h-[40%]" />
                                                    <div className="bg-blue-600 h-[30%]" />
                                                </div>
                                            </div>
                                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400 pointer-events-none" />
                                        </div>
                                    </div>

                                    <button className="w-full mt-2 bg-[#0066FF] hover:bg-blue-600 text-white font-bold text-[12px] py-3 rounded-md transition-colors shadow-sm">
                                        Create Card Now
                                    </button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                {/* Second Row Features Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">

                    {/* 3. Scalability Card */}
                    <div className="bg-white rounded-[24px] border border-gray-100 p-5 sm:p-6 lg:p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] relative overflow-hidden flex flex-col animate-on-scroll stagger-3">
                        {/* Dotted background pattern */}
                        <div className="absolute inset-0 z-0 opacity-40" style={{ backgroundImage: 'radial-gradient(#d1d5db 2px, transparent 2px)', backgroundSize: '32px 32px' }} />

                        <div className="relative z-10 mb-8 mt-2">
                            <div className="flex items-center gap-3 mb-2">
                                <Maximize className="h-5 w-5 sm:h-6 sm:w-6 text-gray-900" strokeWidth={2.5} />
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Scalability</h3>
                            </div>
                            <p className="text-gray-500 text-[13px] leading-relaxed font-medium pr-4">
                                A robust, API-driven system built to seamlessly support startups and enterprises, providing the flexibility, scalability, and security.
                            </p>
                        </div>

                        {/* API Table */}
                        <div className="relative z-10 w-full mt-auto bg-white rounded-[16px] border border-gray-100 shadow-sm flex flex-col overflow-hidden">
                            {/* Table Header */}
                            <div className="bg-[#111111] px-3 sm:px-4 py-3 grid grid-cols-12 gap-2 sm:gap-4">
                                <div className="col-span-3 text-white text-[9px] sm:text-[10px] font-bold">Category</div>
                                <div className="col-span-4 text-white text-[9px] sm:text-[10px] font-bold">API Example</div>
                                <div className="col-span-5 text-white text-[9px] sm:text-[10px] font-bold">Purpose</div>
                            </div>
                            {/* Table Rows */}
                            <div className="flex flex-col bg-white">
                                {[
                                    { cat: 'Payments', method: 'POST', path: '/payments', purpose: 'Process transactions at scale' },
                                    { cat: 'Multi-Currency', method: 'GET', path: '/exchange-rates', purpose: 'Access live FX rates for 100+ currencies' },
                                    { cat: 'User Management', method: 'POST', path: '/users', purpose: 'Create & manage customers dynamically' },
                                    { cat: 'Security', method: 'POST', path: '/fraud-detection', purpose: 'AI-powered fraud detection for safe scaling' },
                                    { cat: 'Scalability', method: 'GET', path: '/server-status', purpose: 'Monitor infrastructure health & uptime' },
                                    { cat: 'Custom Workflows', method: 'POST', path: '/webhooks', purpose: 'Automate workflows with real-time webhooks' },
                                ].map((row, i) => (
                                    <div
                                        key={i}
                                        onMouseEnter={() => setActiveApiRow(i)}
                                        onMouseLeave={() => setActiveApiRow(null)}
                                        className={`grid grid-cols-12 gap-2 sm:gap-4 px-3 sm:px-4 py-3 sm:py-3.5 items-center border-b border-gray-50 transition-colors duration-200 cursor-pointer ${activeApiRow === i ? 'bg-[#111111]' : 'bg-transparent'} hover:bg-[#111111]`}
                                    >
                                        <div className={`col-span-3 text-[9px] sm:text-[10px] font-bold ${activeApiRow === i ? 'text-white' : 'text-gray-900'}`}>{row.cat}</div>
                                        <div className="col-span-4 flex items-center">
                                            <span className={`inline-flex items-center gap-1 sm:gap-1.5 px-1.5 sm:px-2 py-1 rounded-[4px] text-[8px] sm:text-[9px] font-bold tracking-wide ${activeApiRow === i ? 'bg-[#222222]' : 'bg-gray-100'}`}>
                                                <span className={row.method === 'POST' ? 'text-orange-500' : 'text-green-500'}>{row.method}</span>
                                                <span className={`${activeApiRow === i ? 'text-gray-300' : 'text-gray-500'} truncate`}>{row.path}</span>
                                            </span>
                                        </div>
                                        <div className={`col-span-5 text-[9px] sm:text-[10px] font-medium leading-snug ${activeApiRow === i ? 'text-gray-300' : 'text-gray-600'}`}>{row.purpose}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* 4. Compliance & Security Card */}
                    <div className="bg-white rounded-[24px] border border-gray-100 p-5 sm:p-6 lg:p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] relative overflow-hidden flex flex-col animate-on-scroll stagger-4">
                        {/* Dotted background pattern */}
                        <div className="absolute inset-0 z-0 opacity-40" style={{ backgroundImage: 'radial-gradient(#d1d5db 2px, transparent 2px)', backgroundSize: '32px 32px' }} />

                        <div className="relative z-10 mb-6 mt-2">
                            <div className="flex items-center gap-3 mb-2">
                                <Lock className="h-5 w-5 sm:h-6 sm:w-6 text-gray-900" strokeWidth={2.5} />
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Compliance & Security</h3>
                            </div>
                            <p className="text-gray-500 text-[13px] leading-relaxed font-medium pr-4">
                                Built-in KYC, AML, and fraud prevention measures to keep every transaction safe and compliant.
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="relative z-10 w-full mt-auto bg-white rounded-[20px] p-4 border border-gray-100 shadow-sm flex items-center justify-center">
                            <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full">
                                {[
                                    { name: 'Tokenization', icon: Lock },
                                    { name: 'MFA', icon: Asterisk },
                                    { name: 'Fraud Detection', icon: Siren },
                                    { name: 'PCI DSS Compliance', icon: ShieldCheck },
                                    { name: 'Dispute Protection', icon: Scale },
                                    { name: 'Monitoring', icon: LineChart },
                                ].map((feat, i) => (
                                    <div
                                        key={i}
                                        onMouseEnter={() => setActiveSecurityCard(i)}
                                        onMouseLeave={() => setActiveSecurityCard(null)}
                                        className={`flex flex-col items-center justify-center gap-3 p-5 sm:p-6 rounded-[16px] border ${activeSecurityCard === i ? 'bg-[#111111] border-[#111111] text-white shadow-xl' : 'bg-white border-gray-100 text-gray-900 shadow-sm'} transition-transform hover:scale-[1.02] cursor-pointer`}
                                    >
                                        <div className={`p-2 rounded-lg ${activeSecurityCard === i ? 'bg-white/10' : 'bg-gray-50'}`}>
                                            <feat.icon className={`h-6 w-6 ${activeSecurityCard === i ? 'text-white' : 'text-gray-900'}`} strokeWidth={2} />
                                        </div>
                                        <span className={`text-[11px] font-bold text-center ${activeSecurityCard === i ? 'text-white' : 'text-gray-900'}`}>{feat.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
