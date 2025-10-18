import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getRecipesByCategory, getAllCategories, getAllCategorySlugs } from '@/lib/recipes'
import RecipeCard from '@/components/RecipeCard'

interface CategoryPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const slugs = getAllCategorySlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const categories = getAllCategories()
  const category = categories.find((c) => c.slug === params.slug)
  
  if (!category) {
    return {}
  }

  return {
    title: `${category.title} Air Fryer Recipes`,
    description: category.description || `Discover delicious ${category.title.toLowerCase()} recipes for your air fryer.`,
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const recipes = getRecipesByCategory(params.slug)
  const categories = getAllCategories()
  const category = categories.find((c) => c.slug === params.slug)

  if (!category) {
    notFound()
  }

  return (
    <div className="py-12 bg-gray-50">
      <div className="container">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            {category.title} Recipes
          </h1>
          {category.description && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {category.description}
            </p>
          )}
          <p className="text-gray-500 mt-2">{recipes.length} recipes found</p>
        </header>

        {recipes.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No recipes found in this category yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe._id} recipe={recipe} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export const revalidate = 3600

