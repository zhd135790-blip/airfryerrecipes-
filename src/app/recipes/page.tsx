import { Metadata } from 'next'
import { getAllRecipes } from '@/lib/recipes'
import RecipeCard from '@/components/RecipeCard'

export const metadata: Metadata = {
  title: 'All Air Fryer Recipes',
  description: 'Browse our complete collection of easy and healthy air fryer recipes. Find the perfect recipe for any meal or occasion.',
}

export default async function RecipesPage() {
  const recipes = getAllRecipes()

  return (
    <div className="py-12 bg-gray-50">
      <div className="container">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            All Air Fryer Recipes
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our complete collection of {recipes.length}+ delicious air fryer recipes
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe._id} recipe={recipe} />
          ))}
        </div>
      </div>
    </div>
  )
}

export const revalidate = 3600

