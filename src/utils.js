import {
  addDays,
  format,
  getMonth,
  getYear,
  isFriday,
  isMonday,
  isSaturday,
  isSunday,
  isThisMonth,
  isThursday,
  isToday,
  isTuesday,
  isWednesday,
  startOfWeek,
} from "date-fns";

const rows = range(5);
const cols = range(7);

function range(n) {
  return [...Array(n).keys()];
}

export const WEEK_DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const MONTHS_ = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function getMonthName(number) {
  return MONTHS_[number];
}

function getDayName(date) {
  if (isMonday(date)) {
    return "MO";
  }
  if (isTuesday(date)) {
    return "TU";
  }
  if (isWednesday(date)) {
    return "WED";
  }
  if (isThursday(date)) {
    return "THU";
  }
  if (isFriday(date)) {
    return "FRI";
  }
  if (isSaturday(date)) {
    return "SAT";
  }
  if (isSunday(date)) {
    return "SUN";
  }
}

export function getCurrentDateWithWeek(year, month, weekStartsOn) {
  const date = new Date(year, month);
  return startOfWeek(date, { weekStartsOn });
}

export function getCalendarData(
  { year, month, weekStartsOn } = {
    year: getYear(new Date()),
    month: getMonth(new Date()),
    weekStartsOn: 0,
  }
) {
  const matrix = [];
  const date = new Date(year, month);
  let curDate = startOfWeek(date, { weekStartsOn });

  rows.forEach((row) => {
    const week = [];
    cols.forEach((col) => {
      week.push({
        day: getDayName(curDate),
        date: format(curDate, "dd"),
        fulldate: curDate,
        current: isThisMonth(curDate),
        today: isToday(curDate),
      });
      curDate = addDays(curDate, 1);
    });

    matrix.push(week);
  });

  return { calendar: matrix, year, month: getMonthName(month) };
}
