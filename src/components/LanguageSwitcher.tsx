'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2 bg-gray-100 rounded-full p-1">
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
          language === 'en'
            ? 'bg-orange-500 text-white'
            : 'text-gray-600 hover:text-gray-900'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('zh')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
          language === 'zh'
            ? 'bg-orange-500 text-white'
            : 'text-gray-600 hover:text-gray-900'
        }`}
        aria-label="切换到中文"
      >
        中文
      </button>
    </div>
  )
}

