import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ cardData, showItem, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      <div className="w-1/2 mx-auto my-6 bg-gray-100 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {cardData.title}({cardData.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {showItem && <ItemList items={cardData.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
