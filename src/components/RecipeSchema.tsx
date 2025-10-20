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
    "datePublished": recipe.publishDate || new Date().toISOString(),
    "dateModified": recipe.updatedAt || new Date().toISOString(),
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
    "nutrition": recipe.nutrition ? {
      "@type": "NutritionInformation",
      "calories": recipe.nutrition.calories,
      "fatContent": recipe.nutrition.fat,
      "saturatedFatContent": recipe.nutrition.saturatedFat,
      "cholesterolContent": recipe.nutrition.cholesterol,
      "sodiumContent": recipe.nutrition.sodium,
      "carbohydrateContent": recipe.nutrition.carbs,
      "fiberContent": recipe.nutrition.fiber,
      "sugarContent": recipe.nutrition.sugar,
      "proteinContent": recipe.nutrition.protein
    } : undefined,
    "aggregateRating": recipe.rating ? {
      "@type": "AggregateRating",
      "ratingValue": recipe.rating,
      "ratingCount": recipe.reviewCount || 1,
      "bestRating": 5,
      "worstRating": 1
    } : undefined,
    "keywords": recipe.tags?.join(", ") || "air fryer recipes",
    "recipeCuisine": "American",
    "cookingMethod": "Air Frying",
    "suitableForDiet": recipe.dietaryTags?.map(tag => `https://schema.org/${tag}Diet`) || []
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
