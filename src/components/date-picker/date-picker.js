import React, { useState } from "react";
import { enGB } from "date-fns/locale";
import { DatePicker } from "react-nice-dates";
import "react-nice-dates/build/style.css";
const Dater = () => {
  const [date, setDate] = useState();
  return (
    <DatePicker
      maximumDate={Date}
      style={{ width: "10rem" }}
      date={date}
      onDateChange={setDate}
      locale={enGB}
    >
      {({ inputProps, focused }) => (
        <input
          style={{ width: "10rem" }}
          className={"input" + (focused ? " -focused" : "")}
          {...inputProps}
        />
      )}
    </DatePicker>
  );
};
export default Dater;
