import { Link } from "react-router-dom";
import RestrauntCard, { withOpenLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import SearchBar from "./SearchBar";
import useAllRestaurants from "../utils/useAllRestaurants";
import useIsOnline from "../utils/useIsOnline";

const Body = () => {
  const [allRestaurants, filteredRestaurants, setFilteredRestaurants] =
    useAllRestaurants();
  const isOnline = useIsOnline();
  const RestaurantCardOpen = withOpenLabel(RestrauntCard);

  if (!isOnline) {
    return (
      <>
        <h1> ❌You are not online❌</h1>
        <h2>Check Your Internet Connection</h2>
      </>
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
      <div className="px-10 flex flex-wrap">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant.info.id}
            >
              {restaurant.info.isOpen ? (
                <RestaurantCardOpen {...restaurant.info} />
              ) : (
                <RestrauntCard {...restaurant.info} />
              )}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
