// 生成所有食谱的本地SVG占位图片
const fs = require('fs');
const path = require('path');

// 读取所有食谱文件
const recipesDir = path.join(__dirname, 'content', 'recipes');
const outputDir = path.join(__dirname, 'public', 'images', 'recipes');

// 确保输出目录存在
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// SVG模板
function createSVG(recipeName) {
  return `<svg width="1200" height="800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad-${recipeName}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#ff6b35;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#f7931e;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="1200" height="800" fill="url(#grad-${recipeName})"/>
  <circle cx="600" cy="300" r="120" fill="rgba(255,255,255,0.2)"/>
  <text x="600" y="320" font-family="Arial, sans-serif" font-size="100" fill="white" text-anchor="middle">🍳</text>
  <text x="600" y="480" font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="white" text-anchor="middle">Air Fryer</text>
  <text x="600" y="550" font-family="Arial, sans-serif" font-size="36" fill="white" text-anchor="middle" opacity="0.9">${recipeName.replace(/-/g, ' ').replace(/^./, str => str.toUpperCase())}</text>
  <rect x="0" y="750" width="1200" height="50" fill="rgba(0,0,0,0.3)"/>
  <text x="600" y="785" font-family="Arial, sans-serif" font-size="24" fill="white" text-anchor="middle">Healthy & Delicious Recipe</text>
</svg>`;
}

// 生成所有食谱的SVG图片
const recipeFiles = fs.readdirSync(recipesDir).filter(file => file.endsWith('.md'));
let count = 0;

recipeFiles.forEach(file => {
  const recipeName = file.replace('.md', '');
  const svgContent = createSVG(recipeName);
  const outputPath = path.join(outputDir, `${recipeName}.svg`);
  
  fs.writeFileSync(outputPath, svgContent);
  count++;
  console.log(`✓ Created: ${recipeName}.svg`);
});

console.log(`\n✅ Successfully created ${count} SVG images!`);
console.log(`📁 Location: public/images/recipes/\n`);

