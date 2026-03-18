# Bangkok Kunsthalle - Complete Project Index

**Last Updated:** March 17, 2026  
**Project Status:** ✅ Clean & Indexed

---

## 📚 Table of Contents

1. [Quick Links](#quick-links)
2. [Documentation Files](#documentation-files)
3. [Code Organization](#code-organization)
4. [Data Files](#data-files)
5. [Component Structure](#component-structure)
6. [Recent Updates](#recent-updates)

---

## 🔗 Quick Links

### Essential Documentation
- **[CODE_ORGANIZATION.md](./CODE_ORGANIZATION.md)** - Code structure and index files
- **[RECORDS_STATUS_SUMMARY.md](./RECORDS_STATUS_SUMMARY.md)** - Quick status overview
- **[RECORDS_STATUS_REPORT.md](./RECORDS_STATUS_REPORT.md)** - Detailed records breakdown
- **[Guidelines.md](./Guidelines.md)** - Design system guidelines

### Technical Documentation
- **[ARCHITECTURE_GUIDE.md](./ARCHITECTURE_GUIDE.md)** - System architecture
- **[AUTOMATIC_STATUS_SYSTEM.md](./AUTOMATIC_STATUS_SYSTEM.md)** - Status determination
- **[BILINGUAL_IMPLEMENTATION.md](./BILINGUAL_IMPLEMENTATION.md)** - i18n system
- **[DATA_ARCHITECTURE_DETAIL_LISTING.md](./DATA_ARCHITECTURE_DETAIL_LISTING.md)** - Data structure
- **[DETAIL_CONTENT_ARCHITECTURE.md](./DETAIL_CONTENT_ARCHITECTURE.md)** - Detail pages
- **[DETAIL_PAGE_CAROUSEL_IMPLEMENTATION.md](./DETAIL_PAGE_CAROUSEL_IMPLEMENTATION.md)** - Carousel system

### Maintenance Guides
- **[IMAGE_UPDATE_GUIDE.md](./IMAGE_UPDATE_GUIDE.md)** - How to update images
- **[SEARCH_INDEX_UPDATE.md](./SEARCH_INDEX_UPDATE.md)** - How to update search
- **[EXHIBITION_DATA_UPDATE.md](./EXHIBITION_DATA_UPDATE.md)** - How to update exhibitions

---

## 📄 Documentation Files

### Project Documentation (14 files)

| File | Purpose | Last Updated |
|------|---------|--------------|
| `INDEX.md` | This file - complete project index | March 17, 2026 |
| `CODE_ORGANIZATION.md` | Code structure & barrel exports | March 17, 2026 |
| `RECORDS_STATUS_SUMMARY.md` | Quick records status overview | March 17, 2026 |
| `RECORDS_STATUS_REPORT.md` | Detailed records analysis | March 17, 2026 |
| `ARCHITECTURE_GUIDE.md` | System architecture | - |
| `AUTOMATIC_STATUS_SYSTEM.md` | Auto status determination | - |
| `BILINGUAL_IMPLEMENTATION.md` | Thai/English i18n | - |
| `BILINGUAL_PROGRESS.md` | Translation progress | - |
| `DATA_ARCHITECTURE_DETAIL_LISTING.md` | Data structure | - |
| `DETAIL_CONTENT_ARCHITECTURE.md` | Detail pages | - |
| `DETAIL_PAGE_CAROUSEL_IMPLEMENTATION.md` | Carousel docs | - |
| `EXHIBITION_DATA_UPDATE.md` | Update guide | - |
| `IMAGE_UPDATE_GUIDE.md` | Image guide | - |
| `SEARCH_INDEX_UPDATE.md` | Search guide | - |

---

## 🗂️ Code Organization

### Utility Files (`/utils/`)

**Index File:** `/utils/index.ts` - Central export for all utilities

| File | Purpose | Exports |
|------|---------|---------|
| `siteConfig.ts` | Site-wide configuration | `siteConfig`, `getEmptyStateMessage()` |
| `translations.ts` | i18n translations (EN/TH) | `translations`, `getTranslation()` |
| `languageContext.tsx` | Language context provider | `LanguageProvider`, `useLanguage()` |
| `types.ts` | TypeScript interfaces | `WPImage`, `WPScheduleItem`, `WPPost` |
| `exhibitionsDataNew.ts` | 16 exhibitions data | `exhibitions`, `getExhibitionsWithStatus()` |
| `exhibitionHelpers.ts` | Exhibition utilities | `getCurrentExhibitions()`, etc. |
| `movingImageData.ts` | 6 moving image programs | `movingImagePrograms` |
| `movingImageGalleryData.ts` | Moving image gallery | Gallery data |
| `residencyData.ts` | 6 residency records | `residencyData` |
| `residencyCreditData.ts` | Residency credits | Credits data |
| `detailContent.ts` | English detail content | `getDetailContent()`, `getAllDetailSlugs()` |
| `detailContentThaiData.ts` | Thai detail content | `getDetailContentThai()`, etc. |
| `dateStatusHelper.ts` | Status calculation | `determineStatus()`, `formatDateRange()` |
| `searchData.ts` | Search index | `searchData` |
| `teamDataBilingual.ts` | Team data (EN/TH) | Team data |
| `pressDataBilingual.ts` | Press data (EN/TH) | Press data |
| `mockDataBilingual.ts` | Mock data | Mock data |
| `recordsAnalyzer.ts` | **NEW** - Status analyzer | `analyzeAllRecords()`, `printRecordsSummary()` |

### Component Files (`/components/`)

**Index File:** `/components/index.ts` - Central export for all components

#### Layout Components (`/components/layout/`)
- `Header.tsx` - Site header with navigation
- `Footer.tsx` - Site footer
- `MenuOverlay.tsx` - Mobile menu overlay

#### Page Components (`/components/pages/`)
**Index File:** `/components/pages/index.ts`

| Category | Components |
|----------|------------|
| **Main** | `HomePage`, `Home`, `LandingPage` |
| **About** | `AboutLayout`, `AboutPage`, `TeamPage` |
| **Exhibitions** | `ExhibitionsPage`, `ExhibitionDetailPage` |
| **Activities** | `ActivitiesPage`, `ActivityDetailPage` |
| **Moving Image** | `MovingImagePage`, `MovingImageDetailPage` |
| **Residency** | `ResidencyPage`, `ArtistDetailPage` |
| **Blog** | `BlogPage`, `BlogDetailPage`, `PostPage` |
| **Other** | `VisitPage`, `ContactPage`, `ShopPage`, `ArchivesPage`, `EventPage`, `KhaoYaiPage`, `PressPage`, `SupportPage`, `HiddenAssetsPage` |
| **Admin** | `RecordsStatusPage` - **NEW** |

#### UI Components (`/components/ui/`)
**Index File:** `/components/ui/index.ts`

- **Custom:** `BackToTop`, `HeroSlider`, `Logo`, `ParallaxHero`, `Reveal`
- **ShadCN:** All ShadCN UI components (accordion, alert, button, card, etc.)

#### Search Components (`/components/search/`)
- `ExpandingSearch.tsx`
- `SearchDialog.tsx`

---

## 📊 Data Files

### Records Summary

| Category | File | Count | Status Types |
|----------|------|-------|--------------|
| **Exhibitions** | `exhibitionsDataNew.ts` | 16 | Auto-calculated |
| **Moving Image** | `movingImageData.ts` | 6 | Auto-calculated |
| **Residency** | `residencyData.ts` | 6 | Auto-calculated |
| **TOTAL** | - | **28** | - |

### Data Structure

```typescript
// Exhibitions
interface Exhibition {
  id: string;
  slug: string;
  title: { en: string; th: string; };
  artist: { en: string; th: string; };
  curator: { en: string; th: string; };
  fromDate: string;
  toDate: string;
  dateDisplay: { en: string; th: string; };
  year: string;
  featuredImage?: string;
  gallery?: string[];
  tags?: string;
}

// With computed status
interface ExhibitionWithStatus extends Exhibition {
  status: 'upcoming' | 'current' | 'past';
}
```

---

## 🏗️ Component Structure

### App Entry Point
```
/App.tsx
  ├── LanguageProvider
  ├── Header
  ├── [Current Page Component]
  ├── Footer
  └── BackToTop
```

### Page Types

1. **Listing Pages** - Display multiple records
   - `ExhibitionsPage` (upcoming/current/past tabs)
   - `MovingImagePage` (upcoming/current/past tabs)
   - `ResidencyPage` (upcoming/current/past tabs)

2. **Detail Pages** - Display single record
   - `ExhibitionDetailPage`
   - `MovingImageDetailPage`
   - `ArtistDetailPage`

3. **Static Pages** - Fixed content
   - `HomePage`, `AboutPage`, `TeamPage`, `VisitPage`, `ContactPage`

---

## 🔄 Recent Updates (March 17, 2026)

### Code Organization
1. ✅ Created barrel export files (`index.ts`) in all directories
2. ✅ Cleaned up inconsistent code formatting
3. ✅ Removed unused imports
4. ✅ Standardized empty state messages

### New Features
1. ✅ Created `recordsAnalyzer.ts` utility
2. ✅ Created `RecordsStatusPage.tsx` component
3. ✅ Added programmatic status analysis

### Documentation
1. ✅ Created this `INDEX.md` file
2. ✅ Created `CODE_ORGANIZATION.md`
3. ✅ Created `RECORDS_STATUS_SUMMARY.md`
4. ✅ Created `RECORDS_STATUS_REPORT.md`

### Bug Fixes
1. ✅ Fixed slug matching for 3 residency artists
2. ✅ Synchronized detail content with listing data
3. ✅ Fixed Moving Image status determination

---

## 🎯 Quick Commands

### Development
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint
```

### Analyze Records
```typescript
// In browser console or Node
import { printRecordsSummary } from './utils/recordsAnalyzer';
console.log(printRecordsSummary());
```

### Update Data
1. **Add Exhibition:** Edit `/utils/exhibitionsDataNew.ts`
2. **Add Detail Content:** Edit `/utils/detailContent.ts` & `/utils/detailContentThaiData.ts`
3. **Update Search:** Edit `/utils/searchData.ts`
4. **Change Visibility:** Edit `/utils/siteConfig.ts`

---

## 📞 Common Tasks

### How do I...

| Task | File to Edit | Documentation |
|------|-------------|---------------|
| Add a new exhibition? | `exhibitionsDataNew.ts` | `EXHIBITION_DATA_UPDATE.md` |
| Update an image? | Various data files | `IMAGE_UPDATE_GUIDE.md` |
| Add detail content? | `detailContent.ts` + `detailContentThaiData.ts` | `DETAIL_CONTENT_ARCHITECTURE.md` |
| Update search index? | `searchData.ts` | `SEARCH_INDEX_UPDATE.md` |
| Toggle menu visibility? | `siteConfig.ts` | `CODE_ORGANIZATION.md` |
| Change empty state message? | `siteConfig.ts` | `CODE_ORGANIZATION.md` |
| View records status? | Open `RecordsStatusPage` | `RECORDS_STATUS_SUMMARY.md` |
| Update translations? | `translations.ts` | `BILINGUAL_IMPLEMENTATION.md` |

---

## ✅ System Status

### Data Integrity
- ✅ All 28 records have matching slugs
- ✅ All records have bilingual content
- ✅ All detail content exists
- ✅ All images are accessible
- ✅ Search index is complete

### Code Quality
- ✅ No unused imports
- ✅ Consistent formatting
- ✅ Barrel exports implemented
- ✅ Type safety maintained
- ✅ Documentation complete

### Features
- ✅ Bilingual support (Thai/English)
- ✅ Automatic status determination
- ✅ Search functionality
- ✅ Responsive design
- ✅ Carousel implementation
- ✅ Admin tools (Records Status Page)

---

## 📝 Notes

### Protected Files
Do not modify:
- `/src/app/components/figma/ImageWithFallback.tsx`

### Reference Date
Current system reference date for status calculation: **March 10, 2026**

### Status Determination
All record statuses are calculated automatically based on `fromDate` and `toDate` relative to the reference date.

---

**Document Version:** 1.0  
**Last Updated:** March 17, 2026  
**Maintained By:** Bangkok Kunsthalle Development Team
