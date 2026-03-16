/**
 * Site Configuration
 * Centralized configuration for editable site-wide messages and settings
 */

export const siteConfig = {
  // Empty state messages - editable from here
  emptyStates: {
    comingSoon: {
      th: 'เร็วๆ นี้',
      en: 'Coming Soon'
    },
    noCurrentActivities: {
      th: 'ไม่มีกิจกรรมปัจจุบัน',
      en: 'No current activities'
    },
    noCurrentExhibitions: {
      th: 'ไม่มีนิทรรศการในขณะนี้',
      en: 'No current exhibitions'
    },
    noUpcomingExhibitions: {
      th: 'เร็วๆ นี้',
      en: 'Coming Soon'
    },
    noPastExhibitions: {
      th: 'เร็วๆ นี้',
      en: 'Coming Soon'
    },
    noCurrentMovingImage: {
      th: 'เร็วๆ นี้',
      en: 'Coming soon'
    },
    noUpcomingMovingImage: {
      th: 'เร็วๆ นี้',
      en: 'Coming soon'
    },
    noPastMovingImage: {
      th: 'เร็วๆ นี้',
      en: 'Coming soon'
    },
    noCurrentResidency: {
      th: 'เร็วๆ นี้',
      en: 'Coming soon'
    }
  }
};

/**
 * Helper function to get empty state message
 * @param key - The key for the empty state message
 * @param language - The current language ('th' or 'en')
 * @returns The translated message
 */
export function getEmptyStateMessage(
  key: keyof typeof siteConfig.emptyStates, 
  language: 'th' | 'en'
): string {
  return siteConfig.emptyStates[key][language];
}