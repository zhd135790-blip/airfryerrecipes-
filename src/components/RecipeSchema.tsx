import { Recipe } from '@/lib/recipes'

interface RecipeSchemaProps {
  recipe: Recipe
}

export default function RecipeSchema({ recipe }: RecipeSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    "name": recipe.title,
    "description": recipe.excerpt,
    "image": [
      `${process.env.NEXT_PUBLIC_SITE_URL || 'https://bestair-fryerrecipes.com'}${recipe.mainImage}`
    ],
    "author": {
      "@type": "Person",
      "name": "Best Air Fryer Recipes"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Best Air Fryer Recipes",
      "url": "https://bestair-fryerrecipes.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bestair-fryerrecipes.com/logo.png"
      }
    },
    "datePublished": (recipe as any).publishDate || new Date().toISOString(),
    "dateModified": (recipe as any).updatedAt || new Date().toISOString(),
    "prepTime": `PT${recipe.prepTime}M`,
    "cookTime": `PT${recipe.cookTime}M`,
    "totalTime": `PT${(recipe.prepTime || 0) + (recipe.cookTime || 0)}M`,
    "recipeYield": recipe.servings || 4,
    "recipeCategory": recipe.category || "Main Course",
    "recipeCuisine": "American",
    "recipeInstructions": recipe.instructions?.map((instruction, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "text": instruction,
      "image": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://bestair-fryerrecipes.com'}${recipe.mainImage}`
    })) || [],
    "recipeIngredient": recipe.ingredients || [],
    "nutrition": (recipe as any).nutrition ? {
      "@type": "NutritionInformation",
      "calories": (recipe as any).nutrition.calories,
      "fatContent": (recipe as any).nutrition.fat,
      "saturatedFatContent": (recipe as any).nutrition.saturatedFat,
      "cholesterolContent": (recipe as any).nutrition.cholesterol,
      "sodiumContent": (recipe as any).nutrition.sodium,
      "carbohydrateContent": (recipe as any).nutrition.carbs,
      "fiberContent": (recipe as any).nutrition.fiber,
      "sugarContent": (recipe as any).nutrition.sugar,
      "proteinContent": (recipe as any).nutrition.protein
    } : undefined,
    "aggregateRating": (recipe as any).rating ? {
      "@type": "AggregateRating",
      "ratingValue": (recipe as any).rating,
      "ratingCount": (recipe as any).reviewCount || 1,
      "bestRating": 5,
      "worstRating": 1
    } : undefined,
    "keywords": recipe.tags?.join(", ") || "air fryer recipes",
    "cookingMethod": "Air Frying",
    "suitableForDiet": (recipe as any).dietaryTags?.map((tag: string) => `https://schema.org/${tag}Diet`) || []
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
