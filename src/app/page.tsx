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
              Best Air Fryer Recipes - Popular & Easy
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our collection of easy air fryer recipes that are healthy, quick, and absolutely delicious. From air fryer salmon recipes to crispy chicken wings, we have the best air fryer recipes for every meal.
            </p>
          </div>
          
          {/* Recipe Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200">
              <h3 className="text-xl font-bold mb-2 text-orange-800">
                Air Fryer Chicken Recipes
              </h3>
              <p className="text-orange-700 text-sm">
                Perfect chicken breast and wings recipes
              </p>
              <div className="mt-3 text-xs text-orange-600">
                <div>✓ Air Fryer Chicken Breast Recipe</div>
                <div>✓ Air Fryer Chicken Wings Recipe</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
              <h3 className="text-xl font-bold mb-2 text-blue-800">
                Air Fryer Salmon Recipes
              </h3>
              <p className="text-blue-700 text-sm">
                Healthy and delicious salmon dishes
              </p>
              <div className="mt-3 text-xs text-blue-600">
                <div>✓ Salmon Air Fryer Recipe</div>
                <div>✓ Air Fryer Salmon Recipe</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
              <h3 className="text-xl font-bold mb-2 text-green-800">
                Easy Air Fryer Recipes
              </h3>
              <p className="text-green-700 text-sm">
                Simple recipes for beginners
              </p>
              <div className="mt-3 text-xs text-green-600">
                <div>✓ Air Fryer Bacon Recipe</div>
                <div>✓ Air Fryer Broccoli Recipe</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
              <h3 className="text-xl font-bold mb-2 text-purple-800">
                Healthy Air Fryer Recipes
              </h3>
              <p className="text-purple-700 text-sm">
                Nutritious meals with less oil
              </p>
              <div className="mt-3 text-xs text-purple-600">
                <div>✓ Air Fryer Cauliflower Recipes</div>
                <div>✓ Air Fryer Shrimp Recipes</div>
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
              Why Choose Air Fryer?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the benefits that make air frying the healthiest and most convenient cooking method
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center text-3xl mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                🥗
              </div>
              <h3 className="text-2xl font-display font-bold mb-3 text-gray-900">
                Healthier Meals
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Use up to <span className="font-bold text-green-600">75% less oil</span> while maintaining that perfect crispy texture you love
              </p>
            </div>
            
            <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center text-3xl mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                ⚡
              </div>
              <h3 className="text-2xl font-display font-bold mb-3 text-gray-900">
                Super Fast
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Cook meals <span className="font-bold text-orange-600">20-30% faster</span> than traditional ovens. More time for what matters!
              </p>
            </div>
            
            <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                👨‍🍳
              </div>
              <h3 className="text-2xl font-display font-bold mb-3 text-gray-900">
                Easy to Master
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Simple recipes perfect for <span className="font-bold text-blue-600">beginners and pros</span> alike. No special skills needed!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

