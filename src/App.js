import React, { useState } from "react";
import { usePopper } from "react-popper";
import Calendar from "./Calendar";

const App = () => {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: "arrow", options: { element: arrowElement } }],
  });

  return (
    <>
      <Calendar />
    </>
  );
};

export default App;
