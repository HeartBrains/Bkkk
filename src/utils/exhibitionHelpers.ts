import { WPPost } from './types';
import { exhibitions, exhibitionToWPPost } from './exhibitionsDataNew';
import { getDetailContent } from './detailContent';

// Reference date: March 10, 2026
const today = new Date(2026, 2, 10);

// Get upcoming exhibitions (start date is after today)
export function getUpcomingExhibitions(language: 'en' | 'th' = 'en'): WPPost[] {
  return exhibitions
    .filter(exhibition => {
      const startDate = new Date(exhibition.fromDate);
      return startDate > today;
    })
    .sort((a, b) => new Date(b.fromDate).getTime() - new Date(a.fromDate).getTime())
    .map(exhibition => exhibitionToWPPost(exhibition, language));
}

// Get current exhibitions (today is between start and end date)
export function getCurrentExhibitions(language: 'en' | 'th' = 'en'): WPPost[] {
  return exhibitions
    .filter(exhibition => {
      const startDate = new Date(exhibition.fromDate);
      const endDate = new Date(exhibition.toDate);
      return today >= startDate && today <= endDate;
    })
    .sort((a, b) => new Date(b.fromDate).getTime() - new Date(a.fromDate).getTime())
    .map(exhibition => exhibitionToWPPost(exhibition, language));
}

// Get past exhibitions (end date is before today)
export function getPastExhibitions(language: 'en' | 'th' = 'en'): WPPost[] {
  return exhibitions
    .filter(exhibition => {
      const endDate = new Date(exhibition.toDate);
      return endDate < today;
    })
    .sort((a, b) => new Date(b.fromDate).getTime() - new Date(a.fromDate).getTime())
    .map(exhibition => exhibitionToWPPost(exhibition, language));
}