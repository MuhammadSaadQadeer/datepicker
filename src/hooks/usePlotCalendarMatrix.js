import {
  addDays,
  format,
  getMonth,
  getYear,
  isThisMonth,
  isToday,
  startOfWeek,
} from "date-fns";
import { getMonthName, range } from "../utils";

/**
 *
 * useCalendarMatrix takes in year, month, weekStartsOn, rows and cols,
 * and returns a two dimensional array containing days of the month, year and month name
 *
 * @param {string} year
 * @param {string} month
 * @param {string} weekStartsOn
 * @param {string} rows
 * @param {string} cols
 *
 * @returns {Object}
 *
 */

function useCalendarMatrix(
  { year, month, weekStartsOn } = {
    year: getYear(new Date()),
    month: getMonth(new Date()),
    weekStartsOn: 0,
    rows: range(5),
    cols: range(7),
  }
) {
  const calendar = [];
  const date = new Date(year, month);
  let currentDate = startOfWeek(date, { weekStartsOn });

  range(5).forEach(() => {
    const week = [];
    range(7).forEach(() => {
      week.push({
        day: format(currentDate, "dd"),
        fulldate: currentDate,
        current: isThisMonth(currentDate),
        today: isToday(currentDate),
      });
      currentDate = addDays(currentDate, 1);
    });

    calendar.push(week);
  });
  return { calendar, year, month: getMonthName(month) };
}

export default useCalendarMatrix;
