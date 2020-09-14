import React, { useState } from "react";
import "./App.css";
import { getCalendarData, getMonthName } from "./utils";
import { isEqual, format, getMonth, getYear ,addYears} from "date-fns";

function App() {
  const [month, setMonth] = useState(getMonth(new Date()));
  const [year, setYear] = useState(getYear(new Date()));

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

  const incrementYear = () => {
    // if month is greater than 11 than we will add year into current year

    if(month == 11){
      console.log(new Date(year))
       setYear(getYear(addYears(new Date(year, month, 1), 1)))
    }
  }

  const decrementYear = () => {
    // if month is less than 0 than we will subtract year from current year
  }
  return (
    <div className="calendar-container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width:"15%"
        }}
      >
        <button onClick={decrementMonth}> {"<"} </button>
        <div style={{ color: "black", textAlign: "center" }}>
          {getMonthName(month)} {year}
        </div>
        <button onClick={()=>{incrementMonth();incrementYear();}}>{">"}</button>
      </div>

      <div style={{ display: "flex", flexDirection: "row" }}>
        {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((item) => {
          return <div style={{ padding: 4 }}>{item}</div>;
        })}
      </div>
      {getCalendarData({ year: year,
      month: month,
      weekStartsOn: 0}).calendar.map((item) => {
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
