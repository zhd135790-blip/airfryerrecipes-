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
    
    // Home page sections
    'home.bestRecipes': 'Best Air Fryer Recipes - Popular & Easy',
    'home.bestRecipesDesc': 'Discover our collection of easy air fryer recipes that are healthy, quick, and absolutely delicious. From air fryer salmon recipes to crispy chicken wings, we have the best air fryer recipes for every meal.',
    'home.chickenRecipes': 'Air Fryer Chicken Recipes',
    'home.chickenRecipesDesc': 'Perfect chicken breast and wings recipes',
    'home.chickenExamples': 'Air Fryer Chicken Breast Recipe\nAir Fryer Chicken Wings Recipe',
    'home.salmonRecipes': 'Air Fryer Salmon Recipes',
    'home.salmonRecipesDesc': 'Healthy and delicious salmon dishes',
    'home.salmonExamples': 'Salmon Air Fryer Recipe\nAir Fryer Salmon Recipe',
    'home.easyRecipes': 'Easy Air Fryer Recipes',
    'home.easyRecipesDesc': 'Simple recipes for beginners',
    'home.easyExamples': 'Air Fryer Bacon Recipe\nAir Fryer Broccoli Recipe',
    'home.healthyRecipes': 'Healthy Air Fryer Recipes',
    'home.healthyRecipesDesc': 'Nutritious meals with less oil',
    'home.healthyExamples': 'Air Fryer Cauliflower Recipes\nAir Fryer Shrimp Recipes',
    'home.whyAirFryer': 'Why Choose Air Fryer?',
    'home.whyAirFryerDesc': 'Discover the benefits that make air frying the healthiest and most convenient cooking method',
    'home.healthierMeals': 'Healthier Meals',
    'home.healthierMealsDesc': 'Use up to 75% less oil while maintaining that perfect crispy texture you love',
    'home.superFast': 'Super Fast',
    'home.superFastDesc': 'Cook meals 20-30% faster than traditional ovens. More time for what matters!',
    'home.easyToMaster': 'Easy to Master',
    'home.easyToMasterDesc': 'Simple recipes perfect for beginners and pros alike. No special skills needed!',
    
    // Recipes page
    'recipes.allRecipes': 'All Air Fryer Recipes',
    'recipes.exploreCollection': 'Explore our complete collection of {count}+ delicious air fryer recipes',
    'recipes.recipes': 'Recipes',
    'recipes.tested': 'Tested',
    'recipes.featuredCollection': 'FEATURED COLLECTION',
    'recipes.masterAirFryer': 'Master Your Air Fryer',
    'recipes.masterDesc': 'From crispy chicken to perfectly cooked salmon, discover techniques that will transform your cooking',
    'recipes.successRate': 'Success Rate',
    'recipes.avgTime': 'Avg. Time',
    'recipes.cantFind': "Can't Find What You're Looking For?",
    'recipes.cantFindDesc': "We're constantly adding new recipes! Check back regularly for the latest air fryer recipes.",
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
    
    // Home page sections
    'home.bestRecipes': '最佳空气炸锅食谱 - 热门且简单',
    'home.bestRecipesDesc': '探索我们收集的健康、快速、绝对美味的简单空气炸锅食谱。从空气炸锅三文鱼食谱到脆皮鸡翅，我们为每餐准备了最佳空气炸锅食谱。',
    'home.chickenRecipes': '空气炸锅鸡肉食谱',
    'home.chickenRecipesDesc': '完美的鸡胸肉和鸡翅食谱',
    'home.chickenExamples': '空气炸锅鸡胸肉食谱\n空气炸锅鸡翅食谱',
    'home.salmonRecipes': '空气炸锅三文鱼食谱',
    'home.salmonRecipesDesc': '健康美味的三文鱼菜肴',
    'home.salmonExamples': '三文鱼空气炸锅食谱\n空气炸锅三文鱼食谱',
    'home.easyRecipes': '简单空气炸锅食谱',
    'home.easyRecipesDesc': '适合初学者的简单食谱',
    'home.easyExamples': '空气炸锅培根食谱\n空气炸锅西兰花食谱',
    'home.healthyRecipes': '健康空气炸锅食谱',
    'home.healthyRecipesDesc': '少油营养的餐食',
    'home.healthyExamples': '空气炸锅花椰菜食谱\n空气炸锅虾食谱',
    'home.whyAirFryer': '为什么选择空气炸锅？',
    'home.whyAirFryerDesc': '发现使空气炸锅成为最健康、最便捷烹饪方法的优势',
    'home.healthierMeals': '更健康的餐食',
    'home.healthierMealsDesc': '使用少75%的油，同时保持您喜爱的完美酥脆口感',
    'home.superFast': '超级快速',
    'home.superFastDesc': '比传统烤箱快20-30%烹饪餐食。更多时间做重要的事！',
    'home.easyToMaster': '易于掌握',
    'home.easyToMasterDesc': '简单食谱完美适合初学者和专业人士。无需特殊技能！',
    
    // Recipes page
    'recipes.allRecipes': '所有空气炸锅食谱',
    'recipes.exploreCollection': '探索我们完整的{count}+个美味空气炸锅食谱收藏',
    'recipes.recipes': '食谱',
    'recipes.tested': '已测试',
    'recipes.featuredCollection': '特色收藏',
    'recipes.masterAirFryer': '掌握您的空气炸锅',
    'recipes.masterDesc': '从脆皮鸡肉到完美烹饪的三文鱼，发现将改变您烹饪技巧的技术',
    'recipes.successRate': '成功率',
    'recipes.avgTime': '平均时间',
    'recipes.cantFind': '找不到您要找的内容？',
    'recipes.cantFindDesc': '我们不断添加新食谱！请定期查看最新的空气炸锅食谱。',
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

