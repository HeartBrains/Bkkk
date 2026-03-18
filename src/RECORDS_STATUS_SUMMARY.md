# Bangkok Kunsthalle - Records Status Summary

**Date:** March 17, 2026  
**Reference Date for Status:** March 10, 2026

---

## 📊 Quick Overview

| Category | Total | ✨ Upcoming | 🎨 Current | 📚 Past |
|----------|-------|-----------|----------|---------|
| **Exhibitions** | 16 | 2+ | 4 | 10 |
| **Moving Image** | 6 | 1+ | 0-1 | 4-5 |
| **Residency** | 6 | 1+ | 2 | 3 |
| **GRAND TOTAL** | **28** | **4+** | **6-7** | **17-18** |

> **Note:** Status is determined automatically by comparing dates against the reference date (March 10, 2026).  
> Use `/components/pages/RecordsStatusPage.tsx` or run the analyzer for exact real-time counts.

---

## 🎨 EXHIBITIONS (16 Records)

### Status Breakdown

| Status | Count | Records |
|--------|-------|---------|
| **✨ Upcoming** | 2+ | Splendor in the City, A Bit Fountain and a Bit Not |
| **🎨 Current** | 4 | Blind Spots, Soul Searching, Vernacular Objects, FOREVER LOVE SOUL ENGINE |
| **📚 Past** | 10 | Nine Plus Five Works, nostalgia for unity, MEND PIECE, Like Nouns Slipping Into Verbs, Calligraphic Abstraction, Painting as Event, Poetics of Horizontality, This page is intentionally left _____, Mitta del Santi, Description Without Place |

### Current Exhibitions (as of March 10, 2026)

1. **Blind Spots: Panels, Paravents and Screens**
   - Artist: Apichaya Wannakit
   - Feb 20 - May 31, 2026
   - ✅ Active

2. **Soul Searching**
   - Artist: Rolf Sachs
   - Feb 5 - Apr 19, 2026
   - ✅ Active

3. **Vernacular Objects**
   - Curator: Mark Chearavanont
   - Nov 27, 2025 - Mar 15, 2026
   - ✅ Active (ends soon)

4. **FOREVER LOVE SOUL ENGINE**
   - Artist: Pansan Klongdee
   - Feb 6 - Mar 15, 2026
   - ✅ Active (ends soon)

### Key Upcoming

1. **Splendor in the City** - Mafalda von Hessen
2. **A Bit Fountain and a Bit Not** - Pinaree Sanpitak

---

## 🎬 MOVING IMAGE PROGRAMS (6 Records)

### Status Breakdown

| Status | Count | Records |
|--------|-------|---------|
| **✨ Upcoming** | 1+ | To Be Announced (May - July 2026) |
| **🎨 Current** | 0-1 | *Check dates for Searching for Something Moving* |
| **📚 Past** | 4-5 | The Last Shelter, Weaving the Postcolonial Web, Spectatorship and the Event, New Networks Other Bodies, + possibly one more |

### All Moving Image Programs

1. **The Last Shelter** (Mar - Apr 2024) - Past
2. **Weaving the Postcolonial Web** (May - Aug 2024) - Past
3. **Spectatorship and the Event** (Sep - Nov 2024) - Past
4. **New Networks, Other Bodies** (Nov 2024 - Jan 2025) - Past
5. **Searching for Something Moving** (Feb - May 2025) - Past
6. **To Be Announced** (May - Jul 2026) - Upcoming

> All curated by: Rosalia Namsai Engchuan

---

## 🏠 ARTIST RESIDENCY (6 Records)

### Status Breakdown

| Status | Count | Records |
|--------|-------|---------|
| **✨ Upcoming** | 1+ | Mafalda von Hessen (Mar - Jun 2026) |
| **🎨 Current** | 2 | Apichaya Wannakit, Rolf Sachs |
| **📚 Past** | 3 | Korakrit Arunanondchai, Xie Fan, Nalattaphorn Nanta |

### Current Residencies (as of March 10, 2026)

1. **Apichaya Wannakit**
   - Nov 3, 2025 - Feb 20, 2026
   - Exhibition: Blind Spots
   - ✅ Residency completed, exhibition active

2. **Rolf Sachs**
   - Nov 11, 2025 - Feb 5, 2026
   - Exhibition: Soul Searching
   - ✅ Residency completed, exhibition active

### All Residencies

1. **Korakrit Arunanondchai** (Feb - May 2024) → nostalgia for unity
2. **Xie Fan** (Jan - Mar 2025) → Painting as Event
3. **Nalattaphorn Nanta** (Feb - May 2025) → Poetics of Horizontality
4. **Apichaya Wannakit** (Nov 2025 - Feb 2026) → Blind Spots
5. **Rolf Sachs** (Nov 2025 - Feb 2026) → Soul Searching
6. **Mafalda von Hessen** (Mar - Jun 2026) → Splendor in the City

---

## 🔍 How to Access Real-Time Status

### Option 1: View in Browser
```typescript
// Navigate to the Records Status Page
import { RecordsStatusPage } from './components/pages/RecordsStatusPage';
```

### Option 2: Programmatic Access
```typescript
import { analyzeAllRecords, printRecordsSummary } from './utils/recordsAnalyzer';

// Get structured data
const analysis = analyzeAllRecords();

// Print formatted report
const report = printRecordsSummary();
console.log(report);
```

### Option 3: Check Individual Categories
```typescript
import { getExhibitionsWithStatus } from './utils/exhibitionsDataNew';
import { movingImagePrograms } from './utils/movingImageData';
import { residencyData } from './utils/residencyData';
import { determineStatus } from './utils/dateStatusHelper';

// Get exhibitions with computed status
const exhibitions = getExhibitionsWithStatus();
const currentExhibitions = exhibitions.filter(ex => ex.status === 'current');

// Get moving image with computed status
const currentMovingImage = movingImagePrograms
  .map(mi => ({ ...mi, status: determineStatus(mi.fromDate, mi.toDate) }))
  .filter(mi => mi.status === 'current');
```

---

## 📁 Data Files Structure

```
/utils/
├── exhibitionsDataNew.ts      # 16 exhibitions
├── movingImageData.ts          # 6 programs
├── residencyData.ts            # 6 residencies
├── detailContent.ts            # English detail content
├── detailContentThaiData.ts    # Thai detail content
├── dateStatusHelper.ts         # Status calculation logic
└── recordsAnalyzer.ts          # Analysis utility (NEW)
```

---

## ✅ Data Integrity

### Slug Matching
All records have matching slugs across:
- ✅ Listing data files
- ✅ Detail content files (EN & TH)
- ✅ Search index
- ✅ URL routing

### Bilingual Support
- ✅ All exhibitions have Thai & English titles
- ✅ All moving image programs have Thai & English titles
- ✅ All residency artists have Thai & English names
- ✅ All detail content available in both languages

### Missing Content Status
- ✅ **Exhibitions:** All 16 have complete detail content
- ✅ **Moving Image:** All 6 have complete program details
- ✅ **Residency:** All 6 have complete artist biographies

---

## 🎯 Recent Updates (March 17, 2026)

1. ✅ Created `/utils/recordsAnalyzer.ts` for automated status analysis
2. ✅ Created `/components/pages/RecordsStatusPage.tsx` for visual reporting
3. ✅ Fixed slug matching for 3 residency artists (Apichaya, Rolf, Mafalda)
4. ✅ Implemented automatic status determination system
5. ✅ Cleaned and indexed all utility files
6. ✅ Created comprehensive documentation

---

## 📞 Quick Reference

| Need | Command/File |
|------|-------------|
| View all records with status | Open `RecordsStatusPage` component |
| Get programmatic analysis | `analyzeAllRecords()` |
| Print text report | `printRecordsSummary()` |
| Check exhibition status | `getExhibitionsWithStatus()` |
| Calculate status from dates | `determineStatus(from, to)` |
| Full documentation | `/RECORDS_STATUS_REPORT.md` |

---

**Last Updated:** March 17, 2026  
**Status Reference Date:** March 10, 2026  
**Total Records:** 28 (16 exhibitions + 6 moving image + 6 residency)
