import { useState, useEffect } from "react";
import { GET_RESTAURANT_LIST_URL } from "../constants";

const useAllRestaurants = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  // empty dependency array => once after render
  // dep_array[searchText] => once initially after render, then after everytime after render, when state of dependency changes
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(GET_RESTAURANT_LIST_URL);
    const json = await data.json();
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setAllRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  return [allRestaurants, filteredRestaurants, setFilteredRestaurants];
};

export default useAllRestaurants;
