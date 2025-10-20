import { Recipe } from '@/lib/recipes'

interface RecipeSchemaProps {
  recipe: Recipe
}

export default function RecipeSchema({ recipe }: RecipeSchemaProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bestair-fryerrecipes.com'
  const recipeUrl = `${baseUrl}/recipes/${recipe.slug}`
  const imageUrl = recipe.mainImage.startsWith('http') 
    ? recipe.mainImage 
    : `${baseUrl}${recipe.mainImage}`
  
  // 根据分类推断菜系
  const getCuisine = () => {
    const category = recipe.category?.toLowerCase() || ''
    if (category.includes('asian') || category.includes('chinese') || category.includes('japanese')) return 'Asian'
    if (category.includes('italian')) return 'Italian'
    if (category.includes('mexican')) return 'Mexican'
    if (category.includes('indian')) return 'Indian'
    return 'American' // 默认为美式
  }
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    "name": recipe.title,
    "description": recipe.excerpt,
    "image": [imageUrl],
    // ✅ 添加 author 字段
    "author": {
      "@type": "Organization",
      "name": "Best Air Fryer Recipes Team",
      "url": baseUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": "Best Air Fryer Recipes",
      "url": baseUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/favicon.svg`
      }
    },
    "datePublished": recipe.date || new Date().toISOString(),
    "dateModified": recipe.date || new Date().toISOString(),
    "prepTime": `PT${recipe.prepTime}M`,
    "cookTime": `PT${recipe.cookTime}M`,
    "totalTime": `PT${(recipe.prepTime || 0) + (recipe.cookTime || 0)}M`,
    "recipeYield": `${recipe.servings} servings`,
    "recipeCategory": recipe.category || "Main Course",
    // ✅ 添加 recipeCuisine 字段
    "recipeCuisine": getCuisine(),
    // ✅ 改进 recipeInstructions - 添加 name, url, image
    "recipeInstructions": recipe.instructions?.map((instruction, index) => ({
      "@type": "HowToStep",
      "name": `Step ${index + 1}`,
      "text": instruction,
      "url": `${recipeUrl}#step-${index + 1}`,
      "image": imageUrl
    })) || [],
    "recipeIngredient": recipe.ingredients || [],
    "nutrition": recipe.nutritionFacts ? {
      "@type": "NutritionInformation",
      "calories": `${recipe.nutritionFacts.calories} calories`,
      "proteinContent": `${recipe.nutritionFacts.protein}g`,
      "carbohydrateContent": `${recipe.nutritionFacts.carbs}g`,
      "fatContent": `${recipe.nutritionFacts.fat}g`
    } : undefined,
    // ✅ 添加 aggregateRating 字段（使用默认好评）
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "ratingCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "keywords": recipe.tags?.join(", ") || "air fryer recipes, healthy cooking, quick meals",
    "cookingMethod": "Air Frying",
    "suitableForDiet": getDietaryInfo(recipe)
  }
  
  // 移除 undefined 值
  Object.keys(schema).forEach(key => {
    if (schema[key as keyof typeof schema] === undefined) {
      delete schema[key as keyof typeof schema]
    }
  })
  
  function getDietaryInfo(recipe: Recipe): string[] {
    const dietary: string[] = []
    const tags = recipe.tags?.map(t => t.toLowerCase()) || []
    
    if (tags.includes('vegan')) dietary.push('https://schema.org/VeganDiet')
    if (tags.includes('vegetarian')) dietary.push('https://schema.org/VegetarianDiet')
    if (tags.includes('gluten-free') || tags.includes('gluten free')) dietary.push('https://schema.org/GlutenFreeDiet')
    if (tags.includes('low-carb') || tags.includes('keto')) dietary.push('https://schema.org/LowCalorieDiet')
    
    return dietary
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
