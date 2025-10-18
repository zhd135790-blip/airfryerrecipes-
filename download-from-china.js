// 从国内可访问的网站下载食物图片
// 使用Pixabay API（国内可访问）
const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, 'public', 'images', 'recipes');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Pixabay API配置（免费，国内可访问）
// 访问 https://pixabay.com/api/docs/ 获取免费API key
const PIXABAY_API_KEY = '你的_PIXABAY_API_KEY'; // 需要替换

// 食谱搜索关键词映射
const recipeKeywords = {
  'air-fryer-chicken-breast': 'grilled+chicken+breast',
  'air-fryer-chicken-drumsticks': 'fried+chicken+legs',
  'air-fryer-chicken-tenders': 'chicken+tenders',
  'air-fryer-popcorn-chicken': 'popcorn+chicken',
  'crispy-chicken-wings': 'chicken+wings',
  'air-fryer-pork-chops': 'pork+chop',
  'air-fryer-bacon': 'bacon',
  'air-fryer-steak': 'steak',
  'air-fryer-lamb-chops': 'lamb+chops',
  'air-fryer-shrimp': 'shrimp',
  'air-fryer-fish-tacos': 'fish+tacos',
  'air-fryer-coconut-shrimp': 'coconut+shrimp',
  'air-fryer-crab-cakes': 'crab+cakes',
  'air-fryer-tilapia': 'fish+fillet',
  'crispy-salmon': 'salmon',
  'air-fryer-broccoli': 'broccoli',
  'air-fryer-brussels-sprouts': 'brussels+sprouts',
  'air-fryer-cauliflower': 'cauliflower',
  'air-fryer-buffalo-cauliflower': 'cauliflower',
  'air-fryer-corn-on-the-cob': 'corn',
  'roasted-vegetables': 'vegetables',
  'air-fryer-baked-potato': 'potato',
  'french-fries': 'french+fries',
  'air-fryer-sweet-potato-fries': 'sweet+potato',
  'air-fryer-hash-browns': 'hash+browns',
  'air-fryer-mozzarella-sticks': 'mozzarella+sticks',
  'air-fryer-onion-rings': 'onion+rings',
  'air-fryer-egg-rolls': 'spring+rolls',
  'air-fryer-pizza-rolls': 'pizza',
  'air-fryer-empanadas': 'empanadas',
  'air-fryer-zucchini-fries': 'zucchini',
  'air-fryer-breakfast-burrito': 'burrito',
  'air-fryer-cinnamon-rolls': 'cinnamon+rolls',
  'air-fryer-donuts': 'donuts',
  'air-fryer-chocolate-chip-cookies': 'cookies',
  'air-fryer-cheesecake': 'cheesecake',
  'air-fryer-banana-bread': 'banana+bread',
  'air-fryer-falafel': 'falafel',
  'crispy-tofu': 'tofu',
  'air-fryer-stuffed-peppers': 'stuffed+peppers',
  'air-fryer-turkey-meatballs': 'meatballs',
  'air-fryer-apple-chips': 'apple+chips',
};

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(filepath);
    
    protocol.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      } else {
        reject(new Error(`状态码: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

function searchPixabay(keyword) {
  return new Promise((resolve, reject) => {
    const url = `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${keyword}&image_type=photo&category=food&min_width=1200&min_height=800&per_page=3`;
    
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.hits && json.hits.length > 0) {
            // 返回大尺寸图片URL
            resolve(json.hits[0].largeImageURL || json.hits[0].webformatURL);
          } else {
            reject(new Error('未找到图片'));
          }
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

async function downloadAllImages() {
  // 检查API key
  if (PIXABAY_API_KEY === '你的_PIXABAY_API_KEY') {
    console.log('❌ 错误: 需要配置Pixabay API Key\n');
    console.log('📝 获取步骤:');
    console.log('   1. 访问 https://pixabay.com/');
    console.log('   2. 注册免费账号');
    console.log('   3. 访问 https://pixabay.com/api/docs/');
    console.log('   4. 复制你的API key');
    console.log('   5. 在本文件中替换 PIXABAY_API_KEY 的值\n');
    console.log('💡 Pixabay免费版: 每小时100次请求，足够使用\n');
    
    // 显示备用方案
    console.log('🔄 备用方案:');
    console.log('   运行: node generate-download-list.js');
    console.log('   将生成一个包含所有图片下载链接的文件\n');
    return;
  }

  console.log('🖼️  开始从Pixabay下载图片...\n');
  
  const recipes = Object.keys(recipeKeywords);
  let successCount = 0;
  let failCount = 0;
  
  for (const recipe of recipes) {
    const keyword = recipeKeywords[recipe];
    const filepath = path.join(outputDir, `${recipe}.jpg`);
    
    try {
      console.log(`🔍 搜索: ${recipe}...`);
      const imageUrl = await searchPixabay(keyword);
      
      console.log(`⏳ 下载中...`);
      await downloadImage(imageUrl, filepath);
      
      const stats = fs.statSync(filepath);
      const sizeKB = (stats.size / 1024).toFixed(2);
      console.log(`✅ ${recipe}.jpg (${sizeKB}KB)\n`);
      successCount++;
      
      // 添加延迟避免API限制
      await new Promise(resolve => setTimeout(resolve, 2000));
    } catch (error) {
      console.log(`❌ 失败: ${recipe} - ${error.message}\n`);
      failCount++;
    }
  }
  
  console.log(`\n✅ 下载完成！`);
  console.log(`成功: ${successCount} 张`);
  console.log(`失败: ${failCount} 张`);
  console.log(`\n📁 图片位置: ${outputDir}`);
}

downloadAllImages().catch(console.error);

