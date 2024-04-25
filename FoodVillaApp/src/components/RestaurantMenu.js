import { useParams } from "react-router-dom";
import { useState } from "react";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();
  const [restaurantData, restaurantInfo] = useRestaurantMenu(restaurantId);
  const [showIndex, setShowIndex] = useState(0);

  const categories = restaurantData?.filter((c) => {
    return (
      c.card?.card?.["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  });

  return !restaurantData ? (
    <Shimmer />
  ) : (
    <div>
      <div className="py-4 flex justify-evenly border-b-8">
        <div className="w-1/2">
          <h1 className="font-bold my-6 text-4xl">{restaurantInfo?.name}</h1>
          <h3 className="font-bold my-2 text-lg">
            📌{restaurantInfo?.locality}, {restaurantInfo?.areaName}
          </h3>
          <h3 className="font-bold my-2 text-lg">
            {restaurantInfo?.cuisines.join(", ")} -{" "}
            {restaurantInfo?.costForTwoMessage}
          </h3>
          <h2 className="font-bold my-2 text-lg">
            {restaurantInfo?.avgRating}⭐
          </h2>
        </div>
        <div>
          <img
            className="size-72 rounded-md"
            src={IMG_CDN_URL + restaurantInfo?.cloudinaryImageId}
          />
        </div>
      </div>
      <div>
        {categories.map((category, index) => (
          // Controlled Component
          <RestaurantCategory
            key={category?.card?.card?.title}
            cardData={category?.card?.card}
            showItem={index === showIndex && true}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
