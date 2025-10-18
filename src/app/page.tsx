'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
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
  const { language, t } = useLanguage()
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadRecipes = async () => {
      setLoading(true)
      try {
        const response = await fetch(`/api/recipes?language=${language}`)
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
  }, [language])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">{t('common.loading')}</p>
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
              {t('home.bestRecipes')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('home.bestRecipesDesc')}
            </p>
          </div>
          
          {/* Recipe Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200">
              <h3 className="text-xl font-bold mb-2 text-orange-800">
                {t('home.chickenRecipes')}
              </h3>
              <p className="text-orange-700 text-sm">
                {t('home.chickenRecipesDesc')}
              </p>
              <div className="mt-3 text-xs text-orange-600">
                {t('home.chickenExamples').split('\n').map((line, i) => (
                  <div key={i}>✓ {line}</div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
              <h3 className="text-xl font-bold mb-2 text-blue-800">
                {t('home.salmonRecipes')}
              </h3>
              <p className="text-blue-700 text-sm">
                {t('home.salmonRecipesDesc')}
              </p>
              <div className="mt-3 text-xs text-blue-600">
                {t('home.salmonExamples').split('\n').map((line, i) => (
                  <div key={i}>✓ {line}</div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
              <h3 className="text-xl font-bold mb-2 text-green-800">
                {t('home.easyRecipes')}
              </h3>
              <p className="text-green-700 text-sm">
                {t('home.easyRecipesDesc')}
              </p>
              <div className="mt-3 text-xs text-green-600">
                {t('home.easyExamples').split('\n').map((line, i) => (
                  <div key={i}>✓ {line}</div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
              <h3 className="text-xl font-bold mb-2 text-purple-800">
                {t('home.healthyRecipes')}
              </h3>
              <p className="text-purple-700 text-sm">
                {t('home.healthyRecipesDesc')}
              </p>
              <div className="mt-3 text-xs text-purple-600">
                {t('home.healthyExamples').split('\n').map((line, i) => (
                  <div key={i}>✓ {line}</div>
                ))}
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
              {t('home.whyAirFryer')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('home.whyAirFryerDesc')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center text-3xl mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                🥗
              </div>
              <h3 className="text-2xl font-display font-bold mb-3 text-gray-900">
                {t('home.healthierMeals')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('home.healthierMealsDesc')}
              </p>
            </div>
            
            <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center text-3xl mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                ⚡
              </div>
              <h3 className="text-2xl font-display font-bold mb-3 text-gray-900">
                {t('home.superFast')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('home.superFastDesc')}
              </p>
            </div>
            
            <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                👨‍🍳
              </div>
              <h3 className="text-2xl font-display font-bold mb-3 text-gray-900">
                {t('home.easyToMaster')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('home.easyToMasterDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

