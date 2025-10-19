'use client'

import Link from 'next/link'

export default function Header() {
  
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <nav className="container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl overflow-hidden">
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-600/20 rounded-2xl animate-pulse"></div>
              
              <svg className="relative w-7 h-7 text-white z-10" fill="currentColor" viewBox="0 0 24 24">
                {/* Air Fryer Base */}
                <rect x="4" y="16" width="16" height="4" rx="2" fill="currentColor" opacity="0.9"/>
                {/* Air Fryer Body */}
                <rect x="5" y="8" width="14" height="8" rx="2" fill="currentColor"/>
                {/* Air Fryer Handle */}
                <rect x="19" y="10" width="2" height="4" rx="1" fill="currentColor" opacity="0.8"/>
                {/* Air Circulation Lines - animated */}
                <path d="M7 6 L9 4 L11 6 L13 4 L15 6 L17 4" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.7">
                  <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite"/>
                </path>
                {/* Heat Waves - animated */}
                <path d="M6 2 Q8 1 10 2 Q12 1 14 2 Q16 1 18 2" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.6">
                  <animate attributeName="opacity" values="0.6;0.9;0.6" dur="1.5s" repeatCount="indefinite"/>
                </path>
                <path d="M5 1 Q7 0 9 1 Q11 0 13 1 Q15 0 17 1 Q19 0 21 1" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4">
                  <animate attributeName="opacity" values="0.4;0.7;0.4" dur="1.8s" repeatCount="indefinite"/>
                </path>
                {/* Cooking steam effect */}
                <circle cx="12" cy="3" r="1" fill="currentColor" opacity="0.5">
                  <animate attributeName="cy" values="3;1;3" dur="2s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2s" repeatCount="indefinite"/>
                </circle>
                <circle cx="10" cy="4" r="0.8" fill="currentColor" opacity="0.4">
                  <animate attributeName="cy" values="4;2;4" dur="2.2s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.4;0.7;0.4" dur="2.2s" repeatCount="indefinite"/>
                </circle>
                <circle cx="14" cy="4" r="0.8" fill="currentColor" opacity="0.4">
                  <animate attributeName="cy" values="4;2;4" dur="1.8s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.4;0.7;0.4" dur="1.8s" repeatCount="indefinite"/>
                </circle>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-display font-bold bg-gradient-to-r from-primary-600 to-orange-600 bg-clip-text text-transparent">
                Air Fryer Recipes
              </span>
              <span className="text-xs text-gray-500 font-medium hidden sm:block">
                Kitchen-Tested Results
              </span>
            </div>
          </Link>
          
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              <Link
                href="/recipes"
                className="relative px-4 py-2 text-gray-700 hover:text-primary-600 font-semibold transition-colors group"
              >
                Recipes
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-600 to-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
              <Link
                href="/categories"
                className="relative px-4 py-2 text-gray-700 hover:text-primary-600 font-semibold transition-colors group"
              >
                Categories
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-600 to-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
              <Link
                href="/calculator"
                className="relative px-4 py-2 text-gray-700 hover:text-primary-600 font-semibold transition-colors group"
              >
                Calculator
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-600 to-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
              <Link
                href="/guides"
                className="relative px-4 py-2 text-gray-700 hover:text-primary-600 font-semibold transition-colors group"
              >
                Guides
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-600 to-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
              <Link
                href="/faq"
                className="relative px-4 py-2 text-gray-700 hover:text-primary-600 font-semibold transition-colors group"
              >
                FAQ
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-600 to-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
              <Link
                href="/about"
                className="relative px-4 py-2 text-gray-700 hover:text-primary-600 font-semibold transition-colors group"
              >
                About
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-600 to-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
            
              {/* CTA Button */}
              <Link 
                href="/recipes"
                className="ml-2 px-6 py-2.5 bg-gradient-to-r from-primary-600 to-orange-600 hover:from-primary-700 hover:to-orange-700 text-white font-bold rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                View All Recipes
              </Link>
            </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}

