import Link from 'next/link'
import Image from 'next/image'
import { Recipe } from '@/lib/recipes'

interface ContentRecommendationsProps {
  currentRecipe: Recipe
  relatedRecipes: Recipe[]
  className?: string
}

export default function ContentRecommendations({
  currentRecipe,
  relatedRecipes,
  className = ''
}: ContentRecommendationsProps) {
  // 获取相关食谱（同分类或相似标签）
  const getRelatedRecipes = () => {
    return relatedRecipes
      .filter(recipe => recipe.slug !== currentRecipe.slug)
      .slice(0, 4)
  }

  const relatedRecipesList = getRelatedRecipes()

  if (relatedRecipesList.length === 0) {
    return null
  }

  return (
    <div className={`content-recommendations ${className}`}>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          You might also like
        </h2>
        <p className="text-gray-600">
          More delicious air fryer recipes to try next
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedRecipesList.map((recipe) => (
          <Link
            key={recipe.slug}
            href={`/recipes/${recipe.slug}`}
            className="group block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden border border-gray-200"
          >
            <div className="aspect-w-16 aspect-h-12 relative overflow-hidden">
              <Image
                src={recipe.mainImage}
                alt={recipe.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
            </div>
            
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200 line-clamp-2">
                {recipe.title}
              </h3>
              
              <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                {recipe.excerpt}
              </p>
              
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>⏱️ {recipe.prepTime + recipe.cookTime}min</span>
                  <span>👥 {recipe.servings}</span>
                </div>
                
                {(recipe as any).rating && (
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">★</span>
                    <span className="text-xs text-gray-600">{(recipe as any).rating}</span>
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

// 分类推荐组件
export function CategoryRecommendations({ 
  category, 
  recipes 
}: { 
  category: string
  recipes: Recipe[] 
}) {
  const categoryRecipes = recipes
    .filter(recipe => recipe.category === category)
    .slice(0, 6)

  if (categoryRecipes.length === 0) {
    return null
  }

  return (
    <div className="category-recommendations">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          More {category} Recipes
        </h2>
        <p className="text-gray-600">
          Discover more delicious {category.toLowerCase()} recipes
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {categoryRecipes.map((recipe) => (
          <Link
            key={recipe.slug}
            href={`/recipes/${recipe.slug}`}
            className="group flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200"
          >
            <div className="w-16 h-16 relative overflow-hidden rounded-lg flex-shrink-0">
              <Image
                src={recipe.mainImage}
                alt={recipe.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="64px"
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors duration-200 line-clamp-2 text-sm">
                {recipe.title}
              </h3>
              
              <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                <span>⏱️ {recipe.prepTime + recipe.cookTime}min</span>
                {(recipe as any).rating && (
                  <span className="flex items-center gap-1">
                    <span className="text-yellow-400">★</span>
                    {(recipe as any).rating}
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

// 热门食谱组件
export function PopularRecipes({ recipes }: { recipes: Recipe[] }) {
  const popularRecipes = recipes
    .filter(recipe => (recipe as any).rating && (recipe as any).rating >= 4.5)
    .sort((a, b) => ((b as any).rating || 0) - ((a as any).rating || 0))
    .slice(0, 5)

  if (popularRecipes.length === 0) {
    return null
  }

  return (
    <div className="popular-recipes">
      <h3 className="text-lg font-bold text-gray-900 mb-4">
        🔥 Popular Recipes
      </h3>
      
      <div className="space-y-3">
        {popularRecipes.map((recipe, index) => (
          <Link
            key={recipe.slug}
            href={`/recipes/${recipe.slug}`}
            className="group flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
              {index + 1}
            </div>
            
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors duration-200 line-clamp-1 text-sm">
                {recipe.title}
              </h4>
              
              <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                <span>⏱️ {recipe.prepTime + recipe.cookTime}min</span>
                {(recipe as any).rating && (
                  <span className="flex items-center gap-1">
                    <span className="text-yellow-400">★</span>
                    {(recipe as any).rating}
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
