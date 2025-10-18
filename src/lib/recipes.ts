import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const recipesDirectory = path.join(process.cwd(), 'content/recipes')
const categoriesDirectory = path.join(process.cwd(), 'content/categories')

export interface Recipe {
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

export interface Category {
  slug: string
  title: string
  description: string
}

// Get all recipes
export function getAllRecipes(): Recipe[] {
  if (!fs.existsSync(recipesDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(recipesDirectory)
  const recipes = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(recipesDirectory, fileName)
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

// Get recipe by slug
export function getRecipeBySlug(slug: string): Recipe | null {
  try {
    const fullPath = path.join(recipesDirectory, `${slug}.md`)
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
  } catch {
    return null
  }
}

// Get recipes by category
export function getRecipesByCategory(category: string): Recipe[] {
  const allRecipes = getAllRecipes()
  return allRecipes.filter(recipe => recipe.category === category)
}

// Get all categories
export function getAllCategories(): Category[] {
  if (!fs.existsSync(categoriesDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(categoriesDirectory)
  const categories = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(categoriesDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)

      return {
        slug,
        title: data.title,
        description: data.description || '',
      } as Category
    })

  return categories.sort((a, b) => a.title.localeCompare(b.title))
}

// Get all recipe slugs (for static generation)
export function getAllRecipeSlugs(): string[] {
  if (!fs.existsSync(recipesDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(recipesDirectory)
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => fileName.replace(/\.md$/, ''))
}

// Get all category slugs
export function getAllCategorySlugs(): string[] {
  if (!fs.existsSync(categoriesDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(categoriesDirectory)
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => fileName.replace(/\.md$/, ''))
}

