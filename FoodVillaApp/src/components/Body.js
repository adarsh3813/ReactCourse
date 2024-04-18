import { Link } from "react-router-dom";
import RestrauntCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

import { useEffect, useState } from "react";

function filterData(name, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant.info.name.includes(name)
  );
}

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
          // e.target.value => whatever we write in input
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

const Body = () => {
  // searchInput is a local state variable
  // returns = [variable name, set function]
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  // empty dependency array => once after render
  // dep_array[searchText] => once initially after render, then after everytime after render, when state of dependency changes
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setAllRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : filteredRestaurants.length === 0 ? (
    <>
      <SearchBar
        allRestaurants={allRestaurants}
        setFilteredRestaurants={setFilteredRestaurants}
      />
      <h2>No matching Restaurants</h2>
    </>
  ) : (
    <>
      <SearchBar
        allRestaurants={allRestaurants}
        setFilteredRestaurants={setFilteredRestaurants}
      />
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant.info.id}
            >
              <RestrauntCard {...restaurant.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
