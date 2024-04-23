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
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
      <h4>Cost for two: {costForTwo}</h4>
    </div>
  );
};

export default RestrauntCard;
