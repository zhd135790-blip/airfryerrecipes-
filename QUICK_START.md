# 快速开始指南

## 🚀 5分钟启动网站

### 步骤 1: 安装依赖

打开终端（CMD），进入项目目录：

```bash
cd C:\Users\admin\Desktop\airfryerrecipes

# 安装依赖
npm install
```

### 步骤 2: 启动开发服务器

```bash
npm run dev
```

访问: **http://localhost:3000**

✅ 完成！你的网站现在已经运行了。

---

## 📝 添加你的第一个食谱

### 1. 创建食谱文件

在 `content/recipes/` 创建一个新文件，例如 `my-recipe.md`

### 2. 复制这个模板

```markdown
---
title: 我的空气炸锅食谱
excerpt: 简短描述你的食谱，50-200个字符
mainImage: /images/recipes/my-recipe.jpg
category: chicken
tags: [easy, quick-meals]
prepTime: 15
cookTime: 20
servings: 4
difficulty: easy
date: 2024-10-13
---

## 额外说明

这里可以添加更多内容
```

### 3. 填写内容

**必填字段:**
- `title`: 食谱标题
- `excerpt`: 简短描述
- `category`: 分类（chicken/vegetables/desserts）
- `prepTime`: 准备时间（分钟）
- `cookTime`: 烹饪时间（分钟）
- `servings`: 份数
- `difficulty`: 难度（easy/medium/hard）
- `ingredients`: 食材列表
- `instructions`: 步骤说明

### 4. 查看效果

保存文件后，刷新浏览器即可看到新食谱！

---

## 🖼️ 添加图片

### 1. 准备图片

- 尺寸: 至少 1200x800px
- 格式: JPG 或 WebP
- 大小: 小于 500KB

### 2. 保存图片

将图片放到 `public/images/recipes/` 目录

### 3. 在食谱中引用

```yaml
mainImage: /images/recipes/my-recipe.jpg
```

---

## 💰 设置 Google AdSense（可选）

### 1. 创建 AdSense 账号

访问 https://adsense.google.com 并注册

### 2. 获取发布商 ID

格式类似: `ca-pub-1234567890123456`

### 3. 创建环境变量文件

在项目根目录创建 `.env.local` 文件：

```env
NEXT_PUBLIC_GOOGLE_ADSENSE_ID=ca-pub-your-actual-id
```

### 4. 重启服务器

```bash
# 按 Ctrl+C 停止
npm run dev
```

---

## 🚢 部署到线上

### 方法 1: Vercel（推荐，免费）

1. 注册 https://vercel.com
2. 连接 GitHub 仓库
3. 点击 Deploy
4. 完成！

### 方法 2: Netlify

1. 注册 https://netlify.com
2. 拖拽项目文件夹到 Netlify
3. 完成！

---

## 📈 SEO 检查清单

部署后，完成这些步骤提升 SEO：

- [ ] 提交网站到 [Google Search Console](https://search.google.com/search-console)
- [ ] 提交 sitemap: `your-domain.com/sitemap.xml`
- [ ] 设置 [Google Analytics](https://analytics.google.com)
- [ ] 确保所有图片都有 alt 文本
- [ ] 检查网站在移动端的显示

---

## ❓ 常见问题

### Q: 内容更改后没有显示？

**A**: 刷新浏览器（Ctrl+F5 强制刷新）

### Q: 图片不显示？

**A**: 检查：
1. 图片在 `public/images/` 目录
2. 路径以 `/` 开头
3. 文件名拼写正确

### Q: 如何添加新分类？

**A**: 在 `content/categories/` 创建新的 `.md` 文件

### Q: 如何修改网站颜色？

**A**: 编辑 `tailwind.config.js` 中的 `primary` 颜色

---

## 📞 需要帮助？

1. 查看 `README.md` 获取详细文档
2. 检查示例食谱文件了解格式
3. 查看 Next.js 文档: https://nextjs.org/docs

**祝你成功！🎉**

