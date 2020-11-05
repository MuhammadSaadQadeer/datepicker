# simple-day-picker (with Popper)

Minimilistic and light weight date picker widget with popper js to use with React.js

## Get Started

`npm install simple-day-picker`

```
import SimpleDayPicker from "simple-day-picker";

<SimpleDayPicker
        format={"dd/MM/yyyy"}
        placeholder={`Pick a date`}
        name={"currentDate"}
        inputProps={{
          readOnly: true,
          style: { width: 334, height: 30, padding: 5 },
          placeholder: placeholder
        }}
        onDateSelection={(day) => {
          console.log({day}) // currentDate Value
        }}
        value={field.value}/>
```
