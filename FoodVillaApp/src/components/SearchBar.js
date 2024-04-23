import { useState } from "react";
import { filterData } from "../utils/helper";

const SearchBar = ({ allRestaurants, setFilteredRestaurants }) => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search"
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
      />
      <button
        className="search-btn"
        onClick={() => {
          const data = filterData(searchInput, allRestaurants);
          setFilteredRestaurants(data);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
