import { useState } from "react";
import { filterData } from "../utils/helper";

const SearchBar = ({ allRestaurants, setFilteredRestaurants }) => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className="px-4 flex w-full justify-items-end">
      <div className="w-1/2 m-4 p-4">
        <input
          type="text"
          className="w-full p-2 border-solid border-black"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
      </div>
      <div className="flex items-center">
        <button
          className="px-4 py-2 bg-green-800 m-4 rounded-lg hover:bg-green-600 text-white"
          onClick={() => {
            const data = filterData(searchInput, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        <button
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-800"
          onClick={() => {
            const filteredList = allRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
