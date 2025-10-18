import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Complete Guide to Air Fryer Chicken Recipes - Tips & Techniques',
  description: 'Learn everything about cooking chicken in your air fryer! From chicken breast to wings, discover the best air fryer chicken recipes, cooking times, and pro tips.',
  keywords: 'air fryer chicken recipes, chicken breast air fryer, air fryer chicken wings recipe, chicken cooking guide',
  openGraph: {
    title: 'Complete Guide to Air Fryer Chicken Recipes',
    description: 'Master air fryer chicken cooking with our comprehensive guide. Tips, techniques, and best recipes included.',
  },
}

export default function AirFryerChickenGuide() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Complete Guide to Air Fryer Chicken Recipes
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Master the art of cooking chicken in your air fryer! This comprehensive guide covers everything you need to know about 
            <strong> air fryer chicken recipes</strong>, from basic techniques to pro tips for perfect results every time.
          </p>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
              Best Air Fryer Chicken Recipes
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-orange-800 mb-4">Air Fryer Chicken Breast Recipe</h3>
                <p className="text-orange-700 mb-4">
                  Perfect for meal prep and healthy dinners. Learn how to cook juicy, tender chicken breast every time.
                </p>
                <ul className="text-orange-600 space-y-2">
                  <li>✓ 375°F for 20 minutes</li>
                  <li>✓ Internal temperature 165°F</li>
                  <li>✓ Let rest 5 minutes before slicing</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-red-800 mb-4">Air Fryer Chicken Wings Recipe</h3>
                <p className="text-red-700 mb-4">
                  Crispy outside, juicy inside chicken wings perfect for game day or any occasion.
                </p>
                <ul className="text-red-600 space-y-2">
                  <li>✓ 380°F for 25 minutes</li>
                  <li>✓ Flip halfway through cooking</li>
                  <li>✓ Pat dry before seasoning</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
              Air Fryer Chicken Cooking Times & Temperatures
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Chicken Type</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Temperature</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Cook Time</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Internal Temp</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">Chicken Breast (6-8 oz)</td>
                    <td className="border border-gray-300 px-4 py-3">375°F</td>
                    <td className="border border-gray-300 px-4 py-3">18-20 minutes</td>
                    <td className="border border-gray-300 px-4 py-3">165°F</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">Chicken Wings</td>
                    <td className="border border-gray-300 px-4 py-3">380°F</td>
                    <td className="border border-gray-300 px-4 py-3">22-25 minutes</td>
                    <td className="border border-gray-300 px-4 py-3">165°F</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">Chicken Thighs</td>
                    <td className="border border-gray-300 px-4 py-3">375°F</td>
                    <td className="border border-gray-300 px-4 py-3">20-22 minutes</td>
                    <td className="border border-gray-300 px-4 py-3">165°F</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">Chicken Drumsticks</td>
                    <td className="border border-gray-300 px-4 py-3">375°F</td>
                    <td className="border border-gray-300 px-4 py-3">22-25 minutes</td>
                    <td className="border border-gray-300 px-4 py-3">165°F</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
              Pro Tips for Perfect Air Fryer Chicken
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Preparation Tips</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Pat chicken dry before seasoning for better browning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Don't overcrowd the basket - single layer only</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Preheat air fryer for 3 minutes before cooking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Use a meat thermometer for perfect doneness</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Cooking Tips</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Flip chicken halfway through cooking time</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Let chicken rest 5 minutes before slicing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Check internal temperature, not just time</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Brush with oil for extra crispiness</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
            <h2 className="text-3xl font-display font-bold text-blue-800 mb-6">
              Popular Air Fryer Chicken Recipe Variations
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-3">BBQ Chicken</h3>
                <p className="text-gray-600 text-sm mb-3">Brush with BBQ sauce in last 5 minutes</p>
                <p className="text-xs text-gray-500">Perfect for summer grilling flavor</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Lemon Herb</h3>
                <p className="text-gray-600 text-sm mb-3">Season with lemon zest and fresh herbs</p>
                <p className="text-xs text-gray-500">Fresh and bright flavors</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Buffalo Style</h3>
                <p className="text-gray-600 text-sm mb-3">Toss with buffalo sauce after cooking</p>
                <p className="text-xs text-gray-500">Spicy and tangy</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Ready to try these air fryer chicken recipes? Check out our collection of the 
              <strong> best air fryer recipes</strong> for more inspiration!
            </p>
            <a 
              href="/recipes" 
              className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition-colors"
            >
              View All Chicken Recipes
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
