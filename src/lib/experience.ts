/**
 * Single source of truth for career start.
 * Change this date and every "X+ years" string across the site updates.
 */
export const CAREER_START = new Date('2024-02-01T00:00:00Z');

export interface ExperienceDuration {
  totalMonths: number;
  years: number;
  months: number;
  /** Big value shown in stat tiles, e.g. "2+" or "6" */
  shortValue: string;
  /** Label under the big value, e.g. "years backend" */
  shortLabel: string;
  /** Full human string, e.g. "2 yrs 4 mos" */
  longDisplay: string;
  /** Line used in the hero terminal */
  terminalDisplay: string;
}

function plural(n: number, singular: string, pluralForm = `${singular}s`) {
  return n === 1 ? singular : pluralForm;
}

export function getExperienceDuration(now: Date = new Date()): ExperienceDuration {
  let totalMonths =
    (now.getUTCFullYear() - CAREER_START.getUTCFullYear()) * 12 +
    (now.getUTCMonth() - CAREER_START.getUTCMonth());

  // Not yet reached the same day-of-month this month? Don't count it.
  if (now.getUTCDate() < CAREER_START.getUTCDate()) {
    totalMonths -= 1;
  }
  if (totalMonths < 0) totalMonths = 0;

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  // "2 yrs 4 mos" / "2 yrs" / "6 mos"
  const longParts: string[] = [];
  if (years > 0) longParts.push(`${years} yr${years === 1 ? '' : 's'}`);
  if (months > 0) longParts.push(`${months} mo${months === 1 ? '' : 's'}`);
  const longDisplay = longParts.length ? longParts.join(' ') : '< 1 mo';

  // Big stat value: floor of years once you've crossed 1 year, otherwise months.
  const shortValue = years >= 1 ? `${years}+` : `${totalMonths}`;
  const shortLabel =
    years >= 1
      ? `${plural(years, 'year')} backend`
      : `${plural(totalMonths, 'month')} backend`;

  // Hero terminal line
  let terminalDisplay: string;
  if (years >= 1 && months > 0) {
    terminalDisplay = `${years} yr${years === 1 ? '' : 's'} ${months} mo${months === 1 ? '' : 's'}, still shipping`;
  } else if (years >= 1) {
    terminalDisplay = `${years} yr${years === 1 ? '' : 's'}, still shipping`;
  } else {
    terminalDisplay = `${totalMonths} mo${totalMonths === 1 ? '' : 's'} in`;
  }

  return { totalMonths, years, months, shortValue, shortLabel, longDisplay, terminalDisplay };
}