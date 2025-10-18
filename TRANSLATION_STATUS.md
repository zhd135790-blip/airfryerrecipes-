# 翻译状态

## ✅ 已完成

1. **双语系统架构** - 完成
   - 中英文切换功能
   - 语言上下文管理
   - 翻译字典（160+键）

2. **图片问题** - 已修复
   - 所有食谱现在使用有效的占位图片
   - 刷新页面应该可以看到图片

3. **中文内容目录结构** - 完成
   - `content/recipes-zh/` (41个文件)
   - `content/guides-zh/` (3个文件)
   - `content/categories-zh/` (9个文件)
   - `content/collections-zh/` (5个文件)

## 📋 待翻译内容

### 总计：58个文件需要翻译

#### 食谱（41个）- 优先级：高
- [ ] air-fryer-chicken-breast.md ✅ **已完成示例**
- [ ] air-fryer-pork-chops.md
- [ ] air-fryer-steak.md
- [ ] air-fryer-fish-tacos.md
- [ ] crispy-chicken-wings.md
- [ ] french-fries.md
- [ ] ... 以及其他35个食谱

#### 指南（3个）- 优先级：中
- [ ] air-fryer-cooking-times-chart.md
- [ ] air-fryer-beginners-guide.md
- [ ] air-fryer-troubleshooting.md

#### 分类（9个）- 优先级：高
- [ ] appetizers-and-snacks.md
- [ ] breakfast-and-brunch.md
- [ ] desserts.md
- [ ] meat-and-poultry.md
- [ ] pastries.md
- [ ] quick-meals.md
- [ ] seafood.md
- [ ] vegan.md
- [ ] vegetables.md

#### 集合（5个）- 优先级：中
- [ ] best-air-fryer-recipes.md
- [ ] easy-air-fryer-recipes.md
- [ ] healthy-air-fryer-recipes.md
- [ ] budget-friendly-air-fryer-recipes.md
- [ ] air-fryer-meal-prep-recipes.md

## 🚀 快速翻译方法

### 方法1：使用AI辅助（最快）

```bash
# 使用ChatGPT或Claude
# 1. 复制英文文件内容
# 2. 提示词："请将以下空气炸锅食谱翻译成中文，保持markdown格式和结构不变："
# 3. 粘贴翻译后的内容到对应的-zh文件
# 4. 人工校对关键术语
```

### 方法2：批量使用翻译API

如果您有OpenAI API密钥，可以使用：

```python
# translate.py
import openai
import os

openai.api_key = "your-api-key"

def translate_file(input_path, output_path):
    with open(input_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[{
            "role": "user",
            "content": f"Translate this recipe to Chinese, keep markdown structure:\n\n{content}"
        }]
    )
    
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(response.choices[0].message.content)

# 批量处理
for file in os.listdir('content/recipes'):
    if file.endswith('.md'):
        translate_file(
            f'content/recipes/{file}',
            f'content/recipes-zh/{file}'
        )
```

### 方法3：手动翻译（最准确）

1. 打开 `content/recipes-zh/` 中的文件
2. 翻译以下部分：
   - `title:` 标题
   - `excerpt:` 简介
   - `tags:` 标签（保持关键词）
   - `seoTitle:` SEO标题
   - `seoDescription:` SEO描述
   - `ingredients:` 食材列表
   - `instructions:` 步骤说明
   - 正文内容
3. 保持不变：
   - `prepTime, cookTime, servings`
   - `mainImage`
   - `nutritionFacts` 数字
   - `category, difficulty`

## 📊 翻译进度

- **已翻译**: 1/58 (1.7%)
- **待翻译**: 57/58 (98.3%)

**预计工作量**:
- 每个食谱：15-20分钟
- 每个指南：30-45分钟
- **总计**：约15-20小时（手动）
- **使用AI**：约2-3小时+校对

## 🎯 推荐策略

### 第一阶段（今天）- 测试系统
1. ✅ 已完成：`air-fryer-chicken-breast.md`
2. 翻译2-3个热门食谱测试系统：
   - `french-fries.md`
   - `crispy-chicken-wings.md`
   - `air-fryer-steak.md`
3. 测试网站语言切换功能

### 第二阶段（本周）- 核心内容
1. 完成前10个最受欢迎食谱
2. 翻译所有分类描述
3. 翻译初学者指南

### 第三阶段（下周）- 完整覆盖
1. 完成所有41个食谱
2. 完成所有指南
3. 完成所有集合

## 🔧 测试翻译效果

```bash
# 1. 确保开发服务器运行
npm run dev

# 2. 访问 http://localhost:3000
# 3. 点击右上角语言切换按钮（EN/中文）
# 4. 浏览翻译后的内容
# 5. 检查是否有显示问题
```

## 💡 翻译质量检查清单

每个文件翻译后检查：
- [ ] 标题简洁明了
- [ ] 食材翻译准确（保留常见英文名）
- [ ] 步骤清晰易懂
- [ ] 烹饪术语正确
- [ ] SEO关键词优化
- [ ] 没有语法错误
- [ ] 格式正确（markdown）
- [ ] 数字和单位保留

## 📞 需要帮助？

**选项1：雇佣译者**
- Fiverr: $50-100 全部翻译
- Upwork: 专业译者
- 本地翻译服务

**选项2：使用翻译工具**
- DeepL Pro（推荐）
- Google Translate
- ChatGPT/Claude

**选项3：我来帮忙**
- 可以继续创建更多翻译内容
- 提供翻译脚本
- 质量检查

## 当前状态

✅ **图片显示** - 已修复
✅ **双语架构** - 完成
✅ **示例翻译** - 1个完成
⏳ **剩余翻译** - 57个文件

---

**下一步**: 
1. 刷新浏览器 (http://localhost:3000)
2. 测试语言切换功能
3. 查看示例中文食谱
4. 决定翻译策略（AI辅助 vs 手动）

