import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Air Fryer Cooking Guides - Tips, Tricks & Temperature Chart',
  description: 'Complete guide to air fryer cooking. Learn how to choose, use, and maintain your air fryer with our expert tips, temperature chart, and healthy recipes.',
  keywords: ['air fryer guide', 'air fryer tips', 'air fryer temperature chart', 'how to use air fryer', 'air fryer cooking times', 'air fryer cleaning'],
  openGraph: {
    title: 'Complete Air Fryer Cooking Guides & Tips',
    description: 'Master your air fryer with our comprehensive guides, temperature charts, and expert cooking tips.',
    type: 'article',
  },
}

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 py-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm mb-6">
              <span className="text-2xl">📚</span>
              <span className="text-sm font-semibold text-gray-700">Master Your Air Fryer</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              Air Fryer <span className="bg-gradient-to-r from-primary-600 to-orange-600 bg-clip-text text-transparent">Cooking Guides</span>
            </h1>
            
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Whether you're just getting started or already a seasoned cook, these easy-to-follow guides will help you make the most of your air fryer.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-[73px] z-40">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-3">
            <a href="#getting-started" className="px-4 py-2 bg-primary-50 hover:bg-primary-100 text-primary-700 font-semibold rounded-full transition-colors text-sm">
              Getting Started
            </a>
            <a href="#cooking-tips" className="px-4 py-2 bg-primary-50 hover:bg-primary-100 text-primary-700 font-semibold rounded-full transition-colors text-sm">
              Cooking Tips
            </a>
            <a href="#temperature-chart" className="px-4 py-2 bg-primary-50 hover:bg-primary-100 text-primary-700 font-semibold rounded-full transition-colors text-sm">
              Temperature Chart
            </a>
            <a href="#healthy-meals" className="px-4 py-2 bg-primary-50 hover:bg-primary-100 text-primary-700 font-semibold rounded-full transition-colors text-sm">
              Healthy Meals
            </a>
            <a href="#accessories" className="px-4 py-2 bg-primary-50 hover:bg-primary-100 text-primary-700 font-semibold rounded-full transition-colors text-sm">
              Accessories
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container py-16">
        <div className="max-w-5xl mx-auto">
          
          {/* Getting Started */}
          <section id="getting-started" className="mb-20 scroll-mt-32">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                🚀
              </div>
              <div>
                <h2 className="text-4xl font-display font-bold text-gray-900">Getting Started with Your Air Fryer</h2>
                <p className="text-gray-600 mt-1">Everything you need to know to begin your air frying journey</p>
              </div>
            </div>

            <div className="space-y-8">
              {/* Choosing Guide */}
              <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-2xl">🛒</span>
                  How to Choose the Right Air Fryer for You
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Choosing an air fryer can be overwhelming with all the options out there. Don't worry—we'll walk you through what to look for when picking the perfect air fryer for your kitchen, whether you need a large one for family meals or a compact model for quick snacks.
                </p>
                <div className="bg-primary-50 border-l-4 border-primary-500 p-4 rounded-r-lg">
                  <p className="text-sm font-semibold text-primary-900 mb-1">💡 Pro Tip</p>
                  <p className="text-gray-700 text-sm">
                    If you have a large family, go for a bigger air fryer (5+ quarts). If it's just you or a couple of people, a smaller one (2-3 quarts) will do just fine.
                  </p>
                </div>
              </div>

              {/* Using Guide */}
              <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-2xl">👨‍🍳</span>
                  How to Use Your Air Fryer Like a Pro
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We'll guide you through the basics—how to get your air fryer prepped, set the right temperature, and cook food to perfection. Don't worry, we've made it super simple so you can start cooking your favorite dishes with ease.
                </p>
                <div className="bg-gradient-to-r from-primary-50 to-orange-50 p-6 rounded-xl">
                  <p className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span>⚡</span> Quick Steps to Success:
                  </p>
                  <ol className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                      <span>Preheat your air fryer for 3-5 minutes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                      <span>Load the food in a single layer (don't overcrowd!)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                      <span>Set the temperature and time according to the recipe</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                      <span>Shake or flip halfway through for even cooking</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
                      <span>Enjoy your perfectly cooked meal!</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </section>

          {/* Cooking Tips */}
          <section id="cooking-tips" className="mb-20 scroll-mt-32">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                ✨
              </div>
              <div>
                <h2 className="text-4xl font-display font-bold text-gray-900">Essential Air Fryer Cooking Tips</h2>
                <p className="text-gray-600 mt-1">Master the art of air frying with these expert tips</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Crispy Food */}
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🥔</span>
                  <h3 className="text-xl font-display font-bold text-gray-900">Making Crispy, Delicious Food</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  One of the best things about an air fryer is how crispy it can make your food with very little oil. We've got some great tips to help you get that perfect crisp on fries, chicken wings, and more.
                </p>
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                  <p className="text-sm font-semibold text-green-900 mb-1">💡 Pro Tip</p>
                  <p className="text-gray-700 text-sm">
                    Lightly coat your food with a little oil spray and make sure not to overcrowd the basket—this ensures even cooking and the perfect crunch.
                  </p>
                </div>
              </div>

              {/* Avoiding Dry Food */}
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🍗</span>
                  <h3 className="text-xl font-display font-bold text-gray-900">Avoiding Dry or Overcooked Food</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  While the air fryer is super fast, it can also be easy to dry out food or overcook it. We'll share some tips on how to adjust the time and temperature to keep your food juicy and flavorful.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                  <p className="text-sm font-semibold text-blue-900 mb-1">💡 Pro Tip</p>
                  <p className="text-gray-700 text-sm">
                    For thicker foods like chicken breasts, cook at a lower temperature (around 160-170°C) for a bit longer to keep them tender and moist.
                  </p>
                </div>
              </div>

              {/* Cleaning */}
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-shadow md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🧼</span>
                  <h3 className="text-xl font-display font-bold text-gray-900">Cleaning & Maintaining Your Air Fryer</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Keeping your air fryer clean is key to making sure it works well for years. We'll show you the best ways to clean it after each use, from wiping the exterior to washing the removable parts.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="font-semibold text-purple-900 mb-2">After Every Use</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Wash basket & tray</li>
                      <li>• Wipe interior walls</li>
                      <li>• Clean heating element</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="font-semibold text-purple-900 mb-2">Weekly</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Deep clean basket</li>
                      <li>• Check for buildup</li>
                      <li>• Inspect seals</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="font-semibold text-purple-900 mb-2">Monthly</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Full deep clean</li>
                      <li>• Check all parts</li>
                      <li>• Clean exterior</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Temperature Chart */}
          <section id="temperature-chart" className="mb-20 scroll-mt-32">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                🌡️
              </div>
              <div>
                <h2 className="text-4xl font-display font-bold text-gray-900">Air Fryer Cooking Times & Temperature Chart</h2>
                <p className="text-gray-600 mt-1">Your quick reference guide for perfect cooking every time</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-primary-600 to-orange-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-bold">Food Item</th>
                      <th className="px-6 py-4 text-center font-bold">Temperature</th>
                      <th className="px-6 py-4 text-center font-bold">Time</th>
                      <th className="px-6 py-4 text-center font-bold">Tips</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900">🍟 French Fries</td>
                      <td className="px-6 py-4 text-center text-gray-700">200°C (400°F)</td>
                      <td className="px-6 py-4 text-center text-gray-700">15-20 min</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Shake every 5 mins</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900">🍗 Chicken Wings</td>
                      <td className="px-6 py-4 text-center text-gray-700">200°C (400°F)</td>
                      <td className="px-6 py-4 text-center text-gray-700">20-25 min</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Flip halfway</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900">🐟 Fish Fillets</td>
                      <td className="px-6 py-4 text-center text-gray-700">180°C (360°F)</td>
                      <td className="px-6 py-4 text-center text-gray-700">10-12 min</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Check at 8 mins</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900">🍰 Cake/Muffins</td>
                      <td className="px-6 py-4 text-center text-gray-700">160°C (320°F)</td>
                      <td className="px-6 py-4 text-center text-gray-700">15-20 min</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Use baking pan</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900">🥦 Broccoli/Veggies</td>
                      <td className="px-6 py-4 text-center text-gray-700">180°C (360°F)</td>
                      <td className="px-6 py-4 text-center text-gray-700">10-12 min</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Toss with oil</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900">🍖 Chicken Breast</td>
                      <td className="px-6 py-4 text-center text-gray-700">180°C (360°F)</td>
                      <td className="px-6 py-4 text-center text-gray-700">18-22 min</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Check internal temp</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900">🥓 Bacon</td>
                      <td className="px-6 py-4 text-center text-gray-700">200°C (400°F)</td>
                      <td className="px-6 py-4 text-center text-gray-700">8-10 min</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Single layer only</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                <p className="text-sm text-gray-600 flex items-start gap-2">
                  <span className="text-yellow-500">⚠️</span>
                  <span><strong>Note:</strong> Cooking times may vary based on your air fryer model and food thickness. Always check food doneness before serving.</span>
                </p>
              </div>
            </div>

            {/* Related Recipes CTA */}
            <div className="mt-8 bg-gradient-to-r from-primary-50 to-orange-50 rounded-2xl p-6 border border-primary-100">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to Try These Recipes?</h3>
                  <p className="text-gray-700">Browse our collection of tested recipes with exact cooking times and temperatures.</p>
                </div>
                <Link 
                  href="/recipes"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-orange-600 hover:from-primary-700 hover:to-orange-700 text-white font-bold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <span>Browse Recipes</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </section>

          {/* Healthy Meals */}
          <section id="healthy-meals" className="mb-20 scroll-mt-32">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                🥗
              </div>
              <div>
                <h2 className="text-4xl font-display font-bold text-gray-900">Making Healthier Meals with Your Air Fryer</h2>
                <p className="text-gray-600 mt-1">Cook delicious food with less oil and fewer calories</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-2xl">💧</span>
                  Cutting Down on Oil and Calories
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The air fryer is a fantastic way to make your favorite dishes with much less oil. We'll show you how to modify your favorite recipes to make them healthier without sacrificing flavor.
                </p>
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg mb-4">
                  <p className="text-sm font-semibold text-green-900 mb-1">💡 Health Tip</p>
                  <p className="text-gray-700 text-sm">
                    Instead of dunking your food in oil, try using an oil spray mister for a healthier, lighter option that's still crispy. You'll save up to <strong>75% oil</strong>!
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">-200</div>
                    <div className="text-xs text-gray-600">Calories Saved</div>
                  </div>
                  <div className="bg-green-100 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">-75%</div>
                    <div className="text-xs text-gray-600">Less Oil Used</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-2xl">🌟</span>
                  Healthy Recipe Ideas
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you're focused on eating healthier, the air fryer is a great tool. Here are some nutritious recipe ideas to get you started:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                    <div>
                      <p className="font-semibold text-gray-900">Air-Fried Vegetables</p>
                      <p className="text-sm text-gray-600">Low-calorie, nutrient-rich side dishes</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                    <div>
                      <p className="font-semibold text-gray-900">Lean Protein Options</p>
                      <p className="text-sm text-gray-600">Chicken breast, fish, and tofu</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                    <div>
                      <p className="font-semibold text-gray-900">Whole Grain Snacks</p>
                      <p className="text-sm text-gray-600">Chickpeas, sweet potato chips</p>
                    </div>
                  </li>
                </ul>
                <Link 
                  href="/categories/vegetables"
                  className="mt-4 inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
                >
                  <span>View Healthy Recipes</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </section>

          {/* Accessories */}
          <section id="accessories" className="mb-20 scroll-mt-32">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                🛠️
              </div>
              <div>
                <h2 className="text-4xl font-display font-bold text-gray-900">Must-Have Air Fryer Accessories</h2>
                <p className="text-gray-600 mt-1">Upgrade your air frying experience with these essential tools</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 mb-6">
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">Essential Air Fryer Accessories</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Want to get the most out of your air fryer? Here are the must-have accessories that can help you make even more delicious meals:
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="border border-gray-200 rounded-xl p-6 hover:border-primary-300 hover:shadow-md transition-all">
                  <div className="text-4xl mb-3">🍰</div>
                  <h4 className="font-bold text-gray-900 mb-2">Baking Pans</h4>
                  <p className="text-sm text-gray-600">Perfect for cakes, muffins, and casseroles. Choose heat-resistant, air fryer-safe materials.</p>
                </div>

                <div className="border border-gray-200 rounded-xl p-6 hover:border-primary-300 hover:shadow-md transition-all">
                  <div className="text-4xl mb-3">🥢</div>
                  <h4 className="font-bold text-gray-900 mb-2">Grill Racks</h4>
                  <p className="text-sm text-gray-600">Double your cooking capacity and create perfect grill marks on your food.</p>
                </div>

                <div className="border border-gray-200 rounded-xl p-6 hover:border-primary-300 hover:shadow-md transition-all">
                  <div className="text-4xl mb-3">�串</div>
                  <h4 className="font-bold text-gray-900 mb-2">Skewers</h4>
                  <p className="text-sm text-gray-600">Make kebabs and satay with ease. Metal skewers work best for even cooking.</p>
                </div>

                <div className="border border-gray-200 rounded-xl p-6 hover:border-primary-300 hover:shadow-md transition-all">
                  <div className="text-4xl mb-3">📄</div>
                  <h4 className="font-bold text-gray-900 mb-2">Parchment Paper</h4>
                  <p className="text-sm text-gray-600">Perforated liners make cleanup easier and prevent food from sticking.</p>
                </div>

                <div className="border border-gray-200 rounded-xl p-6 hover:border-primary-300 hover:shadow-md transition-all">
                  <div className="text-4xl mb-3">🍕</div>
                  <h4 className="font-bold text-gray-900 mb-2">Pizza Pan</h4>
                  <p className="text-sm text-gray-600">Make crispy pizzas and reheat leftovers with this versatile accessory.</p>
                </div>

                <div className="border border-gray-200 rounded-xl p-6 hover:border-primary-300 hover:shadow-md transition-all">
                  <div className="text-4xl mb-3">🧤</div>
                  <h4 className="font-bold text-gray-900 mb-2">Silicone Mitts</h4>
                  <p className="text-sm text-gray-600">Protect your hands when handling hot baskets and pans safely.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span>💡</span>
                How to Choose the Right Accessories
              </h3>
              <p className="text-gray-700 mb-4">
                Not all accessories work with every air fryer, so here are some tips on choosing the right ones based on your air fryer model:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">•</span>
                  <span>Check your air fryer's basket dimensions before buying accessories</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">•</span>
                  <span>Look for accessories specifically designed for air fryers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">•</span>
                  <span>Ensure materials are heat-resistant up to at least 200°C (400°F)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">•</span>
                  <span>Consult your air fryer's manual for recommended accessories</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-gradient-to-r from-primary-600 to-orange-600 rounded-3xl p-12 text-white text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Become an Air Fryer Master?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Put these tips into practice with our collection of delicious, tested recipes!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/recipes"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 hover:bg-gray-50 font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <span>Explore All Recipes</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                href="/categories"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold text-lg px-8 py-4 rounded-xl border-2 border-white/30 transition-all duration-300"
              >
                <span>Browse by Category</span>
              </Link>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}

