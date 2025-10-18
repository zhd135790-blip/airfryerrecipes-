import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us - Our Story & Mission',
  description: 'Learn about Air Fryer Recipes and our mission to help you cook delicious, healthy, and quick meals using your air fryer.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm mb-6">
              <span className="text-2xl">👋</span>
              <span className="text-sm font-semibold text-gray-700">Welcome to Our Kitchen</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-primary-600 to-orange-600 bg-clip-text text-transparent">Air Fryer Recipes</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Your trusted companion for delicious, healthy, and quick air fryer cooking adventures
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">Our Story</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Welcome to <span className="font-bold text-primary-600">Air Fryer Recipes</span>! 
                We're passionate about sharing a wide variety of air fryer recipes to help you cook 
                delicious, healthy, and quick meals. We believe that the air fryer is a game-changer 
                in the kitchen, offering a fast and easy way to prepare your favorite dishes while 
                reducing oil and preserving the natural flavors of the ingredients.
              </p>

              <div className="my-12 p-8 bg-gradient-to-br from-primary-50 to-orange-50 rounded-2xl border border-primary-100">
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-3xl">🍳</span>
                  Why Air Fryer Recipes?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The air fryer allows you to create meals with <strong className="text-primary-700">less oil</strong> but 
                  still enjoy the crisp texture and rich taste of traditionally fried foods. Whether you're 
                  looking for healthy recipes, easy snacks, or quick dinner ideas, we've got something for everyone.
                </p>
              </div>

              <h3 className="text-3xl font-display font-bold text-gray-900 mb-6 mt-12">Our Mission</h3>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our mission is to provide <strong>simple, straightforward recipes</strong> that anyone—whether 
                you're a beginner or an experienced cook—can follow with ease. With air fryer recipes, cooking 
                becomes faster, healthier, and more enjoyable.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                At Air Fryer Recipes, we aim to inspire you to make the most of your air fryer and enjoy a 
                variety of flavors in the comfort of your own home.
              </p>

              <div className="text-center py-8">
                <p className="text-2xl font-display font-bold text-gray-900 mb-2">
                  Thank you for visiting, and happy cooking! 🎉
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-display font-bold text-center text-gray-900 mb-16">
              What We Stand For
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg">
                  💚
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 text-gray-900">Healthy Living</h3>
                <p className="text-gray-600 leading-relaxed">
                  We believe in promoting healthier cooking methods that don't compromise on taste. 
                  Less oil, more flavor, better for you.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg">
                  📖
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 text-gray-900">Easy to Follow</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every recipe is tested, clearly written, and designed to be accessible for cooks 
                  of all skill levels.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg">
                  🌟
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 text-gray-900">Quality Content</h3>
                <p className="text-gray-600 leading-relaxed">
                  We're committed to providing high-quality, tested recipes with detailed instructions 
                  and helpful tips.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-orange-600 text-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-display font-bold text-center mb-16">
              Growing Together
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">200+</div>
                <div className="text-white/90">Tested Recipes</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">15+</div>
                <div className="text-white/90">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">50K+</div>
                <div className="text-white/90">Monthly Visitors</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">4.8★</div>
                <div className="text-white/90">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Ready to Start Cooking?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Explore our collection of delicious air fryer recipes and transform your cooking today!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/recipes" 
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-orange-600 hover:from-primary-700 hover:to-orange-700 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <span>Browse All Recipes</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                href="/categories" 
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-900 font-bold text-lg px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-2 border-gray-200"
              >
                <span>Explore Categories</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

