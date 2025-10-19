'use client'

import { useState, useEffect } from 'react'
import RecipeCard from '@/components/RecipeCard'
import Image from 'next/image'

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

export default function RecipesPage() {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([])
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadRecipes = async () => {
      setLoading(true)
      try {
        const response = await fetch(`/api/recipes?language=en`)
        if (response.ok) {
          const allRecipes = await response.json()
          setRecipes(allRecipes)
          setFilteredRecipes(allRecipes)
        } else {
          console.error('Failed to fetch recipes')
          setRecipes([])
          setFilteredRecipes([])
        }
      } catch (error) {
        console.error('Error loading recipes:', error)
        setRecipes([])
        setFilteredRecipes([])
      } finally {
        setLoading(false)
      }
    }

    loadRecipes()
  }, [])

  // 过滤食谱函数
  const filterRecipes = (category: string) => {
    setSelectedCategory(category)
    if (category === 'All') {
      setFilteredRecipes(recipes)
    } else {
      const filtered = recipes.filter(recipe => {
        // 将分类名称转换为小写并处理特殊字符
        const recipeCategory = recipe.category.toLowerCase().replace(/[^a-z]/g, '')
        const filterCategory = category.toLowerCase().replace(/[^a-z]/g, '')
        
        // 处理一些特殊的分类映射
        if (filterCategory === 'meatpoultry' && (recipeCategory.includes('meat') || recipeCategory.includes('poultry'))) {
          return true
        }
        if (filterCategory === 'quickmeals' && (recipeCategory.includes('quick') || recipeCategory.includes('easy'))) {
          return true
        }
        
        return recipeCategory.includes(filterCategory)
      })
      setFilteredRecipes(filtered)
    }
  }

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
      {/* Hero Section with Background Image */}
      <div className="relative bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Decorative Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6 shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 drop-shadow-lg">
                    Air Fryer Recipe Collection
                  </h1>
                  <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto mb-8 drop-shadow">
                    Browse {recipes.length}+ kitchen-tested air fryer recipes for crispy, healthy meals
                  </p>
            
            {/* Stats Bar */}
            <div className="flex flex-wrap justify-center gap-6 text-white">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3 shadow-lg">
                <div className="text-3xl font-bold">{recipes.length}+</div>
                <div className="text-sm opacity-90">Recipes</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3 shadow-lg">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm opacity-90">Categories</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3 shadow-lg">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm opacity-90">Tested</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 md:h-20" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-gray-50"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-gray-50"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-gray-50"></path>
          </svg>
        </div>
      </div>

      {/* Filter/Category Section */}
      <div className="py-8 bg-gray-50">
        <div className="container">
          <div className="flex flex-wrap gap-3 justify-center">
            {['All', 'Breakfast', 'Meat & Poultry', 'Seafood', 'Vegetables', 'Desserts', 'Vegan', 'Quick Meals'].map((category) => (
              <button
                key={category}
                onClick={() => filterRecipes(category)}
                className={`px-6 py-2.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md font-medium text-sm ${
                  selectedCategory === category
                    ? 'bg-orange-500 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-orange-500 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Recipes Grid Section */}
      <div className="py-12 bg-gray-50">
        <div className="container">
          {/* Featured Banner with Image */}
          <div className="mb-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
              <div className="text-white">
                <div className="inline-block bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full mb-4">
                  ⭐ FEATURED COLLECTION
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  Master Your Air Fryer
                </h2>
                <p className="text-lg text-blue-100 mb-6">
                  From crispy chicken to perfectly cooked salmon, discover techniques that will transform your cooking
                </p>
                <div className="flex gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                    <div className="text-2xl font-bold">95%</div>
                    <div className="text-xs opacity-90">Success Rate</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                    <div className="text-2xl font-bold">20min</div>
                    <div className="text-xs opacity-90">Avg. Time</div>
                  </div>
                </div>
              </div>
              <div className="relative h-64 md:h-80">
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-2xl"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg className="w-24 h-24 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
              </div>
            </div>
          </div>

          {/* Recipes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe._id} recipe={recipe} />
            ))}
          </div>
          
          {/* No Results Message */}
          {filteredRecipes.length === 0 && !loading && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No recipes found</h3>
              <p className="text-gray-600 mb-4">Try selecting a different category or browse all recipes.</p>
              <button
                onClick={() => filterRecipes('All')}
                className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
              >
                Show All Recipes
              </button>
            </div>
          )}

          {/* Call to Action Banner */}
          <div className="mt-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
                  <div className="max-w-3xl mx-auto">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                      Looking for Something Specific?
                    </h2>
                    <p className="text-xl text-green-50 mb-8">
                      We're always adding new recipes. Check back regularly for the latest air fryer cooking ideas.
                    </p>
                  </div>
          </div>
        </div>
      </div>
    </>
  )
}

