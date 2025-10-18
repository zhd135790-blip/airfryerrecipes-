import Link from 'next/link'
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

interface RecipeCardProps {
  recipe: Recipe
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  // Add cache busting parameter to force image refresh
  const baseImageUrl = recipe.mainImage || '/images/placeholder-recipe.jpg'
  const imageUrl = baseImageUrl.includes('unsplash.com') 
    ? `${baseImageUrl}&v=${Date.now()}` 
    : baseImageUrl
  const totalTime = recipe.prepTime + recipe.cookTime
  
  const difficultyColors = {
    easy: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    hard: 'bg-red-100 text-red-800',
  }

  return (
    <Link 
      href={`/recipes/${recipe.slug}`} 
      className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary-200 transform hover:-translate-y-2"
    >
      <div className="relative h-56 overflow-hidden bg-gray-100">
        <Image
          src={imageUrl}
          alt={recipe.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* 渐变遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* 难度标签 */}
        {recipe.difficulty && (
          <div className={`absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-sm ${difficultyColors[recipe.difficulty]} shadow-lg`}>
            {recipe.difficulty.toUpperCase()}
          </div>
        )}
        
        {/* 分类标签 */}
        {recipe.category && (
          <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-primary-700 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {recipe.category}
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-display font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2 min-h-[3.5rem]">
          {recipe.title}
        </h3>
        
        <p className="text-gray-600 text-sm line-clamp-2 mb-4 leading-relaxed">
          {recipe.excerpt}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">{totalTime}min</span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="font-medium">{recipe.servings}</span>
            </div>
          </div>
          
          {/* 查看箭头 */}
          <div className="flex items-center gap-1 text-primary-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
            <span>View</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  )
}

