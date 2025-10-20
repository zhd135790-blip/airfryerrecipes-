// 网站配置
export const siteConfig = {
  // 网站基础 URL
  baseUrl: 'https://www.bestair-fryerrecipes.com',
  
  // 网站名称
  siteName: 'Best Air Fryer Recipes',
  
  // 联系邮箱
  email: 'info@bestair-fryerrecipes.com',
  privacyEmail: 'privacy@bestair-fryerrecipes.com',
  
  // Google Analytics
  googleAnalyticsId: 'G-HV679Y92QH',
  
  // 社交媒体链接（如需要可以添加）
  social: {
    twitter: '',
    facebook: '',
    instagram: '',
  },
} as const

// 生成完整 URL
export function getFullUrl(path: string = ''): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${siteConfig.baseUrl}${cleanPath}`
}

