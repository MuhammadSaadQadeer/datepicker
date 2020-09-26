import React, { useState } from "react";
import { usePopper } from "react-popper";
import "./App.css";
import Calendar from "./Calendar";

function MainContainer(props) {
  // Props destructuring and their default values

  const [visible, setVisibility] = useState(false);
  const [referenceRef, setReferenceRef] = useState(null);
  const [popperRef, setPopperRef] = useState(null);
  const [inputDate, setInputDate] = useState();

  const {
    placeholder = "MM-dd-yyyy",
    format = "MM-dd-yyyy",
    onDateSelection = setInputDate,
    value = inputDate,
  } = props;
  const { styles, attributes } = usePopper(referenceRef, popperRef, {
    placement: "auto",
    modifiers: [
      {
        name: "offset",
        enabled: true,
        options: {
          offset: [0, 0],
        },
      },
    ],
  });

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
      <React.Fragment>
        <input
          ref={setReferenceRef}
          onClick={() => setVisibility(!visible)}
          type="text"
          placeholder={placeholder}
          value={value}
          name={props.name}
          {...props}
          {...props.inputProps}
        />

        <div ref={setPopperRef} style={styles.popper} {...attributes.popper}>
          {visible && (
            <Calendar
              format={format}
              onDateSelection={onDateSelection}
              hideCalendar={() => setVisibility(false)}
            />
          )}
        </div>
      </React.Fragment>
    </div>
  );
}

export default MainContainer;
