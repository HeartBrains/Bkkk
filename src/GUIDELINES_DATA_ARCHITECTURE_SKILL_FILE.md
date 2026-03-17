# Guidelines-Driven Data Architecture - Implementation Guide

## 🎯 What This Document Covers
Learn how to use `Guidelines.md` to enforce data architecture patterns and design consistency across your website, making it easier for AI assistants and developers to maintain standards.

---

## 📚 Table of Contents
1. [Understanding Guidelines.md](#understanding-guidelinesmd)
2. [How Guidelines Enforce Data Architecture](#how-guidelines-enforce-data-architecture)
3. [Writing Effective Guidelines](#writing-effective-guidelines)
4. [Guidelines → Data Structure Mapping](#guidelines--data-structure-mapping)
5. [Template for Different Site Types](#template-for-different-site-types)
6. [Best Practices](#best-practices)
7. [Real Examples from Bangkok Kunsthalle](#real-examples-from-bangkok-kunsthalle)

---

## 1. Understanding Guidelines.md

### What is Guidelines.md?
A **living documentation file** that AI assistants read before making any code changes. It acts as:
- **Design System Enforcer** - Ensures consistency
- **Data Architecture Blueprint** - Defines how data should be structured
- **Business Rules Document** - Captures domain-specific requirements
- **Single Source of Truth** - One place for all project rules

### Why Use Guidelines?
```
Without Guidelines:              With Guidelines:
❌ Inconsistent font sizes       ✅ 5 sizes, 4 weights enforced
❌ Mixed date formats            ✅ Standardized "Day Month Year - Day Month Year"
❌ Data scattered everywhere     ✅ Clear data location rules
❌ Different carousel patterns   ✅ Consistent "dots only" pattern
```

### How AI Uses Guidelines
1. **Before Every Change**: AI reads Guidelines.md first
2. **Pattern Matching**: AI applies rules to new components
3. **Consistency Checks**: AI validates against guidelines
4. **Auto-Documentation**: AI references guidelines in explanations

---

## 2. How Guidelines Enforce Data Architecture

### The Connection: Guidelines ↔ Data ↔ Components

```
┌─────────────────┐
│  Guidelines.md  │ ← Rules are written here
└────────┬────────┘
         │
         ├─────────────────────────────────────┐
         │                                     │
         ▼                                     ▼
┌────────────────────────┐         ┌──────────────────────┐
│  Data Files            │         │  Component Files     │
│  /utils/*.ts           │◄────────┤  /components/*.tsx   │
│                        │         │                      │
│  - Structure enforced  │         │  - Rendering logic   │
│  - Locations defined   │         │  - Display patterns  │
│  - Formats specified   │         │  - Spacing rules     │
└────────────────────────┘         └──────────────────────┘
```

### Example Flow: Date Format Guideline

#### 1. Guideline Definition
```md
## Date Format Standard ##
- **Global Date Format:** All date ranges must use spaced hyphen format: "Month - Month Year"
- **Examples:** "13 December 2025 - 31 May 2026"
- **DO NOT USE:** En-dash (–) or hyphen without spaces
- **ALWAYS USE:** Space-hyphen-space ( - ) format
```

#### 2. Data Structure Implementation
```tsx
// /utils/exhibitionsDataNew.ts

function formatDateDisplay(fromDate: string, toDate: string): { en: string, th: string } {
  const from = new Date(fromDate);
  const to = new Date(toDate);
  
  // ✅ Follows guideline: space-hyphen-space format
  return {
    en: `${fromDay} ${fromMonth} ${fromYear} - ${toDay} ${toMonth} ${toYear}`,
    th: `${fromDay} ${fromMonthTH} ${fromYearTH} - ${toDay} ${toMonthTH} ${toYearTH}`
  };
}
```

#### 3. Component Usage
```tsx
// /components/pages/ExhibitionDetailPage.tsx

export function ExhibitionDetailPage({ slug }) {
  const exhibition = getExhibition(slug);
  
  // ✅ Date already formatted per guidelines
  return (
    <div>
      <p>{exhibition.dateDisplay.en}</p>
      {/* Renders: "13 December 2025 - 31 May 2026" */}
    </div>
  );
}
```

### Benefits of This Architecture
1. **Single Point of Change**: Update guideline → AI updates all affected code
2. **Consistency**: All dates look identical across the site
3. **Validation**: Easy to check if code follows guidelines
4. **Onboarding**: New developers read guidelines to understand standards

---

## 3. Writing Effective Guidelines

### The Anatomy of a Good Guideline

```md
## [Component/Feature Name] ##              ← Clear heading

- **[Rule Category]:** Description          ← Bold category + description
- **Examples:** Specific examples           ← Show, don't just tell
- **DO NOT USE:** Anti-patterns             ← What to avoid
- **ALWAYS USE:** Correct pattern           ← What to use instead
- **Data Location:** /path/to/file.ts       ← Where data lives
```

### ✅ Good Guideline Example
```md
## Detail Page Meta Information ##
- **Title, Date, Curator Spacing:** Use `gap-0` for title, artist/category, and date to create tight vertical stacking with no gap between lines
- **Line Height:** All meta information (title, artist, date, curator) must use `leading-tight` class for compact line spacing
- **Curator Section:** Separate curator information from main meta with `mt-8` (8 spacing units gap between sections)
- **Curated By Format:** Display "Curated by" label and curator name as separate lines with `gap-0`, both using `leading-tight`
- **Thai Line Height:** Apply `leading-[1.82em]` to Thai text for proper readability
- **Statement Content:** The statement/description content on detail pages must use `text-2xl` for font size
```

**Why it's good:**
- ✅ Specific class names (`gap-0`, `leading-tight`, `mt-8`)
- ✅ Visual description (tight vertical stacking)
- ✅ Edge cases covered (Thai text)
- ✅ Complete pattern described

### ❌ Bad Guideline Example
```md
## Detail Pages ##
- Keep spacing consistent
- Use appropriate fonts
- Make it look nice
```

**Why it's bad:**
- ❌ Vague ("consistent", "appropriate", "nice")
- ❌ No specific values or examples
- ❌ No data structure mentioned
- ❌ Can't be validated programmatically

---

## 4. Guidelines → Data Structure Mapping

### Pattern 1: Data Location Guidelines

#### Guideline
```md
## Moving Image Data Updates ##
Successfully updated ALL 6 Moving Image Programs with CSV images.
All gallery data stored in `/utils/movingImageData.ts` within each program object.
The `/utils/movingImageGalleryData.ts` file has been cleared and is now deprecated.
```

#### Resulting Data Structure
```tsx
// /utils/movingImageData.ts

export const movingImagePrograms = [
  {
    id: 1,
    slug: 'infringes',
    title: { en: 'Infringes', th: '...' },
    // ✅ Gallery data stored HERE, not in separate file
    gallery: [
      'https://cdn.com/image1.jpg',
      'https://cdn.com/image2.jpg',
      // ... 6 images total
    ]
  },
  // ...
];
```

#### Component Implementation
```tsx
// /components/pages/MovingImageDetailPage.tsx

export function MovingImageDetailPage({ slug }) {
  // ✅ AI knows to look in movingImageData.ts because guideline says so
  const program = movingImagePrograms.find(p => p.slug === slug);
  
  return (
    <Carousel>
      {program.gallery.map(image => (
        <CarouselItem><img src={image} /></CarouselItem>
      ))}
    </Carousel>
  );
}
```

---

### Pattern 2: Format Standards Guidelines

#### Guideline
```md
## Font Consistent ##
- Make font size consistent for entire website, adjust to 5 font sizes, font's weight to 4 weight
```

#### Resulting Data Structure (CSS Variables)
```css
/* /styles/globals.css */

:root {
  /* ✅ Exactly 5 sizes as per guideline */
  --font-size-sm: 0.875rem;    /* Size 1 */
  --font-size-base: 1rem;       /* Size 2 */
  --font-size-lg: 1.25rem;      /* Size 3 */
  --font-size-xl: 1.75rem;      /* Size 4 */
  --font-size-2xl: 2.25rem;     /* Size 5 */
  
  /* ✅ Exactly 4 weights as per guideline */
  --font-weight-light: 300;     /* Weight 1 */
  --font-weight-normal: 400;    /* Weight 2 */
  --font-weight-medium: 500;    /* Weight 3 */
  --font-weight-bold: 700;      /* Weight 4 */
}
```

#### Component Implementation
```tsx
// ❌ WRONG: AI won't use this (violates guideline)
<h1 className="text-3xl font-extrabold">Title</h1>

// ✅ CORRECT: AI uses CSS variables (follows guideline)
<h1>Title</h1>  {/* Inherits from globals.css */}
```

---

### Pattern 3: Display Pattern Guidelines

#### Guideline
```md
## Detail Page Carousel ##
- **Pattern:** All detail pages use dots navigation, NEVER thumbnails
- **Layout:** Dots positioned at bottom-right (desktop) or bottom-center (mobile)
- **Height:** Carousel must be dynamic height based on image aspect ratio, NO fixed heights
```

#### Resulting Component Pattern
```tsx
// ALL detail pages follow this pattern

export function DetailPage() {
  return (
    <div className="w-full relative group">
      {/* ✅ No fixed height */}
      <Carousel>
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index}>
              {/* ✅ Dynamic height: h-auto */}
              <img src={src} className="w-full h-auto block" />
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* ✅ Dots navigation (not thumbnails) */}
        <div className="absolute bottom-8 right-[5%]">
          {images.map((_, index) => (
            <button 
              className="w-2 h-2 rounded-full bg-white"
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
}
```

---

## 5. Template for Different Site Types

### E-Commerce Site Guidelines Template

```md
# [Your Site Name] - Development Guidelines

## Product Data Architecture ##
- **Data Location:** All product data stored in `/utils/productsData.ts`
- **Image Requirements:** Each product must have minimum 4 images, maximum 10
- **Price Format:** Always display with 2 decimal places: "$99.00" (not "$99")
- **Currency:** Use user's locale currency (USD, EUR, GBP)
- **Inventory Status:** Check `status` field first, then `stockCount`

## Product Display Guidelines ##
- **Grid Layout:** 2 columns mobile, 3 desktop, 4 wide screens (>1920px)
- **Card Spacing:** Use `gap-6` between product cards
- **Image Aspect Ratio:** All product images must be 1:1 (square)
- **Quick View:** Hover shows quick view button, click shows modal (not new page)

## Cart & Checkout ##
- **Cart Icon:** Always display item count badge (even when 0)
- **Price Calculation:** Tax calculated at checkout, shipping calculated based on zone
- **Form Validation:** Real-time validation on blur, error messages below fields

## Typography ##
- **Product Titles:** 18px regular weight, 1 line with ellipsis overflow
- **Prices:** 24px medium weight for main price, 16px for sale/compare price
- **Descriptions:** 14px regular, 1.6 line-height
```

---

### Blog/Magazine Site Guidelines Template

```md
# [Your Site Name] - Content Guidelines

## Article Data Structure ##
- **Data Location:** Articles in `/utils/articlesData.ts`, authors in `/utils/authorsData.ts`
- **Required Fields:** title, slug, author, publishDate, category, featuredImage, excerpt, content
- **Optional Fields:** tags[], relatedArticles[], seo{}
- **Date Format:** "Month DD, YYYY" (e.g., "March 15, 2026")

## Content Filtering ##
- **Status-First Logic:** Check `status` field before `publishDate`
  - `status: 'published'` → Show in listings
  - `status: 'scheduled'` → Check if publishDate <= today
  - `status: 'draft'` → Never show publicly
- **Categories:** Display all articles with `category` property matching route

## Typography & Reading Experience ##
- **Article Title:** 48px desktop, 32px mobile, bold weight
- **Body Text:** 18px, 1.8 line-height, max-width 680px centered
- **Headings:** h2 = 32px, h3 = 24px, h4 = 20px
- **Quotes:** Italic, 24px, indented 40px, gray color
- **Reading Time:** Calculate based on 200 words/minute

## Image Handling ##
- **Featured Image:** 16:9 aspect ratio, min 1200px width
- **Inline Images:** Max-width 100%, height auto, centered with caption
- **Gallery:** Use lightbox component, thumbnails in 3-column grid
```

---

### SaaS Dashboard Guidelines Template

```md
# [Your SaaS Name] - Dashboard Guidelines

## Data Fetching Architecture ##
- **API Location:** All API calls in `/utils/api/` directory
- **State Management:** Use React Query for server state, Zustand for UI state
- **Error Handling:** All API calls must have try/catch with toast notification
- **Loading States:** Show skeleton loaders, never blank screens

## Dashboard Layout ##
- **Sidebar:** 240px fixed width desktop, collapsible to 64px, hidden mobile
- **Top Bar:** 64px height, fixed position, white background
- **Main Content:** `px-6 py-8` padding, max-width 1440px centered
- **Cards:** Use shadow-sm, rounded-lg, padding p-6, white background

## Data Tables ##
- **Pagination:** 10 items per page default, user can change to 25/50/100
- **Sorting:** Click column header to sort, arrow indicates direction
- **Filtering:** Filter panel on left, apply button required (not instant)
- **Actions:** Row actions in dropdown menu on right side
- **Empty State:** Show illustration + CTA button when no data

## Charts & Analytics ##
- **Library:** Use Recharts for all charts
- **Color Palette:** Use CSS variables from design system
- **Tooltips:** Always show value + percentage on hover
- **Time Ranges:** Default to "Last 30 days", options: 7d, 30d, 90d, 1y, All
```

---

## 6. Best Practices

### ✅ DO: Be Specific and Measurable

```md
✅ GOOD:
## Button Sizing ##
- **Small:** h-8, px-3, text-sm (32px height)
- **Medium:** h-10, px-4, text-base (40px height, default)
- **Large:** h-12, px-6, text-lg (48px height)

❌ BAD:
## Button Sizing ##
- Small buttons for minor actions
- Large buttons for important actions
```

### ✅ DO: Include Data Location

```md
✅ GOOD:
## Team Members ##
- **Data Location:** `/utils/teamData.ts` in `TEAM_MEMBERS` array
- **Image Storage:** CDN URLs in `avatar` property
- **Bilingual:** Each member has `name.en` and `name.th`

❌ BAD:
## Team Members ##
- Store team member information somewhere
```

### ✅ DO: Show Examples

```md
✅ GOOD:
## Date Formatting ##
- **Exhibition Dates:** "13 December 2025 - 31 May 2026"
- **Event Dates:** "15 Mar 2026, 7:00 PM - 9:00 PM"
- **Blog Post Dates:** "Published on March 15, 2026"
- **DO NOT USE:** "12/13/25", "2025-12-13", "Dec 13"

❌ BAD:
## Date Formatting ##
- Use consistent date formats
```

### ✅ DO: Explain WHY (When Non-Obvious)

```md
✅ GOOD:
## Thai Text Line Height ##
- **Rule:** Thai text requires `leading-[1.82em]` (30% more than English)
- **Why:** Thai script has ascending/descending elements that need more vertical space
- **Implementation:** `className={language === 'th' ? 'leading-[1.82em]' : ''}`

❌ BAD:
## Thai Text Line Height ##
- Use more line height for Thai
```

### ✅ DO: Update When Patterns Change

```md
## Change Log ##

### March 2026 - Carousel Pattern Update
- ❌ OLD: Detail pages used thumbnail carousels
- ✅ NEW: All detail pages now use dots navigation
- **Reason:** Better mobile UX, cleaner design
- **Migration:** Updated ExhibitionDetailPage, MovingImageDetailPage, ArtistDetailPage
```

### ❌ DON'T: Write Vague Rules

```md
❌ Avoid:
- "Make it look good"
- "Use appropriate spacing"
- "Keep things consistent"
- "Follow best practices"
```

### ❌ DON'T: Duplicate Information

```md
❌ BAD: (Repeating same rule in multiple places)
## Exhibitions ##
- Date format: "DD Month YYYY - DD Month YYYY"

## Events ##
- Date format: "DD Month YYYY - DD Month YYYY"

## Blog Posts ##
- Date format: "DD Month YYYY - DD Month YYYY"

✅ GOOD: (One global rule)
## Global Date Format ##
- **All Content Types:** "DD Month YYYY - DD Month YYYY"
- **Applies to:** Exhibitions, Events, Blog Posts, Activities, Residencies
```

---

## 7. Real Examples from Bangkok Kunsthalle

### Example 1: Data Location Enforcement

**Guideline:**
```md
## Moving Image Data Updates ##
All gallery data stored in `/utils/movingImageData.ts` within each program object.
The `/utils/movingImageGalleryData.ts` file has been cleared and is now deprecated.
```

**Effect:**
- ✅ AI knows exactly where to add new Moving Image programs
- ✅ AI won't create new gallery files
- ✅ Prevents data fragmentation
- ✅ Clear migration path documented

---

### Example 2: Consistent Spacing Pattern

**Guideline:**
```md
## Menu Overlay Guidelines ##
- **Gutters:** Left and right gutters must be exactly `6vw`
- **Bottom Bar:** Positioned `10vh` from the bottom
- **Typography:** All menu items must use `18px` font size
```

**Data Architecture:**
```tsx
// /components/layout/MenuOverlay.tsx

export function MenuOverlay() {
  return (
    <motion.div className="fixed inset-0">
      {/* ✅ 6vw gutters enforced */}
      <motion.div className="px-[6vw] pt-[8vh] pb-[8vh]">
        {sitemap.map(item => (
          {/* ✅ 18px font enforced */}
          <button className="text-[18px]">
            {item.label}
          </button>
        ))}
        
        {/* ✅ 10vh from bottom enforced */}
        <div className="mt-auto h-[10vh]">
          {/* Language switcher */}
        </div>
      </motion.div>
    </motion.div>
  );
}
```

---

### Example 3: Display Pattern Standardization

**Guideline:**
```md
## Detail Page Meta Information ##
- **Title, Date, Curator Spacing:** Use `gap-0` for tight vertical stacking
- **Curator Section:** Separate from main meta with `mt-8`
```

**Resulting Component Pattern:**
```tsx
// ✅ Used in ExhibitionDetailPage, MovingImageDetailPage, ArtistDetailPage

<div className="flex flex-col gap-0">
  <h1>{title}</h1>
  <p>{artist}</p>
  <p>{date}</p>
</div>

<div className="mt-8 flex flex-col gap-0">
  <p>Curated by</p>
  <p>{curator}</p>
</div>
```

**Benefit:** All 3 detail page types look identical and consistent

---

## 🎓 Summary: Guidelines as Architecture Foundation

```
┌───────────────────────────────────────────────────────────┐
│                     Guidelines.md                          │
│  "Single source of truth for all project patterns"        │
└───────────────┬───────────────────────────────────────────┘
                │
                ├─────────────────┬─────────────────┬────────────────┐
                │                 │                 │                │
                ▼                 ▼                 ▼                ▼
        ┌───────────────┐ ┌───────────────┐ ┌──────────────┐ ┌──────────────┐
        │ Data Files    │ │ Components    │ │ Styles       │ │ Config       │
        │ /utils/*.ts   │ │ /components/* │ │ globals.css  │ │ siteConfig   │
        └───────────────┘ └───────────────┘ └──────────────┘ └──────────────┘
```

### The Guidelines-Driven Development Process

1. **Write Guideline** → Define the pattern/rule
2. **Create Data Structure** → Implement data format following guideline
3. **Build Component** → Render data according to guideline
4. **AI Maintains** → AI reads guideline before every change
5. **Update Guideline** → When patterns evolve, update guideline first

### Key Takeaways

✅ **Guidelines enforce data architecture** by defining:
- Where data lives (`/utils/movingImageData.ts`)
- How data is structured (`{ en: string, th: string }`)
- How data is displayed (`gap-0`, `leading-tight`)
- What patterns to use (dots not thumbnails)

✅ **Good guidelines are:**
- Specific (exact class names, values)
- Measurable (can be validated)
- Located (file paths included)
- Explained (rationale for non-obvious rules)

✅ **Benefits:**
- Consistency across entire codebase
- Easy onboarding for new developers
- AI can maintain standards automatically
- Single point of change for patterns

### Next Steps

1. **Copy this template** to your project
2. **Customize guidelines** for your domain (e-commerce, blog, SaaS, etc.)
3. **Document existing patterns** before changing them
4. **Update guidelines** as patterns evolve
5. **Review with AI** to ensure understanding

---

**Remember:** Guidelines.md is not just documentation—it's the foundation that keeps your data architecture consistent and maintainable! 🚀
