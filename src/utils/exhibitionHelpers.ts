import { WPPost } from './types';
import { getAllExhibitions } from './exhibitionsData';

// Parse exhibition date range from format like "26 September 2025 - 8 February 2026" or "14 March - 30 June 2026"
function parseExhibitionDate(dateString: string): { startDate: Date; endDate: Date } | null {
  try {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                    'July', 'August', 'September', 'October', 'November', 'December'];
    
    // Split by dash
    const parts = dateString.split(' - ').map(s => s.trim());
    if (parts.length !== 2) return null;
    
    const [startPart, endPart] = parts;
    
    // Parse end date first to get the year
    const endTokens = endPart.split(' ').filter(t => t);
    const endDay = parseInt(endTokens[0]);
    const endMonth = months.indexOf(endTokens[1]);
    const endYear = parseInt(endTokens[2]);
    
    // Parse start date
    const startTokens = startPart.split(' ').filter(t => t);
    const startDay = parseInt(startTokens[0]);
    const startMonth = months.indexOf(startTokens[1]);
    
    // If start date has a year, use it; otherwise use end year (or end year - 1 if start month > end month)
    let startYear: number;
    if (startTokens.length === 3) {
      startYear = parseInt(startTokens[2]);
    } else {
      // No year in start date - infer from end date
      if (startMonth > endMonth) {
        // Exhibition spans across year boundary
        startYear = endYear - 1;
      } else {
        startYear = endYear;
      }
    }
    
    const startDate = new Date(startYear, startMonth, startDay);
    const endDate = new Date(endYear, endMonth, endDay);
    
    return { startDate, endDate };
  } catch (error) {
    return null;
  }
}

// Get upcoming exhibitions (start date is after today)
export function getUpcomingExhibitions(language: 'en' | 'th' = 'en'): WPPost[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Reset time to start of day
  
  const allExhibitions = getAllExhibitions(language);
  
  return allExhibitions
    .map(exhibition => {
      const parsed = parseExhibitionDate(exhibition.date);
      return { exhibition, parsed };
    })
    .filter(({ parsed }) => parsed !== null && parsed.startDate > today)
    .sort((a, b) => a.parsed!.startDate.getTime() - b.parsed!.startDate.getTime())
    .map(({ exhibition }) => exhibition);
}

// Get current exhibitions (today is between start and end date)
export function getCurrentExhibitions(language: 'en' | 'th' = 'en'): WPPost[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Reset time to start of day
  
  const allExhibitions = getAllExhibitions(language);
  
  return allExhibitions
    .filter(exhibition => {
      const parsed = parseExhibitionDate(exhibition.date);
      if (!parsed) return false;
      return today >= parsed.startDate && today <= parsed.endDate;
    })
    .sort((a, b) => {
      const parsedA = parseExhibitionDate(a.date);
      const parsedB = parseExhibitionDate(b.date);
      if (!parsedA || !parsedB) return 0;
      return parsedA.startDate.getTime() - parsedB.startDate.getTime();
    });
}
