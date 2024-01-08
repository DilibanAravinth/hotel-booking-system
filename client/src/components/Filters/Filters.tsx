"use client";
import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import Heading from "../Heading/Heading";
import LocationSelect from "./LocationSelect";

export default function Filters() {
  const initalDateProps = () => new Date();
  const [startDate, setStartDate] = useState(initalDateProps);
  const [endDate, setEndDate] = useState(initalDateProps);

  useEffect(() => {
    console.log({ startDate, endDate });
  }, [startDate, endDate]);

  const onLocationChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      console.log(event.target.value);
    },
    []
  );

  const onDateChange = useCallback(
    (dates: any) => {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
    },
    [setStartDate, setEndDate]
  );

  return (
    <div className="flex gap-4 items-center flex-row flex-wrap justify-center">
      <div className="flex flex-col items-center">
        <Heading title="Location" />
        <LocationSelect onChange={onLocationChange} />
      </div>
      <div className="flex flex-col items-center">
        <Heading title="Price" />
        <span className="flex gap-2">
          <input
            type="number"
            name="priceFrom"
            className="w-20 border px-2 py-1"
            placeholder="from"
          />
          <span>-</span>
          <input
            type="number"
            name="priceTo"
            className="w-20 border px-2 py-1"
            placeholder="to"
          />
        </span>
      </div>
      <div className="flex flex-col items-center ">
        <Heading title="Check-in & Check-out" />
        <DatePicker
          selected={startDate}
          onChange={onDateChange}
          minDate={new Date()}
          startDate={startDate}
          endDate={endDate}
          className="border px-2 py-1"
          selectsRange
          showDisabledMonthNavigation
        />
      </div>
    </div>
  );
}
