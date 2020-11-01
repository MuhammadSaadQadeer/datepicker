import React from "react";
import "./App.css";
import InputContainer from "./InputContainer";

function App(props) {
  // Props destructuring and their default values
  return <InputContainer {...props} />;
}

export default App;
