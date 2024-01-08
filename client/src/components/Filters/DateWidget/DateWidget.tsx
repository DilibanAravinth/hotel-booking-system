"use client";
import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

const DateWidget = () => {
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    console.log({ startDate });
  }, [startDate]);

  return (
    <DatePicker
      className="border px-2 py-1"
      selected={startDate}
      onChange={(date: Date) => setStartDate(date)}
    />
  );
};

export default DateWidget;
