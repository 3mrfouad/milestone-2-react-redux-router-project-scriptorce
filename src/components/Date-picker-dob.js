import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { subYears } from "date-fns";

import "react-datepicker/dist/react-datepicker.css";
import "../css/Date-picker.css";


const DatePickerDobComponent = () => {
  const [startDate, setStartDate] = useState(new Date("01/01/2000"));
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => {setStartDate(date);        
      }}
      peekNextMonth
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
      maxDate={subYears(new Date(), 18)}
      dateFormat="dd/MM/yyyy"
      inline
    />
  );
};

export default DatePickerDobComponent;
