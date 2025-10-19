import { Metadata } from 'next'
import Link from 'next/link'
import CalculatorTool from '@/components/CalculatorTool'
import { getFullUrl } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Oven to Air Fryer Conversion Guide - Complete Temperature & Time Guide',
  description: 'Learn how to convert any oven recipe to air fryer settings. Complete guide with temperature and time conversion rules, examples, and our free calculator tool.',
  keywords: 'oven to air fryer conversion, air fryer temperature conversion, air fryer cooking time, recipe conversion guide, air fryer vs oven',
  alternates: {
    canonical: getFullUrl('/guides/oven-to-air-fryer-conversion'),
  },
  openGraph: {
    title: 'Oven to Air Fryer Conversion Guide - Complete Temperature & Time Guide',
    description: 'Learn how to convert any oven recipe to air fryer settings with our comprehensive guide and free calculator.',
    type: 'article',
    url: getFullUrl('/guides/oven-to-air-fryer-conversion'),
  },
}

export default function OvenToAirFryerConversionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm mb-6">
              <span className="text-2xl">🔄</span>
              <span className="text-sm font-semibold text-gray-700">Complete Conversion Guide</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight">
              Oven to Air Fryer
              <span className="block mt-2 bg-gradient-to-r from-primary-600 to-orange-600 bg-clip-text text-transparent">
                Conversion Guide
              </span>
            </h1>

            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Master the art of converting any oven recipe to air fryer settings. 
              <span className="font-semibold text-primary-700"> Get perfect results every time</span> with our comprehensive guide and free calculator.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#calculator"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-orange-600 hover:from-primary-700 hover:to-orange-700 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <span>Use Free Calculator</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="#conversion-rules"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-900 font-bold text-lg px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-2 border-gray-200"
              >
                <span>Learn Conversion Rules</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Answer Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-8 rounded-r-xl">
              <h2 className="text-2xl font-display font-bold text-green-900 mb-4">
                ⚡ Quick Answer
              </h2>
              <p className="text-lg text-green-800 mb-4">
                <strong>Yes, air fryers cook faster than ovens!</strong> Air fryers circulate hot air more efficiently, 
                cooking food 20-30% faster than traditional ovens while using 75% less oil.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-green-900 mb-2">Temperature Rule</h3>
                  <p className="text-green-800">Reduce oven temperature by <strong>25-50°F</strong></p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-green-900 mb-2">Time Rule</h3>
                  <p className="text-green-800">Reduce cooking time by <strong>20-30%</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Air Fryers Cook Faster */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-gray-900 text-center mb-12">
              Why Do Air Fryers Cook Faster Than Ovens?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Hot Air Circulation</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Air fryers use a powerful fan to circulate hot air around your food, creating a convection effect 
                  that cooks food more evenly and quickly than traditional ovens.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  This rapid air circulation means your food gets crispy on the outside while staying tender on the inside, 
                  all in a fraction of the time it would take in a conventional oven.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Speed Comparison</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg">
                    <span className="font-semibold">French Fries</span>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">Oven: 25-30 min</div>
                      <div className="text-sm text-gray-600">Air Fryer: 15-20 min</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg">
                    <span className="font-semibold">Chicken Wings</span>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">Oven: 45-50 min</div>
                      <div className="text-sm text-gray-600">Air Fryer: 25-30 min</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg">
                    <span className="font-semibold">Roasted Vegetables</span>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">Oven: 30-35 min</div>
                      <div className="text-sm text-gray-600">Air Fryer: 15-20 min</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Rules */}
      <section id="conversion-rules" className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-gray-900 text-center mb-12">
              How to Convert Oven Recipes to Air Fryer
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Temperature Conversion */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center text-3xl mb-6">
                  🌡️
                </div>
                <h3 className="text-2xl font-display font-bold text-blue-900 mb-4">
                  Temperature Conversion
                </h3>
                <p className="text-blue-800 mb-6">
                  Air frying requires lower temperatures than baking. Here's how to convert:
                </p>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4">
                    <div className="font-semibold text-blue-900">General Rule</div>
                    <div className="text-blue-800">Reduce oven temperature by <strong>25°F</strong></div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="font-semibold text-blue-900">High Temperatures (400°F+)</div>
                    <div className="text-blue-800">Reduce by <strong>50°F</strong> for better results</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="font-semibold text-blue-900">Minimum Temperature</div>
                    <div className="text-blue-800">Never go below <strong>200°F</strong></div>
                  </div>
                </div>
              </div>

              {/* Time Conversion */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center text-3xl mb-6">
                  ⏰
                </div>
                <h3 className="text-2xl font-display font-bold text-green-900 mb-4">
                  Time Conversion
                </h3>
                <p className="text-green-800 mb-6">
                  Air fryers cook faster due to efficient air circulation:
                </p>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4">
                    <div className="font-semibold text-green-900">General Rule</div>
                    <div className="text-green-800">Reduce cooking time by <strong>20-30%</strong></div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="font-semibold text-green-900">Example</div>
                    <div className="text-green-800">60 min oven → <strong>42-48 min</strong> air fryer</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="font-semibold text-green-900">Check Early</div>
                    <div className="text-green-800">Always check 2-3 minutes before calculated time</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Conversion Examples */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-6 text-center">
                Common Conversion Examples
              </h3>
              
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm">
                  <thead className="bg-primary-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Oven Recipe</th>
                      <th className="px-6 py-4 text-left font-semibold">Oven Temp</th>
                      <th className="px-6 py-4 text-left font-semibold">Oven Time</th>
                      <th className="px-6 py-4 text-left font-semibold">Air Fryer Temp</th>
                      <th className="px-6 py-4 text-left font-semibold">Air Fryer Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">French Fries</td>
                      <td className="px-6 py-4">425°F</td>
                      <td className="px-6 py-4">25-30 min</td>
                      <td className="px-6 py-4 text-primary-600 font-semibold">400°F</td>
                      <td className="px-6 py-4 text-primary-600 font-semibold">15-20 min</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Chicken Wings</td>
                      <td className="px-6 py-4">400°F</td>
                      <td className="px-6 py-4">45-50 min</td>
                      <td className="px-6 py-4 text-primary-600 font-semibold">375°F</td>
                      <td className="px-6 py-4 text-primary-600 font-semibold">25-30 min</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Roasted Vegetables</td>
                      <td className="px-6 py-4">425°F</td>
                      <td className="px-6 py-4">30-35 min</td>
                      <td className="px-6 py-4 text-primary-600 font-semibold">400°F</td>
                      <td className="px-6 py-4 text-primary-600 font-semibold">15-20 min</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Baked Potatoes</td>
                      <td className="px-6 py-4">400°F</td>
                      <td className="px-6 py-4">60-75 min</td>
                      <td className="px-6 py-4 text-primary-600 font-semibold">375°F</td>
                      <td className="px-6 py-4 text-primary-600 font-semibold">40-50 min</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Fish Fillets</td>
                      <td className="px-6 py-4">375°F</td>
                      <td className="px-6 py-4">15-20 min</td>
                      <td className="px-6 py-4 text-primary-600 font-semibold">350°F</td>
                      <td className="px-6 py-4 text-primary-600 font-semibold">10-12 min</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Free Oven to Air Fryer Calculator
            </h2>
            <p className="text-xl text-gray-700">
              Get precise conversions for any recipe with our advanced calculator
            </p>
          </div>
          <CalculatorTool />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-gray-900 text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Can I use an air fryer instead of an oven for any recipe?
                </h3>
                <p className="text-gray-700">
                  Yes! You can use an air fryer for almost all recipes that call for an oven. However, you'll need to 
                  adjust the temperature and cooking time. Our calculator makes this conversion easy and accurate.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What does 375°F in an oven equate to in an air fryer?
                </h3>
                <p className="text-gray-700">
                  375°F in an oven converts to 350°F in an air fryer (25°F reduction). This works well for moderate 
                  temperatures, but for precise conversions, use our calculator which considers temperature ranges and cooking times.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  When should I use an air fryer calculator?
                </h3>
                <p className="text-gray-700">
                  Use our calculator whenever you find a great recipe that calls for baking in a traditional oven. 
                  It provides precise temperature and time conversions, ensuring perfect results in your air fryer.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How much faster is an air fryer compared to an oven?
                </h3>
                <p className="text-gray-700">
                  Air fryers typically cook food 20-30% faster than conventional ovens due to their efficient hot air 
                  circulation. This means a 60-minute oven recipe would take approximately 42-48 minutes in an air fryer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pro Tips */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-gray-900 text-center mb-12">
              Pro Tips for Perfect Air Fryer Results
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🔥</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Preheat Your Air Fryer</h3>
                <p className="text-gray-600">
                  Always preheat your air fryer for 3-5 minutes before cooking. This ensures even cooking and better results.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🔄</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Shake or Flip Food</h3>
                <p className="text-gray-600">
                  Shake the basket or flip food halfway through cooking to ensure even browning and crispy results.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">👀</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Check Early and Often</h3>
                <p className="text-gray-600">
                  Check your food 2-3 minutes before the calculated time. Air fryers can cook faster than expected.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🛢️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Use Minimal Oil</h3>
                <p className="text-gray-600">
                  Lightly spray food with oil for extra crispiness. Air fryers need much less oil than traditional frying.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📏</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Don't Overcrowd</h3>
                <p className="text-gray-600">
                  Leave space between food items for proper air circulation. Cook in batches if necessary.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📄</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Use Parchment Paper</h3>
                <p className="text-gray-600">
                  Line the basket with parchment paper for easy cleanup, especially for sticky foods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
