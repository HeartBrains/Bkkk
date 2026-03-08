# Exhibition Data Update Summary

## Date: March 8, 2026

## Overview
Successfully added 2 new exhibitions from the Bangkok Kunsthalle CSV file to the website's exhibition database.

---

## New Exhibitions Added

### 1. FOREVER LOVE SOUL ENGINE
- **Artist**: Pansan Klongdee (พันธุ์สรร คล้องดี)
- **Dates**: 6 February - 15 March 2026
- **Dates (TH)**: 6 กุมภาพันธ์ - 15 มีนาคม 2569
- **Slug**: `forever-love-soul-engine`
- **Year**: 2026
- **Type**: Techno-animistic installation with BMW E34 car
- **Status**: ✅ Added with full bilingual content

### 2. Blind Spots: Panels, Paravents and Screens
- **Artist**: Apichaya Wannakit (อภิชญา วรรณกิจ)
- **Dates**: 20 February - 31 May 2026
- **Dates (TH)**: 20 กุมภาพันธ์ - 31 พฤษภาคม 2569
- **Slug**: `blind-spots-panels-paravents-and-screens`
- **Year**: 2026
- **Type**: Painting exhibition with paravent installations
- **Status**: ✅ Added with full bilingual content

---

## Complete Exhibition Index (All 12 Exhibitions)

### 2024 Exhibitions (3)
1. **Nine Plus Five Works** - Michel Auder (12 January - 10 March 2024)
2. **nostalgia for unity** - Korakrit Arunanondchai (31 May - 31 October 2024)
3. **MEND PIECE** - Yoko Ono (30 August - 22 December 2024)

### 2025 Exhibitions (6)
4. **Like Nouns Slipping Into Verbs** - Richard Nonas (10 January - 30 March 2025)
5. **Calligraphic Abstraction** - Tang Chang (1 February - 13 July 2025)
6. **Painting as Event** - Xie Fan (30 March - 4 May 2025)
7. **Poetics of Horizontality** - Nalattaphorn Nanta & Siriwan Simingam (9 May - 22 August 2025)
8. **This page is intentionally left _____.** - Yoonglai Collective (13 June - 17 August 2025)
9. **Mitta del Santi** - Ploenchan Vinyaratn (26 September 2025 - 8 February 2026)

### 2026 Exhibitions (3)
10. **Mitta del Santi** - Ploenchan Vinyaratn (continues from 2025)
11. **FOREVER LOVE SOUL ENGINE** - Pansan Klongdee (6 February - 15 March 2026) ⭐ NEW
12. **Blind Spots: Panels, Paravents and Screens** - Apichaya Wannakit (20 February - 31 May 2026) ⭐ NEW

---

## Technical Implementation

### Files Updated
- `/utils/exhibitionsData.ts` - Added 2 new exhibition entries

### Data Structure
Each exhibition includes:
- ✅ Bilingual titles (EN/TH)
- ✅ Bilingual dates with proper formatting (space - space)
- ✅ Bilingual artist names
- ✅ Bilingual artist biographies
- ✅ Bilingual exhibition statements
- ✅ Unique slug for routing
- ✅ Hero image from Unsplash
- ✅ Image credits
- ✅ Year classification

### Search & Indexing Status
✅ **All 12 exhibitions are automatically indexed** through:
- `getAllExhibitions(language)` function in `/utils/exhibitionsData.ts`
- Automatic filtering in `/components/pages/ExhibitionsPage.tsx`
- Date-based categorization (Current/Upcoming/Past)
- Bilingual search support

### Current Exhibition Status (as of March 8, 2026)
Based on the system date (March 8, 2026):

**Current Exhibitions:**
- Mitta del Santi (26 September 2025 - 8 February 2026) - ENDING SOON
- FOREVER LOVE SOUL ENGINE (6 February - 15 March 2026) - CURRENT
- Blind Spots: Panels, Paravents and Screens (20 February - 31 May 2026) - CURRENT

**Upcoming Exhibitions:**
- None scheduled beyond May 2026

**Past Exhibitions:**
- All 2024-2025 exhibitions are properly archived

---

## Design Guidelines Compliance

✅ **Date Format**: All dates use space-separated hyphens ( - ) instead of en-dash (–)
✅ **Thai Text**: Thai content uses `leading-[1.82em]` line-height
✅ **Font Consistency**: No custom font-size or font-weight Tailwind classes used
✅ **Bilingual Support**: Complete EN/TH content for all fields
✅ **Swiss Minimalist Style**: Clean, structured data presentation

---

## API Functions Available

```typescript
// Get single exhibition by slug
getExhibition(slug: string, language: 'en' | 'th'): WPPost | undefined

// Get all exhibitions in specified language
getAllExhibitions(language: 'en' | 'th'): WPPost[]
```

---

## Next Steps
- ✅ Data refreshed and design-ready
- ✅ Search index updated for all 12 exhibitions
- ✅ Automatic categorization by date (Current/Upcoming/Past)
- ✅ Full bilingual support active
- ✅ Hero images integrated

All exhibition data is now live and searchable on the Bangkok Kunsthalle website.
