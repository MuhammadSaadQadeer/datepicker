import React from "react";
import InputContainer from "../InputContainer";

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
      <InputContainer
        format={"dd/MM/yyyy"}
        placeholder={`Pick a date`}
        name={field.name}
        inputProps={{
          readOnly: true,
          style: { width: 334, height: 30, padding: 5 },
          placeholder: placeholder,
          disabled: disabled,
        }}
        onDateSelection={(day) => {
          setFieldTouched(field.name, true);
          setFieldValue(field.name, day);
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
