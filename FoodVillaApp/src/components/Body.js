import { restaurantList } from "../config";
import RestrauntCard from "./RestaurantCard";

import { useState } from "react";

function filterData(name, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant.info.name.includes(name)
  );
}

const Body = () => {
  // searchInput is a local state variable
  const [searchInput, setSearchInput] = useState(""); //returns = [variable name, set function]
  const [restaurants, setRestaurants] = useState(restaurantList);

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            // e.target.value => whatever we write in input
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchInput, restaurantList);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurantList">
        {restaurants.map((restaurant) => {
          return (
            <RestrauntCard {...restaurant.info} key={restaurant.info.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
