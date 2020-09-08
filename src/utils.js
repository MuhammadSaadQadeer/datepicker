import {
    getYear,
    getMonth,
    addDays,
    startOfWeek,
    format,
    isMonday,
    isTuesday,
    isWednesday,
    isThursday,
    isFriday,
    isSaturday,
    isSunday,
    isThisMonth
  } from "date-fns";
  
  const rows = range(6);
  const cols = range(7);
  
  function range(n) {
    return [...Array(n).keys()];
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
  
  export function getCalendarData(
    { year, month, weekStartsOn } = {
      year: getYear(new Date()),
      month: getMonth(new Date()),
      weekStartsOn: 0
    }
  ) {
    const matrix = [];
    const date = new Date(year, month);
    let curDate = startOfWeek(date, { weekStartsOn });
  
    rows.forEach((row) => {
      const week = [];
      cols.forEach((col) => {
          if(isThisMonth(curDate)){
            week.push({
                day: getDayName(curDate),
                date: format(curDate, "dd")
              });
          }
       
        curDate = addDays(curDate, 1);
      });
  
      matrix.push(week);
    });
  
    return matrix;
  }
  
  