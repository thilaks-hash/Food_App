import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import useRestaurant from "../utils/useRestaurant";
import { CDN_URL } from "../utils/constant";
import Shimmer from "../component/Shimmer";

const RestaurantMenu = () => {
  const { id } = useParams();

  //const restaurant = useRestaurant(resId);
  // const useRestaurant = (resId) => {
  //   console.log(resId);
  // const [restaurant, setRestaurant] = useState(null);
  const [restaurantMenu, setRestaurantMenu] = useState({});
  useEffect(() => {
    getRestaurantInfo();
  }, []);
  async function getRestaurantInfo() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-%20menu=true&lat=12.9395989&lng=77.728955&restaurantId=7622&submitAction=ENTER%22"
      );
      const json = data.json();
      console.log(json);
      setRestaurantMenu(json);
      console.log(restaurantMenu);
    } catch (error) {
      console.log("Error", error);
    }
  }

  return (
    <div>
      <h1>Restaurant id: {id}</h1>
      <h2>{restaurantMenu.name}</h2>
      {/* <img src={CDN_URL + restaurantMenu.cloudinaryImageId} />
      <h2>{restaurantMenu.areaName}</h2> */}
    </div>
  );
};
export default RestaurantMenu;
