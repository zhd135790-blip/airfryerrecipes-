# Air Fryer Recipes - SEO优化的内容网站

一个专注于空气炸锅食谱的纯前端网站，使用 Next.js 14、Markdown 内容管理和 Google AdSense 变现。

## ✨ 特点

- **纯前端架构**: 使用 Markdown 文件管理内容，无需数据库
- **SEO 优化**: 内置 metadata、结构化数据(JSON-LD)、sitemap 和 robots.txt
- **Google AdSense**: 预配置广告位，轻松变现
- **快速性能**: Next.js 14 App Router 和服务端组件
- **响应式设计**: 移动优先的 Tailwind CSS 设计
- **Recipe Schema**: 结构化数据支持，Google 搜索富文本摘要
- **图片优化**: Next.js Image 自动优化

## 📋 前置要求

- Node.js 18+ 和 npm
- 一个代码编辑器
- Google AdSense 账号（用于变现）

## 🚀 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 配置环境变量（可选）

创建 `.env.local` 文件：

```env
# Google AdSense（通过审核后添加）
NEXT_PUBLIC_GOOGLE_ADSENSE_ID=ca-pub-your-adsense-id
```

### 3. 启动开发服务器

```bash
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看网站。

## 📝 内容管理

### 目录结构

```
content/
├── categories/          # 分类定义
│   ├── chicken.md
│   ├── vegetables.md
│   └── desserts.md
└── recipes/            # 食谱内容
    ├── crispy-chicken-wings.md
    ├── roasted-vegetables.md
    └── french-fries.md
```

### 添加新分类

在 `content/categories/` 创建新的 `.md` 文件：

```markdown
---
title: Breakfast
description: Start your day right with these delicious air fryer breakfast recipes.
---
```

文件名将作为 URL slug（例如 `breakfast.md` -> `/categories/breakfast`）

### 添加新食谱

在 `content/recipes/` 创建新的 `.md` 文件：

```markdown
---
title: Air Fryer Bacon
excerpt: Perfectly crispy bacon with no mess! Quick and easy air fryer bacon in minutes.
mainImage: /images/recipes/bacon.jpg
category: breakfast
tags: [easy, quick-meals, keto-friendly]
prepTime: 2
cookTime: 10
servings: 4
difficulty: easy
date: 2024-10-13
seoTitle: Perfect Air Fryer Bacon - Crispy & Easy
seoDescription: Make the crispiest bacon in your air fryer in just 12 minutes!
ingredients:
  - 8 slices bacon
  - Optional: black pepper
instructions:
  - Preheat air fryer to 400°F.
  - Place bacon in a single layer in the basket.
  - Cook for 8-10 minutes, checking for desired crispiness.
  - Remove and place on paper towels to drain excess fat.
nutritionFacts:
  calories: 90
  protein: 6
  carbs: 0
  fat: 7
---

## 额外内容

在 frontmatter 后面可以添加额外的 Markdown 内容，会显示在食谱页面底部。

### 小贴士
- 提示1
- 提示2
```

## 🖼️ 图片管理

将食谱图片放在 `public/images/recipes/` 目录：

```
public/
└── images/
    └── recipes/
        ├── chicken-wings.jpg
        ├── roasted-vegetables.jpg
        └── french-fries.jpg
```

在食谱 Markdown 中引用：

```yaml
mainImage: /images/recipes/chicken-wings.jpg
```

**图片建议**:
- 最小尺寸: 1200x800px
- 格式: JPG 或 WebP
- 文件大小: 小于 500KB
- 高质量的食物摄影

## 💰 Google AdSense 设置

### 1. 申请 AdSense

1. 访问 https://adsense.google.com
2. 注册账号
3. 添加你的网站
4. 等待审核（通常需要优质内容和一定流量）

### 2. 配置广告

1. 获取发布商 ID（格式: `ca-pub-xxxxxxxxxx`）
2. 添加到 `.env.local`:
   ```env
   NEXT_PUBLIC_GOOGLE_ADSENSE_ID=ca-pub-your-adsense-id
   ```
3. 在 `src/components/AdUnit.tsx` 中更新广告位 ID

### 当前广告位置

- **首页**: 顶部横幅 + 每6个食谱后插入
- **食谱详情**: 内容顶部和底部
- **分类页面**: 顶部横幅 + 内联广告

## 🚀 部署

### 部署到 Vercel（推荐）

1. 推送代码到 GitHub
2. 在 Vercel 导入项目
3. 添加环境变量
4. 部署！

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### 更新域名

部署后，在以下文件中更新域名：
- `src/app/layout.tsx` - metadataBase URL
- `src/app/sitemap.ts` - baseUrl
- `src/app/robots.ts` - sitemap URL

## 📊 SEO 清单

- [x] 语义化 HTML 结构
- [x] Meta 标签（title, description, OG）
- [x] 结构化数据（Recipe schema）
- [x] XML Sitemap
- [x] Robots.txt
- [x] 移动端响应式
- [x] 快速加载（Next.js 优化）
- [x] 图片优化
- [ ] Google Search Console 设置
- [ ] Google Analytics 设置
- [ ] 提交 sitemap 到 Google

## 📈 SEO内容策略

### 关键词研究

专注于长尾关键词：
- "easy air fryer chicken recipes"
- "healthy air fryer recipes for beginners"
- "quick air fryer meals"
- "air fryer recipes for dinner"

### 内容计划

**优先创建的分类**:
- 鸡肉食谱 (Chicken)
- 蔬菜食谱 (Vegetables)
- 甜点 (Desserts)
- 开胃菜 (Appetizers)
- 早餐 (Breakfast)

**食谱类型**:
- 快手菜（30分钟内）
- 健康选项
- 儿童友好
- 批量烹饪

**指南文章**（在 `/guides` 创建）:
- 空气炸锅购买指南
- 温度转换对照表
- 清洁和保养
- 使用技巧

## 🛠️ 技术栈

- **框架**: Next.js 14 (App Router)
- **内容**: Markdown + gray-matter
- **样式**: Tailwind CSS
- **语言**: TypeScript
- **部署**: Vercel
- **变现**: Google AdSense

## 📝 内容写作技巧

### 食谱标题
- 包含 "Air Fryer" + 主要食材
- 添加描述词: Crispy, Easy, Healthy, Quick
- 例子: "Crispy Air Fryer Chicken Wings"

### 摘要 (Excerpt)
- 50-200 字符
- 突出卖点和好处
- 包含主关键词

### 说明 (Instructions)
- 清晰的步骤编号
- 每步一个动作
- 包含温度和时间

## 🐛 故障排除

### 内容不显示

确保:
- Markdown 文件在 `content/recipes/` 或 `content/categories/`
- Frontmatter 格式正确（以 `---` 开始和结束）
- 必填字段已填写

### 图片不显示

- 确保图片在 `public/images/` 目录
- 路径以 `/` 开头
- 检查文件名拼写

### AdSense 不显示

- 广告仅在生产环境显示
- 确保已通过 AdSense 审核
- 检查发布商 ID 是否正确

## 📄 许可

MIT License - 可自由用于个人项目！

---

**祝你的空气炸锅食谱网站成功！🍳**

需要帮助？欢迎提出问题。
