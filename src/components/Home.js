import KarvaanLogo from './KarvaanLogo';
import EmblemIcon from './EmblemIcon';
import ScrollToTop from './ScrollToTop';

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            {/* Classy Mobile Navigation */}
            <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-xl z-50">
                <div className="px-4 sm:px-6 lg:px-8">
                    {/* Main Navigation Bar */}
                    <div className="flex justify-between items-center h-16 sm:h-18 border-b border-gray-100/50">
                        {/* Logo */}
                        <div className="flex items-center">
                            <KarvaanLogo className="h-8 sm:h-10 w-auto" />
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-8">
                            <a href="#features" className="text-gray-700 hover:text-primary-600 transition-all duration-200 font-medium relative group">
                                Features
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
                            </a>
                            <a href="#how-it-works" className="text-gray-700 hover:text-primary-600 transition-all duration-200 font-medium relative group">
                                How It Works
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
                            </a>
                            <a href="#benefits" className="text-gray-700 hover:text-primary-600 transition-all duration-200 font-medium relative group">
                                Benefits
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
                            </a>
                        </div>

                        {/* CTA Button */}
                        <div className="flex items-center">
                            <a
                                href="https://wa.me/923335215568?text=Hi, I want to request a demo of Karvaan platform"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r from-primary-600 to-accent-600 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl font-semibold text-sm sm:text-base hover:from-primary-700 hover:to-accent-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                            >
                                <span className="hidden sm:inline">Request Demo</span>
                                <span className="sm:hidden">Demo</span>
                            </a>
                        </div>
                    </div>

                    {/* Mobile Navigation Pills - Elegant horizontal scroll */}
                    <div className="lg:hidden py-3 overflow-x-auto scrollbar-hide">
                        <div className="flex space-x-3 min-w-max px-1">
                            <a href="#features" className="flex items-center space-x-2 bg-gray-50 hover:bg-primary-50 text-gray-700 hover:text-primary-600 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap">
                                <span className="text-xs">⚡</span>
                                <span>Features</span>
                            </a>
                            <a href="#how-it-works" className="flex items-center space-x-2 bg-gray-50 hover:bg-primary-50 text-gray-700 hover:text-primary-600 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap">
                                <span className="text-xs">🎯</span>
                                <span>How It Works</span>
                            </a>
                            <a href="#benefits" className="flex items-center space-x-2 bg-gray-50 hover:bg-primary-50 text-gray-700 hover:text-primary-600 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap">
                                <span className="text-xs">✨</span>
                                <span>Benefits</span>
                            </a>
                            <a href="https://wa.me/923335215568?text=Hi, I'd like to know more about Karvaan features" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-green-50 hover:bg-green-100 text-green-700 hover:text-green-800 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap">
                                <span className="text-xs">💬</span>
                                <span>Get Started</span>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 bg-gradient-to-br from-gray-50 via-white to-primary-50">
                <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
                    <div className="text-center">
                        <div className="mb-6 sm:mb-8">
                            <KarvaanLogo className="h-12 sm:h-16 w-auto mx-auto text-gray-900 mb-4 sm:mb-6" />
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-gray-900 mb-6 sm:mb-8 leading-tight px-4 sm:px-2">
                                <span className="block mb-2">Complete Travel Platform</span>
                                <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                                    Booking & Management Software
                                </span>
                            </h1>
                            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed px-6 sm:px-4 font-medium">
                                Comprehensive solution for Umrah, Group Tours, International & Domestic travel. Complete CRM, B2B marketplace, and management tools.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 px-6 sm:px-4">
                            <a href="https://wa.me/923335215568?text=Hi, I'm interested in Karvaan travel platform" className="bg-gradient-to-r from-primary-600 to-accent-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-lg sm:text-xl font-bold hover:from-primary-700 hover:to-accent-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl text-center">
                                Request a Demo
                            </a>
                            <a href="https://wa.me/923335215568?text=Hi, I'd like to know more about Karvaan features" className="border-2 border-gray-200 bg-white text-gray-700 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-lg sm:text-xl font-bold hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center">
                                Get Started
                            </a>
                        </div>
                        {/* Floating Elements */}
                        <div className="relative">
                            <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-r from-primary-200 to-accent-200 rounded-full opacity-20 animate-float hidden sm:block"></div>
                            <div className="absolute -top-10 -right-32 opacity-30 animate-float-delayed hidden lg:block">
                                <EmblemIcon className="w-24 h-24 text-primary-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem Section */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 sm:mb-20">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-gray-900 mb-6 sm:mb-8 px-4">
                            Travel Industry Challenges
                        </h2>
                        <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto px-6 leading-relaxed">
                            Managing multiple tour types and bookings shouldn't be complicated
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                        <div className="bg-red-50 p-6 sm:p-8 rounded-2xl border border-red-100">
                            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Multiple Systems</h3>
                            <p className="text-gray-600 text-sm sm:text-base">Separate tools for Umrah, group tours, and international bookings</p>
                        </div>
                        <div className="bg-orange-50 p-6 sm:p-8 rounded-2xl border border-orange-100">
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Complex B2B Management</h3>
                            <p className="text-gray-600 text-sm sm:text-base">Difficult reseller management and marketplace coordination</p>
                        </div>
                        <div className="bg-yellow-50 p-6 sm:p-8 rounded-2xl border border-yellow-100 sm:col-span-2 lg:col-span-1">
                            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Limited CRM Integration</h3>
                            <p className="text-gray-600 text-sm sm:text-base">No unified customer relationship management across tour types</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 sm:py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-poppins text-gray-900 mb-4 sm:mb-6 px-2">
                            The Cost of Staying Manual
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                            Every manual process costs you time, money, and growth opportunities
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                        {[
                            { emoji: "💸", text: "Delayed payments = cashflow problems", color: "red" },
                            { emoji: "😞", text: "Missed HCN on time = lost client experience", color: "orange" },
                            { emoji: "📊", text: "No clear visibility into performance or profits", color: "yellow" },
                            { emoji: "❌", text: "Manual tracking → human errors & double work", color: "red" },
                            { emoji: "😰", text: "Disorganized data → wasted hours & stress", color: "orange" },
                            { emoji: "🚫", text: "No visibility → no strategic growth", color: "yellow" }
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100">
                                <div className="flex items-start space-x-3 sm:space-x-4">
                                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-red-600 font-bold text-sm">{item.emoji}</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{item.text}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solution Section */}
            <section id="features" className="py-12 sm:py-16 bg-gradient-to-br from-primary-600 to-accent-600 text-white">
                <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-poppins mb-4 sm:mb-6 px-2">
                            Complete Travel Platform Solutions
                        </h2>
                        <p className="text-lg sm:text-xl text-primary-100 max-w-3xl mx-auto px-4">
                            Unified platform for all tour types with integrated CRM and B2B marketplace
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        {[
                            {
                                icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
                                title: "Umrah Management",
                                desc: "Complete Umrah booking and pilgrimage management"
                            },
                            {
                                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                                title: "Group Tours",
                                desc: "Organize and manage group travel packages"
                            },
                            {
                                icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                                title: "International Tours",
                                desc: "Global travel packages and international bookings"
                            },
                            {
                                icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
                                title: "B2B Marketplace",
                                desc: "Reseller network and B2B booking platform"
                            }
                        ].map((feature, index) => (
                            <div key={index} className="text-center">
                                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                    <svg className="w-6 sm:w-8 h-6 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                                    </svg>
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{feature.title}</h3>
                                <p className="text-primary-100 text-sm sm:text-base">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section id="how-it-works" className="py-12 sm:py-16 bg-white">
                <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-poppins text-gray-900 mb-4 sm:mb-6 px-2">
                            How Our Platform Works
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                            Streamlined workflow for all your travel business needs
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {[
                            {
                                step: "1",
                                title: "Choose Your Tour Type",
                                desc: "Select from Umrah, Group Tours, International or Domestic packages"
                            },
                            {
                                step: "2",
                                title: "Manage Bookings & CRM",
                                desc: "Complete customer management with integrated booking system"
                            },
                            {
                                step: "3",
                                title: "B2B & Reseller Network",
                                desc: "Access marketplace features and manage your reseller partnerships"
                            }
                        ].map((step, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                    <span className="text-xl sm:text-2xl font-bold text-white">{step.step}</span>
                                </div>
                                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{step.title}</h3>
                                <p className="text-gray-600 text-base sm:text-lg">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="py-12 sm:py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-poppins text-gray-900 mb-4 sm:mb-6 px-2">
                            Key Features
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                            Everything you need to run your travel business efficiently
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                        {[
                            {
                                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                                title: "Vendor Payment Tracking",
                                desc: "Smart alerts and automated reminders for all vendor payments and deadlines",
                                color: "blue"
                            },
                            {
                                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                                title: "Client Management & Invoicing",
                                desc: "Complete client database with automated invoicing and payment tracking",
                                color: "purple"
                            },
                            {
                                icon: "M15 17h5l-5 5v-5zM4.343 15.657l2.828 2.829a2 2 0 002.828 0l5.657-5.657a2 2 0 000-2.828L12.828 7.172a2 2 0 00-2.828 0L4.343 12.83a2 2 0 000 2.828z",
                                title: "Automated Reminders",
                                desc: "Never miss HCN deadlines or important client communications again",
                                color: "green"
                            },
                            {
                                icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                                title: "Performance Dashboards",
                                desc: "Real-time insights into your business performance and profitability",
                                color: "blue"
                            },
                            {
                                icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                                title: "Access Control",
                                desc: "Secure role-based access for your team members and data protection",
                                color: "purple"
                            },
                            {
                                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                                title: "Data Security",
                                desc: "Enterprise-grade security to protect your sensitive business data",
                                color: "orange"
                            }
                        ].map((feature, index) => (
                            <div key={index} className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                                <div className={`w-12 h-12 bg-${feature.color}-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6`}>
                                    <svg className={`w-6 h-6 text-${feature.color}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                                    </svg>
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">{feature.title}</h3>
                                <p className="text-gray-600 text-sm sm:text-base">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section id="benefits" className="py-16 sm:py-20 bg-white">
                <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-8">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-gray-900 mb-4 sm:mb-6 px-2">
                            Transform Your <span className="text-green-600">Travel Business</span>
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                            Join travel agencies already using our comprehensive platform
                        </p>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-primary-50 p-6 sm:p-8 lg:p-12 rounded-3xl shadow-2xl">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-center">
                            <div>
                                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">⏰</div>
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Save Time</h3>
                                <p className="text-gray-600 text-sm sm:text-base">Streamlined booking process across all tour types</p>
                            </div>
                            <div>
                                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">💰</div>
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Increase Revenue</h3>
                                <p className="text-gray-600 text-sm sm:text-base">Better customer management and B2B opportunities</p>
                            </div>
                            <div className="sm:col-span-2 lg:col-span-1">
                                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">😌</div>
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Reduce Complexity</h3>
                                <p className="text-gray-600 text-sm sm:text-base">Unified platform for all your travel business needs</p>
                            </div>
                        </div>
                        <div className="mt-8 sm:mt-12 text-center">
                            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-green-100 text-green-800 rounded-full text-base sm:text-lg font-semibold mb-4 sm:mb-6">
                                ✅ Guaranteed results or money back
                            </div>
                            <div className="text-gray-600 text-sm sm:text-base px-4">
                                <strong>Trusted by travel agencies:</strong> "Karvaan unified our Umrah and tour operations seamlessly" - Travel Partner, Karachi
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Early Access CTA */}
            <section id="early-access" className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 via-primary-900 to-accent-900 text-white relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-8 text-center">
                    <div className="mb-8 sm:mb-12">
                        <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-yellow-500 text-yellow-900 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6">
                            🚀 READY TO LAUNCH: Complete Travel Platform
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins mb-4 sm:mb-6 px-2">
                            Start Your <span className="text-yellow-400">Travel Platform</span> Today
                        </h2>
                        <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 px-4">
                            Complete solution for Umrah, Tours, and B2B marketplace
                        </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 lg:p-10 rounded-3xl border border-white/20 mb-8 sm:mb-12">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Complete Platform Features:</h3>
                        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 text-left">
                            {[
                                {
                                    title: "Umrah Management System",
                                    desc: "Complete pilgrimage booking and management"
                                },
                                {
                                    title: "Group & International Tours",
                                    desc: "Comprehensive tour package management"
                                },
                                {
                                    title: "B2B Marketplace",
                                    desc: "Reseller network and partnership tools"
                                },
                                {
                                    title: "Integrated CRM",
                                    desc: "Complete customer relationship management"
                                }
                            ].map((benefit, index) => (
                                <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                                    <div className="w-6 sm:w-8 h-6 sm:h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-white text-xs sm:text-sm font-bold">✓</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-base sm:text-lg mb-1">{benefit.title}</h4>
                                        <p className="text-gray-300 text-sm sm:text-base">{benefit.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mb-6 sm:mb-8">
                        <div className="text-yellow-400 text-base sm:text-lg font-semibold mb-2">🚀 Ready to Launch</div>
                        <div className="text-gray-300 text-sm sm:text-base">Join travel agencies from Karachi, Lahore, Islamabad already using Karvaan</div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
                        <a href="https://wa.me/923335215568?text=Hi, I want to start using Karvaan travel platform" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 px-8 sm:px-12 py-4 sm:py-5 rounded-xl text-lg sm:text-xl font-bold hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-2xl text-center">
                            Get Started Now
                        </a>
                        <a href="https://wa.me/923335215568?text=Hi, I'd like to see a demo of Karvaan platform" target="_blank" rel="noopener noreferrer" className="border-2 border-white/30 text-white px-6 sm:px-8 py-4 sm:py-5 rounded-xl text-base sm:text-lg font-semibold hover:bg-white/10 transition-all duration-300 text-center">
                            Request Demo
                        </a>
                    </div>
                    <div className="mt-6 sm:mt-8 text-xs sm:text-sm text-gray-400">
                        Contact us on WhatsApp • Quick setup • Full support included
                    </div>
                </div>
                {/* Background decoration */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute top-20 left-20 animate-pulse hidden sm:block">
                        <EmblemIcon className="w-32 h-32 text-yellow-400" />
                    </div>
                    <div className="absolute bottom-20 right-20 animate-pulse hidden sm:block">
                        <EmblemIcon className="w-40 h-40 text-orange-400" />
                    </div>
                </div>
            </section>

            {/* Footer */}
            {/* <footer className="bg-gray-900 text-white py-12 sm:py-16">
                <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-8 text-center">
                    <KarvaanLogo className="h-10 sm:h-12 w-auto mx-auto text-white mb-4 sm:mb-6" />
                    <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                        Complete travel platform for Umrah, Tours, CRM, and B2B marketplace solutions.
                    </p>
                    <div className="flex justify-center space-x-4 sm:space-x-6 mb-6 sm:mb-8">
                        {[
                            "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z",
                            "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                            "M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.083.402-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"
                        ].map((path, index) => (
                            <a key={index} href="#" className="text-gray-400 hover:text-white transition-colors">
                                <svg className="w-6 sm:w-8 h-6 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                                    <path d={path} />
                                </svg>
                            </a>
                        ))}
                    </div>
                    <div className="border-t border-gray-800 pt-6 sm:pt-8">
                        <p className="text-gray-400 text-sm sm:text-base px-4">
                            &copy; 2024 Karvaan. Made with ❤️ for travel agencies who refuse to settle for manual chaos.
                        </p>
                    </div>
                </div>
            </footer> */}

            <ScrollToTop />
        </div>
    );
}