// 从Unsplash下载真实食物图片
const https = require('https');
const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, 'public', 'images', 'recipes');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 为每个食谱定义Unsplash搜索关键词
const recipeImageKeywords = {
  'air-fryer-chicken-breast': 'grilled-chicken-breast',
  'air-fryer-chicken-drumsticks': 'fried-chicken-legs',
  'air-fryer-chicken-tenders': 'chicken-tenders',
  'air-fryer-popcorn-chicken': 'popcorn-chicken',
  'crispy-chicken-wings': 'buffalo-chicken-wings',
  'air-fryer-pork-chops': 'grilled-pork-chop',
  'air-fryer-bacon': 'crispy-bacon',
  'air-fryer-steak': 'grilled-steak',
  'air-fryer-lamb-chops': 'lamb-chops',
  'air-fryer-shrimp': 'fried-shrimp',
  'air-fryer-fish-tacos': 'fish-tacos',
  'air-fryer-coconut-shrimp': 'coconut-shrimp',
  'air-fryer-crab-cakes': 'crab-cakes',
  'air-fryer-tilapia': 'grilled-fish',
  'crispy-salmon': 'grilled-salmon',
  'air-fryer-broccoli': 'roasted-broccoli',
  'air-fryer-brussels-sprouts': 'roasted-brussels-sprouts',
  'air-fryer-cauliflower': 'roasted-cauliflower',
  'air-fryer-buffalo-cauliflower': 'buffalo-cauliflower',
  'air-fryer-corn-on-the-cob': 'grilled-corn',
  'roasted-vegetables': 'roasted-vegetables',
  'air-fryer-baked-potato': 'baked-potato',
  'french-fries': 'french-fries',
  'air-fryer-sweet-potato-fries': 'sweet-potato-fries',
  'air-fryer-hash-browns': 'hash-browns',
  'air-fryer-mozzarella-sticks': 'mozzarella-sticks',
  'air-fryer-onion-rings': 'onion-rings',
  'air-fryer-egg-rolls': 'spring-rolls',
  'air-fryer-pizza-rolls': 'pizza-rolls',
  'air-fryer-empanadas': 'empanadas',
  'air-fryer-zucchini-fries': 'zucchini-fries',
  'air-fryer-breakfast-burrito': 'breakfast-burrito',
  'air-fryer-cinnamon-rolls': 'cinnamon-rolls',
  'air-fryer-donuts': 'donuts',
  'air-fryer-chocolate-chip-cookies': 'chocolate-chip-cookies',
  'air-fryer-cheesecake': 'cheesecake',
  'air-fryer-banana-bread': 'banana-bread',
  'air-fryer-falafel': 'falafel',
  'crispy-tofu': 'fried-tofu',
  'air-fryer-stuffed-peppers': 'stuffed-peppers',
  'air-fryer-turkey-meatballs': 'meatballs',
  'air-fryer-apple-chips': 'apple-chips',
};

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      } else {
        reject(new Error(`Failed to download: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

async function downloadAllImages() {
  console.log('🖼️  开始下载真实食物图片...\n');
  
  const recipes = Object.keys(recipeImageKeywords);
  let successCount = 0;
  let failCount = 0;
  
  for (const recipe of recipes) {
    const keyword = recipeImageKeywords[recipe];
    // 使用Unsplash Source API - 1200x800尺寸
    const url = `https://source.unsplash.com/1200x800/?food,${keyword}`;
    const filepath = path.join(outputDir, `${recipe}.jpg`);
    
    try {
      console.log(`⏳ 下载中: ${recipe}...`);
      await downloadImage(url, filepath);
      console.log(`✅ 成功: ${recipe}.jpg`);
      successCount++;
      
      // 添加延迟避免API限制
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.log(`❌ 失败: ${recipe} - ${error.message}`);
      failCount++;
    }
  }
  
  console.log(`\n✅ 下载完成！`);
  console.log(`成功: ${successCount} 张`);
  console.log(`失败: ${failCount} 张`);
  console.log(`\n📁 图片位置: public/images/recipes/`);
}

downloadAllImages().catch(console.error);

