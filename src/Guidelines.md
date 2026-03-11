**Add your own guidelines here**
## Moving Image Data Updates (December 2024)

Successfully updated gallery image arrays for all 5 Moving Image programs:
1. **"Shapeshifting Spaces"** - Added full gallery of 12 images
2. **"we gather"** - Added full gallery of 15 images  
3. **"seeds"** - Added full gallery of 13 images
4. **"Infringes"** - Gallery already complete with 13 images
5. **"Search for Life I"** - Gallery already complete with 8 images

All gallery data stored in `/utils/movingImageData.ts`. Carousel system in Moving Image detail pages now uses first image from each gallery as the feature image in listings.

## Exhibitions Data Updates (March 2025)

Successfully updated gallery image arrays for all 10 Exhibitions with available images from CSV:
1. **Nine Plus Five Works** - 51 images ✅
2. **nostalgia for unity** - 50 images ✅  
3. **MEND PIECE** - 14 images ✅
4. **Like Nouns Slipping Into Verbs** - 22 images ✅
5. **Calligraphic Abstraction** - 32 images ✅
6. **Painting as Event** - 8 images ✅
7. **Poetics of Horizontality** - 27 images ✅
8. **This page is intentionally left blank** - 25 images ✅
9. **Mitta del Santi** - 13 images ✅
10. **FOREVER LOVE SOUL ENGINE** - 18 images ✅
11. **Blind Spots: Panels, Paravents and Screens** - 9 images ✅

Gallery data stored in `/utils/exhibitionsGalleryData.ts` and imported into `/utils/exhibitionsData.ts`. The `createExhibitionData` function accepts an optional `gallery` parameter. When provided, the first image in the gallery array is automatically used as the feature image in exhibition listings. All mockup Unsplash images have been replaced with real exhibition photography from the CSV.

## font consistent ##
- make font size consistent for entire website, adjust to 5  font sizes, font's weight to 4 weight

## Detail Page Meta Information ##
- **Title, Date, Curator Spacing:** Use `gap-0` for title, artist/category, and date to create tight vertical stacking with no gap between lines
- **Line Height:** All meta information (title, artist, date, curator) must use `leading-tight` class for compact line spacing
- **Curator Section:** Separate curator information from main meta with `mt-8` (8 spacing units gap between sections)
- **Curated By Format:** Display "Curated by" label and curator name as separate lines with `gap-0`, both using `leading-tight`
- **Thai Line Height:** Apply `leading-[1.82em]` to Thai text for proper readability
- **Statement Content:** The statement/description content on detail pages must use `text-2xl` for font size. For English text, use default line-height (no leading class). For Thai text, use `leading-[1.82em]`

## Menu Overlay Guidelines ##
- **Layout & Alignment:** The Menu Overlay must use a percent-based Grid & Alignment system.
- **Gutters:** Left and right gutters must be exactly `6vw`.
- **Bottom Bar:** The bottom bar should be positioned `10vh` from the bottom.
- **Typography:** All menu items (both primary and sub-menus) must use an `18px` font size, white color (`text-white`), and be strictly left-aligned.
- **Controls Alignment:** The close button and language switcher must be strictly right-aligned, snapping to the precise grid line to match the layout.
- **Background:** The menu overlay background should be completely transparent without any thin line borders.

## Artist Residency Period ##
- **Standard Period:** All artist residency periods must be set to "January - June 2026" (English) and "มกราคม - มิถุนายน 2569" (Thai)
- **Data Location:** Period data is stored in `/utils/residencyData.ts` in the `ARTISTS_DATA` array
- **Format:** Use spaced hyphen ( - ) between months, not en-dash (–)

## Date Format Standard ##
- **Global Date Format:** All date ranges throughout the website must use spaced hyphen format: "Month - Month Year"
- **Examples:** "13 December 2025 - 31 May 2026", "01 Oct - 01 Nov 2025"
- **Thai Dates:** "วัน เดือน ปี - วัน เดือน ปี" format with spaced hyphen
- **DO NOT USE:** En-dash (–) or hyphen without spaces
- **ALWAYS USE:** Space-hyphen-space ( - ) format

## Social Media & Contact Information ##
- **Instagram:** https://www.instagram.com/bangkok_kunsthalle/
- **Facebook:** https://www.facebook.com/BangkokKunsthalle
- **Website:** http://www.khaoyaiart.com
- **Email:** info@bangkok-kunsthalle.org
- **Usage:** Always use these exact URLs across all pages (Contact page, Footer, and anywhere social media links appear)

## Moving Image Exhibition Gallery Images ##
- **Data Source:** Exhibition gallery images are stored in `/utils/movingImageData.ts`
- **Image Organization:** Each moving image program has a `gallery` array containing URLs to exhibition images
- **Feature Image:** The first image in the `gallery` array (index 0) is used as the feature/hero image on detail pages
- **Display Layout:** The `/components/pages/MovingImageDetailPage.tsx` uses a carousel system with:
  - Full-width hero section displaying gallery images with auto-play
  - Thumbnail navigation at the bottom right (desktop) or bottom (mobile)
  - Image counter and navigation arrows on hover
- **Current Programs with Galleries:**
  - **Infringes:** 7 images
  - **Search for Life I:** 7 images  
  - **Shapeshifting Spaces:** 25 images
  - **we gather:** 29 images
  - **seeds:** 13 images
- **Image Format:** All images are hosted on CDN (irp.cdn-website.com) with proper URLs in the gallery arrays

<!--

System Guidelines

Use this file to provide the AI with rules and guidelines you want it to follow.
This template outlines a few examples of things you can add. You can add your own sections and format it to suit your needs

TIP: More context isn't always better. It can confuse the LLM. Try and add the most important rules you need

# General guidelines

Any general rules you want the AI to follow.
For example:

* Only use absolute positioning when necessary. Opt for responsive and well structured layouts that use flexbox and grid by default
* Refactor code as you go to keep code clean
* Keep file sizes small and put helper functions and components in their own files.

--------------

# Design system guidelines
Rules for how the AI should make generations look like your company's design system

Additionally, if you select a design system to use in the prompt box, you can reference
your design system's components, tokens, variables and components.
For example:

* Use a base font-size of 14px
* Date formats should always be in the format “Jun 10”
* The bottom toolbar should only ever have a maximum of 4 items
* Never use the floating action button with the bottom toolbar
* Chips should always come in sets of 3 or more
* Don't use a dropdown if there are 2 or fewer options

You can also create sub sections and add more specific details
For example:


## Button
The Button component is a fundamental interactive element in our design system, designed to trigger actions or navigate
users through the application. It provides visual feedback and clear affordances to enhance user experience.

### Usage
Buttons should be used for important actions that users need to take, such as form submissions, confirming choices,
or initiating processes. They communicate interactivity and should have clear, action-oriented labels.

### Variants
* Primary Button
  * Purpose : Used for the main action in a section or page
  * Visual Style : Bold, filled with the primary brand color
  * Usage : One primary button per section to guide users toward the most important action
* Secondary Button
  * Purpose : Used for alternative or supporting actions
  * Visual Style : Outlined with the primary color, transparent background
  * Usage : Can appear alongside a primary button for less important actions
* Tertiary Button
  * Purpose : Used for the least important actions
  * Visual Style : Text-only with no border, using primary color
  * Usage : For actions that should be available but not emphasized
-->