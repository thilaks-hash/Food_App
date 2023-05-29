import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import reslist from "../utils/mockdata";
import Shimmer from "../component/Shimmer";

function filterData(searchText, allRestaurant) {
  const filterData = allRestaurant.filter((res) =>
    res?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filterData;
}
console.log(reslist);
const Body = () => {
  const [allRestaurant, setallRestaurant] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchText, setsearchText] = useState("");

  //useEffect
  useEffect(() => {
    //api call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0171794&lng=76.954584&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setallRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setfilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  }
  console.log("render");

  return filteredRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = allRestaurant.filter(
              (res) => res.data.avgRating > 4
            );
            setfilteredRestaurant(filteredList);
          }}
        >
          Top rated restaurant
        </button>
        <div className="search-container">
          <input
            type="text"
            className="searchtext"
            placeholder="search"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          ></input>

          <button
            className="search-btn"
            onClick={() => {
              const searchList = filterData(searchText, allRestaurant);
              setfilteredRestaurant(searchList);
            }}
          >
            search
          </button>
        </div>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
