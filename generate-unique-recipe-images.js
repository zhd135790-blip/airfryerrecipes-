// 为每个食谱生成独特的SVG图片
const fs = require('fs');
const path = require('path');

const recipesDir = path.join(__dirname, 'content', 'recipes');
const outputDir = path.join(__dirname, 'public', 'images', 'recipes');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 为不同食谱定义不同的配色和图标
const recipeStyles = {
  // 鸡肉类 - 金黄色
  'air-fryer-chicken-breast': { colors: ['#FFB347', '#FF8C42'], emoji: '🍗', name: 'Chicken Breast' },
  'air-fryer-chicken-drumsticks': { colors: ['#FFB347', '#FF8C42'], emoji: '🍗', name: 'Chicken Drumsticks' },
  'air-fryer-chicken-tenders': { colors: ['#FFB347', '#FF8C42'], emoji: '🍗', name: 'Chicken Tenders' },
  'air-fryer-popcorn-chicken': { colors: ['#FFB347', '#FF8C42'], emoji: '🍗', name: 'Popcorn Chicken' },
  'crispy-chicken-wings': { colors: ['#FFB347', '#FF8C42'], emoji: '🍗', name: 'Chicken Wings' },
  
  // 猪肉 - 粉红色
  'air-fryer-pork-chops': { colors: ['#FF6B9D', '#FF1493'], emoji: '🥩', name: 'Pork Chops' },
  'air-fryer-bacon': { colors: ['#FF6B9D', '#FF1493'], emoji: '🥓', name: 'Bacon' },
  
  // 牛肉/羊肉 - 深红色
  'air-fryer-steak': { colors: ['#DC143C', '#8B0000'], emoji: '🥩', name: 'Steak' },
  'air-fryer-lamb-chops': { colors: ['#DC143C', '#8B0000'], emoji: '🥩', name: 'Lamb Chops' },
  
  // 海鲜 - 蓝色
  'air-fryer-shrimp': { colors: ['#4169E1', '#1E90FF'], emoji: '🦐', name: 'Shrimp' },
  'air-fryer-fish-tacos': { colors: ['#4169E1', '#1E90FF'], emoji: '🐟', name: 'Fish Tacos' },
  'air-fryer-coconut-shrimp': { colors: ['#4169E1', '#1E90FF'], emoji: '🦐', name: 'Coconut Shrimp' },
  'air-fryer-crab-cakes': { colors: ['#4169E1', '#1E90FF'], emoji: '🦀', name: 'Crab Cakes' },
  'air-fryer-tilapia': { colors: ['#4169E1', '#1E90FF'], emoji: '🐟', name: 'Tilapia' },
  'crispy-salmon': { colors: ['#FF6347', '#FF4500'], emoji: '🐟', name: 'Salmon' },
  
  // 蔬菜 - 绿色
  'air-fryer-broccoli': { colors: ['#32CD32', '#228B22'], emoji: '🥦', name: 'Broccoli' },
  'air-fryer-brussels-sprouts': { colors: ['#32CD32', '#228B22'], emoji: '🥬', name: 'Brussels Sprouts' },
  'air-fryer-cauliflower': { colors: ['#F5F5DC', '#DCDCDC'], emoji: '🥦', name: 'Cauliflower' },
  'air-fryer-buffalo-cauliflower': { colors: ['#FF6347', '#FF4500'], emoji: '🥦', name: 'Buffalo Cauliflower' },
  'air-fryer-corn-on-the-cob': { colors: ['#FFD700', '#FFA500'], emoji: '🌽', name: 'Corn' },
  'roasted-vegetables': { colors: ['#32CD32', '#228B22'], emoji: '🥕', name: 'Vegetables' },
  
  // 土豆类 - 棕色/黄色
  'air-fryer-baked-potato': { colors: ['#D2691E', '#8B4513'], emoji: '🥔', name: 'Baked Potato' },
  'french-fries': { colors: ['#FFD700', '#FFA500'], emoji: '🍟', name: 'French Fries' },
  'air-fryer-sweet-potato-fries': { colors: ['#FF8C42', '#FF6B35'], emoji: '🍠', name: 'Sweet Potato Fries' },
  'air-fryer-hash-browns': { colors: ['#D2691E', '#8B4513'], emoji: '🥔', name: 'Hash Browns' },
  
  // 小吃类 - 橙色
  'air-fryer-mozzarella-sticks': { colors: ['#FF6B35', '#FF8C42'], emoji: '🧀', name: 'Mozzarella Sticks' },
  'air-fryer-onion-rings': { colors: ['#FF6B35', '#FF8C42'], emoji: '🧅', name: 'Onion Rings' },
  'air-fryer-egg-rolls': { colors: ['#FF6B35', '#FF8C42'], emoji: '🥟', name: 'Egg Rolls' },
  'air-fryer-pizza-rolls': { colors: ['#FF6B35', '#FF8C42'], emoji: '🍕', name: 'Pizza Rolls' },
  'air-fryer-empanadas': { colors: ['#FF6B35', '#FF8C42'], emoji: '🥟', name: 'Empanadas' },
  'air-fryer-zucchini-fries': { colors: ['#90EE90', '#7CFC00'], emoji: '🥒', name: 'Zucchini Fries' },
  
  // 早餐 - 黄色/橙色
  'air-fryer-breakfast-burrito': { colors: ['#FFD700', '#FFA500'], emoji: '🌯', name: 'Breakfast Burrito' },
  'air-fryer-cinnamon-rolls': { colors: ['#D2691E', '#CD853F'], emoji: '🥐', name: 'Cinnamon Rolls' },
  'air-fryer-donuts': { colors: ['#FFB6C1', '#FF69B4'], emoji: '🍩', name: 'Donuts' },
  
  // 甜点 - 粉色/紫色
  'air-fryer-chocolate-chip-cookies': { colors: ['#8B4513', '#A0522D'], emoji: '🍪', name: 'Cookies' },
  'air-fryer-cheesecake': { colors: ['#FFE4B5', '#FFDAB9'], emoji: '🍰', name: 'Cheesecake' },
  'air-fryer-banana-bread': { colors: ['#D2691E', '#CD853F'], emoji: '🍌', name: 'Banana Bread' },
  
  // 素食 - 绿色/棕色
  'air-fryer-falafel': { colors: ['#8FBC8F', '#556B2F'], emoji: '🧆', name: 'Falafel' },
  'crispy-tofu': { colors: ['#F5DEB3', '#D2B48C'], emoji: '🧈', name: 'Crispy Tofu' },
  
  // 其他
  'air-fryer-stuffed-peppers': { colors: ['#FF6347', '#FF4500'], emoji: '🫑', name: 'Stuffed Peppers' },
  'air-fryer-turkey-meatballs': { colors: ['#CD853F', '#8B4513'], emoji: '🧆', name: 'Turkey Meatballs' },
  'air-fryer-apple-chips': { colors: ['#DC143C', '#8B0000'], emoji: '🍎', name: 'Apple Chips' },
};

function createUniqueSVG(recipeName, style) {
  const [color1, color2] = style.colors;
  const emoji = style.emoji;
  const displayName = style.name;
  
  return `<svg width="1200" height="800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad-${recipeName}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="1200" height="800" fill="url(#grad-${recipeName})"/>
  <circle cx="600" cy="320" r="140" fill="rgba(255,255,255,0.15)"/>
  <text x="600" y="360" font-family="Arial, sans-serif" font-size="120" fill="white" text-anchor="middle">${emoji}</text>
  <text x="600" y="500" font-family="Arial, sans-serif" font-size="52" font-weight="bold" fill="white" text-anchor="middle">Air Fryer</text>
  <text x="600" y="570" font-family="Arial, sans-serif" font-size="38" fill="white" text-anchor="middle" opacity="0.95">${displayName}</text>
  <rect x="0" y="740" width="1200" height="60" fill="rgba(0,0,0,0.25)"/>
  <text x="600" y="785" font-family="Arial, sans-serif" font-size="26" fill="white" text-anchor="middle" opacity="0.9">Healthy & Delicious Recipe</text>
</svg>`;
}

// 生成所有食谱的SVG
const recipeFiles = fs.readdirSync(recipesDir).filter(file => file.endsWith('.md'));
let count = 0;

recipeFiles.forEach(file => {
  const recipeName = file.replace('.md', '');
  const style = recipeStyles[recipeName] || {
    colors: ['#ff6b35', '#f7931e'],
    emoji: '🍳',
    name: recipeName.replace(/-/g, ' ').replace(/^./, str => str.toUpperCase())
  };
  
  const svgContent = createUniqueSVG(recipeName, style);
  const outputPath = path.join(outputDir, `${recipeName}.svg`);
  
  fs.writeFileSync(outputPath, svgContent);
  count++;
  console.log(`✓ Created: ${recipeName}.svg - ${style.emoji} ${style.name}`);
});

console.log(`\n✅ Successfully created ${count} unique SVG images!`);
console.log(`📁 Location: public/images/recipes/\n`);

