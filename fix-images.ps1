# Fix recipe images by updating to use a working placeholder path
# This updates all recipe markdown files to use the placeholder image

$recipeFiles = Get-ChildItem -Path "content\recipes\*.md"

foreach ($file in $recipeFiles) {
    $content = Get-Content $file.FullName -Raw
    
    # Replace image paths with placeholder
    $content = $content -replace 'mainImage: /images/recipes/.*\.jpg', 'mainImage: /images/placeholder-recipe.jpg'
    
    Set-Content -Path $file.FullName -Value $content
    Write-Host "Updated: $($file.Name)" -ForegroundColor Green
}

Write-Host "`nAll recipe images updated to use placeholder!" -ForegroundColor Cyan

