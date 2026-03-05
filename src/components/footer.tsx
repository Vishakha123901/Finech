"use client";

export function Footer() {
    return (
        <footer className="relative w-full bg-white border-t border-gray-200 overflow-hidden">
            {/* Dot pattern background - SUBTLE */}
            <div
                className="absolute inset-0 z-0 opacity-30 pointer-events-none"
                style={{ 
                    backgroundImage: 'radial-gradient(#9ca3af 1px, transparent 1px)', 
                    backgroundSize: '36px 36px' 
                }}
            />
            
            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 mb-12">
                    {/* Logo & Email Column */}
                    <div className="col-span-2 sm:col-span-3 lg:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                                    <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
                                </svg>
                            </div>
                            <span className="text-xl font-bold text-gray-900">finech</span>
                        </div>
                        <p className="text-sm text-gray-500">support@finech.com</p>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-4">Company</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors group flex items-center gap-1">
                                About Us
                                <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a></li>
                            <li><a href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors group flex items-center gap-1">
                                Careers
                                <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a></li>
                            <li><a href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors group flex items-center gap-1">
                                Press
                                <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a></li>
                            <li><a href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors group flex items-center gap-1">
                                Blog
                                <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a></li>
                        </ul>
                    </div>

                    {/* Products Column */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-4">Products</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors group flex items-center gap-1">
                                Payments
                                <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a></li>
                            <li><a href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors group flex items-center gap-1">
                                API & Developer Docs
                                <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a></li>
                            <li><a href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors group flex items-center gap-1">
                                Pricing
                                <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a></li>
                            <li><a href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors group flex items-center gap-1">
                                Security
                                <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a></li>
                        </ul>
                    </div>

                    {/* Resources Column */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-4">Resources</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors group flex items-center gap-1">
                                Help Center
                                <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a></li>
                            <li><a href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors group flex items-center gap-1">
                                FAQs
                                <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a></li>
                            <li><a href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors group flex items-center gap-1">
                                Case Studies
                                <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a></li>
                            <li><a href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors group flex items-center gap-1">
                                Webinars
                                <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a></li>
                        </ul>
                    </div>

                    {/* Legal Column */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-4">Legal</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors group flex items-center gap-1">
                                Privacy Policy
                                <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a></li>
                            <li><a href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors group flex items-center gap-1">
                                Terms of Service
                                <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a></li>
                            <li><a href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors group flex items-center gap-1">
                                Compliance
                                <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a></li>
                            <li><a href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors group flex items-center gap-1">
                                Security & Trust
                                <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-4">Contact</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors group flex items-center gap-1">
                                Support
                                <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a></li>
                            <li><a href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors group flex items-center gap-1">
                                Partnerships
                                <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-gray-200">
                    <p className="text-sm text-gray-500 mb-4 sm:mb-0">
                        © 2025 Finech. All Rights Reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-sm text-gray-900 hover:text-blue-600 transition-colors font-medium group flex items-center gap-1">
                            Login
                            <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                        <a href="#" className="text-sm text-gray-900 hover:text-blue-600 transition-colors font-medium group flex items-center gap-1">
                            Sign Up
                            <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
