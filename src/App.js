import React from "react";
import "./App.css";
import { getCalendarData } from "./utils";
import { isEqual, format } from "date-fns";

function App() {
  return (
    <div className="calendar-container">
      {<div style={{color:"black", textAlign:"center"}}>{getCalendarData().month}</div>}

      <div style={{ display: "flex", flexDirection: "row"}}>
        {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((item) => {
          return <div style={{padding: 4}}>{item}</div>;
        })}
      </div>
      {getCalendarData().calendar.map((item) => {
        return (
          <div style={{ display: "flex", flexDirection: "row"}}>
            {console.log("foo",item)}
            {item.map((col) => {
              return (
                <div style={{padding:10, color:!col.current ? 'lightgray':'black', backgroundColor: col.today ? 'aliceblue':''}}>{ `${col.date}`}
                
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
