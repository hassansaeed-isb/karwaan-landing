import KarvaanLogo from './components/KarvaanLogo';
import ScrollToTop from './components/ScrollToTop';
import MobileMenu from './components/MobileMenu';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <KarvaanLogo className="h-8 w-auto text-gray-900" />
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">How It Works</a>
              <a href="#benefits" className="text-gray-600 hover:text-gray-900 transition-colors">Benefits</a>
            </div>
            <div className="flex items-center space-x-4">
              <button className="hidden md:block bg-gradient-to-r from-primary-600 to-accent-600 text-white px-6 py-2 rounded-lg hover:from-primary-700 hover:to-accent-700 transition-all duration-300 transform hover:scale-105">
                Get Early Access
              </button>
              <MobileMenu />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 via-white to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <KarvaanLogo className="h-16 w-auto mx-auto text-gray-900 mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold font-poppins text-gray-900 mb-6 leading-tight">
                Run your travel business,<br />
                <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                  not your Excel sheets
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Save time, get clarity, and grow your agency with automated operations. 
                Manage clients, vendors, payments, and get instant insights.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-gradient-to-r from-primary-600 to-accent-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-primary-700 hover:to-accent-700 transition-all duration-300 transform hover:scale-105 animate-glow">
                Get Early Access
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-primary-500 hover:text-primary-600 transition-all duration-300">
                Watch Demo
              </button>
            </div>

            {/* Floating Elements */}
            <div className="relative">
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-r from-primary-200 to-accent-200 rounded-full opacity-20 animate-float"></div>
              <div className="absolute -top-10 -right-32 w-32 h-32 bg-gradient-to-r from-accent-200 to-primary-200 rounded-full opacity-20 animate-float-delayed"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-poppins text-gray-900 mb-6">The Travel Agency Struggle</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Manual processes are holding your business back
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Manual Management</h3>
              <p className="text-gray-600">Manual management of clients, vendors & payments</p>
            </div>

            <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Disorganized Data</h3>
              <p className="text-gray-600">Disorganized data & documents (HCN, invoices, records)</p>
            </div>

            <div className="bg-yellow-50 p-8 rounded-2xl border border-yellow-100">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">No Visibility</h3>
              <p className="text-gray-600">No clear visibility into performance or profits</p>
            </div>
          </div>
        </div>
      </section>
      {/* Cost Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-poppins text-gray-900 mb-6">The Cost of Staying Manual</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every manual process costs you time, money, and growth opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 font-bold">💸</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Delayed payments = cashflow problems</h3>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-orange-600 font-bold">😞</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Missed HCN on time = lost client experience</h3>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-yellow-600 font-bold">📊</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">No clear visibility into performance or profits</h3>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 font-bold">❌</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Manual tracking → human errors & double work</h3>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-orange-600 font-bold">😰</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Disorganized data → wasted hours & stress</h3>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-yellow-600 font-bold">🚫</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">No visibility → no strategic growth</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="features" className="py-16 bg-gradient-to-br from-primary-600 to-accent-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-poppins mb-6">The Solution – Karvaan</h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Save time, get clarity, and grow your agency with automated operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Client Management</h3>
              <p className="text-primary-100">Organize all client data in one place</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Payment Tracking</h3>
              <p className="text-primary-100">Automated vendor payment alerts</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4 19h6v-7a1 1 0 011-1h4a1 1 0 011 1v7h6M4 19V9a2 2 0 012-2h12a2 2 0 012 2v10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Reminders</h3>
              <p className="text-primary-100">Never miss important deadlines</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Analytics</h3>
              <p className="text-primary-100">Instant insights and reports</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-poppins text-gray-900 mb-6">How Karvaan Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, powerful, and designed for travel agencies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Manage Clients & Vendors</h3>
              <p className="text-gray-600 text-lg">Centralize all your client and vendor information in one organized dashboard</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Track Payments & Deadlines</h3>
              <p className="text-gray-600 text-lg">Automated tracking with smart alerts to keep you on top of everything</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Get Reports & Insights</h3>
              <p className="text-gray-600 text-lg">Instant analytics and performance insights to grow your business strategically</p>
            </div>
          </div>
        </div>
      </section>   
   {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-poppins text-gray-900 mb-6">Key Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to run your travel business efficiently
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Vendor Payment Tracking</h3>
              <p className="text-gray-600">Smart alerts and automated reminders for all vendor payments and deadlines</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Client Management & Invoicing</h3>
              <p className="text-gray-600">Complete client database with automated invoicing and payment tracking</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4.343 15.657l2.828 2.829a2 2 0 002.828 0l5.657-5.657a2 2 0 000-2.828L12.828 7.172a2 2 0 00-2.828 0L4.343 12.83a2 2 0 000 2.828z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Automated Reminders</h3>
              <p className="text-gray-600">Never miss HCN deadlines or important client communications again</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Performance Dashboards</h3>
              <p className="text-gray-600">Real-time insights into your business performance and profitability</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Access Control</h3>
              <p className="text-gray-600">Secure role-based access for your team members and data protection</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Security</h3>
              <p className="text-gray-600">Enterprise-grade security to protect your sensitive business data</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold font-poppins text-gray-900 mb-6">
              Transform Your Business in <span className="text-green-600">30 Days</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join agencies already saving 20+ hours per week
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-primary-50 p-12 rounded-3xl shadow-2xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl mb-4">⏰</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Save 20+ Hours/Week</h3>
                <p className="text-gray-600">No more Excel sheets, WhatsApp chaos, or manual tracking</p>
              </div>
              
              <div>
                <div className="text-5xl mb-4">💰</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Increase Revenue 25%</h3>
                <p className="text-gray-600">Never miss payments, deadlines, or growth opportunities</p>
              </div>
              
              <div>
                <div className="text-5xl mb-4">😌</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Reduce Stress 90%</h3>
                <p className="text-gray-600">Automated alerts mean you sleep peacefully at night</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center px-6 py-3 bg-green-100 text-green-800 rounded-full text-lg font-semibold mb-6">
                ✅ Guaranteed results or money back
              </div>
              <div className="text-gray-600">
                <strong>Real results from real agencies:</strong> "Karvaan saved us ₹3 lakhs in the first month by catching missed payments" - Priya Travels, Mumbai
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Early Access CTA */}
      <section id="early-access" className="py-20 bg-gradient-to-br from-gray-900 via-primary-900 to-accent-900 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-yellow-500 text-yellow-900 rounded-full text-sm font-bold mb-6">
              🔥 LIMITED TIME: Only 50 Early Access Spots
            </div>
            <h2 className="text-5xl font-bold font-poppins mb-6">
              Get Karvaan <span className="text-yellow-400">FREE</span> for 6 Months
            </h2>
            <p className="text-2xl text-gray-300 mb-8">
              Join the first 50 travel agencies and transform your business
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-10 rounded-3xl border border-white/20 mb-12">
            <h3 className="text-3xl font-bold mb-8">What You Get as an Early Adopter:</h3>
            
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">6 Months Completely FREE</h4>
                  <p className="text-gray-300">Worth ₹30,000 - yours at zero cost</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Personal Onboarding Call</h4>
                  <p className="text-gray-300">1-on-1 setup with our founder</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">WhatsApp Direct Support</h4>
                  <p className="text-gray-300">Instant help whenever you need it</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Shape the Product</h4>
                  <p className="text-gray-300">Your feedback builds new features</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div className="text-yellow-400 text-lg font-semibold mb-2">⏰ Only 23 spots left!</div>
            <div className="text-gray-300">Join agencies from Mumbai, Delhi, Bangalore already using Karvaan</div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 px-12 py-5 rounded-xl text-xl font-bold hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-2xl">
              Claim Your FREE Spot Now
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-5 rounded-xl text-lg font-semibold hover:bg-white/10 transition-all duration-300">
              Watch 2-Min Demo
            </button>
          </div>

          <div className="mt-8 text-sm text-gray-400">
            No credit card required • Setup in 24 hours • Cancel anytime
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-20 w-40 h-40 bg-yellow-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-orange-400 rounded-full animate-pulse"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <KarvaanLogo className="h-12 w-auto mx-auto text-white mb-6" />
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the revolution. Stop managing spreadsheets, start growing your travel business.
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.083.402-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
              </svg>
            </a>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400">
              &copy; 2024 Karvaan. Made with ❤️ for travel agencies who refuse to settle for manual chaos.
            </p>
          </div>
        </div>
      </footer>
      
      <ScrollToTop />
    </div>
  );
}