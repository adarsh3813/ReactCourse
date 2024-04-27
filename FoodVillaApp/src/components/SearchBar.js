import { useContext, useState } from "react";
import { filterData, filterRating } from "../utils/helper";
import UserContext from "../utils/UserContext";

const SearchBar = ({ allRestaurants, setFilteredRestaurants }) => {
  const [searchInput, setSearchInput] = useState("");
  const { loggedInUser, setUserName } = useContext(UserContext);

  return (
    <div className="px-4 flex w-full justify-items-end">
      <div className="w-1/2 m-4 p-4">
        <input
          type="text"
          className="w-full p-2 border border-solid border-black"
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
            const filteredList = filterRating(allRestaurants);
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="p-4 flex items-center">
        <label>Context Check Label</label>
        <input
          type="text"
          className="mx-1 border border-black p-2"
          value={loggedInUser}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
