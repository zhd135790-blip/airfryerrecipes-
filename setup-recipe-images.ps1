# PowerShell script to set up recipe images
# This creates placeholder images for all recipes

$recipes = @(
    "air-fryer-chicken-breast",
    "air-fryer-pork-chops",
    "air-fryer-fish-tacos",
    "air-fryer-brussels-sprouts",
    "air-fryer-breakfast-burrito",
    "air-fryer-apple-chips",
    "air-fryer-steak",
    "air-fryer-coconut-shrimp",
    "air-fryer-sweet-potato-fries",
    "air-fryer-egg-rolls",
    "air-fryer-mozzarella-sticks",
    "air-fryer-onion-rings",
    "air-fryer-falafel",
    "air-fryer-crab-cakes",
    "air-fryer-baked-potato",
    "air-fryer-chocolate-chip-cookies",
    "air-fryer-turkey-meatballs",
    "air-fryer-pizza-rolls",
    "air-fryer-zucchini-fries",
    "air-fryer-corn-on-the-cob",
    "air-fryer-empanadas",
    "air-fryer-chicken-tenders",
    "air-fryer-hash-browns",
    "air-fryer-cheesecake",
    "air-fryer-buffalo-cauliflower",
    "air-fryer-lamb-chops",
    "air-fryer-tilapia",
    "air-fryer-popcorn-chicken",
    "air-fryer-stuffed-peppers",
    "air-fryer-banana-bread",
    "air-fryer-chicken-drumsticks",
    "air-fryer-cinnamon-rolls",
    "air-fryer-bacon",
    "air-fryer-broccoli",
    "air-fryer-cauliflower",
    "air-fryer-donuts",
    "air-fryer-shrimp",
    "crispy-chicken-wings",
    "crispy-salmon",
    "crispy-tofu",
    "french-fries",
    "roasted-vegetables"
)

Write-Host "🖼️  Setting up recipe images..." -ForegroundColor Cyan
Write-Host ""

$recipesDir = "public\images\recipes"
$placeholderPath = "public\images\placeholder-recipe.jpg"

# Check if placeholder exists
if (-not (Test-Path $placeholderPath)) {
    Write-Host "❌ Error: Placeholder image not found at $placeholderPath" -ForegroundColor Red
    exit 1
}

$count = 0
foreach ($recipe in $recipes) {
    $targetPath = "$recipesDir\$recipe.jpg"
    if (-not (Test-Path $targetPath)) {
        Copy-Item $placeholderPath $targetPath
        Write-Host "✅ Created: $recipe.jpg" -ForegroundColor Green
        $count++
    } else {
        Write-Host "⏭️  Skipped: $recipe.jpg (already exists)" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "🎉 Done! Created $count placeholder images" -ForegroundColor Green
Write-Host ""
Write-Host "📝 Next steps:" -ForegroundColor Cyan
Write-Host "1. Visit Unsplash, Pexels, or Pixabay to download free food photos"
Write-Host "2. Replace placeholder images with actual recipe photos"
Write-Host "3. Optimize images using TinyPNG or Squoosh"
Write-Host "4. See SETUP_IMAGES.md for detailed instructions"
Write-Host ""

