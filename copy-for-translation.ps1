# Simple script to copy English content to Chinese directories for translation

Write-Host "Creating Chinese content templates..." -ForegroundColor Cyan

# Copy recipes
$recipeCount = 0
Get-ChildItem "content\recipes\*.md" | ForEach-Object {
    $zhPath = "content\recipes-zh\$($_.Name)"
    if (-not (Test-Path $zhPath)) {
        Copy-Item $_.FullName $zhPath
        $recipeCount++
    }
}

# Copy guides
$guideCount = 0
Get-ChildItem "content\guides\*.md" | ForEach-Object {
    $zhPath = "content\guides-zh\$($_.Name)"
    if (-not (Test-Path $zhPath)) {
        Copy-Item $_.FullName $zhPath
        $guideCount++
    }
}

# Copy categories
$categoryCount = 0
Get-ChildItem "content\categories\*.md" | ForEach-Object {
    $zhPath = "content\categories-zh\$($_.Name)"
    if (-not (Test-Path $zhPath)) {
        Copy-Item $_.FullName $zhPath
        $categoryCount++
    }
}

# Copy collections
$collectionCount = 0
Get-ChildItem "content\collections\*.md" | ForEach-Object {
    $zhPath = "content\collections-zh\$($_.Name)"
    if (-not (Test-Path $zhPath)) {
        Copy-Item $_.FullName $zhPath
        $collectionCount++
    }
}

Write-Host ""
Write-Host "Templates created!" -ForegroundColor Green
Write-Host "Recipes: $recipeCount" -ForegroundColor Yellow
Write-Host "Guides: $guideCount" -ForegroundColor Yellow
Write-Host "Categories: $categoryCount" -ForegroundColor Yellow
Write-Host "Collections: $collectionCount" -ForegroundColor Yellow
Write-Host "Total: $($recipeCount + $guideCount + $categoryCount + $collectionCount)" -ForegroundColor Yellow
Write-Host ""
Write-Host "Next: Translate files in content/*-zh/ directories" -ForegroundColor Cyan

