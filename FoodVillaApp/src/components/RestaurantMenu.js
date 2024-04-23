import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();
  const [restaurantData, restaurantInfo] = useRestaurantMenu(restaurantId);

  return !restaurantData ? (
    <Shimmer />
  ) : (
    <div className="restaurant-menu">
      <div className="restaurant-card">
        <img src={IMG_CDN_URL + restaurantInfo?.cloudinaryImageId} />
        <h2>{restaurantInfo?.name}</h2>
        <h2>
          📌 {restaurantInfo?.locality}, {restaurantInfo?.areaName}
        </h2>
      </div>
      <div className="menu">
        <h2>Menu</h2>
        <div className="restaurant-item-group">
          {restaurantData.map((e) => {
            const item = e.card.card;
            if (item["@type"].includes("v2.ItemCategory")) {
              return (
                <div key={item.title} className="restaurant-single-item-card">
                  <h3>{item.title}</h3>
                  <div>
                    {item.itemCards.map((card) => (
                      <div key={card.card.info.id}>
                        <h4>{card.card.info.name}</h4>
                        <p>{card.card.info.description}</p>
                        <p>Price: {card.card.info.price}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
