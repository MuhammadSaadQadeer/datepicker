import React from "react";
import MainContainer from "../MainContainer";

const Picker = ({
  label,
  id,
  placeholder,
  disabled,
  displayformat,
  field,
  values,
  form: { touched, errors, setFieldValue, setFieldTouched },
  ...props
}) => {
  return (
    <div>
      <MainContainer
        format={"dd/MM/yyyy"}
        placeholder={`Pick a date`}
        name={field.name}
        inputProps={{
          readOnly: true,
          style: { width: 334 },
          placeholder: placeholder,
          disabled: disabled,
        }}
        onDateSelection={(day) => {
          console.log({ day });
          setFieldTouched(field.name, true);
          setFieldValue(field.name, day);
          console.log(field);
        }}
        value={field.value}
      />
      {/* {touched[field.name] && errors[field.name] && (
        <div className="input-error">{errors[field.name]}</div>
      )} */}
    </div>
  );
};

export default Picker;
