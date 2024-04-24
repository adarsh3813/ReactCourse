// Names import
import { IMG_CDN_URL } from "../constants";

// Used destructuring of props object restaurant
// Can also use props
const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  costForTwo,
}) => {
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-slate-100 hover:bg-slate-200">
      <img className="rounded-lg" src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="py-4 font-bold text-lg">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
      <h4>Cost for two: {costForTwo}</h4>
    </div>
  );
};

// Higher order function (RestaurantCard => RestaurantCardPromoted)
export const withOpenLabel = (RestrauntCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white p-2 rounded-lg">
          Open
        </label>
        <RestrauntCard {...props} />
      </div>
    );
  };
};

export default RestrauntCard;
