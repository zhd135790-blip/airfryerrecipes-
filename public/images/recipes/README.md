# Recipe Images Guide

This directory contains images for all recipe pages.

## Image Requirements

- **Format**: JPG or PNG
- **Dimensions**: Minimum 1200x800 pixels (3:2 aspect ratio recommended)
- **File Size**: Under 500KB for optimal loading
- **Naming**: Use kebab-case matching recipe slug (e.g., `air-fryer-chicken-breast.jpg`)

## Free Stock Photo Sources

Use these websites to find high-quality, free food photography:

1. **Unsplash** (https://unsplash.com/s/photos/food)
   - Search: "air fryer [food name]"
   - License: Free to use

2. **Pexels** (https://www.pexels.com/search/food/)
   - Great variety of food photos
   - License: Free to use

3. **Pixabay** (https://pixabay.com/images/search/food/)
   - Large collection
   - License: Free to use

4. **Foodiesfeed** (https://www.foodiesfeed.com/)
   - Specialized in food photography
   - License: Free to use

## Required Images for Recipes

### Meat & Poultry
- air-fryer-chicken-breast.jpg
- air-fryer-pork-chops.jpg
- air-fryer-steak.jpg
- air-fryer-turkey-meatballs.jpg
- air-fryer-chicken-tenders.jpg
- air-fryer-lamb-chops.jpg
- air-fryer-popcorn-chicken.jpg
- air-fryer-chicken-drumsticks.jpg
- crispy-chicken-wings.jpg

### Seafood
- air-fryer-shrimp.jpg
- air-fryer-fish-tacos.jpg
- air-fryer-coconut-shrimp.jpg
- air-fryer-crab-cakes.jpg
- air-fryer-tilapia.jpg
- crispy-salmon.jpg

### Vegetables
- air-fryer-broccoli.jpg
- air-fryer-cauliflower.jpg
- air-fryer-brussels-sprouts.jpg
- air-fryer-sweet-potato-fries.jpg
- air-fryer-zucchini-fries.jpg
- air-fryer-corn-on-the-cob.jpg
- air-fryer-baked-potato.jpg
- roasted-vegetables.jpg

### Appetizers & Snacks
- air-fryer-mozzarella-sticks.jpg
- air-fryer-onion-rings.jpg
- air-fryer-egg-rolls.jpg
- air-fryer-pizza-rolls.jpg
- air-fryer-empanadas.jpg
- air-fryer-apple-chips.jpg
- french-fries.jpg

### Breakfast & Brunch
- air-fryer-breakfast-burrito.jpg
- air-fryer-hash-browns.jpg
- air-fryer-cinnamon-rolls.jpg
- air-fryer-bacon.jpg
- air-fryer-donuts.jpg

### Desserts
- air-fryer-chocolate-chip-cookies.jpg
- air-fryer-cheesecake.jpg
- air-fryer-banana-bread.jpg

### Vegan
- air-fryer-falafel.jpg
- air-fryer-buffalo-cauliflower.jpg
- crispy-tofu.jpg

### Quick Meals
- air-fryer-stuffed-peppers.jpg

## Quick Setup Script

Run this command to copy placeholder image for all recipes:
```bash
# Windows PowerShell
Get-ChildItem ..\..\content\recipes\*.md | ForEach-Object { Copy-Item placeholder-recipe.jpg "recipes\$($_.BaseName).jpg" }
```

## Image Optimization

Before adding images, optimize them using:
- https://tinypng.com/
- https://squoosh.app/
- ImageOptim (Mac)
- RIOT (Windows)

## Alt Text Best Practices

When adding images, ensure alt text in recipe markdown is descriptive:
- Good: "Crispy golden air fryer chicken wings on a white plate"
- Bad: "Chicken wings"

