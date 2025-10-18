# 双语内容实施指南

## 📚 内容结构

项目现在支持完整的中英文双语内容系统！

### 目录结构

```
content/
├── recipes/           # 英文食谱
│   ├── air-fryer-chicken-breast.md
│   └── ...
├── recipes-zh/        # 中文食谱
│   ├── air-fryer-chicken-breast.md
│   └── ...
├── guides/            # 英文指南
│   └── ...
├── guides-zh/         # 中文指南
│   └── ...
├── categories/        # 英文分类
│   └── ...
└── categories-zh/     # 中文分类
    └── ...
```

## 🌍 如何添加中文内容

### 方法1：手动创建（推荐用于重要内容）

1. 复制英文版本到对应的中文目录
2. 翻译所有文字内容
3. 保持frontmatter结构不变
4. 确保slug保持一致

示例：
```bash
# 复制英文食谱到中文目录
cp content/recipes/air-fryer-steak.md content/recipes-zh/

# 然后编辑中文版本，翻译所有内容
```

### 方法2：使用翻译脚本（批量处理）

创建 `translate-content.ps1`:

```powershell
# 这是一个模板脚本，需要手动翻译或使用API

$recipeFiles = Get-ChildItem "content\recipes\*.md"

foreach ($file in $recipeFiles) {
    $zhPath = "content\recipes-zh\$($file.Name)"
    
    if (-not (Test-Path $zhPath)) {
        # 复制文件到中文目录
        Copy-Item $file.FullName $zhPath
        Write-Host "Created Chinese version: $($file.Name)"
        Write-Host "Please translate: $zhPath" -ForegroundColor Yellow
    }
}
```

### 方法3：使用翻译API（自动化）

可以集成Google Translate API或DeepL API进行自动翻译：

```javascript
// translate-recipes.js
const fs = require('fs');
const matter = require('gray-matter');

// 使用翻译API自动翻译
async function translateRecipe(recipePath) {
  const content = fs.readFileSync(recipePath, 'utf8');
  const { data, content: body } = matter(content);
  
  // 翻译title, excerpt等字段
  // 使用翻译API...
  
  // 保存到recipes-zh目录
}
```

## 📝 中文内容模板

### 食谱模板（recipes-zh）

```markdown
---
title: 中文标题
excerpt: 中文简介
mainImage: /images/placeholder-recipe.jpg
category: 类别名称
tags: [中文标签1, 中文标签2]
prepTime: 10
cookTime: 20
servings: 4
difficulty: easy
date: 2024-10-13
seoTitle: SEO优化的中文标题
seoDescription: SEO优化的中文描述
ingredients:
  - 食材1
  - 食材2
instructions:
  - 步骤1
  - 步骤2
nutritionFacts:
  calories: 250
  protein: 45
  carbs: 2
  fat: 8
---

## 中文内容正文

详细的烹饪说明和技巧...
```

## 🔧 代码集成

### 在页面中使用双语内容

```tsx
'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { getRecipesByLanguage } from '@/lib/i18n-content'

export default function RecipesPage() {
  const { language } = useLanguage()
  const recipes = getRecipesByLanguage(language)
  
  return (
    <div>
      {recipes.map(recipe => (
        <RecipeCard key={recipe.slug} recipe={recipe} />
      ))}
    </div>
  )
}
```

## ✅ 翻译清单

### 优先级1：关键页面（必须）

- [ ] 首页 Hero 部分
- [ ] 关于页面
- [ ] FAQ页面
- [ ] 前10个热门食谱

### 优先级2：所有食谱（重要）

- [ ] 肉类和禽类（10个）
- [ ] 海鲜（6个）
- [ ] 蔬菜（9个）
- [ ] 开胃菜和小吃（10个）
- [ ] 早餐和早午餐（4个）
- [ ] 甜点（3个）

### 优先级3：指南内容（次要）

- [ ] 烹饪时间表
- [ ] 初学者指南
- [ ] 故障排除指南
- [ ] 转换计算器

### 优先级4：分类和集合（可选）

- [ ] 所有分类描述
- [ ] 集合页面内容

## 🚀 快速开始翻译

### 步骤1：创建目录结构

```powershell
# 创建中文内容目录
New-Item -ItemType Directory -Path "content\recipes-zh" -Force
New-Item -ItemType Directory -Path "content\guides-zh" -Force
New-Item -ItemType Directory -Path "content\categories-zh" -Force
New-Item -ItemType Directory -Path "content\collections-zh" -Force
```

### 步骤2：复制最重要的10个食谱

```powershell
# 复制热门食谱
$popularRecipes = @(
    "air-fryer-chicken-breast",
    "air-fryer-steak", 
    "french-fries",
    "crispy-chicken-wings",
    "air-fryer-salmon"
)

foreach ($recipe in $popularRecipes) {
    Copy-Item "content\recipes\$recipe.md" "content\recipes-zh\"
}
```

### 步骤3：逐个翻译

选择一个食谱，打开并翻译：
1. Title（标题）
2. Excerpt（简介）
3. Ingredients（食材）
4. Instructions（步骤）
5. 正文内容

### 步骤4：测试

```bash
# 运行开发服务器
npm run dev

# 访问网站，切换语言测试
http://localhost:3000
```

## 💡 翻译技巧

### 1. 烹饪术语

| 英文 | 中文 |
|------|------|
| Air Fryer | 空气炸锅 |
| Crispy | 酥脆 |
| Juicy | 多汁 |
| Tender | 嫩滑 |
| Golden brown | 金黄色 |
| Preheat | 预热 |
| Flip | 翻面 |
| Season | 调味 |

### 2. 计量单位

| 英文 | 中文 |
|------|------|
| tablespoon (tbsp) | 汤匙 |
| teaspoon (tsp) | 茶匙 |
| cup | 杯 |
| ounce (oz) | 盎司 |
| pound (lb) | 磅 |
| °F | 华氏度 |

### 3. SEO关键词

保持重要的关键词：
- "空气炸锅" (air fryer)
- "食谱" (recipes)
- "简单" (easy)
- "健康" (healthy)
- "快手" (quick)

## 📊 进度追踪

### 当前状态

- ✅ 双语系统架构完成
- ✅ 示例中文食谱创建（鸡胸肉）
- ⏳ 剩余41个食谱需要翻译
- ⏳ 7个指南需要翻译
- ⏳ 分类和集合需要翻译

### 预计工作量

- **每个食谱翻译**：15-20分钟
- **每个指南翻译**：30-45分钟
- **总计时间**：约15-20小时

## 🤖 自动化建议

### 选项1：使用GPT-4进行翻译

```python
# translate_recipes.py
import openai
import os

def translate_recipe(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    prompt = f"Translate this recipe to Chinese, keeping the markdown structure:\n\n{content}"
    
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[{"role": "user", "content": prompt}]
    )
    
    return response.choices[0].message.content
```

### 选项2：使用DeepL API

DeepL提供高质量翻译：
- 更准确的烹饪术语
- 保持专业性
- API集成简单

## 🎯 下一步行动

### 立即开始（5分钟）

1. 打开 `content/recipes-zh/air-fryer-chicken-breast.md`
2. 查看示例格式
3. 复制另一个食谱到 `recipes-zh/`
4. 开始翻译

### 本周目标（如果手动翻译）

- 完成10个最受欢迎的食谱
- 翻译首页和关于页面
- 翻译初学者指南

### 本月目标

- 完成所有42个食谱
- 完成所有指南
- 完成分类和集合

## 📞 需要帮助？

如果需要翻译服务：
1. **Fiverr** - 找专业翻译（$5-20/食谱）
2. **Upwork** - 雇佣译者
3. **本地译者** - 可能更了解烹饪术语
4. **AI翻译** - 快速但需要人工校对

---

**记住**：质量比速度重要！好的翻译会带来更好的用户体验和SEO效果。

开始翻译第一个食谱吧！🚀

