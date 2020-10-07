import {
  addYears,
  format,
  getMonth,
  getYear,
  isEqual,
  subYears,
} from "date-fns";
import React, { useState } from "react";
import "./calendar.css";
import useCalendarMatrix from "./hooks/usePlotCalendarMatrix";
import { getMonthName, WEEK_DAYS } from "./utils";

function Calendar(props) {
  const [month, setMonth] = useState(getMonth(new Date()));
  const [year, setYear] = useState(getYear(new Date()));
  const [selected, setSelected] = useState(format(new Date(), "dd"));

  const {
    calendar,
    year: dayPickerYear,
    month: dayPickerMonth,
  } = useCalendarMatrix({ year, month });

  const incrementMonthAndYear = () => {
    let monthNumber = month;
    monthNumber++;
    setMonth(monthNumber);
    if (monthNumber > 11) {
      setYear(getYear(addYears(new Date(year, month, 1), 1)));
      setMonth(0);
    }
  };

  const decrementMonthAndYear = () => {
    let monthNumber = month;
    monthNumber--;
    setMonth(monthNumber);
    if (monthNumber < 0) {
      setYear(getYear(subYears(new Date(year, month, 1), 1)));
      setMonth(11);
    }
  };

  return (
    <div className="calendar-container">
      {/* Month and Year Changer */}
      <div className="cal-month-year-changer">
        <div style={{ color: "black", textAlign: "center" }}>
          {getMonthName(month)} {year}
        </div>
        <div className="cal-d-flex cal-justify-content-space-evenly">
          <button className="cal-action-btn" onClick={decrementMonthAndYear}>
            {"<"}
          </button>
          &nbsp;
          <button className="cal-action-btn" onClick={incrementMonthAndYear}>
            {">"}
          </button>
        </div>
      </div>

      <div className={"cal-d-flex cal-flex-direction-row"}>
        {WEEK_DAYS.map((item) => (
          <div className="cal-week-days">{item}</div>
        ))}
      </div>

      {calendar.map((item) => {
        return (
          <div className={"cal-d-flex cal-flex-direction-row"}>
            {item.map((col) => {
              return (
                <div
                  id="date-labels"
                  onClick={() => {
                    setSelected(col.fulldate);
                    const formattedDate = format(col.fulldate, props.format);
                    props.onDateSelection(formattedDate);
                    props.hideCalendar();
                  }}
                  className="cal-day"
                  style={{
                    color: !col.current ? "lightgray" : "black",
                    backgroundColor: isEqual(selected, col.fulldate)
                      ? "aliceblue"
                      : "",
                  }}
                >
                  {`${col.day}`}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Calendar;
