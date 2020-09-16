import {
  addYears,
  format,
  getMonth,
  getYear,
  isEqual,
  subYears,
} from "date-fns";
import React, { useState } from "react";
import "./App.css";
import { getCalendarData, getMonthName } from "./utils";

function Calendar() {
  const [month, setMonth] = useState(getMonth(new Date()));
  const [year, setYear] = useState(getYear(new Date()));
  const [selected, setSelected] = useState(format(new Date(), "dd"));
  const incrementMonth = () => {
    let monthNumber = month;
    monthNumber++;
    setMonth(monthNumber);
    if (monthNumber > 11) {
      setYear(getYear(addYears(new Date(year, month, 1), 1)));
      setMonth(0);
    }
  };

  const decrementMonth = () => {
    let monthNumber = month;
    monthNumber--;
    setMonth(monthNumber);
    if (monthNumber < 0) {
      setYear(getYear(subYears(new Date(year, month, 1), 1)));
      setMonth(11);
    }
  };

  return (
    <div>
      <div className="calendar-container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <div style={{ color: "black", textAlign: "center" }}>
            {getMonthName(month)} {year}
          </div>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <button
              style={{ background: "transparent", borderRadius: 4 }}
              onClick={decrementMonth}
            >
              {"<"}
            </button>
            &nbsp;
            <button
              style={{ background: "transparent", borderRadius: 4 }}
              onClick={incrementMonth}
            >
              {">"}
            </button>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "row" }}>
          {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((item) => {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  padding: 18,
                  width: 10,
                  height: 10,
                }}
              >
                {item}
              </div>
            );
          })}
        </div>

        {getCalendarData({
          year: year,
          month: month,
          weekStartsOn: 0,
        }).calendar.map((item) => {
          return (
            <div style={{ display: "flex", flexDirection: "row" }}>
              {item.map((col) => {
                return (
                  <div
                    id="date-labels"
                    onClick={() => setSelected(col.fulldate)}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: 18,
                      color: !col.current ? "lightgray" : "black",
                      backgroundColor: isEqual(selected, col.fulldate)
                        ? "aliceblue"
                        : "",
                      width: 10,
                      height: 10,
                    }}
                  >
                    {`${col.date}`}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Calendar;
