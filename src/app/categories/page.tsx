import { Metadata } from 'next'
import Link from 'next/link'
import { getAllCategories } from '@/lib/recipes'

export const metadata: Metadata = {
  title: 'Recipe Categories',
  description: 'Browse air fryer recipes by category. Find chicken, vegetables, desserts, appetizers, and more.',
}

export default async function CategoriesPage() {
  const categories = getAllCategories()

  return (
    <div className="py-12 bg-gray-50">
      <div className="container">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Recipe Categories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore recipes organized by type and ingredient
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className="card p-6 hover:border-primary-500 border-2 border-transparent transition-all"
            >
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">
                {category.title}
              </h2>
              {category.description && (
                <p className="text-gray-600">{category.description}</p>
              )}
              <div className="mt-4 text-primary-600 font-semibold flex items-center">
                View Recipes
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export const revalidate = 3600

