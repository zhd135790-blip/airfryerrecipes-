import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getRecipeBySlug, getAllRecipeSlugs } from '@/lib/recipes'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getFullUrl } from '@/lib/config'

interface RecipePageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const slugs = getAllRecipeSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: RecipePageProps): Promise<Metadata> {
  const recipe = getRecipeBySlug(params.slug)
  
  if (!recipe) {
    return {}
  }

  const imageUrl = recipe.mainImage

  const recipeUrl = getFullUrl(`/recipes/${params.slug}`)

  return {
    title: recipe.seoTitle || recipe.title,
    description: recipe.seoDescription || recipe.excerpt,
    alternates: {
      canonical: recipeUrl,
    },
    openGraph: {
      title: recipe.seoTitle || recipe.title,
      description: recipe.seoDescription || recipe.excerpt,
      type: 'article',
      url: recipeUrl,
      images: imageUrl ? [{ url: imageUrl }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: recipe.seoTitle || recipe.title,
      description: recipe.seoDescription || recipe.excerpt,
      images: imageUrl ? [imageUrl] : [],
    },
  }
}

export default async function RecipePage({ params }: RecipePageProps) {
  const recipe = getRecipeBySlug(params.slug)

  if (!recipe) {
    notFound()
  }

  const imageUrl = recipe.mainImage || '/images/placeholder-recipe.jpg'
  const totalTime = recipe.prepTime + recipe.cookTime

  // JSON-LD Structured Data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: recipe.title,
    image: imageUrl,
    description: recipe.excerpt,
    prepTime: `PT${recipe.prepTime}M`,
    cookTime: `PT${recipe.cookTime}M`,
    totalTime: `PT${totalTime}M`,
    recipeYield: recipe.servings,
    recipeCategory: recipe.category,
    keywords: recipe.tags?.join(', '),
    recipeIngredient: recipe.ingredients,
    recipeInstructions: recipe.instructions?.map((instruction, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      text: instruction,
    })),
    nutrition: recipe.nutritionFacts ? {
      '@type': 'NutritionInformation',
      calories: `${recipe.nutritionFacts.calories} calories`,
      proteinContent: `${recipe.nutritionFacts.protein}g`,
      carbohydrateContent: `${recipe.nutritionFacts.carbs}g`,
      fatContent: `${recipe.nutritionFacts.fat}g`,
    } : undefined,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="py-8">
        <div className="container max-w-4xl">
          {/* Breadcrumbs */}
          <nav className="text-sm mb-6">
            <ol className="flex items-center space-x-2 text-gray-600">
              <li><Link href="/" className="hover:text-primary-600">Home</Link></li>
              <li>/</li>
              <li><Link href="/recipes" className="hover:text-primary-600">Recipes</Link></li>
              {recipe.category && (
                <>
                  <li>/</li>
                  <li>
                    <Link 
                      href={`/categories/${recipe.category}`}
                      className="hover:text-primary-600"
                    >
                      {recipe.category}
                    </Link>
                  </li>
                </>
              )}
              <li>/</li>
              <li className="text-gray-900 font-medium">{recipe.title}</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              {recipe.title}
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              {recipe.excerpt}
            </p>

            {/* Recipe Meta */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center text-gray-700">
                <svg className="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <span className="font-semibold">Total Time:</span> {totalTime} minutes
                </div>
              </div>
              <div className="flex items-center text-gray-700">
                <svg className="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <div>
                  <span className="font-semibold">Servings:</span> {recipe.servings}
                </div>
              </div>
              <div className="flex items-center text-gray-700">
                <svg className="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <span className="font-semibold">Difficulty:</span> {recipe.difficulty}
                </div>
              </div>
            </div>

            {/* Tags */}
            {recipe.tags && recipe.tags.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {recipe.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Main Image */}
          <div className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden mb-8">
            <Image
              src={imageUrl}
              alt={recipe.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Sidebar */}
            <aside className="md:col-span-1">
              {/* Ingredients */}
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
                  Ingredients
                </h2>
                <ul className="space-y-3">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{ingredient}</span>
                    </li>
                  ))}
                </ul>

                {/* Nutrition Facts */}
                {recipe.nutritionFacts && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-3">Nutrition Facts</h3>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <div className="text-gray-600">Calories</div>
                        <div className="font-semibold">{recipe.nutritionFacts.calories}</div>
                      </div>
                      <div>
                        <div className="text-gray-600">Protein</div>
                        <div className="font-semibold">{recipe.nutritionFacts.protein}g</div>
                      </div>
                      <div>
                        <div className="text-gray-600">Carbs</div>
                        <div className="font-semibold">{recipe.nutritionFacts.carbs}g</div>
                      </div>
                      <div>
                        <div className="text-gray-600">Fat</div>
                        <div className="font-semibold">{recipe.nutritionFacts.fat}g</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </aside>

            {/* Main Content */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
                  Instructions
                </h2>
                <div className="prose prose-lg max-w-none">
                  <ol className="space-y-6">
                    {recipe.instructions.map((instruction, index) => (
                      <li key={index} className="text-gray-700">
                        <span className="font-semibold text-primary-600">Step {index + 1}:</span> {instruction}
                      </li>
                    ))}
                  </ol>
                </div>
                
                {/* Additional Content */}
                {recipe.content && (
                  <div className="mt-8 prose prose-lg max-w-none">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {recipe.content}
                    </ReactMarkdown>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </article>
    </>
  )
}

export const revalidate = 3600

