import { useState, useEffect } from "react";
import { RESTAURANT_MENU_URL } from "../constants";

const restaurantMenu = (restaurantId) => {
  const [restaurantData, setRestaurantData] = useState(null);
  const [restaurantInfo, setRestaurantInfo] = useState();

  useEffect(() => {
    getRestaurantData();
  }, []);

  async function getRestaurantData() {
    const data = await fetch(RESTAURANT_MENU_URL + restaurantId);
    const json = await data.json();
    setRestaurantData(
      json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards
    );
    setRestaurantInfo(json.data.cards[2].card.card.info);
  }

  return [restaurantData, restaurantInfo];
};

export default restaurantMenu;
