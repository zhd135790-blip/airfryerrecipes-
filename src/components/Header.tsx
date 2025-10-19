'use client'

import Link from 'next/link'
import { useState } from 'react'
import AirFryerIcon from './AirFryerIcon'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    console.log('Menu clicked!', isMobileMenuOpen)
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    console.log('Closing menu')
    setIsMobileMenuOpen(false)
  }
  
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <nav className="container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl overflow-hidden">
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-600/20 rounded-2xl animate-pulse"></div>
              
              <AirFryerIcon className="relative w-7 h-7 text-white z-10" animated={true} />
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

          {/* Mobile Menu Button - 简化版本 */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden p-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors border border-gray-200"
            style={{ minWidth: '44px', minHeight: '44px' }}
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <div className={`w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
              <div className={`w-5 h-0.5 bg-current transition-all duration-300 my-1 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu - 简化版本 */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="pt-4 pb-2 space-y-1 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg mt-2">
            <Link
              href="/recipes"
              onClick={closeMobileMenu}
              className="block px-6 py-4 text-gray-700 hover:text-primary-600 hover:bg-primary-50 font-semibold transition-colors border-b border-gray-100"
            >
              📝 Recipes
            </Link>
            <Link
              href="/categories"
              onClick={closeMobileMenu}
              className="block px-6 py-4 text-gray-700 hover:text-primary-600 hover:bg-primary-50 font-semibold transition-colors border-b border-gray-100"
            >
              📂 Categories
            </Link>
            <Link
              href="/calculator"
              onClick={closeMobileMenu}
              className="block px-6 py-4 text-gray-700 hover:text-primary-600 hover:bg-primary-50 font-semibold transition-colors border-b border-gray-100"
            >
              🧮 Calculator
            </Link>
            <Link
              href="/guides"
              onClick={closeMobileMenu}
              className="block px-6 py-4 text-gray-700 hover:text-primary-600 hover:bg-primary-50 font-semibold transition-colors border-b border-gray-100"
            >
              📖 Guides
            </Link>
            <Link
              href="/faq"
              onClick={closeMobileMenu}
              className="block px-6 py-4 text-gray-700 hover:text-primary-600 hover:bg-primary-50 font-semibold transition-colors border-b border-gray-100"
            >
              ❓ FAQ
            </Link>
            <Link
              href="/about"
              onClick={closeMobileMenu}
              className="block px-6 py-4 text-gray-700 hover:text-primary-600 hover:bg-primary-50 font-semibold transition-colors border-b border-gray-100"
            >
              ℹ️ About
            </Link>
            
            {/* Mobile CTA Button */}
            <Link 
              href="/recipes"
              onClick={closeMobileMenu}
              className="block mx-6 mt-4 mb-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-orange-600 hover:from-primary-700 hover:to-orange-700 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
            >
              🎯 View All Recipes
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}