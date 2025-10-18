// 为所有食谱生成真实的可查看JPG图片
// 使用Canvas生成带有精美渐变和食物emoji的图片
const fs = require('fs');
const path = require('path');

// 检查是否已安装canvas库
let Canvas;
try {
  Canvas = require('canvas');
} catch (e) {
  console.log('⚠️  需要安装canvas库');
  console.log('📦 请运行: npm install canvas');
  console.log('');
  console.log('如果安装失败，请尝试:');
  console.log('1. Windows: 下载预编译版本或使用windows-build-tools');
  console.log('2. 使用备用方案: node generate-simple-images.js');
  process.exit(1);
}

const { createCanvas, registerFont } = Canvas;
const outputDir = path.join(__dirname, 'public', 'images', 'recipes');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 为不同食谱定义配色和图标
const recipeStyles = {
  // 鸡肉类 - 金黄色
  'air-fryer-chicken-breast': { colors: ['#FFD700', '#FFA500', '#FF8C00'], emoji: '🍗', name: '空气炸锅鸡胸肉' },
  'air-fryer-chicken-drumsticks': { colors: ['#FFD700', '#FFA500', '#FF8C00'], emoji: '🍗', name: '空气炸锅鸡腿' },
  'air-fryer-chicken-tenders': { colors: ['#FFD700', '#FFA500', '#FF8C00'], emoji: '🍗', name: '空气炸锅鸡柳' },
  'air-fryer-popcorn-chicken': { colors: ['#FFD700', '#FFA500', '#FF8C00'], emoji: '🍗', name: '空气炸锅爆米花鸡' },
  'crispy-chicken-wings': { colors: ['#FFD700', '#FFA500', '#FF8C00'], emoji: '🍗', name: '香脆鸡翅' },
  
  // 猪肉 - 粉红色
  'air-fryer-pork-chops': { colors: ['#FFB6C1', '#FF69B4', '#FF1493'], emoji: '🥩', name: '空气炸锅猪排' },
  'air-fryer-bacon': { colors: ['#FFB6C1', '#FF69B4', '#FF1493'], emoji: '🥓', name: '空气炸锅培根' },
  
  // 牛肉/羊肉 - 深红色
  'air-fryer-steak': { colors: ['#DC143C', '#B22222', '#8B0000'], emoji: '🥩', name: '空气炸锅牛排' },
  'air-fryer-lamb-chops': { colors: ['#DC143C', '#B22222', '#8B0000'], emoji: '🥩', name: '空气炸锅羊排' },
  
  // 海鲜 - 蓝色
  'air-fryer-shrimp': { colors: ['#87CEEB', '#4169E1', '#1E90FF'], emoji: '🦐', name: '空气炸锅虾' },
  'air-fryer-fish-tacos': { colors: ['#87CEEB', '#4169E1', '#1E90FF'], emoji: '🌮', name: '空气炸锅鱼肉卷' },
  'air-fryer-coconut-shrimp': { colors: ['#87CEEB', '#4169E1', '#1E90FF'], emoji: '🦐', name: '空气炸锅椰子虾' },
  'air-fryer-crab-cakes': { colors: ['#87CEEB', '#4169E1', '#1E90FF'], emoji: '🦀', name: '空气炸锅蟹饼' },
  'air-fryer-tilapia': { colors: ['#87CEEB', '#4169E1', '#1E90FF'], emoji: '🐟', name: '空气炸锅罗非鱼' },
  'crispy-salmon': { colors: ['#FFA07A', '#FF6347', '#FF4500'], emoji: '🐟', name: '香脆三文鱼' },
  
  // 蔬菜 - 绿色
  'air-fryer-broccoli': { colors: ['#90EE90', '#32CD32', '#228B22'], emoji: '🥦', name: '空气炸锅西兰花' },
  'air-fryer-brussels-sprouts': { colors: ['#90EE90', '#32CD32', '#228B22'], emoji: '🥬', name: '空气炸锅抱子甘蓝' },
  'air-fryer-cauliflower': { colors: ['#F5F5DC', '#DCDCDC', '#D3D3D3'], emoji: '🥦', name: '空气炸锅花菜' },
  'air-fryer-buffalo-cauliflower': { colors: ['#FF6347', '#FF4500', '#DC143C'], emoji: '🥦', name: '香辣花菜' },
  'air-fryer-corn-on-the-cob': { colors: ['#FFFF00', '#FFD700', '#FFA500'], emoji: '🌽', name: '空气炸锅玉米' },
  'roasted-vegetables': { colors: ['#90EE90', '#32CD32', '#228B22'], emoji: '🥕', name: '烤蔬菜' },
  
  // 土豆类 - 棕色/黄色
  'air-fryer-baked-potato': { colors: ['#DEB887', '#D2691E', '#8B4513'], emoji: '🥔', name: '空气炸锅烤土豆' },
  'french-fries': { colors: ['#FFD700', '#FFA500', '#FF8C00'], emoji: '🍟', name: '法式薯条' },
  'air-fryer-sweet-potato-fries': { colors: ['#FF8C42', '#FF6B35', '#FF4500'], emoji: '🍠', name: '红薯条' },
  'air-fryer-hash-browns': { colors: ['#DEB887', '#D2691E', '#8B4513'], emoji: '🥔', name: '薯饼' },
  
  // 小吃类 - 橙色
  'air-fryer-mozzarella-sticks': { colors: ['#FFA500', '#FF8C42', '#FF6B35'], emoji: '🧀', name: '芝士条' },
  'air-fryer-onion-rings': { colors: ['#FFA500', '#FF8C42', '#FF6B35'], emoji: '🧅', name: '洋葱圈' },
  'air-fryer-egg-rolls': { colors: ['#FFA500', '#FF8C42', '#FF6B35'], emoji: '🥟', name: '春卷' },
  'air-fryer-pizza-rolls': { colors: ['#FFA500', '#FF8C42', '#FF6B35'], emoji: '🍕', name: '披萨卷' },
  'air-fryer-empanadas': { colors: ['#FFA500', '#FF8C42', '#FF6B35'], emoji: '🥟', name: '肉馅饼' },
  'air-fryer-zucchini-fries': { colors: ['#90EE90', '#7CFC00', '#32CD32'], emoji: '🥒', name: '西葫芦条' },
  
  // 早餐 - 黄色/橙色
  'air-fryer-breakfast-burrito': { colors: ['#FFD700', '#FFA500', '#FF8C00'], emoji: '🌯', name: '早餐卷饼' },
  'air-fryer-cinnamon-rolls': { colors: ['#D2691E', '#CD853F', '#BC8F8F'], emoji: '🥐', name: '肉桂卷' },
  'air-fryer-donuts': { colors: ['#FFB6C1', '#FF69B4', '#FF1493'], emoji: '🍩', name: '甜甜圈' },
  
  // 甜点 - 粉色/紫色/棕色
  'air-fryer-chocolate-chip-cookies': { colors: ['#8B4513', '#A0522D', '#D2691E'], emoji: '🍪', name: '巧克力曲奇' },
  'air-fryer-cheesecake': { colors: ['#FFE4B5', '#FFDAB9', '#FFE4E1'], emoji: '🍰', name: '芝士蛋糕' },
  'air-fryer-banana-bread': { colors: ['#D2691E', '#CD853F', '#BC8F8F'], emoji: '🍌', name: '香蕉面包' },
  
  // 素食 - 绿色/棕色
  'air-fryer-falafel': { colors: ['#8FBC8F', '#6B8E23', '#556B2F'], emoji: '🧆', name: '中东炸豆丸' },
  'crispy-tofu': { colors: ['#F5DEB3', '#DEB887', '#D2B48C'], emoji: '🧈', name: '香脆豆腐' },
  
  // 其他
  'air-fryer-stuffed-peppers': { colors: ['#FF6347', '#FF4500', '#DC143C'], emoji: '🫑', name: '酿甜椒' },
  'air-fryer-turkey-meatballs': { colors: ['#CD853F', '#D2691E', '#8B4513'], emoji: '🧆', name: '火鸡肉丸' },
  'air-fryer-apple-chips': { colors: ['#DC143C', '#B22222', '#8B0000'], emoji: '🍎', name: '苹果脆片' },
};

function createBeautifulImage(recipeName, style) {
  const width = 1200;
  const height = 800;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // 创建精美的渐变背景
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, style.colors[0]);
  gradient.addColorStop(0.5, style.colors[1]);
  gradient.addColorStop(1, style.colors[2]);
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // 添加装饰性圆圈
  ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
  ctx.beginPath();
  ctx.arc(width * 0.5, height * 0.35, 180, 0, Math.PI * 2);
  ctx.fill();

  // 添加更多装饰圆圈
  ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
  ctx.beginPath();
  ctx.arc(width * 0.2, height * 0.2, 120, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(width * 0.8, height * 0.7, 100, 0, Math.PI * 2);
  ctx.fill();

  // 绘制emoji（大）
  ctx.font = 'bold 150px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = 'white';
  ctx.fillText(style.emoji, width * 0.5, height * 0.35);

  // 绘制标题
  ctx.font = 'bold 60px Arial';
  ctx.fillStyle = 'white';
  ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
  ctx.shadowBlur = 10;
  ctx.fillText('Air Fryer Recipe', width * 0.5, height * 0.6);

  // 绘制中文名称
  ctx.font = 'bold 42px Arial';
  ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
  ctx.fillText(style.name, width * 0.5, height * 0.68);

  // 底部装饰条
  ctx.shadowColor = 'transparent';
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  ctx.fillRect(0, height - 80, width, 80);

  // 底部文字
  ctx.font = '28px Arial';
  ctx.fillStyle = 'white';
  ctx.fillText('🍳 健康美味 · 快速简单 · 家庭必备', width * 0.5, height - 40);

  return canvas;
}

// 生成所有食谱的JPG图片
console.log('🎨 开始生成真实JPG图片...\n');

let count = 0;
const recipes = Object.keys(recipeStyles);

recipes.forEach(recipeName => {
  const style = recipeStyles[recipeName];
  
  try {
    const canvas = createBeautifulImage(recipeName, style);
    const buffer = canvas.toBuffer('image/jpeg', { quality: 0.9 });
    const outputPath = path.join(outputDir, `${recipeName}.jpg`);
    
    fs.writeFileSync(outputPath, buffer);
    count++;
    
    const fileSize = (buffer.length / 1024).toFixed(2);
    console.log(`✅ ${recipeName}.jpg - ${style.emoji} ${style.name} (${fileSize}KB)`);
  } catch (error) {
    console.log(`❌ 失败: ${recipeName} - ${error.message}`);
  }
});

console.log(`\n✅ 成功生成 ${count} 张真实JPG图片！`);
console.log(`📁 位置: ${outputDir}`);
console.log(`\n💡 提示: 这些是精美的占位图片，你可以稍后替换为真实食物照片`);
console.log(`📸 推荐图片来源: 花瓣网、昵图网、千图网、懒人图库`);

