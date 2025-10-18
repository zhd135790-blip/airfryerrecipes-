import { NextRequest, NextResponse } from 'next/server'
import { getAllRecipes } from '@/lib/recipes'
import { getRecipesByLanguage } from '@/lib/i18n-content'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const language = searchParams.get('language') || 'en'
    
    let recipes
    if (language === 'zh') {
      recipes = getRecipesByLanguage('zh')
    } else {
      recipes = getAllRecipes()
    }
    
    return NextResponse.json(recipes)
  } catch (error) {
    console.error('Error fetching recipes:', error)
    return NextResponse.json({ error: 'Failed to fetch recipes' }, { status: 500 })
  }
}
