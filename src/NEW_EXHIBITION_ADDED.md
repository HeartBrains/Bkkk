# New Exhibition Added: Dial-A-Poem Thailand

**Date Added:** March 17, 2026  
**Exhibition Opening:** April 10, 2026  
**Status:** Upcoming

---

## ✅ What Was Added

### 1. Exhibition Data (`/utils/exhibitionsDataNew.ts`)

**New Record:**
- **ID:** 17
- **Slug:** `dial-a-poem-thailand`
- **Title (EN):** Dial-A-Poem Thailand
- **Title (TH):** Dial-A-Poem Thailand
- **Artist (EN):** To Be Announced
- **Artist (TH):** จะประกาศในเร็วๆ นี้
- **Curator (EN):** To Be Announced
- **Curator (TH):** จะประกาศในเร็วๆ นี้
- **From Date:** 2026-04-10
- **To Date:** 2026-07-31
- **Year:** 2026
- **Tags:** Poetry, Sound art, Thailand, Interactive, Communication
- **Featured Image:** (To be added)
- **Gallery:** (To be added)

### 2. Detail Content - English (`/utils/detailContent.ts`)

Added comprehensive exhibition description covering:
- Concept overview
- Historical context (John Giorno's original Dial-A-Poem from 1968)
- Contemporary adaptation for Bangkok
- Telephone/poetry interface
- Public participation model
- Exhibition space as listening station and production site
- Connection to Bangkok Kunsthalle's mission

### 3. Detail Content - Thai (`/utils/detailContentThaiData.ts`)

Added full Thai translation covering:
- การตีความใหม่ถึงจุดตัดระหว่างกวีนิพนธ์ เทคโนโลยี และการมีส่วนร่วม
- Historical background of Dial-A-Poem
- Contemporary Bangkok context
- Full bilingual support

---

## 📊 Updated Records Count

| Category | Previous | New | Change |
|----------|----------|-----|--------|
| **Exhibitions** | 16 | **17** | +1 |
| **Moving Image** | 6 | 6 | - |
| **Residency** | 6 | 6 | - |
| **GRAND TOTAL** | **28** | **29** | **+1** |

---

## 🎯 Status Determination

Based on the reference date (March 10, 2026):
- **From Date:** April 10, 2026
- **To Date:** July 31, 2026
- **Computed Status:** ✨ **UPCOMING**

The exhibition will automatically appear in the "Upcoming Exhibitions" section because:
- `fromDate` (April 10, 2026) is **after** the reference date (March 10, 2026)

---

## 📝 Exhibition Details

### Concept
"Dial-A-Poem Thailand" reimagines John Giorno's revolutionary 1968 telephone poetry service for contemporary Bangkok. The exhibition transforms Bangkok Kunsthalle into both an archive and a live communication platform where poetry becomes accessible via telephone.

### Key Features
- **Interactive Telephone System:** Dedicated phone number for accessing recorded poems
- **Bilingual Content:** Poems available in both Thai and English
- **Public Participation:** Invites poets, artists, and community members to contribute
- **Hybrid Space:** Exhibition functions as listening station and production site
- **Democratic Distribution:** Makes poetry accessible outside traditional gallery contexts

### Historical Context
The original Dial-A-Poem (1968) featured recordings by:
- William S. Burroughs
- Allen Ginsberg
- Anne Waldman
- Patti Smith
- And many others

### Contemporary Relevance
In an era of instant digital communication, the project returns to the deliberate act of dialing—a slower, more intentional gesture that creates unexpected moments of pause and reflection.

---

## 🔍 What Happens Next

### Automatic Integration
The new exhibition will automatically:
1. ✅ Appear in the Upcoming Exhibitions listing
2. ✅ Be indexed with status = 'upcoming'
3. ✅ Show in search results (once search index is updated)
4. ✅ Display on ExhibitionsPage under "Upcoming" tab
5. ✅ Have a functioning detail page at `/exhibitions/dial-a-poem-thailand`

### Manual Updates Needed

1. **Add Featured Image**
   - File: `/utils/exhibitionsDataNew.ts`
   - Field: `featuredImage`
   - Once image is available

2. **Add Gallery Images**
   - File: `/utils/exhibitionsDataNew.ts`
   - Field: `gallery`
   - Array of image URLs

3. **Update Search Index** (Optional but recommended)
   - File: `/utils/searchData.ts`
   - Add entry for 'dial-a-poem-thailand'

4. **Add Artist/Curator Details**
   - File: `/utils/exhibitionsDataNew.ts`
   - Update `artist` and `curator` fields
   - Once information is announced

5. **Expand Detail Content**
   - Files: `/utils/detailContent.ts` and `/utils/detailContentThaiData.ts`
   - Add more specific details as they become available
   - Artist bios, participating poets, etc.

---

## 🎨 Visual Identity (To Be Added)

### Images Needed
- [ ] Featured image (cover/hero image)
- [ ] Gallery images (3-5 images)
- [ ] Installation views (when available)
- [ ] Documentation photos

### Image Specifications
- **Format:** JPG or PNG
- **Size:** Optimized for web (under 500KB per image)
- **Dimensions:** Minimum 1920px width recommended
- **Hosting:** Upload to CDN and update URLs in data file

---

## 📋 Verification Checklist

### Data Files
- [x] Added to `/utils/exhibitionsDataNew.ts`
- [x] Added English detail content to `/utils/detailContent.ts`
- [x] Added Thai detail content to `/utils/detailContentThaiData.ts`
- [x] Slug matches across all files (`dial-a-poem-thailand`)
- [x] Dates are in correct format (`YYYY-MM-DD`)
- [x] Status will auto-calculate to 'upcoming'

### Content Quality
- [x] Bilingual titles (EN/TH)
- [x] Bilingual artist names (EN/TH) - "To Be Announced"
- [x] Bilingual curator names (EN/TH) - "To Be Announced"
- [x] Comprehensive exhibition description
- [x] Historical context provided
- [x] Tags assigned appropriately

### Future Updates Required
- [ ] Featured image URL
- [ ] Gallery image URLs
- [ ] Final artist names
- [ ] Final curator names
- [ ] Search index entry
- [ ] Participating poets list (when available)
- [ ] Telephone number details (when available)

---

## 🚀 How to View

### In Development
1. Navigate to Exhibitions page
2. Click "Upcoming" tab
3. Find "Dial-A-Poem Thailand"
4. Click to view detail page

### URL Paths
- **Listing:** `/exhibitions` (Upcoming tab)
- **Detail:** `/exhibitions/dial-a-poem-thailand`

---

## 📊 Records Analysis

You can view the updated status using:

```typescript
import { analyzeAllRecords } from './utils/recordsAnalyzer';

const analysis = analyzeAllRecords();
console.log(analysis);
```

Or visit the Records Status Page component to see the visual dashboard with the new exhibition included.

---

## 🎯 Next Steps

1. **Immediate:**
   - ✅ Data added to all necessary files
   - ✅ Status automatically set to 'upcoming'
   - ✅ Detail pages functional

2. **When Information Available:**
   - Update artist and curator names
   - Add images
   - Expand detail content with participating poets
   - Add telephone service details

3. **Before Exhibition Opens (April 10, 2026):**
   - Final image gallery complete
   - All artist/curator credits finalized
   - Search index updated
   - Press materials prepared

---

**Added By:** AI Assistant  
**Date:** March 17, 2026  
**Exhibition Opens:** April 10, 2026  
**Total Exhibitions:** Now 17
