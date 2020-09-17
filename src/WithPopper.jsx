import React, { useState } from "react";
import { usePopper } from "react-popper";
import Calendar from "./Calendar";

function WithPopper(props) {
  const [visible, setVisibility] = useState(false);
  const [referenceRef, setReferenceRef] = useState(null);
  const [popperRef, setPopperRef] = useState(null);
  const [inputDate, setInputDate] = useState();

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

  function handlewithPopperClick(event) {
    setVisibility(!visible);
  }

  return (
    <React.Fragment>
      <input
        ref={setReferenceRef}
        onClick={handlewithPopperClick}
        type="text"
        placeholder="Calendar picker"
        style={{ height: 30, width: 500, marginTop: 50, padding: 10 }}
        value={inputDate}
      />

      <div ref={setPopperRef} style={styles.popper} {...attributes.popper}>
        {visible && (
          <Calendar
            setInputDate={setInputDate}
            hideCalendar={() => setVisibility(false)}
          />
        )}
      </div>
    </React.Fragment>
  );
}

export default WithPopper;
