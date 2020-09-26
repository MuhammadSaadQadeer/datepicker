import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

const sampleProps = {
  placeholder: "Date Picker",
  format: "dd/MM/yyyy",
  name: "pickDate",
  inputProps: {
    readOnly: true,
    style: {
      height: 28,
      width: 300,
      outline: "none",
      padding: 5,
    },
  },
};

ReactDOM.render(
  <React.StrictMode>
    <App {...sampleProps} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
