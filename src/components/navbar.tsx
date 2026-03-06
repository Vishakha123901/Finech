"use client";

import { useState } from "react";
import Link from "next/link";
import { MoveUpRight, Menu, X } from "lucide-react";

const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Features", href: "#features" },
    { name: "Solutions", href: "#solutions" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#000103]/80 backdrop-blur-md">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded bg-blue-600">
                        <svg
                            className="h-5 w-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M5 10l7-7m0 0l7 7m-7-7v18"
                            />
                        </svg>
                    </div>
                    <span className="text-2xl font-bold tracking-tight text-white">finech</span>
                </div>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex md:items-center md:gap-x-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Desktop Auth Buttons */}
                <div className="hidden md:flex items-center gap-6">
                    <Link
                        href="#"
                        className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
                    >
                        Login
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-1 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-blue-600 hover:scale-105 hover:shadow-lg"
                    >
                        Get Started
                        <MoveUpRight className="h-4 w-4" />
                    </Link>
                </div>

                {/* Mobile Hamburger Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-white/5 bg-[#000103]/95 backdrop-blur-md">
                    <div className="px-6 py-6 space-y-4">
                        {/* Mobile Navigation Links */}
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block text-base font-medium text-gray-300 hover:text-white transition-colors py-2"
                            >
                                {link.name}
                            </Link>
                        ))}
                        
                        {/* Mobile Auth Buttons */}
                        <div className="pt-4 border-t border-white/5 space-y-3">
                            <Link
                                href="#"
                                onClick={() => setMobileMenuOpen(false)}
                                className="block text-center text-base font-medium text-gray-300 hover:text-white transition-colors py-2"
                            >
                                Login
                            </Link>
                            <Link
                                href="#"
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-white hover:text-blue-600 hover:scale-105"
                            >
                                Get Started
                                <MoveUpRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
