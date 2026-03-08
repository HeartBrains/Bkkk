**Add your own guidelines here**
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