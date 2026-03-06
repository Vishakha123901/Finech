"use client";

import { ShoppingCart, Share2, Landmark, Building, Code, Box, Server } from "lucide-react";
import { ArrowRight } from "lucide-react";

export function IndustrySolutions() {
    return (
        <section id="solutions" className="relative w-full bg-[#0a0f1c] pt-20 pb-32 sm:pt-32 sm:pb-40 overflow-hidden">
            {/* Dark background with dots */}
            <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            {/* Stronger White Gradient Fade at the Bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-white/60 via-white/10 to-transparent pointer-events-none z-10" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-64 bg-white/20 blur-[120px] pointer-events-none z-0" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-[12px] font-bold tracking-[0.15em] text-[#0066FF] uppercase mb-4">
                        WHO IS IT FOR?
                    </h2>
                    <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight text-white mb-4">
                        Financial Solutions for Every Industry
                    </h3>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Our platform empowers you to handle transactions, streamline operations, and integrate financial services seamlessly.
                    </p>
                </div>

                {/* Industry Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
                    {[
                        { title: 'For Marketplaces', desc: 'Seamless money movement between buyers and sellers', icon: ShoppingCart },
                        { title: 'For SaaS Platforms', desc: 'Embed financial services into your software with minimal effort', icon: Share2 },
                        { title: 'For Fintech Startups', desc: 'Build your own banking solutions with ease', icon: Landmark },
                        { title: 'For Enterprises', desc: 'Custom financial solutions to optimize operations at scale', icon: Building },
                    ].map((item, i) => (
                        <div key={i} className={`bg-[#1a202c] rounded-2xl p-6 flex flex-col items-center sm:items-start text-center sm:text-left border border-white/5 hover:border-white/10 transition-colors animate-on-scroll stagger-${i + 1}`}>
                            <div className="h-48 w-full bg-[#353f50] rounded-xl mb-6 flex items-center justify-center">
                                <item.icon className="h-12 w-12 text-white/90" strokeWidth={1.5} />
                            </div>
                            <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                            <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* API & Developer Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    {/* Left Content */}
                    <div>
                        <h2 className="text-[12px] font-bold tracking-[0.15em] text-[#0066FF] uppercase mb-4">
                            API & DEVELOPER
                        </h2>
                        <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight text-white mb-6 leading-tight">
                            Seamless Integration with<br />Powerful Developer Tools
                        </h3>
                        <p className="text-gray-400 text-base mb-8 max-w-lg">
                            Integrate Finech effortlessly with our developer-friendly APIs, designed for speed, security, and scalability.
                        </p>

                        <button className="bg-[#0066FF] text-white px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:bg-white hover:text-[#0066FF] hover:scale-105 flex items-center gap-2 mb-12 w-fit">
                            Explore API Docs
                            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                        </button>

                        <div className="flex flex-col gap-5">
                            <div className="flex items-center gap-3 text-gray-300">
                                <div className="w-5 flex justify-center"><Code className="w-5 h-5 text-gray-400" /></div>
                                <span className="text-sm">RESTful APIs & Webhooks</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <div className="w-5 flex justify-center"><Box className="w-5 h-5 text-gray-400" /></div>
                                <span className="text-sm">SDKs for Multiple Languages</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <div className="w-5 flex justify-center"><Server className="w-5 h-5 text-gray-400" /></div>
                                <span className="text-sm">Sandbox for Testing</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Code Editor */}
                    <div className="relative w-full max-w-2xl mx-auto lg:ml-auto">
                        <div className="relative bg-white rounded-[16px] overflow-hidden shadow-2xl border-4 border-[#353f50]">
                            {/* Editor Header */}
                            <div className="bg-[#1a202c] px-4 py-3 flex items-center gap-2 border-b border-white/10">
                                <div className="w-3 h-3 rounded-full bg-white"></div>
                                <div className="w-3 h-3 rounded-full bg-white"></div>
                                <div className="w-3 h-3 rounded-full bg-white"></div>
                            </div>
                            {/* Editor Body */}
                            <div className="p-6 overflow-x-auto text-[13px] font-mono leading-[1.6]">
                                <div className="flex mb-1">
                                    <span className="text-green-600 font-bold mr-2">GET</span>
                                    <span className="text-gray-800">/transactions</span><span className="text-cyan-500">/txn_67890</span>
                                </div>
                                <div><span className="text-gray-900 font-semibold">Host:</span> <span className="text-green-600">api.finech.com</span></div>
                                <div><span className="text-gray-900 font-semibold">Authorization:</span> <span className="text-gray-900">Bearer</span> <span className="text-orange-500">YOUR_API_KEY</span></div>
                                <div><span className="text-gray-900 font-semibold">Content-Type:</span> <span className="text-gray-900">application/</span><span className="text-blue-500">json</span></div>
                                <div><span className="text-gray-900 font-semibold">Accept:</span> <span className="text-gray-900">application/</span><span className="text-blue-500">json</span></div>
                                <div><span className="text-gray-900 font-semibold">User-Agent:</span> <span className="text-gray-900">PaymentClient/</span><span className="text-blue-500">1.0</span></div>
                                <div><span className="text-gray-900 font-semibold">Connection:</span> <span className="text-green-600">keep-alive</span></div>
                                <div><span className="text-gray-900 font-semibold">X-Request-ID:</span> <span className="text-cyan-500">req_123456789</span></div>
                                <div><span className="text-gray-900 font-semibold">X-Client-Version:</span> <span className="text-gray-900">1.2.3</span></div>
                                <div><span className="text-gray-900 font-semibold">Referer:</span> <span className="text-green-600">https://dashboard.paymentprovider.com</span></div>
                                <div><span className="text-gray-900 font-semibold">Cache-Control:</span> <span className="text-green-600">no-cache</span></div>
                                <div><span className="text-gray-900 font-semibold">Accept-Encoding:</span> <span className="text-orange-500">gzip</span><span className="text-gray-900">, </span><span className="text-orange-500">deflate</span><span className="text-gray-900">, </span><span className="text-orange-500">br</span></div>
                                <div><span className="text-gray-900 font-semibold">Accept-Language:</span> <span className="text-orange-500">en-US</span><span className="text-gray-900">,</span><span className="text-orange-500">en</span><span className="text-gray-900">;q=</span><span className="text-blue-500">0.9</span></div>
                                <div><span className="text-gray-900 font-semibold">X-Forwarded-For:</span> <span className="text-green-600">192.168.1.100</span></div>
                                <div><span className="text-gray-900 font-semibold">X-Api-Signature:</span> <span className="text-orange-500">sha256</span><span className="text-gray-900">=</span><span className="text-cyan-500">abcdef1234567890</span></div>
                                <div><span className="text-gray-900 font-semibold">DNT:</span> <span className="text-gray-900">1</span></div>
                                <div><span className="text-gray-900 font-semibold">Pragma:</span> <span className="text-gray-900">no-cache</span></div>
                                <div><span className="text-gray-900 font-semibold">X-Device-ID:</span> <span className="text-cyan-500">device_987654321</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
