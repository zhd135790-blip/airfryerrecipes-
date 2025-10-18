# Internationalization (i18n) Implementation Guide

This project now supports English and Chinese language switching!

## Features

✅ **Language Toggle**: Switch between English (EN) and Chinese (中文)
✅ **Persistent Selection**: Language preference saved in localStorage
✅ **Seamless Switching**: No page reload required
✅ **SEO Friendly**: Proper meta tags for both languages
✅ **Easy to Extend**: Simple translation dictionary structure

## How It Works

### 1. Language Context

Located in `src/contexts/LanguageContext.tsx`:
- Provides `language`, `setLanguage`, and `t()` (translate function)
- Manages language state with React Context
- Stores preference in localStorage
- Supports English (`en`) and Chinese (`zh`)

### 2. Translation Dictionary

All translations are defined in `LanguageContext.tsx`:

```typescript
const translations = {
  en: {
    'nav.home': 'Home',
    'nav.recipes': 'Recipes',
    // ... more translations
  },
  zh: {
    'nav.home': '首页',
    'nav.recipes': '食谱',
    // ... more translations
  },
}
```

### 3. Language Switcher Component

Located in `src/components/LanguageSwitcher.tsx`:
- Toggles between EN and ZH
- Styled with Tailwind CSS
- Shows active language with orange highlight

## Usage in Components

### Using the Translation Function

```tsx
'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function MyComponent() {
  const { t, language } = useLanguage()
  
  return (
    <div>
      <h1>{t('home.hero.title')}</h1>
      <p>{t('home.hero.subtitle')}</p>
    </div>
  )
}
```

### Checking Current Language

```tsx
const { language } = useLanguage()

if (language === 'zh') {
  // Show Chinese-specific content
} else {
  // Show English content
}
```

## Adding New Translations

### Step 1: Add Translation Keys

Edit `src/contexts/LanguageContext.tsx` and add to both dictionaries:

```typescript
const translations = {
  en: {
    // ... existing translations
    'new.key': 'English Text',
  },
  zh: {
    // ... existing translations
    'new.key': '中文文本',
  },
}
```

### Step 2: Use in Component

```tsx
<div>{t('new.key')}</div>
```

## Translation Key Naming Convention

Use dot notation for organization:

- `nav.xxx` - Navigation items
- `home.xxx` - Home page content
- `recipe.xxx` - Recipe-related text
- `category.xxx` - Category names
- `footer.xxx` - Footer content
- `common.xxx` - Common/shared text

## Current Translated Sections

✅ Header Navigation
✅ Home Page Hero
✅ Recipe Cards (metadata)
✅ Footer
✅ Common UI Elements

## TODO: Future Translations

- [ ] Recipe content (ingredients, instructions)
- [ ] Guide pages
- [ ] FAQ content
- [ ] About page
- [ ] Category descriptions
- [ ] Error messages
- [ ] Form labels and buttons

## Recipe Content Translation

For recipe content in markdown files, consider two approaches:

### Option 1: Separate Files (Recommended)

```
content/
  recipes/
    en/
      air-fryer-chicken.md
    zh/
      air-fryer-chicken.md
```

### Option 2: Bilingual in One File

Add both languages in frontmatter:

```yaml
---
title: Air Fryer Chicken
title_zh: 空气炸锅鸡肉
excerpt: Crispy and delicious...
excerpt_zh: 酥脆美味...
---
```

## Best Practices

1. **Keep Keys Descriptive**: Use clear, hierarchical keys
2. **Consistent Naming**: Follow the dot notation pattern
3. **No Hardcoded Text**: Always use translation keys
4. **Test Both Languages**: Check UI in both EN and ZH
5. **Length Consideration**: Chinese text is usually shorter

## Extending to More Languages

To add more languages (e.g., Spanish):

1. Add language to type definition:
```typescript
type Language = 'en' | 'zh' | 'es'
```

2. Add translation dictionary:
```typescript
const translations = {
  en: { ... },
  zh: { ... },
  es: { ... },  // Add Spanish
}
```

3. Update LanguageSwitcher component to include new option

## SEO Considerations

### Current Implementation

- Meta tags use English by default
- URL structure remains language-neutral

### Future Improvements

1. **Language-specific URLs**:
   - `/en/recipes/...`
   - `/zh/recipes/...`

2. **Hreflang Tags**:
```html
<link rel="alternate" hreflang="en" href="https://example.com/en/page" />
<link rel="alternate" hreflang="zh" href="https://example.com/zh/page" />
```

3. **Dynamic Meta Tags**:
Update meta description based on language

## Testing

### Manual Testing Checklist

- [ ] Language toggle works in header
- [ ] Language persists on page refresh
- [ ] All navigation items translate correctly
- [ ] No untranslated text appears
- [ ] UI layout works for both languages
- [ ] No console errors

### Test in Different Browsers

- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile browsers

## Troubleshooting

### Issue: Language doesn't persist

**Solution**: Check browser localStorage is enabled

### Issue: Translation key shows instead of text

**Solution**: Ensure translation key exists in both dictionaries

### Issue: Layout breaks in Chinese

**Solution**: Check CSS for fixed widths, use flexible layouts

### Issue: `useLanguage` hook error

**Solution**: Ensure component is wrapped in `<LanguageProvider>`

## Performance Considerations

- ✅ Translations loaded in memory (fast)
- ✅ No API calls for translations
- ✅ Client-side only (no SSR complexity)
- ✅ Minimal bundle size impact

## Example Component Update

**Before**:
```tsx
export default function Header() {
  return (
    <nav>
      <Link href="/recipes">All Recipes</Link>
      <Link href="/categories">Categories</Link>
    </nav>
  )
}
```

**After**:
```tsx
'use client'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Header() {
  const { t } = useLanguage()
  
  return (
    <nav>
      <Link href="/recipes">{t('nav.recipes')}</Link>
      <Link href="/categories">{t('nav.categories')}</Link>
      <LanguageSwitcher />
    </nav>
  )
}
```

## Documentation

- Language Context: `src/contexts/LanguageContext.tsx`
- Switcher Component: `src/components/LanguageSwitcher.tsx`
- Updated Header: `src/components/Header.tsx`
- Layout with Provider: `src/app/layout.tsx`

---

**Next Steps**:
1. Add translations for more pages
2. Translate recipe content
3. Add language-specific URLs
4. Implement hreflang tags for SEO
5. Add more languages (Spanish, French, etc.)

Happy translating! 🌍✨

