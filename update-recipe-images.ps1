# Update all recipe images to use placeholder.com service
# This provides valid images without needing real files

Write-Host "Updating recipe images to use online placeholders..." -ForegroundColor Cyan

$recipeMapping = @{
    "air-fryer-chicken-breast" = "fried-chicken"
    "air-fryer-pork-chops" = "pork-chop"
    "air-fryer-steak" = "steak"
    "air-fryer-fish-tacos" = "tacos"
    "crispy-chicken-wings" = "chicken-wings"
    "french-fries" = "french-fries"
    "air-fryer-shrimp" = "shrimp"
    "air-fryer-salmon" = "salmon"
    "crispy-salmon" = "grilled-salmon"
}

$count = 0
Get-ChildItem "content\recipes\*.md" | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    $slug = $_.BaseName
    
    # Use placeholder.com with 1200x800 size
    $imageUrl = "https://via.placeholder.com/1200x800/ff6b35/ffffff?text=Air+Fryer+Recipe"
    
    # Replace image path
    $content = $content -replace 'mainImage: .*', "mainImage: $imageUrl"
    
    Set-Content -Path $_.FullName -Value $content
    $count++
    Write-Host "Updated: $($_.Name)" -ForegroundColor Green
}

Write-Host ""
Write-Host "Updated $count recipe images!" -ForegroundColor Green
Write-Host "All recipes now use valid placeholder images" -ForegroundColor Cyan

