# Color Scheme System Guide

## Overview

Your portfolio now supports **7 different color schemes** that can be switched dynamically at runtime! All schemes are fully implemented and ready to use.

## Available Color Schemes

1. **⚡ Electric Purple & Neon Cyan** (Default)

   - Futuristic, high-energy, tech-forward
   - Primary: Purple shades
   - Accent: Neon cyan

2. **💎 Emerald Green & Gold**

   - Premium, sophisticated, growth-oriented
   - Primary: Emerald green
   - Accent: Gold

3. **🔥 Crimson Red & Amber**

   - Bold, passionate, high-impact
   - Primary: Crimson red
   - Accent: Amber

4. **🌊 Ocean Teal & Coral**

   - Fresh, modern, approachable
   - Primary: Teal
   - Accent: Coral

5. **🌌 Deep Indigo & Magenta**

   - Mysterious, creative, sophisticated
   - Primary: Indigo
   - Accent: Magenta

6. **⚫⚪ Monochrome with Neon Accent**

   - Minimalist, modern, focused
   - Primary: Grayscale
   - Accent: Neon green

7. **🌅 Sunset Orange & Deep Blue**
   - Warm, energetic, balanced
   - Primary: Orange
   - Accent: Deep blue

## How to Switch Color Schemes

1. **Via UI**: Click the palette icon (🎨) in the navbar to open the color scheme selector
2. **Via Code**: The selected scheme is saved in `localStorage` and persists across page reloads

## Technical Implementation

### Architecture

- **Color Scheme Config**: `lib/colorSchemes.ts` - Contains all 7 color scheme definitions
- **Context Provider**: `contexts/ColorSchemeContext.tsx` - Manages current scheme state
- **Selector Component**: `components/ColorSchemeSelector.tsx` - UI for switching schemes
- **CSS Variables**: Colors are applied via CSS variables for dynamic switching
- **Tailwind Integration**: Tailwind config uses CSS variables for `primary-*` and `accent-*` colors

### How It Works

1. ColorSchemeProvider initializes and loads saved scheme from localStorage
2. CSS variables are set on `:root` element for all color values
3. Tailwind classes like `bg-primary-500` automatically use the current scheme
4. Background colors are applied via inline styles using CSS variables
5. Selection is persisted in localStorage for next visit

### Adding a New Color Scheme

To add a new color scheme:

1. Open `lib/colorSchemes.ts`
2. Add a new entry to the `colorSchemes` object with:

   - `id`: unique identifier
   - `name`: display name
   - `emoji`: icon emoji
   - `description`: brief description
   - `primary`: 50-900 color scale
   - `accent`: 50-900 color scale
   - `background`: background color hex

3. Add the new `id` to the `ColorSchemeId` type union
4. The selector will automatically include it!

## Usage in Components

### Using Primary Colors

```tsx
// These automatically adapt to the current color scheme
<div className="bg-primary-500 text-white">Primary background</div>
<button className="border-primary-400">Primary border</button>
<h1 className="text-primary-600">Primary text</h1>
```

### Using Accent Colors

```tsx
<div className="bg-accent-500">Accent background</div>
<span className="text-accent-400">Accent text</span>
```

### Using Background Color

```tsx
<section style={{ backgroundColor: 'var(--color-background)' }}>
  Content
</section>
```

## Customization

### Changing Default Scheme

Edit `lib/colorSchemes.ts`:

```typescript
export const defaultColorScheme: ColorSchemeId = 'your-scheme-id';
```

### Modifying Scheme Colors

Edit the color values in `lib/colorSchemes.ts` for any scheme. Changes take effect immediately when that scheme is selected.

## Notes

- All color schemes maintain proper contrast ratios for accessibility
- Background colors are applied via inline styles to ensure proper rendering
- The system works seamlessly with your existing dark/light theme toggle
- Color scheme preference is saved per user in localStorage
