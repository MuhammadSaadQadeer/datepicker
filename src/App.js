import React from "react";
import "./App.css";
import WithPopper from "./WithPopper";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 40,
        flexDirection: "column",
        height: 300,
        overflow: "auto",
      }}
    >
      <WithPopper />
    </div>
  );
};

export default App;
