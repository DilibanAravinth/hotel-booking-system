"use client";
import CITIES from "@/constants/Cities";
import React, { ChangeEvent } from "react";

type LocationSelectProps = {
  onChange: (value: ChangeEvent<HTMLSelectElement>) => void;
};

const LocationSelect: React.FC<LocationSelectProps> = ({ onChange }) => {
  return (
    <select onChange={onChange} className="border px-2 py-1">
      {CITIES.map((city) => {
        return (
          <option key={city} value={city}>
            {city}
          </option>
        );
      })}
    </select>
  );
};

export default LocationSelect;
