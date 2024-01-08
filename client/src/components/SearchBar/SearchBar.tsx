"use client";
import React, { useState, ChangeEvent, MouseEvent } from "react";

type SearchBarProps = {};

const SearchBar: React.FC<SearchBarProps> = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    console.log("Searching for " + searchTerm);
  };

  return (
    <div className="flex items-center space-x-2 m-auto my-4 w-full">
      <input
        type="text"
        placeholder="| Type to search ..."
        value={searchTerm}
        onChange={handleInputChange}
        className="border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500 w-9/12 "
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 w-3/12"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
