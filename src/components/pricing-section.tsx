"use client";

import { Check } from "lucide-react";

export function PricingSection() {
    const plans = [
        {
            name: "Starter Plan",
            price: "$0",
            period: "/ month",
            subtext: "$19 for next month",
            description: "Perfect for freelancers, small businesses, and early-stage startups who need a simple way to accept payments.",
            features: [
                "Process up to $10,000/month in transactions",
                "Accept Credit/Debit Cards & Bank Transfers",
                "Basic fraud protection for secure payments",
                "Standard API access for simple integrations",
            ],
            cta: "Start Now",
            dark: false,
            popular: false,
        },
        {
            name: "Growth Plan",
            price: "$99",
            period: "/ month",
            subtext: "Discount 30% off",
            description: "Best for growing businesses, SaaS platforms, and e-commerce stores looking for seamless transactions and fraud prevention.",
            features: [
                "Process up to $250,000/month in transactions",
                "Accept payments via Cards, Bank & Digital Wallets",
                "Advanced fraud protection & chargeback",
                "Full API access + Webhooks for integrations",
                "24/7 chat & email support for faster issue resolution",
                "Faster settlement speed (T+1) for better cash flow",
            ],
            cta: "Choose Plan",
            dark: true,
            popular: true,
        },
        {
            name: "Scale Plan",
            price: "Custom",
            period: "Pricing",
            subtext: "Contact Us Now",
            description: "Ideal for enterprises, marketplaces, and businesses processing high transaction volumes that need instant settlements and premium support.",
            features: [
                "Process up to $1,000,000/month in transactions",
                "Accept payments via all methods and local",
                "AI-powered fraud detection & real-time monitoring",
                "Dedicated API support with enterprise-grade",
                "Priority customer support via phone, chat & email",
                "Instant settlements for seamless cash flow",
                "Multi-currency support to expand globally",
            ],
            cta: "Discuss Now",
            dark: false,
            popular: false,
        },
    ];

    return (
        <section className="relative w-full bg-white py-20 sm:py-28 overflow-hidden border-t border-gray-100">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <h2 className="text-[12px] font-bold tracking-[0.15em] text-[#0066FF] uppercase mb-4">
                        PRICING PLAN
                    </h2>
                    <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight text-gray-900 mb-5">
                        Find the Right Plan for Your Business
                    </h3>
                    <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Transparent pricing with powerful features. Whether you&apos;re just starting out or processing high-volume transactions, we have a plan for you.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                    {plans.map((plan, i) => (
                        <div
                            key={i}
                            className={`relative rounded-3xl border flex flex-col p-8 sm:p-10 ${plan.dark ? 'bg-[#111111] border-[#111111] text-white' : 'bg-white border-gray-200 text-gray-900'}`}
                        >
                            {/* Most Popular Badge */}
                            {plan.popular && (
                                <span className="absolute top-6 right-8 text-[10px] font-bold tracking-widest uppercase text-[#0066FF]">
                                    MOST POPULAR
                                </span>
                            )}

                            {/* Plan Name */}
                            <h4 className={`text-2xl font-bold mb-4 ${plan.dark ? 'text-white' : 'text-gray-900'}`}>
                                {plan.name}
                            </h4>

                            {/* Price */}
                            <div className="flex items-baseline gap-1 mb-1">
                                <span className={`font-semibold tracking-tight text-3xl sm:text-4xl ${plan.dark ? 'text-white' : 'text-gray-900'}`}>
                                    {plan.price}
                                </span>
                                <span className={`text-sm font-medium ${plan.dark ? 'text-gray-400' : 'text-gray-500'}`}>
                                    {plan.period}
                                </span>
                            </div>
                            <p className={`text-sm font-semibold mb-6 ${plan.dark ? 'text-gray-400' : 'text-gray-500'}`}>
                                {plan.subtext}
                            </p>

                            {/* Description */}
                            <p className={`text-sm leading-relaxed mb-8 ${plan.dark ? 'text-gray-400' : 'text-gray-500'}`}>
                                {plan.description}
                            </p>

                            {/* Divider */}
                            <div className={`border-t mb-8 ${plan.dark ? 'border-white/10' : 'border-gray-100'}`} />

                            {/* Features Label */}
                            <p className={`text-[10px] font-black uppercase tracking-widest mb-5 ${plan.dark ? 'text-gray-400' : 'text-gray-400'}`}>
                                FEATURES
                            </p>

                            {/* Features */}
                            <ul className="flex flex-col gap-3.5 mb-10 flex-1">
                                {plan.features.map((feature, j) => (
                                    <li key={j} className={`flex items-start gap-3 text-sm font-medium leading-snug ${plan.dark ? 'text-gray-300' : 'text-gray-700'}`}>
                                        <Check className={`h-4 w-4 flex-shrink-0 mt-0.5 ${plan.dark ? 'text-[#0066FF]' : 'text-[#0066FF]'}`} strokeWidth={2.5} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <button
                                className={`w-full py-4 rounded-xl font-bold text-sm transition-all duration-200 ${plan.dark
                                        ? 'bg-[#0066FF] hover:bg-white hover:text-[#0066FF] text-white'
                                        : 'bg-white hover:bg-[#0066FF] hover:text-white text-[#0066FF] border-2 border-[#0066FF]'
                                    }`}
                            >
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
