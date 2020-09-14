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
    isThisMonth,
    isToday
  } from "date-fns";
  
  const rows = range(5);
  const cols = range(7);
  
  function range(n) {
    return [...Array(n).keys()];
  }

  export function getMonthName(number){
    const monthMap = {
      0: "January",
      1:"February",
      2:"March",
      3:"April",
      4:"May",
      5:"June",
      6:"July",
      7:"August",
      8:"September",
      9:"October",
      10:"November",
      11:"December"
    }
    return monthMap[number]
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
                date: format(curDate, "dd"),
                fulldate:curDate,
                current:true,
                today: isToday(curDate)
              });   
          }else {
            week.push({
                day: getDayName(curDate),
                date: format(curDate, "dd"),
                fulldate:curDate,
                current:false,
                today: isToday(curDate)
              });
          }
       
        curDate = addDays(curDate, 1);
      });
  
      matrix.push(week);
    });
    // console.log(year, getMonthName(month), weekStartsOn)
    return {calendar:matrix, year, month:getMonthName(month)};
  }
  
  