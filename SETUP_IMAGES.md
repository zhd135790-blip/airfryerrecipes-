# How to Add Recipe Images

This guide will help you add images to your air fryer recipe website.

## Quick Start

### Option 1: Use Placeholder Images (Temporary)

All recipes are currently pointing to `/images/recipes/[recipe-name].jpg`. For now, they will fall back to `/images/placeholder-recipe.jpg` if the specific image doesn't exist.

### Option 2: Download Free Stock Photos

1. Visit free stock photo websites:
   - **Unsplash**: https://unsplash.com/s/photos/air-fryer
   - **Pexels**: https://www.pexels.com/search/air-fryer/
   - **Pixabay**: https://pixabay.com/images/search/air-fryer/

2. Search for specific recipes (e.g., "fried chicken", "french fries", "salmon")

3. Download high-quality images (minimum 1200x800px)

4. Rename to match recipe slug:
   ```
   air-fryer-chicken-breast.jpg
   air-fryer-steak.jpg
   french-fries.jpg
   ```

5. Place in `public/images/recipes/` directory

### Option 3: Use Your Own Photos

1. Cook the recipes and take photos
2. Use good lighting (natural light works best)
3. Edit for brightness and color
4. Resize to 1200x800px
5. Optimize file size (< 500KB)
6. Save with recipe slug name

### Option 4: Generate AI Images

Use AI image generators:
- **DALL-E**: https://openai.com/dall-e-2
- **Midjourney**: https://www.midjourney.com/
- **Stable Diffusion**: https://stablediffusion.com/

Example prompt: "Professional food photography of crispy golden air fryer chicken wings on a white plate, overhead shot, natural lighting"

## Batch Image Setup (PowerShell Script)

Create a file `download-images.ps1`:

```powershell
# Create recipes directory if it doesn't exist
$recipesDir = "public\images\recipes"
if (-not (Test-Path $recipesDir)) {
    New-Item -ItemType Directory -Path $recipesDir
}

# Copy placeholder for all recipes temporarily
$recipes = @(
    "air-fryer-chicken-breast", "air-fryer-pork-chops", "air-fryer-steak",
    "air-fryer-fish-tacos", "air-fryer-shrimp", "air-fryer-coconut-shrimp",
    "air-fryer-mozzarella-sticks", "air-fryer-onion-rings", "french-fries",
    "crispy-chicken-wings", "crispy-salmon", "crispy-tofu",
    # Add all other recipe slugs here
)

foreach ($recipe in $recipes) {
    $targetPath = "$recipesDir\$recipe.jpg"
    if (-not (Test-Path $targetPath)) {
        Copy-Item "public\images\placeholder-recipe.jpg" $targetPath
        Write-Host "Created placeholder for $recipe"
    }
}

Write-Host "✅ All recipe images set up with placeholders"
Write-Host "Replace them with actual photos from Unsplash, Pexels, or your own!"
```

Run with: `powershell .\download-images.ps1`

## Using Unsplash API (Automated)

For development, you can use Unsplash's API to fetch images dynamically:

```javascript
// Add to next.config.mjs
const config = {
  images: {
    domains: ['images.unsplash.com'],
  },
}
```

Then use URLs like:
```
https://images.unsplash.com/photo-[id]?auto=format&fit=crop&w=1200&q=80
```

## Image Optimization

### Using Next.js Image Component

The site already uses Next.js Image component which automatically optimizes images. Make sure images are used with:

```tsx
import Image from 'next/image'

<Image 
  src="/images/recipes/air-fryer-chicken-breast.jpg"
  alt="Crispy air fryer chicken breast"
  width={1200}
  height={800}
  priority={false}
/>
```

### Manual Optimization Tools

1. **TinyPNG** - https://tinypng.com/ (Reduce file size by 70%)
2. **Squoosh** - https://squoosh.app/ (Google's image optimizer)
3. **ImageOptim** - https://imageoptim.com/ (Mac app)

## Image Naming Convention

Always use kebab-case matching the recipe slug:

✅ Good:
- `air-fryer-chicken-breast.jpg`
- `crispy-salmon.jpg`
- `french-fries.jpg`

❌ Bad:
- `Chicken Breast.jpg`
- `air_fryer_salmon.jpg`
- `fries.JPG`

## Recommended Image Specs

| Property | Specification |
|----------|--------------|
| Format | JPG (photos), PNG (graphics) |
| Dimensions | 1200x800px minimum |
| Aspect Ratio | 3:2 or 4:3 |
| File Size | 200-500KB (after optimization) |
| DPI | 72 (for web) |
| Color Space | sRGB |

## SEO Tips for Images

1. **File naming**: Use descriptive names with keywords
2. **Alt text**: Always include in markdown
3. **File size**: Optimize for fast loading
4. **Dimensions**: Consistent sizing across site
5. **Format**: Use modern formats (WebP when possible)

## Need Help?

If you need specific images for recipes, consider:
1. Hiring a food photographer
2. Using Fiverr for budget options
3. Taking photos yourself with smartphone
4. Using AI image generation services

---

**Current Status**: 42 recipes created, all need images added to `public/images/recipes/` directory.

Replace placeholders with high-quality photos for the best user experience!

