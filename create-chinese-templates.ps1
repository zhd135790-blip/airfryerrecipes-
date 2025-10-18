# 批量创建中文内容模板
# 此脚本为所有英文内容创建中文模板，需要手动翻译

Write-Host "正在创建中文内容模板..." -ForegroundColor Cyan
Write-Host ""

# 创建食谱的中文模板
$recipeCount = 0
Get-ChildItem "content\recipes\*.md" | ForEach-Object {
    $zhPath = "content\recipes-zh\$($_.Name)"
    
    if (-not (Test-Path $zhPath)) {
        $content = Get-Content $_.FullName -Raw
        
        # 添加翻译提示注释
        $header = @"
<!-- 
===========================================
⚠️  这是中文版本 - 需要翻译
===========================================
请翻译以下内容：
1. title（标题）
2. excerpt（简介）
3. tags（标签）
4. seoTitle和seoDescription
5. ingredients（食材列表）
6. instructions（步骤说明）
7. 正文内容（---之后的所有内容）

保持：
- prepTime, cookTime, servings, difficulty 等数字不变
- mainImage 路径不变
- nutritionFacts 数字不变
===========================================
-->

"@
        
        Set-Content $zhPath -Value ($header + $content)
        $recipeCount++
        Write-Host "✓ 创建: $($_.Name)" -ForegroundColor Green
    }
}

# 创建指南的中文模板
$guideCount = 0
Get-ChildItem "content\guides\*.md" | ForEach-Object {
    $zhPath = "content\guides-zh\$($_.Name)"
    
    if (-not (Test-Path $zhPath)) {
        $content = Get-Content $_.FullName -Raw
        $header = "<!-- ⚠️ 中文版本 - 需要完整翻译 -->`n`n"
        Set-Content $zhPath -Value ($header + $content)
        $guideCount++
        Write-Host "✓ 创建: guides/$($_.Name)" -ForegroundColor Green
    }
}

# 创建分类的中文模板
$categoryCount = 0
Get-ChildItem "content\categories\*.md" | ForEach-Object {
    $zhPath = "content\categories-zh\$($_.Name)"
    
    if (-not (Test-Path $zhPath)) {
        $content = Get-Content $_.FullName -Raw
        $header = "<!-- ⚠️ 中文版本 - 需要翻译标题和描述 -->`n`n"
        Set-Content $zhPath -Value ($header + $content)
        $categoryCount++
        Write-Host "✓ 创建: categories/$($_.Name)" -ForegroundColor Green
    }
}

# 创建集合的中文模板  
$collectionCount = 0
Get-ChildItem "content\collections\*.md" | ForEach-Object {
    $zhPath = "content\collections-zh\$($_.Name)"
    
    if (-not (Test-Path $zhPath)) {
        $content = Get-Content $_.FullName -Raw
        $header = "<!-- ⚠️ 中文版本 - 需要完整翻译 -->`n`n"
        Set-Content $zhPath -Value ($header + $content)
        $collectionCount++
        Write-Host "✓ 创建: collections/$($_.Name)" -ForegroundColor Green
    }
}

Write-Host ""
Write-Host "===================================" -ForegroundColor Cyan
Write-Host "✅ 模板创建完成！" -ForegroundColor Green
Write-Host "===================================" -ForegroundColor Cyan
Write-Host "食谱: $recipeCount 个" -ForegroundColor Yellow
Write-Host "指南: $guideCount 个" -ForegroundColor Yellow
Write-Host "分类: $categoryCount 个" -ForegroundColor Yellow
Write-Host "集合: $collectionCount 个" -ForegroundColor Yellow
Write-Host "总计: $($recipeCount + $guideCount + $categoryCount + $collectionCount) 个文件" -ForegroundColor Yellow
Write-Host ""
Write-Host "📝 下一步：" -ForegroundColor Cyan
Write-Host "1. 在 content/*-zh/ 目录中找到需要翻译的文件"
Write-Host "2. 打开文件，查看顶部的翻译说明"
Write-Host "3. 翻译标记的内容"
Write-Host "4. 刷新网站并切换到中文测试"
Write-Host ""
Write-Host "💡 提示：可以使用ChatGPT或DeepL帮助翻译" -ForegroundColor Yellow
Write-Host "    然后人工校对确保质量" -ForegroundColor Yellow
Write-Host ""

