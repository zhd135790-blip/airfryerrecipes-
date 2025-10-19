'use client'

import Link from 'next/link'

export default function Header() {
  
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <nav className="container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="text-3xl transform group-hover:scale-110 transition-transform duration-300">
              🍳
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-display font-bold bg-gradient-to-r from-primary-600 to-orange-600 bg-clip-text text-transparent">
                Air Fryer Recipes
              </span>
              <span className="text-xs text-gray-500 font-medium hidden sm:block">
                Healthy & Delicious
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

