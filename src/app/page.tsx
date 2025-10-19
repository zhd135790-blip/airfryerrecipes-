'use client'

import { useState, useEffect } from 'react'
import RecipeCard from '@/components/RecipeCard'
import Hero from '@/components/Hero'

interface Recipe {
  _id: string
  slug: string
  title: string
  excerpt: string
  mainImage: string
  prepTime: number
  cookTime: number
  servings: number
  difficulty: 'easy' | 'medium' | 'hard'
  category: string
  tags: string[]
  ingredients: string[]
  instructions: string[]
  nutritionFacts?: {
    calories: number
    protein: number
    carbs: number
    fat: number
  }
  seoTitle?: string
  seoDescription?: string
  content?: string
  date: string
}

export default function Home() {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadRecipes = async () => {
      setLoading(true)
      try {
        const response = await fetch(`/api/recipes?language=en`)
        if (response.ok) {
          const allRecipes = await response.json()
          setRecipes(allRecipes.slice(0, 12))
        } else {
          console.error('Failed to fetch recipes')
          setRecipes([])
        }
      } catch (error) {
        console.error('Error loading recipes:', error)
        setRecipes([])
      } finally {
        setLoading(false)
      }
    }

    loadRecipes()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <Hero />
      
      <section className="py-12 bg-white">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Air Fryer Recipes That Actually Work
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tired of soggy air fryer results? Our tested recipes deliver crispy, flavorful dishes every time. From perfectly cooked salmon to golden chicken wings, these recipes have been kitchen-tested for real results.
            </p>
          </div>
          
          {/* Recipe Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200">
              <h3 className="text-xl font-bold mb-2 text-orange-800">
                Chicken Recipes
              </h3>
              <p className="text-orange-700 text-sm">
                Crispy chicken breast and wings that stay juicy inside
              </p>
              <div className="mt-3 text-xs text-orange-600">
                <div>• Crispy Chicken Breast</div>
                <div>• Buffalo Chicken Wings</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
              <h3 className="text-xl font-bold mb-2 text-blue-800">
                Seafood Recipes
              </h3>
              <p className="text-blue-700 text-sm">
                Perfectly cooked salmon and shrimp every time
              </p>
              <div className="mt-3 text-xs text-blue-600">
                <div>• Crispy Salmon Fillets</div>
                <div>• Garlic Shrimp</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
              <h3 className="text-xl font-bold mb-2 text-green-800">
                Quick & Easy
              </h3>
              <p className="text-green-700 text-sm">
                Simple recipes that work for busy weeknights
              </p>
              <div className="mt-3 text-xs text-green-600">
                <div>• Perfect Bacon</div>
                <div>• Roasted Vegetables</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
              <h3 className="text-xl font-bold mb-2 text-purple-800">
                Healthy Options
              </h3>
              <p className="text-purple-700 text-sm">
                Low-oil cooking that doesn't sacrifice flavor
              </p>
              <div className="mt-3 text-xs text-purple-600">
                <div>• Cauliflower Wings</div>
                <div>• Zucchini Fries</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe._id} recipe={recipe} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Why Air Frying Works Better
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real benefits that make air frying a game-changer for home cooking
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold mb-3 text-gray-900">
                Less Oil, Better Results
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Achieve that perfect crispy texture with <span className="font-bold text-green-600">75% less oil</span> than traditional frying methods
              </p>
            </div>
            
            <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold mb-3 text-gray-900">
                Faster Cooking Times
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Get dinner on the table <span className="font-bold text-orange-600">20-30% faster</span> than conventional ovens
              </p>
            </div>
            
            <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold mb-3 text-gray-900">
                Foolproof Results
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Consistent results every time, whether you're a <span className="font-bold text-blue-600">beginner or experienced cook</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

