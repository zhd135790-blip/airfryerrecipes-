'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'en' | 'zh'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translation dictionaries
const translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.recipes': 'Recipes',
    'nav.categories': 'Categories',
    'nav.guides': 'Guides',
    'nav.calculator': 'Calculator',
    'nav.about': 'About',
    'nav.faq': 'FAQ',
    
    // Home page
    'home.hero.title': 'Delicious Air Fryer Recipes',
    'home.hero.subtitle': 'Discover healthy, crispy, and easy recipes for your air fryer',
    'home.latest': 'Latest Recipes',
    'home.popular': 'Popular Recipes',
    'home.viewAll': 'View All Recipes',
    
    // Recipe card
    'recipe.prepTime': 'Prep',
    'recipe.cookTime': 'Cook',
    'recipe.servings': 'Servings',
    'recipe.difficulty': 'Difficulty',
    'recipe.easy': 'Easy',
    'recipe.medium': 'Medium',
    'recipe.hard': 'Hard',
    'recipe.readMore': 'Read Recipe',
    'recipe.minutes': 'min',
    
    // Recipe detail
    'recipe.ingredients': 'Ingredients',
    'recipe.instructions': 'Instructions',
    'recipe.nutrition': 'Nutrition Facts',
    'recipe.calories': 'Calories',
    'recipe.protein': 'Protein',
    'recipe.carbs': 'Carbs',
    'recipe.fat': 'Fat',
    'recipe.perServing': 'per serving',
    
    // Categories
    'category.appetizers': 'Appetizers & Snacks',
    'category.breakfast': 'Breakfast & Brunch',
    'category.desserts': 'Desserts',
    'category.meat': 'Meat & Poultry',
    'category.pastries': 'Pastries',
    'category.quickMeals': 'Quick Meals',
    'category.seafood': 'Seafood',
    'category.vegan': 'Vegan',
    'category.vegetables': 'Vegetables',
    
    // Footer
    'footer.description': 'Your ultimate destination for delicious and healthy air fryer recipes. Learn cooking tips, techniques, and discover new flavors!',
    'footer.quickLinks': 'Quick Links',
    'footer.categories': 'Categories',
    'footer.resources': 'Resources',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy Policy',
    'footer.copyright': '© 2024 Air Fryer Recipes. All rights reserved.',
    
    // Search & Filter
    'search.placeholder': 'Search recipes...',
    'filter.all': 'All',
    'filter.difficulty': 'Difficulty',
    'filter.category': 'Category',
    'filter.cookTime': 'Cook Time',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.notFound': 'Not Found',
    'common.backHome': 'Back to Home',
  },
  zh: {
    // Header
    'nav.home': '首页',
    'nav.recipes': '食谱',
    'nav.categories': '分类',
    'nav.guides': '指南',
    'nav.calculator': '计算器',
    'nav.about': '关于',
    'nav.faq': '常见问题',
    
    // Home page
    'home.hero.title': '美味的空气炸锅食谱',
    'home.hero.subtitle': '探索健康、酥脆、简单的空气炸锅食谱',
    'home.latest': '最新食谱',
    'home.popular': '热门食谱',
    'home.viewAll': '查看所有食谱',
    
    // Recipe card
    'recipe.prepTime': '准备',
    'recipe.cookTime': '烹饪',
    'recipe.servings': '份量',
    'recipe.difficulty': '难度',
    'recipe.easy': '简单',
    'recipe.medium': '中等',
    'recipe.hard': '困难',
    'recipe.readMore': '查看食谱',
    'recipe.minutes': '分钟',
    
    // Recipe detail
    'recipe.ingredients': '食材',
    'recipe.instructions': '步骤',
    'recipe.nutrition': '营养成分',
    'recipe.calories': '卡路里',
    'recipe.protein': '蛋白质',
    'recipe.carbs': '碳水化合物',
    'recipe.fat': '脂肪',
    'recipe.perServing': '每份',
    
    // Categories
    'category.appetizers': '开胃菜和小吃',
    'category.breakfast': '早餐和早午餐',
    'category.desserts': '甜点',
    'category.meat': '肉类和禽类',
    'category.pastries': '糕点',
    'category.quickMeals': '快手菜',
    'category.seafood': '海鲜',
    'category.vegan': '素食',
    'category.vegetables': '蔬菜',
    
    // Footer
    'footer.description': '您探索美味健康空气炸锅食谱的终极目的地。学习烹饪技巧、技术并发现新口味！',
    'footer.quickLinks': '快速链接',
    'footer.categories': '分类',
    'footer.resources': '资源',
    'footer.legal': '法律',
    'footer.privacy': '隐私政策',
    'footer.copyright': '© 2024 空气炸锅食谱。保留所有权利。',
    
    // Search & Filter
    'search.placeholder': '搜索食谱...',
    'filter.all': '全部',
    'filter.difficulty': '难度',
    'filter.category': '分类',
    'filter.cookTime': '烹饪时间',
    
    // Common
    'common.loading': '加载中...',
    'common.error': '错误',
    'common.notFound': '未找到',
    'common.backHome': '返回首页',
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')

  useEffect(() => {
    // Load language from localStorage
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'zh')) {
      setLanguageState(savedLanguage)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

