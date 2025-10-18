// 生成图片下载列表和说明文档
// 方便手动下载或使用下载工具批量下载
const fs = require('fs');
const path = require('path');

const recipes = {
  '鸡肉类': {
    'air-fryer-chicken-breast': { name: '空气炸锅鸡胸肉', keywords: ['鸡胸肉', '烤鸡胸', 'grilled chicken breast'] },
    'air-fryer-chicken-drumsticks': { name: '空气炸锅鸡腿', keywords: ['炸鸡腿', '鸡腿', 'fried chicken legs'] },
    'air-fryer-chicken-tenders': { name: '空气炸锅鸡柳', keywords: ['鸡柳', '鸡条', 'chicken tenders'] },
    'air-fryer-popcorn-chicken': { name: '空气炸锅爆米花鸡', keywords: ['爆米花鸡', '鸡米花', 'popcorn chicken'] },
    'crispy-chicken-wings': { name: '香脆鸡翅', keywords: ['鸡翅', '烤鸡翅', 'chicken wings'] },
  },
  '猪肉类': {
    'air-fryer-pork-chops': { name: '空气炸锅猪排', keywords: ['猪排', '烤猪排', 'pork chops'] },
    'air-fryer-bacon': { name: '空气炸锅培根', keywords: ['培根', '烤培根', 'bacon'] },
  },
  '牛肉/羊肉': {
    'air-fryer-steak': { name: '空气炸锅牛排', keywords: ['牛排', '烤牛排', 'steak'] },
    'air-fryer-lamb-chops': { name: '空气炸锅羊排', keywords: ['羊排', '烤羊排', 'lamb chops'] },
  },
  '海鲜类': {
    'air-fryer-shrimp': { name: '空气炸锅虾', keywords: ['炸虾', '虾', 'fried shrimp'] },
    'air-fryer-fish-tacos': { name: '空气炸锅鱼肉卷', keywords: ['鱼肉卷', '鱼tacos', 'fish tacos'] },
    'air-fryer-coconut-shrimp': { name: '空气炸锅椰子虾', keywords: ['椰子虾', '椰香虾', 'coconut shrimp'] },
    'air-fryer-crab-cakes': { name: '空气炸锅蟹饼', keywords: ['蟹饼', '蟹肉饼', 'crab cakes'] },
    'air-fryer-tilapia': { name: '空气炸锅罗非鱼', keywords: ['罗非鱼', '烤鱼', 'grilled fish'] },
    'crispy-salmon': { name: '香脆三文鱼', keywords: ['三文鱼', '烤三文鱼', 'salmon'] },
  },
  '蔬菜类': {
    'air-fryer-broccoli': { name: '空气炸锅西兰花', keywords: ['西兰花', '烤西兰花', 'roasted broccoli'] },
    'air-fryer-brussels-sprouts': { name: '空气炸锅抱子甘蓝', keywords: ['抱子甘蓝', '球芽甘蓝', 'brussels sprouts'] },
    'air-fryer-cauliflower': { name: '空气炸锅花菜', keywords: ['花菜', '花椰菜', 'cauliflower'] },
    'air-fryer-buffalo-cauliflower': { name: '香辣花菜', keywords: ['香辣花菜', '水牛城花菜', 'buffalo cauliflower'] },
    'air-fryer-corn-on-the-cob': { name: '空气炸锅玉米', keywords: ['烤玉米', '玉米', 'grilled corn'] },
    'roasted-vegetables': { name: '烤蔬菜', keywords: ['烤蔬菜', '混合蔬菜', 'roasted vegetables'] },
  },
  '土豆类': {
    'air-fryer-baked-potato': { name: '空气炸锅烤土豆', keywords: ['烤土豆', '烘土豆', 'baked potato'] },
    'french-fries': { name: '法式薯条', keywords: ['薯条', '炸薯条', 'french fries'] },
    'air-fryer-sweet-potato-fries': { name: '红薯条', keywords: ['红薯条', '地瓜条', 'sweet potato fries'] },
    'air-fryer-hash-browns': { name: '薯饼', keywords: ['薯饼', '土豆饼', 'hash browns'] },
  },
  '小吃类': {
    'air-fryer-mozzarella-sticks': { name: '芝士条', keywords: ['芝士条', '奶酪条', 'mozzarella sticks'] },
    'air-fryer-onion-rings': { name: '洋葱圈', keywords: ['洋葱圈', '炸洋葱圈', 'onion rings'] },
    'air-fryer-egg-rolls': { name: '春卷', keywords: ['春卷', '蛋卷', 'spring rolls'] },
    'air-fryer-pizza-rolls': { name: '披萨卷', keywords: ['披萨卷', '比萨卷', 'pizza rolls'] },
    'air-fryer-empanadas': { name: '肉馅饼', keywords: ['肉馅饼', '酥皮饼', 'empanadas'] },
    'air-fryer-zucchini-fries': { name: '西葫芦条', keywords: ['西葫芦条', '炸西葫芦', 'zucchini fries'] },
  },
  '早餐类': {
    'air-fryer-breakfast-burrito': { name: '早餐卷饼', keywords: ['早餐卷饼', '墨西哥卷饼', 'breakfast burrito'] },
    'air-fryer-cinnamon-rolls': { name: '肉桂卷', keywords: ['肉桂卷', '肉桂面包', 'cinnamon rolls'] },
    'air-fryer-donuts': { name: '甜甜圈', keywords: ['甜甜圈', '多纳圈', 'donuts'] },
  },
  '甜点类': {
    'air-fryer-chocolate-chip-cookies': { name: '巧克力曲奇', keywords: ['巧克力曲奇', '巧克力饼干', 'chocolate chip cookies'] },
    'air-fryer-cheesecake': { name: '芝士蛋糕', keywords: ['芝士蛋糕', '奶酪蛋糕', 'cheesecake'] },
    'air-fryer-banana-bread': { name: '香蕉面包', keywords: ['香蕉面包', '香蕉蛋糕', 'banana bread'] },
  },
  '素食类': {
    'air-fryer-falafel': { name: '中东炸豆丸', keywords: ['炸豆丸', '鹰嘴豆丸', 'falafel'] },
    'crispy-tofu': { name: '香脆豆腐', keywords: ['炸豆腐', '酥脆豆腐', 'crispy tofu'] },
  },
  '其他': {
    'air-fryer-stuffed-peppers': { name: '酿甜椒', keywords: ['酿甜椒', '填馅甜椒', 'stuffed peppers'] },
    'air-fryer-turkey-meatballs': { name: '火鸡肉丸', keywords: ['火鸡肉丸', '肉丸', 'turkey meatballs'] },
    'air-fryer-apple-chips': { name: '苹果脆片', keywords: ['苹果脆片', '苹果干', 'apple chips'] },
  },
};

// 生成Markdown下载指南
let markdown = `# 食谱图片下载指南

本文档包含所有42个食谱的图片下载方案。

## 🌐 推荐的国内图片网站

### 1. 花瓣网 (huaban.com)
- **网址**: https://huaban.com/
- **特点**: 国内最大的图片采集网站，大量美食图片
- **使用**: 直接搜索中文关键词，右键下载

### 2. 堆糖网 (duitang.com)  
- **网址**: https://www.duitang.com/
- **特点**: 女性向，精美生活图片
- **使用**: 搜索美食关键词，高清大图

### 3. 昵图网 (nipic.com)
- **网址**: https://www.nipic.com/
- **特点**: 共享素材网站
- **注意**: 部分图片需积分

### 4. 千图网 (58pic.com)
- **网址**: https://www.58pic.com/
- **特点**: 设计素材丰富
- **使用**: 每天有免费下载额度

### 5. Pixabay (国内可访问)
- **网址**: https://pixabay.com/
- **特点**: 免费商用，质量高
- **使用**: 用英文关键词搜索

### 6. Pexels (国内可访问)
- **网址**: https://www.pexels.com/
- **特点**: 免费高质量图片
- **使用**: 用英文关键词搜索

## 📋 下载清单

每个食谱需要下载一张 **1200x800像素** 以上的JPG图片，保存到 \`public/images/recipes/\` 目录。

---

`;

// 为每个分类生成下载信息
for (const [category, items] of Object.entries(recipes)) {
  markdown += `## ${category}\n\n`;
  
  for (const [slug, info] of Object.entries(items)) {
    markdown += `### ${info.name}\n`;
    markdown += `**文件名**: \`${slug}.jpg\`\n\n`;
    markdown += `**搜索关键词**:\n`;
    info.keywords.forEach(kw => {
      markdown += `- ${kw}\n`;
    });
    markdown += `\n**下载步骤**:\n`;
    markdown += `1. 访问花瓣网或Pixabay\n`;
    markdown += `2. 搜索: "${info.keywords[0]}" 或 "${info.keywords[2]}"\n`;
    markdown += `3. 选择一张食欲感强、清晰的图片\n`;
    markdown += `4. 下载并重命名为: \`${slug}.jpg\`\n`;
    markdown += `5. 保存到: \`public/images/recipes/${slug}.jpg\`\n\n`;
    markdown += `---\n\n`;
  }
}

// 添加批量下载技巧
markdown += `## 🚀 批量下载技巧

### 方案1: 使用浏览器扩展
1. 安装 "Image Downloader" 扩展
2. 在图片网站上批量选择
3. 一键下载所有图片

### 方案2: 使用下载工具
推荐工具:
- **IDM (Internet Download Manager)** - Windows
- **Downie** - Mac
- **Free Download Manager** - 跨平台

### 方案3: AI生成图片
使用AI工具生成真实食物图片:

1. **Midjourney** (https://midjourney.com)
   \`\`\`
   提示词示例: professional food photography of crispy air fryer chicken breast, 
   golden brown, on white plate, natural lighting, shallow depth of field
   \`\`\`

2. **DALL-E** (https://openai.com/dall-e-2)
   \`\`\`
   提示词示例: high quality food photograph of golden french fries 
   in air fryer basket, professional photography, appetizing
   \`\`\`

3. **Stable Diffusion** (本地运行)
   \`\`\`
   提示词示例: food photography, air fryer steak, 
   juicy and tender, restaurant quality, 4k, sharp focus
   \`\`\`

## 📝 图片规范

### 必须满足:
- ✅ 格式: JPG 或 PNG
- ✅ 最小尺寸: 1200 x 800 像素
- ✅ 最大文件大小: 500KB (使用TinyPNG压缩)
- ✅ 文件名: 必须完全匹配（如 \`air-fryer-bacon.jpg\`）

### 图片质量要求:
- 清晰、高清
- 色彩鲜艳，有食欲感
- 光线充足
- 构图美观
- 避免带水印

## 🎯 优先级下载

如果时间有限，优先下载这10个最热门的食谱图片:

1. ⭐ \`air-fryer-chicken-breast.jpg\` - 鸡胸肉
2. ⭐ \`crispy-chicken-wings.jpg\` - 鸡翅
3. ⭐ \`french-fries.jpg\` - 薯条
4. ⭐ \`air-fryer-steak.jpg\` - 牛排
5. ⭐ \`crispy-salmon.jpg\` - 三文鱼
6. ⭐ \`air-fryer-bacon.jpg\` - 培根
7. ⭐ \`air-fryer-shrimp.jpg\` - 虾
8. ⭐ \`air-fryer-mozzarella-sticks.jpg\` - 芝士条
9. ⭐ \`air-fryer-onion-rings.jpg\` - 洋葱圈
10. ⭐ \`air-fryer-chocolate-chip-cookies.jpg\` - 曲奇

## 💡 图片压缩工具

下载后使用这些工具压缩图片:

### 在线工具:
- **TinyPNG** (https://tinypng.com/) - 最推荐
- **Squoosh** (https://squoosh.app/) - Google开发
- **压缩图** (https://www.yasuotu.com/) - 国内站点

### 桌面工具:
- **ImageOptim** (Mac)
- **RIOT** (Windows)
- **XnConvert** (跨平台)

## ✅ 完成检查

所有图片下载后，运行以下命令检查:

\`\`\`bash
# 检查图片数量（应该是42张）
Get-ChildItem public/images/recipes/*.jpg | Measure-Object
\`\`\`

## 🆘 遇到问题?

### 问题1: 图片太大
**解决**: 使用TinyPNG压缩到500KB以下

### 问题2: 图片尺寸不够
**解决**: 重新下载更大尺寸的图片

### 问题3: 找不到合适的图片
**解决**: 尝试用英文关键词在Pixabay搜索

### 问题4: 下载速度慢
**解决**: 使用IDM等下载工具加速

---

**预计时间**: 
- 手动下载: 2-3小时
- 使用下载工具: 1-2小时
- AI生成: 30分钟-1小时

**建议**: 可以分批完成，先下载优先级高的10张，其余慢慢补充。

祝下载顺利！🎉
`;

// 保存Markdown文件
fs.writeFileSync('图片下载指南.md', markdown, 'utf-8');

// 生成CSV格式的下载清单（可导入Excel）
let csv = 'ID,类别,食谱名称,文件名,中文关键词,英文关键词,下载链接\n';
let id = 1;

for (const [category, items] of Object.entries(recipes)) {
  for (const [slug, info] of Object.entries(items)) {
    const huabanUrl = `https://huaban.com/search/?q=${encodeURIComponent(info.keywords[0])}`;
    const pixabayUrl = `https://pixabay.com/images/search/${info.keywords[2].replace(/ /g, '+')}`;
    
    csv += `${id},${category},${info.name},${slug}.jpg,${info.keywords[0]},${info.keywords[2]},"${huabanUrl} 或 ${pixabayUrl}"\n`;
    id++;
  }
}

fs.writeFileSync('图片下载清单.csv', csv, 'utf-8');

// 生成简单的HTML页面，包含所有搜索链接
let html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>食谱图片快速下载</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 1200px; margin: 0 auto; padding: 20px; background: #f5f5f5; }
        h1 { color: #333; text-align: center; }
        .category { background: white; margin: 20px 0; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .category h2 { color: #ff6b35; margin-top: 0; }
        .recipe { border-bottom: 1px solid #eee; padding: 15px 0; }
        .recipe:last-child { border-bottom: none; }
        .recipe-name { font-weight: bold; font-size: 18px; color: #333; }
        .recipe-filename { color: #666; font-family: monospace; margin: 5px 0; }
        .links { margin: 10px 0; }
        .links a { display: inline-block; margin-right: 15px; padding: 8px 16px; background: #ff6b35; color: white; text-decoration: none; border-radius: 4px; }
        .links a:hover { background: #ff8c42; }
        .instructions { background: #ffffcc; padding: 15px; border-radius: 5px; margin: 20px 0; }
    </style>
</head>
<body>
    <h1>🍳 空气炸锅食谱图片下载</h1>
    
    <div class="instructions">
        <h3>📝 使用说明</h3>
        <ol>
            <li>点击下方任意"花瓣网"或"Pixabay"按钮打开搜索页面</li>
            <li>选择一张清晰美观的食物图片</li>
            <li>右键保存图片，重命名为显示的文件名</li>
            <li>保存到项目的 <code>public/images/recipes/</code> 目录</li>
            <li>完成所有42张图片的下载</li>
        </ol>
        <p><strong>💡 提示</strong>: 建议用 Ctrl+点击 批量打开多个标签页，然后依次下载</p>
    </div>
`;

for (const [category, items] of Object.entries(recipes)) {
  html += `    <div class="category">\n        <h2>${category}</h2>\n`;
  
  for (const [slug, info] of Object.entries(items)) {
    const huabanUrl = `https://huaban.com/search/?q=${encodeURIComponent(info.keywords[0])}`;
    const pixabayUrl = `https://pixabay.com/images/search/${info.keywords[2].replace(/ /g, '+')}`;
    
    html += `        <div class="recipe">
            <div class="recipe-name">${info.name}</div>
            <div class="recipe-filename">文件名: ${slug}.jpg</div>
            <div class="links">
                <a href="${huabanUrl}" target="_blank">🌸 花瓣网搜索</a>
                <a href="${pixabayUrl}" target="_blank">🖼️ Pixabay搜索</a>
            </div>
        </div>\n`;
  }
  
  html += `    </div>\n`;
}

html += `</body>
</html>`;

fs.writeFileSync('图片下载工具.html', html, 'utf-8');

console.log('✅ 成功生成以下文件:\n');
console.log('📄 图片下载指南.md - 详细的下载说明文档');
console.log('📊 图片下载清单.csv - Excel格式清单');
console.log('🌐 图片下载工具.html - 可在浏览器中打开的下载工具\n');
console.log('💡 推荐使用 图片下载工具.html:');
console.log('   1. 双击打开文件');
console.log('   2. 点击按钮快速跳转到搜索页面');
console.log('   3. 下载图片并重命名');
console.log('   4. 保存到 public/images/recipes/ 目录\n');

