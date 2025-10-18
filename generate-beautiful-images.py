# -*- coding: utf-8 -*-
"""
生成高质量的食谱图片
使用Python PIL (Pillow)库
"""

from PIL import Image, ImageDraw, ImageFont
import os

# 创建输出目录
output_dir = os.path.join('public', 'images', 'recipes')
os.makedirs(output_dir, exist_ok=True)

# 食谱样式配置
recipe_styles = {
    # 鸡肉类 - 金黄色
    'air-fryer-chicken-breast': {'colors': ['#FFD700', '#FFA500'], 'emoji': '🍗', 'name': '空气炸锅鸡胸肉'},
    'air-fryer-chicken-drumsticks': {'colors': ['#FFD700', '#FFA500'], 'emoji': '🍗', 'name': '空气炸锅鸡腿'},
    'air-fryer-chicken-tenders': {'colors': ['#FFD700', '#FFA500'], 'emoji': '🍗', 'name': '空气炸锅鸡柳'},
    'air-fryer-popcorn-chicken': {'colors': ['#FFD700', '#FFA500'], 'emoji': '🍗', 'name': '空气炸锅爆米花鸡'},
    'crispy-chicken-wings': {'colors': ['#FFD700', '#FFA500'], 'emoji': '🍗', 'name': '香脆鸡翅'},
    
    # 猪肉 - 粉红色
    'air-fryer-pork-chops': {'colors': ['#FFB6C1', '#FF69B4'], 'emoji': '🥩', 'name': '空气炸锅猪排'},
    'air-fryer-bacon': {'colors': ['#FFB6C1', '#FF69B4'], 'emoji': '🥓', 'name': '空气炸锅培根'},
    
    # 牛肉/羊肉 - 深红色
    'air-fryer-steak': {'colors': ['#DC143C', '#B22222'], 'emoji': '🥩', 'name': '空气炸锅牛排'},
    'air-fryer-lamb-chops': {'colors': ['#DC143C', '#B22222'], 'emoji': '🥩', 'name': '空气炸锅羊排'},
    
    # 海鲜 - 蓝色
    'air-fryer-shrimp': {'colors': ['#87CEEB', '#4169E1'], 'emoji': '🦐', 'name': '空气炸锅虾'},
    'air-fryer-fish-tacos': {'colors': ['#87CEEB', '#4169E1'], 'emoji': '🌮', 'name': '空气炸锅鱼肉卷'},
    'air-fryer-coconut-shrimp': {'colors': ['#87CEEB', '#4169E1'], 'emoji': '🦐', 'name': '空气炸锅椰子虾'},
    'air-fryer-crab-cakes': {'colors': ['#87CEEB', '#4169E1'], 'emoji': '🦀', 'name': '空气炸锅蟹饼'},
    'air-fryer-tilapia': {'colors': ['#87CEEB', '#4169E1'], 'emoji': '🐟', 'name': '空气炸锅罗非鱼'},
    'crispy-salmon': {'colors': ['#FFA07A', '#FF6347'], 'emoji': '🐟', 'name': '香脆三文鱼'},
    
    # 蔬菜 - 绿色
    'air-fryer-broccoli': {'colors': ['#90EE90', '#32CD32'], 'emoji': '🥦', 'name': '空气炸锅西兰花'},
    'air-fryer-brussels-sprouts': {'colors': ['#90EE90', '#32CD32'], 'emoji': '🥬', 'name': '空气炸锅抱子甘蓝'},
    'air-fryer-cauliflower': {'colors': ['#F5F5DC', '#DCDCDC'], 'emoji': '🥦', 'name': '空气炸锅花菜'},
    'air-fryer-buffalo-cauliflower': {'colors': ['#FF6347', '#FF4500'], 'emoji': '🥦', 'name': '香辣花菜'},
    'air-fryer-corn-on-the-cob': {'colors': ['#FFFF00', '#FFD700'], 'emoji': '🌽', 'name': '空气炸锅玉米'},
    'roasted-vegetables': {'colors': ['#90EE90', '#32CD32'], 'emoji': '🥕', 'name': '烤蔬菜'},
    
    # 土豆类 - 棕色/黄色
    'air-fryer-baked-potato': {'colors': ['#DEB887', '#D2691E'], 'emoji': '🥔', 'name': '空气炸锅烤土豆'},
    'french-fries': {'colors': ['#FFD700', '#FFA500'], 'emoji': '🍟', 'name': '法式薯条'},
    'air-fryer-sweet-potato-fries': {'colors': ['#FF8C42', '#FF6B35'], 'emoji': '🍠', 'name': '红薯条'},
    'air-fryer-hash-browns': {'colors': ['#DEB887', '#D2691E'], 'emoji': '🥔', 'name': '薯饼'},
    
    # 小吃类 - 橙色
    'air-fryer-mozzarella-sticks': {'colors': ['#FFA500', '#FF8C42'], 'emoji': '🧀', 'name': '芝士条'},
    'air-fryer-onion-rings': {'colors': ['#FFA500', '#FF8C42'], 'emoji': '🧅', 'name': '洋葱圈'},
    'air-fryer-egg-rolls': {'colors': ['#FFA500', '#FF8C42'], 'emoji': '🥟', 'name': '春卷'},
    'air-fryer-pizza-rolls': {'colors': ['#FFA500', '#FF8C42'], 'emoji': '🍕', 'name': '披萨卷'},
    'air-fryer-empanadas': {'colors': ['#FFA500', '#FF8C42'], 'emoji': '🥟', 'name': '肉馅饼'},
    'air-fryer-zucchini-fries': {'colors': ['#90EE90', '#7CFC00'], 'emoji': '🥒', 'name': '西葫芦条'},
    
    # 早餐 - 黄色/橙色
    'air-fryer-breakfast-burrito': {'colors': ['#FFD700', '#FFA500'], 'emoji': '🌯', 'name': '早餐卷饼'},
    'air-fryer-cinnamon-rolls': {'colors': ['#D2691E', '#CD853F'], 'emoji': '🥐', 'name': '肉桂卷'},
    'air-fryer-donuts': {'colors': ['#FFB6C1', '#FF69B4'], 'emoji': '🍩', 'name': '甜甜圈'},
    
    # 甜点 - 粉色/紫色/棕色
    'air-fryer-chocolate-chip-cookies': {'colors': ['#8B4513', '#A0522D'], 'emoji': '🍪', 'name': '巧克力曲奇'},
    'air-fryer-cheesecake': {'colors': ['#FFE4B5', '#FFDAB9'], 'emoji': '🍰', 'name': '芝士蛋糕'},
    'air-fryer-banana-bread': {'colors': ['#D2691E', '#CD853F'], 'emoji': '🍌', 'name': '香蕉面包'},
    
    # 素食 - 绿色/棕色
    'air-fryer-falafel': {'colors': ['#8FBC8F', '#6B8E23'], 'emoji': '🧆', 'name': '中东炸豆丸'},
    'crispy-tofu': {'colors': ['#F5DEB3', '#DEB887'], 'emoji': '🧈', 'name': '香脆豆腐'},
    
    # 其他
    'air-fryer-stuffed-peppers': {'colors': ['#FF6347', '#FF4500'], 'emoji': '🫑', 'name': '酿甜椒'},
    'air-fryer-turkey-meatballs': {'colors': ['#CD853F', '#D2691E'], 'emoji': '🧆', 'name': '火鸡肉丸'},
    'air-fryer-apple-chips': {'colors': ['#DC143C', '#B22222'], 'emoji': '🍎', 'name': '苹果脆片'},
}

def hex_to_rgb(hex_color):
    """将十六进制颜色转换为RGB"""
    hex_color = hex_color.lstrip('#')
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))

def interpolate_color(color1, color2, factor):
    """在两个颜色之间插值"""
    r1, g1, b1 = hex_to_rgb(color1)
    r2, g2, b2 = hex_to_rgb(color2)
    
    r = int(r1 + (r2 - r1) * factor)
    g = int(g1 + (g2 - g1) * factor)
    b = int(b1 + (b2 - b1) * factor)
    
    return (r, g, b)

def create_beautiful_image(recipe_name, style):
    """创建精美的渐变图片"""
    width, height = 1200, 800
    
    # 创建图像
    image = Image.new('RGB', (width, height))
    draw = ImageDraw.Draw(image)
    
    # 创建垂直渐变
    for y in range(height):
        factor = y / height
        color = interpolate_color(style['colors'][0], style['colors'][1], factor)
        draw.rectangle([(0, y), (width, y + 1)], fill=color)
    
    # 添加装饰性圆圈
    circle_color = (255, 255, 255, 25)  # 半透明白色
    overlay = Image.new('RGBA', (width, height), (0, 0, 0, 0))
    overlay_draw = ImageDraw.Draw(overlay)
    
    # 主圆圈
    overlay_draw.ellipse([420, 170, 780, 530], fill=circle_color)
    # 左上角小圆
    overlay_draw.ellipse([120, 80, 360, 320], fill=circle_color)
    # 右下角小圆
    overlay_draw.ellipse([840, 480, 1040, 680], fill=circle_color)
    
    # 合并装饰层
    image = Image.alpha_composite(image.convert('RGBA'), overlay).convert('RGB')
    draw = ImageDraw.Draw(image)
    
    # 尝试加载字体（如果失败则使用默认字体）
    try:
        # Windows中文字体
        emoji_font = ImageFont.truetype("seguiemj.ttf", 120)  # Emoji字体
        title_font = ImageFont.truetype("arial.ttf", 60)
        subtitle_font = ImageFont.truetype("msyh.ttf", 42)  # 微软雅黑
        footer_font = ImageFont.truetype("msyh.ttf", 24)
    except:
        # 使用默认字体
        emoji_font = ImageFont.load_default()
        title_font = ImageFont.load_default()
        subtitle_font = ImageFont.load_default()
        footer_font = ImageFont.load_default()
    
    # 绘制emoji（居中）
    emoji = style['emoji']
    try:
        emoji_bbox = draw.textbbox((0, 0), emoji, font=emoji_font)
        emoji_width = emoji_bbox[2] - emoji_bbox[0]
        emoji_x = (width - emoji_width) // 2
        draw.text((emoji_x, 220), emoji, fill='white', font=emoji_font)
    except:
        pass
    
    # 绘制标题
    title = "Air Fryer Recipe"
    title_bbox = draw.textbbox((0, 0), title, font=title_font)
    title_width = title_bbox[2] - title_bbox[0]
    title_x = (width - title_width) // 2
    draw.text((title_x, 440), title, fill='white', font=title_font)
    
    # 绘制中文名称
    name = style['name']
    subtitle_bbox = draw.textbbox((0, 0), name, font=subtitle_font)
    subtitle_width = subtitle_bbox[2] - subtitle_bbox[0]
    subtitle_x = (width - subtitle_width) // 2
    draw.text((subtitle_x, 520), name, fill='white', font=subtitle_font)
    
    # 底部装饰条
    draw.rectangle([(0, 720), (width, 800)], fill=(0, 0, 0, 64))
    
    # 底部文字
    footer = "🍳 健康美味 · 快速简单 · 家庭必备"
    footer_bbox = draw.textbbox((0, 0), footer, font=footer_font)
    footer_width = footer_bbox[2] - footer_bbox[0]
    footer_x = (width - footer_width) // 2
    draw.text((footer_x, 750), footer, fill='white', font=footer_font)
    
    return image

# 生成所有图片
print('🎨 开始生成高质量JPG图片...\n')

count = 0
total = len(recipe_styles)

for recipe_name, style in recipe_styles.items():
    try:
        image = create_beautiful_image(recipe_name, style)
        output_path = os.path.join(output_dir, f'{recipe_name}.jpg')
        
        # 保存为高质量JPG
        image.save(output_path, 'JPEG', quality=90, optimize=True)
        
        # 获取文件大小
        file_size = os.path.getsize(output_path) / 1024
        count += 1
        
        print(f'✅ [{count}/{total}] {recipe_name}.jpg - {style["emoji"]} {style["name"]} ({file_size:.2f}KB)')
    except Exception as e:
        print(f'❌ 失败: {recipe_name} - {str(e)}')

print(f'\n✅ 成功生成 {count} 张高质量JPG图片！')
print(f'📁 位置: {output_dir}')
print(f'\n💡 提示: 这些是精美的占位图片，你可以稍后替换为真实食物照片')
print(f'📸 推荐真实图片来源: 花瓣网、昵图网、Pixabay、Pexels')

