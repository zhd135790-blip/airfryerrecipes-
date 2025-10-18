'use client'

import { useState } from 'react'

export default function CalculatorTool() {
  const [ovenTemp, setOvenTemp] = useState(200)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(30)
  const [result, setResult] = useState<{
    airFryerTemp: number
    airFryerTime: number
    tempReduction: number
    timeReduction: number
  } | null>(null)

  const calculateAirFryerSettings = () => {
    const totalMinutes = hours * 60 + minutes
    
    // 空气炸锅温度转换规则：通常比烤箱低25-50°F
    const tempReduction = ovenTemp > 400 ? 50 : 25
    const airFryerTemp = Math.max(ovenTemp - tempReduction, 200)
    
    // 空气炸锅时间转换规则：通常比烤箱少20-30%的时间
    const timeReduction = 0.25 // 25%减少
    const airFryerTime = Math.max(Math.round(totalMinutes * (1 - timeReduction)), 5)
    
    setResult({
      airFryerTemp,
      airFryerTime,
      tempReduction,
      timeReduction: timeReduction * 100
    })
  }

  const scrollToCalculator = () => {
    document.getElementById('calculator')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            {/* 标签 */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm mb-6">
              <span className="text-2xl">🧮</span>
              <span className="text-sm font-semibold text-gray-700">Smart Conversion Tool</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900 mb-6 leading-tight">
              Air Fryer
              <span className="block mt-2 bg-gradient-to-r from-primary-600 to-orange-600 bg-clip-text text-transparent">
                Calculator
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
              Convert any oven recipe to air fryer settings instantly. 
              <span className="font-semibold text-primary-700"> Get perfect results every time</span> with our smart conversion tool.
            </p>

            {/* 跳转按钮 */}
            <button
              onClick={scrollToCalculator}
              className="inline-flex items-center gap-2 bg-white/80 hover:bg-white backdrop-blur-sm text-gray-700 font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200"
            >
              <span>JUMP TO CALCULATOR</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white/50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Why Use Our Calculator?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Most recipes are designed for traditional ovens, but with our <strong>air fryer calculator</strong>, 
                  you can easily convert any recipe to work perfectly in your air fryer.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Simply enter your oven temperature and cooking time, and we'll give you the perfect air fryer settings 
                  for crispy, delicious results every time.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-primary-100 to-orange-100 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="text-3xl font-bold text-primary-600 mb-2">25°F</div>
                    <div className="text-sm text-gray-600">Average Temp Reduction</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="text-3xl font-bold text-primary-600 mb-2">25%</div>
                    <div className="text-sm text-gray-600">Time Reduction</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="text-3xl font-bold text-primary-600 mb-2">75%</div>
                    <div className="text-sm text-gray-600">Less Oil Used</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="text-3xl font-bold text-primary-600 mb-2">30%</div>
                    <div className="text-sm text-gray-600">Faster Cooking</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                  Oven to Air Fryer Converter
                </h2>
                <p className="text-lg text-gray-600">
                  Step 1: Enter Oven/Baking Directions
                </p>
              </div>

              <div className="space-y-8">
                {/* Temperature Input */}
                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-4">
                    Oven Temp:
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="200"
                      max="500"
                      step="25"
                      value={ovenTemp}
                      onChange={(e) => setOvenTemp(Number(e.target.value))}
                      className="w-full h-3 bg-gradient-to-r from-primary-200 to-primary-400 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-sm text-gray-600 mt-2">
                      <span>200°F</span>
                      <span>500°F</span>
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <span className="text-3xl font-bold text-primary-600">
                      {ovenTemp}°F
                    </span>
                  </div>
                </div>

                {/* Time Input */}
                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-4">
                    Bake Time:
                  </label>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Hours</label>
                      <input
                        type="number"
                        min="0"
                        max="12"
                        value={hours}
                        onChange={(e) => setHours(Math.max(0, Number(e.target.value)))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent text-center text-lg font-semibold"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Minutes</label>
                      <input
                        type="number"
                        min="0"
                        max="59"
                        value={minutes}
                        onChange={(e) => setMinutes(Math.max(0, Math.min(59, Number(e.target.value))))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent text-center text-lg font-semibold"
                      />
                    </div>
                  </div>
                </div>

                {/* Calculate Button */}
                <div className="text-center">
                  <button
                    onClick={calculateAirFryerSettings}
                    className="bg-gradient-to-r from-primary-600 to-orange-600 hover:from-primary-700 hover:to-orange-700 text-white font-bold text-lg px-12 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Calculate
                  </button>
                </div>

                {/* Results */}
                {result && (
                  <div className="mt-12 p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200">
                    <h3 className="text-2xl font-display font-bold text-green-900 mb-6 text-center">
                      🎯 Your Air Fryer Settings
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="text-center">
                        <div className="bg-white rounded-xl p-6 shadow-sm">
                          <div className="text-4xl font-bold text-green-600 mb-2">
                            {result.airFryerTemp}°F
                          </div>
                          <div className="text-sm text-gray-600 mb-2">Air Fryer Temperature</div>
                          <div className="text-xs text-green-600">
                            ({result.tempReduction}°F reduction from oven)
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="bg-white rounded-xl p-6 shadow-sm">
                          <div className="text-4xl font-bold text-green-600 mb-2">
                            {Math.floor(result.airFryerTime / 60) > 0 ? `${Math.floor(result.airFryerTime / 60)}h ` : ''}
                            {result.airFryerTime % 60}m
                          </div>
                          <div className="text-sm text-gray-600 mb-2">Air Fryer Time</div>
                          <div className="text-xs text-green-600">
                            ({result.timeReduction}% faster than oven)
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-white/60 rounded-xl">
                      <h4 className="font-semibold text-green-900 mb-2">💡 Pro Tips:</h4>
                      <ul className="text-sm text-green-800 space-y-1">
                        <li>• Preheat your air fryer for 3-5 minutes for best results</li>
                        <li>• Shake or flip food halfway through cooking</li>
                        <li>• Check doneness 2-3 minutes before the calculated time</li>
                        <li>• Use a light spray of oil for extra crispiness</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-white/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-gray-900 text-center mb-12">
              Air Fryer Conversion Tips
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🌡️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Temperature Rules</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Reduce oven temp by 25-50°F</li>
                  <li>• Higher temps need bigger reductions</li>
                  <li>• Never go below 200°F</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">⏰</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Time Adjustments</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Reduce cooking time by 20-30%</li>
                  <li>• Check food halfway through</li>
                  <li>• Smaller portions cook faster</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🍽️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Food-Specific Tips</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Don't overcrowd the basket</li>
                  <li>• Use parchment paper for easy cleanup</li>
                  <li>• Spray with oil for crispiness</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
