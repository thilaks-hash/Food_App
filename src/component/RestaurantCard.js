import { CDN_URL } from "../utils/constant";
const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cusinies,
    avgRating,
    costForTwo,
    deliveryTime,
    cloudinaryImageId,
  } = resData?.data;
  return (
    <div className="res-cards">
      {/* style={styleCard}  */}
      <img
        alt="res-logo"
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <h4>{cusinies}</h4>
      <h4>{avgRating}stars</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime}mins</h4>
    </div>
  );
};
export default RestaurantCard;
