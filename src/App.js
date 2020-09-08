import React from "react";
import "./App.css";
import { getCalendarData } from "./utils";

function App() {
  return (
    <div className="App">
      <div style={{ display: "flex", flexDirection: "row"}}>
        {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((item) => {
          return <div style={{padding: 5}}>{item}</div>;
        })}
      </div>
      {getCalendarData().map((item) => {
        return (
          <div style={{ display: "flex", flexDirection: "row" , padding:20}}>
            {item.map((col) => {
              return (
                <div style={{ padding: 10 }}>{`${col.date}`} </div>
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
