# Code Organization & Index Structure

**Last Updated:** March 17, 2026

## Overview
This document outlines the code organization structure for the Bangkok Kunsthalle website, including the centralized index files for better code maintainability and cleaner imports.

---

## Directory Structure

```
/
├── components/
│   ├── index.ts           # Main components barrel export
│   ├── layout/
│   │   └── index.ts       # Layout components (Header, Footer, MenuOverlay)
│   ├── pages/
│   │   └── index.ts       # All page components
│   ├── search/
│   │   └── index.ts       # Search components
│   ├── ui/
│   │   └── index.ts       # UI components (custom + ShadCN)
│   └── figma/
│       └── ImageWithFallback.tsx (protected)
├── utils/
│   ├── index.ts           # Main utils barrel export
│   ├── siteConfig.ts      # Site-wide configuration
│   ├── translations.ts    # i18n translations
│   ├── languageContext.tsx
│   ├── types.ts
│   ├── exhibitionsDataNew.ts
│   ├── exhibitionHelpers.ts
│   ├── movingImageData.ts
│   ├── movingImageGalleryData.ts
│   ├── residencyData.ts
│   ├── residencyCreditData.ts
│   ├── detailContent.ts
│   ├── detailContentThaiData.ts
│   ├── dateStatusHelper.ts
│   ├── searchData.ts
│   ├── teamDataBilingual.ts
│   ├── pressDataBilingual.ts
│   └── mockDataBilingual.ts
└── styles/
    └── globals.css
```

---

## Index Files

### `/utils/index.ts`
Central export for all utility functions and data:
- **Configuration:** `siteConfig`, `getEmptyStateMessage`
- **Translation:** `translations`, `getTranslation`, `LanguageProvider`, `useLanguage`
- **Types:** `WPImage`, `WPScheduleItem`, `WPPost`
- **Data:** All exhibition, moving image, residency, team, press data
- **Helpers:** Date/status helpers, detail content getters
- **Search:** Search data

### `/components/index.ts`
Central export for all components:
- Re-exports from all subdirectories
- Excludes protected figma components

### `/components/layout/index.ts`
Layout components:
- `Header`
- `Footer`
- `MenuOverlay`

### `/components/pages/index.ts`
All page components organized by category:
- Main pages (HomePage, Home, LandingPage)
- About & Team (AboutLayout, AboutPage, TeamPage)
- Exhibitions & Events
- Moving Image
- Residency & Artists
- Blog & Posts
- Other pages

### `/components/search/index.ts`
Search-related components:
- `ExpandingSearch`
- `SearchDialog`

### `/components/ui/index.ts`
UI components:
- Custom components (BackToTop, HeroSlider, Logo, ParallaxHero, Reveal)
- All ShadCN components
- Utilities (use-mobile, utils)

---

## Import Best Practices

### ✅ Good (Using Index Files)
```typescript
// Import from main index
import { siteConfig, getEmptyStateMessage } from './utils';
import { Header, Footer } from './components/layout';
import { HomePage, ExhibitionsPage } from './components/pages';

// Import specific UI components
import { Button, Card } from './components/ui';
```

### ❌ Avoid (Direct Imports)
```typescript
// Don't import directly from deep paths
import { siteConfig } from './utils/siteConfig';
import { Header } from './components/layout/Header';
import { HomePage } from './components/pages/HomePage';
```

---

## Recent Cleanup Changes

### 1. **siteConfig.ts**
- ✅ Fixed inconsistent capitalization in English empty state messages
- ✅ All "Coming Soon" messages now use consistent title case
- ✅ Removed unused import (`getDetailContent`)

### 2. **exhibitionHelpers.ts**
- ✅ Removed unused import (`getDetailContent`)
- ✅ Added barrel export object for better organization
- ✅ All individual functions still exported for flexibility

### 3. **Created Index Files**
- ✅ `/utils/index.ts` - Central utils export
- ✅ `/components/index.ts` - Main components export
- ✅ `/components/layout/index.ts` - Layout components
- ✅ `/components/pages/index.ts` - Page components
- ✅ `/components/search/index.ts` - Search components
- ✅ `/components/ui/index.ts` - UI components

---

## Configuration Files

### Site Configuration (`/utils/siteConfig.ts`)
Centralized configuration for:
- **Menu visibility:** Toggle menu items on/off
- **Home anchors:** Control homepage anchor navigation
- **Section visibility:** Toggle submenu items and listing pages
- **Empty states:** Editable messages for empty states (bilingual)

### Helper Function
```typescript
getEmptyStateMessage(key: string, language: 'th' | 'en'): string
```

---

## Data Architecture

### Exhibitions
- **Data:** `exhibitionsDataNew.ts`
- **Helpers:** `exhibitionHelpers.ts`
  - `getUpcomingExhibitions()`
  - `getCurrentExhibitions()`
  - `getPastExhibitions()`

### Moving Image
- **Data:** `movingImageData.ts`
- **Gallery:** `movingImageGalleryData.ts`

### Residency
- **Data:** `residencyData.ts`
- **Credits:** `residencyCreditData.ts`

### Detail Content
- **English:** `detailContent.ts`
- **Thai:** `detailContentThaiData.ts`
- Exports: `getDetailContent()`, `getAllDetailSlugs()`

### Date & Status
- **Helper:** `dateStatusHelper.ts`
- Functions:
  - `determineStatus()`
  - `formatDateRange()`
  - `isUpcoming()`, `isCurrent()`, `isPast()`

---

## Guidelines Compliance

### Font Consistency
- ✅ Avoid Tailwind font-size classes (except Moving Image details with `text-2xl`)
- ✅ Avoid Tailwind font-weight classes
- ✅ Thai text uses `leading-[1.82em]`

### Date Format
- ✅ All dates use hyphen with spaces ( - ) instead of en-dash (–)

### Layout
- ✅ Header always above hero sections (not overlay)
- ✅ Hero sections use `mt-20` (mobile) and `md:mt-24` (desktop)
- ✅ Percentage-based margins: `px-[5%]`
- ✅ Right content uses 50% width

### Detail Pages
- ✅ All detail pages use dots (not thumbnails) for carousels
- ✅ Unified template: Title, Artist, Date, Curated by
- ✅ Consolidated format for all metadata

---

## Maintenance Notes

1. **When adding new utilities:**
   - Add to appropriate file in `/utils`
   - Export in `/utils/index.ts`

2. **When adding new components:**
   - Add to appropriate directory in `/components`
   - Export in respective `index.ts`

3. **When adding translations:**
   - Update both `en` and `th` in `/utils/translations.ts`

4. **When adding empty states:**
   - Update `/utils/siteConfig.ts` emptyStates object
   - Include both languages

5. **Protected Files:**
   - `/src/app/components/figma/ImageWithFallback.tsx` (do not modify)

---

## Status: ✅ Clean & Indexed

All code has been cleaned and properly indexed for:
- ✅ Consistent code style
- ✅ Removed unused imports
- ✅ Centralized exports via index files
- ✅ Better maintainability
- ✅ Cleaner import statements throughout the project
