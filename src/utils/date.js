const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const WEEK = 7 * DAY;

export const relationshipStart = new Date(2025, 2, 22, 22, 23, 0);

function addLocal(date, values) {
  const next = new Date(date);

  if (values.years) {
    next.setFullYear(next.getFullYear() + values.years);
  }

  if (values.months) {
    next.setMonth(next.getMonth() + values.months);
  }

  if (values.days) {
    next.setDate(next.getDate() + values.days);
  }

  if (values.hours) {
    next.setHours(next.getHours() + values.hours);
  }

  if (values.minutes) {
    next.setMinutes(next.getMinutes() + values.minutes);
  }

  if (values.seconds) {
    next.setSeconds(next.getSeconds() + values.seconds);
  }

  return next;
}

function consumeCalendarUnit(cursor, end, unit, rawValue) {
  let value = Math.max(0, rawValue);

  while (value > 0 && addLocal(cursor, { [unit]: value }) > end) {
    value -= 1;
  }

  return {
    value,
    cursor: addLocal(cursor, { [unit]: value }),
  };
}

function consumeFixedUnit(cursor, end, unit, spanMs, multiplier = 1) {
  let value = Math.max(0, Math.floor((end - cursor) / spanMs));

  while (value > 0 && addLocal(cursor, { [unit]: value * multiplier }) > end) {
    value -= 1;
  }

  return {
    value,
    cursor: addLocal(cursor, { [unit]: value * multiplier }),
  };
}

export function getRelationshipDuration(now = new Date()) {
  if (now <= relationshipStart) {
    return {
      years: 0,
      months: 0,
      weeks: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  let cursor = new Date(relationshipStart);

  const years = consumeCalendarUnit(cursor, now, 'years', now.getFullYear() - cursor.getFullYear());
  cursor = years.cursor;

  const monthDifference =
    (now.getFullYear() - cursor.getFullYear()) * 12 + (now.getMonth() - cursor.getMonth());
  const months = consumeCalendarUnit(cursor, now, 'months', monthDifference);
  cursor = months.cursor;

  const weeks = consumeFixedUnit(cursor, now, 'days', WEEK, 7);
  cursor = weeks.cursor;

  const days = consumeFixedUnit(cursor, now, 'days', DAY);
  cursor = days.cursor;

  const hours = consumeFixedUnit(cursor, now, 'hours', HOUR);
  cursor = hours.cursor;

  const minutes = consumeFixedUnit(cursor, now, 'minutes', MINUTE);
  cursor = minutes.cursor;

  const seconds = consumeFixedUnit(cursor, now, 'seconds', SECOND);

  return {
    years: years.value,
    months: months.value,
    weeks: weeks.value,
    days: days.value,
    hours: hours.value,
    minutes: minutes.value,
    seconds: seconds.value,
  };
}
