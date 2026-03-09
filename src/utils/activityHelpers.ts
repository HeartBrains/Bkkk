import { RECORDS } from './records';

/**
 * Get current activities
 * Returns activities with status 'current'
 */
export function getCurrentActivities() {
  return RECORDS.filter(
    record => record.category === 'activity' && record.status === 'current'
  );
}

/**
 * Get upcoming activities
 * Returns activities with status 'upcoming'
 */
export function getUpcomingActivities() {
  return RECORDS.filter(
    record => record.category === 'activity' && record.status === 'upcoming'
  );
}
