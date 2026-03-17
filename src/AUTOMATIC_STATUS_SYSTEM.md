# Automatic Status Determination System

## Overview

The status field (`current`, `upcoming`, `past`) is now **automatically computed** based on `fromDate` and `toDate` instead of being manually set. This ensures accuracy and eliminates manual updates.

---

## How It Works

### 1. Date Status Helper (`/utils/dateStatusHelper.ts`)

Core utility that determines status based on dates:

```typescript
determineStatus(fromDate: string, toDate: string): Status
```

**Logic:**
- **Upcoming**: Current date < `fromDate`
- **Current**: Current date >= `fromDate` AND <= `toDate`
- **Past**: Current date > `toDate`
- **Special case**: `toDate === 'Onwards'` = always `current` after `fromDate`

**Current Date:**
- Uses Bangkok timezone (UTC+7)
- Resets to start of day (00:00:00) for accurate comparison

---

## 2. Updated Data Structure

### Before (Manual Status):
```typescript
export interface Exhibition {
  // ... fields
  status: 'current' | 'upcoming' | 'past';  // ❌ Manually set
}
```

### After (Auto Status):
```typescript
// Base interface WITHOUT status field
export interface Exhibition {
  id: string;
  slug: string;
  fromDate: string;  // 'YYYY-MM-DD'
  toDate: string;    // 'YYYY-MM-DD' or 'Onwards'
  // ... other fields
}

// Extended interface WITH computed status
export interface ExhibitionWithStatus extends Exhibition {
  status: Status;  // ✅ Automatically computed
}
```

---

## 3. Helper Functions

### Get All Exhibitions with Status
```typescript
import { getExhibitionsWithStatus } from './utils/exhibitionsDataNew';

const exhibitions = getExhibitionsWithStatus();
// Returns ExhibitionWithStatus[] with computed status
```

### Get Single Exhibition by Slug
```typescript
import { getExhibitionBySlug } from './utils/exhibitionsDataNew';

const exhibition = getExhibitionBySlug('nine-plus-five-works');
// Returns ExhibitionWithStatus | undefined
```

### Filter by Status
```typescript
import { 
  getCurrentExhibitions,
  getUpcomingExhibitions,
  getPastExhibitions,
  getExhibitionsByStatus
} from './utils/exhibitionsDataNew';

const current = getCurrentExhibitions();     // Only current
const upcoming = getUpcomingExhibitions();   // Only upcoming
const past = getPastExhibitions();           // Only past

// Or use generic filter:
const currentExhibitions = getExhibitionsByStatus('current');
```

---

## 4. Date Format Requirements

### From Date & To Date
```
Format: 'YYYY-MM-DD'
Example: '2024-01-12'
```

### Special Case: Ongoing
```
toDate: 'Onwards'
```
- Exhibition that continues indefinitely
- Status will be `current` once `fromDate` is reached
- Example: Permanent installations

---

## 5. Usage Examples

### Example 1: Listing Page
```typescript
import { getExhibitionsWithStatus } from '@/utils/exhibitionsDataNew';

function ExhibitionsPage() {
  const exhibitions = getExhibitionsWithStatus();
  
  return (
    <div>
      {exhibitions.map(ex => (
        <ExhibitionCard 
          key={ex.id}
          exhibition={ex}
          status={ex.status}  // ✅ Auto-computed
        />
      ))}
    </div>
  );
}
```

### Example 2: Homepage - Show Only Current
```typescript
import { getCurrentExhibitions } from '@/utils/exhibitionsDataNew';

function HomePage() {
  const currentExhibitions = getCurrentExhibitions();
  
  return (
    <section>
      <h2>Now On</h2>
      {currentExhibitions.map(ex => <Card key={ex.id} {...ex} />)}
    </section>
  );
}
```

### Example 3: Detail Page
```typescript
import { getExhibitionBySlug } from '@/utils/exhibitionsDataNew';

function ExhibitionDetail({ params }) {
  const exhibition = getExhibitionBySlug(params.slug);
  
  if (!exhibition) return <NotFound />;
  
  return (
    <div>
      <h1>{exhibition.title.en}</h1>
      <Status badge={exhibition.status} />  // ✅ Auto-computed
      <p>{exhibition.dateDisplay.en}</p>
    </div>
  );
}
```

---

## 6. Benefits

### ✅ Automatic Updates
- Status changes automatically when dates pass
- No manual updates needed
- Always accurate

### ✅ Single Source of Truth
- Dates determine status
- No inconsistencies between dates and status
- Easier to maintain

### ✅ Flexibility
- Can compute status at any time
- Can filter/sort dynamically
- Future-proof

---

## 7. Migration Guide

### Step 1: Remove Hardcoded Status
```diff
const exhibitions: Exhibition[] = [
  {
    id: '1',
    fromDate: '2024-01-12',
    toDate: '2024-03-10',
-   status: 'past'  // ❌ Remove this
  }
];
```

### Step 2: Use Helper Functions
```diff
- const exhibitions: Exhibition[] = exhibitionsData;
+ import { getExhibitionsWithStatus } from '@/utils/exhibitionsDataNew';
+ const exhibitions = getExhibitionsWithStatus();
```

### Step 3: Update TypeScript Types
```diff
- import { Exhibition } from '@/utils/exhibitionsDataNew';
+ import { ExhibitionWithStatus } from '@/utils/exhibitionsDataNew';
- const exhibition: Exhibition;
+ const exhibition: ExhibitionWithStatus;
```

---

## 8. Testing Status Logic

### Current Date: March 17, 2026

```typescript
// Example 1: Past Exhibition
fromDate: '2024-01-12'
toDate: '2024-03-10'
Status: 'past' ✅

// Example 2: Current Exhibition  
fromDate: '2025-12-13'
toDate: '2026-05-31'
Status: 'current' ✅

// Example 3: Upcoming Exhibition
fromDate: '2026-06-13'
toDate: '2026-08-17'
Status: 'upcoming' ✅

// Example 4: Ongoing
fromDate: '2026-03-07'
toDate: 'Onwards'
Status: 'current' ✅
```

---

## 9. Applying to Other Data Types

### Moving Image Programs
```typescript
// File: /utils/movingImageData.ts
import { determineStatus, Status } from './dateStatusHelper';

export interface MovingImageProgram {
  fromDate: string;
  toDate: string;
  // ... other fields
}

export interface MovingImageProgramWithStatus extends MovingImageProgram {
  status: Status;
}

export function getMovingImageProgramsWithStatus() {
  return movingImagePrograms.map(program => ({
    ...program,
    status: determineStatus(program.fromDate, program.toDate)
  }));
}
```

### Residencies
```typescript
// File: /utils/residencyData.ts
import { determineStatus, Status } from './dateStatusHelper';

export interface Artist {
  fromDate: string;  // Parse from period string
  toDate: string;    // Parse from period string
  // ... other fields
}

export interface ArtistWithStatus extends Artist {
  status: Status;
}

// Note: Residencies may need date parsing from period strings
// like "January - February 2024" → fromDate/toDate
```

---

## 10. Important Notes

### Date Format Consistency
- **Always use**: `YYYY-MM-DD`
- **Never use**: `DD/MM/YYYY`, `MM-DD-YYYY`, etc.
- Ensures reliable parsing and comparison

### Timezone Considerations
- System uses Bangkok time (UTC+7)
- Date comparisons reset to 00:00:00
- Status changes at midnight Bangkok time

### 'Onwards' Special Case
- Use for permanent/ongoing exhibitions
- Status will be `current` after start date
- Never becomes `past`

---

## Summary

**Old Way:**
```typescript
status: 'past'  // Manual, can be wrong
```

**New Way:**
```typescript
fromDate: '2024-01-12'
toDate: '2024-03-10'
// Status computed automatically based on current date
```

✅ **No more manual status updates!**  
✅ **Always accurate**  
✅ **Consistent across all pages**
