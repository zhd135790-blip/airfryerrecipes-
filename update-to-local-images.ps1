# 更新所有食谱使用本地SVG图片

Write-Host "更新食谱使用本地SVG图片..." -ForegroundColor Cyan

$count = 0
Get-ChildItem "content\recipes\*.md" | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    $slug = $_.BaseName
    
    # 使用本地SVG图片
    $imagePath = "/images/recipes/$slug.svg"
    
    # 替换图片路径
    $content = $content -replace 'mainImage: .*', "mainImage: $imagePath"
    
    Set-Content -Path $_.FullName -Value $content
    $count++
    Write-Host "✓ 更新: $($_.Name)" -ForegroundColor Green
}

Write-Host ""
Write-Host "✅ 已更新 $count 个食谱!" -ForegroundColor Green
Write-Host "所有食谱现在使用本地SVG图片" -ForegroundColor Cyan

