// 备用方案：生成简单的Base64编码的小图片作为真实JPG
// 不需要任何额外依赖
const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, 'public', 'images', 'recipes');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 食谱列表
const recipes = [
  'air-fryer-chicken-breast',
  'air-fryer-chicken-drumsticks',
  'air-fryer-chicken-tenders',
  'air-fryer-popcorn-chicken',
  'crispy-chicken-wings',
  'air-fryer-pork-chops',
  'air-fryer-bacon',
  'air-fryer-steak',
  'air-fryer-lamb-chops',
  'air-fryer-shrimp',
  'air-fryer-fish-tacos',
  'air-fryer-coconut-shrimp',
  'air-fryer-crab-cakes',
  'air-fryer-tilapia',
  'crispy-salmon',
  'air-fryer-broccoli',
  'air-fryer-brussels-sprouts',
  'air-fryer-cauliflower',
  'air-fryer-buffalo-cauliflower',
  'air-fryer-corn-on-the-cob',
  'roasted-vegetables',
  'air-fryer-baked-potato',
  'french-fries',
  'air-fryer-sweet-potato-fries',
  'air-fryer-hash-browns',
  'air-fryer-mozzarella-sticks',
  'air-fryer-onion-rings',
  'air-fryer-egg-rolls',
  'air-fryer-pizza-rolls',
  'air-fryer-empanadas',
  'air-fryer-zucchini-fries',
  'air-fryer-breakfast-burrito',
  'air-fryer-cinnamon-rolls',
  'air-fryer-donuts',
  'air-fryer-chocolate-chip-cookies',
  'air-fryer-cheesecake',
  'air-fryer-banana-bread',
  'air-fryer-falafel',
  'crispy-tofu',
  'air-fryer-stuffed-peppers',
  'air-fryer-turkey-meatballs',
  'air-fryer-apple-chips',
];

// 一个简单的彩色JPG图片的base64编码（100x67像素，橙色渐变）
// 这是一个真实的JPG文件
const minimalJpgBase64 = '/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCABDAAoDAREAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAHxAAAgICAwEBAQAAAAAAAAAAAAECERIhAzFBUWFx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APn4+M9TBKOPEQXEZnDDFKNgOSAAACgAAAMFHRpAY8cbZpGCSVAAB//Z';

console.log('📝 开始生成简单JPG图片（临时占位）...\n');

let count = 0;

recipes.forEach(recipeName => {
  try {
    const outputPath = path.join(outputDir, `${recipeName}.jpg`);
    const buffer = Buffer.from(minimalJpgBase64, 'base64');
    
    fs.writeFileSync(outputPath, buffer);
    count++;
    console.log(`✅ ${recipeName}.jpg`);
  } catch (error) {
    console.log(`❌ 失败: ${recipeName} - ${error.message}`);
  }
});

console.log(`\n✅ 生成了 ${count} 个临时JPG图片`);
console.log(`📁 位置: ${outputDir}`);
console.log(`\n⚠️  这些是最小尺寸的临时图片`);
console.log(`\n📝 下一步: 使用以下方案替换为真实图片:`);
console.log(`   1. 运行 node download-from-china.js 下载网络图片`);
console.log(`   2. 手动从网站下载（见下方列表）`);
console.log(`   3. 使用AI工具生成`);

