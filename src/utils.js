import {
  addDays,
  format,
  getMonth,
  getYear,
  isThisMonth,
  isToday,
  startOfWeek,
} from "date-fns";

const rows = range(5);
const cols = range(7);

export function range(n) {
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
