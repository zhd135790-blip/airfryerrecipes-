// i18n content loader - loads content based on language
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { Recipe } from './recipes'

// Cache for i18n recipes
let i18nRecipesCache: { [key: string]: Recipe[] } = {}
let i18nCacheTimestamp: number = 0
const I18N_CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

export function getRecipesByLanguage(language: 'en' | 'zh'): Recipe[] {
  const now = Date.now()
  
  // Return cached data if still valid
  if (i18nRecipesCache[language] && (now - i18nCacheTimestamp) < I18N_CACHE_DURATION) {
    return i18nRecipesCache[language]
  }

  const recipesDir = language === 'zh' 
    ? path.join(process.cwd(), 'content/recipes-zh')
    : path.join(process.cwd(), 'content/recipes')

  // Check if language-specific directory exists
  if (!fs.existsSync(recipesDir)) {
    // Fallback to English if Chinese directory doesn't exist
    const recipes = getRecipesFromDir(path.join(process.cwd(), 'content/recipes'))
    i18nRecipesCache[language] = recipes
    i18nCacheTimestamp = now
    return recipes
  }

  const recipes = getRecipesFromDir(recipesDir)
  i18nRecipesCache[language] = recipes
  i18nCacheTimestamp = now
  return recipes
}

function getRecipesFromDir(directory: string): Recipe[] {
  if (!fs.existsSync(directory)) {
    return []
  }

  const fileNames = fs.readdirSync(directory)
  const recipes = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(directory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        content,
        title: data.title,
        excerpt: data.excerpt,
        mainImage: data.mainImage || '/images/placeholder-recipe.jpg',
        prepTime: data.prepTime,
        cookTime: data.cookTime,
        servings: data.servings,
        difficulty: data.difficulty,
        category: data.category,
        tags: data.tags || [],
        ingredients: data.ingredients || [],
        instructions: data.instructions || [],
        nutritionFacts: data.nutritionFacts,
        seoTitle: data.seoTitle,
        seoDescription: data.seoDescription,
        date: data.date || new Date().toISOString(),
      } as Recipe
    })

  return recipes.sort((a, b) => (a.date > b.date ? -1 : 1))
}

export function getRecipeBySlugAndLanguage(slug: string, language: 'en' | 'zh'): Recipe | null {
  try {
    const recipesDir = language === 'zh' 
      ? path.join(process.cwd(), 'content/recipes-zh')
      : path.join(process.cwd(), 'content/recipes')
    
    const fullPath = path.join(recipesDir, `${slug}.md`)
    
    // Try language-specific version first
    if (fs.existsSync(fullPath)) {
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        content,
        title: data.title,
        excerpt: data.excerpt,
        mainImage: data.mainImage || '/images/placeholder-recipe.jpg',
        prepTime: data.prepTime,
        cookTime: data.cookTime,
        servings: data.servings,
        difficulty: data.difficulty,
        category: data.category,
        tags: data.tags || [],
        ingredients: data.ingredients || [],
        instructions: data.instructions || [],
        nutritionFacts: data.nutritionFacts,
        seoTitle: data.seoTitle,
        seoDescription: data.seoDescription,
        date: data.date || new Date().toISOString(),
      } as Recipe
    }
    
    // Fallback to English version
    const enPath = path.join(process.cwd(), 'content/recipes', `${slug}.md`)
    if (fs.existsSync(enPath)) {
      const fileContents = fs.readFileSync(enPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        content,
        title: data.title,
        excerpt: data.excerpt,
        mainImage: data.mainImage || '/images/placeholder-recipe.jpg',
        prepTime: data.prepTime,
        cookTime: data.cookTime,
        servings: data.servings,
        difficulty: data.difficulty,
        category: data.category,
        tags: data.tags || [],
        ingredients: data.ingredients || [],
        instructions: data.instructions || [],
        nutritionFacts: data.nutritionFacts,
        seoTitle: data.seoTitle,
        seoDescription: data.seoDescription,
        date: data.date || new Date().toISOString(),
      } as Recipe
    }

    return null
  } catch {
    return null
  }
}

