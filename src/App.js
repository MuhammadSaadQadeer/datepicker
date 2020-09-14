import React, { useState } from "react";
import "./App.css";
import { getCalendarData, getMonthName } from "./utils";
import { isEqual, format, getMonth } from "date-fns";

function App() {
  const [month, setMonth] = useState(getMonth(new Date()));

  const incrementMonth = () => {
    let monthNumber = month;
    monthNumber++;
    setMonth(monthNumber);
    if (monthNumber > 11) {
      setMonth(0);
    }
  };

  const decrementMonth = () => {
    let monthNumber = month;
    monthNumber--;
    setMonth(monthNumber);
    if (monthNumber < 0) {
      setMonth(11);
    }
  };
  return (
    <div className="calendar-container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <button onClick={decrementMonth}> {"<"} </button>
        <div style={{ color: "black", textAlign: "center" }}>
          {getMonthName(month)}
        </div>
        <button onClick={incrementMonth}>{">"}</button>
      </div>

      <div style={{ display: "flex", flexDirection: "row" }}>
        {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((item) => {
          return <div style={{ padding: 4 }}>{item}</div>;
        })}
      </div>
      {getCalendarData().calendar.map((item) => {
        return (
          <div style={{ display: "flex", flexDirection: "row" }}>
            {item.map((col) => {
              return (
                <div
                  style={{
                    padding: 10,
                    color: !col.current ? "lightgray" : "black",
                    backgroundColor: col.today ? "aliceblue" : "",
                  }}
                >
                  {`${col.date}`}
                </div>
              );
            })}
            <br />
          </div>
        );
      })}
    </div>
  );
}

export default App;
