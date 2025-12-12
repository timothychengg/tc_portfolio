# TC Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and clean UI design
- 🌙 Dark mode support
- 📱 Fully responsive
- ✨ Smooth animations with Framer Motion
- ⚡ Fast performance with Next.js
- 🎯 SEO optimized

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Update Personal Information

1. **Hero Section**: Edit `components/sections/Hero.tsx`
2. **About Section**: Edit `components/sections/About.tsx`
3. **Projects**: Edit the `projects` array in `components/sections/Projects.tsx`
4. **Experience**: Edit the `experiences` array in `components/sections/Experience.tsx`
5. **Contact**: Update email in `components/sections/Contact.tsx` and `components/Footer.tsx`
6. **Social Links**: Update links in `components/Footer.tsx`

### Styling

- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Color scheme: Modify the `primary` colors in `tailwind.config.ts`

## Build for Production

```bash
npm run build
npm start
```

## Deploy

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Deploy!

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

