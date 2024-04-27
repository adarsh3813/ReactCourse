import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { IMG_CDN_URL } from "../constants";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-grey-200 border-b-4 flex justify-between"
        >
          <div className="py-2 w-9/12">
            <span className="font-bold text-gray-800">
              {item.card.info.name}
            </span>
            <span className="text-gray-800 font-bold">
              - ₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
            <p className="text-sm py-2">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 px-2">
            <div className="absolute">
              <button
                className="-mx-4 rounded-lg p-2 bg-green-700 text-white shadow-lg"
                onClick={() => handleAddItem(item)}
              >
                Add+
              </button>
            </div>
            <img
              className="w-28 rounded-md"
              src={IMG_CDN_URL + item.card.info.imageId}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
